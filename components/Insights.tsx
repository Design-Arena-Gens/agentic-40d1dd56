const insights = [
  {
    title: "Design as Atmosphere",
    description:
      "Each project begins with building an experiential moodscape—synesthetic palettes, sonic references, and tactile projections that define the emotional arc."
  },
  {
    title: "Generative Systems",
    description:
      "Custom shader pipelines and typographic modulators allow brand assets to breathe in real-time, ensuring design languages flex elegantly across contexts."
  },
  {
    title: "Story-first Prototyping",
    description:
      "Interactive narratives crafted in collaboration with product teams ensure every motion and micro-interaction advances the brand story."
  }
];

export function Insights() {
  return (
    <section id="insights" className="mx-auto max-w-6xl space-y-12 px-6 py-24">
      <div className="glass-panel grid gap-8 overflow-hidden border-white/5 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-12">
        <div className="space-y-4">
          <span className="text-xs uppercase tracking-[0.35em] text-white/50">Philosophy</span>
          <h2 className="section-title">Designing beyond the frame</h2>
          <p className="section-subtitle">
            A holistic approach to brand expression that merges spatial design, motion theory, and human-centered storytelling.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {insights.map((insight) => (
            <div key={insight.title} className="space-y-4">
              <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent" />
              <h3 className="font-display text-xl">{insight.title}</h3>
              <p className="text-sm text-white/70">{insight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
