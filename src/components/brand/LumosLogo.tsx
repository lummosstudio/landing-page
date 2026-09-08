import { cn } from "@/lib/utils";

type LumosLogoProps = {
  className?: string;
  /** "dark" renders navy text for light surfaces, "light" for dark surfaces. */
  tone?: "dark" | "light";
};

/**
 * Lumos Digital wordmark: gradient "D" mark with an upward arrow, followed by
 * the "LUMOS / DIGITAL" lockup.
 */
export function LumosLogo({ className, tone = "dark" }: LumosLogoProps) {
  const isLight = tone === "light";

  return (
    <span className={cn("flex items-center gap-2.5", className)}>

      <svg
        viewBox="0 0 48 48"
        role="img"
        aria-label="Lumos Digital"
        className="h-9 w-9 shrink-0"
      >
        <defs>
          <linearGradient id="lumos-mark" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--brand-amber)" />
            <stop offset="100%" stopColor="var(--brand-coral)" />
          </linearGradient>
        </defs>
        <path
          d="M6 5h14c11 0 18 8 18 19S31 43 20 43H6z"
          fill="url(#lumos-mark)"
        />
        <path
          d="M14 5h6c11 0 18 8 18 19S31 43 20 43h-6z"
          fill="var(--navy)"
          opacity="0.92"
        />
        <path
          d="M13 34c6-2 11-7 15-14"
          stroke="var(--accent-blue)"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        <path d="M24 14l7 1-2 7z" fill="var(--accent-blue)" />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "text-[22px] font-extrabold tracking-tight",
            isLight ? "text-primary-foreground" : "text-navy",
          )}
        >
          LUMOS
        </span>
        <span
          className={cn(
            "mt-0.5 text-[10px] font-semibold tracking-[0.42em]",
            isLight ? "text-primary-foreground/60" : "text-muted-foreground",
          )}
        >
          DIGITAL
        </span>
      </span>
    </span>
  );
}
