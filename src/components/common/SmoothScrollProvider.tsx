import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { useRouterState } from "@tanstack/react-router";

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  useEffect(() => {
    // Only run on client
    if (typeof window === "undefined") return;

    // On touch/mobile devices, prefer native hardware-accelerated momentum scrolling
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasFinePointer) {
      // Handle anchor clicks using native smooth scrolling for touch/mobile
      const handleMobileAnchorClick = (e: MouseEvent) => {
        const target = (e.target as HTMLElement).closest("a");
        if (!target) return;
        const href = target.getAttribute("href");
        const selector =
          href && href.startsWith("#") && href.length > 1
            ? href
            : href && href.startsWith("/#") && href.length > 2 && window.location.pathname === "/"
              ? href.slice(1)
              : null;
        if (selector) {
          const el = document.querySelector(selector);
          if (el instanceof HTMLElement) {
            e.preventDefault();
            el.scrollIntoView({ behavior: "smooth" });
          }
        }
      };

      document.addEventListener("click", handleMobileAnchorClick);
      return () => {
        document.removeEventListener("click", handleMobileAnchorClick);
      };
    }

    // Initialize Lenis smooth scroll for desktop/mouse users
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth exponential ease-out
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1,
    });

    lenisRef.current = lenis;

    // Attach to global window for convenience
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).lenis = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Handle hash links (e.g. href="#services")
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;
      const href = target.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        const el = document.querySelector(href);
        if (el instanceof HTMLElement) {
          e.preventDefault();
          lenis.scrollTo(el, { offset: -80, duration: 1.0 });
        }
      } else if (
        href &&
        href.startsWith("/#") &&
        href.length > 2 &&
        window.location.pathname === "/"
      ) {
        const hash = href.slice(1);
        const el = document.querySelector(hash);
        if (el instanceof HTMLElement) {
          e.preventDefault();
          lenis.scrollTo(el, { offset: -80, duration: 1.0 });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (window as any).lenis;
    };
  }, []);

  // Scroll to top on route path change (unless there's a hash)
  useEffect(() => {
    if (lenisRef.current && !window.location.hash) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [currentPath]);

  return <>{children}</>;
}
