// src/contexts/LocaleContext.tsx
"use client";
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

export type Locale = 'en' | 'zh';

type LocaleContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');

  // Initialize from cookie
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const match = document.cookie.match(/(?:^|; )lang=([^;]+)/);
      const fromCookie = match ? decodeURIComponent(match[1]) : undefined;
      if (fromCookie === 'en' || fromCookie === 'zh') {
        setLocaleState(fromCookie);
      } else {
        setLocaleState('en');
      }
    }
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    // Persist for 1 year
    const maxAge = 60 * 60 * 24 * 365;
    document.cookie = `lang=${encodeURIComponent(l)}; Path=/; Max-Age=${maxAge}`;
  };

  const value = useMemo(() => ({ locale, setLocale }), [locale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider');
  return ctx;
}

