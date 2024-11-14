import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="gradient-section py-6 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/60 text-sm">
          <Link 
            to="/terms"
            className="hover:text-white transition-colors"
          >
            Terms
          </Link>
          <Link 
            to="/empty"
            className="hover:text-white transition-colors cursor-pointer"
          >
            © {new Date().getFullYear()} Radix RadBulls Community. All rights reserved.
          </Link>
          <Link 
            to="/privacy"
            className="hover:text-white transition-colors"
          >
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}