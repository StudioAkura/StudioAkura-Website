"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

const newsItems = [
  {
    category: "Available Now",
    date: "MAY 17, 2026",
    title: "FlapRush3D",
    image: "https://res.cloudinary.com/danpdjryt/image/upload/v1779463477/2026-05-08T22-37-30_cyalf1.png"
  },
  {
    category: "In Development",
    date: "MAY 20, 2026",
    title: "Night Shift Simulator",
    image: "https://res.cloudinary.com/danpdjryt/image/upload/v1779513961/oTUlF1TQnNUhpNVZLdQngazUfcPs69cWGorWve1FFX6_WSu-mAPAZIr6d-huk-fPBlSkqY_fiVljIEbNMt--3_XvbAog1pDSikFWtKV8nvgHu_ruTlF4byFpf3AUR-xxxTRaf7iRHtk1iygREXoKWMJzUY2q9i6lai4i8ACvzd5FtwXFD3lHdXPEuyySUrbL_toalyr.jpg"
  },
  {
    category: "Released",
    date: "MAY 20, 2026",
    title: "FlapRush3D - 1.0.1.0v",
    image: "https://res.cloudinary.com/danpdjryt/image/upload/v1779515013/2026-05-08T22-36-41_hibjeg.png"
  }
];

export const NewsSection = () => {
  return (
    <section className="py-32 bg-zinc-950">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-end mb-16 border-b border-zinc-800 pb-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
              PROJECT STATUS
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group cursor-pointer relative"
            >
              <div className="overflow-hidden aspect-video mb-6 relative border border-zinc-800 group-hover:border-zinc-700 transition-colors">
                <div className="absolute inset-0 bg-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="flex gap-4 items-center mb-3 text-xs font-bold tracking-widest uppercase">
                <span className="text-red-500">{item.category}</span>
                <span className="text-zinc-600">/</span>
                <span className="text-zinc-500">{item.date}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-zinc-100 group-hover:text-white transition-colors leading-snug">
                {item.title}
              </h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
