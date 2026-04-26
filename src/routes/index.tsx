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
      { title: "Voyage — Travel Beyond Limits | Curated Luxury Journeys Across India" },
      {
        name: "description",
        content:
          "Premium curated travel experiences across India. Personalized itineraries, local expertise & premium stays — Himalayas, Kerala backwaters, Rajasthan deserts and beyond.",
      },
      { name: "keywords", content: "luxury travel India, curated tours, Himalaya tours, Kerala backwaters, Rajasthan tours, Ladakh, premium travel agency, India holiday packages" },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "Voyage" },
      { property: "og:title", content: "Voyage — Travel Beyond Limits" },
      { property: "og:description", content: "Curated luxury journeys across India — Himalayas, deserts, backwaters & coast." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://voyage.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Voyage — Travel Beyond Limits" },
      { name: "twitter:description", content: "Curated luxury journeys across India." },
    ],
    links: [{ rel: "canonical", href: "https://voyage.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          name: "Voyage",
          description: "Premium curated travel experiences across India.",
          url: "https://voyage.lovable.app/",
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
