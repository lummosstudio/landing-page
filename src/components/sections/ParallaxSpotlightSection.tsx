import React from "react";
import { Link } from "@tanstack/react-router";
import { Sparkles, TrendingUp, Award, Users, ArrowRight, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/ScrollReveal";
import parallaxBg from "@/assets/parallax-studio-bg.webp";

const STATS = [
  {
    icon: TrendingUp,
    value: "3.8x",
    label: "Average ROAS",
    description: "Consistent multi-channel ad return for performance clients",
    accent: "text-amber-400",
    borderGlow: "group-hover:border-amber-400/60 group-hover:shadow-amber-500/10",
    iconBg: "bg-amber-400/15 text-amber-400 border-amber-400/30",
    delay: 0,
  },
  {
    icon: Video,
    value: "50M+",
    label: "Video & Social Views",
    description: "High-retention creative across Instagram, YouTube & Meta",
    accent: "text-sky-400",
    borderGlow: "group-hover:border-sky-400/60 group-hover:shadow-sky-500/10",
    iconBg: "bg-sky-400/15 text-sky-400 border-sky-400/30",
    delay: 100,
  },
  {
    icon: Award,
    value: "250+",
    label: "Brands Scaled",
    description: "From local disruptors to multi-location market leaders",
    accent: "text-brand-coral",
    borderGlow: "group-hover:border-brand-coral/60 group-hover:shadow-rose-500/10",
    iconBg: "bg-brand-coral/15 text-brand-coral border-brand-coral/30",
    delay: 200,
  },
  {
    icon: Users,
    value: "98%",
    label: "Client Retention",
    description: "Long-term growth partnerships built on transparent metrics",
    accent: "text-emerald-400",
    borderGlow: "group-hover:border-emerald-400/60 group-hover:shadow-emerald-500/10",
    iconBg: "bg-emerald-400/15 text-emerald-400 border-emerald-400/30",
    delay: 300,
  },
];

export function ParallaxSpotlightSection() {
  return (
    <section
      id="spotlight"
      aria-labelledby="parallax-spotlight-heading"
      className="relative min-h-[620px] lg:min-h-[720px] py-24 sm:py-32 lg:py-40 flex items-center justify-center [clip-path:inset(0)]"
    >
      {/* 
        ================================================================
        1. TRUE FIXED VIEWPORT BACKGROUND (PARALLAX WINDOW)
        Image is fixed to screen while foreground cards scroll over it.
        ================================================================
      */}
      <div className="fixed inset-0 -z-10 h-screen w-full pointer-events-none">
        <img
          src={parallaxBg}
          alt="Lumos Digital production studio background"
          width={1920}
          height={1080}
          loading="lazy"
          className="size-full object-cover object-center brightness-[0.62] contrast-[1.15]"
        />

        {/* Deep dark cinematic navy overlay for optimal card legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070B19]/90 via-[#070B19]/72 to-[#070B19]/95" />

        {/* Atmospheric ambient lighting */}
        <div className="absolute top-1/4 left-1/4 size-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-amber/15 blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 size-[480px] translate-x-1/2 translate-y-1/2 rounded-full bg-accent-blue/20 blur-[140px]" />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      {/* 
        ================================================================
        2. FOREGROUND CONTENT
        ================================================================
      */}
      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8 text-center text-white">
        
        {/* User-facing Marketing Tag Badge */}
        <Reveal direction="down" delay={0}>
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-navy/90 px-4 py-1.5 shadow-glass backdrop-blur-md">
            <Sparkles className="size-4 text-brand-amber animate-pulse" />
            <span className="text-[12px] font-extrabold tracking-[0.15em] text-white uppercase">
              Proven Results · High-Impact Growth
            </span>
          </div>
        </Reveal>

        {/* Section Headline */}
        <Reveal direction="up" delay={80}>
          <h2
            id="parallax-spotlight-heading"
            className="mt-6 text-[clamp(2.2rem,4.8vw,3.8rem)] font-black tracking-[-0.035em] text-white leading-[1.1] max-w-[880px] mx-auto drop-shadow-lg"
          >
            Where Bold Creative Meets{" "}
            <span className="text-brand-gradient bg-clip-text text-transparent inline-block font-sans">
              Relentless Growth.
            </span>
          </h2>
        </Reveal>

        {/* Subtitle */}
        <Reveal direction="up" delay={140}>
          <p className="mt-5 max-w-[660px] mx-auto text-[15.5px] sm:text-[17.5px] leading-[1.75] text-slate-200 font-normal drop-shadow">
            We combine cinematic storytelling, full-funnel paid media, and strategic conversion design to transform ambitious businesses into recognized market leaders.
          </p>
        </Reveal>

        {/* 
          High-Contrast Glassmorphic Metric Cards:
          Solid dark slate/navy backdrop for crystal-clear readability
        */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat) => {
            const Icon = stat.icon;
            return (
              <Reveal
                key={stat.label}
                direction="up"
                delay={stat.delay}
                className="h-full"
              >
                <div
                  className={`group relative h-full flex flex-col justify-between rounded-2xl border border-white/20 bg-[#0c1427]/95 p-6 text-left shadow-2xl shadow-black/50 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-[#0f1a33] hover:border-white/40 ${stat.borderGlow}`}
                >
                  {/* Card top border glow shimmer */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    <div className="flex items-center justify-between">
                      <span className={`flex size-11 items-center justify-center rounded-xl border ${stat.iconBg} backdrop-blur-sm group-hover:scale-110 transition-all duration-300`}>
                        <Icon className="size-5" />
                      </span>
                      <span className={`text-[2.2rem] sm:text-[2.5rem] font-black tracking-tight drop-shadow-sm ${stat.accent}`}>
                        {stat.value}
                      </span>
                    </div>

                    <h3 className="mt-4 text-[17px] font-bold text-white tracking-tight">
                      {stat.label}
                    </h3>
                    <p className="mt-2 text-[13.5px] leading-[1.65] text-slate-300 font-medium">
                      {stat.description}
                    </p>
                  </div>

                  {/* Bottom indicator */}
                  <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between text-[12px] font-semibold text-slate-400 group-hover:text-white transition-colors">
                    <span>Performance Metric</span>
                    <ArrowRight className="size-3.5 text-brand-amber transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <Reveal direction="up" delay={260}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              className="h-[52px] rounded-xl bg-brand-gradient px-8 text-[15px] font-bold text-navy shadow-brand-btn hover:brightness-110 active:scale-[0.99] transition-all"
            >
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="ml-2 size-4" strokeWidth={2.5} />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="h-[52px] rounded-xl border-white/30 bg-white/10 px-6 text-[15px] font-semibold text-white hover:bg-white/20 active:scale-[0.99] backdrop-blur-md transition-all"
            >
              <a href="#work">
                View Featured Work
              </a>
            </Button>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
