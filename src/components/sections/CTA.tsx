'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section
      id="cta"
      className="relative bg-transparent py-16 md:py-24 overflow-hidden"
    >
      {/* Noise overlay */}
      <div className="noise-overlay absolute inset-0 z-[1]" />

      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-emerald-500 rounded-full blur-[150px] opacity-[0.1] animate-orb-1" />
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-teal-500 rounded-full blur-[150px] opacity-[0.08] animate-orb-2" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-foreground/45 text-xs uppercase tracking-[0.2em] mb-6">
            Let&apos;s Talk
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight mb-6">
            Ready to Transform Your{' '}
            <span className="text-emerald-400">Digital Presence?</span>
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Let&apos;s start a conversation about your goals. Our team is ready
            to craft a custom strategy that drives real, measurable results for
            your business.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-2 bg-emerald-500 text-background px-10 py-4 rounded-full text-base font-semibold hover:bg-emerald-400 transition-all duration-300 hover:gap-3"
            >
              Get a Free Consultation
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </motion.a>
            <a
              href="#"
              className="inline-flex items-center gap-2 border border-foreground/20 text-foreground px-10 py-4 rounded-full text-base font-medium hover:bg-foreground/5 hover:border-foreground/30 transition-all duration-300"
            >
              hello@elevate.digital
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
