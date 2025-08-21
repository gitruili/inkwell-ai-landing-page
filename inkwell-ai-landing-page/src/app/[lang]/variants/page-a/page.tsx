// src/app/[lang]/variants/page-a/page.tsx
import type { Metadata } from 'next';
import PageAClient from './pageClient';

export async function generateMetadata({ params }: { params: Promise<{ lang: 'en' | 'zh' }> }): Promise<Metadata> {
  const { lang: raw } = await params;
  const lang = raw === 'zh' ? 'zh' : 'en';
  return {
    alternates: {
      canonical: `/${lang}/variants/page-a`,
      languages: {
        en: '/en/variants/page-a',
        zh: '/zh/variants/page-a',
        'x-default': '/en/variants/page-a',
      },
    },
  };
}

export default function PageA() {
  return <PageAClient />;
}
