"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const AboutStrip = () => {
  return (
    <section className="py-32 bg-zinc-900 border-y border-zinc-800 relative overflow-hidden">
      {/* Accent Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.05),transparent_70%)] opacity-50 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="w-12 h-1 bg-red-600 mx-auto mb-10" />
          <h2 className="text-3xl md:text-5xl font-light text-white leading-tight uppercase tracking-wider mb-8">
            <span className="font-bold text-red-500">Pushing Boundaries.</span><br />
            Redefining Interactive Entertainment.
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto">
            Akura Interactive is an independent studio by Rivaan Maurya , dedicated to crafting unforgettable, narrative-driven experiences. We believe in the power of cutting-edge technology fused with unparalleled artistic vision.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
