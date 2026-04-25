export function Contact() {
  return (
    <section id="contact" className="py-28 md:py-36 bg-foreground text-background">
      <div className="container-x grid md:grid-cols-2 gap-16">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">06 — Begin</p>
          <h2 className="font-display text-4xl md:text-6xl font-light leading-[1.05] mb-8">
            Let's plan your <em className="italic">next chapter</em>.
          </h2>
          <p className="text-background/70 max-w-md mb-10 font-light">
            Tell us where you'd like to go — or let us suggest. We respond within 24 hours.
          </p>
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-[oklch(0.62_0.16_145)] text-white px-7 py-4 text-sm uppercase tracking-[0.18em] hover:opacity-90 transition"
          >
            Chat on WhatsApp →
          </a>
        </div>

        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you — we'll be in touch shortly.");
          }}
        >
          {[
            { l: "Name", t: "text" },
            { l: "Email", t: "email" },
            { l: "Destination", t: "text" },
          ].map((f) => (
            <label key={f.l} className="block">
              <span className="text-[10px] uppercase tracking-[0.3em] text-background/60">{f.l}</span>
              <input
                type={f.t}
                required
                className="mt-2 w-full bg-transparent border-b border-background/30 py-3 text-background placeholder:text-background/40 focus:outline-none focus:border-background transition"
              />
            </label>
          ))}
          <label className="block">
            <span className="text-[10px] uppercase tracking-[0.3em] text-background/60">Message</span>
            <textarea
              rows={3}
              className="mt-2 w-full bg-transparent border-b border-background/30 py-3 text-background placeholder:text-background/40 focus:outline-none focus:border-background transition resize-none"
            />
          </label>
          <button
            type="submit"
            className="mt-4 w-full md:w-auto bg-background text-foreground px-8 py-4 text-sm uppercase tracking-[0.18em] hover:bg-secondary transition"
          >
            Send Enquiry
          </button>
        </form>
      </div>

      <div className="container-x mt-24 pt-8 border-t border-background/15 flex flex-col md:flex-row gap-4 justify-between text-xs uppercase tracking-[0.2em] text-background/50">
        <span>© {new Date().getFullYear()} Voyage</span>
        <span>Crafted in India</span>
      </div>
    </section>
  );
}
