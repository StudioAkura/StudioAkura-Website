"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  return (
    <main className="bg-zinc-950 pt-32 pb-24 min-h-screen border-t border-zinc-900">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-red-600 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
            Communications
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6">
            Contact Sub-Routine
          </h1>
          <p className="text-lg text-zinc-400 font-light max-w-2xl mx-auto">
            For business inquiries, press, or general support, please transmit
            your message below.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-zinc-900 border border-zinc-800 p-8 md:p-12 relative shadow-2xl"
        >
          {/* Decorative Corner accents */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-red-600" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-red-600" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-red-600" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-red-600" />

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full bg-zinc-950 border border-zinc-800 focus:border-red-600 px-4 py-3 text-white outline-none transition-colors"
                  placeholder="CLASSIFIED"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                  Email Vector
                </label>
                <input
                  type="email"
                  className="w-full bg-zinc-950 border border-zinc-800 focus:border-red-600 px-4 py-3 text-white outline-none transition-colors"
                  placeholder="comm@link.net"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                Transmission Subject
              </label>
              <select className="w-full bg-zinc-950 border border-zinc-800 focus:border-red-600 px-4 py-3 text-zinc-400 outline-none transition-colors appearance-none">
                <option>General Inquiry</option>
                <option>Press / Media</option>
                <option>Business Development</option>
                <option>Support</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                Message Body
              </label>
              <textarea
                rows={6}
                className="w-full bg-zinc-950 border border-zinc-800 focus:border-red-600 px-4 py-3 text-white outline-none transition-colors resize-none"
                placeholder="Enter your data here..."
              />
            </div>

            <Button size="lg" className="w-full">
              Transmit Data
            </Button>
          </form>
        </motion.div>
      </div>
    </main>
  );
}
