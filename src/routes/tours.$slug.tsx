import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getTour, tours } from "@/data/tours";
import { Nav } from "@/components/site/Nav";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

export const Route = createFileRoute("/tours/$slug")({
  loader: ({ params }) => {
    const tour = getTour(params.slug);
    if (!tour) throw notFound();
    return { tour };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.tour.name} — Voyage` },
          { name: "description", content: loaderData.tour.tagline },
          { property: "og:title", content: `${loaderData.tour.name} — Voyage` },
          { property: "og:description", content: loaderData.tour.tagline },
          { property: "og:image", content: loaderData.tour.img },
        ]
      : [{ title: "Tour — Voyage" }],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-display text-4xl mb-4">Tour not found</h1>
        <Link to="/" className="text-accent uppercase tracking-[0.2em] text-sm">← Back home</Link>
      </div>
    </div>
  ),
  component: TourPage,
});

function TourPage() {
  const { tour } = Route.useLoaderData();
  const others = tours.filter((t) => t.slug !== tour.slug);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* Hero */}
      <section className="relative h-[90vh] min-h-[560px] w-full overflow-hidden">
        <img src={tour.img} alt={tour.name} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80" />
        <div className="relative z-10 h-full container-x flex flex-col justify-end pb-20">
          <Link
            to="/"
            className="fade-up text-xs uppercase tracking-[0.3em] text-white/70 mb-6 hover:text-white w-fit"
          >
            ← All Tours
          </Link>
          <p className="fade-up text-xs md:text-sm uppercase tracking-[0.4em] text-white/80 mb-4">
            {tour.region} · {tour.days}
          </p>
          <h1 className="fade-up font-display text-white font-semibold text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] max-w-4xl">
            {tour.name}
          </h1>
          <p className="fade-up mt-6 max-w-xl text-white/85 text-lg font-light italic">
            {tour.tagline}
          </p>
        </div>
      </section>

      {/* Intro + meta */}
      <section className="py-24 md:py-32">
        <div className="container-x grid md:grid-cols-3 gap-16">
          <div className="md:col-span-2">
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6">The Journey</p>
            <p className="font-display text-2xl md:text-3xl font-light leading-snug">
              {tour.intro}
            </p>
          </div>
          <aside className="bg-card rounded-2xl p-8 h-fit border border-border">
            <dl className="space-y-5 text-sm">
              <div className="flex justify-between gap-4 pb-4 border-b border-border">
                <dt className="text-muted-foreground uppercase tracking-[0.2em] text-[10px]">Duration</dt>
                <dd>{tour.days}</dd>
              </div>
              <div className="flex justify-between gap-4 pb-4 border-b border-border">
                <dt className="text-muted-foreground uppercase tracking-[0.2em] text-[10px]">Region</dt>
                <dd>{tour.region}</dd>
              </div>
              <div className="flex justify-between gap-4 pb-4 border-b border-border">
                <dt className="text-muted-foreground uppercase tracking-[0.2em] text-[10px]">From</dt>
                <dd className="font-display text-xl">{tour.price}</dd>
              </div>
            </dl>
            <a
              href="https://wa.me/919999999999?text=Hi%2C%20I%27m%20interested%20in%20the%20tour"
              target="_blank"
              rel="noreferrer"
              className="mt-6 w-full inline-flex items-center justify-center bg-accent text-accent-foreground px-6 py-3.5 text-xs uppercase tracking-[0.2em] hover:opacity-90 transition rounded-full"
            >
              Enquire on WhatsApp
            </a>
            <Link
              to="/tours"
              className="mt-3 w-full inline-flex items-center justify-center border border-border text-foreground px-6 py-3.5 text-xs uppercase tracking-[0.2em] hover:bg-secondary transition rounded-full"
            >
              All Tours
            </Link>
          </aside>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-card">
        <div className="container-x">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Highlights</p>
          <h2 className="font-display text-3xl md:text-5xl font-light mb-12 max-w-2xl">
            What makes it unforgettable.
          </h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            {tour.highlights.map((h, i) => (
              <div key={h} className="flex gap-5 border-t border-border pt-5">
                <span className="font-display text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
                <p className="font-display text-lg font-light">{h}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="py-24 md:py-32">
        <div className="container-x max-w-4xl">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Itinerary</p>
          <h2 className="font-display text-3xl md:text-5xl font-light mb-14">Day by day.</h2>
          <ol className="space-y-10">
            {tour.itinerary.map((d) => (
              <li key={d.day} className="grid md:grid-cols-[160px_1fr] gap-6 border-t border-border pt-8">
                <span className="text-xs uppercase tracking-[0.3em] text-accent pt-1">{d.day}</span>
                <div>
                  <h3 className="font-display text-2xl mb-2">{d.title}</h3>
                  <p className="text-muted-foreground font-light">{d.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Includes */}
      <section className="py-20 bg-card">
        <div className="container-x grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">What's Included</p>
            <h2 className="font-display text-3xl md:text-4xl font-light">
              Every detail, taken care of.
            </h2>
          </div>
          <ul className="space-y-4">
            {tour.includes.map((i) => (
              <li key={i} className="flex gap-4 items-center border-b border-border pb-4">
                <span className="text-accent">✦</span>
                <span className="font-light">{i}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Other tours */}
      <section className="py-24">
        <div className="container-x">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Continue Exploring</p>
          <h2 className="font-display text-3xl md:text-5xl font-light mb-12">Other journeys.</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {others.map((t) => (
              <Link
                key={t.slug}
                to="/tours/$slug"
                params={{ slug: t.slug }}
                className="group block relative aspect-[16/10] overflow-hidden rounded-2xl"
              >
                <img
                  src={t.img}
                  alt={t.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute left-6 bottom-6 text-white">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/70 mb-1">
                    {t.region} · {t.days}
                  </p>
                  <h3 className="font-display text-2xl">{t.name}</h3>
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
