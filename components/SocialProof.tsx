import { RefreshCw, Lock } from 'lucide-react';

export default function SocialProof() {
  const reviews = [
    {
      initials: 'LK',
      name: 'Lukáš K.',
      text: 'Fakt geniální věc. Na Beats of Love jsem během večera vůbec nehledal vape, prostě viselo u mě celou dobu. Koupil jsem 5 kusů pro celou partu a všichni jsou nadšení.',
    },
    {
      initials: 'MN',
      name: 'Michaela N.',
      text: 'Konečně! Ztratila jsem za poslední rok asi 3 vapy na festivalech. Teď se to nestane. Klip drží skvěle i při tanci a lanko je dost dlouhé.',
    },
    {
      initials: 'TO',
      name: 'Tomáš O.',
      text: 'Dorazilo rychle, balení super. Kvalita je lepší než jsem čekal za tuhle cenu. Jednoznačně doporučuju parťákům.',
    },
  ];

  return (
    <section className="w-full bg-zinc-950 py-20 px-4 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>

      <div className="max-w-md mx-auto">

        {/* Trust badges */}
        <div className="grid grid-cols-1 gap-4 mb-16">
          <div className="flex items-center gap-4 bg-zinc-900/60 p-5 rounded-2xl border border-zinc-800">
            <Lock className="w-8 h-8 text-emerald-400 shrink-0" />
            <div>
              <p className="text-white font-bold text-sm mb-0.5">Šifrovaná platba</p>
              <p className="text-zinc-500 text-xs">Plaťte bezpečně přes Apple Pay, Google Pay nebo kartou.</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-zinc-900/60 p-5 rounded-2xl border border-zinc-800">
            <RefreshCw className="w-8 h-8 text-emerald-400 shrink-0" />
            <div>
              <p className="text-white font-bold text-sm mb-0.5">Garance 14 dní na vrácení</p>
              <p className="text-zinc-500 text-xs">Nesedí ti? Vrátíme peníze obratem bez hloupých otázek.</p>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <h2 className="text-3xl font-extrabold text-white text-center mb-10">
          Co říkají <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">ostatní?</span>
        </h2>

        <div className="space-y-4">
          {reviews.map((review, i) => (
            <div key={i} className="bg-zinc-900/30 p-6 rounded-3xl border border-zinc-800/80">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-full flex items-center justify-center text-zinc-950 font-black text-sm">
                    {review.initials}
                  </div>
                  <div>
                    <p className="text-white text-sm font-bold">{review.name}</p>
                    <div className="flex gap-0.5 mt-0.5">
                      {[...Array(5)].map((_, j) => (
                        <svg key={j} className="w-3 h-3 fill-emerald-400 text-emerald-400" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-400/80 bg-emerald-400/10 px-2 py-1 rounded-md">Ověřeno</span>
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed italic">&ldquo;{review.text}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
