import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Camera,
  Video,
  Clapperboard,
  Scissors,
  UserRound,
  Sparkles,
  Lightbulb,
  CalendarCheck,
  Aperture,
  Wand2,
  PackageCheck,
  Brain,
  Settings2,
  ScanSearch,
  TrendingUp,
  Layers,
  LifeBuoy,
  UtensilsCrossed,
  Hotel,
  Building2,
  Sun,
  HardHat,
  Plane,
  Shirt,
  Rocket,
  Store,
  Mic,
  Smile,
  Heart,
  Trophy,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/ScrollReveal";
import { InteractiveTilt } from "@/components/ui/InteractiveTilt";
import { SpotlightGrid, SpotlightCard } from "@/components/ui/SpotlightGrid";
import { MagneticCard } from "@/components/ui/MagneticCard";
import { WarpSpeedTrails } from "@/components/ui/WarpSpeedTrails";
import aboutHero from "@/assets/about-hero.webp";
import aboutStory from "@/assets/about-story.webp";

const TITLE = "About Us | Leading Digital Marketing & Creative Agency in Pondicherry — Lumos";
const DESCRIPTION =
  "Learn about Lumos Digital Media, Pondicherry's premier creative digital marketing, branding, and commercial video production agency helping brands scale across South India.";
const CANONICAL_URL = "https://lumosdigitalmedia.in/about";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "about lumos digital media, creative agency pondicherry, digital marketing team puducherry, video production studio pondicherry, branding agency pondicherry, marketing experts south india, commercial photography pondicherry",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: CANONICAL_URL },
      { property: "og:image", content: "https://lumosdigitalmedia.in/Lumos-Digital-logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: "https://lumosdigitalmedia.in/Lumos-Digital-logo.png" },
    ],
    links: [
      { rel: "canonical", href: CANONICAL_URL },
      { rel: "preload", as: "image", href: aboutHero, fetchPriority: "high" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "@id": "https://lumosdigitalmedia.in/about#aboutpage",
          url: "https://lumosdigitalmedia.in/about",
          name: TITLE,
          description: DESCRIPTION,
          mainEntity: {
            "@type": "LocalBusiness",
            name: "Lumos Digital Media",
            url: "https://lumosdigitalmedia.in/",
            logo: "https://lumosdigitalmedia.in/Lumos-Digital-logo.png",
            telephone: "+91 90037 82254",
            email: "info@lumosdigitalmedia.in",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "Opposite Hotel Tamizh Park, Sokkanathan Pet, Mothilal Nagar, Marie Oulgaret, Vazhudavur Road",
              addressLocality: "Puducherry",
              addressRegion: "Puducherry",
              postalCode: "605009",
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 11.9416,
              longitude: 79.8083,
            },
            areaServed: [
              { "@type": "City", name: "Puducherry" },
              { "@type": "AdministrativeArea", name: "Tamil Nadu" },
              { "@type": "Country", name: "India" },
            ],
          },
        }),
      },
    ],
  }),
  component: AboutPage,
});

const STATS = [
  { icon: Trophy, value: "5+ Years", label: "Driving Growth" },
  { icon: Smile, value: "250+", label: "Projects Completed" },
  { icon: Heart, value: "98%", label: "Client Retention" },
];

const WHAT_WE_DO: { n: string; title: string; text: string; icon: LucideIcon }[] = [
  {
    n: "01",
    title: "Digital Marketing",
    text: "Connected digital strategies designed to improve visibility, engagement, qualified leads and revenue.",
    icon: Camera,
  },
  {
    n: "02",
    title: "Social Media",
    text: "Purposeful social strategies and platform-ready content that build active, loyal communities.",
    icon: Video,
  },
  {
    n: "03",
    title: "Creative Content",
    text: "Original reels, videos, commercial shoots and brand content designed to capture and hold attention.",
    icon: Clapperboard,
  },
  {
    n: "04",
    title: "Paid Advertising",
    text: "Targeted Meta and Google campaigns that reach high-intent audiences and maximize ROI.",
    icon: Scissors,
  },
  {
    n: "05",
    title: "SEO & Local Growth",
    text: "Search engine and local presence optimization that help customers easily discover and trust your business.",
    icon: UserRound,
  },
  {
    n: "06",
    title: "Branding & Identity",
    text: "Distinctive identities and design systems that make brands clear, reputable and unforgettable.",
    icon: Sparkles,
  },
];

