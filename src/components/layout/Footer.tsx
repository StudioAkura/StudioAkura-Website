import React from 'react';
import Link from 'next/link';
import { Video, Share2, MessageCircle } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12 lg:py-16">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 mb-8 group">
          <div className="w-6 h-6 bg-red-600 rotate-45 flex items-center justify-center transform group-hover:rotate-90 transition-transform duration-500">
            <div className="w-2 h-2 bg-zinc-950" />
          </div>
          <span className="font-bold text-lg tracking-widest uppercase text-white ml-2">
            Akura<span className="text-zinc-500 font-light">Interactive</span>
          </span>
        </Link>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10">
          {['Home', 'About', 'Privacy', 'Careers', 'Contact'].map((item) => (
            <Link
              key={item}
              href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className="text-zinc-400 hover:text-white uppercase tracking-wider text-xs font-semibold transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Socials */}
        <div className="flex gap-6 mb-12">
          {[Video, Share2, MessageCircle].map((Icon, idx) => (
            <a
              key={idx}
              href="#"
              className="text-zinc-500 hover:text-red-500 transition-colors transform hover:scale-110"
              aria-label="Social Link"
            >
              <Icon size={24} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-zinc-600 text-xs tracking-widest uppercase text-center max-w-xl">
          © {new Date().getFullYear()} Akura Interactive. All rights reserved. 
          <br className="md:hidden" />
        </p>
      </div>
    </footer>
  );
};
