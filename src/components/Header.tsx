'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="top-nav shadow-md">
      <div className="site-container">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white">
              CQTA
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/about" className="text-white hover:underline">About Us</Link>
            <div className="relative group">
              <button className="text-white hover:underline">Events</button>
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/events/cqta" className="block px-4 py-2 text-gray-700 hover:bg-accent">CQTA Events</Link>
                <Link href="/events/partner" className="block px-4 py-2 text-gray-700 hover:bg-accent">Partner Events</Link>
              </div>
            </div>
            <Link href="/partnership" className="text-white hover:underline">Partnership</Link>
            <Link href="/sponsorship" className="text-white hover:underline">Sponsorship</Link>
            <Link href="/contact" className="text-white hover:underline">Get in Touch</Link>
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <nav className="px-2 pt-2 pb-4 space-y-1 bg-white">
              <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-primary">About Us</Link>
              <div className="px-3 py-2">
                <div className="text-gray-700">Events</div>
                <Link href="/events/cqta" className="block pl-4 py-1 text-gray-600 hover:text-primary">CQTA Events</Link>
                <Link href="/events/partner" className="block pl-4 py-1 text-gray-600 hover:text-primary">Partner Events</Link>
              </div>
              <Link href="/partnership" className="block px-3 py-2 text-gray-700 hover:text-primary">Partnership</Link>
              <Link href="/sponsorship" className="block px-3 py-2 text-gray-700 hover:text-primary">Sponsorship</Link>
              <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-primary">Get in Touch</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}