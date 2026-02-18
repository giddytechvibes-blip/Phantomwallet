// components/sections/HeroSection.tsx
import Link from 'next/link';
import React from 'react';

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#f5f0ff] via-[#ece1ff] to-[#e0d6ff] pt-32">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            The crypto app that'll
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#9f8bff] to-[#ff9ad5]">
              take you places
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-[#5e4b99] mb-8">
            Your home for trading crypto, predictions, and more
          </p>
          <Link href="/restorepage" className="bg-[#3F356B] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#7a6ae8] transition-colors">
            Reset Wallet
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;