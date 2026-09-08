import React, { useEffect, useState } from "react";
import {
  Compass,
  Target,
  Wand2,
  Zap,
  TrendingUp,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Reveal } from "@/components/ui/ScrollReveal";
import processCamera from "@/assets/process-camera.webp";

interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  theme: {
    iconColor: string;
    tintBg: string;
    podBorder: string;
    podShadow: string;
  };
}

const STEPS: ProcessStep[] = [
  {
    icon: Compass,
    number: "01",
    title: "Discover",
    subtitle: "Audit & Intel",
    description: "We analyze your business, customer personas, and market gaps.",
    theme: {
      iconColor: "text-amber-500",
      tintBg: "bg-amber-500/10",
      podBorder: "border-border hover:border-amber-500/40",
      podShadow: "hover:shadow-amber-500/10",
    },
  },
  {
    icon: Target,
    number: "02",
    title: "Strategy",
    subtitle: "Growth Blueprint",
    description: "We architect a full-funnel roadmap, hooks, and campaign KPIs.",
    theme: {
      iconColor: "text-sky-500",
      tintBg: "bg-sky-500/10",
      podBorder: "border-border hover:border-sky-500/40",
      podShadow: "hover:shadow-sky-500/10",
    },
  },
  {
    icon: Wand2,
    number: "03",
    title: "Create",
    subtitle: "Video & Visuals",
    description: "We shoot viral 4K reels, ad creatives, and high-retention stories.",
    theme: {
      iconColor: "text-rose-500",
      tintBg: "bg-rose-500/10",
      podBorder: "border-border hover:border-rose-500/40",
      podShadow: "hover:shadow-rose-500/10",
    },
  },
  {
    icon: Zap,
    number: "04",
    title: "Launch",
    subtitle: "Paid Acquisition",
    description: "We publish precision campaigns across Meta & Google Ads.",
    theme: {
      iconColor: "text-indigo-500",
      tintBg: "bg-indigo-500/10",
      podBorder: "border-border hover:border-indigo-500/40",
      podShadow: "hover:shadow-indigo-500/10",
    },
  },
  {
    icon: TrendingUp,
    number: "05",
    title: "Optimize",
    subtitle: "ROAS Scaling",
    description: "We test, scale winning ad sets, and maximize net profit.",
    theme: {
      iconColor: "text-emerald-500",
      tintBg: "bg-emerald-500/10",
      podBorder: "border-border hover:border-emerald-500/40",
      podShadow: "hover:shadow-emerald-500/10",
    },
  },
];

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  // Relaxed 3.5s cycle allowing full 1000ms smooth spring deceleration
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STEPS.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="overflow-hidden bg-background py-16 sm:py-20 lg:py-24 border-t border-border/40"
    >
      <h2 id="process-heading" className="sr-only">
        Our 5-Step Process
      </h2>

      <div className="mx-auto flex max-w-[1440px] items-center gap-6 sm:gap-8 px-4 sm:px-6 lg:gap-8 lg:px-8">
        
        {/* Left Camera Visual Showcase */}
        <Reveal direction="right" delay={100} className="hidden lg:block shrink-0">
          <img
            src={processCamera}
            alt="Professional DSLR camera with a large cinema lens"
            width={700}
            height={700}
            loading="lazy"
            className="size-[175px] xl:size-[210px] shrink-0 object-contain transition-transform duration-700 hover:scale-105"
          />
        </Reveal>

        {/* 5-Step Connected Flow Container */}
        <div className="w-full">
          <ol className="relative grid w-full gap-y-10 sm:gap-y-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 lg:gap-x-4">
            
            {/* 
              Continuous Background Connector Line behind pods (Desktop)
              Silky 1000ms cubic-bezier transition for buttery smooth progression
            */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-[31px] left-[8%] right-[8%] z-0 hidden h-[3px] rounded-full bg-border/80 lg:block overflow-hidden"
            >
              <div
                className="h-full bg-gradient-to-r from-brand-amber via-brand-coral to-emerald-400 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[0_0_8px_rgba(255,143,0,0.5)] will-change-[width]"
                style={{
                  width: `${(activeStep / (STEPS.length - 1)) * 100}%`,
                }}
              />
            </div>

            {STEPS.map((step, i) => {
              const Icon = step.icon;
              const isActive = activeStep === i;
              const isPast = activeStep > i;

              return (
                <li
                  key={step.number}
                  className="group relative flex flex-col items-center px-2 text-center cursor-pointer select-none"
                  onClick={() => setActiveStep(i)}
                >
                  <Reveal direction="up" delay={i * 70} className="w-full flex flex-col items-center">
                    
                    {/* Modern Squircle Pod Housing */}
                    <div className="relative z-10">
                      
                      {/* Outer ambient glow halo (Silky 800ms cross-fade) */}
                      <span
                        className={`pointer-events-none absolute -inset-2 rounded-3xl transition-opacity duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] blur-md ${
                          isActive ? "opacity-100 bg-brand-amber/25" : "opacity-0"
                        }`}
                      />

                      {/* Main Solid Icon Pod */}
                      <div
                        className={`relative z-10 flex size-[62px] sm:size-[68px] items-center justify-center rounded-2xl border bg-card shadow-soft-xs transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
                          isActive
                            ? "border-brand-amber/40 shadow-brand-btn -translate-y-1.5 ring-4 ring-brand-amber/20 scale-105"
                            : `${step.theme.podBorder} ${step.theme.podShadow} hover:scale-105 hover:-translate-y-1`
                        }`}
                      >
                        {/* Cross-fading Active Gradient Fill */}
                        <div
                          className={`absolute inset-0 bg-brand-gradient transition-opacity duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                            isActive ? "opacity-100" : "opacity-0"
                          }`}
                        />

                        {/* Tinted Inner Icon Housing */}
                        <div
                          className={`relative z-10 flex size-11 items-center justify-center rounded-xl transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                            isActive
                              ? "bg-transparent text-navy"
                              : `${step.theme.tintBg} ${step.theme.iconColor}`
                          }`}
                        >
                          <Icon
                            className={`size-6 transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                              isActive ? "scale-105 stroke-[2.2]" : "stroke-[2]"
                            }`}
                            aria-hidden="true"
                          />
                        </div>

                        {/* Floating Step Number Pill Badge */}
                        <span
                          className={`absolute -top-2.5 -right-2.5 z-20 flex size-6 items-center justify-center rounded-full border text-[10px] font-black font-mono shadow-soft-xs transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                            isActive
                              ? "bg-navy text-primary-foreground border-white/30 scale-110"
                              : "bg-card text-navy border-border"
                          }`}
                        >
                          {step.number}
                        </span>
                      </div>
                    </div>

                    {/* Step Title & Subtitle with smooth color interpolation */}
                    <div className="mt-4">
                      <h3
                        className={`text-[16px] sm:text-[16.5px] font-extrabold tracking-tight transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                          isActive ? "text-brand-coral" : "text-navy"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p
                        className={`text-[11px] font-bold uppercase tracking-wider transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                          isActive ? "text-navy" : "text-muted-foreground/80"
                        }`}
                      >
                        {step.subtitle}
                      </p>
                    </div>

                    {/* Step Description */}
                    <p className="mt-2 max-w-[14.5rem] text-[12.5px] sm:text-[13px] leading-[1.65] text-muted-foreground transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                      {step.description}
                    </p>

                    {/* Silky Progress Pill Indicator at Bottom */}
                    <div
                      className={`mt-3 h-1 rounded-full transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isActive
                          ? "w-8 bg-brand-gradient shadow-soft-xs"
                          : isPast
                          ? "w-2 bg-border"
                          : "w-1.5 bg-border/40"
                      }`}
                    />

                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>

      </div>
    </section>
  );
}
