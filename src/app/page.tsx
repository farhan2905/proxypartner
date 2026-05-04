'use client';

import Navigation from '@/components/sections/Navigation';
import Hero from '@/components/sections/Hero';
import Marquee from '@/components/sections/Marquee';
import Challenges from '@/components/sections/Challenges';
import Solutions from '@/components/sections/Solutions';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import Stats from '@/components/sections/Stats';
import FAQ from '@/components/sections/FAQ';
import Insights from '@/components/sections/Insights';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="bg-background overflow-x-clip text-foreground">
      <Navigation />
      <Hero />
      <Marquee />
      <Challenges />
      <Solutions />
      <About />
      <Services />
      <Process />
      <Stats />
      <FAQ />
      <Insights />
      <CTA />
      <Footer />
    </main>
  );
}
