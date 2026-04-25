import { Link } from "@tanstack/react-router";

export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="container-x flex items-center justify-between py-6">
        <Link to="/" className="font-display text-lg font-semibold tracking-wide text-white drop-shadow">
          VOYA<span className="text-white/60">·</span>GE
        </Link>
        <nav className="hidden md:flex items-center gap-10 text-sm text-white/85">
          <Link to="/destinations" className="hover:text-white transition">Destinations</Link>
          <Link to="/tours" className="hover:text-white transition">Tours</Link>
          <Link to="/" hash="experience" className="hover:text-white transition">Experience</Link>
          <Link to="/" hash="gallery" className="hover:text-white transition">Gallery</Link>
          <Link to="/" hash="contact" className="hover:text-white transition">Contact</Link>
        </nav>
        <a
          href="https://wa.me/919999999999?text=Hi%2C%20I%27d%20like%20to%20plan%20a%20journey"
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex text-xs uppercase tracking-[0.2em] border border-white/40 text-white px-5 py-2.5 hover:bg-white hover:text-black transition rounded-full"
        >
          Plan a Trip
        </a>
      </div>
    </header>
  );
}
