export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 pb-24">
      <div className="glass-panel grid gap-10 p-12 md:grid-cols-[1.2fr_1fr]">
        <div className="space-y-6">
          <span className="text-xs uppercase tracking-[0.35em] text-white/50">Collaborate</span>
          <h2 className="section-title">Let’s craft the next iconic moment</h2>
          <p className="section-subtitle">
            Share your upcoming campaign, product launch, or brand evolution. Expect a response within 48 hours with a curated perspective and next steps.
          </p>
          <div className="space-y-3 text-sm text-white/70">
            <a href="mailto:hello@novaspectrum.studio" className="block">
              hello@novaspectrum.studio
            </a>
            <p>Available for select collaborations from June 2024.</p>
          </div>
        </div>
        <form className="space-y-5">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="block text-xs uppercase tracking-[0.35em] text-white/50">
              Name
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 focus:border-accent focus:outline-none"
              />
            </label>
            <label className="block text-xs uppercase tracking-[0.35em] text-white/50">
              Company
              <input
                type="text"
                name="company"
                placeholder="Company or brand"
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 focus:border-accent focus:outline-none"
              />
            </label>
          </div>
          <label className="block text-xs uppercase tracking-[0.35em] text-white/50">
            Email
            <input
              type="email"
              name="email"
              placeholder="you@company.com"
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 focus:border-accent focus:outline-none"
            />
          </label>
          <label className="block text-xs uppercase tracking-[0.35em] text-white/50">
            Project Vision
            <textarea
              name="message"
              rows={4}
              placeholder="Tell me about your concept, audience, and timeline."
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 focus:border-accent focus:outline-none"
            />
          </label>
          <button
            type="submit"
            className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-widest text-black"
          >
            Submit Request
          </button>
        </form>
      </div>
    </section>
  );
}
