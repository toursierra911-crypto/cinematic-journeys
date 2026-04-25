import him from "@/assets/tour-himalaya.jpg";
import var_ from "@/assets/tour-varanasi.jpg";
import meg from "@/assets/tour-meghalaya.jpg";

const tours = [
  { img: him, name: "Spiti Valley Odyssey", region: "Himachal", days: "9 Days", price: "₹84,000" },
  { img: var_, name: "Sacred Ganges", region: "Varanasi", days: "5 Days", price: "₹52,000" },
  { img: meg, name: "Living Roots", region: "Meghalaya", days: "7 Days", price: "₹68,000" },
];

export function Tours() {
  return (
    <section id="tours" className="py-28 md:py-36 bg-background">
      <div className="container-x">
        <div className="mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">03 — Signature Tours</p>
          <h2 className="font-display text-4xl md:text-6xl font-light max-w-3xl">
            Journeys, thoughtfully composed.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {tours.map((t) => (
            <article key={t.name} className="group">
              <div className="relative aspect-[4/5] overflow-hidden mb-5">
                <img
                  src={t.img}
                  alt={t.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
              </div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">
                {t.region} · {t.days}
              </p>
              <h3 className="font-display text-2xl mb-3">{t.name}</h3>
              <div className="flex items-center justify-between border-t border-foreground/15 pt-4">
                <span className="text-sm">From <strong className="font-medium">{t.price}</strong></span>
                <a href="#contact" className="text-xs uppercase tracking-[0.2em] hover:text-accent transition">
                  View Details →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
