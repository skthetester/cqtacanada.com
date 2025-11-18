'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              CQTA
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600">About Us</Link>
            <Link href="/events" className="text-gray-700 hover:text-blue-600">Events</Link>
            <Link href="/partnership" className="text-gray-700 hover:text-blue-600">Partnership</Link>
            <Link href="/sponsorship" className="text-gray-700 hover:text-blue-600">Sponsorship</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact Us</Link>
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <nav className="px-2 pt-2 pb-4 space-y-1">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</Link>
              <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About Us</Link>
              <Link href="/events" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Events</Link>
              <Link href="/partnership" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Partnership</Link>
              <Link href="/sponsorship" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Sponsorship</Link>
              <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact Us</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}