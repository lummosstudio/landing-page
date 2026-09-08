import React, { useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface MagneticCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  floatDuration?: number;
  floatDelay?: number;
}

export function MagneticCard({
  children,
  className,
  strength = 0.25,
  floatDuration = 4,
  floatDelay = 0,
  ...props
}: MagneticCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const card = cardRef.current;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const x = (e.clientX - centerX) * strength;
      const y = (e.clientY - centerY) * strength;
      setOffset({ x, y });
    },
    [strength]
  );

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setOffset({ x: 0, y: 0 });
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered
          ? `translate3d(${offset.x}px, ${offset.y}px, 0) scale(1.04)`
          : undefined,
        animation: isHovered
          ? "none"
          : `float-badge ${floatDuration}s ease-in-out infinite ${floatDelay}s`,
        transition: isHovered
          ? "transform 100ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 300ms ease, border-color 300ms ease"
          : "transform 600ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 400ms ease, border-color 400ms ease",
      }}
      className={cn(
        "group relative select-none will-change-transform",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
