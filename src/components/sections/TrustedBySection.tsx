import { Crown, Sun, Building2, Home, Plane, Coffee } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const BRANDS: { icon: LucideIcon; name: string; sub: string }[] = [
  { icon: Coffee, name: "Brew Haven", sub: "Cafe" },
  { icon: Sun, name: "Sunergy", sub: "Solar" },
  { icon: Crown, name: "Royal Stays", sub: "Hotels & Resorts" },
  { icon: Building2, name: "Estate Pro", sub: "Real Estate" },
  { icon: Plane, name: "Travelogue", sub: "India" },
  { icon: Home, name: "Buildwell", sub: "Constructions" },
];

export function TrustedBySection() {
  return (
    <section aria-label="Brands that trust Lumos Digital" className="bg-background">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 rounded-2xl border border-border bg-card p-6 sm:px-8 shadow-[0_18px_50px_-32px_var(--navy)]">
          <div className="shrink-0">
            <p className="text-[11px] leading-[1.5] font-medium tracking-[0.12em] text-muted-foreground uppercase">
              Trusted by
              <br />
              <span className="text-[13px] font-extrabold tracking-[0.06em] text-navy">
                Amazing Brands
              </span>
            </p>
          </div>

          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:flex md:flex-wrap md:items-center md:gap-x-8 md:gap-y-5">
            {BRANDS.map(({ icon: Icon, name, sub }) => (
              <li key={name} className="flex items-center gap-2.5">
                <Icon
                  className="size-5 sm:size-6 shrink-0 text-navy"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <span className="leading-tight">
                  <span className="block text-[12px] sm:text-[12.5px] font-bold tracking-[0.04em] text-navy uppercase">
                    {name}
                  </span>
                  <span className="block text-[10px] sm:text-[10.5px] font-medium tracking-[0.08em] text-muted-foreground uppercase">
                    {sub}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
