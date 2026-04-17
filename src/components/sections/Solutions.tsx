'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionTag from '@/components/shared/SectionTag';
import { ShieldCheck, Target, TrendingUp, Users } from 'lucide-react';

const solutions = [
  {
    icon: Target,
    title: 'We make things simple',
    description: 'No jargon, no overcomplication — just clear steps you can follow to start and grow your business confidently.',
  },
  {
    title: 'We focus on real results',
    icon: TrendingUp,
    description: 'Every strategy we create is designed to help you launch faster, grow smarter, and increase profits.',
  },
  {
    title: 'We know what works',
    icon: ShieldCheck,
    description: 'With years of hands-on experience across industries, we bring proven strategies and practical solutions to the table.',
  },
  {
    title: 'With you all the way',
    icon: Users,
    description: 'From your first idea to scaling your business, we provide ongoing support, not just a one-time plan.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Solutions() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="bg-[#111111] py-16 md:py-24 relative overflow-hidden" id="solutions">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#e4fe7b]/5 to-transparent rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <SectionTag text="OUR APPROACH" variant="dark" className="justify-center" />
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-2xl md:text-4xl font-bold text-white mt-6 mb-6 leading-tight"
          >
            Removing the roadblocks to your <mark className="text-[#e4fe7b] bg-transparent">success.</mark>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-white/60 text-lg"
          >
            It&apos;s easy to get lost in a sea of advice, conflicting opinions, and endless &apos;must-dos.&apos; We filter out the noise, focus on what truly matters, and give you the kind of clarity that lets your brand shine.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {solutions.map((solution, i) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={solution.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="glass-panel p-6 md:p-8 rounded-3xl border border-white/5 hover:border-[#e4fe7b]/30 transition-all duration-500 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#e4fe7b]/10 transition-all duration-300">
                  <Icon className="w-6 h-6 text-white group-hover:text-[#e4fe7b] transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#e4fe7b] transition-colors">
                  {solution.title}
                </h3>
                <p className="text-white/60 leading-relaxed text-lg">
                  {solution.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
