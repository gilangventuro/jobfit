"use client";

import { useEffect, useRef, type ReactNode, type ElementType } from "react";
import anime from "animejs";

interface AnimatedSectionProps {
  children: ReactNode;
  /** HTML tag to render as. Defaults to "div". */
  as?: ElementType;
  /** Extra class name(s) applied to the wrapper element. */
  className?: string;
  /** Stagger delay (ms) applied to `.stagger-item` children. */
  staggerDelay?: number;
  /** Delay (ms) before the section's own reveal animation starts. */
  delay?: number;
  /** Optional DOM id, e.g. for in-page anchor links (`/#faq`). */
  id?: string;
}

/**
 * AnimatedSection — Anime.js + IntersectionObserver HOC (AGENTS.md Pasal III).
 *
 * Reveal is scroll-linked for real users (a section fades in as it enters
 * the viewport while scrolling down, and resets so it can play again on a
 * repeat pass) but scroll-linkage is never the ONLY path to visibility:
 *
 *  - A section already inside the viewport at mount time reveals
 *    immediately. It never waits for a future "scroll down" event, because
 *    on first paint there has been no scroll at all yet — waiting for one
 *    left above-the-fold content (Hero, etc.) permanently at opacity: 0.
 *  - Scroll direction defaults to "down" until an actual upward scroll is
 *    observed (scrollingDown starts `true`), so the very first
 *    IntersectionObserver callback — which can fire before any scroll
 *    event has ever been dispatched — is allowed to reveal the section
 *    instead of being blocked by an unresolved direction check.
 *  - A short fallback timer force-reveals the section regardless of how
 *    IntersectionObserver/scroll wiring behaves. This covers automated
 *    tools such as Playwright full-page screenshots, which render content
 *    beyond the real viewport (via CDP) WITHOUT ever dispatching a scroll
 *    event or making those elements intersect the actual viewport — so an
 *    observer-only trigger would leave them at opacity: 0 forever in the
 *    captured image even though the markup is otherwise correct.
 *
 * Sections still reset to hidden when they leave the viewport AFTER having
 * been shown at least once, so the reveal can legitimately replay on
 * repeated scroll passes — this is intentionally NOT `once: true`.
 */
export default function AnimatedSection({
  children,
  as: Tag = "div",
  className = "",
  staggerDelay = 100,
  delay = 0,
  id,
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const lastScrollY = useRef(0);
  const scrollingDown = useRef(true); // assume "down" until proven otherwise
  const hasShown = useRef(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      // Small dead-zone so sub-pixel/inertial jitter near scrollY 0 doesn't
      // flip the direction spuriously.
      if (currentY > lastScrollY.current + 2) scrollingDown.current = true;
      else if (currentY < lastScrollY.current - 2) scrollingDown.current = false;
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    const revealItems = () => {
      const items = el.querySelectorAll<HTMLElement>(".stagger-item");
      if (!items.length) return;
      anime.remove(items);
      anime({
        targets: items,
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 600,
        delay: anime.stagger(staggerDelay, { start: delay + 150 }),
        easing: "easeOutCubic",
      });
    };

    const reveal = () => {
      hasShown.current = true;
      anime.remove(el);
      anime({
        targets: el,
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 800,
        delay,
        easing: "easeOutCubic",
      });
      revealItems();
    };

    const hide = () => {
      anime.set(el, { opacity: 0, translateY: 30 });
      const items = el.querySelectorAll<HTMLElement>(".stagger-item");
      if (items.length) anime.set(items, { opacity: 0, translateY: 20 });
    };

    // A section already visible on mount must reveal right away — it can't
    // depend on a future "scroll down" gesture that may never happen (first
    // paint, or an automated tool that never dispatches a scroll event).
    const rect = el.getBoundingClientRect();
    const alreadyVisible = rect.top < window.innerHeight && rect.bottom > 0;

    if (alreadyVisible) {
      reveal();
    } else {
      hide();
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Always reveal the first time a section is ever seen; after
            // that only re-reveal while genuinely scrolling down, so a
            // rapid up/down wobble near the threshold doesn't flicker it.
            if (!hasShown.current || scrollingDown.current) {
              reveal();
            }
          } else if (hasShown.current) {
            // Only hide a section again once it has genuinely been shown
            // before. Never hide something that hasn't had its reveal fire
            // yet — that's exactly what left content stuck invisible.
            hasShown.current = false;
            hide();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);

    // Safety net: guarantee the section becomes visible shortly after mount
    // no matter how IntersectionObserver/scroll wiring behaves. This is what
    // protects automated full-page screenshots (content rendered beyond the
    // real viewport, never actually scrolled into it) and any browser edge
    // case where an intersection callback never fires in time.
    const fallback = window.setTimeout(() => {
      if (!hasShown.current) reveal();
    }, 900 + delay);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.clearTimeout(fallback);
      anime.remove(el);
      const items = el.querySelectorAll<HTMLElement>(".stagger-item");
      if (items.length) anime.remove(items);
      observer.disconnect();
    };
  }, [staggerDelay, delay]);

  const Wrapper = Tag as ElementType;

  return (
    <Wrapper ref={sectionRef} className={className} id={id}>
      {children}
    </Wrapper>
  );
}
