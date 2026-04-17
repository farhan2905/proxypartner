'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import {
  Megaphone,
  TrendingUp,
  Code2,
  BrainCircuit,
  Palette,
  Server,
  ArrowRight,
} from 'lucide-react';
import SectionTag from '@/components/shared/SectionTag';

const services = [
  {
    icon: Megaphone,
    number: '01',
    title: 'Digital Marketing',
    description:
      'Amplify your brand presence with targeted campaigns across every digital channel. We craft data-driven strategies that turn clicks into customers and impressions into revenue.',
    subservices: [
      'Search Engine Optimization',
      'Pay-Per-Click Advertising',
      'Social Media Marketing',
      'Content Marketing',
    ],
    gradient: 'from-[#e4fe7b]/40 to-[#e4fe7b]/5',
    color: '#e4fe7b',
  },
  {
    icon: TrendingUp,
    number: '02',
    title: 'Growth Strategy',
    description:
      'Unlock exponential growth with proven frameworks and innovative tactics. We identify bottlenecks, optimize funnels, and create sustainable growth engines for your business.',
    subservices: [
      'Growth Hacking',
      'Conversion Optimization',
      'A/B Testing',
      'User Acquisition',
    ],
    gradient: 'from-[#e83043]/40 to-[#e83043]/5',
    color: '#e83043',
  },
  {
    icon: Code2,
    number: '03',
    title: 'Web Development',
    description:
      'Build fast, scalable, and beautiful web experiences that users love. From landing pages to enterprise platforms, we deliver code that performs as good as it looks.',
    subservices: [
      'Full-Stack Development',
      'E-Commerce Solutions',
      'CMS Integration',
      'API Development',
    ],
    gradient: 'from-blue-500/40 to-blue-500/5',
    color: '#3b82f6',
  },
  {
    icon: BrainCircuit,
    number: '04',
    title: 'AI Solutions',
    description:
      'Harness the power of artificial intelligence to automate, predict, and innovate. We integrate cutting-edge AI tools into your workflows for smarter business outcomes.',
    subservices: [
      'AI Chatbots & Assistants',
      'Machine Learning Models',
      'Predictive Analytics',
      'NLP Systems',
    ],
    gradient: 'from-purple-500/40 to-purple-500/5',
    color: '#a855f7',
  },
  {
    icon: Palette,
    number: '05',
    title: 'Brand Identity',
    description:
      'Create a brand that resonates, inspires, and endures. We design visual identities that capture your essence and connect emotionally with your audience.',
    subservices: [
      'Logo Design',
      'Brand Guidelines',
      'Visual Systems',
      'Brand Strategy',
    ],
    gradient: 'from-orange-500/40 to-orange-500/5',
    color: '#f97316',
  },
  {
    icon: Server,
    number: '06',
    title: 'IT Services',
    description:
      'Keep your technology running smoothly and securely. We provide comprehensive IT solutions that let you focus on what you do best — growing your business.',
    subservices: [
      'IT Consulting',
      'Cybersecurity',
      'Cloud Solutions',
      'Managed Services',
    ],
    gradient: 'from-teal-500/40 to-teal-500/5',
    color: '#14b8a6',
  },
];

