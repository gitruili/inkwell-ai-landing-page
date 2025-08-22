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
    <>
      {/* Skip link for keyboard users */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:shadow"
      >
        Skip to content
      </a>
      <header className="fixed top-0 left-0 w-full z-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl mt-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-neutral-900/50 backdrop-blur-md shadow-sm">
          <div className="px-6 py-4 flex justify-between items-center">
            <a href="/" className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white">
              {t.header.brand}
            </a>
            <nav aria-label="Primary" className="flex items-center gap-4 sm:gap-6 text-sm">
              <a href="#" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors text-sm">
                {t.header.pricing}
              </a>
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
              className="inline-flex items-center justify-center rounded-md border border-slate-300/70 dark:border-white/15 bg-white/60 dark:bg-white/5 px-2.5 py-1.5 text-xs font-medium text-slate-800 dark:text-gray-200 hover:bg-white/80 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle language"
            >
              {langLabel}
            </button>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md bg-slate-900 text-white px-3.5 py-2 text-sm font-medium shadow hover:bg-slate-800 transition-colors"
            >
              {t.header.signIn}
            </a>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
