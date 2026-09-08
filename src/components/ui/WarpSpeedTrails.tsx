import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface StreakConfig {
  id: number;
  left: number; // percentage (0 - 100)
  topOffset: number; // percentage (0 to 100)
  width: number; // px (6 to 18)
  maxHeight: number; // max stretched height (px)
  speed: number; // multiplier (e.g., 1.5x to 2.8x faster)
  gradient: string; // CSS linear gradient
  glowColor: string; // Glow rgba
  opacity: number;
}

const STREAKS: StreakConfig[] = [
  { id: 1, left: 4, topOffset: 16, width: 8, maxHeight: 110, speed: 1.5, gradient: "linear-gradient(180deg, #38bdf8 0%, #818cf8 100%)", glowColor: "rgba(56, 189, 248, 0.35)", opacity: 0.65 },
  { id: 2, left: 9, topOffset: 58, width: 9, maxHeight: 115, speed: 1.55, gradient: "linear-gradient(180deg, #ff8f00 0%, #ff5252 100%)", glowColor: "rgba(255, 143, 0, 0.4)", opacity: 0.7 },
  { id: 3, left: 14, topOffset: 25, width: 7, maxHeight: 105, speed: 1.48, gradient: "linear-gradient(180deg, #c084fc 0%, #f472b6 100%)", glowColor: "rgba(192, 132, 252, 0.35)", opacity: 0.6 },
  { id: 4, left: 19, topOffset: 75, width: 9, maxHeight: 120, speed: 1.6, gradient: "linear-gradient(180deg, #38bdf8 0%, #6366f1 100%)", glowColor: "rgba(99, 102, 241, 0.35)", opacity: 0.7 },
  { id: 5, left: 24, topOffset: 38, width: 8, maxHeight: 110, speed: 1.52, gradient: "linear-gradient(180deg, #ffb300 0%, #ff6b35 100%)", glowColor: "rgba(255, 179, 0, 0.35)", opacity: 0.65 },
  { id: 6, left: 29, topOffset: 12, width: 9, maxHeight: 115, speed: 1.54, gradient: "linear-gradient(180deg, #e879f9 0%, #38bdf8 100%)", glowColor: "rgba(232, 121, 249, 0.35)", opacity: 0.7 },
  { id: 7, left: 34, topOffset: 65, width: 8, maxHeight: 110, speed: 1.5, gradient: "linear-gradient(180deg, #ff8f00 0%, #ff5252 100%)", glowColor: "rgba(255, 143, 0, 0.35)", opacity: 0.65 },
  { id: 8, left: 39, topOffset: 48, width: 10, maxHeight: 125, speed: 1.58, gradient: "linear-gradient(180deg, #38bdf8 0%, #a855f7 100%)", glowColor: "rgba(56, 189, 248, 0.4)", opacity: 0.75 },
  { id: 9, left: 44, topOffset: 20, width: 8, maxHeight: 110, speed: 1.48, gradient: "linear-gradient(180deg, #fb923c 0%, #f43f5e 100%)", glowColor: "rgba(251, 146, 60, 0.35)", opacity: 0.65 },
  { id: 10, left: 49, topOffset: 72, width: 9, maxHeight: 115, speed: 1.54, gradient: "linear-gradient(180deg, #818cf8 0%, #c084fc 100%)", glowColor: "rgba(129, 140, 248, 0.35)", opacity: 0.7 },
  { id: 11, left: 54, topOffset: 32, width: 8, maxHeight: 110, speed: 1.5, gradient: "linear-gradient(180deg, #ff8f00 0%, #ffb300 100%)", glowColor: "rgba(255, 143, 0, 0.35)", opacity: 0.65 },
  { id: 12, left: 59, topOffset: 85, width: 9, maxHeight: 120, speed: 1.56, gradient: "linear-gradient(180deg, #38bdf8 0%, #ec4899 100%)", glowColor: "rgba(56, 189, 248, 0.35)", opacity: 0.7 },
  { id: 13, left: 64, topOffset: 16, width: 8, maxHeight: 110, speed: 1.5, gradient: "linear-gradient(180deg, #ff8f00 0%, #ff5252 100%)", glowColor: "rgba(255, 143, 0, 0.35)", opacity: 0.65 },
  { id: 14, left: 69, topOffset: 52, width: 8, maxHeight: 110, speed: 1.52, gradient: "linear-gradient(180deg, #c084fc 0%, #38bdf8 100%)", glowColor: "rgba(192, 132, 252, 0.35)", opacity: 0.65 },
  { id: 15, left: 74, topOffset: 28, width: 9, maxHeight: 115, speed: 1.55, gradient: "linear-gradient(180deg, #38bdf8 0%, #818cf8 100%)", glowColor: "rgba(56, 189, 248, 0.35)", opacity: 0.7 },
  { id: 16, left: 79, topOffset: 74, width: 8, maxHeight: 110, speed: 1.48, gradient: "linear-gradient(180deg, #ffb300 0%, #ff6b35 100%)", glowColor: "rgba(255, 179, 0, 0.35)", opacity: 0.65 },
  { id: 17, left: 84, topOffset: 18, width: 9, maxHeight: 120, speed: 1.58, gradient: "linear-gradient(180deg, #e879f9 0%, #38bdf8 100%)", glowColor: "rgba(232, 121, 249, 0.35)", opacity: 0.7 },
  { id: 18, left: 89, topOffset: 62, width: 8, maxHeight: 110, speed: 1.5, gradient: "linear-gradient(180deg, #ff8f00 0%, #ff5252 100%)", glowColor: "rgba(255, 143, 0, 0.35)", opacity: 0.65 },
  { id: 19, left: 94, topOffset: 35, width: 9, maxHeight: 115, speed: 1.52, gradient: "linear-gradient(180deg, #38bdf8 0%, #a855f7 100%)", glowColor: "rgba(56, 189, 248, 0.4)", opacity: 0.7 },
  { id: 20, left: 98, topOffset: 78, width: 8, maxHeight: 105, speed: 1.48, gradient: "linear-gradient(180deg, #fb923c 0%, #f43f5e 100%)", glowColor: "rgba(251, 146, 60, 0.35)", opacity: 0.6 },
];

