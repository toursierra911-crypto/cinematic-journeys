import heroImg from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section
      id="top"
      className="relative h-[100svh] min-h-[600px] w-full overflow-hidden"
    >
      {/* Background video with image fallback */}
      <video
        className="absolute inset-0 h-full w-full object-cover pointer-events-none [&::-webkit-media-controls]:!hidden [&::-webkit-media-controls-start-playback-button]:!hidden [&::-webkit-media-controls-overlay-play-button]:!hidden"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        controls={false}
        disablePictureInPicture
        poster={heroImg}
      >
        <source
          src="https://cdn.coverr.co/videos/coverr-aerial-view-of-mountains-7913/1080p.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/75" />

      {/* Content */}
      <div className="relative z-10 h-full container-x flex flex-col pt-24 pb-20 sm:pt-28 sm:pb-24 md:pt-32 md:pb-32">
        {/* Top eyebrow */}
        <p className="fade-up text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.35em] md:tracking-[0.4em] text-white/80">
          Curated Journeys · Est. 2014
        </p>

        {/* Spacer pushes headline block to bottom */}
        <div className="flex-1" />

        {/* Headline block */}
        <div className="flex flex-col">
          <h1 className="fade-up font-display text-white font-semibold text-[clamp(2.25rem,9vw,7rem)] leading-[1.1] sm:leading-[1.05] md:leading-[0.95] max-w-5xl tracking-tight">
            Travel Beyond{" "}
            <em className="not-italic font-light italic opacity-90">Limits</em>
          </h1>
          <p
            className="fade-up mt-4 sm:mt-6 md:mt-8 max-w-xl text-white/85 text-sm sm:text-base md:text-lg font-light leading-relaxed"
            style={{ animationDelay: "0.15s" }}
          >
            Curated journeys across India — from misted Himalayan peaks to
            silent desert dunes.
          </p>
          <div
            className="fade-up mt-6 sm:mt-8 md:mt-10 flex flex-wrap items-center gap-4 sm:gap-5 md:gap-6"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="#tours"
              className="group inline-flex items-center gap-3 bg-white text-black px-5 sm:px-6 md:px-7 py-3 sm:py-3.5 md:py-4 text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.18em] hover:bg-white/90 transition rounded-full"
            >
              Explore Tours
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#experience"
              className="text-white/80 text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.18em] hover:text-white"
            >
              Our Story
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator - hidden on small screens */}
      <div className="hidden sm:block absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/70 text-[10px] uppercase tracking-[0.4em]">
        Scroll
      </div>
    </section>
  );
}
