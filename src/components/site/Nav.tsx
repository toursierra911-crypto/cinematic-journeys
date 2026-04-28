import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.svg";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-black/85 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between py-5 md:py-6">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="font-display text-lg font-semibold tracking-wide text-white drop-shadow"
        >
          <img src={logo} alt="Toursierra logo" className="h-8 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-10 text-sm text-white/85">
          <Link to="/destinations" className="hover:text-white transition">Destinations</Link>
          <Link to="/tours" className="hover:text-white transition">Tours</Link>
          <Link to="/#experience" className="hover:text-white transition">Experience</Link>
          <Link to="/#gallery" className="hover:text-white transition">Gallery</Link>
          <Link to="/#contact" className="hover:text-white transition">Contact</Link>
        </nav>

        <Link
          to="/plan-a-trip"
          className="hidden md:inline-flex text-xs uppercase tracking-[0.2em] border border-white/40 text-white px-5 py-2.5 hover:bg-white hover:text-black transition rounded-full"
        >
          Plan a Trip
        </Link>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full text-white hover:bg-white/10 transition"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-out ${
          open ? "max-h-[80vh]" : "max-h-0"
        }`}
      >
        <nav className="container-x flex flex-col gap-1 pb-6 pt-2 text-white/90">
          <Link to="/destinations" onClick={() => setOpen(false)} className="py-3 border-b border-white/10 text-sm uppercase tracking-[0.2em]">Destinations</Link>
          <Link to="/tours" onClick={() => setOpen(false)} className="py-3 border-b border-white/10 text-sm uppercase tracking-[0.2em]">Tours</Link>
          <Link to="/#experience" onClick={() => setOpen(false)} className="py-3 border-b border-white/10 text-sm uppercase tracking-[0.2em]">Experience</Link>
          <Link to="/#gallery" onClick={() => setOpen(false)} className="py-3 border-b border-white/10 text-sm uppercase tracking-[0.2em]">Gallery</Link>
          <Link to="/#contact" onClick={() => setOpen(false)} className="py-3 border-b border-white/10 text-sm uppercase tracking-[0.2em]">Contact</Link>
          <Link
            to="/plan-a-trip"
            onClick={() => setOpen(false)}
            className="mt-5 inline-flex items-center justify-center text-xs uppercase tracking-[0.2em] bg-white text-black px-5 py-3.5 rounded-full"
          >
            Plan a Trip
          </Link>
        </nav>
      </div>
    </header>
  );
}