interface WarpSpeedTrailsProps {
  className?: string;
}

export function WarpSpeedTrails({ className }: WarpSpeedTrailsProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isVisible = false;
    let animationFrameId: number;

    let lastScrollY = window.scrollY;
    let smoothVelocity = 0;
    let scrollDeltaAccumulator = 0;

    // IntersectionObserver to only animate when in view
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]) {
          isVisible = entries[0].isIntersecting;
        }
      },
      { threshold: 0.02 }
    );
    observer.observe(container);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;
      scrollDeltaAccumulator += delta;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const render = () => {
      if (isVisible && container) {
        // Smooth out the scroll velocity
        smoothVelocity += (scrollDeltaAccumulator - smoothVelocity) * 0.22;
        scrollDeltaAccumulator *= 0.75;

        const rect = container.getBoundingClientRect();
        // Distance scrolled relative to the section top
        // As user scrolls down, rect.top decreases (section moves UP on screen)
        const sectionOffset = -rect.top;

        const absVelocity = Math.abs(smoothVelocity);
        const isScrollingDown = smoothVelocity >= 0;

        elementsRef.current.forEach((el, index) => {
          if (!el) return;
          const config = STREAKS[index];
          if (!config) return;

          // In the exact same direction as the content:
          // When scrolling down, content goes UP -> objects move UP faster
          // When scrolling up, content goes DOWN -> objects move DOWN faster
          const relativeParallax = -sectionOffset * (config.speed - 1.0);

          // Velocity stretch amount in pixels (from circular width up to maxHeight)
          const maxExtra = config.maxHeight - config.width;
          const stretchAmount = Math.min(absVelocity * 2.8 * (config.speed * 0.8), maxExtra);
          const currentHeight = config.width + stretchAmount;

          // When scrolling down, extend upwards by shifting the top boundary
          const stretchShift = isScrollingDown ? -stretchAmount : 0;
          const totalY = relativeParallax + stretchShift;

          el.style.transform = `translate3d(0, ${totalY.toFixed(1)}px, 0)`;
          el.style.height = `${currentHeight.toFixed(1)}px`;
        });
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden select-none",
        className
      )}
    >
      {STREAKS.map((streak, index) => (
        <div
          key={streak.id}
          ref={(el) => {
            elementsRef.current[index] = el;
          }}
          className="absolute will-change-transform rounded-full"
          style={{
            left: `${streak.left}%`,
            top: `${streak.topOffset}%`,
            width: `${streak.width}px`,
            height: `${streak.width}px`, // Exact circle at rest
            background: streak.gradient,
            boxShadow: `0 0 16px ${streak.glowColor}`,
            opacity: streak.opacity,
          }}
        />
      ))}
    </div>
  );
}
