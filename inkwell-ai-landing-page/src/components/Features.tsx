// src/components/Features.tsx
import React from 'react';

const FeatureCard = ({ title, description }: { title: string; description: string }) => (
  <div className="bg-white p-6 rounded-lg border border-gray-200">
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    { title: "智能续写", description: "AI 助您文思泉涌，打破写作僵局。" },
    { title: "语法优化", description: "自动校对，提升文章专业度。" },
    { title: "风格调整", description: "轻松切换正式、休闲或创意等多种写作风格。" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">写作从未如此简单</h2>
          <p className="mt-4 text-lg text-gray-600">探索 InkWell AI 的强大功能</p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

