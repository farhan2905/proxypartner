'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Target,
  Zap,
  BarChart3,
  Lightbulb,
} from 'lucide-react';
import SectionTag from '@/components/shared/SectionTag';

const benefits = [
  {
    icon: Target,
    title: 'Architecture First',
    description: 'Every system is designed with robust architecture for maximum scalability and performance.',
  },
  {
    icon: Zap,
    title: 'Rapid Execution',
    description: 'Agile development cycles that deliver fully functional software without compromising quality.',
  },
  {
    icon: BarChart3,
    title: 'Automated Workflows',
    description: 'Replace manual tasks with intelligent AI agents and seamless data integrations.',
  },
  {
    icon: Lightbulb,
    title: 'Code Quality',
    description: 'Clean, maintainable, and modern codebases that future-proof your digital product.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      ref={ref}
      className="relative bg-transparent py-16 md:py-24 overflow-hidden"
    >
      <div className="w-[92vw] max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 md:mb-20">
          {/* Left: Heading */}
          <div>
            <SectionTag text="WHY CHOOSE US" variant="light" />
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight"
            >
              We don&apos;t just write code. We build{' '}
              <span className="bg-emerald-500 text-background px-2 rounded-lg">systems</span> that scale.
            </motion.h2>
          </div>

          {/* Right: Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-end"
          >
            <p className="text-foreground/80 text-lg md:text-xl leading-relaxed">
              Managed solely by the founder of <strong>iknowdata.in</strong>, we specialize in delivering high-performance custom web applications and AI-driven automation. We partner closely with businesses to transform manual bottlenecks into scalable, automated tech solutions.
            </p>
          </motion.div>
        </div>

        {/* Benefit Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                className="glass-card rounded-2xl p-5 md:p-6 group hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-5 group-hover:bg-emerald-500/20 transition-colors border border-emerald-500/20">
                  <Icon className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-foreground font-bold text-lg mb-3">
                  {benefit.title}
                </h3>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
