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
  "Paid Advertising",
  "SEO & Local Growth",
  "Brand Identity",
  "Creative Content",
  "Lead Generation",
  "Personal Branding",
  "Website / Landing Page",
  "Other",
];

const BUDGETS = [
  "Under ₹10,000",
  "₹10,000 – ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000+",
  "Let's Discuss",
];

const REASONS: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: "Creative Approach",
    text: "Every engagement starts with your goals, audience and market.",
    icon: Sparkles,
  },
  {
    title: "Growth-Focused Strategy",
    text: "Creative thinking and focused marketing work together to drive growth.",
    icon: Camera,
  },
  {
    title: "Transparent Communication",
    text: "Clear scope, clear pricing and updates at every stage.",
    icon: MessagesSquare,
  },
  {
    title: "On-Time Delivery",
    text: "Campaigns, content and brand assets delivered on an agreed schedule.",
    icon: Clock,
  },
];

const FAQS: { q: string; a: string }[] = [
  {
    q: "What marketing services do you provide?",
    a: "We support digital marketing, social media management, paid advertising, SEO, lead generation, branding, websites, reels and creative content.",
  },
  {
    q: "Can you manage our complete digital presence?",
    a: "Yes. We can connect strategy, branding, content, campaigns and optimization into one clear growth plan for your business.",
  },
  {
    q: "Can you build a strategy for our business?",
    a: "Absolutely. We study your goals, audience, market and current presence before recommending channels, content and campaigns.",
  },
  {
    q: "Do you create social media and video content?",
    a: "Yes. We create platform-ready social creatives, reels, promotional videos, ad creatives and personal branding content.",
  },
  {
    q: "Do you run paid advertising campaigns?",
    a: "Yes. We plan, launch and optimize Meta and Google campaigns around awareness, enquiries, leads and business growth.",
  },
  {
    q: "Can you help with SEO and local business growth?",
    a: "Yes. We improve search visibility and build local marketing activity that helps nearby customers discover your business.",
  },
  {
    q: "How can I get a marketing proposal?",
    a: "Share your goals through the enquiry form or call us. We'll discuss the scope and send a clear proposal, usually within one working day.",
  },
];

const SELECT_CLASS =
  "h-12 w-full rounded-xl border border-input bg-card px-4 text-[14px] text-navy outline-none transition-colors focus-visible:border-accent-blue focus-visible:ring-[3px] focus-visible:ring-accent-blue/30";

const FIELD_CLASS =
  "h-12 rounded-xl border-input bg-card px-4 text-[14px] text-navy focus-visible:border-accent-blue focus-visible:ring-accent-blue/30";

const LABEL_CLASS = "text-[12.5px] font-semibold text-navy";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11.5px] font-bold tracking-[0.16em] text-navy uppercase">
      {children}
    </p>
  );
}

