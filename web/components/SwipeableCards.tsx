"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./SwipeableCards.module.css";

interface SwipeableCardsProps {
  /** One ReactNode per card. */
  items: ReactNode[];
  /** Accessible label describing the collection (e.g. "Daftar masalah rekrutmen"). */
  ariaLabel: string;
  /** Number of grid columns to use on desktop when NOT in auto-slide mode. */
  desktopColumns?: number;
  /**
   * Force auto-slide carousel mode regardless of item count.
   * Per SKILL.md rule: >=10 items MUST use auto-slide carousel on all breakpoints.
   */
  autoSlide?: boolean;
  /** Auto-slide interval in ms. */
  intervalMs?: number;
}

/**
 * SwipeableCards — native CSS horizontal scroll (SKILL.md GATE 3 poin 7).
 *
 * < 10 items: desktop grid, mobile native horizontal scroll-snap with
 * pagination dots visible on mobile only.
 * >= 10 items (or autoSlide=true): auto-slide carousel active on every
 * breakpoint, driven by setInterval mutating scrollLeft (never transform).
 */
export default function SwipeableCards({
  items,
  ariaLabel,
  desktopColumns = 3,
  autoSlide,
  intervalMs = 3000,
}: SwipeableCardsProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const isCarousel = autoSlide ?? items.length >= 10;

  const scrollToIndex = useCallback((index: number) => {
    const track = trackRef.current;
    const card = cardRefs.current[index];
    if (!track || !card) return;
    track.scrollTo({
      left: card.offsetLeft - track.offsetLeft,
      behavior: "smooth",
    });
  }, []);

  const goTo = useCallback(
    (index: number) => {
      const clamped = (index + items.length) % items.length;
      setActiveIndex(clamped);
      scrollToIndex(clamped);
    },
    [items.length, scrollToIndex]
  );

  // Auto-slide loop for >=10 item collections (carousel mode)
  useEffect(() => {
    if (!isCarousel) return;
    const id = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % items.length;
        scrollToIndex(next);
        return next;
      });
    }, intervalMs);
    return () => clearInterval(id);
  }, [isCarousel, items.length, intervalMs, scrollToIndex]);

  // Sync activeIndex with manual scroll (touch/mouse drag)
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const trackRect = track.getBoundingClientRect();
        const center = trackRect.left + trackRect.width / 2;
        let closest = 0;
        let closestDist = Infinity;
        cardRefs.current.forEach((card, i) => {
          if (!card) return;
          const rect = card.getBoundingClientRect();
          const dist = Math.abs(rect.left + rect.width / 2 - center);
          if (dist < closestDist) {
            closestDist = dist;
            closest = i;
          }
        });
        setActiveIndex(closest);
        ticking = false;
      });
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(activeIndex + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(activeIndex - 1);
    }
  };

  return (
    <div>
      <div
        ref={trackRef}
        className={`${styles.track} ${!isCarousel ? styles.gridOnDesktop : ""}`}
        style={
          !isCarousel
            ? ({ "--cols": desktopColumns } as React.CSSProperties)
            : undefined
        }
        role="group"
        aria-label={ariaLabel}
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        {items.map((item, i) => (
          <div
            key={i}
            ref={(node) => {
              cardRefs.current[i] = node;
            }}
            className={styles.card}
          >
            {item}
          </div>
        ))}
      </div>

      {isCarousel && (
        <div className={`${styles.arrows} ${styles.carouselArrows}`}>
          <button
            type="button"
            className={styles.arrowBtn}
            aria-label={`Sebelumnya — ${ariaLabel}`}
            title="Sebelumnya"
            onClick={() => goTo(activeIndex - 1)}
          >
            <ChevronLeft size={20} aria-hidden="true" />
          </button>
          <button
            type="button"
            className={styles.arrowBtn}
            aria-label={`Berikutnya — ${ariaLabel}`}
            title="Berikutnya"
            onClick={() => goTo(activeIndex + 1)}
          >
            <ChevronRight size={20} aria-hidden="true" />
          </button>
        </div>
      )}

      <div className={`${styles.dots} ${!isCarousel ? styles.mobileOnly : ""}`}>
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`${styles.dot} ${i === activeIndex ? styles.active : ""}`}
            aria-label={`Ke item ${i + 1} dari ${items.length} — ${ariaLabel}`}
            title={`Item ${i + 1}`}
            tabIndex={0}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}
