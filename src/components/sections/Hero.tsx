'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, Sparkles, Zap, Code } from 'lucide-react';

const headingWords = ['We', 'think,', 'you', 'grow', '—', "that's", 'the', 'deal.'];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
};

const wordVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    filter: 'blur(10px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};



export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const ringRotation = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const ringScale = useTransform(scrollYProgress, [0, 1], [1, 1.6]);
  const ringRotation2 = useTransform(scrollYProgress, [0, 1], [45, -135]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.2], [0, -60]);

  // Step-by-step fades
  const badgeOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);
  const paragraphOpacity = useTransform(scrollYProgress, [0.03, 0.12], [1, 0]);
  const buttonsOpacity = useTransform(scrollYProgress, [0.06, 0.15], [1, 0]);

  return (
    <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center bg-transparent overflow-hidden pt-32 pb-24 lg:pt-0 lg:pb-0">
      {/* Decorative gradient orbs — lavender/indigo */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-indigo-100 rounded-full blur-[120px] opacity-[0.30] animate-orb-1" />
      <div className="absolute bottom-1/4 right-0 w-[350px] h-[350px] md:w-[500px] md:h-[500px] bg-violet-50 rounded-full blur-[120px] opacity-[0.25] animate-orb-2" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djI2SDI0VjM0SDBWMjRoMjRWMGgxMnYyNGgyNHYxMEgzNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-[0.15] pointer-events-none" />

      {/* Rolling Circle Decoration — indigo accents */}
      <motion.div
        style={{ rotate: ringRotation, scale: ringScale }}
        className="absolute top-1/2 right-0 md:right-[5%] -translate-y-1/2 w-[350px] h-[350px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] pointer-events-none z-[2]"
      >
        <svg viewBox="0 0 400 400" className="w-full h-full" fill="none">
          {/* Outer ring */}
          <circle cx="200" cy="200" r="190" stroke="rgba(99,102,241,0.12)" strokeWidth="1" />
          {/* Dashed ring */}
          <circle cx="200" cy="200" r="160" stroke="rgba(99,102,241,0.08)" strokeWidth="1" strokeDasharray="8 16" />
          {/* Inner ring */}
          <circle cx="200" cy="200" r="130" stroke="rgba(92,99,120,0.08)" strokeWidth="1" />
          {/* Dot markers on outer ring */}
          <circle cx="200" cy="10" r="3" fill="rgba(99,102,241,0.4)" />
          <circle cx="390" cy="200" r="3" fill="rgba(99,102,241,0.3)" />
          <circle cx="200" cy="390" r="3" fill="rgba(92,99,120,0.3)" />
          <circle cx="10" cy="200" r="3" fill="rgba(99,102,241,0.3)" />
          {/* Cross lines through center */}
          <line x1="200" y1="70" x2="200" y2="330" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          <line x1="70" y1="200" x2="330" y2="200" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          {/* Inner decorative ring */}
          <circle cx="200" cy="200" r="80" stroke="rgba(99,102,241,0.05)" strokeWidth="0.5" strokeDasharray="4 8" />
        </svg>
      </motion.div>

      {/* Second smaller spinning ring — opposite direction */}
      <motion.div
        style={{ rotate: ringRotation2 }}
        className="absolute bottom-[15%] left-[8%] md:left-[10%] w-[120px] h-[120px] md:w-[180px] md:h-[180px] pointer-events-none z-[2]"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
          <circle cx="100" cy="100" r="90" stroke="rgba(92,99,120,0.1)" strokeWidth="1" />
          <circle cx="100" cy="100" r="70" stroke="rgba(99,102,241,0.06)" strokeWidth="0.5" strokeDasharray="6 12" />
        </svg>
      </motion.div>

      <motion.div 
        style={{ y: contentY }}
        className="relative z-20 w-[92vw] max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20"
      >
        {/* Left Content Area */}
        <div className="hidden lg:block lg:w-1/2 text-left pt-12 lg:pt-0">
          {/* Status Badge */}
          <motion.div
            style={{ opacity: badgeOpacity }}
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-3 glass-card px-5 py-2 rounded-full mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
            <span className="text-foreground font-bold text-xs tracking-widest uppercase opacity-80">
              SOFTWARE · DEVELOPMENT · AUTOMATION · AI
            </span>
          </motion.div>

          {/* Word-by-word hero heading */}
          <motion.div style={{ opacity: headingOpacity }}>
            <motion.h1
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-[clamp(2rem,5vw,4.5rem)] font-bold text-transparent bg-clip-text bg-gradient-to-br from-foreground to-foreground/70 leading-tight tracking-[-0.03em] mb-6 drop-shadow-xl max-w-2xl"
            >
              {headingWords.map((word, index) => (
                <motion.span
                  key={index}
                  variants={wordVariants}
                  className="inline-block whitespace-pre"
                >
                  {word === 'grow' ? (
                    <span className="text-gradient-accent drop-shadow-sm">{word}</span>
                  ) : (
                    word
                  )}
                  {index !== headingWords.length - 1 && ' '}
                </motion.span>
              ))}
            </motion.h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div style={{ opacity: paragraphOpacity }}>
            <motion.p
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-foreground/80 text-base md:text-lg max-w-xl mb-10 leading-relaxed"
            >
              We take your big ideas and turn them into clear, winning software and automation systems. From custom web development to AI-powered solutions, we handle the full spectrum of technical growth.
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div style={{ opacity: buttonsOpacity }}>
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-5"
            >
              <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative inline-flex items-center justify-center gap-2 bg-indigo-500 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-indigo-600 transition-all duration-300 hover:gap-3 shadow-[0_4px_14px_rgba(99,102,241,0.35)] hover:shadow-[0_6px_20px_rgba(99,102,241,0.45)] w-full sm:w-auto"
            >
              Get Started
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group inline-flex items-center justify-center gap-2 glass-panel text-foreground px-8 py-4 rounded-full text-base font-medium transition-all duration-300 w-full sm:w-auto hover:scale-105"
            >
              <div className="bg-foreground/10 p-1.5 rounded-full mr-1">
                <Play className="w-3.5 h-3.5 fill-foreground text-foreground" />
              </div>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/80 font-bold">Our Work</span>
            </a>
          </motion.div>
          </motion.div>
        </div>

        {/* Right Visual Area (Visible on Desktop & Mobile) */}
        <div className="w-full lg:w-1/2 relative h-[500px] lg:h-[600px] flex items-center justify-center">
          {/* Animated Iridescent Blob */}
          <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] iridescent-blob blur-[1px]" />
        </div>
      </motion.div>
      
      {/* Scroll indicator - Only visible on desktop */}
      <motion.div
        style={{ opacity: contentOpacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-indigo-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.8)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
