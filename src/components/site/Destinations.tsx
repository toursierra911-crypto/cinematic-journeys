import { Link } from "@tanstack/react-router";
import spiti from "@/assets/spiti/cloudy.jpeg";
import rajasthan from "@/assets/dest-rajasthan.jpg";
import ladakh from "@/assets/dest-ladakh.jpg";
import manali from "@/assets/manali/snow-view.jpg";

const items = [
  { name: "Spiti Valley", tag: "Moonland", img: spiti, span: "md:col-span-2 md:row-span-2" },
  { name: "Rajasthan", tag: "Desert", img: rajasthan, span: "" },
  { name: "Ladakh", tag: "High Himalaya", img: ladakh, span: "" },
  { name: "Manali", tag: "Mountain Valley", img: manali, span: "md:col-span-2" },
];

export function Destinations() {
  return (
    <section id="destinations" className="py-28 md:py-36 bg-background">
      <div className="container-x">
        <div className="flex items-end justify-between mb-14 gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">03 — Destinations</p>
            <h2 className="font-display text-4xl md:text-6xl font-light max-w-2xl">
              Places that <span className="italic">stay with you</span>.
            </h2>
          </div>
          <Link to="/destinations" className="hidden md:inline-block text-sm uppercase tracking-[0.2em] border-b border-foreground pb-1 hover:text-accent transition">
            View all
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:auto-rows-[260px] gap-4">
          {items.map((d) => (
            <Link
              key={d.name}
              to="/destinations/$slug"
              params={{ slug: d.name.toLowerCase() }}
              className={`group relative overflow-hidden rounded-2xl ${d.span} h-[360px] md:h-auto`}
            >
              <img
                src={d.img}
                alt={d.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute left-6 bottom-6 text-white">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/70 mb-1">{d.tag}</p>
                <h3 className="font-display text-2xl md:text-3xl font-medium">{d.name}</h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 md:hidden text-center">
          <Link to="/destinations" className="inline-block text-sm uppercase tracking-[0.2em] border-b border-foreground pb-1">
            View all destinations
          </Link>
        </div>
      </div>
    </section>
  );
}
