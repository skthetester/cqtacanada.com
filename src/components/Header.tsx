'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isEventsOpen, setIsEventsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  return (
    <header className="top-nav shadow-md">
      <div className="site-container">
        <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
            <Link href="/" className="flex items-center">
                  <img src="/main-logo.svg" alt="CQTA" className="h-14 w-auto object-contain" />
              <div className="ml-3 hidden sm:block brand-text">
                <div>Canadian Quality</div>
                <div className="line-small">and Testing Association</div>
              </div>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="/about" className="nav-link"><span className="nav-text">About Us</span></Link>
            <div className="relative group">
              <button className="nav-link flex items-center"><span className="nav-text">Events</span><svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd"/></svg></button>
              <div className="absolute left-0 top-full mt-0 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transform translate-y-1 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto transition-all duration-150 z-50">
                <Link href="/events/cqta" className="nav-link block px-4 py-2"><span className="nav-text">CQTA Events</span></Link>
                <Link href="/events/partner" className="nav-link block px-4 py-2"><span className="nav-text">Partner Events</span></Link>
              </div>
            </div>
            <Link href="/partnership" className="nav-link"><span className="nav-text">Partnership</span></Link>
            <Link href="/sponsorship" className="nav-link"><span className="nav-text">Sponsorship</span></Link>
            <Link href="/contact" className="nav-link"><span className="nav-text">Get in Touch</span></Link>
            
            {/* Language Toggle */}
            <div className="flex items-center gap-1 ml-2">
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 text-sm font-medium rounded transition-colors ${
                  language === 'en' 
                    ? 'bg-canada-red text-white' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('fr')}
                className={`px-2 py-1 text-sm font-medium rounded transition-colors ${
                  language === 'fr' 
                    ? 'bg-canada-red text-white' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                FR
              </button>
            </div>
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
              <nav className="px-2 pt-2 pb-4 space-y-1 bg-white shadow-lg">
              <Link href="/about" className="nav-link block px-3 py-2 text-gray-900"><span className="nav-text">About Us</span></Link>
              <div className="px-3 py-2">
                <button
                  onClick={() => setIsEventsOpen(!isEventsOpen)}
                  aria-expanded={isEventsOpen}
                  className="w-full flex items-center justify-between px-0 py-0 text-gray-700"
                >
                  <span className="nav-link block px-0 py-2"><span className="nav-text">Events</span></span>
                  <svg className={`w-4 h-4 transform transition-transform ${isEventsOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd"/></svg>
                </button>
                <div className={`${isEventsOpen ? 'block' : 'hidden'} pl-4 mt-1`}>
                  <Link href="/events/cqta" className="nav-link block pl-4 py-1 text-gray-900"><span className="nav-text">CQTA Events</span></Link>
                  <Link href="/events/partner" className="nav-link block pl-4 py-1 text-gray-900"><span className="nav-text">Partner Events</span></Link>
                </div>
              </div>
              <Link href="/partnership" className="nav-link block px-3 py-2 text-gray-900"><span className="nav-text">Partnership</span></Link>
              <Link href="/sponsorship" className="nav-link block px-3 py-2 text-gray-900"><span className="nav-text">Sponsorship</span></Link>
              <Link href="/contact" className="nav-link block px-3 py-2 text-gray-900"><span className="nav-text">Get in Touch</span></Link>
              
              {/* Mobile Language Toggle */}
              <div className="px-3 py-2 flex items-center gap-2">
                <span className="text-sm text-gray-600">Language:</span>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
                    language === 'en' 
                      ? 'bg-canada-red text-white' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage('fr')}
                  className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
                    language === 'fr' 
                      ? 'bg-canada-red text-white' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  FR
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}