'use client';
import { useEffect, useState } from 'react';

const SCROLL_THRESHOLD = 500;

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      lastScrollY = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsVisible(lastScrollY > SCROLL_THRESHOLD);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full p-4 bg-gradient-to-t from-zinc-950 via-zinc-950/90 to-transparent z-50 animate-in slide-in-from-bottom-10 fade-in duration-300">
      <div className="max-w-md mx-auto">
        <button
          onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-black text-lg py-4 rounded-2xl shadow-[0_10px_40px_-10px_rgba(16,185,129,1)] active:scale-95 transition-all uppercase tracking-widest flex items-center justify-center gap-2"
        >
          Koupit nyní
        </button>
      </div>
    </div>
  );
}
