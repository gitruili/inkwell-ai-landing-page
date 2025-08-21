// src/app/[lang]/variants/page-b/page.tsx
import type { Metadata } from 'next';
import PageBClient from './pageClient';

export async function generateMetadata({ params }: { params: Promise<{ lang: 'en' | 'zh' }> }): Promise<Metadata> {
  const { lang: raw } = await params;
  const lang = raw === 'zh' ? 'zh' : 'en';
  return {
    alternates: {
      canonical: `/${lang}/variants/page-b`,
      languages: {
        en: '/en/variants/page-b',
        zh: '/zh/variants/page-b',
        'x-default': '/en/variants/page-b',
      },
    },
  };
}

export default function PageB() {
  return <PageBClient />;
}
