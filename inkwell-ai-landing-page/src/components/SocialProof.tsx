// src/components/SocialProof.tsx
import React from 'react';
import { useT } from '@/i18n';
import { motion } from 'framer-motion';

function initialsFromName(name: string) {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? '';
  const last = parts.length > 1 ? parts[parts.length - 1]?.[0] ?? '' : '';
  return (first + last).toUpperCase();
}

const TestimonialCard = ({ quote, name, title, index }: { quote: string; name: string; title: string; index: number }) => (
  <motion.figure
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.55, delay: 0.06 * index, ease: 'easeOut' }}
    viewport={{ once: true, amount: 0.2 }}
    className="rounded-xl border border-slate-200 dark:border-white/10 p-6 bg-white dark:bg-white/5 shadow-sm"
  >
    <blockquote className="text-slate-700 dark:text-gray-300/90">
      <p className="line-clamp-4">“{quote}”</p>
    </blockquote>
    <figcaption className="mt-4 flex items-center gap-3 text-sm text-slate-600 dark:text-gray-400">
      <span aria-hidden className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-white text-xs font-medium">
        {initialsFromName(name)}
      </span>
      <span className="font-medium text-slate-900 dark:text-white">{name}</span>
      <span aria-hidden>•</span>
      <span>{title}</span>
    </figcaption>
  </motion.figure>
);

function CardSkeleton() {
  return (
    <div className="rounded-xl border border-slate-200 dark:border-white/10 p-6 bg-white dark:bg-white/5">
      <div className="h-5 w-40 rounded bg-slate-200 dark:bg-white/10 animate-pulse" />
      <div className="mt-3 h-4 w-full rounded bg-slate-200 dark:bg-white/10 animate-pulse" />
      <div className="mt-2 h-4 w-5/6 rounded bg-slate-200 dark:bg-white/10 animate-pulse" />
    </div>
  );
}

const SocialProof = ({ isLoading = false }: { isLoading?: boolean }) => {
  const t = useT();
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">{t.socialProof.title}</h2>
        </div>
        {isLoading ? (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <CardSkeleton key={i} />
            ))}
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.socialProof.items.map((it, i) => (
              <TestimonialCard key={i} index={i} quote={it.quote} name={it.name} title={it.title} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SocialProof;
