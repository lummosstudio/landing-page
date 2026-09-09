import { ArrowRight, Sparkles, TrendingUp, Target, Star } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/ScrollReveal";
import heroStudio from "@/assets/hero-studio.webp";
import avatar1 from "@/assets/avatar-1.webp";
import avatar2 from "@/assets/avatar-2.webp";
import avatar3 from "@/assets/avatar-3.webp";
import avatar4 from "@/assets/avatar-4.webp";

const HIGHLIGHTS = [
  { icon: Target, label: "Smart Strategy" },
  { icon: Sparkles, label: "Creative Content" },
  { icon: TrendingUp, label: "Business Growth" },
];

const CLIENT_AVATARS = [
  { src: avatar1, alt: "Lumos Digital client" },
  { src: avatar2, alt: "Lumos Digital client" },
  { src: avatar3, alt: "Lumos Digital client" },
  { src: avatar4, alt: "Lumos Digital client" },
];

export function HeroSection() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-background py-8 sm:py-12 lg:py-16 xl:py-20"
    >
      {/* Background ambient gradient glow with pulse animations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-1/4 -z-10 size-[450px] -translate-y-1/3 rounded-full bg-brand-amber/10 blur-[100px] animate-pulse-glow"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 right-0 -z-10 size-[380px] rounded-full bg-accent-blue/10 blur-[90px] animate-pulse-glow"
      />

      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          {/* Copy column (7 cols on desktop) */}
          <div className="flex flex-col lg:col-span-7">
            {/* Tag Badge */}
            <Reveal direction="down" delay={0}>
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 shadow-soft-xs backdrop-blur-sm">
                <span className="text-[12px] font-bold tracking-[0.14em] text-navy uppercase">
                  Lumos Digital
                </span>
                <span className="text-[12px] font-bold tracking-[0.14em] text-brand-gradient uppercase">
                  Media
                </span>
                <span className="bg-brand-gradient size-2 rounded-full animate-pulse" />
              </div>
            </Reveal>

            {/* Headline */}
            <Reveal direction="up" delay={80}>
              <h1
                id="hero-heading"
                className="mt-5 text-[clamp(2.35rem,5.2vw,3.85rem)] leading-[1.08] font-extrabold tracking-[-0.035em] text-navy"
              >
                Smart Marketing.
                <br />
                <span className="text-brand-gradient relative inline-block font-sans">
                  Real Growth.
                </span>
              </h1>
            </Reveal>

            {/* Subheading */}
            <Reveal direction="up" delay={160}>
              <p className="mt-5 max-w-[520px] text-[15.5px] sm:text-[16.5px] leading-[1.75] text-muted-foreground">
                We build brands, create high-converting content & reels, and drive measurable
                revenue growth for ambitious businesses in Pondicherry and across South India.
              </p>
            </Reveal>

            {/* Feature Pills */}
            <Reveal direction="up" delay={240}>
              <ul className="mt-6 flex flex-wrap items-center gap-2.5 sm:gap-3">
                {HIGHLIGHTS.map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="inline-flex items-center gap-2 rounded-xl border border-border/80 bg-card/60 px-3.5 py-2 text-[13px] font-semibold text-navy shadow-soft-xs backdrop-blur-xs transition-transform hover:-translate-y-0.5"
                  >
                    <Icon
                      className="size-4 text-accent-blue"
                      strokeWidth={2.2}
                      aria-hidden="true"
                    />
                    {label}
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* CTA Buttons */}
            <Reveal direction="up" delay={320}>
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
                <Button
                  asChild
                  className="h-[52px] rounded-xl bg-navy px-8 text-[15px] font-semibold text-primary-foreground shadow-navy-btn hover:bg-navy/90 hover:shadow-navy-btn-hover active:scale-[0.99] transition-all"
                >
                  <Link to="/contact">
                    Start Growing
                    <ArrowRight className="ml-2.5 size-4" strokeWidth={2.5} />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="h-[52px] rounded-xl border-border bg-card px-6 text-[15px] font-semibold text-navy hover:bg-secondary active:scale-[0.99] transition-all"
                >
                  <a href="#services" className="inline-flex items-center">
                    <span className="mr-2.5 inline-flex size-7 items-center justify-center rounded-lg bg-secondary text-navy">
                      <Sparkles
                        className="size-3.5 text-accent-blue"
                        aria-hidden="true"
                      />
                    </span>
                    Explore Services
                  </a>
                </Button>
              </div>
            </Reveal>

            {/* Social Proof & Client Avatars */}
            <Reveal direction="up" delay={400}>
              <div className="mt-10 flex flex-wrap items-center gap-4 pt-4 border-t border-border/60">
                <ul className="flex items-center">
                  {CLIENT_AVATARS.map((avatar, index) => (
                    <li
                      key={avatar.src}
                      className={index === 0 ? "" : "-ml-3"}
                      style={{ zIndex: CLIENT_AVATARS.length - index }}
                    >
                      <img
                        src={avatar.src}
                        alt={avatar.alt}
                        width={96}
                        height={96}
                        loading="lazy"
                        className="size-10 sm:size-11 rounded-full border-2 border-card object-cover shadow-soft-xs transition-transform hover:scale-110"
                      />
                    </li>
                  ))}
                </ul>

                <div className="leading-tight">
                  <div className="flex items-center gap-1.5 text-amber-500">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="size-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-[12.5px] font-bold text-navy">5.0</span>
                  </div>
                  <p className="mt-1 text-[13px] font-bold text-navy">
                    250+ Brands Scaled With Lumos
                  </p>
                  <p className="text-[12px] text-muted-foreground">
                    Strategy · Content · Performance
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Visual column (5 cols on desktop) */}
          <div className="relative lg:col-span-5">
            <Reveal direction="scale" delay={200}>
              <div className="relative mx-auto max-w-[500px] lg:max-w-none">
                {/* Card Container Frame */}
                <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-gradient-to-b from-card to-secondary/30 p-2.5 sm:p-3 shadow-soft-xl">
                  <div className="relative overflow-hidden rounded-2xl bg-muted/40 aspect-[4/3.3] sm:aspect-[4/3.4]">
                    <img
                      src={heroStudio}
                      alt="Lumos Digital production studio with camera, lighting setup and 3D brand installation"
                      width={1000}
                      height={850}
                      fetchPriority="high"
                      decoding="async"
                      className="size-full object-cover object-center transition-transform duration-700 hover:scale-105"
                    />
                    {/* Subtle inner overlay vignette */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent opacity-60" />
                  </div>

                  {/* Floating Glassmorphism Badge 1: Top Right */}
                  <div className="absolute top-6 right-6 hidden sm:flex items-center gap-2 rounded-2xl border border-card/60 bg-card/90 px-3.5 py-2 shadow-glass backdrop-blur-md animate-float">
                    <span className="bg-brand-gradient flex size-7 items-center justify-center rounded-xl text-navy">
                      <Sparkles className="size-4" />
                    </span>
                    <div className="leading-tight">
                      <p className="text-[11px] font-extrabold text-navy uppercase tracking-wide">
                        Growth Marketing
                      </p>
                      <p className="text-[10px] font-medium text-muted-foreground">
                        Content, Ads & ROI
                      </p>
                    </div>
                  </div>

                  {/* Floating Glassmorphism Card 2: Bottom Left */}
                  <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-2xl border border-card/60 bg-card/95 p-3 shadow-glass backdrop-blur-md animate-float-slow">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                      <TrendingUp className="size-5" />
                    </div>
                    <div className="leading-tight">
                      <p className="text-[14px] font-black text-navy">
                        +148% Avg. Growth
                      </p>
                      <p className="text-[11px] font-medium text-muted-foreground">
                        Measurable Client ROI
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative accent element */}
                <div
                  aria-hidden="true"
                  className="absolute -bottom-4 -right-4 -z-10 size-48 rounded-full bg-brand-coral/15 blur-2xl animate-pulse-glow"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

