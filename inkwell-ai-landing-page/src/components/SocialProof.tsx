// src/components/SocialProof.tsx
import React from 'react';

const TestimonialCard = ({ quote, name, title }: { quote: string; name: string; title: string }) => (
    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <p className="text-gray-700 mb-4">“{quote}”</p>
        <div className="font-semibold text-gray-900">{name}</div>
        <div className="text-sm text-gray-500">{title}</div>
    </div>
);

const SocialProof = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">深受创作者信赖</h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <TestimonialCard quote="InkWell AI 帮我节省了 50% 的写作时间！" name="Anna Bell" title="内容营销经理" />
          <TestimonialCard quote="这是我用过最流畅的写作工具，强烈推荐。" name="Mark Chen" title="自由撰稿人" />
          <TestimonialCard quote="从构思到成稿，AI 给了我源源不断的灵感。" name="Sophia Lee" title="技术博主" />
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
