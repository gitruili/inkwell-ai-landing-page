// src/components/Hero.tsx
"use client";
import React from 'react';
import { useT } from '@/i18n';
import { motion } from 'framer-motion';

interface HeroProps {
  headline: string;
  subheadline: string;
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ headline, subheadline, onCtaClick }) => {
  const t = useT();
  const cta = t.hero.cta;

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center text-center overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-neutral-900 dark:to-neutral-950">
      <div className="pointer-events-none absolute -top-32 -left-32 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.25),transparent_60%)] blur-3xl animate-[floaty_16s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute -bottom-40 -right-32 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.22),transparent_60%)] blur-3xl animate-[floaty_18s_ease-in-out_infinite_reverse]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 pt-28">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-slate-900 to-indigo-700 dark:from-white dark:to-indigo-400 mb-4 leading-tight"
        >
          {headline}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300/90 mb-8"
        >
          {subheadline}
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          onClick={onCtaClick}
          className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 transition-shadow"
        >
          {cta}
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
