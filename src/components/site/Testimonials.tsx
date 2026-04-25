const reviews = [
  { q: "The most thoughtful trip we've ever taken. Every detail considered.", n: "Ananya & Rohan", r: "Ladakh, 2024" },
  { q: "It didn't feel like a tour — it felt like home discovering us.", n: "Maya Iyer", r: "Kerala, 2024" },
  { q: "Quiet luxury done right. Unforgettable from start to end.", n: "James Whitfield", r: "Rajasthan, 2023" },
];

export function Testimonials() {
  return (
    <section className="py-28 md:py-36 bg-secondary">
      <div className="container-x">
        <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">04 — Travellers</p>
        <h2 className="font-display text-4xl md:text-5xl font-light mb-14 max-w-2xl">
          Words from those who wandered with us.
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r) => (
            <figure key={r.n} className="bg-background p-8 md:p-10 flex flex-col gap-6">
              <p className="font-display text-xl md:text-2xl font-light leading-snug">"{r.q}"</p>
              <figcaption className="text-xs uppercase tracking-[0.2em] text-muted-foreground border-t border-foreground/15 pt-4">
                {r.n} <span className="text-accent">· {r.r}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
