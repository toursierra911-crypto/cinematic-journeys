export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="container-x flex items-center justify-between py-6">
        <a href="#top" className="font-display text-lg font-semibold tracking-wide text-white drop-shadow">
          VOYA<span className="text-white/60">·</span>GE
        </a>
        <nav className="hidden md:flex items-center gap-10 text-sm text-white/85">
          <a href="#destinations" className="hover:text-white transition">Destinations</a>
          <a href="#experience" className="hover:text-white transition">Experience</a>
          <a href="#tours" className="hover:text-white transition">Tours</a>
          <a href="#gallery" className="hover:text-white transition">Gallery</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex text-xs uppercase tracking-[0.2em] border border-white/40 text-white px-4 py-2 hover:bg-white hover:text-foreground transition"
        >
          Plan a Trip
        </a>
      </div>
    </header>
  );
}
