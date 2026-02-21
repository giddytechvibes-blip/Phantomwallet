// components/sections/PhantomCashSection.tsx
import React from 'react';

const PhantomCashSection = () => {
  return (
    <section className="bg-white py-12">
      <div className="px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Meet <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-green-400">Phantom Cash</span>
        </h2>

        <div className="space-y-6 mt-6">
          <div>
            <h3 className="text-lg text-gray-900 mb-4">One home for all of your cash and crypto.</h3>
            <div className="bg-gray-100 p-5 rounded-xl mb-4">
              <p className="text-gray-600 text-sm mb-1">My Balance</p>
              <p className="text-3xl font-bold text-gray-900">$18,207.41</p>
            </div>
            <p className="text-sm text-gray-700">
              Fund with tokens or your paycheck. Even pay friends.
            </p>
          </div>

          <div className="bg-gray-100 p-5 rounded-xl">
            <p className="text-sm text-gray-700 mb-4">
              Spend wherever Apple Pay, Google Pay, or VISA is accepted.
            </p>
            <div className="flex space-x-3">
              <button className="flex-1 bg-black text-white py-2.5 rounded-lg text-sm font-medium">
                Receive
              </button>
              <button className="flex-1 bg-black text-white py-2.5 rounded-lg text-sm font-medium">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhantomCashSection;