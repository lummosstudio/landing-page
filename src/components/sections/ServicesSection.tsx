import React, { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Camera,
  Video,
  Scissors,
  Clapperboard,
  PenTool,
  Megaphone,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/ScrollReveal";

interface ServiceItem {
  id: string;
  icon: LucideIcon;
  tag: string;
  title: string;
  description: string;
  accent: string;
  badgeBg: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: "marketing",
    icon: Camera,
    tag: "Growth Marketing",
    title: "Digital Marketing",
    description:
      "Integrated ROI-driven campaigns that turn online attention into predictable revenue and qualified inbound leads.",
    accent: "text-amber-500 group-hover:text-amber-500",
    badgeBg: "bg-amber-500/10 text-amber-600 border-amber-500/20",
  },
  {
    id: "social",
    icon: Video,
    tag: "Viral Reach",
    title: "Social Media Strategy",
    description:
      "Platform-ready content, reels, and community systems that build brand authority and active consumer engagement.",
    accent: "text-sky-500 group-hover:text-sky-500",
    badgeBg: "bg-sky-500/10 text-sky-600 border-sky-500/20",
  },
  {
    id: "content",
    icon: Scissors,
    tag: "High-Retention",
    title: "Creative Content & Reels",
    description:
      "Distinctive storytelling, commercial product shoots, and viral short-form videos designed to stop the scroll.",
    accent: "text-brand-coral group-hover:text-brand-coral",
    badgeBg: "bg-brand-coral/10 text-brand-coral border-brand-coral/20",
  },
  {
    id: "ads",
    icon: Clapperboard,
    tag: "High ROAS",
    title: "Paid Advertising (Meta & Google)",
    description:
      "Precision-targeted ad campaigns with constant A/B testing engineered to maximize return on ad spend.",
    accent: "text-emerald-500 group-hover:text-emerald-500",
    badgeBg: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
  },
  {
    id: "seo",
    icon: PenTool,
    tag: "Top Rankings",
    title: "SEO & Local Growth",
    description:
      "Search visibility and Google Maps domination that drives organic customer acquisition and local foot traffic.",
    accent: "text-indigo-500 group-hover:text-indigo-500",
    badgeBg: "bg-indigo-500/10 text-indigo-600 border-indigo-500/20",
  },
  {
    id: "branding",
    icon: Megaphone,
    tag: "Brand Identity",
    title: "Branding & Visual Systems",
    description:
      "Memorable visual identities, logo marks, tone of voice, and brand guidelines that build enduring trust.",
    accent: "text-amber-500 group-hover:text-amber-500",
    badgeBg: "bg-amber-500/10 text-amber-600 border-amber-500/20",
  },
];

