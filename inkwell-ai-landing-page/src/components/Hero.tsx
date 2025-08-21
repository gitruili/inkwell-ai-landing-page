// src/components/Hero.tsx
"use client";
import React from 'react';

interface HeroProps {
  headline: string;
  subheadline: string;
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ headline, subheadline, onCtaClick }) => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center bg-gray-50 overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
          {headline}
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          {subheadline}
        </p>
        <button 
          onClick={onCtaClick}
          className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-transform transform hover:scale-105"
        >
          Start Free Trial
        </button>
      </div>
    </section>
  );
};

export default Hero;

