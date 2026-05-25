"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PrivacyPage() {

    return (

        <main className="bg-zinc-950 min-h-screen pt-32 pb-24">

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

                        Privacy Protocol

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

                        Data <span className="text-red-600">Integrity</span>

                    </h1>

                    <p
                        className="
text-zinc-400
max-w-2xl
mx-auto
text-lg
"
                    >

                        Akura Interactive values transparency.
                        This page explains how information is
                        handled across our games, website,
                        and future experiences.

                    </p>

                </motion.div>

                <div className="space-y-12">

                    {/* Studio Website */}

                    <section
                        className="
bg-zinc-900
border
border-zinc-800
p-8
"
                    >

                        <h2
                            className="
text-white
text-3xl
font-black
uppercase
mb-6
"
                        >

                            Studio Website

                        </h2>

                        <div className="space-y-4 text-zinc-400">

                            <p>

                                The Akura Interactive website may
                                collect information voluntarily
                                submitted through contact forms.

                            </p>

                            <p>

                                Information may include:

                            </p>

                            <ul className="list-disc pl-6">

                                <li>Name</li>

                                <li>Email Address</li>

                                <li>Message Content</li>

                            </ul>

                            <p>

                                This information is used solely
                                for communication purposes.

                            </p>

                        </div>

                    </section>

                    {/* FlapRush3D */}

                    <section
                        className="
bg-zinc-900
border
border-zinc-800
p-8
"
                    >

                        <h2
                            className="
text-white
text-3xl
font-black
uppercase
mb-6
"
                        >

                            FlapRush3D

                        </h2>

                        <div className="space-y-4 text-zinc-400">

                            <p>

                                FlapRush3D currently does not
                                intentionally collect personal data.

                            </p>

                            <p>

                                Platform providers or services
                                such as application stores may
                                process technical information
                                required for downloads,
                                updates, or crash reporting.

                            </p>

                            <p>

                                Akura Interactive does not sell
                                user information.

                            </p>

                        </div>

                    </section>

                    {/* Future Games */}

                    <section
                        className="
bg-zinc-900
border
border-zinc-800
p-8
"
                    >

                        <h2
                            className="
text-white
text-3xl
font-black
uppercase
mb-6
"
                        >

                            Future Games

                        </h2>

                        <div className="space-y-4 text-zinc-400">

                            <p>

                                Future Akura Interactive titles
                                may use additional systems such as:

                            </p>

                            <ul className="list-disc pl-6">

                                <li>Analytics</li>

                                <li>Cloud Save Features</li>

                                <li>Online Systems</li>

                                <li>Platform Services</li>

                            </ul>

                            <p>

                                Privacy practices may evolve as
                                future projects expand.

                                Updates will appear here.

                            </p>

                        </div>

                    </section>

                    {/* Contact */}

                    <section
                        className="
bg-zinc-900
border
border-zinc-800
p-8
"
                    >

                        <h2
                            className="
text-white
text-3xl
font-black
uppercase
mb-6
"
                        >

                            Contact Information

                        </h2>

                        <div className="space-y-4 text-zinc-400">

                            <p>

                                Questions regarding privacy
                                or data handling:

                            </p>

                            <p
                                className="
text-red-500
font-semibold
"
                            >

                                akurainteractive@gmail.com

                            </p>

                            <p>

                                Akura Interactive

                            </p>

                            <p>

                                Last Updated: May 2026

                            </p>

                        </div>

                    </section>

                </div>

            </div>

        </main>

    );

}