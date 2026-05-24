"use client";

import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: "2026", label: "Studio Founded" },
  { value: "2+", label: "Projects In Development" },
  { value: "PC + Mobile", label: "Platforms" },
  { value: "INDIE", label: "Independent Studio" }
];

export const Stats = () => {
  return (
    <section className="py-20 bg-red-600 relative overflow-hidden">
      {/* Background Texture/Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:20px_20px] opacity-20 mix-blend-overlay" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6 divide-x-0 lg:divide-x divide-red-800/50">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="flex flex-col items-center justify-center text-center px-4"
            >
              <span className="text-5xl md:text-6xl font-black text-white mb-2 tracking-tighter">
                {stat.value}
              </span>
              <span className="text-red-200 text-sm md:text-base font-semibold uppercase tracking-widest">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
