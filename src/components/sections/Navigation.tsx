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
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass border-b border-foreground/5 py-3 shadow-sm'
            : 'bg-transparent py-5'
        }`}
      >
        <nav className="w-[92vw] max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="text-foreground font-bold text-xl tracking-tight"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            iknowdata<span className="text-emerald-500">.in</span>
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
                className="nav-link text-foreground/80 hover:text-emerald-400 text-sm font-medium transition-colors"
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
              className="inline-flex items-center gap-2 bg-emerald-500 text-background px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-emerald-400 transition-colors shadow-[0_4px_14px_rgba(16,185,129,0.39)]"
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
                className="text-foreground text-3xl font-bold tracking-tight hover:text-emerald-400 transition-colors"
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
              className="inline-flex items-center gap-2 bg-emerald-500 text-background px-8 py-3 rounded-full text-lg font-semibold mt-4 shadow-[0_4px_14px_rgba(16,185,129,0.39)]"
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