export function ServicesSection() {
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const isHoveredRef = useRef(false);

  // 100% Robust RequestAnimationFrame Auto-Scroll Loop
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let isUserInteracting = false;

    const autoScroll = () => {
      if (!isPaused && !isHoveredRef.current && !isUserInteracting && container) {
        // Increment horizontal scroll position smoothly
        container.scrollLeft += 0.95;

        // When halfway through the duplicated list, loop back seamlessly
        const halfWidth = container.scrollWidth / 2;
        if (container.scrollLeft >= halfWidth) {
          container.scrollLeft -= halfWidth;
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    // Pause while user is manually dragging or touching
    const onTouchStart = () => {
      isUserInteracting = true;
    };
    const onTouchEnd = () => {
      setTimeout(() => {
        isUserInteracting = false;
      }, 1000);
    };

    container.addEventListener("touchstart", onTouchStart, { passive: true });
    container.addEventListener("touchend", onTouchEnd, { passive: true });
    container.addEventListener("mousedown", onTouchStart, { passive: true });
    window.addEventListener("mouseup", onTouchEnd, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchend", onTouchEnd);
      container.removeEventListener("mousedown", onTouchStart);
      window.removeEventListener("mouseup", onTouchEnd);
    };
  }, [isPaused]);

  // Manual scroll step buttons
  const scrollStep = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const amount = direction === "left" ? -340 : 340;
    scrollContainerRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  // Duplicated list for infinite seamless wrap-around
  const duplicatedServices = [...SERVICES, ...SERVICES, ...SERVICES];

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative overflow-hidden bg-background py-16 sm:py-20 lg:py-24 border-y border-border/40"
    >
      {/* Background ambient light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-0 -z-10 size-[420px] -translate-y-1/2 rounded-full bg-brand-amber/5 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-0 -z-10 size-[420px] -translate-y-1/2 rounded-full bg-accent-blue/5 blur-[120px]"
      />

      {/* 
        ================================================================
        CONTAINER WITH CONSISTENT SITE MARGINS (max-w-[1240px])
        Matches the exact left & right margins of Hero, Parallax, 
        Work, Process, Header and Footer for 100% design consistency!
        ================================================================
      */}
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        
        {/* Header Row */}
        <Reveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1 text-[11.5px] font-bold tracking-[0.14em] text-navy uppercase shadow-soft-xs">
                <Sparkles className="size-3.5 text-brand-amber" />
                <span>What We Do</span>
              </div>
              <h2
                id="services-heading"
                className="mt-3 text-[clamp(1.75rem,3.5vw,2.6rem)] leading-[1.15] font-extrabold tracking-[-0.03em] text-navy"
              >
                We Turn Ideas Into{" "}
                <span className="text-brand-gradient">Digital Growth.</span>
              </h2>
            </div>

            {/* Controls Bar: Pause toggle & Manual Arrows */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsPaused(!isPaused)}
                aria-label={isPaused ? "Resume auto-scroll" : "Pause auto-scroll"}
                className="inline-flex h-10 items-center gap-1.5 rounded-xl border border-border bg-card px-3.5 text-[12.5px] font-semibold text-navy shadow-soft-xs transition-all hover:bg-secondary active:scale-95"
              >
                {isPaused ? (
                  <>
                    <Play className="size-3.5 text-emerald-600 fill-current" />
                    <span>Auto-Scroll</span>
                  </>
                ) : (
                  <>
                    <Pause className="size-3.5 text-muted-foreground fill-current" />
                    <span>Pause</span>
                  </>
                )}
              </button>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => scrollStep("left")}
                  aria-label="Scroll services left"
                  className="flex size-10 items-center justify-center rounded-xl border border-border bg-card text-navy shadow-soft-xs transition-all hover:bg-secondary active:scale-95"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollStep("right")}
                  aria-label="Scroll services right"
                  className="flex size-10 items-center justify-center rounded-xl border border-border bg-card text-navy shadow-soft-xs transition-all hover:bg-secondary active:scale-95"
                >
                  <ChevronRight className="size-5" />
                </button>
              </div>

              <Button
                asChild
                className="hidden sm:inline-flex h-10 rounded-xl bg-navy px-4 text-[13px] font-semibold text-primary-foreground shadow-navy-btn hover:bg-navy/90"
              >
                <Link to="/contact">
                  Start Project
                  <ArrowRight className="ml-1.5 size-3.5" />
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>

        {/* 
          ================================================================
          CAROUSEL CONTAINER
          Contained inside the 1240px grid with soft edge fade masks
          ================================================================
        */}
        <div 
          className="relative mt-8 sm:mt-10 overflow-hidden rounded-3xl"
          onMouseEnter={() => {
            isHoveredRef.current = true;
          }}
          onMouseLeave={() => {
            isHoveredRef.current = false;
          }}
        >
          {/* Soft edge gradient fade masks */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-20 w-8 sm:w-16 bg-gradient-to-r from-background to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-20 w-8 sm:w-16 bg-gradient-to-l from-background to-transparent"
          />

          {/* Smooth Hardware-Accelerated Auto-Scrolling Track */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto no-scrollbar py-3 cursor-grab active:cursor-grabbing select-none"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <div className="flex shrink-0 gap-5 px-2">
              {duplicatedServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <article
                    key={`${service.id}-${index}`}
                    className="group relative flex w-[290px] sm:w-[325px] shrink-0 flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-soft-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-amber/60 hover:shadow-soft-hover"
                  >
                    {/* Top card accent line on hover */}
                    <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-transparent via-brand-amber to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div>
                      {/* Top row: Icon & Tag */}
                      <div className="flex items-center justify-between">
                        <div className="inline-flex size-11 items-center justify-center rounded-xl bg-secondary/80 text-navy transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-amber/15 group-hover:text-brand-amber">
                          <Icon className="size-5" strokeWidth={1.8} aria-hidden="true" />
                        </div>
                        <span
                          className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10.5px] font-bold uppercase tracking-wider ${service.badgeBg}`}
                        >
                          {service.tag}
                        </span>
                      </div>

                      <h3 className="mt-5 text-[16.5px] font-bold tracking-tight text-navy transition-colors group-hover:text-brand-coral">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-[13px] leading-[1.65] text-muted-foreground">
                        {service.description}
                      </p>
                    </div>

                    {/* Card bottom link indicator */}
                    <div className="mt-6 pt-3.5 border-t border-border/50 flex items-center justify-between text-[12.5px] font-bold text-navy group-hover:text-brand-coral transition-colors">
                      <span className="text-[11.5px] uppercase tracking-wider text-muted-foreground group-hover:text-navy">
                        Explore Service
                      </span>
                      <span className="flex size-6 items-center justify-center rounded-full bg-secondary text-navy transition-all duration-300 group-hover:bg-brand-coral group-hover:text-white group-hover:translate-x-1">
                        <ArrowRight className="size-3" strokeWidth={2.5} />
                      </span>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
