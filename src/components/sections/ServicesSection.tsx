import {
  ArrowRight,
  Camera,
  Video,
  Scissors,
  Clapperboard,
  PenTool,
  Megaphone,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

const SERVICES: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Camera,
    title: "Digital Marketing",
    description:
      "Integrated strategies that turn attention into meaningful business growth.",
  },
  {
    icon: Video,
    title: "Social Media",
    description:
      "Platform-ready content that builds community, trust and visibility.",
  },
  {
    icon: Scissors,
    title: "Creative Content",
    description:
      "Distinctive ideas and content designed to attract and engage your audience.",
  },
  {
    icon: Clapperboard,
    title: "Paid Advertising",
    description:
      "Focused ad campaigns built to reach the right people and generate leads.",
  },
  {
    icon: PenTool,
    title: "SEO & Local Growth",
    description:
      "Search strategies that improve discovery and strengthen local presence.",
  },
  {
    icon: Megaphone,
    title: "Branding",
    description:
      "Memorable identities and brand systems that stand out and earn trust.",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="bg-background py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-[11.5px] font-bold tracking-[0.16em] text-navy uppercase">
              What <span className="text-brand-gradient">We</span> Do
            </p>
            <h2
              id="services-heading"
              className="mt-3 text-[clamp(1.75rem,3.4vw,2.5rem)] leading-[1.15] font-extrabold tracking-[-0.03em] text-navy"
            >
              We Turn Ideas Into{" "}
              <span className="text-brand-gradient">Digital Growth.</span>
            </h2>
          </div>

          <Button
            asChild
            variant="outline"
            className="h-12 rounded-xl border-border bg-card px-5 text-[14px] font-semibold text-navy hover:bg-secondary"
          >
            <a href="#services">
              View All Services
              <ArrowRight className="ml-2 size-4" strokeWidth={2.5} />
            </a>
          </Button>
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {SERVICES.map(({ icon: Icon, title, description }) => (
            <li key={title}>
              <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-[0_20px_44px_-30px_var(--navy)]">
                <Icon
                  className="size-7 text-brand-amber"
                  strokeWidth={1.6}
                  aria-hidden="true"
                />
                <h3 className="mt-6 text-[15px] font-bold tracking-[-0.01em] text-navy">
                  {title}
                </h3>
                <p className="mt-2 text-[13px] leading-[1.65] text-muted-foreground">
                  {description}
                </p>
                <ArrowRight
                  className="mt-6 size-4 text-brand-coral transition-transform group-hover:translate-x-1"
                  strokeWidth={2.5}
                  aria-hidden="true"
                />
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
