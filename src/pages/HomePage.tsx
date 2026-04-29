import { useEffect } from "react";
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

export default function HomePage() {
  useEffect(() => {
    document.title = "Toursierra — Travel Beyond Limits | Curated Luxury Journeys Across India";
  }, []);

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
