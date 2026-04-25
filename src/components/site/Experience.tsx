import exp from "@/assets/experience.jpg";

const highlights = [
  { n: "01", t: "Personalized itineraries", d: "Every journey shaped around your pace and curiosity." },
  { n: "02", t: "Local expertise", d: "Guides born of the land you came to discover." },
  { n: "03", t: "Premium stays", d: "Hand-picked retreats with views worth waking up to." },
];

export function Experience() {
  return (
    <section id="experience" className="py-28 md:py-36 bg-secondary">
      <div className="container-x grid md:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img src={exp} alt="Premium tented stay" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">02 — Experience</p>
          <h2 className="font-display text-4xl md:text-5xl font-light leading-[1.05] mb-10">
            We don't plan trips.<br />
            We craft <em className="italic font-normal">experiences</em>.
          </h2>
          <div className="space-y-8 max-w-md">
            {highlights.map((h) => (
              <div key={h.n} className="flex gap-6 border-t border-foreground/15 pt-6">
                <span className="font-display text-sm text-accent pt-1">{h.n}</span>
                <div>
                  <h3 className="font-display text-xl mb-1">{h.t}</h3>
                  <p className="text-sm text-muted-foreground">{h.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
