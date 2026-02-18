// components/sections/SecuritySection.tsx
import React from 'react';

const SecuritySection = () => {
  const features = [
    {
      title: "Self-custodial means you control your funds",
      description: "We never have access."
    },
    {
      title: "Our global Support team is here for you 24/7",
      description: ""
    },
    {
      title: "Scam detection flags malicious transactions instantly",
      description: ""
    }
  ];

  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Controlled by you, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">secured by us</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-900 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              {feature.description && (
                <p className="text-gray-400">{feature.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;