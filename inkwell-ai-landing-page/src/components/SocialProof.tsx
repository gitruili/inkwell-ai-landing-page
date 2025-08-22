// src/components/SocialProof.tsx
import React from 'react';
import { useT } from '@/i18n';
import { motion } from 'framer-motion';

const TestimonialCard = ({ quote, name, title, index }: { quote: string; name: string; title: string; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.55, delay: 0.06 * index, ease: 'easeOut' }}
    viewport={{ once: true, amount: 0.2 }}
    className="bg-white/80 dark:bg-white/5 backdrop-blur-md p-6 rounded-xl border border-gray-200/60 dark:border-white/10 shadow-sm"
  >
    <p className="text-gray-700 dark:text-gray-300/90 mb-4">“{quote}”</p>
    <div className="font-semibold text-gray-900 dark:text-white">{name}</div>
    <div className="text-sm text-gray-500 dark:text-gray-400">{title}</div>
  </motion.div>
);

const SocialProof = () => {
  const t = useT();
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">{t.socialProof.title}</h2>
        </div>
        <div className="mt-12 grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {t.socialProof.items.map((it, i) => (
            <TestimonialCard key={i} index={i} quote={it.quote} name={it.name} title={it.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
