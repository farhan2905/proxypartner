'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionTag from '@/components/shared/SectionTag';
import { ShieldCheck, Target, TrendingUp, Users } from 'lucide-react';

const solutions = [
  {
    icon: Target,
    title: 'We speak human, not jargon',
    description: 'No confusing acronyms or bloated tech talk — just clear, plain-English explanations of how the software will solve your actual business problems.',
  },
  {
    title: 'We build for business results',
    icon: TrendingUp,
    description: "We don't build shiny tools just for the sake of it. Every line of code or automation we write is designed to save you time or increase your bottom line.",
  },
  {
    title: 'We pick the right tools',
    icon: ShieldCheck,
    description: 'With hands-on experience across modern development and AI, we bypass the hype and select the exact technology that fits your budget and goals.',
  },
  {
    title: 'Your dedicated tech partner',
    icon: Users,
    description: 'From the first blueprint to managing the servers long after launch, we handle all the technical heavy lifting so you can focus on running your business.',
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
    <section ref={ref} className="bg-[#141c24] py-16 md:py-24 relative overflow-hidden" id="solutions">
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
            Removing the technical roadblocks to your <mark className="text-[#e4fe7b] bg-transparent">growth.</mark>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-white/70 text-lg"
          >
            It&apos;s easy to get overwhelmed by "AI integrations," "cloud servers," and confusing software agency pitches. We filter out the tech jargon, focus entirely on what your business actually needs, and build systems that just work.
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
                className="glass-panel p-6 md:p-8 rounded-3xl border border-white/8 hover:border-[#e4fe7b]/30 transition-all duration-500 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#e4fe7b]/10 transition-all duration-300">
                  <Icon className="w-6 h-6 text-white group-hover:text-[#e4fe7b] transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#e4fe7b] transition-colors">
                  {solution.title}
                </h3>
                <p className="text-white/70 leading-relaxed text-lg">
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
