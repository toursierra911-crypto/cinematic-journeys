import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Nav } from "@/components/site/Nav";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { tours } from "@/data/tours";

export const Route = createFileRoute("/tours/")({
  head: () => ({
    meta: [
      { title: "All Tours — Toursierra" },
      { name: "description", content: "Browse every curated journey across India — Himalayas, deserts, backwaters, islands and more." },
      { property: "og:title", content: "All Tours — Toursierra" },
      { property: "og:description", content: "Every Toursierra journey, in one place." },
    ],
  }),
  component: ToursIndex,
});

type View = "grid" | "list";

function ToursIndex() {
  const [view, setView] = useState<View>("grid");
  const [region, setRegion] = useState<string>("All");

  const regions = useMemo(() => ["All", ...Array.from(new Set(tours.map((t) => t.region.split(" ")[0])))], []);
  const filtered = region === "All" ? tours : tours.filter((t) => t.region.startsWith(region));

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />

      <section className="pt-40 pb-12">
        <div className="container-x">
          <Link to="/" className="text-xs uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground">
            ← Home
          </Link>
          <p className="mt-10 text-xs uppercase tracking-[0.3em] text-accent mb-4">All Tours</p>
          <h1 className="font-display text-5xl md:text-7xl font-light max-w-3xl leading-[1.05]">
            Every journey, <span className="italic">in one place</span>.
          </h1>
          <p className="mt-6 max-w-xl text-muted-foreground font-light">
            {tours.length} curated itineraries across India. Filter by region, switch between grid and list.
          </p>
        </div>
      </section>

      {/* Filters + view toggle */}
      <section className="border-y border-border sticky top-0 bg-background/90 backdrop-blur z-30">
        <div className="container-x flex flex-wrap items-center justify-between gap-4 py-4">
          <div className="flex flex-wrap gap-2">
            {regions.map((r) => (
              <button
                key={r}
                onClick={() => setRegion(r)}
                className={`text-[10px] uppercase tracking-[0.2em] px-4 py-2 rounded-full border transition ${
                  region === r
                    ? "bg-foreground text-background border-foreground"
                    : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {r}
              </button>
            ))}
          </div>
          <div className="flex gap-1 rounded-full border border-border p-1">
            <button
              onClick={() => setView("grid")}
              className={`text-[10px] uppercase tracking-[0.2em] px-4 py-2 rounded-full transition ${
                view === "grid" ? "bg-foreground text-background" : "text-muted-foreground"
              }`}
            >
              Grid
            </button>
            <button
              onClick={() => setView("list")}
              className={`text-[10px] uppercase tracking-[0.2em] px-4 py-2 rounded-full transition ${
                view === "list" ? "bg-foreground text-background" : "text-muted-foreground"
              }`}
            >
              List
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-x">
          {view === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((t) => (
                <article key={t.slug} className="group">
                  <Link
                    to="/tours/$slug"
                    params={{ slug: t.slug }}
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
                      to="/tours/$slug"
                      params={{ slug: t.slug }}
                      className="text-xs uppercase tracking-[0.2em] hover:text-accent transition"
                    >
                      View Details →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <ul className="divide-y divide-border border-y border-border">
              {filtered.map((t) => (
                <li key={t.slug}>
                  <Link
                    to="/tours/$slug"
                    params={{ slug: t.slug }}
                    className="group grid grid-cols-[80px_1fr_auto] md:grid-cols-[120px_1fr_180px_140px_auto] items-center gap-4 md:gap-8 py-5"
                  >
                    <div className="aspect-[4/3] overflow-hidden rounded-lg">
                      <img
                        src={t.img}
                        alt={t.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-[800ms] group-hover:scale-110"
                      />
                    </div>
                    <div>
                      <h3 className="font-display text-lg md:text-2xl">{t.name}</h3>
                      <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mt-1 md:hidden">
                        {t.region} · {t.days}
                      </p>
                    </div>
                    <p className="hidden md:block text-xs uppercase tracking-[0.25em] text-muted-foreground">
                      {t.region}
                    </p>
                    <p className="hidden md:block text-xs uppercase tracking-[0.25em] text-muted-foreground">
                      {t.days} · <span className="text-foreground">{t.price}</span>
                    </p>
                    <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground group-hover:text-accent transition">
                      View →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-20">No tours in this region yet.</p>
          )}
        </div>
      </section>

      <WhatsAppFab />
    </main>
  );
}
