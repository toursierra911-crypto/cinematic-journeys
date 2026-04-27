import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { MessageCircle, Sparkles, ArrowRight, Check } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { destinations } from "@/data/destinations";

const WHATSAPP_NUMBER = "918160958530";

export const Route = createFileRoute("/plan-a-trip")({
  head: () => ({
    meta: [
      { title: "Plan a Trip — TOURSIERRA" },
      {
        name: "description",
        content:
          "Plan your next journey with TOURSIERRA. Chat with us directly on WhatsApp or customize your trip — destinations, dates, travellers and more.",
      },
      { property: "og:title", content: "Plan a Trip — TOURSIERRA" },
      {
        property: "og:description",
        content:
          "Customize your itinerary or chat with our travel concierge on WhatsApp.",
      },
    ],
  }),
  component: PlanATripPage,
});

function PlanATripPage() {
  const [mode, setMode] = useState<"choose" | "custom">("choose");

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <section className="container-x pt-32 md:pt-40 pb-20">
        <div className="max-w-3xl">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-muted-foreground mb-5">
            Plan Your Journey
          </p>
          <h1 className="font-display text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.05] font-semibold tracking-tight">
            How would you like to <em className="not-italic italic font-light opacity-90">begin?</em>
          </h1>
          <p className="mt-5 md:mt-6 text-base md:text-lg text-muted-foreground font-light max-w-xl">
            Talk to our travel concierge on WhatsApp, or share a few details and we'll craft a journey around you.
          </p>
        </div>

        {mode === "choose" ? <ChoiceCards onCustomize={() => setMode("custom")} /> : <CustomTripForm onBack={() => setMode("choose")} />}

        <div className="mt-16">
          <Link to="/" className="text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition">
            ← Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}