const JOURNEY: { title: string; text: string; icon: LucideIcon }[] = [
  { title: "Discover", text: "We understand your business, audience, goals and competitive space.", icon: Lightbulb },
  { title: "Strategy", text: "We define the roadmap, content angles and distribution channels.", icon: CalendarCheck },
  { title: "Create", text: "We shoot, write, design and craft high-impact brand assets.", icon: Aperture },
  { title: "Launch", text: "We distribute campaigns across targeted channels with precision.", icon: Wand2 },
  { title: "Optimize", text: "We analyze performance metrics and continuously scale results.", icon: PackageCheck },
];

const WHY: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: "Custom Strategy",
    text: "Every business receives a tailored roadmap built around specific goals and audience behaviors.",
    icon: Brain,
  },
  {
    title: "End-to-End Production",
    text: "Scripts, cinematography, design, editing, and ad execution all unified under one roof.",
    icon: Settings2,
  },
  {
    title: "Performance Focus",
    text: "We prioritize real business outcomes: brand trust, customer acquisition, and measurable ROI.",
    icon: ScanSearch,
  },
  {
    title: "Deep Business Insight",
    text: "We connect creative ideas to commercial realities and long-term customer journeys.",
    icon: TrendingUp,
  },
  {
    title: "Platform-First Trends",
    text: "We stay ahead of algorithm shifts and creative format trends on Instagram, YouTube and Google.",
    icon: Layers,
  },
  {
    title: "Dedicated Partnership",
    text: "We act as an invested extension of your team, not just another outsourcing agency.",
    icon: LifeBuoy,
  },
];

const INDUSTRIES: { label: string; icon: LucideIcon }[] = [
  { label: "Restaurants & Cafés", icon: UtensilsCrossed },
  { label: "Hotels & Resorts", icon: Hotel },
  { label: "Real Estate", icon: Building2 },
  { label: "Solar & Clean Energy", icon: Sun },
  { label: "Construction & Infra", icon: HardHat },
  { label: "Travel & Hospitality", icon: Plane },
  { label: "Fashion & Lifestyle", icon: Shirt },
  { label: "Tech Startups", icon: Rocket },
  { label: "Retail & Commerce", icon: Store },
  { label: "Personal Brands", icon: Mic },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card/80 px-3.5 py-1 text-[11.5px] font-bold tracking-[0.14em] text-navy uppercase shadow-soft-xs backdrop-blur-sm">
      {children}
    </div>
  );
}

