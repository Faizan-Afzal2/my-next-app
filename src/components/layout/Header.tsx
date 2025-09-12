'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-space-gradient backdrop-blur-sm border-b border-secondary/20 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="text-4xl animate-float">🧑‍🚀</div>
              <div>
                <div className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white group-hover:text-secondary transition-colors">
                  <span className="text-cosmic">BOOM</span>ERANG
                </div>
                <div className="font-[family-name:var(--font-accent)] text-xs text-secondary tracking-wider">
                  PAKISTAN
                </div>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="font-[family-name:var(--font-body)] text-white hover:text-secondary transition-colors font-medium">
              Home
            </Link>
            <Link href="/menu" className="font-[family-name:var(--font-body)] text-white hover:text-secondary transition-colors font-medium">
              Menu
            </Link>
            <Link href="/about" className="font-[family-name:var(--font-body)] text-white hover:text-secondary transition-colors font-medium">
              About
            </Link>
            <Link href="/locations" className="font-[family-name:var(--font-body)] text-white hover:text-secondary transition-colors font-medium">
              Locations
            </Link>
            <Link href="/contact" className="font-[family-name:var(--font-body)] text-white hover:text-secondary transition-colors font-medium">
              Contact
            </Link>
          </nav>

          {/* Order Button */}
          <div className="hidden md:block">
            <button className="bg-cosmic-gradient hover:scale-105 transition-transform duration-300 font-[family-name:var(--font-heading)] px-6 py-2 rounded-full border border-secondary/30 text-white font-medium">
              🚀 Order Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-secondary transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-space-gradient/95 backdrop-blur-sm rounded-lg mt-2 border border-secondary/20">
              <Link href="/" className="block px-3 py-2 text-white hover:text-secondary transition-colors font-[family-name:var(--font-body)]">
                Home
              </Link>
              <Link href="/menu" className="block px-3 py-2 text-white hover:text-secondary transition-colors font-[family-name:var(--font-body)]">
                Menu
              </Link>
              <Link href="/about" className="block px-3 py-2 text-white hover:text-secondary transition-colors font-[family-name:var(--font-body)]">
                About
              </Link>
              <Link href="/locations" className="block px-3 py-2 text-white hover:text-secondary transition-colors font-[family-name:var(--font-body)]">
                Locations
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-white hover:text-secondary transition-colors font-[family-name:var(--font-body)]">
                Contact
              </Link>
              <div className="pt-2">
                <button className="w-full bg-cosmic-gradient font-[family-name:var(--font-heading)] px-4 py-2 rounded-full border border-secondary/30 text-white font-medium">
                  🚀 Order Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}