function ChoiceCards({ onCustomize }: { onCustomize: () => void }) {
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hi TOURSIERRA, I'd like to plan a journey. Could you help me get started?",
  )}`;

  return (
    <div className="mt-12 md:mt-16 grid md:grid-cols-2 gap-5 md:gap-6">
      <a
        href={waHref}
        target="_blank"
        rel="noreferrer"
        className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 md:p-10 hover:border-foreground/40 transition"
      >
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-foreground/5 mb-6">
          <MessageCircle className="w-5 h-5" />
        </div>
        <h2 className="font-display text-2xl md:text-3xl font-semibold mb-3">Chat on WhatsApp</h2>
        <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed">
          Speak directly with our travel concierge. Quick replies, personal recommendations, no forms.
        </p>
        <div className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em]">
          Start chat <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </div>
      </a>

      <button
        onClick={onCustomize}
        className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 md:p-10 hover:border-foreground/40 transition text-left"
      >
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-foreground/5 mb-6">
          <Sparkles className="w-5 h-5" />
        </div>
        <h2 className="font-display text-2xl md:text-3xl font-semibold mb-3">Customize Your Trip</h2>
        <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed">
          Share your dates, destinations and preferences. We'll send a tailored itinerary on WhatsApp.
        </p>
        <div className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em]">
          Build itinerary <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </div>
      </button>
    </div>
  );
}

type FormState = {
  name: string;
  email: string;
  phone: string;
  startDate: string;
  endDate: string;
  destinations: string[];
  travellers: string;
  rooms: string;
  budget: string;
  travelStyle: string;
  notes: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  startDate: "",
  endDate: "",
  destinations: [],
  travellers: "2",
  rooms: "1",
  budget: "",
  travelStyle: "",
  notes: "",
};

function CustomTripForm({ onBack }: { onBack: () => void }) {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const today = useMemo(() => new Date().toISOString().split("T")[0], []);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const toggleDestination = (name: string) => {
    setForm((f) => ({
      ...f,
      destinations: f.destinations.includes(name)
        ? f.destinations.filter((d) => d !== name)
        : [...f.destinations, name],
    }));
  };

  const validate = (): boolean => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) e.name = "Please enter your name";
    else if (form.name.length > 80) e.name = "Name is too long";
    if (!form.startDate) e.startDate = "Select a start date";
    if (!form.endDate) e.endDate = "Select an end date";
    if (form.startDate && form.endDate && form.endDate < form.startDate)
      e.endDate = "End date must be after start date";
    if (form.destinations.length === 0) e.destinations = "Pick at least one destination";
    if (!form.travellers || Number(form.travellers) < 1) e.travellers = "At least 1 traveller";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (form.notes.length > 800) e.notes = "Please keep notes under 800 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;

    const fmtDate = (d: string) =>
      new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

    const lines = [
      "Hello TOURSIERRA team,",
      "",
      "I'd like to plan a customized journey. Here are my details:",
      "",
      `• Name: ${form.name.trim()}`,
      form.email && `• Email: ${form.email.trim()}`,
      form.phone && `• Phone: ${form.phone.trim()}`,
      `• Travel dates: ${fmtDate(form.startDate)} → ${fmtDate(form.endDate)}`,
      `• Destinations: ${form.destinations.join(", ")}`,
      `• Travellers: ${form.travellers}`,
      `• Rooms: ${form.rooms}`,
      form.travelStyle && `• Travel style: ${form.travelStyle}`,
      form.budget && `• Budget (per person): ${form.budget}`,
      form.notes.trim() && `• Notes: ${form.notes.trim()}`,
      "",
      "Looking forward to your suggested itinerary. Thank you!",
    ].filter(Boolean);

    const message = lines.join("\n");
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-12 md:mt-16 max-w-3xl space-y-10">
      {/* Personal */}
      <Section title="About you">
        <div className="grid md:grid-cols-2 gap-5">
          <Field label="Full name" error={errors.name}>
            <input
              type="text"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              maxLength={80}
              className={inputCls}
              placeholder="Jane Doe"
              required
            />
          </Field>
          <Field label="Phone (optional)">
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value.slice(0, 20))}
              className={inputCls}
              placeholder="+91 98765 43210"
            />
          </Field>
          <Field label="Email (optional)" error={errors.email}>
            <input
              type="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              maxLength={120}
              className={inputCls}
              placeholder="you@example.com"
            />
          </Field>
        </div>
      </Section>

      {/* Dates */}
      <Section title="When">
        <div className="grid md:grid-cols-2 gap-5">
          <Field label="Start date" error={errors.startDate}>
            <input
              type="date"
              value={form.startDate}
              min={today}
              onChange={(e) => update("startDate", e.target.value)}
              className={inputCls}
              required
            />
          </Field>
          <Field label="End date" error={errors.endDate}>
            <input
              type="date"
              value={form.endDate}
              min={form.startDate || today}
              onChange={(e) => update("endDate", e.target.value)}
              className={inputCls}
              required
            />
          </Field>
        </div>
      </Section>

      {/* Destinations */}
      <Section title="Where" subtitle="Pick one or more">
        {errors.destinations && <p className="text-xs text-destructive mb-3">{errors.destinations}</p>}
        <div className="flex flex-wrap gap-2">
          {destinations.map((d) => {
            const active = form.destinations.includes(d.name);
            return (
              <button
                type="button"
                key={d.name}
                onClick={() => toggleDestination(d.name)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm transition ${
                  active
                    ? "border-foreground bg-foreground text-background"
                    : "border-border bg-card text-foreground hover:border-foreground/50"
                }`}
              >
                {active && <Check className="w-3.5 h-3.5" />}
                {d.name}
              </button>
            );
          })}
        </div>
      </Section>

      {/* Travellers */}
      <Section title="Who">
        <div className="grid md:grid-cols-3 gap-5">
          <Field label="Travellers" error={errors.travellers}>
            <input
              type="number"
              min={1}
              max={50}
              value={form.travellers}
              onChange={(e) => update("travellers", e.target.value)}
              className={inputCls}
              required
            />
          </Field>
          <Field label="Rooms">
            <input
              type="number"
              min={1}
              max={25}
              value={form.rooms}
              onChange={(e) => update("rooms", e.target.value)}
              className={inputCls}
            />
          </Field>
          <Field label="Travel style">
            <select
              value={form.travelStyle}
              onChange={(e) => update("travelStyle", e.target.value)}
              className={inputCls}
            >
              <option value="">Select…</option>
              <option>Luxury</option>
              <option>Boutique</option>
              <option>Adventure</option>
              <option>Family</option>
              <option>Honeymoon</option>
              <option>Wellness</option>
            </select>
          </Field>
        </div>
      </Section>

      {/* Budget & notes */}
      <Section title="Anything else">
        <div className="grid md:grid-cols-2 gap-5">
          <Field label="Budget per person (optional)">
            <select
              value={form.budget}
              onChange={(e) => update("budget", e.target.value)}
              className={inputCls}
            >
              <option value="">Select…</option>
              <option>Under ₹50,000</option>
              <option>₹50,000 – ₹1,00,000</option>
              <option>₹1,00,000 – ₹2,50,000</option>
              <option>₹2,50,000+</option>
            </select>
          </Field>
        </div>
        <div className="mt-5">
          <Field label="Notes & preferences (optional)" error={errors.notes}>
            <textarea
              value={form.notes}
              onChange={(e) => update("notes", e.target.value)}
              maxLength={800}
              rows={4}
              className={`${inputCls} resize-none`}
              placeholder="Dietary needs, pace of travel, must-see experiences…"
            />
          </Field>
        </div>
      </Section>

      <div className="flex flex-wrap items-center gap-4 pt-4">
        <button
          type="submit"
          className="inline-flex items-center gap-3 bg-foreground text-background px-7 py-4 rounded-full text-xs uppercase tracking-[0.2em] hover:opacity-90 transition"
        >
          Send Inquiry on WhatsApp
          <MessageCircle className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={onBack}
          className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground"
        >
          ← Back
        </button>
      </div>
    </form>
  );
}

const inputCls =
  "w-full bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground/60 transition";

function Section({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-5">
        <h2 className="font-display text-xl md:text-2xl font-semibold">{title}</h2>
        {subtitle && <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>}
      </div>
      {children}
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-2">{label}</span>
      {children}
      {error && <span className="block text-xs text-destructive mt-1.5">{error}</span>}
    </label>
  );
}
