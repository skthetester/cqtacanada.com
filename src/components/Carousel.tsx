'use client';

import React, { useEffect, useRef, useState } from 'react';

export type Slide = {
  image: string;
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  overlay?: 'multi' | 'red' | 'white' | 'black';
};

type Props = {
  slides?: Slide[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
};

const defaultSlides: Slide[] = [
  {
    image: '/hero-canada.jpg',
    title: 'CQTA',
    subtitle: 'Connecting and growing the QA community across Canada',
    overlay: 'red',
  },
];

export default function Carousel({ slides, autoPlay = true, autoPlayInterval = 5000 }: Props) {
  const slidesToUse = slides && slides.length ? slides : defaultSlides;
  const [index, setIndex] = useState(0);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    if (!autoPlay || slidesToUse.length <= 1) return;
    timer.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % slidesToUse.length);
    }, autoPlayInterval);
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, [autoPlay, autoPlayInterval, slidesToUse.length]);

  const prev = () => setIndex((i) => (i - 1 + slidesToUse.length) % slidesToUse.length);
  const next = () => setIndex((i) => (i + 1) % slidesToUse.length);

  return (
    <div className="w-full relative overflow-hidden">
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slidesToUse.map((s, i) => (
          <div key={i} className="w-full flex-shrink-0 relative" style={{ minHeight: '520px' }}>
            <div
              className="hero-bg w-full h-full absolute inset-0"
              style={{
                backgroundImage: `url(${s.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
              }}
            />
            <div className={`absolute inset-0 ${s.overlay === 'multi' ? 'hero-overlay-multi' : s.overlay === 'red' ? 'hero-overlay-red' : s.overlay === 'white' ? 'hero-overlay-white' : 'hero-overlay-black'}`} />
            <div className="relative z-10 py-28">
              <div className="site-container text-center text-white">
                {s.title && <h2 className="hero-title mb-4">{s.title}</h2>}
                {s.subtitle && <p className="hero-sub max-w-3xl mx-auto mb-6">{s.subtitle}</p>}
                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                  <a
                    href="https://ca.linkedin.com/company/canadian-quality-and-testing-association"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="carousel-btn"
                  >
                    Join the community
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Prev/Next controls */}
      <button
        aria-label="Previous"
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/30 hover:bg-white/60 text-white rounded-full p-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        aria-label="Next"
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/30 hover:bg-white/60 text-white rounded-full p-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-6 flex space-x-2 z-30">
        {slidesToUse.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-3 h-3 rounded-full ${i === index ? 'bg-primary' : 'bg-accent'}`}
          />
        ))}
      </div>
    </div>
  );
}
