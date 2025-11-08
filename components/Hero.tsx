"use client";

import { motion } from "framer-motion";
import { SceneCanvas } from "./SceneCanvas";

const heroHighlights = [
  "Cinematic storytelling",
  "Design systems with soul",
  "Immersive 3D experiences"
];

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-[var(--nav-height)]">
      <SceneCanvas />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center gap-16 px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="glass-panel max-w-3xl space-y-8 p-10"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-white/60">
            Visual Futurist
          </span>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl">
            Designing luminous identities for brands that live beyond the screen.
          </h1>
          <p className="text-lg text-white/70">
            Nova Spectrum combines generative aesthetics, kinetic typography, and tangible storytelling to craft unforgettable visual worlds.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-white/60">
            {heroHighlights.map((highlight) => (
              <span key={highlight} className="glass-panel px-4 py-2">
                {highlight}
              </span>
            ))}
          </div>
          <div className="pointer-events-auto flex flex-wrap items-center gap-4 pt-6">
            <a
              href="#work"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-widest text-black"
            >
              View Portfolio
            </a>
            <a href="#contact" className="text-sm text-white/60 hover:text-white">
              Request Credentials ↗
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9, ease: "easeOut" }}
          className="glass-panel pointer-events-auto w-full max-w-xl space-y-6 p-8"
        >
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-white/60">
            <span>Latest collaborations</span>
            <span>2022 — 2024</span>
          </div>
          <div className="grid gap-4 text-sm">
            <div className="flex items-center justify-between text-white/70">
              <span>Pulsewave</span>
              <span className="text-xs text-white/40">Immersive product reveal</span>
            </div>
            <div className="flex items-center justify-between text-white/70">
              <span>Vektor Studio</span>
              <span className="text-xs text-white/40">Investor showcase prototype</span>
            </div>
            <div className="flex items-center justify-between text-white/70">
              <span>Neon Atlas</span>
              <span className="text-xs text-white/40">Global brand refresh</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
