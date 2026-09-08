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
import aboutHero from "@/assets/about-hero.webp";
import aboutStory from "@/assets/about-story.webp";

const TITLE = "About Lumos Digital Media | Creative Growth Agency";
const DESCRIPTION =
  "Meet Lumos Digital Media, a creative digital marketing and branding agency helping businesses grow through strategy, content, advertising and brand building.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/about" },
      { rel: "preload", as: "image", href: aboutHero, fetchPriority: "high" },
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
    <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card/80 px-3.5 py-1 text-[11.5px] font-bold tracking-[0.14em] text-navy uppercase shadow-2xs backdrop-blur-sm">
      {children}
    </div>
  );
}

function AboutPage() {
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
            className="pointer-events-none absolute top-0 right-1/4 -z-10 size-[450px] -translate-y-1/3 rounded-full bg-brand-amber/10 blur-[100px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-1/3 right-0 -z-10 size-[380px] rounded-full bg-accent-blue/10 blur-[90px]"
          />

          <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-10 xl:gap-14">
              {/* Copy Column (7 cols) */}
              <div className="flex flex-col lg:col-span-7">
                <SectionLabel>
                  About <span className="text-brand-gradient">Lumos Digital Media</span>
                </SectionLabel>

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

                <p className="mt-5 max-w-[540px] text-[15.5px] sm:text-[16.5px] leading-[1.75] text-muted-foreground">
                  Lumos Digital Media is a creative digital marketing and branding agency
                  helping businesses earn attention, build authority, and achieve sustainable
                  revenue through smart strategy and premium storytelling.
                </p>

                {/* Stat Chips */}
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  {STATS.map(({ icon: Icon, value, label }) => (
                    <div
                      key={label}
                      className="inline-flex items-center gap-2.5 rounded-xl border border-border/80 bg-card/70 px-4 py-2 shadow-2xs backdrop-blur-xs"
                    >
                      <Icon className="size-4 text-brand-amber" strokeWidth={2} />
                      <span className="text-[13.5px] font-extrabold text-navy">{value}</span>
                      <span className="text-[12.5px] text-muted-foreground">{label}</span>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
                  <Button
                    asChild
                    className="h-[52px] rounded-xl bg-navy px-8 text-[15px] font-semibold text-primary-foreground shadow-[0_14px_30px_-12px_var(--navy)] hover:bg-navy/90 active:scale-[0.99]"
                  >
                    <Link to="/contact">
                      Start Your Project
                      <ArrowRight className="ml-2.5 size-4" strokeWidth={2.5} />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="h-[52px] rounded-xl border-border bg-card px-6 text-[15px] font-semibold text-navy hover:bg-secondary active:scale-[0.99]"
                  >
                    <a href="/#works">
                      View Our Work
                      <ArrowRight className="ml-2.5 size-4" strokeWidth={2.5} />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Visual Showcase (5 cols) */}
              <div className="relative lg:col-span-5">
                <div className="relative mx-auto max-w-[500px] lg:max-w-none">
                  <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-gradient-to-b from-card to-secondary/30 p-2.5 sm:p-3 shadow-[0_24px_60px_-24px_rgba(22,35,103,0.18)]">
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

                    {/* Floating Glass Badges */}
                    <div className="absolute top-6 right-6 hidden sm:flex items-center gap-2 rounded-2xl border border-card/60 bg-card/90 px-3.5 py-2 shadow-lg backdrop-blur-md">
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

                    <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-2xl border border-card/60 bg-card/95 p-3 shadow-xl backdrop-blur-md">
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
                </div>
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
                <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-gradient-to-b from-card to-secondary/30 p-2.5 sm:p-3 shadow-lg">
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
                </div>
              </div>

              {/* Text Column (7 cols) */}
              <div className="flex flex-col lg:col-span-7">
                <SectionLabel>
                  Our <span className="text-brand-gradient">Story</span>
                </SectionLabel>
                <h2
                  id="story-heading"
                  className="mt-4 text-[clamp(1.75rem,3.4vw,2.5rem)] leading-[1.15] font-extrabold tracking-[-0.03em] text-navy"
                >
                  Turning Ambition Into{" "}
                  <span className="text-brand-gradient">Digital Growth.</span>
                </h2>

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
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE DO SECTION */}
        <section
          aria-labelledby="what-we-do-heading"
          className="bg-soft-gray py-14 sm:py-16 lg:py-24"
        >
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
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

            <ul className="mt-8 sm:mt-10 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {WHAT_WE_DO.map(({ n, title, text, icon: Icon }) => (
                <li key={n}>
                  <article className="group flex h-full flex-col justify-between rounded-3xl border border-border bg-card p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-30px_var(--navy)]">
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-secondary text-brand-amber">
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
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* JOURNEY / CAPABILITIES */}
        <section
          aria-labelledby="capabilities-heading"
          className="py-14 sm:py-16 lg:py-24 bg-background"
        >
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
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

            <ol className="mt-10 sm:mt-12 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
              {JOURNEY.map(({ title, text, icon: Icon }, index) => (
                <li key={title}>
                  <div className="flex flex-col h-full rounded-2xl border border-border bg-card p-5 shadow-2xs">
                    <div className="flex items-center justify-between">
                      <div className="inline-flex size-11 items-center justify-center rounded-xl bg-secondary text-navy">
                        <Icon className="size-5" strokeWidth={1.8} aria-hidden="true" />
                      </div>
                      <span className="bg-brand-gradient flex size-6 items-center justify-center rounded-full text-[11px] font-black text-navy shadow-xs">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="mt-4 text-[15.5px] font-bold text-navy">{title}</h3>
                    <p className="mt-1.5 text-[13px] leading-[1.65] text-muted-foreground">
                      {text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* WHY LUMOS */}
        <section aria-labelledby="why-heading" className="bg-soft-gray py-14 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
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

            <ul className="mt-8 sm:mt-10 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {WHY.map(({ title, text, icon: Icon }) => (
                <li key={title}>
                  <article className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 sm:p-7 shadow-2xs transition-shadow hover:shadow-md">
                    <span className="inline-flex size-12 items-center justify-center rounded-xl bg-secondary text-accent-blue">
                      <Icon className="size-5" strokeWidth={2} aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-[16.5px] font-bold text-navy">{title}</h3>
                    <p className="mt-2 text-[13.5px] leading-[1.75] text-muted-foreground">
                      {text}
                    </p>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* INDUSTRIES WE SERVE */}
        <section aria-labelledby="industries-heading" className="py-14 sm:py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
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

            <ul className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
              {INDUSTRIES.map(({ label, icon: Icon }) => (
                <li
                  key={label}
                  className="flex min-w-0 items-center gap-3 rounded-2xl border border-border bg-card p-4 transition-all hover:border-brand-amber hover:shadow-xs"
                >
                  <Icon
                    className="size-5 shrink-0 text-brand-coral"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                  <span className="min-w-0 text-[13px] font-semibold text-navy leading-tight">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FINAL CTA BANNER */}
        <section aria-labelledby="about-cta-heading" className="bg-background pb-12 sm:pb-16 lg:pb-20">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-navy px-6 py-14 text-center sm:px-10 lg:py-18">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 -left-16 size-72 rounded-full bg-brand-amber/20 blur-3xl"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -bottom-24 size-72 rounded-full bg-accent-blue/20 blur-3xl"
              />

              <div className="relative max-w-2xl mx-auto">
                <h2
                  id="about-cta-heading"
                  className="text-[clamp(1.85rem,4.4vw,2.85rem)] leading-[1.12] font-extrabold tracking-[-0.035em] text-primary-foreground"
                >
                  Ready To Build A Brand That Grows?
                </h2>
                <p className="mt-4 text-[14.5px] sm:text-[15.5px] leading-[1.8] text-primary-foreground/75">
                  Let&apos;s turn your ambitions into a vibrant digital presence that earns
                  attention, trust, and profitable growth.
                </p>
                <Button
                  asChild
                  className="bg-brand-gradient mt-8 h-[52px] w-full sm:w-auto rounded-full px-8 text-[15px] font-semibold text-navy shadow-lg hover:opacity-90"
                >
                  <Link to="/contact">
                    Start Your Project
                    <ArrowRight className="ml-2.5 size-4" strokeWidth={2.5} />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
