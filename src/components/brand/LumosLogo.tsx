import { cn } from "@/lib/utils";
import lumosIcon from "@/assets/lumos-icon.webp";

type LumosLogoProps = {
  className?: string;
  /** "dark" renders navy text for light surfaces, "light" for dark surfaces. */
  tone?: "dark" | "light";
  /** Optional size variant */
  size?: "sm" | "md" | "lg";
  /** Whether to show the subtext/tagline */
  showTagline?: boolean;
};

/**
 * Lumos Digital official brand logo:
 * Crisp iconic "D" growth mark with pixel squares & blue upward arrow,
 * alongside sharp brand typography for light and dark backgrounds.
 */
export function LumosLogo({
  className,
  tone = "dark",
  size = "md",
  showTagline = false,
}: LumosLogoProps) {
  const isLight = tone === "light";

  const iconSizes = {
    sm: "h-8 w-auto max-w-[38px]",
    md: "h-9 w-auto max-w-[44px] sm:h-10 sm:max-w-[48px]",
    lg: "h-12 w-auto max-w-[58px]",
  };

  const lumosFontSizes = {
    sm: "text-[18px]",
    md: "text-[20px] sm:text-[22px]",
    lg: "text-[24px] sm:text-[28px]",
  };

  const digitalFontSizes = {
    sm: "text-[9px] tracking-[0.38em]",
    md: "text-[9.5px] sm:text-[10px] tracking-[0.42em]",
    lg: "text-[11px] sm:text-[12px] tracking-[0.45em]",
  };

  return (
    <span className={cn("inline-flex items-center gap-2.5 select-none", className)}>
      <img
        src={lumosIcon}
        alt="Lumos Digital logo mark"
        width={100}
        height={78}
        loading="eager"
        decoding="async"
        className={cn(
          "shrink-0 object-contain drop-shadow-sm transition-transform duration-200 group-hover:scale-105",
          iconSizes[size],
        )}
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-extrabold tracking-tight transition-colors",
            lumosFontSizes[size],
            isLight ? "text-primary-foreground" : "text-navy",
          )}
        >
          LUMOS
        </span>
        <span
          className={cn(
            "mt-0.5 font-bold uppercase transition-colors",
            digitalFontSizes[size],
            isLight ? "text-primary-foreground/75" : "text-muted-foreground",
          )}
        >
          DIGITAL
        </span>
        {showTagline && (
          <span
            className={cn(
              "mt-1 text-[8px] font-semibold tracking-[0.18em] uppercase",
              isLight ? "text-brand-amber" : "text-brand-coral",
            )}
          >
            Smart Marketing · Real Growth
          </span>
        )}
      </span>
    </span>
  );
}
