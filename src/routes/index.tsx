import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ParallaxSpotlightSection } from "@/components/sections/ParallaxSpotlightSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import heroStudio from "@/assets/hero-studio.webp";

const TITLE = "Lumos Digital Media — Best Digital Marketing Agency in Pondicherry";
const DESCRIPTION =
  "Top-rated digital marketing agency in Pondicherry. We scale businesses with high-converting social media marketing, cinematic video shoots, reels, SEO, performance ads, and brand building.";
const CANONICAL_URL = "https://lumosdigitalmedia.in/";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "digital marketing agency pondicherry, digital marketing company in puducherry, social media marketing pondicherry, video production pondicherry, commercial photography pondicherry, reels shoot agency pondicherry, seo services pondicherry, branding agency pondicherry, advertising agency in pondicherry, meta ads pondicherry, google ads management puducherry, website design pondicherry",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: CANONICAL_URL },
      { property: "og:image", content: "https://lumosdigitalmedia.in/Lumos-Digital-logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: "https://lumosdigitalmedia.in/Lumos-Digital-logo.png" },
    ],
    links: [
      { rel: "canonical", href: CANONICAL_URL },
      { rel: "preload", as: "image", href: heroStudio, fetchPriority: "high" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": "https://lumosdigitalmedia.in/#website",
              url: "https://lumosdigitalmedia.in/",
              name: "Lumos Digital Media",
              description: DESCRIPTION,
              publisher: {
                "@id": "https://lumosdigitalmedia.in/#organization",
              },
            },
            {
              "@type": ["LocalBusiness", "AdvertisingAgency", "ProfessionalService"],
              "@id": "https://lumosdigitalmedia.in/#localbusiness",
              name: "Lumos Digital Media",
              url: "https://lumosdigitalmedia.in/",
              logo: "https://lumosdigitalmedia.in/Lumos-Digital-logo.png",
              image: "https://lumosdigitalmedia.in/Lumos-Digital-logo.png",
              description: DESCRIPTION,
              telephone: "+91 90037 82254",
              email: "info@lumosdigitalmedia.in",
              priceRange: "₹₹",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Opposite Hotel Tamizh Park, Sokkanathan Pet, Mothilal Nagar, Marie Oulgaret, Vazhudavur Road",
                addressLocality: "Puducherry",
                addressRegion: "Puducherry",
                postalCode: "605009",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 11.9416,
                longitude: 79.8083,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "19:00",
                },
              ],
              areaServed: [
                { "@type": "City", name: "Puducherry" },
                { "@type": "AdministrativeArea", name: "Pondicherry" },
                { "@type": "AdministrativeArea", name: "Tamil Nadu" },
                { "@type": "City", name: "Chennai" },
                { "@type": "Country", name: "India" },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Digital Marketing & Creative Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Digital Marketing & Growth Strategy",
                      description:
                        "Data-driven digital marketing roadmaps and campaigns designed to increase qualified leads, sales, and brand authority.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Social Media Marketing & Instagram Management",
                      description:
                        "End-to-end Instagram and social media growth, viral content strategy, and community building.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Commercial Video Production & High-Impact Reels",
                      description:
                        "In-house cinema-grade video shoots, advertising commercials, brand storytelling reels, and product photography.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Paid Performance Advertising (Meta & Google Ads)",
                      description:
                        "High-conversion targeted Meta and Google ad campaigns optimized for maximum return on ad spend (ROAS).",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Search Engine Optimization (SEO) & Local Growth",
                      description:
                        "Local Google Search and Google Maps optimization to rank #1 in Pondicherry and drive organic customer discovery.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Branding, Logo Design & Web Development",
                      description:
                        "Comprehensive brand identity design, modern responsive websites, and high-converting landing pages.",
                    },
                  },
                ],
              },
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Why is Lumos Digital Media the best digital marketing agency in Pondicherry?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Lumos Digital Media combines in-house cinema-grade production with performance marketing, delivering measurable revenue growth, high-converting social content, and proven SEO results for businesses across Pondicherry and South India.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What services does Lumos Digital Media provide in Pondicherry?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We provide comprehensive digital marketing, social media management, commercial ad shoots & viral reels production, Meta/Google performance advertising, local SEO optimization, brand identity design, and web development.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How can Lumos help my business rank higher on Google in Pondicherry?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We implement rigorous technical SEO, local keyword targeting, Google Business Profile (Google Maps) optimization, high-authority citation building, and review acquisition strategies to rank your business #1 for local searches in Pondicherry.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does Lumos have an in-house studio for photo and video shoots?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, Lumos Digital Media operates a full in-house production setup with cinema cameras, studio lighting, audio gear, and professional editing suites located in Pondicherry.",
                  },
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background font-sans">
      <SiteHeader />
      <HeroSection />
      <ServicesSection />
      <ParallaxSpotlightSection />
      <WorkSection />
      <ProcessSection />
      <SiteFooter />
    </main>
  );
}
