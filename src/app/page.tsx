'use client';

import SidebarNavigation from '@/components/sections/SidebarNavigation';
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
    <main className="min-h-screen py-6 px-3 md:py-8 md:px-6 lg:px-10 flex justify-center items-start overflow-x-clip text-text-primary">
      <SidebarNavigation />

      {/* Main Content Glass Container */}
      <div className="glass w-full max-w-[1600px] overflow-x-clip relative lg:ml-16">
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
      </div>
    </main>
  );
}
