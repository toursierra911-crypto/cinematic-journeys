export function Contact() {
  return (
    <section id="contact" className="py-28 md:py-36 bg-card">
      <div className="container-x">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">06 — Begin</p>
          <h2 className="font-display text-4xl md:text-6xl font-light leading-[1.05] mb-8">
            Let's plan your <em className="italic">next chapter</em>.
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-12 font-light">
            Tell us where you'd like to go — or let us suggest. We respond on WhatsApp within minutes.
          </p>
          <a
            href="https://wa.me/919999999999?text=Hi%2C%20I%27d%20like%20to%20plan%20a%20journey"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-5 text-sm uppercase tracking-[0.18em] hover:opacity-90 transition rounded-full"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.5 3.5C18.3 1.2 15.3 0 12.1 0 5.5 0 .2 5.4.2 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6c1.7.9 3.7 1.4 5.7 1.4h.1c6.6 0 11.9-5.4 11.9-12 0-3.2-1.2-6.2-3.4-8.3zM12 21.5c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-3.7 1 1-3.6-.2-.4c-1-1.6-1.5-3.4-1.5-5.3 0-5.5 4.5-10 10-10 2.7 0 5.2 1 7.1 2.9 1.9 1.9 2.9 4.4 2.9 7.1-.1 5.5-4.6 9.9-10.1 9.9z"/>
            </svg>
            Chat on WhatsApp
          </a>
          <p className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Or call +91 99999 99999
          </p>
        </div>
      </div>

      <div className="container-x mt-24 pt-8 border-t border-border flex flex-col md:flex-row gap-4 justify-between text-xs uppercase tracking-[0.2em] text-muted-foreground">
        <span>© {new Date().getFullYear()} Voyage</span>
        <span>Crafted in India</span>
      </div>
    </section>
  );
}
