// src/components/Footer.tsx
import React from 'react';
import { useT } from '@/i18n';

const Footer = () => {
  const t = useT();
  return (
    <footer className="relative border-t border-gray-200 dark:border-white/10 bg-white/60 dark:bg-neutral-950/60 backdrop-blur-md">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-600 dark:text-gray-400">
        <p>{t.footer.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
