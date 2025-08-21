// src/components/Header.tsx
import React from 'react';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-10 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">InkWell AI</div>
        <nav className="flex items-center space-x-6">
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
          <a href="#" className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors">
            Sign In
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

