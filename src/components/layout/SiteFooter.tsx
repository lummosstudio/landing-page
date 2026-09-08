import { ArrowRight, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { LumosLogo } from "@/components/brand/LumosLogo";
import { Button } from "@/components/ui/button";

const SOCIALS: { icon: LucideIcon; label: string; href: string }[] = [
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://instagram.com/lumos_digital_media",
  },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

type FooterLink = { label: string; to?: "/" | "/about" | "/contact"; href?: string };

const NAV_LINKS: FooterLink[] = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Contact Us", to: "/contact" },
];

const SERVICE_LINKS = [
  { label: "Digital Marketing", href: "/#services" },
  { label: "Social Media Strategy", href: "/#services" },
  { label: "Paid Advertising (Meta / Google)", href: "/#services" },
  { label: "SEO & Local Growth", href: "/#services" },
  { label: "Creative Video Production", href: "/#services" },
  { label: "Branding & Identity", href: "/#services" },
];

const CONTACT_ITEMS = [
  { label: "+91 90037 82254", href: "tel:+919003782254", icon: Phone },
  { label: "+91 97875 82488", href: "tel:+919787582488", icon: Phone },
  { label: "info@lumosdigitalmedia.in", href: "mailto:info@lumosdigitalmedia.in", icon: Mail },
  { label: "Pondicherry, India", href: "/contact", icon: MapPin },
];

const linkClass =
  "text-[14px] text-primary-foreground/65 transition-colors duration-200 hover:text-brand-amber hover:translate-x-0.5 inline-flex items-center";

export function SiteFooter() {
  return (
    <footer className="w-full bg-navy text-primary-foreground relative overflow-hidden border-t border-primary-foreground/10">
      {/* Ambient background light glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-1/4 -z-0 size-[500px] rounded-full bg-brand-amber/10 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 left-10 -z-0 size-[450px] rounded-full bg-accent-blue/15 blur-[120px]"
      />

      {/* Subtle top rainbow accent line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-brand-amber/60 via-brand-coral/60 to-transparent" />

      {/* Main Container */}
      <div className="relative z-10 mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        {/* TOP CTA HERO BANNER */}
        <div className="py-14 sm:py-18 lg:py-20 border-b border-primary-foreground/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center justify-between">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/15 bg-primary-foreground/[0.05] px-3.5 py-1 text-[11.5px] font-bold tracking-[0.14em] text-brand-amber uppercase backdrop-blur-sm">
                <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Ready For Measurable Growth?</span>
              </div>

              <h2 className="mt-4 text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.08] font-extrabold tracking-[-0.035em] text-primary-foreground">
                Let&apos;s Build Something{" "}
                <br className="hidden sm:inline" />
                <span className="text-brand-gradient">Extraordinary Together.</span>
              </h2>

              <p className="mt-4 max-w-xl text-[15px] sm:text-[16px] leading-[1.75] text-primary-foreground/75">
                From high-conversion ad campaigns to cinematic brand storytelling, we partner
                with ambitious businesses ready to earn attention and lead their market.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-start gap-3.5">
              <Button
                asChild
                className="bg-brand-gradient h-[54px] w-full rounded-2xl px-8 text-[15.5px] font-bold text-navy shadow-[0_16px_36px_-12px_rgba(255,178,36,0.35)] hover:opacity-95 active:scale-[0.99] transition-all"
              >
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2.5 size-4" strokeWidth={2.5} />
                </Link>
              </Button>

              <a
                href="mailto:info@lumosdigitalmedia.in"
                className="inline-flex h-[54px] w-full items-center justify-center rounded-2xl border border-primary-foreground/15 bg-primary-foreground/[0.04] px-6 text-[14.5px] font-semibold text-primary-foreground/90 backdrop-blur-sm transition-all hover:bg-primary-foreground/[0.08] hover:border-brand-amber/40 hover:text-brand-amber"
              >
                <Mail className="mr-2.5 size-4 text-brand-coral" />
                info@lumosdigitalmedia.in
              </a>
            </div>
          </div>
        </div>

        {/* MIDDLE MULTI-COLUMN NAVIGATION GRID */}
        <div className="py-12 sm:py-16">
          <div className="grid gap-10 sm:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-12">
            {/* Brand column (5 cols on desktop) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <Link to="/" className="inline-block transition-transform hover:opacity-95">
                  <LumosLogo tone="light" size="lg" showTagline />
                </Link>

                <p className="mt-5 max-w-[340px] text-[14px] leading-[1.8] text-primary-foreground/70">
                  A creative digital marketing and branding agency helping businesses earn
                  attention, build trust, and achieve predictable growth.
                </p>

                {/* Social Badges */}
                <ul className="mt-6 flex items-center gap-2.5">
                  {SOCIALS.map(({ icon: Icon, label, href }) => (
                    <li key={label}>
                      <a
                        href={href}
                        aria-label={label}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex size-10 items-center justify-center rounded-xl border border-primary-foreground/15 bg-primary-foreground/[0.04] text-primary-foreground/80 transition-all hover:border-brand-amber hover:bg-brand-amber/10 hover:text-brand-amber active:scale-95"
                      >
                        <Icon className="size-4" aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Studio Location Chip */}
              <div className="mt-6 inline-flex items-center gap-2 text-[12.5px] text-primary-foreground/60">
                <Sparkles className="size-3.5 text-brand-amber" />
                <span>Headquartered in Pondicherry · Serving Worldwide</span>
              </div>
            </div>

            {/* Quick Links (2 cols on desktop) */}
            <div className="lg:col-span-2">
              <p className="text-[13px] font-bold tracking-[0.12em] text-primary-foreground uppercase">
                Navigation
              </p>
              <ul className="mt-4 space-y-3">
                {NAV_LINKS.map((item) => (
                  <li key={item.label}>
                    {item.to ? (
                      <Link to={item.to} className={linkClass}>
                        {item.label}
                      </Link>
                    ) : (
                      <a href={item.href} className={linkClass}>
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Services (3 cols on desktop) */}
            <div className="lg:col-span-3">
              <p className="text-[13px] font-bold tracking-[0.12em] text-primary-foreground uppercase">
                Services
              </p>
              <ul className="mt-4 space-y-3">
                {SERVICE_LINKS.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className={linkClass}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact (2 cols on desktop) */}
            <div className="lg:col-span-2">
              <p className="text-[13px] font-bold tracking-[0.12em] text-primary-foreground uppercase">
                Contact
              </p>
              <ul className="mt-4 space-y-3">
                {CONTACT_ITEMS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.label}>
                      <a href={item.href} className={linkClass}>
                        <Icon className="mr-2 size-3.5 shrink-0 text-brand-coral" />
                        <span className="break-all">{item.label}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM COLOPHON BAR */}
        <div className="border-t border-primary-foreground/10 py-6 sm:py-7">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-primary-foreground/55">
            <p>© {new Date().getFullYear()} Lumos Digital Media. All rights reserved.</p>
            <p className="text-[12.5px] font-medium text-primary-foreground/45">
              Smart Marketing · Creative Storytelling · Real Growth
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

