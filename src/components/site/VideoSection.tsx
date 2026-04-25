import poster from "@/assets/video-poster.jpg";

export function VideoSection() {
  return (
    <section className="relative h-[80vh] min-h-[520px] w-full overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
      >
        <source
          src="https://cdn.coverr.co/videos/coverr-driving-through-the-mountains-2633/1080p.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 h-full container-x flex flex-col items-center justify-center text-center text-white">
        <p className="text-xs uppercase tracking-[0.4em] text-white/70 mb-6">In Motion</p>
        <h2 className="font-display text-5xl md:text-7xl font-light max-w-3xl leading-[1.05]">
          Experience the <em className="italic">journey</em>.
        </h2>
      </div>
    </section>
  );
}
