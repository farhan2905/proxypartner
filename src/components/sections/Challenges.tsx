'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionTag from '@/components/shared/SectionTag';

const categories = [
  {
    title: 'Strategy & Brand',
    questions: [
      'What risks should I prepare for?',
      'How do I build a strong brand?',
      'Which marketing channels should I focus on first?',
      'How do I stand out from competitors?',
    ],
  },
  {
    title: 'Growth & Revenue',
    questions: [
      "What's the best way to price my services?",
      'How do I scale without losing quality?',
      'Who is my ideal customer?',
      'How do I know if my strategy will work?',
    ],
  },
  {
    title: 'Tech & Operations',
    questions: [
      'Do I need AI for my business?',
      'How do I build a website that converts?',
      'What technology stack should I use?',
      'How do I automate repetitive tasks?',
    ],
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Challenges() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="bg-[#f5f7f2] py-16 md:py-24" id="challenges">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Left Column - Heading */}
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <SectionTag text="THE CHALLENGE" variant="light" />
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="text-3xl md:text-4xl font-bold text-[#1a2332] leading-tight tracking-tight mt-6 mb-6"
              >
                Questions we hear <mark className="bg-[#e4fe7b] px-2 rounded-lg">every day.</mark>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="text-[#3d5a47] text-lg leading-relaxed max-w-md"
              >
                Every business faces hurdles. Here are the questions our clients bring to us — and the clarity we provide to help them scale without the guesswork.
              </motion.p>
            </div>
          </div>

          {/* Right Column - Questions List */}
          <div className="lg:col-span-7 lg:pl-12">
            <div className="flex flex-col gap-12">
              {categories.map((category, catIdx) => (
                <motion.div
                  key={category.title}
                  custom={catIdx}
                  variants={itemVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="border-t border-[#1a2332]/10 pt-8"
                >
                  <h3 className="text-2xl font-bold text-[#1a2332] mb-6">
                    {category.title}
                  </h3>
                  <ul className="space-y-4">
                    {category.questions.map((question, qIdx) => (
                      <li key={qIdx} className="flex items-start gap-4 group cursor-default">
                        <span className="font-mono text-sm text-[#3d5a47]/50 mt-1.5 transition-colors group-hover:text-[#e4fe7b]">
                          Q{String(qIdx + 1 + (catIdx * 4)).padStart(2, '0')}
                        </span>
                        <p className="text-lg text-[#3d5a47] group-hover:text-[#1a2332] transition-colors">
                          {question}
                        </p>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
