import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type RevealDirection = "up" | "down" | "left" | "right" | "fade" | "scale" | "none";

interface RevealProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  direction?: RevealDirection;
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
  className?: string;
  as?: React.ElementType;
}

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 750,
  threshold = 0.12,
  once = true,
  className,
  as: Component = "div",
  style,
  ...props
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Check for reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold, once]);

  // Initial hidden styles based on direction
  const getInitialStyle = (): React.CSSProperties => {
    const transition = `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, filter ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`;

    if (isVisible) {
      return {
        opacity: 1,
        transform: "translate3d(0, 0, 0) scale(1)",
        filter: "blur(0px)",
        transition,
        willChange: "opacity, transform",
        ...style,
      };
    }

    let transform = "translate3d(0, 0, 0)";
    switch (direction) {
      case "up":
        transform = "translate3d(0, 32px, 0)";
        break;
      case "down":
        transform = "translate3d(0, -32px, 0)";
        break;
      case "left":
        transform = "translate3d(32px, 0, 0)";
        break;
      case "right":
        transform = "translate3d(-32px, 0, 0)";
        break;
      case "scale":
        transform = "scale(0.95)";
        break;
      case "none":
      case "fade":
      default:
        transform = "translate3d(0, 0, 0)";
        break;
    }

    return {
      opacity: 0,
      transform,
      filter: "blur(2px)",
      transition,
      willChange: "opacity, transform",
      ...style,
    };
  };

  return (
    <Component
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      style={getInitialStyle()}
      className={cn("reveal-element", className)}
      {...props}
    >
      {children}
    </Component>
  );
}

/**
 * RevealContainer creates automated staggered reveals for children elements.
 */
interface RevealContainerProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  staggerDelay?: number;
  direction?: RevealDirection;
  className?: string;
  as?: React.ElementType;
}

export function RevealContainer({
  children,
  staggerDelay = 90,
  direction = "up",
  className,
  as: Component = "div",
  ...props
}: RevealContainerProps) {
  return (
    <Component className={className} {...props}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;
        return (
          <Reveal direction={direction} delay={index * staggerDelay}>
            {child}
          </Reveal>
        );
      })}
    </Component>
  );
}
