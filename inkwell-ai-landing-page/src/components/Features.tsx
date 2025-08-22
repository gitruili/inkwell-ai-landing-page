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
    className="group bg-white/80 dark:bg-white/5 backdrop-blur-md p-6 rounded-xl border border-gray-200/60 dark:border-white/10 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
 >
    <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300/90">{description}</p>
  </motion.div>
);

const Features = () => {
  const t = useT();
  const features = t.features.items;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">{t.features.title}</h2>
          <p className="mt-4 text-lg text-gray-600">{t.features.subtitle}</p>
        </div>
        <div className="mt-12 grid gap-6 md:gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} index={index} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
