"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const futureRoles = [
  {
    id: 1,
    title: "Gameplay Programmer",
    department: "Engineering",
    status: "Future Opportunity",
  },
  {
    id: 2,
    title: "Game Designer",
    department: "Design",
    status: "Future Opportunity",
  },
  {
    id: 3,
    title: "3D Artist",
    department: "Art",
    status: "Future Opportunity",
  },
  {
    id: 4,
    title: "Technical Artist",
    department: "Production",
    status: "Future Opportunity",
  },
];

export default function CareersPage() {
  return (
    <main className="bg-zinc-950 pt-32 pb-24 min-h-screen">

      <div className="container mx-auto px-6 lg:px-12 max-w-5xl">

        {/* Hero */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >

          <span
            className="
            text-red-600
            font-bold
            tracking-[0.2em]
            uppercase
            text-sm
            mb-4
            block
            "
          >
            Future Opportunities
          </span>

          <h1
            className="
            text-5xl
            md:text-7xl
            font-black
            text-white
            uppercase
            tracking-tighter
            mb-6
            "
          >
            Grow With Akura
          </h1>

          <p
            className="
            text-xl
            text-zinc-400
            font-light
            max-w-2xl
            mx-auto
            mb-8
            "
          >
            Akura Interactive is currently focused on
            building new experiences and growing our
            foundation.

            Future opportunities may become available
            as the studio evolves.
          </p>

          <Button
            size="lg"
            disabled
            className="
            opacity-70
            cursor-not-allowed
            "
          >
            Not Hiring Yet
          </Button>

        </motion.div>

        {/* Studio Values */}

        <section
          className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-8
          py-16
          border-y
          border-zinc-800
          mb-20
          "
        >

          {[
            {
              title: "Independent Spirit",
              desc:
                "Built through passion, experimentation, and learning.",
            },
            {
              title: "Growth Mindset",
              desc:
                "Always improving systems, skills, and ideas.",
            },
            {
              title: "Future Focused",
              desc:
                "Building foundations for bigger projects ahead.",
            },
          ].map((item, i) => (

            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: i * 0.1,
              }}
              className="
              text-center
              px-4
              "
            >

              <h3
                className="
                text-white
                font-bold
                uppercase
                tracking-wider
                mb-2
                "
              >
                {item.title}
              </h3>

              <p
                className="
                text-zinc-500
                text-sm
                "
              >
                {item.desc}
              </p>

            </motion.div>

          ))}

        </section>

        {/* Future Roles */}

        <div>

          <h2
            className="
            text-3xl
            font-black
            uppercase
            text-white
            tracking-tighter
            mb-8
            "
          >
            Future Opportunities
          </h2>

          <div className="flex flex-col gap-4">

            {futureRoles.map((role, i) => (

              <motion.div
                key={role.id}
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: i * 0.1,
                }}
                className="
                bg-zinc-900
                border
                border-zinc-800
                p-6
                md:p-8
                relative
                overflow-hidden
                "
              >

                <div
                  className="
                  flex
                  flex-col
                  md:flex-row
                  md:items-center
                  justify-between
                  gap-6
                  "
                >

                  <div>

                    <h3
                      className="
                      text-xl
                      md:text-2xl
                      font-bold
                      text-white
                      uppercase
                      tracking-wider
                      mb-2
                      "
                    >
                      {role.title}
                    </h3>

                    <div
                      className="
                      flex
                      gap-4
                      text-xs
                      font-semibold
                      tracking-widest
                      uppercase
                      text-zinc-500
                      "
                    >

                      <span>
                        {role.department}
                      </span>

                      <span>
                        •
                      </span>

                      <span>
                        {role.status}
                      </span>

                    </div>

                  </div>

                  <Button
                    disabled
                    variant="outline"
                    className="
                    opacity-50
                    cursor-not-allowed
                    "
                  >
                    Coming Later
                  </Button>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </main>
  );
}