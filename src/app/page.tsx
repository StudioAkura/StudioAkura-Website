import { Hero } from '@/components/home/Hero';
import { FeaturedProject } from '@/components/home/FeaturedProject';
import { AboutStrip } from '@/components/home/AboutStrip';
import { Stats } from '@/components/home/Stats';
import { NewsSection } from '@/components/home/NewsSection';

export default function Home() {
  return (
    <main className="bg-zinc-950 min-h-screen">
      <Hero />
      <FeaturedProject />
      <AboutStrip />
      <Stats />
      <NewsSection />
    </main>
  );
}
