// src/components/Features.tsx
import React from 'react';
import { useT } from '@/i18n';
import { motion } from 'framer-motion';

const FeatureCard = ({ title, description, index }: { title: string; description: string; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.05 * index, ease: 'easeOut' }}
    viewport={{ once: true, amount: 0.3 }}
    className="group bg-white dark:bg-white/5 backdrop-blur-md p-6 rounded-xl border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
 >
    <h3 className="text-lg md:text-xl font-semibold text-slate-900 dark:text-white mb-2">{title}</h3>
    <p className="text-slate-600 dark:text-gray-300/90">{description}</p>
  </motion.div>
);

const Features = () => {
  const t = useT();
  const features = t.features.items;

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">{t.features.title}</h2>
          <p className="mt-3 text-slate-600">{t.features.subtitle}</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} index={index} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
