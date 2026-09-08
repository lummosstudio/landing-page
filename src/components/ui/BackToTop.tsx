import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 380) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    // Check if lenis is available globally
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (typeof window !== "undefined" && (window as any).lenis) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className={cn(
        "fixed right-6 bottom-6 z-40 inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/90 px-4 py-2.5 text-[13px] font-bold text-navy shadow-glass backdrop-blur-md transition-all duration-300 hover:border-brand-amber hover:bg-navy hover:text-primary-foreground hover:shadow-navy-btn-hover active:scale-95",
        visible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-10 opacity-0 pointer-events-none"
      )}
    >
      <ArrowUp className="size-4 text-brand-coral transition-transform group-hover:-translate-y-0.5" strokeWidth={2.5} />
      <span className="hidden sm:inline">Top</span>
    </button>
  );
}
