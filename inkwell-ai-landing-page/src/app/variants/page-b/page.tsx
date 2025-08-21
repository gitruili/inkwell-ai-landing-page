// src/app/variants/page-b/page.tsx
"use client";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SocialProof from "@/components/SocialProof";
import Footer from "@/components/Footer";

export default function PageB() {
  const handleCtaClick = async () => {
    await fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ variant: 'B' }),
    });
    alert("Conversion tracked for Variant B!");
  };

  return (
    <main>
      <Header />
      <Hero
        headline="内容创作提速 10 倍"
        subheadline="我们的 AI 技术能帮助您快速生成高质量初稿，让您专注于核心创意。"
        onCtaClick={handleCtaClick}
      />
      <Features />
      <SocialProof />
      <Footer />
    </main>
  );
}

