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
      { title: "Voyage — Travel Beyond Limits | Curated Journeys Across India" },
      {
        name: "description",
        content:
          "Premium curated travel experiences across India. Personalized itineraries, local expertise, premium stays — from the Himalayas to the coast.",
      },
      { property: "og:title", content: "Voyage — Travel Beyond Limits" },
      { property: "og:description", content: "Curated journeys across India." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Destinations />
      <Experience />
      <Tours />
      <VideoSection />
      <Testimonials />
      <Gallery />
      <Contact />
      <WhatsAppFab />
    </main>
  );
}
