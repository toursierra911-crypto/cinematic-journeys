import heroImg from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section id="top" className="relative h-[100svh] min-h-[560px] w-full overflow-hidden">
      {/* Background video with image fallback */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={heroImg}
      >
        <source
          src="https://cdn.coverr.co/videos/coverr-aerial-view-of-mountains-7913/1080p.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/70" />

      {/* Content */}
      <div className="relative z-10 h-full container-x flex flex-col justify-center md:justify-end pt-24 pb-20 md:pb-32">
        <p className="fade-up text-[10px] md:text-sm uppercase tracking-[0.35em] md:tracking-[0.4em] text-white/80 mb-6 md:mb-6">
          Curated Journeys · Est. 2014
        </p>
        <h1 className="fade-up font-display text-white font-semibold text-[clamp(2.5rem,8vw,7rem)] leading-[1.05] md:leading-[0.95] max-w-5xl tracking-tight">
          Travel Beyond <em className="not-italic font-light italic opacity-90">Limits</em>
        </h1>
        <p
          className="fade-up mt-6 md:mt-8 max-w-xl text-white/85 text-base md:text-lg font-light leading-relaxed"
          style={{ animationDelay: "0.15s" }}
        >
          Curated journeys across India — from misted Himalayan peaks to silent desert dunes.
        </p>
        <div className="fade-up mt-8 md:mt-10 flex flex-wrap items-center gap-5 md:gap-6" style={{ animationDelay: "0.3s" }}>
          <a
            href="#tours"
            className="group inline-flex items-center gap-3 bg-white text-black px-6 md:px-7 py-3.5 md:py-4 text-xs md:text-sm uppercase tracking-[0.18em] hover:bg-white/90 transition rounded-full"
          >
            Explore Tours
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a href="#experience" className="text-white/80 text-xs md:text-sm uppercase tracking-[0.18em] hover:text-white">
            Our Story
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/70 text-[10px] uppercase tracking-[0.4em]">
        Scroll
      </div>
    </section>
  );
}
