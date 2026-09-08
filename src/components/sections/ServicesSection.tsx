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
import { Reveal } from "@/components/ui/ScrollReveal";

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
      className="bg-background py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <Reveal direction="up">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <p className="text-[11.5px] font-bold tracking-[0.16em] text-navy uppercase">
                What <span className="text-brand-gradient">We</span> Do
              </p>
              <h2
                id="services-heading"
                className="mt-3 text-[clamp(1.65rem,3.4vw,2.5rem)] leading-[1.15] font-extrabold tracking-[-0.03em] text-navy"
              >
                We Turn Ideas Into{" "}
                <span className="text-brand-gradient">Digital Growth.</span>
              </h2>
            </div>

            <Button
              asChild
              variant="outline"
              className="h-11 sm:h-12 w-full sm:w-auto rounded-xl border-border bg-card px-5 text-[14px] font-semibold text-navy hover:bg-secondary transition-all"
            >
              <a href="#services">
                View All Services
                <ArrowRight className="ml-2 size-4" strokeWidth={2.5} />
              </a>
            </Button>
          </div>
        </Reveal>

        <ul className="mt-8 sm:mt-10 grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {SERVICES.map(({ icon: Icon, title, description }, index) => (
            <li key={title}>
              <Reveal direction="up" delay={index * 75}>
                <article className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-5 shadow-soft-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-amber/60 hover:shadow-soft-hover">
                  <div>
                    <div className="inline-flex size-11 items-center justify-center rounded-xl bg-secondary/80 transition-colors group-hover:bg-brand-amber/15">
                      <Icon
                        className="size-6 text-brand-amber transition-transform group-hover:scale-110"
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="mt-5 text-[15px] font-bold tracking-[-0.01em] text-navy group-hover:text-brand-coral transition-colors">
                      {title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-[1.65] text-muted-foreground">
                      {description}
                    </p>
                  </div>
                  <div className="mt-5 pt-2">
                    <ArrowRight
                      className="size-4 text-brand-coral transition-transform group-hover:translate-x-1.5"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
