import { ArrowRight, Instagram, Linkedin, Youtube } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { LumosLogo } from "@/components/brand/LumosLogo";
import { Button } from "@/components/ui/button";
import footerLight from "@/assets/footer-light.webp";

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
  { label: "About", to: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Works", href: "/#works" },
  { label: "Packages", href: "/#packages" },
  { label: "Blog", href: "/#blog" },
  { label: "Contact", to: "/contact" },
];

const SERVICE_LINKS = [
  "Digital Marketing",
  "Social Media",
  "Paid Advertising",
  "SEO & Local Growth",
  "Branding & Content",
];

const CONTACT_LINKS: FooterLink[] = [
  { label: "+91 90037 82254", href: "tel:+919003782254" },
  { label: "+91 97875 82488", href: "tel:+919787582488" },
  { label: "info@lumosdigitalmedia.in", href: "mailto:info@lumosdigitalmedia.in" },
  { label: "Pondicherry, Tamil Nadu", href: "/contact" },
];

const linkClass =
  "text-primary-foreground/60 transition-colors hover:text-brand-amber";

export function SiteFooter() {
  return (
    <footer className="cv-auto bg-background pb-10">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-navy">
          <img
            src={footerLight}
            alt=""
            aria-hidden="true"
            width={450}
            height={350}
            loading="lazy"
            className="pointer-events-none absolute top-0 right-0 hidden h-full w-[42%] object-cover opacity-45 mix-blend-screen [mask-image:linear-gradient(to_right,transparent,black_55%)] lg:block"
          />

          <div className="relative grid gap-10 px-6 py-12 sm:px-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center">
            <div>
              <LumosLogo tone="light" />
              <p className="mt-4 text-[11.5px] font-bold tracking-[0.18em] text-brand-amber uppercase">
                Smart Marketing. Real Growth.
              </p>
              <p className="mt-5 max-w-[22rem] text-[13.5px] leading-[1.8] text-primary-foreground/70">
                A creative digital marketing and branding agency helping
                businesses earn attention, build trust and grow.
              </p>

              <ul className="mt-7 flex items-center gap-3">
                {SOCIALS.map(({ icon: Icon, label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      aria-label={label}
                      className="inline-flex size-10 items-center justify-center rounded-lg border border-primary-foreground/20 text-primary-foreground/80 transition-colors hover:border-brand-amber hover:text-brand-amber"
                    >
                      <Icon className="size-4" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center">
              <h2 className="text-[clamp(1.5rem,3vw,2rem)] leading-[1.15] font-extrabold tracking-[-0.03em] text-primary-foreground">
                Your Brand Deserves To Be Seen.
              </h2>
              <p className="mx-auto mt-4 max-w-[30rem] text-[13.5px] leading-[1.8] text-primary-foreground/70">
                Let&apos;s build a digital presence that gets attention, earns trust
                and drives growth.
              </p>
              <Button
                asChild
                className="bg-brand-gradient mt-7 h-[52px] rounded-full px-7 text-[15px] font-semibold text-navy hover:opacity-90"
              >
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2.5 size-4" strokeWidth={2.5} />
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative border-t border-primary-foreground/12 px-6 py-9 sm:px-10">
            <div className="grid gap-8 text-[12.5px] sm:grid-cols-2 lg:grid-cols-[minmax(0,1.3fr)_repeat(3,minmax(0,1fr))]">
              <p className="text-primary-foreground/55">
                © 2026 Lumos Digital Media. All Rights Reserved.
              </p>

              <nav aria-label="Footer navigation">
                <p className="text-[13px] font-bold text-primary-foreground">
                  Navigation
                </p>
                <ul className="mt-3 space-y-2.5">
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
              </nav>

              <div>
                <p className="text-[13px] font-bold text-primary-foreground">
                  Services
                </p>
                <ul className="mt-3 space-y-2.5">
                  {SERVICE_LINKS.map((label) => (
                    <li key={label}>
                      <a href="/#services" className={linkClass}>
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-[13px] font-bold text-primary-foreground">
                  Contact
                </p>
                <ul className="mt-3 space-y-2.5">
                  {CONTACT_LINKS.map((item) => (
                    <li key={item.label}>
                      <a href={item.href} className={linkClass}>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
