import React, { useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface InteractiveTiltProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  scale?: number;
  perspective?: number;
}

export function InteractiveTilt({
  children,
  className,
  maxTilt = 10,
  scale = 1.02,
  perspective = 1000,
  ...props
}: InteractiveTiltProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [transformStyle, setTransformStyle] = useState("");
  const [spotlightPos, setSpotlightPos] = useState<{ x: number; y: number; opacity: number }>({
    x: 0,
    y: 0,
    opacity: 0,
  });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      // Mouse position from center (-0.5 to 0.5)
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;

      // Calculate tilt angles
      const rotateX = -(yPct * maxTilt).toFixed(2);
      const rotateY = (xPct * maxTilt).toFixed(2);

      setTransformStyle(
        `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`
      );

      setSpotlightPos({
        x: mouseX,
        y: mouseY,
        opacity: 1,
      });
    },
    [maxTilt, scale, perspective]
  );

  const handleMouseLeave = useCallback(() => {
    setTransformStyle(
      `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`
    );
    setSpotlightPos((prev) => ({ ...prev, opacity: 0 }));
  }, [perspective]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        transformStyle: "preserve-3d",
        transition: transformStyle ? "transform 150ms cubic-bezier(0.16, 1, 0.3, 1)" : "transform 700ms cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className={cn("relative will-change-transform", className)}
      {...props}
    >
      {/* Dynamic Cursor Spotlight Layer */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] transition-opacity duration-500 ease-out"
        style={{
          opacity: spotlightPos.opacity,
          background: `radial-gradient(circle 380px at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(255, 143, 0, 0.22), rgba(56, 189, 248, 0.12) 40%, transparent 75%)`,
        }}
      />
      {children}
    </div>
  );
}
