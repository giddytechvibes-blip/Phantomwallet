// components/sections/TradingSection.tsx
import React from 'react';

const TradingSection = () => {
  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Trading tools for everyone
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div className="bg-gray-900 p-8 rounded-2xl">
            <h3 className="text-xl text-white mb-4">Buy and sell all types of crypto in an instant.</h3>
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-gray-400">Bought 1.40 of SOL</p>
              <p className="text-2xl text-white">$200 ~ 1.40 SOL</p>
            </div>
          </div>
          
          <div className="bg-gray-900 p-8 rounded-2xl">
            <h3 className="text-xl text-white mb-4">Find trending tokens, top traders, and apps.</h3>
            <div className="flex space-x-4 mb-4">
              <span className="bg-purple-600 text-white px-3 py-1 rounded-full">Traders</span>
              <span className="bg-gray-800 text-white px-3 py-1 rounded-full">Tokens</span>
            </div>
            <p className="text-green-400">Payout Claimed</p>
          </div>
        </div>
        
        <div className="mt-12 bg-gray-900 p-8 rounded-2xl">
          <h3 className="text-xl text-white mb-4">Trade big moments in culture with Prediction Markets.</h3>
          <div className="flex space-x-4">
            <button className="bg-red-600 text-white px-8 py-3 rounded-lg">no</button>
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg">yes</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingSection;