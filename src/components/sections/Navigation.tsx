'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Work', href: '#stats' },
  { label: 'Contact', href: '#cta' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, x: '-50%' }}
        animate={{ y: 0, x: '-50%' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-4 md:top-6 left-1/2 z-50 transition-all duration-300 w-[95vw] md:w-auto rounded-full border ${
          scrolled
            ? 'bg-background/50 backdrop-blur-2xl border-foreground/10 shadow-lg py-2 md:py-3'
            : 'bg-background/20 backdrop-blur-xl border-foreground/10 py-3 md:py-4'
        }`}
      >
        <nav className="mx-auto px-4 md:px-6 flex items-center justify-between gap-8 lg:gap-14">
          {/* Logo */}
          <a
            href="/"
            className="text-foreground font-bold text-xl tracking-tight"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Cognisa<span className="text-indigo-500">.</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="nav-link text-foreground/80 hover:text-indigo-500 text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#cta"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#cta');
              }}
              className="inline-flex items-center gap-2 bg-indigo-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-indigo-600 transition-colors shadow-[0_4px_14px_rgba(99,102,241,0.35)]"
            >
              Start a Project
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="text-foreground text-3xl font-bold tracking-tight hover:text-indigo-500 transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#cta"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#cta');
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: navLinks.length * 0.08, duration: 0.4 }}
              className="inline-flex items-center gap-2 bg-indigo-500 text-white px-8 py-3 rounded-full text-lg font-semibold mt-4 shadow-[0_4px_14px_rgba(99,102,241,0.35)]"
            >
              Start a Project
              <ArrowUpRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
