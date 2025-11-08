import { testimonials } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";

export function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-6xl space-y-12 px-6 py-24">
      <SectionHeader
        title="Trusted collaborators"
        subtitle="Partners across tech, culture, and the arts trust Nova Spectrum to translate ambitious ideas into iconic visual moments."
      />
      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <div key={testimonial.name} className="glass-panel flex h-full flex-col justify-between p-8">
            <p className="text-base text-white/80">“{testimonial.quote}”</p>
            <div className="pt-6 text-sm text-white/60">
              <p className="font-display text-white">{testimonial.name}</p>
              <p>{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
