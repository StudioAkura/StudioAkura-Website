"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { useRef, useState } from "react";
import Image from "next/image";
import Script from "next/script";
import Head from "next/head";

export default function FlapRush3D() {
  const features = [
    {
      title: "Fast Gameplay",
      desc: "Test your lightning-fast reflexes with intense obstacles.",
    },
    {
      title: "Arcade Challenge",
      desc: "Compete against classic hardcore arcade mechanics.",
    },
    {
      title: "Neon Style",
      desc: "Immerse yourself in vibrant, high-contrast aesthetics.",
    },
    {
      title: "High Score System",
      desc: "Climb the global ranks and secure your legacy.",
    },
  ];

  const mediaData = [
    "https://res.cloudinary.com/danpdjryt/image/upload/v1779808108/screen-shot-one-orange-env-bird-flap_wg45xg.jpg",
    "https://res.cloudinary.com/danpdjryt/image/upload/v1779808118/screen-shot-MIX-env-bird-flap_ene9fs.jpg",
    "https://res.cloudinary.com/danpdjryt/image/upload/v1779808113/screen-shot-orange_blue-env-bird-flap_u8cfda.jpg",
    "https://res.cloudinary.com/danpdjryt/image/upload/v1779463477/2026-05-08T22-37-30_cyalf1.png",
    "https://res.cloudinary.com/danpdjryt/image/upload/v1779515013/2026-05-08T22-36-41_hibjeg.png",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev === mediaData.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <Head>
        <title>FlapRush3D - Arcade Runner Game</title>

        <meta
          name="description"
          content="Play FlapRush3D, a fast-paced neon arcade runner game available on Microsoft Store, itch.io and IMDb."
        />

        <link
          rel="canonical"
          href="https://akurainteractive.vercel.app/games/flaprush3d"
        />
      </Head>
      <Script
        id="ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoGame",
            name: "FlapRush3D",
            url: "https://akurainteractive.vercel.app/games/flaprush3d",
            image: [
              "https://res.cloudinary.com/danpdjryt/image/upload/v1779808108/screen-shot-one-orange-env-bird-flap_wg45xg.jpg",
            ],
            description:
              "FlapRush3D is a fast-paced 3D arcade runner game focused on reflexes and obstacle dodging.",
            genre: ["Arcade", "Runner"],
            applicationCategory: "Game",
            operatingSystem: "Windows, Android, Web",
            sameAs: [
              "https://www.imdb.com/title/tt43031486/",
              "https://apps.microsoft.com/detail/9n8s61578rkc",
              "https://akurainteractive.itch.io/flaprush3d",
            ],
            publisher: {
              "@type": "Organization",
              name: "Akura Interactive",
            },
          }),
        }}
      />
      <main
        className="min-h-screen
