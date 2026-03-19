'use client';
import { Star, Flame } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] bg-zinc-950 flex flex-col items-center justify-center px-4 pt-12 pb-20 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[120%] md:w-3/4 h-1/2 bg-emerald-500/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-md mx-auto flex flex-col items-center text-center mt-8">

        {/* Social proof badge */}
        <div className="flex items-center gap-2 bg-zinc-900/80 border border-zinc-800 px-4 py-2 rounded-full mb-8 shadow-lg shadow-black/50">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
            ))}
          </div>
          <span className="text-xs text-zinc-300 font-semibold tracking-wide">2 500+ spokojených zákazníků</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-5 leading-[1.1]">
          Už <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 drop-shadow-md">nikdy</span> nehledej ztracený vape na párty.
        </h1>

        <p className="text-lg text-zinc-400 mb-10 px-2 leading-relaxed">
          Připni na kalhoty, potáhni a pusť. Tvá e-cigareta nebo zapalovač se na lanku bezpečně vrátí zpět.
        </p>

        {/* Video/image placeholder */}
        <div className="w-full aspect-[4/5] bg-zinc-900 border border-zinc-800 rounded-3xl mb-10 flex flex-col items-center justify-center relative overflow-hidden group shadow-2xl shadow-emerald-900/20">
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10"></div>
          <Flame className="w-16 h-16 text-zinc-700 mb-4" />
          <p className="text-zinc-600 font-mono text-sm">[ Zde vložte akční GIF/Video z párty ]</p>
        </div>

        {/* Main CTA */}
        <button
          onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-black text-xl py-5 rounded-2xl uppercase tracking-widest transition-all transform active:scale-95 shadow-[0_0_40px_-10px_rgba(16,185,129,0.8)]"
        >
          Chci to hned
        </button>

        <p className="text-xs text-zinc-500 mt-5 flex items-center gap-2 font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,1)]"></span>
          Extrémní zájem. Poslední kusy skladem!
        </p>
      </div>
    </section>
  );
}
