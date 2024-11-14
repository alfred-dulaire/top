import React from 'react';

const navItems = [
  { label: 'Crypto', href: '#hero' },
  { label: 'Narratives', href: '#narratives' },
  { label: 'Fundamentals', href: '#fundamentals' },
  { label: 'Opportunity', href: '#opportunity' },
  { label: 'Thanks', href: '#contact' }
];

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-black/20 border-b border-white/10">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-white/10 flex-shrink-0">
          <img
            src="https://i.ibb.co/Y0Tb2Zb/bull1.png"
            alt="Bull Logo"
            className="w-full h-full object-cover"
          />
        </div>
        <ul className="flex items-center space-x-8 overflow-x-auto">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-white/80 hover:text-white text-shadow text-sm font-medium transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(item.href)?.scrollIntoView({
                    behavior: 'smooth'
                  });
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}