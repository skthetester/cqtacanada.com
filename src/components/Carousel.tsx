'use client';

import { useEffect, useRef, useState } from 'react';

type Slide = {
  image: string;
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  overlay?: 'multi' | 'red' | 'white' | 'black';
};

export default function Carousel({
  slides = [
    { image: '/hero-maple.jpg', title: 'Welcome to CQTA Canada', subtitle: 'Advancing software quality engineering across Canada.', ctaText: 'Join Newsletter', ctaLink: '#join', overlay: 'multi' },
    { image: '/hero-events.jpg', title: 'Our Events', subtitle: 'Conferences and workshops across Canada.', ctaText: 'See Events', ctaLink: '/events', overlay: 'red' },
    { image: '/hero-sponsorship.jpg', title: 'Support CQTA', subtitle: 'Sponsorship opportunities available.', ctaText: 'Become a Sponsor', ctaLink: '/sponsorship', overlay: 'black' },
  ],
  interval = 4500,
}: {
  slides?: Slide[];
  interval?: number;
}) {
  const [index, setIndex] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const pointerStartX = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isInteracting) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, interval);
    return () => clearInterval(id);
  }, [slides.length, interval, isInteracting]);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  };

  const onPointerDown = (e: React.PointerEvent) => {
    pointerStartX.current = e.clientX;
    setIsInteracting(true);
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (pointerStartX.current == null) {
      setIsInteracting(false);
      return;
    }
    const diff = e.clientX - pointerStartX.current;
    pointerStartX.current = null;
    setIsInteracting(false);
    if (Math.abs(diff) > 40) {
      if (diff < 0) next(); else prev();
    }
  };

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden relative"
      tabIndex={0}
      onKeyDown={onKey}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
    >
      {slides.map((s, i) => (
        <div
          key={i}
          role="group"
          className={`transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0 pointer-events-none'} relative`}
          aria-hidden={i === index ? 'false' : 'true'}
        >
          <div
            className="hero-bg w-full"
            style={{
              backgroundImage: `url(${s.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              minHeight: '520px',
            }}
          >
            <div className={`absolute inset-0 ${s.overlay === 'multi' ? 'hero-overlay-multi' : s.overlay === 'red' ? 'hero-overlay-red' : s.overlay === 'white' ? 'hero-overlay-white' : 'hero-overlay-black'}`} />
            <div className="relative z-10 py-28">
              <div className="site-container text-center text-white">
                {s.title && <h2 className="hero-title mb-4">{s.title}</h2>}
                {s.subtitle && <p className="hero-sub max-w-3xl mx-auto mb-6">{s.subtitle}</p>}
                {s.ctaText && (
                  <a href={s.ctaLink || '#'} className="inline-block btn-rogers px-6 py-3 rounded-lg font-semibold">
                    {s.ctaText}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Prev / Next controls */}
      <button aria-label="Previous" onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/30 hover:bg-white/60 text-white rounded-full p-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button aria-label="Next" onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/30 hover:bg-white/60 text-white rounded-full p-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-6 flex space-x-2 z-20">
        {slides.map((_, i) => (
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
