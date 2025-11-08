'use client';

import { motion } from "framer-motion";
import { featuredProjects } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";

export function Projects() {
  return (
    <section id="work" className="mx-auto max-w-6xl space-y-12 px-6 py-24">
      <SectionHeader
        title="Selected works"
        subtitle="A spectrum of collaborations shaping visual identities, experiential campaigns, and immersive product storytelling."
      />
      <div className="grid gap-8 md:grid-cols-2">
        {featuredProjects.map((project, index) => (
          <motion.a
            key={project.title}
            href={project.link}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
            className="group glass-panel flex h-full flex-col justify-between p-8"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-white/40">
                <span>{project.year}</span>
                <span>Case Study</span>
              </div>
              <h3 className="font-display text-2xl text-white group-hover:text-accent">
                {project.title}
              </h3>
              <p className="text-sm text-white/70">{project.description}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 text-xs text-white/50">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-white/10 px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
