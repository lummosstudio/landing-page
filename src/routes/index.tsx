import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustedBySection } from "@/components/sections/TrustedBySection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import heroStudio from "@/assets/hero-studio.webp";

const TITLE = "Lumos Digital Media — Smart Marketing. Real Growth.";
const DESCRIPTION =
  "Lumos Digital Media builds brands and drives business growth through smart digital marketing, creative content, strategy and performance.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "preload", as: "image", href: heroStudio, fetchPriority: "high" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background font-sans">
      <SiteHeader />
      <HeroSection />
      <TrustedBySection />
      <ServicesSection />
      <WorkSection />
      <ProcessSection />
      <SiteFooter />
    </main>
  );
}
