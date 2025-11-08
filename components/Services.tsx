import { services } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl space-y-12 px-6 py-24">
      <SectionHeader
        title="Capabilities"
        subtitle="From future-proof identity systems to volumetric brand activations, Nova Spectrum shapes magnetic experiences across mediums."
      />
      <div className="grid gap-8 md:grid-cols-3">
        {services.map((service) => (
          <div key={service.title} className="glass-panel space-y-6 p-8">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-xl">{service.title}</h3>
              <div className="h-10 w-10 rounded-full border border-white/10 bg-white/5" />
            </div>
            <p className="text-sm text-white/70">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
