import { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://akurainteractive.vercel.app"),

  title: {
    default: "Akura Interactive",
    template: "%s | Akura Interactive",
  },

  description:
    "Akura Interactive is an independent game studio creating atmospheric interactive experiences, immersive worlds, and original games including FlapRush3D and Night Shift Simulator.",

  keywords: [
    "Akura Interactive",
    "indie game studio",
    "game development",
    "Night Shift Simulator",
    "FlapRush3D",
    "independent game developer",
    "godot game developer",
    "atmospheric games",
    "horror game studio",
    "simulation games",
    "indie games",
    "PC games",
    "mobile games",
  ],

  authors: [
    {
      name: "Akura Interactive",
    },
  ],

  creator: "Akura Interactive",

  publisher: "Akura Interactive",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {

    title:
      "Akura Interactive | Building Interactive Experiences",

    description:
      "Independent game studio creating immersive worlds and original interactive experiences.",

    url:
      "https://akurainteractive.vercel.app",

    siteName:
      "Akura Interactive",

    images: [
      {
        url: "/logo.svg",
        width: 512,
        height: 512,
        alt: "Akura Interactive Logo",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {

    card: "summary_large_image",

    title:
      "Akura Interactive",

    description:
      "Independent game studio building immersive experiences.",

    images: [
      "/logo.svg",
    ],
  },

  icons: {

    icon: "/logo.svg",

    shortcut: "/logo.svg",

    apple: "/logo.svg",
  },

  alternates: {

    canonical:
      "https://akurainteractive.vercel.app",
  },

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-zinc-950 text-zinc-100 antialiased selection:bg-red-600/30 selection:text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
