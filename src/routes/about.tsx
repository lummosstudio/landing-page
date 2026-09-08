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
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Button } from "@/components/ui/button";
import aboutHero from "@/assets/about-hero.webp";
import aboutStory from "@/assets/about-story.webp";

const TITLE = "About Lumos Digital Media | Marketing Agency";
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

const WHAT_WE_DO: { n: string; title: string; text: string; icon: LucideIcon }[] = [
  {
    n: "01",
    title: "Digital Marketing",
    text: "Connected digital strategies designed to improve visibility, engagement, leads and growth.",
    icon: Camera,
  },
  {
    n: "02",
    title: "Social Media",
    text: "Purposeful social strategies and platform-ready content that build active communities.",
    icon: Video,
  },
  {
    n: "03",
    title: "Creative Content",
    text: "Original reels, videos, campaigns and brand content designed to earn attention.",
    icon: Clapperboard,
  },
  {
    n: "04",
    title: "Paid Advertising",
    text: "Focused Meta and Google campaigns that reach the right audience and generate leads.",
    icon: Scissors,
  },
  {
    n: "05",
    title: "SEO & Local Growth",
    text: "Search and local marketing that help customers discover and choose your business.",
    icon: UserRound,
  },
  {
    n: "06",
    title: "Branding",
    text: "Distinctive identities and creative systems that make brands clear, trusted and memorable.",
    icon: Sparkles,
  },
];

const JOURNEY: { title: string; text: string; icon: LucideIcon }[] = [
  { title: "Discover", text: "We understand your business, audience, goals and market.", icon: Lightbulb },
  { title: "Strategy", text: "We define the channels, message and plan for growth.", icon: CalendarCheck },
  { title: "Create", text: "We develop content, campaigns and brand assets with purpose.", icon: Aperture },
  { title: "Launch", text: "We distribute every campaign across the right platforms.", icon: Wand2 },
  { title: "Optimize", text: "We review performance and improve what drives results.", icon: PackageCheck },
];

const WHY: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: "Custom Strategy",
    text: "Every business gets a focused strategy shaped around its goals, audience and market.",
    icon: Brain,
  },
  {
    title: "Creative Production",
    text: "Ideas, scripts, creatives, content and editing work together under one creative system.",
    icon: Settings2,
  },
  {
    title: "Performance Focus",
    text: "We focus on the outcomes that matter: visibility, engagement, qualified leads and growth.",
    icon: ScanSearch,
  },
  {
    title: "Business Understanding",
    text: "We connect creative decisions to your wider business priorities and customer journey.",
    icon: TrendingUp,
  },
  {
    title: "Trend-Aware",
    text: "We adapt content and campaigns as platforms, formats and audience behaviour evolve.",
    icon: Layers,
  },
  {
    title: "Long-Term Partnership",
    text: "We work as an invested growth partner, not simply a posting or delivery service.",
    icon: LifeBuoy,
  },
];

const INDUSTRIES: { label: string; icon: LucideIcon }[] = [
  { label: "Restaurants & Cafés", icon: UtensilsCrossed },
  { label: "Hotels & Resorts", icon: Hotel },
  { label: "Real Estate", icon: Building2 },
  { label: "Solar & Energy", icon: Sun },
  { label: "Construction", icon: HardHat },
  { label: "Travel & Hospitality", icon: Plane },
  { label: "Fashion & Lifestyle", icon: Shirt },
  { label: "Startups", icon: Rocket },
  { label: "Local Businesses", icon: Store },
  { label: "Founders & Personal Brands", icon: Mic },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11.5px] font-bold tracking-[0.16em] text-navy uppercase">
      {children}
    </p>
  );
}

function AboutPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <SiteHeader activeItem="About" />

      <main>
        {/* HERO */}
        <section
          aria-labelledby="about-hero-heading"
          className="overflow-hidden bg-background"
        >
          <div className="mx-auto grid max-w-[1440px] items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <div className="order-2 px-5 pb-14 sm:px-8 lg:order-1 lg:py-20 lg:pl-[max(2rem,calc((100vw-1240px)/2))] lg:pr-8">
              <SectionLabel>
                 About <span className="text-brand-gradient">Lumos Digital Media</span>
              </SectionLabel>

              <h1
                id="about-hero-heading"
                className="mt-5 text-[clamp(2.25rem,5.4vw,3.75rem)] leading-[1.05] font-extrabold tracking-[-0.035em] text-navy"
              >
                 We Build Brands
                <br />
                 That Are Ready
                <br />
                 <span className="text-brand-gradient">To Grow.</span>
              </h1>

              <p className="mt-6 max-w-[34rem] text-[15px] leading-[1.8] text-muted-foreground">
                 Lumos Digital Media is a creative digital marketing and branding
                 agency helping businesses grow through smart strategy, compelling
                 content and performance-focused campaigns.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Button
                  asChild
                  className="h-[54px] w-full rounded-xl bg-navy px-7 text-[15px] font-semibold text-primary-foreground shadow-[0_16px_34px_-16px_var(--navy)] hover:bg-navy/90 sm:w-auto"
                >
                  <Link to="/contact">
                    Start Your Project
                    <ArrowRight className="ml-2.5 size-4" strokeWidth={2.5} />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-[54px] w-full rounded-full border-border bg-card px-7 text-[15px] font-semibold text-navy hover:bg-secondary sm:w-auto"
                >
                  <a href="/#works">
                    View Our Work
                    <ArrowRight className="ml-2.5 size-4" strokeWidth={2.5} />
                  </a>
                </Button>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative overflow-hidden bg-soft-gray lg:rounded-l-[2.5rem]">
                <img
                  src={aboutHero}
                  alt="Lumos Digital studio in Pondicherry with a cinema camera on a tripod and softbox lighting"
                  width={1200}
                  height={1000}
                  fetchPriority="high"
                  decoding="async"
                  className="h-[280px] w-full object-cover sm:h-[380px] lg:h-[540px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* OUR STORY */}
        <section aria-labelledby="story-heading" className="py-16 lg:py-24">
          <div className="mx-auto grid max-w-[1240px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
            <div className="relative">
              <img
                src={aboutStory}
                alt="Photographer reviewing images on a professional camera during a Lumos Digital shoot"
                width={1000}
                height={1100}
                loading="lazy"
                className="h-[320px] w-full rounded-3xl object-cover sm:h-[440px] lg:h-[520px]"
              />
              <span
                aria-hidden="true"
                className="absolute -top-3 -left-3 hidden size-16 rounded-tl-3xl border-t-[3px] border-l-[3px] border-brand-amber sm:block"
              />
              <span
                aria-hidden="true"
                className="absolute -right-3 -bottom-3 hidden size-16 rounded-br-3xl border-r-[3px] border-b-[3px] border-accent-blue sm:block"
              />
            </div>

            <div>
              <SectionLabel>
                Our <span className="text-brand-gradient">Story</span>
              </SectionLabel>
              <h2
                id="story-heading"
                className="mt-3 text-[clamp(1.75rem,3.4vw,2.5rem)] leading-[1.15] font-extrabold tracking-[-0.03em] text-navy"
              >
                 Turning Ambition Into{" "}
                 <span className="text-brand-gradient">Digital Growth.</span>
              </h2>

              <div className="mt-6 space-y-5 text-[15px] leading-[1.85] text-muted-foreground">
                <p>
                   Lumos Digital Media was built around a simple idea — smart
                   marketing and strong creativity can transform a business.
                </p>
                <p>
                   From brand strategy to social content and paid campaigns, every
                   idea should have a clear purpose.
                </p>
                <p>
                   We work with businesses, founders and personal brands to turn
                   ideas into focused marketing that communicates clearly, reaches
                   the right audience and creates a stronger digital presence.
                </p>
                <p>
                   We combine strategic thinking, brand building, creative content
                   and performance marketing to create work that earns attention,
                   builds trust and supports long-term growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section
          aria-labelledby="what-we-do-heading"
          className="bg-soft-gray py-16 lg:py-24"
        >
          <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
            <SectionLabel>
              What <span className="text-brand-gradient">We</span> Do
            </SectionLabel>
            <h2
              id="what-we-do-heading"
              className="mt-3 max-w-[24rem] text-[clamp(1.75rem,3.4vw,2.5rem)] leading-[1.15] font-extrabold tracking-[-0.03em] text-navy"
            >
               Everything Your Brand Needs{" "}
               <span className="text-brand-gradient">To Grow.</span>
            </h2>

            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {WHAT_WE_DO.map(({ n, title, text, icon: Icon }) => (
                <li key={n}>
                  <article className="group flex h-full flex-col rounded-3xl border border-border bg-card p-7 transition-shadow hover:shadow-[0_26px_60px_-38px_var(--navy)]">
                    <div className="flex items-start justify-between gap-4">
                      <Icon
                        className="size-7 shrink-0 text-brand-amber"
                        strokeWidth={1.6}
                        aria-hidden="true"
                      />
                      <span className="text-[13px] font-bold tracking-[0.1em] text-muted-foreground/60">
                        {n}
                      </span>
                    </div>
                    <h3 className="mt-7 text-[17px] font-bold tracking-[-0.01em] text-navy">
                      {title}
                    </h3>
                    <p className="mt-2.5 text-[13.5px] leading-[1.75] text-muted-foreground">
                      {text}
                    </p>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CAPABILITIES / JOURNEY */}
        <section
          aria-labelledby="capabilities-heading"
          className="py-16 lg:py-24"
        >
          <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <SectionLabel>
                  Our <span className="text-brand-gradient">Capabilities</span>
                </SectionLabel>
                <h2
                  id="capabilities-heading"
                  className="mt-3 text-[clamp(1.75rem,3.4vw,2.5rem)] leading-[1.15] font-extrabold tracking-[-0.03em] text-navy"
                >
                   From Insight To{" "}
                   <span className="text-brand-gradient">Impact.</span>
                </h2>
              </div>
              <p className="max-w-[24rem] text-[14px] leading-[1.8] text-muted-foreground">
                 A connected marketing process keeps strategy, creativity and
                 performance moving toward the same business goal.
              </p>
            </div>

            <ol className="relative mt-12 grid gap-6 lg:grid-cols-5">
              <span
                aria-hidden="true"
                className="absolute top-9 right-8 left-8 hidden border-t-2 border-dashed border-border lg:block"
              />
              {JOURNEY.map(({ title, text, icon: Icon }, index) => (
                <li key={title} className="relative">
                  <div className="flex items-center gap-4 lg:flex-col lg:items-start">
                    <span className="relative z-10 inline-flex size-[72px] shrink-0 items-center justify-center rounded-2xl border border-border bg-card shadow-[0_18px_40px_-30px_var(--navy)]">
                      <Icon
                        className="size-6 text-navy"
                        strokeWidth={1.6}
                        aria-hidden="true"
                      />
                      <span className="bg-brand-gradient absolute -top-2 -right-2 inline-flex size-6 items-center justify-center rounded-full text-[10.5px] font-bold text-navy">
                        {index + 1}
                      </span>
                    </span>
                    <div className="min-w-0 lg:mt-6">
                      <h3 className="text-[15.5px] font-bold text-navy">
                        {title}
                      </h3>
                      <p className="mt-1.5 text-[13px] leading-[1.7] text-muted-foreground">
                        {text}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* WHY LUMOS */}
        <section aria-labelledby="why-heading" className="bg-soft-gray py-16 lg:py-24">
          <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
            <SectionLabel>
              Why <span className="text-brand-gradient">Lumos</span>
            </SectionLabel>
            <h2
              id="why-heading"
              className="mt-3 max-w-[28rem] text-[clamp(1.75rem,3.4vw,2.5rem)] leading-[1.15] font-extrabold tracking-[-0.03em] text-navy"
            >
              Why Brands{" "}
              <span className="text-brand-gradient">Choose Lumos</span>
            </h2>

            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {WHY.map(({ title, text, icon: Icon }) => (
                <li key={title}>
                  <article className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 transition-shadow hover:shadow-[0_26px_60px_-38px_var(--navy)]">
                    <span className="inline-flex size-12 items-center justify-center rounded-xl bg-secondary">
                      <Icon
                        className="size-5 text-accent-blue"
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                    </span>
                    <h3 className="mt-6 text-[16.5px] font-bold text-navy">
                      {title}
                    </h3>
                    <p className="mt-2.5 text-[13.5px] leading-[1.75] text-muted-foreground">
                      {text}
                    </p>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* WHO WE WORK WITH */}
        <section aria-labelledby="industries-heading" className="py-16 lg:py-24">
          <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
            <SectionLabel>
              Who <span className="text-brand-gradient">We Work With</span>
            </SectionLabel>
            <h2
              id="industries-heading"
              className="mt-3 max-w-[26rem] text-[clamp(1.75rem,3.4vw,2.5rem)] leading-[1.15] font-extrabold tracking-[-0.03em] text-navy"
            >
              Built For Brands Of{" "}
              <span className="text-brand-gradient">All Sizes</span>
            </h2>

            <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {INDUSTRIES.map(({ label, icon: Icon }) => (
                <li
                  key={label}
                  className="flex min-w-0 items-center gap-3 rounded-2xl border border-border bg-card px-4 py-4 transition-colors hover:border-brand-amber"
                >
                  <Icon
                    className="size-5 shrink-0 text-brand-coral"
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                  <span className="min-w-0 text-[13px] leading-[1.4] font-semibold text-navy">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* PHILOSOPHY */}
        <section
          aria-labelledby="philosophy-heading"
          className="bg-soft-gray py-20 lg:py-28"
        >
          <div className="mx-auto max-w-[1240px] px-5 text-center sm:px-8">
            <SectionLabel>
              Our <span className="text-brand-gradient">Philosophy</span>
            </SectionLabel>
            <h2
              id="philosophy-heading"
              className="mx-auto mt-6 max-w-[52rem] text-[clamp(1.85rem,5vw,3.5rem)] leading-[1.12] font-extrabold tracking-[-0.035em] text-navy"
            >
               Smart marketing gets{" "}
              <span className="text-brand-gradient">attention.</span>
              <br />
               Strong brands
              <br />
               earn <span className="text-brand-gradient">trust.</span>
            </h2>
            <span
              aria-hidden="true"
              className="bg-brand-gradient mx-auto mt-10 block h-[3px] w-24 rounded-full"
            />
          </div>
        </section>

        {/* FINAL CTA */}
        <section aria-labelledby="about-cta-heading" className="bg-background py-16 lg:py-20">
          <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-navy px-6 py-16 text-center sm:px-10 lg:py-20">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 -left-16 size-72 rounded-full bg-brand-amber/25 blur-3xl"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -bottom-24 size-72 rounded-full bg-accent-blue/25 blur-3xl"
              />

              <div className="relative">
                <h2
                  id="about-cta-heading"
                  className="mx-auto max-w-[30rem] text-[clamp(1.85rem,4.4vw,3rem)] leading-[1.1] font-extrabold tracking-[-0.035em] text-primary-foreground"
                >
                   Ready To Build A Brand That Grows?
                </h2>
                <p className="mx-auto mt-5 max-w-[32rem] text-[14.5px] leading-[1.8] text-primary-foreground/70">
                   Let&apos;s turn your goals into a digital presence that earns
                   attention, trust and meaningful growth.
                </p>
                <Button
                  asChild
                  className="bg-brand-gradient mt-9 h-[54px] rounded-full px-8 text-[15px] font-semibold text-navy hover:opacity-90"
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
