'use client';

import { useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import SectionTag from '@/components/shared/SectionTag';
import { ArrowUpRight } from 'lucide-react'; // Add this near imports

const works = [
  {
    number: '01',
    title: 'Desh Yatraa',
    description:
      'We engineered a comprehensive travel booking and exploration portal for Desh Yatraa. The platform features an intuitive search architecture, seamless booking workflows, and an optimized mobile experience.',
    detail: 'Travel & Tourism Portal',
    icon: '✈️',
    color: '#10b981',
    link: 'https://deshyatraa.com',
  },
  {
    number: '02',
    title: 'Voyage Horizon',
    description:
      'Developed a modern digital storefront for Voyage Horizon to showcase their premium travel packages. We focused on high-performance media delivery, lead generation forms, and a custom CMS.',
    detail: 'Travel Agency Platform',
    icon: '🌊',
    color: '#34d399',
    link: 'https://voyagehorizon.co.in',
  },
  {
    number: '03',
    title: 'Kuch Nahi',
    description:
      'Built a blazing-fast, custom e-commerce solution for Kuch Nahi. The architecture was designed from the ground up to minimize cart abandonment, featuring a hyper-optimized checkout flow and secure payment gateways.',
    detail: 'E-Commerce Experience',
    icon: '🛒',
    color: '#059669',
    link: 'https://kuchnahi.co.in',
  },
  {
    number: '04',
    title: 'Bhairav Steel',
    description:
      'Transformed Bhairav Steel\'s traditional business into a powerful digital catalog. We developed a robust B2B platform that handles complex product specifications and quote request automation.',
    detail: 'B2B Industrial Catalog',
    icon: '🏗️',
    color: '#0d9488',
    link: 'https://bhairavsteel.in',
  },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInteractive, setIsInteractive] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    // 4 items means 3 intervals to scroll through.
    const intervals = works.length - 1;
    let index = Math.round(latest * intervals);
    index = Math.max(0, Math.min(intervals, index));
    if (index !== activeIndex) {
      setActiveIndex(index);
      setIsInteractive(false); // Reset interaction when scrolling changes the active item
    }
  });

  const activeWork = works[activeIndex];

  return (
    <section id="work" ref={containerRef} className="relative h-[400vh] bg-transparent">
      {/* Background ambient light */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="noise-overlay absolute inset-0 opacity-30 z-[1]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] bg-emerald-500 rounded-full blur-[150px] opacity-[0.08]" />
      </div>

      {/* Sticky visible area */}
      <div className="sticky top-0 h-[100dvh] flex flex-col justify-center overflow-hidden z-10">
        <div className="w-[92vw] max-w-[1600px] mx-auto w-full px-4 md:px-8 lg:px-12 py-12 md:py-0">
          <SectionTag text="OUR WORK" variant="dark" />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-foreground to-foreground/70 leading-tight tracking-tight mb-8 md:mb-12 drop-shadow-sm"
          >
            Digital <span className="text-gradient-accent drop-shadow-sm">systems</span> built for real businesses.
          </motion.h2>

          {/* Active step card */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.95, y: 30, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.95, y: -30, filter: 'blur(10px)' }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="glass-card rounded-[2rem] md:rounded-[3rem] p-6 sm:p-8 md:p-10 lg:p-14 relative overflow-hidden flex flex-col max-h-[85vh] md:max-h-none"
              >
                {/* Internal colored glow corresponding to step color */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.25 }}
                  transition={{ duration: 1 }}
                  className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-[80px] pointer-events-none hidden md:block"
                  style={{ backgroundColor: activeWork.color }}
                />

                <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-12 relative z-10 w-full overflow-y-auto md:overflow-visible pr-2 md:pr-0 custom-scrollbar flex-1">
                  
                  {/* Left Column: Number & Content */}
                  <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8 lg:gap-10 flex-1">
                    {/* Step number */}
                    <div className="flex-shrink-0 hidden lg:block">
                      <div 
                        className="text-[4rem] lg:text-[5rem] xl:text-[6rem] font-bold leading-none tabular-nums"
                        style={{ color: `${activeWork.color}25` }}
                      >
                        {activeWork.number}
                      </div>
                    </div>

                    {/* Step content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-3 md:mb-4">
                        <span className="text-xl md:text-2xl">{activeWork.icon}</span>
                        <span className="text-foreground/40 text-[10px] md:text-xs font-mono uppercase tracking-widest bg-foreground/5 px-2 md:px-3 py-1 rounded-full border border-foreground/5">
                          {activeWork.detail}
                        </span>
                      </div>

                      <h3 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/70 mb-3 md:mb-4 tracking-tight leading-tight">
                        {activeWork.title}
                      </h3>

                      <p className="text-foreground/80 text-lg md:text-xl leading-relaxed mb-6 md:mb-8 max-w-xl">
                        {activeWork.description}
                      </p>

                      <a 
                        href={activeWork.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 bg-foreground/5 hover:bg-foreground/10 border border-foreground/5 rounded-full text-foreground font-medium transition-colors text-sm md:text-base w-fit"
                      >
                        View Live Website <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Live Iframe Preview */}
                  <div 
                    className="w-full lg:w-[45%] xl:w-[50%] h-[200px] sm:h-[300px] md:h-[400px] lg:h-[450px] xl:h-[500px] flex-shrink-0 bg-transparent rounded-xl overflow-hidden border border-foreground/5 shadow-2xl relative transition-all duration-300 mt-4 lg:mt-0"
                    onMouseLeave={() => setIsInteractive(false)}
                  >
                     {/* Browser Header */}
                     <div className="absolute top-0 left-0 right-0 h-8 bg-foreground/5 border-b border-foreground/5 flex items-center px-4 gap-2 z-20 backdrop-blur-md">
                       <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                     </div>
                     {/* Iframe container */}
                     <div className="w-full h-full pt-8 relative z-10 bg-background">
                       <iframe 
                         src={activeWork.link} 
                         className="w-full h-full border-none"
                         sandbox="allow-scripts allow-same-origin"
                         title={`${activeWork.title} live preview`}
                       />
                       {/* Transparent overlay to stop mouse scroll trapping - click to interact */}
                       <div 
                         className={`absolute inset-0 z-20 flex items-center justify-center transition-all duration-300 group ${
                           isInteractive ? 'opacity-0 pointer-events-none' : 'opacity-100 bg-background/20 md:bg-transparent md:hover:bg-background/20 cursor-pointer pointer-events-auto'
                         }`}
                         onClick={() => setIsInteractive(true)}
                       >
                         {!isInteractive && (
                           <span className="px-4 py-2 bg-foreground/70 backdrop-blur-md text-background shadow-xl text-sm font-medium rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity flex items-center gap-2">
                             Tap to interact
                           </span>
                         )}
                       </div>
                     </div>
                  </div>

                </div>

                {/* Decorative bottom bar */}
                <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-foreground/5 flex items-center justify-between relative z-10 flex-shrink-0">
                  <div className="flex items-center gap-3 md:gap-4">
                    {works.map((work, i) => (
                      <div
                        key={i}
                        className={`transition-all duration-500 rounded-full ${
                          i === activeIndex
                            ? 'w-12 h-2 shadow-[0_0_15px_rgba(0,0,0,0.5)]'
                            : i < activeIndex
                              ? 'w-2 h-2 opacity-40'
                              : 'w-2 h-2 bg-foreground/10'
                        }`}
                        style={{ backgroundColor: i <= activeIndex ? work.color : undefined }}
                      />
                    ))}
                  </div>
                  <span className="text-foreground/40 text-xs font-mono bg-foreground/10 px-3 py-1.5 rounded-full border border-foreground/5">
                    Project {activeIndex + 1} of {works.length}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
