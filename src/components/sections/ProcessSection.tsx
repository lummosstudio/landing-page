import {
  MessageCircle,
  FileText,
  Camera,
  Rocket,
  BarChart3,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import processCamera from "@/assets/process-camera.webp";

const STEPS: {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
  accent: boolean;
}[] = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Discover",
    description: "We understand your business, goals, audience and market.",
    accent: false,
  },
  {
    icon: FileText,
    number: "02",
    title: "Strategy",
    description: "We research and build a focused strategy for your brand.",
    accent: true,
  },
  {
    icon: Camera,
    number: "03",
    title: "Create",
    description: "We develop compelling content, creatives and campaigns.",
    accent: false,
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch",
    description: "We publish and execute campaigns across the right channels.",
    accent: true,
  },
  {
    icon: BarChart3,
    number: "05",
    title: "Optimization",
    description: "We measure, improve and scale what drives meaningful growth.",
    accent: false,
  },
];

export function ProcessSection() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="cv-auto overflow-hidden bg-background py-12 sm:py-14 lg:py-16"
    >
      <h2 id="process-heading" className="sr-only">
        Our process
      </h2>

      <div className="mx-auto flex max-w-[1440px] items-center gap-6 sm:gap-8 px-4 sm:px-6 lg:gap-4 lg:px-8">
        <img
          src={processCamera}
          alt="Professional DSLR camera with a large lens"
          width={700}
          height={700}
          loading="lazy"
          className="hidden size-[180px] shrink-0 object-contain lg:block xl:size-[220px]"
        />

        <ol className="grid w-full gap-y-8 sm:gap-y-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 lg:gap-x-2">
          {STEPS.map(({ icon: Icon, number, title, description, accent }, i) => (
            <li
              key={number}
              className="relative flex flex-col items-center px-3 text-center"
            >
              {i < STEPS.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute top-[27px] left-[calc(50%+34px)] hidden h-px w-[calc(100%-68px)] border-t border-dashed border-border lg:block"
                />
              )}

              <span
                className={`relative inline-flex size-[52px] sm:size-[56px] items-center justify-center rounded-full shadow-sm ${
                  accent ? "bg-brand-gradient" : "bg-navy"
                }`}
              >
                <Icon
                  className="size-5 sm:size-6 text-primary-foreground"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </span>

              <p
                className={`mt-3 sm:mt-4 text-[13px] font-bold ${
                  accent ? "text-brand-coral" : "text-navy"
                }`}
              >
                {number}
              </p>
              <h3 className="mt-1 text-[15px] sm:text-[15.5px] font-bold tracking-[-0.01em] text-navy">
                {title}
              </h3>
              <p className="mt-1.5 sm:mt-2 max-w-[15rem] text-[12.5px] sm:text-[13px] leading-[1.65] text-muted-foreground">
                {description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
