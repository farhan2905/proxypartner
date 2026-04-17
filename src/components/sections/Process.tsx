'use client';

import { useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import SectionTag from '@/components/shared/SectionTag';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'We dive deep into your business, audience, and goals. Through comprehensive audits and stakeholder interviews, we uncover the insights that shape a winning strategy tailored to your unique position in the market.',
    detail: 'Research & Analysis',
    icon: '🔍',
    color: '#e4fe7b',
  },
  {
    number: '02',
    title: 'Strategy',
    description:
      'Our team crafts a detailed roadmap combining data-driven insights with creative thinking. We identify the channels, tactics, and technologies that will maximize your ROI and accelerate growth.',
    detail: 'Planning & Roadmap',
    icon: '🗺️',
    color: '#e83043',
  },
  {
    number: '03',
    title: 'Execute',
    description:
      'We bring the strategy to life with precision and creativity. Our cross-functional teams work in sprints, delivering measurable results through continuous optimization and transparent reporting.',
    detail: 'Build & Launch',
    icon: '🚀',
    color: '#3b82f6',
  },
  {
    number: '04',
    title: 'Scale',
    description:
      'We analyze performance data, refine approaches, and identify new opportunities. Our focus shifts to sustainable growth — scaling what works, eliminating what doesn\'t, and keeping you ahead of the curve.',
    detail: 'Optimize & Grow',
    icon: '📈',
    color: '#a855f7',
  },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    // 4 items means 3 intervals to scroll through.
    const intervals = steps.length - 1;
    let index = Math.round(latest * intervals);
    index = Math.max(0, Math.min(intervals, index));
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  });

  const activeStep = steps[activeIndex];

  return (
    <section id="process" ref={containerRef} className="relative h-[200vh] bg-[#121212]">
      {/* Background ambient light */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="noise-overlay absolute inset-0 opacity-30 z-[1]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] bg-[#e4fe7b] rounded-full blur-[150px] opacity-[0.08]" />
      </div>

      {/* Sticky visible area */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden z-10">
        <div className="max-w-5xl mx-auto w-full px-6">
          <SectionTag text="OUR PROCESS" variant="dark" />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight mb-12"
          >
            Making <mark>magic</mark> in four moves
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
                className="glass-card rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 lg:p-16 relative overflow-hidden"
              >
                {/* Internal colored glow corresponding to step color */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.25 }}
                  transition={{ duration: 1 }}
                  className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-[80px] pointer-events-none"
                  style={{ backgroundColor: activeStep.color }}
                />

                <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10 relative z-10">
                  {/* Step number */}
                  <div className="flex-shrink-0">
                    <div 
                      className="text-[64px] md:text-[100px] lg:text-[130px] font-bold leading-none tabular-nums"
                      style={{ color: `${activeStep.color}25` }} // 25 hex opacity ~15%
                    >
                      {activeStep.number}
                    </div>
                  </div>

                  {/* Step content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{activeStep.icon}</span>
                      <span className="text-white/40 text-xs font-mono uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full border border-white/10">
                        {activeStep.detail}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 tracking-tight">
                      {activeStep.title}
                    </h3>

                    <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-lg">
                      {activeStep.description}
                    </p>
                  </div>
                </div>

                {/* Decorative bottom bar */}
                <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-4">
                    {steps.map((step, i) => (
                      <div
                        key={i}
                        className={`transition-all duration-500 rounded-full ${
                          i === activeIndex
                            ? 'w-12 h-2 shadow-[0_0_15px_rgba(255,255,255,0.5)]'
                            : i < activeIndex
                              ? 'w-2 h-2 opacity-40'
                              : 'w-2 h-2 bg-white/10'
                        }`}
                        style={{ backgroundColor: i <= activeIndex ? step.color : undefined }}
                      />
                    ))}
                  </div>
                  <span className="text-white/30 text-xs font-mono bg-black/20 px-3 py-1.5 rounded-full border border-white/5">
                    Step {activeIndex + 1} of {steps.length}
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
