import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { Nav } from "@/components/site/Nav";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { destinations } from "@/data/destinations";

export default function DestinationDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const dest = destinations.find((d) => d.name.toLowerCase() === slug?.toLowerCase());

  useEffect(() => {
    if (dest) document.title = `${dest.name} — Toursierra`;
  }, [dest]);

  if (!dest) return <Navigate to="/destinations" replace />;

  const gallery = dest.gallery && dest.gallery.length > 0 ? dest.gallery : [dest.img];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />

      <section className="relative h-[80vh] min-h-[500px] w-full overflow-hidden">
        <img src={dest.img} alt={dest.name} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />
        <div className="relative z-10 h-full container-x flex flex-col justify-end pb-20">
          <Link to="/destinations" className="fade-up text-xs uppercase tracking-[0.3em] text-white/70 mb-6 hover:text-white w-fit">
            ← All Destinations
          </Link>
          <p className="fade-up text-xs uppercase tracking-[0.4em] text-white/80 mb-3">{dest.tag}</p>
          <h1 className="fade-up font-display text-white font-semibold text-[clamp(2.5rem,7vw,6rem)] leading-[0.95]">
            {dest.name}
          </h1>
          <p className="fade-up mt-6 max-w-xl text-white/85 text-lg font-light italic">{dest.blurb}</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container-x">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6">Photo Journal</p>
          <h2 className="font-display text-3xl md:text-5xl font-light mb-12 max-w-2xl">{dest.name} in frames.</h2>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
            {gallery.map((src, i) => (
              <div key={i} className="mb-4 break-inside-avoid overflow-hidden rounded-xl group">
                <img
                  src={src}
                  alt={`${dest.name} ${i + 1}`}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container-x text-center">
          <h2 className="font-display text-3xl md:text-5xl font-light mb-6">Plan a journey to {dest.name}.</h2>
          <a
            href={`https://wa.me/918160958530?text=Hi%2C%20I%27d%20like%20to%20plan%20a%20trip%20to%20${encodeURIComponent(dest.name)}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-7 py-4 text-sm uppercase tracking-[0.18em] hover:opacity-90 transition rounded-full"
          >
            Chat on WhatsApp →
          </a>
        </div>
      </section>

      <WhatsAppFab />
    </main>
  );
}
