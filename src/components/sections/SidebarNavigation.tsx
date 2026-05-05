'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home as HomeIcon, LayoutGrid, Cog, FolderOpen, Mail } from 'lucide-react';

const sidebarIcons = [
  { icon: HomeIcon, label: 'Home', id: 'hero' },
  { icon: LayoutGrid, label: 'Services', id: 'services' },
  { icon: Cog, label: 'Approach', id: 'solutions' },
  { icon: FolderOpen, label: 'Work', id: 'work' },
  { icon: Mail, label: 'Contact', id: 'cta' },
];

export default function SidebarNavigation() {
  const [activeId, setActiveId] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // We only care about intersecting entries to update the active state
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-30% 0px -70% 0px', // Trigger when section is near top half of screen
      }
    );

    // Give it a tiny timeout to ensure DOM is ready
    setTimeout(() => {
      sidebarIcons.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    }, 100);

    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    setActiveId(id); // Optimistically update
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.aside
      layout
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="hidden lg:flex fixed left-6 top-6 bottom-6 z-50 flex-col items-center py-8 px-3 glass-panel border border-white/20 shadow-2xl rounded-[2rem] justify-between overflow-hidden"
    >
      {/* Logo Area */}
      <div 
        className="cursor-pointer group flex flex-col items-center gap-1 mb-2"
        onClick={() => handleClick('hero')}
      >
        <span className="font-bold text-lg lg:text-xl tracking-tight text-foreground transition-transform group-hover:scale-105">
          Cognisa<span className="text-indigo-500">.</span>
        </span>
      </div>

      {/* Navigation Icons */}
      <div className="flex flex-col gap-4 w-full">
        {sidebarIcons.map(({ icon: Icon, label, id }) => {
          const isActive = activeId === id;
          return (
            <motion.button
              key={id}
              layout
              onClick={() => handleClick(id)}
              className={`relative flex items-center gap-3 px-3 py-3 rounded-2xl transition-colors duration-300 ${
                isActive
                  ? 'bg-indigo-500/10 text-indigo-500 border border-indigo-500/20 shadow-[inset_0_1px_2px_rgba(255,255,255,0.8)]'
                  : 'text-foreground/40 hover:text-foreground/80 hover:bg-foreground/5 border border-transparent'
              }`}
              title={label}
            >
              <Icon className="w-5 h-5 shrink-0" strokeWidth={isActive ? 2.5 : 2} />
              
              <AnimatePresence>
                {isActive && (
                  <motion.span
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 'auto', opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden whitespace-nowrap text-sm font-bold pr-2"
                  >
                    {label}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          );
        })}
      </div>

      {/* Bottom Logo */}
      <div className="w-10 h-10 rounded-2xl bg-indigo-500 flex items-center justify-center text-white font-bold text-xl shadow-[0_4px_14px_rgba(99,102,241,0.4)] border border-indigo-400/30">
        C
      </div>
    </motion.aside>
  );
}
