'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface SectionTagProps {
  text: string;
  variant?: 'light' | 'dark';
  className?: string;
}

export default function SectionTag({ text, variant = 'light', className }: SectionTagProps) {
  const isLight = variant === 'light';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={cn('flex items-center gap-3 mb-6', className)}
    >
      <span className="w-3 h-3 bg-[#e4fe7b] rounded-sm flex-shrink-0" />
      <span
        className={cn(
          'text-xs font-mono uppercase tracking-[0.15em] font-medium',
          isLight ? 'text-[#3d5a47]' : 'text-white/55'
        )}
      >
        {text}
      </span>
      <span
        className={cn(
          'h-px flex-grow max-w-[60px]',
          isLight ? 'bg-[#3d5a47]/30' : 'bg-white/25'
        )}
      />
    </motion.div>
  );
}
