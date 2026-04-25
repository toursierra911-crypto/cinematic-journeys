import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { destinations } from "@/data/destinations";

export const Route = createFileRoute("/destinations/")({
  head: () => ({
    meta: [
      { title: "Destinations — Voyage" },
      { name: "description", content: "Explore every region we travel — from Himalayan passes to backwater villages." },
      { property: "og:title", content: "Destinations — Voyage" },
      { property: "og:description", content: "A visual atlas of curated destinations across India." },
    ],
  }),
  component: DestinationsPage,
});

function DestinationsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />

      <section className="pt-40 pb-16">
        <div className="container-x">
          <Link to="/" className="text-xs uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground">
            ← Home
          </Link>
          <p className="mt-10 text-xs uppercase tracking-[0.3em] text-accent mb-4">Destinations</p>
          <h1 className="font-display text-5xl md:text-7xl font-light max-w-3xl leading-[1.05]">
            Every corner, <span className="italic">in pictures</span>.
          </h1>
          <p className="mt-6 max-w-xl text-muted-foreground font-light">
            A visual atlas of the regions we travel. Tap any place to see more.
          </p>
        </div>
      </section>

      <section className="pb-28">
        <div className="container-x">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {destinations.map((d) => (
              <Link
                key={d.name}
                to="/destinations/$slug"
                params={{ slug: d.name.toLowerCase() }}
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl"
              >
                <img
                  src={d.img}
                  alt={d.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                <div className="absolute left-6 bottom-6 right-6 text-white">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/70 mb-1">{d.tag}</p>
                  <h3 className="font-display text-2xl md:text-3xl font-medium">{d.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppFab />
    </main>
  );
}
