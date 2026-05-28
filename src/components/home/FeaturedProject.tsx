"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const projects = [
  {
    title: "FlapRush3D",
    subtitle: "Arcade Endless Runner",
    description:
      "Dash through obstacles and survive as long as possible in a fast-paced 3D reflex challenge.",
    pageLink: "/games/flaprush3d",
    image:
      "https://res.cloudinary.com/danpdjryt/image/upload/v1779463477/2026-05-08T22-37-30_cyalf1.png",
  },
  {
    title: "Night Shift Simulator",
    subtitle: "Night Shift Simulator (in development)",
    description:
      "Work late shifts inside a neon city while strange events slowly unfold around you.",
    pageLink: "",
    image:
      "https://res.cloudinary.com/danpdjryt/image/upload/v1779513961/oTUlF1TQnNUhpNVZLdQngazUfcPs69cWGorWve1FFX6_WSu-mAPAZIr6d-huk-fPBlSkqY_fiVljIEbNMt--3_XvbAog1pDSikFWtKV8nvgHu_ruTlF4byFpf3AUR-xxxTRaf7iRHtk1iygREXoKWMJzUY2q9i6lai4i8ACvzd5FtwXFD3lHdXPEuyySUrbL_toalyr.jpg",
  },
  {
    title: "Future Project",
    subtitle: "Coming Soon",
    description: "More worlds are being crafted inside Akura Interactive.",
    pageLink: "",
    image:
      "https://res.cloudinary.com/danpdjryt/image/upload/v1779514392/ChatGPT_Image_May_23_2026_11_02_38_AM_jrjqbm.png",
  },
];

const mediaData = [
  "https://res.cloudinary.com/danpdjryt/image/upload/v1779808108/screen-shot-one-orange-env-bird-flap_wg45xg.jpg",

  "https://res.cloudinary.com/danpdjryt/video/upload/v1779808486/Game-Trailer_jum7z5.mp4",

  "https://res.cloudinary.com/danpdjryt/image/upload/v1779808118/screen-shot-MIX-env-bird-flap_ene9fs.jpg",
];

export const FeaturedProject = () => {
  const containerRef = useRef<HTMLElement>(null);

  const [currentProject, setCurrentProject] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const nextProject = () => {
    setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const project = projects[currentProject];

  return (
    <section
      ref={containerRef}
      id="games"
      className="py-32 bg-zinc-950 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}

        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-[#7F1D1D] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
              Featured Title
            </span>

            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
              Project: <span className="text-zinc-500">{project.title}</span>
            </h2>
          </div>

          <Button
            variant="ghost"
            className="hidden md:flex"
            onClick={nextProject}
          >
            Next Project
          </Button>
        </div>

        {/* Card */}

        <motion.div
          key={currentProject}
          style={{ opacity }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="
          relative
          group
          rounded-sm
          overflow-hidden
          aspect-[16/9]
          md:aspect-[21/9]
          bg-zinc-900
          border
          border-zinc-900
          hover:border-zinc-700
          duration-500
          "
        >
          {/* Image */}

          <motion.div
            style={{ y }}
            className="
 absolute
 inset-0
 z-0
 h-full
 w-full
 "
          >
            <img
              src={project.image}
              alt={project.title}
              className="
    w-full
    h-full
    object-cover
    object-center
    opacity-50
    group-hover:opacity-60
    transition-opacity
    duration-700
    filter
    grayscale
    group-hover:grayscale-0
    "
            />
          </motion.div>

          {/* Overlay */}

          <div
            className="
            absolute
            inset-0
            bg-gradient-to-t
            from-zinc-950
            via-zinc-950/80
            to-transparent
            z-10
            "
          />

          {/* Content */}

          <div
            className="
            absolute
            inset-0
            z-20
            flex
            flex-col
            justify-end
            p-8
            md:p-16
            "
          >
            <h3
              className="
              text-3xl
              md:text-5xl
              font-bold
              uppercase
              text-white
              mb-4
              translate-y-4
              group-hover:translate-y-0
              transition-transform
              duration-500
              "
            >
              {project.subtitle}
            </h3>

            <p
              className="
              text-zinc-400
              max-w-xl
              mb-8
              opacity-0
              group-hover:opacity-100
              translate-y-4
              group-hover:translate-y-0
              transition-all
              duration-500
              "
            >
              {project.description}
            </p>

            <div
              className="
flex
gap-3
opacity-0
group-hover:opacity-100
translate-y-4
group-hover:translate-y-0
transition-all
duration-500
"
            >
              {project.pageLink && (
                <Link href={project.pageLink}>
                  <Button>View Page</Button>
                </Link>
              )}

              <Button
                variant={project.pageLink ? "ghost" : "primary"}
                onClick={nextProject}
              >
                Next Project
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