// Extracted Node component to handle counter-rotation cleanly
function WheelNode({ 
  service, 
  index, 
  wheelRotation, 
  isActive 
}: { 
  service: typeof services[0], 
  index: number, 
  wheelRotation: any, 
  isActive: boolean 
}) {
  const angle = index * 60; // 360 / 6
  
  // Counter rotate so the icon stays upright
  const itemRotation = useTransform(wheelRotation, (r: number) => -(r + angle));
  const Icon = service.icon;

  return (
    <div
      className="absolute top-[-40px] left-1/2 -translate-x-1/2 origin-[50%_640px] z-20 pointer-events-none"
      style={{ transform: `rotate(${angle}deg)` }}
    >
      <motion.div
        style={{ rotate: itemRotation }}
        className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-500 ${
          isActive 
            ? 'glass-panel shadow-[0_0_30px_rgba(228,254,123,0.3)] scale-110 border-[#e4fe7b]/50' 
            : 'glass border-white/10 scale-90 opacity-40'
        }`}
      >
        <Icon className={`w-8 h-8 transition-colors duration-500 ${isActive ? 'text-[#e4fe7b]' : 'text-white'}`} />
      </motion.div>
    </div>
  );
}

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Map scroll progress to wheel rotation: 0 -> -300 degrees
  const wheelRotation = useTransform(scrollYProgress, [0, 1], [0, -300]);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    // 6 items -> 5 intervals.
    let index = Math.round(latest * 5);
    index = Math.max(0, Math.min(5, index));
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  });

  const activeService = services[activeIndex];

  return (
    <section id="services" ref={containerRef} className="relative h-[420vh] bg-[#121212]">
      {/* Sticky visible area */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center pt-24 md:pt-32">
        
        {/* Background ambient glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="noise-overlay absolute inset-0 opacity-40" />
          <motion.div 
            animate={{ 
              background: `radial-gradient(circle at 50% 50%, ${activeService.color}40 0%, transparent 60%)` 
            }}
            transition={{ duration: 1 }}
            className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[100vw] h-[100vw] opacity-60 blur-[100px]"
          />
        </div>

        {/* Section Header */}
        <div className="relative z-10 text-center px-6 mb-12">
          <SectionTag text="OUR SERVICES" variant="dark" />
          <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight tracking-tight mt-6 mb-4">
            Services that drive <mark>growth</mark>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            No running around for different experts. We handle it all.
          </p>
        </div>

        {/* The Wheel */}
        {/* The wheel has a radius of 600px. We place it so the top touches near the header. */}
        <motion.div
          className="absolute left-1/2 rounded-full border border-white/5 z-0"
          style={{
            width: '1200px',
            height: '1200px',
            top: '30vh',
            x: '-50%',
            rotate: wheelRotation,
          }}
        >
          {/* Wheel inner circles for aesthetics */}
          <div className="absolute inset-[100px] rounded-full border border-white/5 border-dashed opacity-50" />
          <div className="absolute inset-[200px] rounded-full border border-white/[0.02]" />
          
          {services.map((service, i) => (
            <WheelNode 
              key={i} 
              service={service} 
              index={i} 
              wheelRotation={wheelRotation} 
              isActive={activeIndex === i} 
            />
          ))}
        </motion.div>

        {/* Active Service Content Container */}
        {/* Rendered below the zenith point, overlapping the wheel */}
        <div className="relative z-30 w-full max-w-4xl px-6 mt-[6vh] md:mt-[8vh] translate-y-[60px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -40, filter: 'blur(8px)' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card rounded-[2rem] p-6 md:p-8 overflow-hidden relative"
            >
              {/* Card internal gradient */}
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${activeService.gradient} blur-[60px] opacity-60 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none`} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative z-10">
                {/* Left: Info */}
                <div>
                  <span className="inline-flex items-center gap-2 bg-[#e4fe7b]/10 text-[#e4fe7b] border border-[#e4fe7b]/20 text-sm font-mono font-bold px-3 py-1 rounded-full mb-6">
                    {activeService.number}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {activeService.title}
                  </h3>
                  <p className="text-white/60 text-base leading-relaxed mb-8">
                    {activeService.description}
                  </p>
                  
                  <motion.button
                    whileHover={{ gap: '12px' }}
                    className="inline-flex items-center gap-2 text-[#e4fe7b] text-sm font-semibold group bg-white/5 hover:bg-white/10 px-6 py-3 rounded-full border border-white/10 transition-colors"
                  >
                    Explore {activeService.title}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </div>

                {/* Right: Subservices */}
                <div className="flex flex-col justify-center">
                  <p className="text-white/30 text-xs font-mono uppercase tracking-widest mb-6">
                    What we offer
                  </p>
                  <div className="space-y-4">
                    {activeService.subservices.map((sub, i) => (
                      <motion.div
                        key={sub}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.4 }}
                        className="flex items-center gap-4 group"
                      >
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#e4fe7b]/40 transition-colors">
                           <span className="text-white/40 text-[10px] font-mono group-hover:text-[#e4fe7b] transition-colors">
                             0{i+1}
                           </span>
                        </div>
                        <span className="text-white/80 text-sm md:text-base group-hover:text-white transition-colors">
                          {sub}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
