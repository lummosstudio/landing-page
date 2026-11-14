import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Briefcase,
  Sparkles,
  Video,
  TrendingUp,
  Palette,
  Search,
  CheckCircle2,
  Mail,
  MapPin,
  Clock,
  HeartHandshake,
  Send,
  Laptop,
  Users,
  Compass,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/ScrollReveal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const TITLE = "Careers at Lumos Digital Media | Join Our Creative & Growth Team in Pondicherry";
const DESCRIPTION =
  "Explore open roles at Lumos Digital Media in Puducherry. We are hiring video editors, performance marketers, content creators, graphic designers, and SEO specialists.";
const CANONICAL_URL = "https://lumosdigitalmedia.in/careers";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "lumos digital media careers, digital marketing jobs pondicherry, video editor jobs puducherry, graphic designer jobs pondicherry, content creator jobs puducherry, social media marketer jobs, performance marketing jobs",
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
    links: [{ rel: "canonical", href: CANONICAL_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Lumos Digital Media",
          url: "https://lumosdigitalmedia.in",
          logo: "https://lumosdigitalmedia.in/Lumos-Digital-logo.png",
          description: DESCRIPTION,
          address: {
            "@type": "PostalAddress",
            streetAddress: "3rd floor, 127-vellalar street",
            addressLocality: "Puducherry",
            addressRegion: "Puducherry",
            postalCode: "605001",
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
  component: CareersPage,
});

type JobRole = {
  id: string;
  title: string;
  category: "Creative & Video" | "Performance & Growth" | "Design & Strategy";
  type: string;
  location: string;
  experience: string;
  icon: LucideIcon;
  summary: string;
  skills: string[];
};

const JOB_ROLES: JobRole[] = [
  {
    id: "video-editor",
    title: "Cinematic Video Editor & Motion Designer",
    category: "Creative & Video",
    type: "Full-Time",
    location: "In-Studio (Puducherry)",
    experience: "1 - 3 Years",
    icon: Video,
    summary:
      "Craft high-converting Instagram reels, commercial brand films, and ads with cinema-level sound design, pacing, and color grading.",
    skills: ["Premiere Pro", "After Effects", "Sound Design", "Reels Pacing", "Color Grading"],
  },
  {
    id: "performance-marketer",
    title: "Performance Marketing Specialist (Meta & Google Ads)",
    category: "Performance & Growth",
    type: "Full-Time / Hybrid",
    location: "Puducherry",
    experience: "1 - 4 Years",
    icon: TrendingUp,
    summary:
      "Manage scaling ad budgets, build multi-touch conversion funnels, execute rapid creative testing, and deliver predictable ROAS for our clients.",
    skills: ["Meta Ads Manager", "Google Ads", "A/B Testing", "CPA Optimization", "GA4 Tracking"],
  },
  {
    id: "content-creator",
    title: "Content Creator & Reels Strategist",
    category: "Creative & Video",
    type: "Full-Time",
    location: "In-Studio (Puducherry)",
    experience: "Fresher / 1 - 2 Years",
    icon: Sparkles,
    summary:
      "Ideate, script, and direct viral reel concepts. Work with cinema cameras, studio lighting, and client locations to bring stories to life.",
    skills: [
      "Scriptwriting",
      "Visual Storytelling",
      "Social Trends",
      "On-Camera Presence",
      "Hook Ideation",
    ],
  },
  {
    id: "graphic-designer",
    title: "Brand Designer & Visual Storyteller",
    category: "Design & Strategy",
    type: "Full-Time",
    location: "In-Studio (Puducherry)",
    experience: "1 - 3 Years",
    icon: Palette,
    summary:
      "Design standout brand identities, social media creatives, high-CTR advertising assets, and premium presentation decks.",
    skills: ["Figma", "Photoshop", "Illustrator", "Typography", "Ad Creative Design"],
  },
  {
    id: "seo-web-specialist",
    title: "Technical SEO & Website Growth Executive",
    category: "Performance & Growth",
    type: "Full-Time / Hybrid",
    location: "Puducherry",
    experience: "1 - 3 Years",
    icon: Search,
    summary:
      "Drive organic search dominance for local and regional brands through technical audits, keyword mapping, on-page SEO, and Google Business Profile optimization.",
    skills: [
      "Technical SEO",
      "Google Search Console",
      "Local Citations",
      "Semrush/Ahrefs",
      "On-Page SEO",
    ],
  },
];

const PERKS = [
  {
    icon: Laptop,
    title: "Cinema-Grade Equipment",
    description:
      "Work with high-end mirrorless and cinema cameras, studio lights, professional wireless mics, and powerful editing suites.",
  },
  {
    icon: TrendingUp,
    title: "Rapid Career Trajectory",
    description:
      "We value output and ownership over seniority. Scale brands from day one and accelerate your skillset rapidly.",
  },
  {
    icon: Users,
    title: "High-Energy Culture",
    description:
      "Collaborate with passionate creators, editors, photographers, and growth strategists who love pushing creative limits.",
  },
  {
    icon: MapPin,
    title: "Puducherry Studio Vibe",
    description:
      "Our creative space on 3rd floor, 127-Vellalar Street is built for collaboration, focus, and inspired thinking.",
  },
  {
    icon: HeartHandshake,
    title: "Client Diversity",
    description:
      "From luxury resorts, cafes, and healthcare to e-commerce, solar, and real estate, no two campaigns are the same.",
  },
  {
    icon: Compass,
    title: "Creative Autonomy",
    description:
      "Bring bold ideas to the table. We test fresh angles, unconventional hooks, and new formats constantly.",
  },
];

const CATEGORIES = [
  "All",
  "Creative & Video",
  "Performance & Growth",
  "Design & Strategy",
] as const;

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card/80 px-3.5 py-1 text-[11.5px] font-bold tracking-[0.14em] text-navy uppercase shadow-soft-xs backdrop-blur-sm">
      {children}
    </div>
  );
}

function CareersPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    fullName: string;
    mailtoUrl: string;
  } | null>(null);

  const filteredRoles =
    selectedCategory === "All"
      ? JOB_ROLES
      : JOB_ROLES.filter((role) => role.category === selectedCategory);

  const handleApplyClick = (roleTitle: string) => {
    setSelectedRole(roleTitle);
    const formElement = document.getElementById("apply-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const fullName = String(formData.get("fullName") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const role = String(formData.get("role") || "").trim();
    const portfolioUrl = String(formData.get("portfolioUrl") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const subject = `Job Application: ${role || "Open Role"} - ${fullName}`;
    const bodyLines = [
      `Candidate Name: ${fullName}`,
      `Email Address: ${email}`,
      `Phone / WhatsApp: ${phone}`,
      `Position Applied For: ${role || "General Application"}`,
      `Portfolio / Resume URL: ${portfolioUrl || "Not provided"}`,
      "",
      "Candidate Introduction / Cover Note:",
      message || "Not provided",
    ];
    const body = bodyLines.join("\n");
    const mailtoUrl = `mailto:info@lumosdigitalmedia.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setSubmittedData({ fullName, mailtoUrl });
    setSubmitted(true);

    try {
      window.location.href = mailtoUrl;
    } catch {
      // Fallback
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <SiteHeader activeItem="Careers" />

      <main>
        {/* HERO SECTION */}
        <section
          aria-labelledby="careers-hero-heading"
          className="relative overflow-hidden bg-background py-10 sm:py-16 lg:py-20"
        >
          {/* Ambient background glows */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-0 right-1/4 -z-10 size-[450px] -translate-y-1/3 rounded-full bg-brand-amber/10 blur-[100px] animate-pulse-glow"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-1/3 right-0 -z-10 size-[380px] rounded-full bg-accent-blue/10 blur-[90px] animate-pulse-glow"
          />

          <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 text-center">
            <Reveal direction="down" priority>
              <SectionLabel>
                We Are Hiring · <span className="text-brand-gradient">Join Lumos</span>
              </SectionLabel>
            </Reveal>

            <Reveal direction="up" delay={50} priority>
              <h1
                id="careers-hero-heading"
                className="mt-6 text-[clamp(2.4rem,5.5vw,4.2rem)] leading-[1.08] font-extrabold tracking-[-0.035em] text-navy"
              >
                Do The Best Work
                <br />
                <span className="text-brand-gradient">Of Your Career.</span>
              </h1>
            </Reveal>

            <Reveal direction="up" delay={100} priority>
              <p className="mx-auto mt-6 max-w-2xl text-[16px] sm:text-[17.5px] leading-[1.75] text-muted-foreground">
                We are building South India&apos;s most ambitious digital media and growth marketing
                agency in Puducherry. If you live for visual storytelling, high-performing ads, and
                scaling brands, there is a seat for you here.
              </p>
            </Reveal>

            {/* Action buttons */}
            <Reveal direction="up" delay={150} priority>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
                <Button
                  asChild
                  className="h-[52px] w-full sm:w-auto rounded-xl bg-navy px-8 text-[15px] font-semibold text-primary-foreground shadow-navy-btn hover:bg-navy/90 hover:shadow-navy-btn-hover active:scale-[0.99] transition-all"
                >
                  <a href="#open-roles">
                    Explore Open Positions
                    <ArrowRight className="ml-2.5 size-4" strokeWidth={2.5} />
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="h-[52px] w-full sm:w-auto rounded-xl border-border bg-card px-6 text-[15px] font-semibold text-navy hover:bg-secondary active:scale-[0.99] transition-all"
                >
                  <a href="#apply-form" className="inline-flex items-center">
                    <Send className="mr-2.5 size-4 text-brand-coral" />
                    Quick Application
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* WHY WORK WITH US / PERKS */}
        <section
          aria-labelledby="perks-heading"
          className="py-14 sm:py-18 bg-card/50 border-y border-border/50"
        >
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <Reveal direction="up">
              <div className="text-center max-w-xl mx-auto">
                <SectionLabel>
                  Culture & Perks · <span className="text-brand-gradient">Why Lumos</span>
                </SectionLabel>
                <h2
                  id="perks-heading"
                  className="mt-4 text-[clamp(1.75rem,3.4vw,2.5rem)] leading-[1.15] font-extrabold tracking-[-0.03em] text-navy"
                >
                  Built For Creators Who <span className="text-brand-gradient">Love Building</span>
                </h2>
              </div>
            </Reveal>

            <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {PERKS.map(({ icon: Icon, title, description }, index) => (
                <Reveal key={title} direction="up" delay={index * 60}>
                  <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft-xs transition-all duration-300 hover:-translate-y-1 hover:border-brand-amber/50 hover:shadow-soft">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-secondary text-brand-amber">
                      <Icon className="size-6" strokeWidth={2} />
                    </div>
                    <h3 className="mt-4 text-[17px] font-extrabold text-navy">{title}</h3>
                    <p className="mt-2 text-[14px] leading-[1.65] text-muted-foreground">
                      {description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* OPEN ROLES SECTION */}
        <section
          id="open-roles"
          aria-labelledby="roles-heading"
          className="py-16 sm:py-24 bg-background"
        >
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <Reveal direction="up">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <SectionLabel>
                    Current Openings · <span className="text-brand-gradient">Join Us</span>
                  </SectionLabel>
                  <h2
                    id="roles-heading"
                    className="mt-4 text-[clamp(1.75rem,3.4vw,2.5rem)] leading-[1.15] font-extrabold tracking-[-0.03em] text-navy"
                  >
                    Open Roles At <span className="text-brand-gradient">Our Studio</span>
                  </h2>
                </div>

                {/* Filter Pills */}
                <div className="flex flex-wrap items-center gap-2">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedCategory(cat)}
                      className={`h-9 sm:h-10 rounded-full px-4 text-[13px] font-semibold transition-all duration-200 active:scale-95 ${
                        selectedCategory === cat
                          ? "bg-navy text-primary-foreground shadow-soft-xs"
                          : "border border-border bg-card text-navy hover:bg-secondary"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Role Cards List */}
            <div className="mt-10 space-y-4 sm:space-y-5">
              {filteredRoles.map((role, index) => {
                const Icon = role.icon;
                return (
                  <Reveal key={role.id} direction="up" delay={index * 50}>
                    <div className="group rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-soft transition-all duration-300 hover:border-brand-amber/60 hover:shadow-soft-hover">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                        <div className="flex items-start gap-4 sm:gap-5">
                          <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-secondary text-brand-coral transition-transform duration-300 group-hover:scale-110">
                            <Icon className="size-6" strokeWidth={2} />
                          </span>

                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="rounded-lg bg-secondary px-2.5 py-1 text-[11px] font-bold tracking-wide uppercase text-navy">
                                {role.category}
                              </span>
                              <span className="inline-flex items-center gap-1 text-[12px] font-medium text-muted-foreground">
                                <Clock className="size-3.5 text-accent-blue" />
                                {role.type}
                              </span>
                              <span className="inline-flex items-center gap-1 text-[12px] font-medium text-muted-foreground">
                                <MapPin className="size-3.5 text-brand-coral" />
                                {role.location}
                              </span>
                            </div>

                            <h3 className="mt-2 text-[20px] sm:text-[22px] font-extrabold text-navy">
                              {role.title}
                            </h3>

                            <p className="mt-2 max-w-2xl text-[14.5px] leading-[1.65] text-muted-foreground">
                              {role.summary}
                            </p>

                            <div className="mt-3 flex flex-wrap gap-1.5">
                              {role.skills.map((skill) => (
                                <span
                                  key={skill}
                                  className="rounded-md border border-border/80 bg-secondary/50 px-2.5 py-0.5 text-[12px] font-medium text-navy"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="lg:shrink-0 pt-2 lg:pt-0">
                          <Button
                            type="button"
                            onClick={() => handleApplyClick(role.title)}
                            className="h-11 w-full sm:w-auto rounded-xl bg-navy px-6 text-[14px] font-semibold text-primary-foreground shadow-navy-btn hover:bg-navy/90 hover:shadow-navy-btn-hover transition-all"
                          >
                            Apply For Role
                            <ArrowRight className="ml-2 size-4" strokeWidth={2.5} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* APPLICATION FORM SECTION */}
        <section
          id="apply-form"
          aria-labelledby="apply-heading"
          className="scroll-mt-12 bg-soft-gray py-14 sm:py-20 border-t border-border/50"
        >
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 items-start">
              {/* Form container (7 cols) */}
              <div className="lg:col-span-7">
                <Reveal direction="up">
                  <div className="rounded-3xl border border-border bg-card p-6 sm:p-9 shadow-soft">
                    <SectionLabel>
                      Job Application · <span className="text-brand-gradient">Join Us</span>
                    </SectionLabel>

                    <h2
                      id="apply-heading"
                      className="mt-4 text-[clamp(1.6rem,3vw,2.25rem)] leading-[1.15] font-extrabold tracking-[-0.03em] text-navy"
                    >
                      Send Your <span className="text-brand-gradient">Application</span>
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
                          Your job application draft has been prepared for{" "}
                          <span className="font-semibold text-navy">info@lumosdigitalmedia.in</span>
                          . If your email app didn&apos;t open automatically, click the button
                          below:
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
                            Submit another application
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <form
                        className="mt-7 grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2"
                        onSubmit={handleSubmit}
                      >
                        <div className="grid gap-2">
                          <Label htmlFor="fullName" className="text-[13px] font-semibold text-navy">
                            Full Name *
                          </Label>
                          <Input
                            id="fullName"
                            name="fullName"
                            required
                            maxLength={100}
                            placeholder="Your full name"
                            className="h-12 rounded-xl border border-input bg-card px-4 text-[14px] text-navy placeholder:text-muted-foreground/60 transition-all focus-visible:border-accent-blue focus-visible:ring-2 focus-visible:ring-accent-blue/30"
                          />
                        </div>

                        <div className="grid gap-2">
                          <Label htmlFor="email" className="text-[13px] font-semibold text-navy">
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            maxLength={255}
                            placeholder="you@email.com"
                            className="h-12 rounded-xl border border-input bg-card px-4 text-[14px] text-navy placeholder:text-muted-foreground/60 transition-all focus-visible:border-accent-blue focus-visible:ring-2 focus-visible:ring-accent-blue/30"
                          />
                        </div>

                        <div className="grid gap-2">
                          <Label htmlFor="phone" className="text-[13px] font-semibold text-navy">
                            Phone / WhatsApp *
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            maxLength={20}
                            placeholder="+91 90037 82254"
                            className="h-12 rounded-xl border border-input bg-card px-4 text-[14px] text-navy placeholder:text-muted-foreground/60 transition-all focus-visible:border-accent-blue focus-visible:ring-2 focus-visible:ring-accent-blue/30"
                          />
                        </div>

                        <div className="grid gap-2">
                          <Label htmlFor="role" className="text-[13px] font-semibold text-navy">
                            Position Of Interest *
                          </Label>
                          <select
                            id="role"
                            name="role"
                            value={selectedRole}
                            onChange={(e) => setSelectedRole(e.target.value)}
                            required
                            className="h-12 w-full rounded-xl border border-input bg-card px-4 text-[14px] text-navy outline-none transition-all focus-visible:border-accent-blue focus-visible:ring-2 focus-visible:ring-accent-blue/30"
                          >
                            <option value="" disabled>
                              Select a position
                            </option>
                            {JOB_ROLES.map((job) => (
                              <option key={job.id} value={job.title}>
                                {job.title}
                              </option>
                            ))}
                            <option value="General Creative / Marketing Application">
                              Other / General Application
                            </option>
                          </select>
                        </div>

                        <div className="grid gap-2 sm:col-span-2">
                          <Label
                            htmlFor="portfolioUrl"
                            className="text-[13px] font-semibold text-navy"
                          >
                            Portfolio / Google Drive / LinkedIn URL *
                          </Label>
                          <Input
                            id="portfolioUrl"
                            name="portfolioUrl"
                            type="url"
                            required
                            placeholder="https://behance.net/..., drive.google.com/..., or linkedin.com/in/..."
                            className="h-12 rounded-xl border border-input bg-card px-4 text-[14px] text-navy placeholder:text-muted-foreground/60 transition-all focus-visible:border-accent-blue focus-visible:ring-2 focus-visible:ring-accent-blue/30"
                          />
                        </div>

                        <div className="grid gap-2 sm:col-span-2">
                          <Label htmlFor="message" className="text-[13px] font-semibold text-navy">
                            Cover Note / Tell Us About Yourself (Optional)
                          </Label>
                          <Textarea
                            id="message"
                            name="message"
                            rows={4}
                            maxLength={1000}
                            placeholder="Share your proudest creative or growth work, tools you love using, and what excites you about Lumos..."
                            className="rounded-xl border border-input bg-card px-4 py-3 text-[14px] text-navy placeholder:text-muted-foreground/60 focus-visible:border-accent-blue focus-visible:ring-2 focus-visible:ring-accent-blue/30"
                          />
                        </div>

                        <div className="sm:col-span-2 pt-2">
                          <Button
                            type="submit"
                            className="h-[52px] w-full sm:w-auto rounded-xl bg-navy px-8 text-[15px] font-semibold text-primary-foreground shadow-navy-btn hover:bg-navy/90 hover:shadow-navy-btn-hover active:scale-[0.99] transition-all"
                          >
                            <Send className="mr-2 size-4" />
                            Submit Application
                          </Button>
                        </div>
                      </form>
                    )}
                  </div>
                </Reveal>
              </div>

              {/* Direct Reachout info (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                <Reveal direction="up" delay={150}>
                  <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-soft">
                    <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-secondary text-brand-coral">
                      <Mail className="size-6" />
                    </span>
                    <h3 className="mt-4 text-[20px] font-extrabold text-navy">
                      Direct Creator Email
                    </h3>
                    <p className="mt-2 text-[14.5px] leading-[1.65] text-muted-foreground">
                      Prefer sending an email directly? Attach your resume, demo reel, or Behance
                      profile and email our hiring team directly.
                    </p>
                    <a
                      href="mailto:info@lumosdigitalmedia.in?subject=Direct%20Career%20Application%20-%20Lumos%20Digital"
                      className="mt-4 inline-flex items-center text-[15px] font-bold text-navy hover:text-brand-coral transition-colors"
                    >
                      info@lumosdigitalmedia.in
                      <ArrowRight className="ml-2 size-4" strokeWidth={2.5} />
                    </a>
                  </div>
                </Reveal>

                <Reveal direction="up" delay={200}>
                  <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-soft">
                    <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-secondary text-brand-amber">
                      <MapPin className="size-6" />
                    </span>
                    <h3 className="mt-4 text-[20px] font-extrabold text-navy">Studio Location</h3>
                    <div className="mt-2 space-y-1 text-[14.5px] leading-[1.65] text-muted-foreground">
                      <p className="font-semibold text-navy">3rd Floor</p>
                      <p>127-Vellalar Street,</p>
                      <p className="font-semibold text-navy">Puducherry — 605001</p>
                    </div>
                    <p className="mt-3 text-[13px] text-muted-foreground">
                      Walking distance from the White Town boulevard and central Pondicherry.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