function AboutPage() {
  const [activeCapability, setActiveCapability] = useState(0);

  // Smoothly auto-cycle through the 5 capabilities every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCapability((prev) => (prev + 1) % JOURNEY.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans">
      <SiteHeader activeItem="About" />

      <main>
        {/* HERO SECTION */}
        <section
          aria-labelledby="about-hero-heading"
          className="relative overflow-hidden bg-background py-8 sm:py-12 lg:py-16 xl:py-20"
        >
          {/* Ambient blur glows */}
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
              {/* Copy Column (7 cols) */}
              <div className="flex flex-col lg:col-span-7">
                <Reveal direction="down" delay={0}>
                  <SectionLabel>
                    About <span className="text-brand-gradient">Lumos Digital Media</span>
                  </SectionLabel>
                </Reveal>

                <Reveal direction="up" delay={80}>
                  <h1
                    id="about-hero-heading"
                    className="mt-5 text-[clamp(2.35rem,5.2vw,3.85rem)] leading-[1.08] font-extrabold tracking-[-0.035em] text-navy"
                  >
                    We Build Brands
                    <br />
                    That Are Ready
                    <br />
                    <span className="text-brand-gradient relative inline-block">
                      To Grow.
                    </span>
                  </h1>
                </Reveal>

                <Reveal direction="up" delay={160}>
                  <p className="mt-5 max-w-[540px] text-[15.5px] sm:text-[16.5px] leading-[1.75] text-muted-foreground">
                    Lumos Digital Media is a creative digital marketing and branding agency
                    helping businesses earn attention, build authority, and achieve sustainable
                    revenue through smart strategy and premium storytelling.
                  </p>
                </Reveal>

                {/* Stat Chips */}
                <Reveal direction="up" delay={240}>
                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    {STATS.map(({ icon: Icon, value, label }) => (
                      <div
                        key={label}
                        className="inline-flex items-center gap-2.5 rounded-xl border border-border/80 bg-card/70 px-4 py-2 shadow-soft-xs backdrop-blur-xs transition-transform hover:-translate-y-0.5"
                      >
                        <Icon className="size-4 text-brand-amber" strokeWidth={2} />
                        <span className="text-[13.5px] font-extrabold text-navy">{value}</span>
                        <span className="text-[12.5px] text-muted-foreground">{label}</span>
                      </div>
                    ))}
                  </div>
                </Reveal>

                {/* CTAs */}
                <Reveal direction="up" delay={320}>
                  <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
                    <Button
                      asChild
                      className="h-[52px] rounded-xl bg-navy px-8 text-[15px] font-semibold text-primary-foreground shadow-navy-btn hover:bg-navy/90 hover:shadow-navy-btn-hover active:scale-[0.99] transition-all"
                    >
                      <Link to="/contact">
                        Start Your Project
                        <ArrowRight className="ml-2.5 size-4" strokeWidth={2.5} />
                      </Link>
                    </Button>

                    <Button
                      asChild
                      variant="outline"
                      className="h-[52px] rounded-xl border-border bg-card px-6 text-[15px] font-semibold text-navy hover:bg-secondary active:scale-[0.99] transition-all"
                    >
                      <a href="/#services">
                        Our Services
                        <ArrowRight className="ml-2.5 size-4" strokeWidth={2.5} />
                      </a>
                    </Button>
                  </div>
                </Reveal>
              </div>

              {/* Visual Showcase (5 cols) */}
              <div className="relative lg:col-span-5">
                <Reveal direction="scale" delay={200}>
                  <InteractiveTilt maxTilt={8} scale={1.02} className="mx-auto max-w-[500px] lg:max-w-none">
                    <div
                      className="relative overflow-hidden rounded-3xl border border-border/80 bg-gradient-to-b from-card to-secondary/30 p-2.5 sm:p-3 shadow-soft-xl"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <div className="relative overflow-hidden rounded-2xl bg-muted/40 aspect-[4/3.3] sm:aspect-[4/3.4]">
                        <img
                          src={aboutHero}
                          alt="Lumos Digital studio cinema camera and lighting gear setup"
                          width={1000}
                          height={850}
                          fetchPriority="high"
                          decoding="async"
                          className="size-full object-cover object-center transition-transform duration-700 hover:scale-105"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent opacity-60" />
                      </div>

                      {/* Floating Glass Badges with 3D Depth Layering */}
                      <div
                        className="absolute top-6 right-6 hidden sm:flex items-center gap-2 rounded-2xl border border-card/60 bg-card/90 px-3.5 py-2 shadow-glass backdrop-blur-md animate-float"
                        style={{ transform: "translateZ(36px)" }}
                      >
                        <span className="bg-brand-gradient flex size-7 items-center justify-center rounded-xl text-navy">
                          <Sparkles className="size-4" />
                        </span>
                        <div className="leading-tight">
                          <p className="text-[11px] font-extrabold text-navy uppercase tracking-wide">
                            Strategic Agency
                          </p>
                          <p className="text-[10px] font-medium text-muted-foreground">
                            Creative & ROI-Driven
                          </p>
                        </div>
                      </div>

                      <div
                        className="absolute bottom-6 left-6 flex items-center gap-3 rounded-2xl border border-card/60 bg-card/95 p-3 shadow-glass backdrop-blur-md animate-float-slow"
                        style={{ transform: "translateZ(42px)" }}
                      >
                        <div className="flex size-10 items-center justify-center rounded-xl bg-accent-blue/15 text-navy">
                          <Camera className="size-5" />
                        </div>
                        <div className="leading-tight">
                          <p className="text-[14px] font-black text-navy">
                            Production House
                          </p>
                          <p className="text-[11px] font-medium text-muted-foreground">
                            In-House Film & Design
                          </p>
                        </div>
                      </div>
                    </div>
                  </InteractiveTilt>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* OUR STORY SECTION */}
        <section aria-labelledby="story-heading" className="py-14 sm:py-16 lg:py-24 bg-card/40 border-y border-border/40">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
              {/* Image Frame (5 cols) */}
              <div className="lg:col-span-5">
                <Reveal direction="right" delay={100}>
                  <InteractiveTilt maxTilt={8} scale={1.02}>
                    <div
                      className="relative overflow-hidden rounded-3xl border border-border/80 bg-gradient-to-b from-card to-secondary/30 p-2.5 sm:p-3 shadow-soft-xl"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <div className="overflow-hidden rounded-2xl aspect-[4/3.8] sm:aspect-[4/3.5] lg:aspect-[4/4.5]">
                        <img
                          src={aboutStory}
                          alt="Photographer reviewing images on camera during a Lumos shoot"
                          width={900}
                          height={1000}
                          loading="lazy"
                          className="size-full object-cover object-center transition-transform duration-700 hover:scale-105"
                        />
                      </div>

                      {/* Story Floating Badge */}
                      <div
                        className="absolute bottom-6 right-6 flex items-center gap-2.5 rounded-2xl border border-card/60 bg-card/95 px-3.5 py-2.5 shadow-glass backdrop-blur-md animate-float"
                        style={{ transform: "translateZ(32px)" }}
                      >
                        <div className="flex size-8 items-center justify-center rounded-xl bg-brand-amber/15 text-brand-amber">
                          <Trophy className="size-4" />
                        </div>
                        <div className="leading-tight">
                          <p className="text-[12px] font-black text-navy">250+ Brands</p>
                          <p className="text-[10.5px] font-medium text-muted-foreground">South India & Beyond</p>
                        </div>
                      </div>
                    </div>
                  </InteractiveTilt>
                </Reveal>
              </div>

              {/* Text Column (7 cols) */}
              <div className="flex flex-col lg:col-span-7">
                <Reveal direction="up" delay={0}>
                  <SectionLabel>
                    Our <span className="text-brand-gradient">Story</span>
                  </SectionLabel>
                </Reveal>

                <Reveal direction="up" delay={80}>
                  <h2
                    id="story-heading"
                    className="mt-4 text-[clamp(1.75rem,3.4vw,2.5rem)] leading-[1.15] font-extrabold tracking-[-0.03em] text-navy"
                  >
                    Turning Ambition Into{" "}
                    <span className="text-brand-gradient">Digital Growth.</span>
                  </h2>
                </Reveal>

                <Reveal direction="up" delay={160}>
                  <div className="mt-5 space-y-4 text-[15px] sm:text-[15.5px] leading-[1.8] text-muted-foreground">
                    <p>
                      Lumos Digital Media was built around a singular philosophy: smart marketing
                      and bold creativity can radically transform a business.
                    </p>
                    <p>
                      From high-conversion ad campaigns to cinematic reels and comprehensive brand
                      identity systems, every asset we produce is crafted with clear intent and
                      commercial purpose.
                    </p>
                    <p>
                      We partner with ambitious founders, established hospitality brands, and growing
                      enterprises across South India to turn bold vision into measurable growth.
                    </p>
                  </div>
                </Reveal>

                <Reveal direction="up" delay={240}>
                  <div className="mt-8 pt-6 border-t border-border/60 flex flex-wrap items-center gap-6">
                    <div>
                      <p className="text-[26px] font-black text-navy">10M+</p>
                      <p className="text-[12.5px] font-medium text-muted-foreground">Views & Impressions</p>
                    </div>
                    <div className="h-10 w-px bg-border/80 hidden sm:block" />
                    <div>
                      <p className="text-[26px] font-black text-navy">98%</p>
                      <p className="text-[12.5px] font-medium text-muted-foreground">Satisfaction Score</p>
                    </div>
                    <div className="h-10 w-px bg-border/80 hidden sm:block" />
                    <div>
                      <p className="text-[26px] font-black text-navy">100%</p>
                      <p className="text-[12.5px] font-medium text-muted-foreground">In-House Production</p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE DO SECTION */}
        <section
          aria-labelledby="what-we-do-heading"
          className="relative overflow-hidden bg-soft-gray/70 py-14 sm:py-16 lg:py-24"
        >
          {/* Hyperspace / Warp Speed Parallax Trails Background */}
          <WarpSpeedTrails className="opacity-80" />

          <div className="relative z-10 mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <Reveal direction="up">
              <div className="max-w-xl">
                <SectionLabel>
                  What <span className="text-brand-gradient">We</span> Do
                </SectionLabel>
                <h2
                  id="what-we-do-heading"
                  className="mt-4 text-[clamp(1.75rem,3.4vw,2.5rem)] leading-[1.15] font-extrabold tracking-[-0.03em] text-navy"
                >
                  Everything Your Brand Needs{" "}
                  <span className="text-brand-gradient">To Scale.</span>
                </h2>
              </div>
            </Reveal>

            {/* GSAP-Style Interactive Spotlight Matrix */}
            <SpotlightGrid className="mt-8 sm:mt-10 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {WHAT_WE_DO.map(({ n, title, text, icon: Icon }, index) => (
                <Reveal key={n} direction="up" delay={index * 75} className="h-full">
                  <SpotlightCard className="h-full flex flex-col justify-between bg-card/90 backdrop-blur-md">
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-secondary text-brand-amber transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-amber/15 shadow-soft-xs">
                          <Icon className="size-6" strokeWidth={1.8} aria-hidden="true" />
                        </div>
                        <span className="text-[13px] font-black text-muted-foreground/40 font-mono">
                          {n}
                        </span>
                      </div>
                      <h3 className="mt-6 text-[17px] font-bold tracking-tight text-navy group-hover:text-brand-coral transition-colors">
                        {title}
                      </h3>
                      <p className="mt-2.5 text-[14px] leading-[1.7] text-muted-foreground">
                        {text}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-border/40 flex items-center gap-2 text-[13px] font-bold text-navy group-hover:text-brand-coral transition-colors">
                      <span>Explore Service</span>
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </SpotlightCard>
                </Reveal>
              ))}
            </SpotlightGrid>
          </div>
        </section>

        {/* JOURNEY / CAPABILITIES */}
        <section
          aria-labelledby="capabilities-heading"
          className="py-14 sm:py-16 lg:py-24 bg-background"
        >
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <Reveal direction="up">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                <div>
                  <SectionLabel>
                    Our <span className="text-brand-gradient">Capabilities</span>
                  </SectionLabel>
                  <h2
                    id="capabilities-heading"
                    className="mt-4 text-[clamp(1.75rem,3.4vw,2.5rem)] leading-[1.15] font-extrabold tracking-[-0.03em] text-navy"
                  >
                    From Insight To{" "}
                    <span className="text-brand-gradient">Impact.</span>
                  </h2>
                </div>
                <p className="max-w-md text-[14.5px] leading-[1.75] text-muted-foreground">
                  Our seamless 5-step growth flywheel keeps strategy, creative production,
                  and paid performance synchronized toward one clear business objective.
                </p>
              </div>
            </Reveal>

            <ol className="mt-10 sm:mt-12 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
              {JOURNEY.map(({ title, text, icon: Icon }, index) => {
                const isActive = activeCapability === index;
                const isPast = activeCapability > index;

                return (
                  <li
                    key={title}
                    className="cursor-pointer select-none"
                    onClick={() => setActiveCapability(index)}
                  >
                    <Reveal direction="up" delay={index * 80}>
                      <div
                        className={`group relative flex flex-col justify-between h-full rounded-2xl border bg-card p-5 transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                          isActive
                            ? "border-brand-amber shadow-soft-hover -translate-y-1.5 ring-2 ring-brand-amber/20"
                            : "border-border shadow-soft-xs hover:-translate-y-1 hover:border-brand-amber/50 hover:shadow-soft-sm"
                        }`}
                      >
                        {/* Top ambient card accent line on active */}
                        <div
                          className={`absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-transparent via-brand-amber to-transparent transition-opacity duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                            isActive ? "opacity-100" : "opacity-0"
                          }`}
                        />

                        <div>
                          <div className="flex items-center justify-between">
                            <div
                              className={`inline-flex size-11 items-center justify-center rounded-xl transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                                isActive
                                  ? "bg-brand-gradient text-navy shadow-brand-btn scale-105"
                                  : "bg-secondary text-navy group-hover:bg-brand-amber/15 group-hover:text-brand-amber"
                              }`}
                            >
                              <Icon
                                className="size-5"
                                strokeWidth={isActive ? 2.2 : 1.8}
                                aria-hidden="true"
                              />
                            </div>
                            <span
                              className={`flex size-6 items-center justify-center rounded-full text-[11px] font-black shadow-soft-xs transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                                isActive
                                  ? "bg-navy text-primary-foreground scale-105 shadow-navy-btn"
                                  : "bg-brand-gradient text-navy"
                              }`}
                            >
                              {index + 1}
                            </span>
                          </div>

                          <h3
                            className={`mt-4 text-[15.5px] font-bold transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                              isActive ? "text-brand-coral font-extrabold" : "text-navy"
                            }`}
                          >
                            {title}
                          </h3>
                          <p className="mt-1.5 text-[13px] leading-[1.65] text-muted-foreground transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                            {text}
                          </p>
                        </div>

                        {/* Bottom Active Progress Pill */}
                        <div
                          className={`mt-4 h-1 rounded-full transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                            isActive
                              ? "w-8 bg-brand-gradient shadow-soft-xs"
                              : isPast
                              ? "w-2 bg-border"
                              : "w-1.5 bg-border/40"
                          }`}
                        />
                      </div>
                    </Reveal>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        {/* WHY LUMOS */}
        <section
          aria-labelledby="why-heading"
          className="relative overflow-hidden bg-soft-gray/70 py-14 sm:py-16 lg:py-24"
        >
          {/* Hyperspace / Warp Speed Parallax Trails Background */}
          <WarpSpeedTrails className="opacity-80" />

          <div className="relative z-10 mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <Reveal direction="up">
              <div className="max-w-xl">
                <SectionLabel>
                  Why <span className="text-brand-gradient">Lumos</span>
                </SectionLabel>
                <h2
                  id="why-heading"
                  className="mt-4 text-[clamp(1.75rem,3.4vw,2.5rem)] leading-[1.15] font-extrabold tracking-[-0.03em] text-navy"
                >
                  Why Brands{" "}
                  <span className="text-brand-gradient">Choose Lumos</span>
                </h2>
              </div>
            </Reveal>

            {/* GSAP-Style Interactive Spotlight Matrix */}
            <SpotlightGrid className="mt-8 sm:mt-10 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {WHY.map(({ title, text, icon: Icon }, index) => (
                <Reveal key={title} direction="up" delay={index * 75} className="h-full">
                  <SpotlightCard className="h-full flex flex-col justify-between bg-card/90 backdrop-blur-md">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="inline-flex size-12 items-center justify-center rounded-xl bg-secondary text-navy transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-amber/15 group-hover:text-brand-amber shadow-soft-xs">
                          <Icon className="size-5" strokeWidth={2} aria-hidden="true" />
                        </span>
                        <span className="text-[11px] font-black uppercase tracking-widest text-muted-foreground/50 font-mono">
                          0{index + 1}
                        </span>
                      </div>
                      <h3 className="mt-5 text-[16.5px] font-bold text-navy transition-colors group-hover:text-brand-coral">
                        {title}
                      </h3>
                      <p className="mt-2 text-[13.5px] leading-[1.75] text-muted-foreground">
                        {text}
                      </p>
                    </div>

                    <div className="mt-5 pt-3.5 border-t border-border/40 flex items-center justify-between text-[11.5px] font-bold text-muted-foreground group-hover:text-navy transition-colors">
                      <span>Agency Standard</span>
                      <ArrowRight className="size-3 text-brand-coral transition-transform group-hover:translate-x-1" />
                    </div>
                  </SpotlightCard>
                </Reveal>
              ))}
            </SpotlightGrid>
          </div>
        </section>

        {/* INDUSTRIES WE SERVE */}
        <section aria-labelledby="industries-heading" className="py-14 sm:py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <Reveal direction="up">
              <div className="max-w-xl">
                <SectionLabel>
                  Who <span className="text-brand-gradient">We Work With</span>
                </SectionLabel>
                <h2
                  id="industries-heading"
                  className="mt-4 text-[clamp(1.75rem,3.4vw,2.5rem)] leading-[1.15] font-extrabold tracking-[-0.03em] text-navy"
                >
                  Built For Brands Of{" "}
                  <span className="text-brand-gradient">All Scales</span>
                </h2>
              </div>
            </Reveal>

            <ul className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4">
              {INDUSTRIES.map(({ label, icon: Icon }, index) => (
                <li key={label}>
                  <Reveal direction="up" delay={index * 40} className="h-full">
                    <MagneticCard
                      floatDuration={3.8 + (index % 4) * 0.7}
                      floatDelay={(index % 5) * 0.3}
                      strength={0.2}
                      className="h-full"
                    >
                      <div className="relative overflow-hidden flex h-full min-w-0 items-center gap-3 rounded-2xl border border-border bg-card p-4 transition-all duration-400 hover:border-brand-amber/80 hover:shadow-soft-hover cursor-default">
                        {/* Top glowing accent line on hover */}
                        <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-brand-amber to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                        <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-secondary text-brand-coral transition-all duration-400 group-hover:scale-110 group-hover:bg-brand-gradient group-hover:text-navy group-hover:shadow-brand-btn">
                          <Icon
                            className="size-4 shrink-0"
                            strokeWidth={2}
                            aria-hidden="true"
                          />
                        </div>
                        <span className="min-w-0 text-[13px] font-semibold text-navy leading-tight transition-colors group-hover:text-brand-coral">
                          {label}
                        </span>
                      </div>
                    </MagneticCard>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
