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
    title: 'Data-Driven Strategy',
    description: 'Every decision backed by analytics and real market data for maximum impact.',
  },
  {
    icon: Zap,
    title: 'Rapid Execution',
    description: 'Agile workflows that deliver results fast without compromising quality.',
  },
  {
    icon: BarChart3,
    title: 'Measurable Growth',
    description: 'Transparent reporting and KPI tracking so you always know your ROI.',
  },
  {
    icon: Lightbulb,
    title: 'Creative Excellence',
    description: 'Award-winning creative that sets your brand apart from the competition.',
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
      className="relative bg-[#ffffe6] py-16 md:py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 md:mb-20">
          {/* Left: Heading */}
          <div>
            <SectionTag text="WHY CHOOSE US" variant="light" />
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1b1c1c] leading-tight tracking-tight"
            >
              We don&apos;t just build brands. We build{' '}
              <mark>legacies</mark> that last.
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
            <p className="text-[#506556] text-lg md:text-xl leading-relaxed">
              Founded in 2019, Elevate Digital has helped over 200 brands scale
              their digital presence and achieve measurable growth. Our team of
              strategists, designers, developers, and marketers work as one to
              deliver exceptional results that exceed expectations.
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
                className="bg-white rounded-2xl p-5 md:p-6 group hover:shadow-xl hover:shadow-[#e4fe7b]/10 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-[#e4fe7b]/20 flex items-center justify-center mb-5 group-hover:bg-[#e4fe7b]/40 transition-colors">
                  <Icon className="w-6 h-6 text-[#1b1c1c]" />
                </div>
                <h3 className="text-[#1b1c1c] font-bold text-lg mb-3">
                  {benefit.title}
                </h3>
                <p className="text-[#506556] text-sm leading-relaxed">
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
