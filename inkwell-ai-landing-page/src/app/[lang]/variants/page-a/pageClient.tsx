// src/app/[lang]/variants/page-a/pageClient.tsx
"use client";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SocialProof from "@/components/SocialProof";
import Footer from "@/components/Footer";
import { useT } from "@/i18n";

export default function PageAClient() {
  const t = useT();
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
      <Hero headline={t.variants.A.headline} subheadline={t.variants.A.subheadline} onCtaClick={handleCtaClick} />
      <Features />
      <SocialProof />
      <Footer />
    </main>
  );
}

