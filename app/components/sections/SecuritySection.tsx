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
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Controlled by you, <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400">secured by us</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-100 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              {feature.description && (
                <p className="text-gray-700">{feature.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;