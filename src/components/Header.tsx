import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Crypto', href: '#hero' },
  { label: 'Narratives', href: '#narratives' },
  { label: 'Fundamentals', href: '#fundamentals' },
  { label: 'Opportunity', href: '#opportunity' },
  { label: 'Thanks', href: '#contact' },
  { label: '.pdf', href: '#pdf-actions' }
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth'
    });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-black/20 border-b border-white/10">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-white/10 flex-shrink-0">
            <img
              src="https://i.ibb.co/Y0Tb2Zb/bull1.png"
              alt="Bull Logo"
              className="w-full h-full object-cover"
            />
          </div>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <ul className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className="text-white/80 hover:text-white text-shadow text-sm font-medium transition-colors flex items-center gap-1"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <ul className="pt-4 pb-2 space-y-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="text-white/80 hover:text-white text-shadow text-base font-medium transition-colors w-full text-left flex items-center gap-1"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
