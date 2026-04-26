import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Destinations } from "@/components/site/Destinations";
import { Experience } from "@/components/site/Experience";
import { Tours } from "@/components/site/Tours";
import { VideoSection } from "@/components/site/VideoSection";
import { Testimonials } from "@/components/site/Testimonials";
import { Gallery } from "@/components/site/Gallery";
import { Contact } from "@/components/site/Contact";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Toursierra — Travel Beyond Limits | Curated Luxury Journeys Across India" },
      {
        name: "description",
        content:
          "Premium curated travel experiences across India. Personalized itineraries, local expertise & premium stays — Himalayas, Kerala backwaters, Rajasthan deserts and beyond.",
      },
      { name: "keywords", content: "luxury travel India, curated tours, Himalaya tours, Kerala backwaters, Rajasthan tours, Ladakh, premium travel agency, India holiday packages" },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "Toursierra" },
      { property: "og:title", content: "Toursierra — Travel Beyond Limits" },
      { property: "og:description", content: "Curated luxury journeys across India — Himalayas, deserts, backwaters & coast." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Toursierra — Travel Beyond Limits" },
      { name: "twitter:description", content: "Curated luxury journeys across India." },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          name: "Toursierra",
          description: "Premium curated travel experiences across India.",
          url: "https://voyage.lovable.app/",  // TODO: change url
          areaServed: "India",
          priceRange: "$$$",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Tours />
      <Experience />
      <Destinations />
      <VideoSection />
      <Testimonials />
      <Gallery />
      <Contact />
      <WhatsAppFab />
    </main>
  );
}
