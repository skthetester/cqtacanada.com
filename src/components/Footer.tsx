'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribe:', email);
    setEmail('');
  };

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Logo */}
          <div className="flex flex-col items-center lg:items-start">
            <Link href="/" className="flex items-center mb-3">
              <img src="/main-logo.svg" alt="CQTA" className="h-16 w-auto" />
            </Link>
            <div className="text-base text-center lg:text-left brand-text" style={{ color: '#cc0000' }}>
              <div>Canadian Quality</div>
              <div className="line-small">and Testing Association</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 !text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/partnership" className="!text-white hover:!text-canada-red transition-colors">
                  Partnership
                </Link>
              </li>
              <li>
                <Link href="/sponsorship" className="!text-white hover:!text-canada-red transition-colors">
                  Sponsorship
                </Link>
              </li>
              <li>
                <Link href="#" className="!text-white hover:!text-canada-red transition-colors">
                  Register as a speaker
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-4 !text-white">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="!text-white hover:!text-canada-red transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/events" className="!text-white hover:!text-canada-red transition-colors">
                  CQTA Events
                </Link>
              </li>
              <li>
                <Link href="/contact" className="!text-white hover:!text-canada-red transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <form onSubmit={handleSubscribe} className="mb-6">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email *"
                  required
                  className="flex-1 px-4 py-2 rounded-md text-gray-900 bg-white border border-gray-400 focus:outline-none focus:ring-2 focus:ring-canada-red"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-canada-red hover:bg-red-700 text-white font-semibold rounded-md transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
            </form>

            <div className="flex items-center gap-4 mb-3">
              <h4 className="text-base font-semibold !text-white">Stay Connected with CQTA.</h4>
              <div className="flex gap-3">
                <a
                  href="https://ca.linkedin.com/company/canadian-quality-and-testing-association"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-canada-red hover:bg-red-700 flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="mailto:contact@cqtacanada.com"
                  className="w-10 h-10 rounded-full bg-canada-red hover:bg-red-700 flex items-center justify-center transition-colors"
                  aria-label="Email"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Legal Links */}
        <div className="mt-8 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} CQTA. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="!text-white hover:!text-canada-red transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="!text-white hover:!text-canada-red transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}