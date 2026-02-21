// components/sections/StatsSection.tsx
import React from 'react';

const StatsSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-2xl md:text-3xl text-gray-900">
          Trusted by a community of{' '}
          <span className="font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400">
            20+ million users
          </span>
        </p>
        <p className="text-xl text-gray-700 mt-2">It's more than a wallet.</p>
        <p className="text-lg text-gray-600 mt-8">Get started. Download Phantom.</p>
      </div>
    </section>
  );
};
 
export default StatsSection;