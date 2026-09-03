"use client";

import { useEffect, useRef, useState } from "react";
import anime from "animejs";

interface StatCounterProps {
  /** Raw stat value, e.g. "500++", "90%", "40+". */
  value: string;
  label: string;
  className?: string;
  valueClassName?: string;
  labelClassName?: string;
}

/**
 * Renders a single stat with an Anime.js count-up animation that fires once
 * the element enters the viewport (PLAN-DESIGN-SYSTEM Section 6.5).
 */
export default function StatCounter({
  value,
  label,
  className,
  valueClassName,
  labelClassName,
}: StatCounterProps) {
  const numberRef = useRef<HTMLSpanElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [displayValue, setDisplayValue] = useState("0");

  const numericMatch = value.match(/[\d.]+/);
  const numericTarget = numericMatch ? parseFloat(numericMatch[0]) : 0;
  const prefix = numericMatch ? value.slice(0, numericMatch.index) : "";
  const suffix = numericMatch
    ? value.slice((numericMatch.index ?? 0) + numericMatch[0].length)
    : value;

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    let animated = false;
    const counter = { val: 0 };
    const runCountUp = () => {
      if (animated) return;
      animated = true;
      anime({
        targets: counter,
        val: numericTarget,
        duration: 1600,
        easing: "easeOutCubic",
        round: numericTarget % 1 === 0 ? 1 : 10,
        update: () => {
          setDisplayValue(String(counter.val));
        },
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) runCountUp();
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);

    // Safety net: same rationale as AnimatedSection — automated full-page
    // screenshot tools (and any IntersectionObserver edge case) may never
    // make this element "intersect" the real viewport, which would leave
    // the stat stuck at "0" forever. Force the count-up shortly after mount
    // if the observer hasn't already triggered it.
    const fallback = window.setTimeout(runCountUp, 900);

    return () => {
      window.clearTimeout(fallback);
      if (numberRef.current) anime.remove(numberRef.current);
      observer.disconnect();
    };
  }, [numericTarget]);

  return (
    <div ref={wrapperRef} className={className}>
      <span ref={numberRef} className={valueClassName}>
        {prefix}
        {displayValue}
        {suffix}
      </span>
      <p className={labelClassName}>{label}</p>
    </div>
  );
}
