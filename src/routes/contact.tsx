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
import { Reveal } from "@/components/ui/ScrollReveal";
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
            addressRegion: "Pondicherry",
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
    <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card/80 px-3.5 py-1 text-[11.5px] font-bold tracking-[0.14em] text-navy uppercase shadow-soft-xs backdrop-blur-sm">
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
        text: "Pondicherry, India",
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
  const [submittedData, setSubmittedData] = useState<{
    fullName: string;
    mailtoUrl: string;
  } | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const fullName = String(formData.get("fullName") || "").trim();
    const company = String(formData.get("company") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const projectType = String(formData.get("projectType") || "").trim();
    const details = String(formData.get("details") || "").trim();

    const subject = `New Growth Enquiry: ${fullName}${company ? ` (${company})` : ""}`;
    const bodyLines = [
      `Full Name: ${fullName}`,
      `Brand / Company: ${company || "Not provided"}`,
      `Email Address: ${email}`,
      `Phone / WhatsApp: ${phone}`,
      `Primary Service: ${projectType || "General Marketing / Growth"}`,
      "",
      "Goals & Project Details:",
      details,
    ];
    const body = bodyLines.join("\n");
    const mailtoUrl = `mailto:info@lumosdigitalmedia.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setSubmittedData({ fullName, mailtoUrl });
    setSubmitted(true);

    // Open user's email client
    try {
      window.location.href = mailtoUrl;
    } catch {
      // Fallback handled by rendered button
    }
  };

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
                    Get In <span className="text-brand-gradient">Touch</span>
                  </SectionLabel>
                </Reveal>

                <Reveal direction="up" delay={80}>
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
                </Reveal>

                <Reveal direction="up" delay={160}>
                  <p className="mt-5 max-w-[520px] text-[15.5px] sm:text-[16.5px] leading-[1.75] text-muted-foreground">
                    Have an ambitious brand, video campaign, or growth goal in mind?
                    Share your objectives and let&apos;s discuss the strategy, content,
                    and performance marketing that will get you there.
                  </p>
                </Reveal>

                {/* Direct Action Buttons */}
                <Reveal direction="up" delay={240}>
                  <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
                    <Button
                      asChild
                      className="h-[52px] rounded-xl bg-navy px-8 text-[15px] font-semibold text-primary-foreground shadow-navy-btn hover:bg-navy/90 hover:shadow-navy-btn-hover active:scale-[0.99] transition-all"
                    >
                      <a href="#enquiry">
                        Start A Conversation
                        <ArrowRight className="ml-2.5 size-4" strokeWidth={2.5} />
                      </a>
                    </Button>

                    <Button
                      asChild
                      variant="outline"
                      className="h-[52px] rounded-xl border-border bg-card px-6 text-[15px] font-semibold text-navy hover:bg-secondary active:scale-[0.99] transition-all"
                    >
                      <a href="tel:+919003782254" className="inline-flex items-center">
                        <Phone className="mr-2 size-4 text-brand-coral" />
                        +91 90037 82254
                      </a>
                    </Button>
                  </div>
                </Reveal>
              </div>

              {/* Visual Showcase (5 cols) */}
              <div className="relative lg:col-span-5">
                <Reveal direction="scale" delay={200}>
                  <div className="relative mx-auto max-w-[500px] lg:max-w-none">
                    <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-gradient-to-b from-card to-secondary/30 p-2.5 sm:p-3 shadow-soft-xl">
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
                      <div className="absolute top-6 right-6 hidden sm:flex items-center gap-2 rounded-2xl border border-card/60 bg-card/90 px-3.5 py-2 shadow-glass backdrop-blur-md animate-float">
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

                      <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-2xl border border-card/60 bg-card/95 p-3 shadow-glass backdrop-blur-md animate-float-slow">
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
                </Reveal>
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
              {CONTACT_CARDS.map(({ label, icon: Icon, items }, index) => (
                <li key={label}>
                  <Reveal direction="up" delay={index * 75}>
                    <article className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-soft-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-amber/50 hover:shadow-soft-hover">
                      <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-secondary text-brand-coral transition-transform group-hover:scale-110">
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
                  </Reveal>
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
              <div className="lg:col-span-7">
                <Reveal direction="up">
                  <div className="rounded-3xl border border-border bg-card p-6 sm:p-9 shadow-soft">
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

                    {submitted && submittedData ? (
                      <div className="mt-8 rounded-2xl border border-border bg-secondary/80 p-6 sm:p-8 text-center">
                        <CheckCircle2
                          className="mx-auto size-14 text-emerald-600"
                          strokeWidth={1.8}
                          aria-hidden="true"
                        />
                        <h3 className="mt-4 text-[20px] font-extrabold text-navy">
                          Thank you, {submittedData.fullName || "there"}!
                        </h3>
                        <p className="mx-auto mt-2 max-w-md text-[14.5px] leading-[1.75] text-muted-foreground">
                          Your enquiry has been prepared for{" "}
                          <span className="font-semibold text-navy">info@lumosdigitalmedia.in</span>.
                          If your email client didn&apos;t open automatically, click the button below:
                        </p>
                        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                          <Button
                            asChild
                            className="h-11 w-full sm:w-auto rounded-xl bg-navy px-6 text-[14px] font-semibold text-primary-foreground hover:bg-navy/90"
                          >
                            <a href={submittedData.mailtoUrl}>
                              <Mail className="mr-2 size-4" />
                              Open Email Client
                            </a>
                          </Button>
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => {
                              setSubmitted(false);
                              setSubmittedData(null);
                            }}
                            className="h-11 w-full sm:w-auto rounded-xl border-border bg-card px-6 text-[14px] font-semibold text-navy hover:bg-secondary"
                          >
                            Send another enquiry
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <form
                        className="mt-7 grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2"
                        onSubmit={handleSubmit}
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

                        <div className="grid gap-2 sm:col-span-2">
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
                            className="h-[52px] w-full sm:w-auto rounded-xl bg-navy px-8 text-[15px] font-semibold text-primary-foreground shadow-navy-btn hover:bg-navy/90 hover:shadow-navy-btn-hover active:scale-[0.99] transition-all"
                          >
                            <Send className="mr-2 size-4" />
                            Send Growth Enquiry
                          </Button>
                        </div>
                      </form>
                    )}
                  </div>
                </Reveal>
              </div>

              {/* Why Lumos Info (5 cols on desktop) */}
              <div className="lg:col-span-5">
                <Reveal direction="up" delay={150}>
                  <SectionLabel>
                    Why <span className="text-brand-gradient">Lumos</span>
                  </SectionLabel>
                  <h2 className="mt-4 text-[clamp(1.6rem,3vw,2.25rem)] leading-[1.15] font-extrabold tracking-[-0.03em] text-navy">
                    Why Partner With{" "}
                    <span className="text-brand-gradient">Our Team?</span>
                  </h2>

                  <ul className="mt-6 space-y-3.5">
                    {REASONS.map(({ title, text, icon: Icon }, index) => (
                      <li key={title}>
                        <Reveal direction="up" delay={index * 60}>
                          <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft-xs transition-all duration-300 hover:-translate-y-1 hover:border-brand-amber/50 hover:shadow-soft-sm">
                            <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-brand-amber">
                              <Icon className="size-5" strokeWidth={2} aria-hidden="true" />
                            </span>
                            <div>
                              <h3 className="text-[15.5px] font-bold text-navy">{title}</h3>
                              <p className="mt-1 text-[13px] leading-[1.65] text-muted-foreground">
                                {text}
                              </p>
                            </div>
                          </div>
                        </Reveal>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* LOCATION SECTION */}
        <section aria-labelledby="location-heading" className="py-14 sm:py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <Reveal direction="up">
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
            </Reveal>

            <Reveal direction="scale" delay={150}>
              <div className="mt-8 sm:mt-10 grid gap-6 rounded-3xl border border-border bg-card p-5 sm:p-8 lg:grid-cols-12 lg:items-center shadow-soft">
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
                    title="Map showing Lumos Digital's location in Pondicherry"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=79.75%2C11.87%2C79.87%2C11.97&layer=mapnik&marker=11.9139%2C79.8145"
                    loading="lazy"
                    className="size-full border-0"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section aria-labelledby="faq-heading" className="bg-soft-gray py-14 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-5">
                <Reveal direction="up">
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
                </Reveal>
              </div>

              <div className="lg:col-span-7">
                <Accordion type="single" collapsible className="w-full space-y-3">
                  {FAQS.map(({ q, a }, index) => (
                    <Reveal key={q} direction="up" delay={index * 60}>
                      <AccordionItem
                        value={`faq-${index}`}
                        className="rounded-2xl border border-border bg-card px-5 shadow-soft-xs transition-all duration-200 hover:border-brand-amber/50 hover:shadow-soft-sm"
                      >
                        <AccordionTrigger className="py-4 sm:py-5 text-left text-[15px] font-bold text-navy hover:no-underline">
                          {q}
                        </AccordionTrigger>
                        <AccordionContent className="pb-5 text-[14px] leading-[1.75] text-muted-foreground">
                          {a}
                        </AccordionContent>
                      </AccordionItem>
                    </Reveal>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
