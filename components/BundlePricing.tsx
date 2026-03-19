import { Check, Truck } from 'lucide-react';

export default function BundlePricing() {
  return (
    <section className="w-full bg-zinc-950 py-20 px-4 relative" id="pricing">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>

      <div className="max-w-md mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Zajisti sebe i <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">partu</span>
          </h2>
          <p className="text-zinc-400 text-base">Nekupuj jen jeden. Vyber si balíček, čím víc jich vezmeš, tím víc ušetříš.</p>
        </div>

        <div className="space-y-5">

          {/* Option 1: Basic (decoy pricing) */}
          <div className="relative p-6 rounded-3xl border border-zinc-800 bg-zinc-900/40 opacity-80 cursor-pointer transition-all hover:opacity-100 hover:border-zinc-700 hover:bg-zinc-900/80">
            <div className="flex justify-between items-center mb-1">
              <h3 className="text-lg font-bold text-zinc-100">Sám voják v poli</h3>
              <span className="text-xl font-bold text-zinc-100">199 Kč</span>
            </div>
            <p className="text-zinc-500 text-sm">1 ks - Základní cena</p>
          </div>

          {/* Option 2: Party Pack (Hero – golden middle) */}
          <div className="relative p-7 rounded-3xl border-2 border-emerald-500 bg-emerald-950/20 cursor-pointer transform scale-[1.02] shadow-[0_0_40px_-10px_rgba(16,185,129,0.25)] transition-transform hover:scale-[1.04]">
            {/* Bestseller badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-500 text-zinc-950 text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
              Nejprodávanější
            </div>

            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-black text-white mb-1">Párty Pack</h3>
                <p className="text-emerald-400 text-sm font-bold bg-emerald-500/10 inline-block px-2 py-1 rounded-md">
                  5 ks - Sleva 30 %
                </p>
              </div>
              <div className="text-right">
                <span className="text-zinc-500 line-through text-sm font-medium block">995 Kč</span>
                <span className="text-4xl font-black text-white tracking-tighter">699 Kč</span>
              </div>
            </div>

            <div className="w-full h-px bg-zinc-800/50 my-4"></div>

            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-zinc-300 text-sm font-medium">
                <div className="bg-emerald-500/20 p-1 rounded-full"><Check className="w-3.5 h-3.5 text-emerald-400" /></div>
                Pro tebe a všechny kámoše na víkend
              </li>
              <li className="flex items-center gap-3 text-zinc-300 text-sm font-medium">
                <div className="bg-emerald-500/20 p-1 rounded-full"><Check className="w-3.5 h-3.5 text-emerald-400" /></div>
                Už se nebudete hádat, kdo komu sebral vape
              </li>
              <li className="flex items-center gap-3 text-emerald-400 text-sm font-bold">
                <div className="bg-emerald-500/20 p-1 rounded-full"><Truck className="w-3.5 h-3.5 text-emerald-400" /></div>
                Doprava po ČR zcela ZDARMA
              </li>
            </ul>
          </div>

          {/* Option 3: Duo/Trio */}
          <div className="relative p-6 rounded-3xl border border-zinc-800 bg-zinc-900/40 cursor-pointer transition-all hover:border-zinc-700 hover:bg-zinc-900/80">
            <div className="flex justify-between items-center mb-1">
              <div>
                <h3 className="text-lg font-bold text-zinc-100">Pro sebe a kámoše</h3>
                <p className="text-emerald-400 text-sm font-bold bg-emerald-500/10 inline-block px-2 py-1 rounded-md">
                  3 ks - Sleva 16 %
                </p>
              </div>
              <div className="text-right">
                <span className="text-zinc-600 line-through text-xs font-medium block">597 Kč</span>
                <span className="text-2xl font-bold text-zinc-100">499 Kč</span>
              </div>
            </div>
          </div>

        </div>

        {/* Add to cart button */}
        <button className="w-full mt-10 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-black text-xl py-5 rounded-2xl uppercase tracking-widest transition-all transform active:scale-95 shadow-[0_0_30px_-5px_rgba(16,185,129,0.5)] flex items-center justify-center gap-2">
          Vybrat balíček
        </button>
      </div>
    </section>
  );
}
