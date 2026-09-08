import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Instagram,
  CheckCircle2,
  Sparkles,
  Camera,
  MessagesSquare,
  Clock,
  Navigation,
  Send,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import contactStudio from "@/assets/contact-studio.webp";

const TITLE = "Contact Lumos Digital Media | Grow Your Brand";
const DESCRIPTION =
  "Contact Lumos Digital Media for digital marketing, social media, branding, content, advertising, SEO and lead generation support.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/contact" },
      { rel: "preload", as: "image", href: contactStudio, fetchPriority: "high" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Lumos Digital Media",
          description: DESCRIPTION,
          email: "info@lumosdigitalmedia.in",
          telephone: "+91 90037 82254",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Pondicherry",
            addressRegion: "Tamil Nadu",
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
  component: ContactPage,
});

const PROJECT_TYPES = [
  "Digital Marketing",
  "Social Media Management",
  "Paid Advertising (Meta / Google)",
  "SEO & Local Growth",
  "Brand Identity & Logo",
  "Creative Content & Video Production",
  "Lead Generation Campaigns",
  "Personal Branding",
  "Website / Landing Page",
  "Comprehensive Retainer",
];

const BUDGETS = [
  "Under ₹15,000 / month",
  "₹15,000 – ₹30,000 / month",
  "₹30,000 – ₹60,000 / month",
  "₹60,000 – ₹1,20,000 / month",
  "₹1,20,000+ / month",
  "One-time Project / Let's Discuss",
];

const REASONS: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: "Strategic Approach",
    text: "Every engagement starts with your business goals, target audience and competitive space.",
    icon: Sparkles,
  },
  {
    title: "In-House Production",
    text: "End-to-end cinematography, scripts, graphic design and ad creatives.",
    icon: Camera,
  },
  {
    title: "Transparent Reporting",
    text: "Clear scope, straightforward pricing, and regular performance analytics.",
    icon: MessagesSquare,
  },
  {
    title: "Fast Turnaround",
    text: "Campaigns, content calendars, and brand assets delivered strictly on schedule.",
    icon: Clock,
  },
];

const FAQS: { q: string; a: string }[] = [
  {
    q: "What marketing services do you provide?",
    a: "We provide comprehensive digital marketing, social media management, performance advertising (Meta & Google), cinematic video production, reels, SEO, lead generation, branding and web development.",
  },
  {
    q: "Can you manage our complete digital presence?",
    a: "Yes. We operate as a full-service growth partner, synchronizing brand strategy, creative production, publishing, ads and performance optimization.",
  },
  {
    q: "How fast can we get started with a campaign?",
    a: "After an initial discovery call and agreed scope, we typically kick off strategy and initial creative production within 3 to 5 business days.",
  },
  {
    q: "Do you handle shooting and video creation locally?",
    a: "Yes. Our team manages on-location photography and cinematic video production in Pondicherry, Chennai, and across Tamil Nadu.",
  },
  {
    q: "How do you measure and report ROI?",
    a: "We track qualified leads, cost per acquisition (CPA), conversion rates, and ROAS using transparent dashboards shared with you monthly.",
  },
  {
    q: "How can I get a customized proposal?",
    a: "Fill out the enquiry form below or call us directly. We review your requirements and share a structured proposal within one business day.",
  },
];

const SELECT_CLASS =
  "h-12 w-full rounded-xl border border-input bg-card px-4 text-[14px] text-navy outline-none transition-all focus-visible:border-accent-blue focus-visible:ring-2 focus-visible:ring-accent-blue/30";

const FIELD_CLASS =
  "h-12 rounded-xl border border-input bg-card px-4 text-[14px] text-navy placeholder:text-muted-foreground/60 transition-all focus-visible:border-accent-blue focus-visible:ring-2 focus-visible:ring-accent-blue/30";

const LABEL_CLASS = "text-[13px] font-semibold text-navy";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card/80 px-3.5 py-1 text-[11.5px] font-bold tracking-[0.14em] text-navy uppercase shadow-2xs backdrop-blur-sm">
      {children}
    </div>
  );
}

