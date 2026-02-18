// components/Layout/Footer.tsx
import React from 'react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Product',
      links: ['Download', 'Security', 'Support', 'Feature Requests']
    },
    {
      title: 'Resources',
      links: ['Explore', 'Learn', 'Blog', 'Docs', 'Taxes']
    },
    {
      title: 'Company',
      links: ['About', 'Careers', 'Press Kit']
    },
    {
      title: 'Socials',
      links: ['X.com', 'LinkedIn', 'Instagram', 'YouTube', 'Reddit', 'Podcast']
    }
  ];

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Newsletter Section */}
        <div className="mb-12">
          <h3 className="text-white text-lg font-medium mb-4">Enter your email</h3>
          <p className="text-gray-400 mb-4">
            Sign up for our newsletter and join the growing Phantom community.
          </p>
          <div className="flex max-w-md">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-gray-900 text-white px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-black px-6 py-3 rounded-r-lg font-medium hover:bg-gray-200 transition-colors">
              Sign up
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-medium mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <div className="flex items-center space-x-2">
            <span>Operational</span>
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span>© Phantom 2026</span>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;