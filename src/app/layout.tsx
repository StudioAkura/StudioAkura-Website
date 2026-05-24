import { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Akura Interactive | Next Generation AAA Studio',
  description: 'Crafting Worlds. Building Fear. Akura Interactive is an independent AAA studio dedicated to narrative-driven experiences.',
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
