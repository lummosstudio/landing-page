import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (progress <= 0) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 z-[100] h-[3px] w-full pointer-events-none bg-transparent"
    >
      <div
        className="h-full bg-gradient-to-r from-brand-amber via-brand-coral to-accent-blue transition-[width] duration-150 ease-out shadow-[0_0_12px_rgba(255,178,36,0.6)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
