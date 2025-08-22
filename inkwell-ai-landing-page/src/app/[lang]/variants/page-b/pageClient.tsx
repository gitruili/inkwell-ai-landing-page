// src/app/[lang]/variants/page-b/pageClient.tsx
"use client";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SocialProof from "@/components/SocialProof";
import Footer from "@/components/Footer";
import { useT } from "@/i18n";

export default function PageBClient() {
  const t = useT();
  const handleCtaClick = async () => {
    await fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ variant: 'B' }),
    });
    alert("Conversion tracked for Variant B!");
  };

  return (
    <main id="main">
      <Header />
      <Hero headline={t.variants.B.headline} subheadline={t.variants.B.subheadline} onCtaClick={handleCtaClick} />
      <Features />
      <SocialProof />
      <Footer />
    </main>
  );
}
