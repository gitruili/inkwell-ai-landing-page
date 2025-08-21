// src/components/SocialProof.tsx
import React from 'react';
import { useT } from '@/i18n';

const TestimonialCard = ({ quote, name, title }: { quote: string; name: string; title: string }) => (
    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <p className="text-gray-700 mb-4">“{quote}”</p>
        <div className="font-semibold text-gray-900">{name}</div>
        <div className="text-sm text-gray-500">{title}</div>
    </div>
);

const SocialProof = () => {
  const t = useT();
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">{t.socialProof.title}</h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {t.socialProof.items.map((it, i) => (
            <TestimonialCard key={i} quote={it.quote} name={it.name} title={it.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
