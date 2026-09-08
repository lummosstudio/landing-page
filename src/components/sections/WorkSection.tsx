import { useState } from "react";
import { ArrowRight, Play, Smile, Heart, Trophy } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import workCafe from "@/assets/work-cafe.webp";
import workSolar from "@/assets/work-solar.webp";
import workEstate from "@/assets/work-estate.webp";
import workTravel from "@/assets/work-travel.webp";
import workHotel from "@/assets/work-hotel.webp";
import workConstruction from "@/assets/work-construction.webp";

const FILTERS = [
  "All",
  "Campaigns",
  "Branding",
  "Social Content",
  "Advertising",
  "Web Projects",
] as const;

type Filter = (typeof FILTERS)[number];

const PROJECTS: {
  image: string;
  title: string;
  kind: string;
  alt: string;
  tags: Filter[];
}[] = [
  {
    image: workCafe,
    title: "Brew Haven Cafe",
    kind: "Social Content · Brand Campaign",
    alt: "Iced coffee cups with branded sleeves on a cafe counter",
    tags: ["Social Content", "Branding"],
  },
  {
    image: workSolar,
    title: "Sunergy Solar",
    kind: "Lead Generation · Advertising",
    alt: "Rows of solar panels in a green field under a blue sky",
    tags: ["Campaigns", "Advertising"],
  },
  {
    image: workEstate,
    title: "Estate Pro",
    kind: "Brand Strategy · Digital Campaign",
    alt: "Modern luxury villa at dusk with warm interior lighting",
    tags: ["Campaigns", "Branding"],
  },
  {
    image: workTravel,
    title: "Travelogue India",
    kind: "Social Content · Campaign",
    alt: "SUV on a mountain road facing misty Himalayan peaks",
    tags: ["Social Content", "Campaigns"],
  },
  {
    image: workHotel,
    title: "Royal Stays",
    kind: "Branding · Social Content",
    alt: "Luxury hotel suite interior lit by warm lamps at night",
    tags: ["Branding", "Social Content"],
  },
  {
    image: workConstruction,
    title: "Buildwell Constructions",
    kind: "Business Website · Campaign",
    alt: "Tower crane silhouetted against a dusk sky above a building site",
    tags: ["Web Projects", "Campaigns"],
  },
];

const STATS: { icon: LucideIcon; value: string; label: string }[] = [
  { icon: Smile, value: "250+", label: "Growth Projects" },
  { icon: Heart, value: "98%", label: "Client Satisfaction" },
  { icon: Trophy, value: "5+", label: "Years Driving Growth" },
];

export function WorkSection() {
  const [active, setActive] = useState<Filter>("All");

  const projects =
    active === "All"
      ? PROJECTS
      : PROJECTS.filter((project) => project.tags.includes(active));

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="cv-auto bg-soft-gray py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="text-[11.5px] font-bold tracking-[0.16em] text-navy uppercase">
              Selected Work
            </p>
            <h2
              id="work-heading"
              className="mt-3 text-[clamp(1.75rem,3.4vw,2.5rem)] leading-[1.1] font-extrabold tracking-[-0.03em] text-navy"
            >
              Ideas We&apos;ve
              <br />
              <span className="text-brand-gradient">Turned Into Growth.</span>
            </h2>
          </div>

          <ul className="flex flex-wrap items-center gap-2.5">
            {FILTERS.map((filter) => {
              const isActive = filter === active;
              return (
                <li key={filter}>
                  <button
                    type="button"
                    onClick={() => setActive(filter)}
                    aria-pressed={isActive}
                    className={`h-10 rounded-full px-5 text-[13.5px] font-semibold transition-colors ${
                      isActive
                        ? "bg-navy text-primary-foreground"
                        : "border border-border bg-card text-navy hover:bg-secondary"
                    }`}
                  >
                    {filter}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {projects.map((project) => (
            <li key={project.title}>
              <article className="group">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={project.image}
                    alt={project.alt}
                    width={640}
                    height={480}
                    loading="lazy"
                    className="h-[150px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <span className="absolute right-3 bottom-3 inline-flex size-9 items-center justify-center rounded-full bg-navy/90 text-primary-foreground backdrop-blur">
                    <Play className="size-3.5 fill-current" aria-hidden="true" />
                  </span>
                </div>
                <h3 className="mt-3.5 text-[14px] font-bold tracking-[-0.01em] text-navy">
                  {project.title}
                </h3>
                <p className="mt-1 text-[12.5px] text-muted-foreground">
                  {project.kind}
                </p>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center">
          <Button
            asChild
            variant="outline"
            className="h-12 rounded-xl border-border bg-card px-6 text-[14px] font-semibold text-navy hover:bg-secondary"
          >
            <a href="#work">
              View All Projects
              <ArrowRight className="ml-2.5 size-4" strokeWidth={2.5} />
            </a>
          </Button>
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-card px-6 py-8 shadow-[0_20px_50px_-36px_var(--navy)] sm:px-10">
          <div className="grid gap-8 divide-border sm:grid-cols-2 lg:grid-cols-4 lg:divide-x">
            <div className="lg:pr-8">
              <p className="text-[11px] font-bold tracking-[0.16em] text-muted-foreground uppercase">
                Our Process
              </p>
              <p className="mt-2 text-[clamp(1.25rem,2vw,1.5rem)] leading-[1.15] font-extrabold tracking-[-0.03em] text-navy">
                Creative Thinking.
                <br />
                <span className="text-brand-gradient">Measurable Growth.</span>
              </p>
            </div>

            {STATS.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-4 lg:px-8">
                <Icon
                  className="size-9 text-brand-amber"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <div>
                  <p className="text-[clamp(1.5rem,2.4vw,1.875rem)] leading-none font-extrabold tracking-[-0.03em] text-navy">
                    {value}
                  </p>
                  <p className="mt-1.5 text-[13px] text-muted-foreground">
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
