"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { useRef, useState } from "react";
import Image from 'next/image'
import { useRouter } from "next/navigation";

export const Hero = () => {

  const router = useRouter();
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Background Graphic/Video Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.1),transparent_50%)] z-10 mix-blend-screen" />

        {/* Placeholder dark cinematic image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/hero-image.jpg"
            alt="Hero Background"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-20 flex flex-col items-center text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[#7F1D1D] font-bold tracking-[0.3em] uppercase text-sm mb-6 block">
            Welcome to the Next Generation
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white uppercase tracking-tighter leading-none mb-6">
            Akura<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-700">Interactive</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl md:text-2xl text-zinc-400 font-light max-w-2xl mx-auto mb-12 tracking-wide"
        >
          Building Worlds. Creating Memories.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <Button
            size="lg"
            className="w-full sm:w-auto"
            onClick={() => {
              document
                .getElementById("games")
                ?.scrollIntoView({
                  behavior: "smooth",
                });
            }}
          >
            Explore Our Work
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto"
            onClick={() => router.push("/about")}
          >
            About Studio
          </Button>
        </motion.div>
      </div>

    </section>
  );
};