const CONTACT_CARDS: {
  label: string;
  icon: LucideIcon;
  items: { text: string; href: string }[];
}[] = [
  {
    label: "Phone",
    icon: Phone,
    items: [
      { text: "+91 90037 82254", href: "tel:+919003782254" },
      { text: "+91 97875 82488", href: "tel:+919787582488" },
    ],
  },
  {
    label: "Email",
    icon: Mail,
    items: [
      {
        text: "info@lumosdigitalmedia.in",
        href: "mailto:info@lumosdigitalmedia.in",
      },
    ],
  },
  {
    label: "Location",
    icon: MapPin,
    items: [
      {
        text: "Pondicherry, Tamil Nadu, India",
        href: "https://maps.google.com/?q=Pondicherry,Tamil+Nadu,India",
      },
    ],
  },
  {
    label: "Instagram",
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
        {/* HERO */}
        <section aria-labelledby="contact-hero-heading" className="overflow-hidden">
          <div className="mx-auto grid max-w-[1440px] items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <div className="order-2 px-5 pb-14 sm:px-8 lg:order-1 lg:py-20 lg:pl-[max(2rem,calc((100vw-1240px)/2))] lg:pr-8">
              <SectionLabel>
                Get In <span className="text-brand-gradient">Touch</span>
              </SectionLabel>

              <h1
                id="contact-hero-heading"
                className="mt-5 text-[clamp(2.25rem,5.4vw,3.75rem)] leading-[1.05] font-extrabold tracking-[-0.035em] text-navy"
              >
                 Let&apos;s Grow
                <br />
                Something
                <br />
                 <span className="text-brand-gradient">Meaningful.</span>
              </h1>

              <p className="mt-6 max-w-[32rem] text-[15px] leading-[1.8] text-muted-foreground">
                 Have a brand, campaign or growth goal in mind? Tell us where you
                 want to go and let&apos;s explore the strategy, content and marketing
                 that can get you there.
              </p>

              <Button
                asChild
                className="mt-9 h-[54px] w-full rounded-xl bg-navy px-7 text-[15px] font-semibold text-primary-foreground shadow-[0_16px_34px_-16px_var(--navy)] hover:bg-navy/90 sm:w-auto"
              >
                <a href="#enquiry">
                  Start A Conversation
                  <ArrowRight className="ml-2.5 size-4" strokeWidth={2.5} />
                </a>
              </Button>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative overflow-hidden bg-soft-gray lg:rounded-l-[2.5rem]">
                <img
                  src={contactStudio}
                  alt="Creative studio desk at Lumos Digital with a camera lens and a video editing timeline on a laptop"
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

        {/* CONTACT CARDS */}
        <section aria-labelledby="contact-info-heading" className="py-14 lg:py-16">
          <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
            <h2 id="contact-info-heading" className="sr-only">
              Contact information
            </h2>
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {CONTACT_CARDS.map(({ label, icon: Icon, items }) => (
                <li key={label}>
                  <article className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 transition-shadow hover:shadow-[0_26px_60px_-38px_var(--navy)]">
                    <span className="inline-flex size-12 items-center justify-center rounded-xl bg-secondary">
                      <Icon
                        className="size-5 text-brand-coral"
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                    </span>
                    <h3 className="mt-5 text-[11.5px] font-bold tracking-[0.16em] text-muted-foreground uppercase">
                      {label}
                    </h3>
                    <ul className="mt-2.5 space-y-1.5">
                      {items.map((item) => (
                        <li key={item.text}>
                          <a
                            href={item.href}
                            className="text-[14.5px] font-semibold break-words text-navy transition-colors hover:text-brand-coral"
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

        {/* FORM + WHY */}
        <section
          id="enquiry"
          aria-labelledby="enquiry-heading"
          className="scroll-mt-8 bg-soft-gray py-16 lg:py-24"
        >
          <div className="mx-auto grid max-w-[1240px] gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.85fr)] lg:gap-14">
            <div className="rounded-3xl border border-border bg-card p-6 sm:p-9">
              <SectionLabel>
                 Growth <span className="text-brand-gradient">Enquiry</span>
              </SectionLabel>
              <h2
                id="enquiry-heading"
                className="mt-3 text-[clamp(1.5rem,3vw,2.15rem)] leading-[1.15] font-extrabold tracking-[-0.03em] text-navy"
              >
                 Tell Us About{" "}
                 <span className="text-brand-gradient">Your Goals</span>
              </h2>

              {submitted ? (
                <div className="mt-10 rounded-2xl border border-border bg-secondary p-8 text-center">
                  <CheckCircle2
                    className="mx-auto size-12 text-accent-blue"
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                  <h3 className="mt-5 text-[19px] font-extrabold tracking-[-0.02em] text-navy">
                    Thank you — your enquiry is on its way.
                  </h3>
                  <p className="mx-auto mt-3 max-w-[26rem] text-[14px] leading-[1.8] text-muted-foreground">
                     Our team will review your goals and get back to you
                    within one working day.
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setSubmitted(false)}
                    className="mt-7 h-12 rounded-full border-border bg-card px-6 text-[14px] font-semibold text-navy hover:bg-secondary"
                  >
                    Send another enquiry
                  </Button>
                </div>
              ) : (
                <form
                  className="mt-8 grid gap-5 sm:grid-cols-2"
                  onSubmit={(event) => {
                    event.preventDefault();
                    // Backend integration point: submit form values here.
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
                      placeholder="Your name"
                      className={FIELD_CLASS}
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="company" className={LABEL_CLASS}>
                      Company / Brand
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      maxLength={100}
                      autoComplete="organization"
                      placeholder="Brand name"
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
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      maxLength={20}
                      autoComplete="tel"
                      placeholder="+91 00000 00000"
                      className={FIELD_CLASS}
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="projectType" className={LABEL_CLASS}>
                       Support You Need
                    </Label>
                    <select
                      id="projectType"
                      name="projectType"
                      defaultValue=""
                      className={SELECT_CLASS}
                    >
                      <option value="" disabled>
                         Select a service
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
                      Budget Range
                    </Label>
                    <select
                      id="budget"
                      name="budget"
                      defaultValue=""
                      className={SELECT_CLASS}
                    >
                      <option value="" disabled>
                        Select a budget range
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
                       Business Goals *
                    </Label>
                    <Textarea
                      id="details"
                      name="details"
                      required
                      rows={5}
                      maxLength={1000}
                       placeholder="Tell us about your business, audience, goals and what you'd like to achieve."
                      className="rounded-xl border-input bg-card px-4 py-3 text-[14px] text-navy focus-visible:border-accent-blue focus-visible:ring-accent-blue/30"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <Button
                      type="submit"
                      className="h-[54px] w-full rounded-xl bg-navy px-8 text-[15px] font-semibold text-primary-foreground shadow-[0_16px_34px_-16px_var(--navy)] hover:bg-navy/90 sm:w-auto"
                    >
                       Send Growth Enquiry
                      <ArrowRight className="ml-2.5 size-4" strokeWidth={2.5} />
                    </Button>
                  </div>
                </form>
              )}
            </div>

            <div>
              <SectionLabel>
                Why <span className="text-brand-gradient">Lumos</span>
              </SectionLabel>
              <h2 className="mt-3 text-[clamp(1.5rem,3vw,2.15rem)] leading-[1.15] font-extrabold tracking-[-0.03em] text-navy">
                Why Start A{" "}
                <span className="text-brand-gradient">Conversation?</span>
              </h2>

              <ul className="mt-8 space-y-4">
                {REASONS.map(({ title, text, icon: Icon }) => (
                  <li
                    key={title}
                    className="flex min-w-0 items-start gap-4 rounded-2xl border border-border bg-card p-5"
                  >
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary">
                      <Icon
                        className="size-5 text-brand-amber"
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-[15.5px] font-bold text-navy">
                        {title}
                      </h3>
                      <p className="mt-1.5 text-[13px] leading-[1.7] text-muted-foreground">
                        {text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* LOCATION */}
        <section aria-labelledby="location-heading" className="py-16 lg:py-24">
          <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
            <SectionLabel>
               Our <span className="text-brand-gradient">Location</span>
            </SectionLabel>
            <h2
              id="location-heading"
              className="mt-3 text-[clamp(1.75rem,3.4vw,2.5rem)] leading-[1.15] font-extrabold tracking-[-0.03em] text-navy"
            >
              Find Us In{" "}
              <span className="text-brand-gradient">Pondicherry</span>
            </h2>

            <div className="mt-9 grid gap-6 overflow-hidden rounded-3xl border border-border bg-card p-6 sm:p-8 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:items-center">
              <div>
                <p className="text-[11.5px] font-bold tracking-[0.16em] text-muted-foreground uppercase">
                  Location
                </p>
                <p className="mt-3 text-[18px] leading-[1.5] font-bold text-navy">
                  Pondicherry, Tamil Nadu, India
                </p>
                <p className="mt-3 text-[14px] leading-[1.8] text-muted-foreground">
                   Based in Pondicherry, we partner with businesses and brands
                   across Tamil Nadu and beyond.
                </p>
                <Button
                  asChild
                  className="mt-7 h-12 w-full rounded-xl bg-navy px-6 text-[14.5px] font-semibold text-primary-foreground hover:bg-navy/90 sm:w-auto"
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

              <div className="relative h-[240px] overflow-hidden rounded-2xl bg-soft-gray sm:h-[300px]">
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

        {/* FAQ */}
        <section aria-labelledby="faq-heading" className="bg-soft-gray py-16 lg:py-24">
          <div className="mx-auto grid max-w-[1240px] gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14">
            <div>
              <SectionLabel>
                Frequently <span className="text-brand-gradient">Asked</span>
              </SectionLabel>
              <h2
                id="faq-heading"
                className="mt-3 text-[clamp(1.75rem,3.4vw,2.5rem)] leading-[1.15] font-extrabold tracking-[-0.03em] text-navy"
              >
                Questions,{" "}
                <span className="text-brand-gradient">Answered.</span>
              </h2>
              <p className="mt-5 max-w-[24rem] text-[14px] leading-[1.8] text-muted-foreground">
                Still unsure about something? Call us and we&apos;ll talk it
                through.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {FAQS.map(({ q, a }, index) => (
                <AccordionItem
                  key={q}
                  value={`faq-${index}`}
                  className="mb-3 rounded-2xl border border-border bg-card px-5"
                >
                  <AccordionTrigger className="py-5 text-left text-[15px] font-bold text-navy hover:no-underline">
                    {q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-[13.5px] leading-[1.8] text-muted-foreground">
                    {a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* FINAL CTA */}
        <section
          aria-labelledby="contact-cta-heading"
          className="bg-background py-16 lg:py-20"
        >
          <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-navy px-6 py-16 text-center sm:px-10 lg:py-20">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 -right-16 size-72 rounded-full bg-brand-amber/25 blur-3xl"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-24 -left-16 size-72 rounded-full bg-accent-blue/25 blur-3xl"
              />
              <div className="relative">
                <h2
                  id="contact-cta-heading"
                  className="mx-auto max-w-[34rem] text-[clamp(1.85rem,4.4vw,3rem)] leading-[1.1] font-extrabold tracking-[-0.035em] text-primary-foreground"
                >
                   Your Next Stage Of Growth Starts Here.
                </h2>
                <p className="mx-auto mt-5 max-w-[32rem] text-[14.5px] leading-[1.8] text-primary-foreground/70">
                   Let&apos;s build a digital presence that gets attention, earns trust
                   and drives growth.
                </p>
                <Button
                  asChild
                  className="bg-brand-gradient mt-9 h-[54px] rounded-full px-8 text-[15px] font-semibold text-navy hover:opacity-90"
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
