import { ArrowRight, Play, Sparkles, PenTool, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import heroStudio from "@/assets/hero-studio.webp";
import avatar1 from "@/assets/avatar-1.webp";
import avatar2 from "@/assets/avatar-2.webp";
import avatar3 from "@/assets/avatar-3.webp";
import avatar4 from "@/assets/avatar-4.webp";

const HIGHLIGHTS: { icon: LucideIcon; label: string }[] = [
  { icon: Sparkles, label: "Smart Strategy" },
  { icon: PenTool, label: "Creative Marketing" },
  { icon: TrendingUp, label: "Business Growth" },
];

const CLIENT_AVATARS = [
  { src: avatar1, alt: "Lumos Digital client" },
  { src: avatar2, alt: "Lumos Digital client" },
  { src: avatar3, alt: "Lumos Digital client" },
  { src: avatar4, alt: "Lumos Digital client" },
];

export function HeroSection() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-background"
    >
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.02fr)] lg:gap-8">
        {/* Copy column */}
        <div className="order-2 px-5 pb-16 sm:px-8 lg:order-1 lg:py-20 lg:pl-[max(2rem,calc((100vw-1240px)/2))] lg:pr-6">
          <p className="flex items-center gap-2 text-[13px] font-bold tracking-[0.08em] text-navy uppercase">
            Lumos Digital{" "}
            <span className="text-brand-gradient">Media</span>
            <span className="bg-brand-gradient size-2 rounded-full" />
          </p>

          <h1
            id="hero-heading"
            className="mt-5 text-[clamp(2.75rem,6.4vw,4.5rem)] leading-[1.02] font-extrabold tracking-[-0.035em] text-navy"
          >
            Smart Marketing.
            <br />
            <span className="underline-script text-brand-gradient relative inline-block pb-3 font-script text-[0.92em] font-normal tracking-normal">
              Real Growth.
            </span>
          </h1>

          <p className="mt-6 max-w-[30rem] text-[15px] leading-[1.7] text-muted-foreground">
            We build brands, create compelling content and drive digital growth
            through strategy, creativity and performance-focused marketing.
          </p>

          <ul className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            {HIGHLIGHTS.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2.5 text-[13.5px] font-medium text-navy"
              >
                <Icon
                  className="size-[18px] text-accent-blue"
                  strokeWidth={2}
                  aria-hidden="true"
                />
                {label}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button
              asChild
              className="h-[54px] rounded-xl bg-navy px-7 text-[15px] font-semibold text-primary-foreground shadow-[0_16px_34px_-16px_var(--navy)] hover:bg-navy/90"
            >
              <a href="#services">
                Start Growing
                <ArrowRight className="ml-2.5 size-4" strokeWidth={2.5} />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="h-[54px] rounded-full border-border bg-card px-6 text-[15px] font-semibold text-navy hover:bg-secondary"
            >
              <a href="#showreel">
                <span className="mr-3 inline-flex size-8 items-center justify-center rounded-full border border-border">
                  <Play
                    className="size-3 fill-navy text-navy"
                    aria-hidden="true"
                  />
                </span>
                Explore Our Work
              </a>
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <ul className="flex items-center">
              {CLIENT_AVATARS.map((avatar, index) => (
                <li
                  key={avatar.src}
                  className={index === 0 ? "" : "-ml-3"}
                  style={{ zIndex: CLIENT_AVATARS.length - index }}
                >
                  <img
                    src={avatar.src}
                    alt={avatar.alt}
                    width={128}
                    height={128}
                    loading="lazy"
                    className="size-11 rounded-full border-2 border-background object-cover"
                  />
                </li>
              ))}
            </ul>
            <div className="leading-tight">
              <p className="text-[14.5px] font-bold text-navy">
                Brands Growing With Lumos
              </p>
              <p className="mt-1 text-[13px] text-muted-foreground">
                Strategy · Content · Performance
              </p>
            </div>
          </div>
        </div>

        {/* Visual column */}
        <div className="order-1 lg:order-2">
          <div className="relative overflow-hidden bg-soft-gray lg:rounded-l-[2.5rem]">
            <img
              src={heroStudio}
              alt="Lumos Digital studio setup with softbox lights, a camera on a tripod and the brand's 3D logo on a podium"
              width={1200}
              height={1008}
              fetchPriority="high"
              decoding="async"
              className="h-[300px] w-full object-cover object-center sm:h-[400px] lg:h-[520px] xl:h-[560px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
