import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { LumosLogo } from "@/components/brand/LumosLogo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type NavItem = { label: string; to?: "/" | "/about" | "/contact"; href?: string };

const NAV_ITEMS: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Works", href: "/#works" },
  { label: "Packages", href: "/#packages" },
  { label: "Blog", href: "/#blog" },
  { label: "Contact", to: "/contact" },
];

const LINK_BASE =
  "relative inline-block py-1.5 text-[15px] font-medium transition-colors";

export function SiteHeader({ activeItem = "Home" }: { activeItem?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full">
      <div className="mx-auto flex h-20 max-w-[1240px] items-center justify-between px-5 sm:px-8 lg:px-6">
        <Link to="/" aria-label="Lumos Digital home">
          <LumosLogo />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {NAV_ITEMS.map((item) => {
              const isActive = item.label === activeItem;
              const className = cn(
                LINK_BASE,
                isActive ? "text-navy" : "text-muted-foreground hover:text-navy",
              );
              const underline = isActive ? (
                <span className="bg-brand-gradient absolute -bottom-0.5 left-0 h-[2.5px] w-full rounded-full" />
              ) : null;

              return (
                <li key={item.label}>
                  {item.to ? (
                    <Link
                      to={item.to}
                      aria-current={isActive ? "page" : undefined}
                      className={className}
                    >
                      {item.label}
                      {underline}
                    </Link>
                  ) : (
                    <a href={item.href} className={className}>
                      {item.label}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            className="hidden h-12 rounded-xl bg-navy px-6 text-[15px] font-semibold text-primary-foreground shadow-[0_10px_30px_-12px_var(--navy)] hover:bg-navy/90 sm:inline-flex"
          >
            <Link to="/contact">
              Book Consultation
              <ArrowRight className="ml-2 size-4" strokeWidth={2.5} />
            </Link>
          </Button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle navigation menu"
            className="inline-flex size-11 items-center justify-center rounded-xl border border-border text-navy lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label="Mobile"
          className="border-t border-border bg-card lg:hidden"
        >
          <ul className="mx-auto flex max-w-[1240px] flex-col px-5 py-2 sm:px-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                {item.to ? (
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block py-3 text-[15px] font-medium",
                      item.label === activeItem
                        ? "text-navy"
                        : "text-muted-foreground hover:text-navy",
                    )}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-[15px] font-medium text-muted-foreground hover:text-navy"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
            <li className="py-3 sm:hidden">
              <Button
                asChild
                className="h-12 w-full rounded-xl bg-navy text-[15px] font-semibold text-primary-foreground hover:bg-navy/90"
              >
                <Link to="/contact" onClick={() => setOpen(false)}>
                  Book Consultation
                  <ArrowRight className="ml-2 size-4" strokeWidth={2.5} />
                </Link>
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
