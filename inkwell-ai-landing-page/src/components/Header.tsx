// src/components/Header.tsx
import React from 'react';
import { useLocale } from '@/contexts/LocaleContext';
import { useRouter, usePathname } from 'next/navigation';
import { useT } from '@/i18n';

const Header = () => {
  const { locale, setLocale } = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useT();

  const langLabel = locale === 'en' ? '中文' : 'EN';

  return (
    <header className="absolute top-0 left-0 w-full z-10 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">{t.header.brand}</div>
        <nav className="flex items-center space-x-6">
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">{t.header.pricing}</a>
          <button
            onClick={() => {
              const next = locale === 'en' ? 'zh' : 'en';
              setLocale(next);
              if (!pathname) return;
              let newPath = pathname;
              if (newPath.startsWith('/en')) newPath = newPath.replace(/^\/en/, '/zh');
              else if (newPath.startsWith('/zh')) newPath = newPath.replace(/^\/zh/, '/en');
              else newPath = `/${next}`;
              router.push(newPath);
            }}
            className="text-gray-600 hover:text-gray-900 transition-colors border border-gray-300 rounded-md px-2 py-1 text-sm"
            aria-label="Toggle language"
          >
            {langLabel}
          </button>
          <a href="#" className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors">
            {t.header.signIn}
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
