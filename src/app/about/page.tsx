"use client";

import React from "react";
import { motion } from "framer-motion";
import { AboutStrip } from "../../components/home/AboutStrip";

export default function AboutPage() {
  return (
    <main className="bg-zinc-950 pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent z-10" />
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
            alt="Studio Setup"
            className="w-full h-full object-cover opacity-20 filter grayscale"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6">
              Our <span className="text-red-600">Vision</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-3xl mx-auto leading-relaxed">
              We are Akura Interactive. We build games and interactive
              experiences focused on atmosphere, gameplay, and memorable worlds.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold uppercase tracking-wider text-white mb-6">
              The Studio Philosophy
            </h2>
            <div className="w-12 h-1 bg-red-600 mb-8" />
            <p className="text-zinc-400 leading-relaxed mb-6">
              At Akura, we believe great interactive experiences are not just
              about polycount and texture resolution. They are built through
              strong art direction, performance, atmosphere, and meaningful
              design.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Every detail matters. From atmosphere and sound design to visual
              identity and gameplay feel.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-square bg-zinc-900 border border-zinc-800 p-8 flex items-center justify-center relative shadow-2xl"
          >
            <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(220,38,38,0.1),transparent_50%)]" />
            <div className="text-center z-10">
              <span className="block text-8xl font-black text-zinc-800 tracking-tighter mb-4">
                "
              </span>
              <p className="text-2xl text-zinc-300 font-light italic">
                Art is not what you see, but what you make others see.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AboutStrip Team Placeholder */}
      <section className="py-24 bg-zinc-900 border-t border-zinc-800">
        <AboutStrip />
      </section>
    </main>
  );
}
