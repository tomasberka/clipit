'use client';
import { Check, Truck, ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import FadeIn from './FadeIn';

export default function BundlePricing() {
  const { selectedBundleId, setSelectedBundleId, selectedBundle } = useCart();

  return (
    <section className="w-full bg-zinc-950 py-20 px-4 relative" id="pricing">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="max-w-md mx-auto">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Zajisti sebe i{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                partu
              </span>
            </h2>
            <p className="text-zinc-400 text-base">
              Čím víc jich vezmeš, tím víc ušetříš.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-5">

          {/* Option 1: Solo (decoy pricing) */}
          <FadeIn delay={60}>
            <button
              type="button"
              onClick={() => setSelectedBundleId('solo')}
              className={`w-full text-left relative p-6 rounded-3xl border transition-all duration-200 ${
                selectedBundleId === 'solo'
                  ? 'border-zinc-500 bg-zinc-900/80 ring-1 ring-zinc-500'
                  : 'border-zinc-800 bg-zinc-900/40 opacity-80 hover:opacity-100 hover:border-zinc-700'
              }`}
            >
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-lg font-bold text-zinc-100">Sám voják v poli</h3>
                <span className="text-xl font-bold text-zinc-100">199 Kč</span>
              </div>
              <p className="text-zinc-500 text-sm">1 ks · Základní cena</p>
              {selectedBundleId === 'solo' && (
                <span className="absolute top-4 right-4 w-5 h-5 rounded-full bg-zinc-500 flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </span>
              )}
            </button>
          </FadeIn>

          {/* Option 2: Party Pack (Hero – bestseller) */}
          <FadeIn delay={120}>
            <button
              type="button"
              onClick={() => setSelectedBundleId('party')}
              className={`w-full text-left relative p-7 rounded-3xl border-2 transition-all duration-200 ${
                selectedBundleId === 'party'
                  ? 'border-emerald-400 bg-emerald-950/30 shadow-[0_0_50px_-10px_rgba(16,185,129,0.4)] scale-[1.02]'
                  : 'border-emerald-500 bg-emerald-950/20 shadow-[0_0_40px_-10px_rgba(16,185,129,0.25)] scale-[1.01] hover:scale-[1.03]'
              }`}
            >
              {/* Bestseller badge */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-500 text-zinc-950 text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                🔥 Nejprodávanější
              </div>

              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-black text-white mb-1">Párty Pack</h3>
                  <p className="text-emerald-400 text-sm font-bold bg-emerald-500/10 inline-block px-2 py-1 rounded-md">
                    5 ks · Sleva 30 %
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-zinc-500 line-through text-sm font-medium block">995 Kč</span>
                  <span className="text-4xl font-black text-white tracking-tighter">699 Kč</span>
                </div>
              </div>

              <div className="w-full h-px bg-zinc-800/50 my-4" />

              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-zinc-300 text-sm font-medium">
                  <div className="bg-emerald-500/20 p-1 rounded-full shrink-0">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  Pro tebe a všechny kámoše na víkend
                </li>
                <li className="flex items-center gap-3 text-zinc-300 text-sm font-medium">
                  <div className="bg-emerald-500/20 p-1 rounded-full shrink-0">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  Už se nebudete hádat, kdo komu sebral vape
                </li>
                <li className="flex items-center gap-3 text-emerald-400 text-sm font-bold">
                  <div className="bg-emerald-500/20 p-1 rounded-full shrink-0">
                    <Truck className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  Doprava po ČR zcela ZDARMA
                </li>
              </ul>

              {selectedBundleId === 'party' && (
                <span className="absolute top-5 right-5 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg">
                  <Check className="w-4 h-4 text-zinc-950" />
                </span>
              )}
            </button>
          </FadeIn>

          {/* Option 3: Trio */}
          <FadeIn delay={180}>
            <button
              type="button"
              onClick={() => setSelectedBundleId('trio')}
              className={`w-full text-left relative p-6 rounded-3xl border transition-all duration-200 ${
                selectedBundleId === 'trio'
                  ? 'border-cyan-500 bg-cyan-950/20 ring-1 ring-cyan-500'
                  : 'border-zinc-800 bg-zinc-900/40 hover:border-zinc-700 hover:bg-zinc-900/80'
              }`}
            >
              <div className="flex justify-between items-center mb-1">
                <div>
                  <h3 className="text-lg font-bold text-zinc-100">Pro sebe a kámoše</h3>
                  <p className="text-emerald-400 text-sm font-bold bg-emerald-500/10 inline-block px-2 py-1 rounded-md mt-1">
                    3 ks · Sleva 16 %
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-zinc-600 line-through text-xs font-medium block">597 Kč</span>
                  <span className="text-2xl font-bold text-zinc-100">499 Kč</span>
                </div>
              </div>
              {selectedBundleId === 'trio' && (
                <span className="absolute top-4 right-4 w-5 h-5 rounded-full bg-cyan-500 flex items-center justify-center">
                  <Check className="w-3 h-3 text-zinc-950" />
                </span>
              )}
            </button>
          </FadeIn>

        </div>

        {/* Dynamic CTA button */}
        <FadeIn delay={220}>
          <button className="w-full mt-10 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-black text-xl py-5 rounded-2xl uppercase tracking-widest transition-all transform active:scale-95 shadow-[0_0_30px_-5px_rgba(16,185,129,0.5)] flex items-center justify-center gap-3">
            <ShoppingCart className="w-5 h-5 shrink-0" />
            <span>
              Přidat do košíku
              <span className="mx-2 opacity-60">·</span>
              {selectedBundle.price} Kč
            </span>
          </button>
          <p className="text-center text-zinc-600 text-xs mt-3">
            {selectedBundle.quantity === 1
              ? '1 kus'
              : `${selectedBundle.quantity} kusy`}
            {selectedBundle.discountLabel && ` · ušetříš ${selectedBundle.originalPrice - selectedBundle.price} Kč`}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
