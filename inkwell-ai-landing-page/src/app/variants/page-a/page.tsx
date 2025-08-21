// src/app/variants/page-a/page.tsx
"use client";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SocialProof from "@/components/SocialProof";
import Footer from "@/components/Footer";

export default function PageA() {
  const handleCtaClick = async () => {
    await fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ variant: 'A' }),
    });
    alert("Conversion tracked for Variant A!");
  };

  return (
    <main>
      <Header />
      <Hero
        headline="释放你的创作潜力，用 AI 驱动的写作助手"
        subheadline="告别写作障碍，将您的想法以前所未有的速度转化为精彩内容。"
        onCtaClick={handleCtaClick}
      />
      <Features />
      <SocialProof />
      <Footer />
    </main>
  );
}