const CONTACT_CARDS: {
  label: string;
  icon: LucideIcon;
  items: { text: string; href: string }[];
}[] = [
  {
    label: "Phone & WhatsApp",
    icon: Phone,
    items: [
      { text: "+91 90037 82254", href: "tel:+919003782254" },
      { text: "+91 97875 82488", href: "tel:+919787582488" },
    ],
  },
  {
    label: "Email Address",
    icon: Mail,
    items: [
      {
        text: "info@lumosdigitalmedia.in",
        href: "mailto:info@lumosdigitalmedia.in",
      },
    ],
  },
  {
    label: "Studio Location",
    icon: MapPin,
    items: [
      {
        text: "Pondicherry, Tamil Nadu, India",
        href: "https://maps.google.com/?q=Pondicherry,Tamil+Nadu,India",
      },
    ],
  },
  {
    label: "Social Connect",
    icon: Instagram,
    items: [
      {
        text: "@lumos_digital_media",
        href: "https://instagram.com/lumos_digital_media",
      },
    ],
  },
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-background font-sans">
      <SiteHeader activeItem="Contact" />

      <main>
        {/* HERO SECTION */}
        <section
          aria-labelledby="contact-hero-heading"
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
                  Get In <span className="text-brand-gradient">Touch</span>
                </SectionLabel>

                <h1
                  id="contact-hero-heading"
                  className="mt-5 text-[clamp(2.35rem,5.2vw,3.85rem)] leading-[1.08] font-extrabold tracking-[-0.035em] text-navy"
                >
                  Let&apos;s Grow
                  <br />
                  Something
                  <br />
                  <span className="text-brand-gradient relative inline-block">
                    Meaningful.
                  </span>
                </h1>

                <p className="mt-5 max-w-[520px] text-[15.5px] sm:text-[16.5px] leading-[1.75] text-muted-foreground">
                  Have an ambitious brand, video campaign, or growth goal in mind?
                  Share your objectives and let&apos;s discuss the strategy, content,
                  and performance marketing that will get you there.
                </p>

                {/* Direct Action Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
                  <Button
                    asChild
                    className="h-[52px] rounded-xl bg-navy px-8 text-[15px] font-semibold text-primary-foreground shadow-[0_14px_30px_-12px_var(--navy)] hover:bg-navy/90 active:scale-[0.99]"
                  >
                    <a href="#enquiry">
                      Start A Conversation
                      <ArrowRight className="ml-2.5 size-4" strokeWidth={2.5} />
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="h-[52px] rounded-xl border-border bg-card px-6 text-[15px] font-semibold text-navy hover:bg-secondary active:scale-[0.99]"
                  >
                    <a href="tel:+919003782254" className="inline-flex items-center">
                      <Phone className="mr-2 size-4 text-brand-coral" />
                      +91 90037 82254
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
                        src={contactStudio}
                        alt="Creative studio workstation at Lumos Digital"
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
                        <MapPin className="size-4" />
                      </span>
                      <div className="leading-tight">
                        <p className="text-[11px] font-extrabold text-navy uppercase tracking-wide">
                          Pondicherry Studio
                        </p>
                        <p className="text-[10px] font-medium text-muted-foreground">
                          Tamil Nadu, India
                        </p>
                      </div>
                    </div>

                    <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-2xl border border-card/60 bg-card/95 p-3 shadow-xl backdrop-blur-md">
                      <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                        <Clock className="size-5" />
                      </div>
                      <div className="leading-tight">
                        <p className="text-[14px] font-black text-navy">
                          Quick Response
                        </p>
                        <p className="text-[11px] font-medium text-muted-foreground">
                          Within 24 Hours
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT INFO CARDS */}
        <section aria-labelledby="contact-info-heading" className="py-10 sm:py-14 bg-card/40 border-y border-border/40">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <h2 id="contact-info-heading" className="sr-only">
              Contact information
            </h2>
            <ul className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {CONTACT_CARDS.map(({ label, icon: Icon, items }) => (
                <li key={label}>
                  <article className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-2xs transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                    <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-secondary text-brand-coral">
                      <Icon className="size-5" strokeWidth={2} aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 text-[12px] font-bold tracking-[0.14em] text-muted-foreground uppercase">
                      {label}
                    </h3>
                    <ul className="mt-2 space-y-1.5">
                      {items.map((item) => (
                        <li key={item.text}>
                          <a
                            href={item.href}
                            className="text-[15px] font-bold break-words text-navy transition-colors hover:text-brand-coral"
                          >
                            {item.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FORM + WHY SECTION */}
        <section
          id="enquiry"
          aria-labelledby="enquiry-heading"
          className="scroll-mt-12 bg-soft-gray py-14 sm:py-16 lg:py-24"
        >
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 items-start">
              {/* Form Container (7 cols on desktop) */}
              <div className="rounded-3xl border border-border bg-card p-6 sm:p-9 lg:col-span-7 shadow-sm">
                <SectionLabel>
                  Growth <span className="text-brand-gradient">Enquiry</span>
                </SectionLabel>
                <h2
                  id="enquiry-heading"
                  className="mt-4 text-[clamp(1.6rem,3vw,2.25rem)] leading-[1.15] font-extrabold tracking-[-0.03em] text-navy"
                >
                  Tell Us About{" "}
                  <span className="text-brand-gradient">Your Vision</span>
                </h2>

                {submitted ? (
                  <div className="mt-8 rounded-2xl border border-border bg-secondary/80 p-8 text-center">
                    <CheckCircle2
                      className="mx-auto size-14 text-emerald-600"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                    <h3 className="mt-5 text-[20px] font-extrabold text-navy">
                      Thank you! Your enquiry has been received.
                    </h3>
                    <p className="mx-auto mt-2.5 max-w-md text-[14.5px] leading-[1.75] text-muted-foreground">
                      Our strategy team will review your business details and get in touch with you
                      within one business day.
                    </p>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setSubmitted(false)}
                      className="mt-6 h-11 rounded-full border-border bg-card px-6 text-[14px] font-semibold text-navy hover:bg-secondary"
                    >
                      Send another enquiry
                    </Button>
                  </div>
                ) : (
                  <form
                    className="mt-7 grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2"
                    onSubmit={(event) => {
                      event.preventDefault();
                      setSubmitted(true);
                    }}
                  >
                    <div className="grid gap-2">
                      <Label htmlFor="fullName" className={LABEL_CLASS}>
                        Full Name *
                      </Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        required
                        maxLength={100}
                        autoComplete="name"
                        placeholder="Your full name"
                        className={FIELD_CLASS}
                      />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="company" className={LABEL_CLASS}>
                        Brand / Company Name
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        maxLength={100}
                        autoComplete="organization"
                        placeholder="e.g. Royal Stays"
                        className={FIELD_CLASS}
                      />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="email" className={LABEL_CLASS}>
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        maxLength={255}
                        autoComplete="email"
                        placeholder="you@company.com"
                        className={FIELD_CLASS}
                      />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="phone" className={LABEL_CLASS}>
                        Phone / WhatsApp *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        maxLength={20}
                        autoComplete="tel"
                        placeholder="+91 90037 82254"
                        className={FIELD_CLASS}
                      />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="projectType" className={LABEL_CLASS}>
                        Primary Service Needed
                      </Label>
                      <select
                        id="projectType"
                        name="projectType"
                        defaultValue=""
                        className={SELECT_CLASS}
                      >
                        <option value="" disabled>
                          Select a service focus
                        </option>
                        {PROJECT_TYPES.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="budget" className={LABEL_CLASS}>
                        Estimated Monthly Budget
                      </Label>
                      <select
                        id="budget"
                        name="budget"
                        defaultValue=""
                        className={SELECT_CLASS}
                      >
                        <option value="" disabled>
                          Select budget range
                        </option>
                        {BUDGETS.map((budget) => (
                          <option key={budget} value={budget}>
                            {budget}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid gap-2 sm:col-span-2">
                      <Label htmlFor="details" className={LABEL_CLASS}>
                        Tell Us About Your Goals *
                      </Label>
                      <Textarea
                        id="details"
                        name="details"
                        required
                        rows={4}
                        maxLength={1000}
                        placeholder="Describe your brand, current challenges, and what milestones you aim to achieve..."
                        className="rounded-xl border border-input bg-card px-4 py-3 text-[14px] text-navy placeholder:text-muted-foreground/60 focus-visible:border-accent-blue focus-visible:ring-2 focus-visible:ring-accent-blue/30"
                      />
                    </div>

                    <div className="sm:col-span-2 pt-2">
                      <Button
                        type="submit"
                        className="h-[52px] w-full sm:w-auto rounded-xl bg-navy px-8 text-[15px] font-semibold text-primary-foreground shadow-[0_14px_30px_-12px_var(--navy)] hover:bg-navy/90 active:scale-[0.99]"
                      >
                        <Send className="mr-2 size-4" />
                        Send Growth Enquiry
                      </Button>
                    </div>
                  </form>
                )}
              </div>

              {/* Why Lumos Info (5 cols on desktop) */}
              <div className="lg:col-span-5">
                <SectionLabel>
                  Why <span className="text-brand-gradient">Lumos</span>
                </SectionLabel>
                <h2 className="mt-4 text-[clamp(1.6rem,3vw,2.25rem)] leading-[1.15] font-extrabold tracking-[-0.03em] text-navy">
                  Why Partner With{" "}
                  <span className="text-brand-gradient">Our Team?</span>
                </h2>

                <ul className="mt-6 space-y-3.5">
                  {REASONS.map(({ title, text, icon: Icon }) => (
                    <li
                      key={title}
                      className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-2xs transition-shadow hover:shadow-xs"
                    >
                      <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-brand-amber">
                        <Icon className="size-5" strokeWidth={2} aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="text-[15.5px] font-bold text-navy">{title}</h3>
                        <p className="mt-1 text-[13px] leading-[1.65] text-muted-foreground">
                          {text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* LOCATION SECTION */}
        <section aria-labelledby="location-heading" className="py-14 sm:py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl">
              <SectionLabel>
                Our <span className="text-brand-gradient">Location</span>
              </SectionLabel>
              <h2
                id="location-heading"
                className="mt-4 text-[clamp(1.75rem,3.4vw,2.5rem)] leading-[1.15] font-extrabold tracking-[-0.03em] text-navy"
              >
                Find Us In{" "}
                <span className="text-brand-gradient">Pondicherry</span>
              </h2>
            </div>

            <div className="mt-8 sm:mt-10 grid gap-6 rounded-3xl border border-border bg-card p-5 sm:p-8 lg:grid-cols-12 lg:items-center shadow-xs">
              <div className="lg:col-span-5">
                <p className="text-[12px] font-bold tracking-[0.14em] text-muted-foreground uppercase">
                  Main Studio
                </p>
                <p className="mt-2 text-[20px] font-extrabold text-navy">
                  Pondicherry, Tamil Nadu, India
                </p>
                <p className="mt-3 text-[14.5px] leading-[1.75] text-muted-foreground">
                  Headquartered in coastal Pondicherry, we work with ambitious brands
                  across Tamil Nadu, Bangalore, Kerala, and across India.
                </p>
                <Button
                  asChild
                  className="mt-6 h-11 w-full sm:w-auto rounded-xl bg-navy px-6 text-[14px] font-semibold text-primary-foreground hover:bg-navy/90"
                >
                  <a
                    href="https://maps.google.com/?q=Pondicherry,Tamil+Nadu,India"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Navigation className="mr-2 size-4" strokeWidth={2.4} />
                    Get Directions
                  </a>
                </Button>
              </div>

              <div className="relative h-[260px] sm:h-[300px] overflow-hidden rounded-2xl bg-soft-gray lg:col-span-7">
                <iframe
                  title="Map showing Lumos Digital's location in Pondicherry, Tamil Nadu"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=79.75%2C11.87%2C79.87%2C11.97&layer=mapnik&marker=11.9139%2C79.8145"
                  loading="lazy"
                  className="size-full border-0"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section aria-labelledby="faq-heading" className="bg-soft-gray py-14 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-5">
                <SectionLabel>
                  Frequently <span className="text-brand-gradient">Asked</span>
                </SectionLabel>
                <h2
                  id="faq-heading"
                  className="mt-4 text-[clamp(1.75rem,3.4vw,2.5rem)] leading-[1.15] font-extrabold tracking-[-0.03em] text-navy"
                >
                  Questions,{" "}
                  <span className="text-brand-gradient">Answered.</span>
                </h2>
                <p className="mt-4 text-[14.5px] leading-[1.75] text-muted-foreground">
                  Need a specialized marketing scope or have unique timeline requirements?
                  We&apos;re here to answer any questions.
                </p>
              </div>

              <div className="lg:col-span-7">
                <Accordion type="single" collapsible className="w-full space-y-3">
                  {FAQS.map(({ q, a }, index) => (
                    <AccordionItem
                      key={q}
                      value={`faq-${index}`}
                      className="rounded-2xl border border-border bg-card px-5 shadow-2xs"
                    >
                      <AccordionTrigger className="py-4 sm:py-5 text-left text-[15px] font-bold text-navy hover:no-underline">
                        {q}
                      </AccordionTrigger>
                      <AccordionContent className="pb-5 text-[14px] leading-[1.75] text-muted-foreground">
                        {a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA BANNER */}
        <section
          aria-labelledby="contact-cta-heading"
          className="bg-background pb-12 sm:pb-16 lg:pb-20"
        >
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-navy px-6 py-14 text-center sm:px-10 lg:py-18">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 -right-16 size-72 rounded-full bg-brand-amber/20 blur-3xl"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-24 -left-16 size-72 rounded-full bg-accent-blue/20 blur-3xl"
              />
              <div className="relative max-w-2xl mx-auto">
                <h2
                  id="contact-cta-heading"
                  className="text-[clamp(1.85rem,4.4vw,2.85rem)] leading-[1.12] font-extrabold tracking-[-0.035em] text-primary-foreground"
                >
                  Your Next Stage Of Growth Starts Here.
                </h2>
                <p className="mt-4 text-[14.5px] sm:text-[15.5px] leading-[1.8] text-primary-foreground/75">
                  Let&apos;s build a digital presence that gets attention, commands trust,
                  and fuels predictable business expansion.
                </p>
                <Button
                  asChild
                  className="bg-brand-gradient mt-8 h-[52px] w-full sm:w-auto rounded-full px-8 text-[15px] font-semibold text-navy shadow-lg hover:opacity-90"
                >
                  <a href="#enquiry">
                    Book A Consultation
                    <ArrowRight className="ml-2.5 size-4" strokeWidth={2.5} />
                  </a>
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
