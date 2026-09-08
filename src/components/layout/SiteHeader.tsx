import { useState, useEffect } from "react";
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
  "relative inline-block py-2 text-[15px] font-medium transition-colors";

export function SiteHeader({ activeItem = "Home" }: { activeItem?: string }) {
  const [open, setOpen] = useState(false);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-20 max-w-[1240px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          aria-label="Lumos Digital home"
          className="group flex items-center transition-transform active:scale-[0.98]"
        >
          <LumosLogo size="md" />
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-7 xl:gap-8">
            {NAV_ITEMS.map((item) => {
              const isActive = item.label === activeItem;
              const className = cn(
                LINK_BASE,
                isActive ? "text-navy font-semibold" : "text-muted-foreground hover:text-navy",
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

        {/* Header Right Actions */}
        <div className="flex items-center gap-2.5">
          <Button
            asChild
            className="hidden h-11 rounded-xl bg-navy px-5 text-[14.5px] font-semibold text-primary-foreground shadow-[0_10px_26px_-10px_var(--navy)] hover:bg-navy/90 sm:inline-flex"
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
            className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-card text-navy transition-colors hover:bg-secondary active:scale-95 lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {open && (
        <div className="fixed inset-x-0 top-20 bottom-0 z-50 flex flex-col bg-background/98 backdrop-blur-lg lg:hidden">
          <nav
            aria-label="Mobile"
            className="flex-1 overflow-y-auto px-5 py-6 sm:px-8"
          >
            <ul className="mx-auto flex max-w-lg flex-col divide-y divide-border/40">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  {item.to ? (
                    <Link
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex items-center justify-between py-3.5 text-[16px] font-medium transition-colors",
                        item.label === activeItem
                          ? "font-bold text-navy"
                          : "text-muted-foreground hover:text-navy",
                      )}
                    >
                      <span>{item.label}</span>
                      {item.label === activeItem && (
                        <span className="bg-brand-gradient size-2 rounded-full" />
                      )}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block py-3.5 text-[16px] font-medium text-muted-foreground transition-colors hover:text-navy"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
              <li className="pt-6">
                <Button
                  asChild
                  className="h-12 w-full rounded-xl bg-navy text-[15px] font-semibold text-primary-foreground shadow-[0_12px_30px_-12px_var(--navy)] hover:bg-navy/90"
                >
                  <Link to="/contact" onClick={() => setOpen(false)}>
                    Book Consultation
                    <ArrowRight className="ml-2 size-4" strokeWidth={2.5} />
                  </Link>
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
