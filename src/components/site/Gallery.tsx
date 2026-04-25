import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";

const imgs = [g1, g2, g3, g4, g5, g6];

export function Gallery() {
  return (
    <section id="gallery" className="py-28 md:py-36 bg-background">
      <div className="container-x mb-14">
        <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">05 — Gallery</p>
        <h2 className="font-display text-4xl md:text-6xl font-light max-w-3xl">
          Moments, in passing.
        </h2>
      </div>
      <div className="container-x">
        <div className="columns-2 md:columns-3 gap-4 [column-fill:_balance]">
          {imgs.map((src, i) => (
            <div key={i} className="mb-4 break-inside-avoid overflow-hidden group">
              <img
                src={src}
                alt=""
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
