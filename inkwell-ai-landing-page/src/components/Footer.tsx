// src/components/Footer.tsx
import React from 'react';
import { useT } from '@/i18n';

const Footer = () => {
  const t = useT();
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500">
        <p>{t.footer.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
