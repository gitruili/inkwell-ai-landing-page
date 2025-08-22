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
    <header className="fixed top-0 left-0 w-full z-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl mt-4 rounded-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-neutral-900/50 backdrop-blur-md shadow-sm">
        <div className="px-6 py-4 flex justify-between items-center">
          <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-slate-900 to-blue-600 bg-clip-text text-transparent dark:from-white dark:to-blue-400">
            {t.header.brand}
          </div>
          <nav className="flex items-center gap-4 sm:gap-6">
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
              className="inline-flex items-center justify-center rounded-md border border-gray-300/70 dark:border-white/15 bg-white/60 dark:bg-white/5 px-2.5 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-200 hover:bg-white/80 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle language"
            >
              {langLabel}
            </button>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3.5 py-2 text-sm font-medium shadow-sm hover:shadow-md hover:brightness-110 transition-all"
            >
              {t.header.signIn}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
