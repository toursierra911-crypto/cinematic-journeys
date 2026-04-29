import { Link } from "react-router-dom";
import { tours } from "@/data/tours";

export function Tours() {
  const featured = tours.slice(0, 6);
  return (
    <section id="tours" className="py-28 md:py-36 bg-background">
      <div className="container-x">
        <div className="flex items-end justify-between mb-14 gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">01 — Signature Tours</p>
            <h2 className="font-display text-4xl md:text-6xl font-light max-w-3xl">
              Journeys, thoughtfully composed.
            </h2>
          </div>
          <Link to="/tours" className="hidden md:inline-block text-sm uppercase tracking-[0.2em] border-b border-foreground pb-1 hover:text-accent transition">
            All {tours.length} tours
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {featured.map((t) => (
            <article key={t.slug} className="group">
              <Link
                to={`/tours/${t.slug}`}
                className="block relative aspect-[4/5] overflow-hidden mb-5 rounded-2xl"
              >
                <img
                  src={t.img}
                  alt={t.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
              </Link>
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">
                {t.region} · {t.days}
              </p>
              <h3 className="font-display text-2xl mb-3">{t.name}</h3>
              <div className="flex items-center justify-between border-t border-border pt-4">
                <span className="text-sm text-muted-foreground">
                  From <strong className="font-medium text-foreground">{t.price}</strong>
                </span>
                <Link
                  to={`/tours/${t.slug}`}
                  className="text-xs uppercase tracking-[0.2em] hover:text-accent transition"
                >
                  View Details →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/tours"
            className="inline-flex items-center gap-3 border border-foreground text-foreground px-7 py-4 text-xs uppercase tracking-[0.2em] hover:bg-foreground hover:text-background transition rounded-full"
          >
            View All {tours.length} Tours →
          </Link>
        </div>
      </div>
    </section>
  );
}