bg-zinc-950
pt-24
pb-32
border-t
border-zinc-900
text-white
select-none
overflow-x-hidden"
      >
        <div className="w-full px-6 lg:px-16 xl:px-24">
          {/* HERO & PREVIEW SPLIT SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-40 min-h-[calc(80vh-6rem)]">
            {/* VIDEO BACKGROUND */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="
    absolute
    inset-0
    w-[1270px]
    h-full
    object-cover
    blur-md
    scale-110
    opacity-40
    "
            >
              <source
                src="https://res.cloudinary.com/danpdjryt/video/upload/v1779808486/Game-Trailer_jum7z5.mp4"
                type="video/mp4"
              />
            </video>

            {/* DARK OVERLAY */}
            <div
              className="
absolute
inset-0

bg-black/60

-z-[5]
"
            />
            {/* LEFT: Game Info */}
            <motion.section
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col justify-center z-1"
            >
              <span className="text-red-500 font-extrabold tracking-[0.25em] uppercase text-xs md:text-sm block mb-4">
                Arcade Runner
              </span>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-6 bg-linear-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text">
                FLAPRUSH3D
              </h1>

              <p className="text-zinc-400 text-lg md:text-xl max-w-xl leading-relaxed mb-8">
                Dash through obstacles. React quickly. Master reflexes. Built
                for fast-paced arcade fun.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="https://apps.microsoft.com/detail/9n8s61578rkc?referrer=appbadge&mode=full&hl=en-US&gl=IN">
                  <Button className="px-8 py-6 text-base font-bold tracking-wide shadow-lg shadow-red-600/20 hover:shadow-red-600/30 transition-all">
                    PLAY NOW
                  </Button>
                </a>
                <a href="https://res.cloudinary.com/danpdjryt/video/upload/v1779808486/Game-Trailer_jum7z5.mp4">
                  <Button
                    variant="ghost"
                    className="px-8 py-6 text-base font-bold tracking-wide hover:bg-zinc-900"
                  >
                    WATCH TRAILER
                  </Button>
                </a>
              </div>
            </motion.section>

            {/* RIGHT: Visual Preview */}
            {/* STORES SECTION */}
            {/* STORES SECTION */}
            <section className="relative z-10 flex justify-center lg:justify-end">
              <div className="w-full max-w-[420px] rounded-3xl border border-zinc-800/80 bg-black/50 backdrop-blur-xl p-6 shadow-2xl">
                <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
                  Available Platforms
                </h3>

                <div className="flex flex-col items-center gap-4">
                  {/* Microsoft Store */}
                  <a
                    title="Download FlapRush3D on Microsoft Store"
                    href="https://apps.microsoft.com/detail/9n8s61578rkc?referrer=appbadge&mode=full"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full max-w-[220px] transition hover:scale-[1.02]"
                  >
                    <img
                      src="https://get.microsoft.com/images/en-us%20dark.svg"
                      className="w-full"
                    />
                  </a>

                  {/* itch.io */}
                  <a
                    title="Download FlapRush3D on Itch.io"
                    href="https://akurainteractive.itch.io/flaprush3d"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full max-w-[220px] transition hover:scale-[1.02]"
                  >
                    <Image
                      src="/itch.io.svg"
                      alt="itch.io"
                      width={220}
                      height={80}
                      className="object-contain"
                    />
                  </a>
                  {/* APKPure */}
                  <a
                    title="Download FlapRush3D on APKPure Store"
                    href="https://apkpure.net/flaprush3d/com.akurainteractive.FlapRush3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
    group
    flex
    items-center
    gap-4
    rounded-2xl
    border
    border-[#24C75A]/20
    bg-[#24C75A]
    px-5
    py-4
    w-full max-w-[220px]
    transition-all
    hover:scale-[1.02]
    hover:brightness-110
  "
                  >
                    <Image
                      src="/apkpure.png"
                      alt="APKPure"
                      width={42}
                      height={42}
                      className="object-contain bg-white rounded-l-2xl"
                    />

                    <div>
                      <p className="text-xs uppercase tracking-wider text-white/80">
                        Available on
                      </p>

                      <h4 className="text-lg font-black text-white">APKPure</h4>
                    </div>
                  </a>
                  {/* Indus Appstore */}
                  <a href="https://indusapp.store/18zfu3yy">
                    <img
                      title="Download FlapRush3D on Indus Appstore"
                      alt="Get it on Indus Appstore"
                      width={220}
                      height={80}
                      src="https://docstore.indusappstore.com/public/external/developerdashboard-static/badge-black-full-color-english.png"
                    />
                  </a>
                  {/* IMDb */}
                  <a
                    title="View FlapRush3D on IMDb"
                    href="https://www.imdb.com/title/tt43031486/?ref_=fn_t_1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
    group
    flex
    items-center
    gap-4
    rounded-2xl
    border
    w-full 
    max-w-[220px]
    border-[#F5C518]/20
    bg-[#F5C518]
    px-5
    py-4
    transition-all
    hover:scale-[1.02]
    hover:brightness-105
  "
                  >
                    <Image
                      src="/imdb.png"
                      alt="IMDb"
                      width={42}
                      height={42}
                      className="object-contain"
                    />

                    <div>
                      <p className="text-xs uppercase tracking-wider text-black/70">
                        Rate Us On
                      </p>

                      <h4 className="text-2xl font-black text-black">IMDb</h4>
                    </div>
                  </a>
                </div>
              </div>
            </section>
          </div>
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="
    w-full
    flex
    justify-center
    items-center
    mt-12
  "
          >
            <div
              className="
      relative
      w-full
      max-w-[1400px]
      mx-auto
    "
            >
              {/* Next Button */}
              <button
                onClick={nextImage}
                className="
        absolute
        bottom-5
        right-5
        z-10
        bg-black/70
        backdrop-blur-md
        border
        border-zinc-700
        px-5
        py-3
        rounded-xl
        text-white
        font-bold
        shadow-xl
        hover:bg-red-600
        hover:border-red-500
        hover:scale-105
        transition-all
      "
              >
                Next →
              </button>

              {/* Screenshot */}
              <img
                src={mediaData[currentImage]}
                alt="FlapRush3D gameplay screenshot"
                className="
        w-full
        h-[260px]
        md:h-[360px]
        lg:h-[660px]
        rounded-3xl
        object-cover
        border
        border-zinc-800
        shadow-2xl
      "
              />
            </div>
          </motion.section>

          {/* DESCRIPTION SECTION */}
          <section className="w-full py-24 px-6 lg:px-12 border-t border-zinc-900">
            <div className="max-w-5xl mx-auto">
              <span className="text-red-500 uppercase tracking-[0.25em] text-xs font-bold">
                About The Game
              </span>

              <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-8">
                Enter The World Of FLAPRUSH3D
              </h2>

              <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
                <p>
                  FLAPRUSH3D is a fast-paced arcade experience built around
                  reflex, precision, and nonstop momentum. Navigate through
                  vibrant neon environments while avoiding increasingly
                  difficult obstacles designed to push your reaction speed to
                  the limit.
                </p>

                <p>
                  Every run becomes more intense as the game accelerates,
                  demanding sharper focus and better timing. Inspired by classic
                  arcade challenge games, FLAPRUSH3D delivers quick sessions
                  packed with energy, competition, and addictive gameplay loops.
                </p>
                <p>
                  Designed with vibrant neon visuals and smooth gameplay flow,
                  FLAPRUSH3D focuses on quick reaction-based action that is easy
                  to learn but difficult to master.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <div className="px-5 py-3 rounded-xl border border-zinc-800 bg-zinc-900/50 text-zinc-300 text-sm font-semibold">
                  Endless Arcade Gameplay
                </div>

                <div className="px-5 py-3 rounded-xl border border-zinc-800 bg-zinc-900/50 text-zinc-300 text-sm font-semibold">
                  Neon Visual Style
                </div>

                <div className="px-5 py-3 rounded-xl border border-zinc-800 bg-zinc-900/50 text-zinc-300 text-sm font-semibold">
                  Hardcore Reflex Challenge
                </div>

                <div className="px-5 py-3 rounded-xl border border-zinc-800 bg-zinc-900/50 text-zinc-300 text-sm font-semibold">
                  Fast Competitive Runs
                </div>
              </div>
            </div>
          </section>
          {/* FEATURES SECTION */}
          <section className="border-t border-zinc-900/80 pt-20 p-8">
            <h3 className="text-zinc-500 font-bold tracking-wider text-xs uppercase mb-10">
              Key Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {features.map((item) => (
                <div
                  key={item.title}
                  className="border border-zinc-900 bg-gradient-to-b from-zinc-900/30 to-zinc-950 p-10 rounded-2xl hover:border-zinc-800/80 transition-colors group shadow-sm"
                >
                  <h4 className="text-white font-bold text-2xl mb-3 transition-colors group-hover:text-red-500">
                    {item.title}
                  </h4>
                  <p className="text-zinc-400 text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
