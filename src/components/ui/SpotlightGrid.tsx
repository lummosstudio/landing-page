import React, { createContext, useContext, useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface MouseCoordinates {
  clientX: number;
  clientY: number;
  opacity: number;
}

const SpotlightContext = createContext<{
  mousePos: MouseCoordinates;
  setMousePos: React.Dispatch<React.SetStateAction<MouseCoordinates>>;
}>({
  mousePos: { clientX: 0, clientY: 0, opacity: 0 },
  setMousePos: () => {},
});

export function SpotlightGrid({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const [mousePos, setMousePos] = useState<MouseCoordinates>({ clientX: 0, clientY: 0, opacity: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    setMousePos({
      clientX: e.clientX,
      clientY: e.clientY,
      opacity: 1,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMousePos((prev) => ({ ...prev, opacity: 0 }));
  }, []);

  return (
    <SpotlightContext.Provider value={{ mousePos, setMousePos }}>
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cn("relative group/grid", className)}
        {...props}
      >
        {children}
      </div>
    </SpotlightContext.Provider>
  );
}

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

export function SpotlightCard({
  children,
  className,
  spotlightColor = "rgba(255, 143, 0, 0.20)",
  ...props
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const { mousePos } = useContext(SpotlightContext);

  let relativeX = 0;
  let relativeY = 0;

  if (cardRef.current && mousePos.opacity > 0) {
    const cardRect = cardRef.current.getBoundingClientRect();
    relativeX = mousePos.clientX - cardRect.left;
    relativeY = mousePos.clientY - cardRect.top;
  }

  return (
    <div
      ref={cardRef}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-border bg-card p-6 sm:p-7 shadow-soft-xs transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-amber/60 hover:shadow-soft-hover",
        className
      )}
      {...props}
    >
      {/* Global Cursor Spotlight Glow flowing across this card */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500 ease-out"
        style={{
          opacity: mousePos.opacity,
          background: `radial-gradient(circle 360px at ${relativeX}px ${relativeY}px, ${spotlightColor}, rgba(56, 189, 248, 0.10) 45%, transparent 75%)`,
        }}
      />

      {/* Top ambient card glow line on hover */}
      <div className="absolute inset-x-0 top-0 z-10 h-1 rounded-t-3xl bg-gradient-to-r from-transparent via-brand-amber to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">{children}</div>
    </div>
  );
}

