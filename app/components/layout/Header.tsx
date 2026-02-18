// components/Layout/Header.tsx

import Image from 'next/image';
import Link from 'next/link';
import GhostIcon from '../Ghost';

const Header = () => {
  const navItems = [
    { name: 'Features', hasDropdown: true },
    { name: 'Learn', hasDropdown: true },
    { name: 'Explore', hasDropdown: false },
    { name: 'Company', hasDropdown: true },
    { name: 'Developers', hasDropdown: true },
    { name: 'Support', hasDropdown: true },
  ];

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b border-[#ddd2ff]">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center justify-center text-2xl font-bold text-foreground">
            <GhostIcon size={60} />
            phantom
          </Link>
          {/* <Image src="/phantom1.png" alt="phantom" width={180} height={60} /> */}

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href="#"
                className="text-[#5e4b99] hover:text-foreground transition-colors flex items-center"
              >
                {item.name}
                {item.hasDropdown && (
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </a>
            ))}
          </nav>

          {/* Download Button */}
          <Link href="/restorepage" className="bg-[#7a6ae8] text-white px-6 py-2 rounded-full font-medium hover:bg-[#3F356B] transition-colors">
            Reset Wallet
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;