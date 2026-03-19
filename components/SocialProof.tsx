import { RefreshCw, Lock, Zap } from 'lucide-react';
import FadeIn from './FadeIn';

const reviews = [
  {
    initials: 'LK',
    name: 'Lukáš K.',
    from: 'Beats of Love 2024',
    rating: 5,
    text: 'Fakt geniální věc. Během celého večera jsem vůbec nehledal vape, prostě viselo u mě celou dobu. Koupil jsem 5 kusů pro celou partu a všichni jsou nadšení.',
  },
  {
    initials: 'MN',
    name: 'Michaela N.',
    from: 'Colours of Ostrava',
    rating: 5,
    text: 'Konečně! Ztratila jsem za poslední rok asi 3 vapy na festivalech. Teď se to nestane. Klip drží skvěle i při tanci a lanko je dost dlouhé.',
  },
  {
    initials: 'TO',
    name: 'Tomáš O.',
    from: 'Ověřený zákazník',
    rating: 5,
    text: 'Dorazilo rychle, balení super. Kvalita je lepší než jsem čekal za tuhle cenu. Jednoznačně doporučuju parťákům.',
  },
  {
    initials: 'KH',
    name: 'Klára H.',
    from: 'United Islands',
    rating: 5,
    text: 'Perfektní na festivaly! Zapalovač mi přestali krást kámoši, protože teď každý ví, co je čí. Stylové a praktické zároveň.',
  },
];

const trustBadges = [
  {
    icon: <Lock className="w-8 h-8 text-emerald-400 shrink-0" />,
    title: 'Šifrovaná platba',
    desc: 'Plaťte bezpečně přes Apple Pay, Google Pay nebo kartou.',
  },
  {
    icon: <RefreshCw className="w-8 h-8 text-emerald-400 shrink-0" />,
    title: 'Garance 14 dní na vrácení',
    desc: 'Nesedí ti? Vrátíme peníze obratem bez hloupých otázek.',
  },
  {
    icon: <Zap className="w-8 h-8 text-emerald-400 shrink-0" />,
    title: 'Expedice do 24 hodin',
    desc: 'Objednávky přijaté do 14:00 odesíláme ještě tentýž den.',
  },
];

export default function SocialProof() {
  return (
    <section className="w-full bg-zinc-950 py-20 px-4 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="max-w-md mx-auto">

        {/* Aggregate rating */}
        <FadeIn>
          <div className="flex flex-col items-center mb-14">
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-7 h-7 fill-emerald-400 text-emerald-400" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <p className="text-4xl font-black text-white mb-1">4.9 <span className="text-zinc-500 text-xl font-normal">/ 5</span></p>
            <p className="text-zinc-500 text-sm">na základě 127 ověřených recenzí</p>
          </div>
        </FadeIn>

        {/* Trust badges */}
        <div className="grid grid-cols-1 gap-4 mb-16">
          {trustBadges.map((badge, i) => (
            <FadeIn key={i} delay={i * 80}>
              <div className="flex items-center gap-4 bg-zinc-900/60 p-5 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-colors">
                {badge.icon}
                <div>
                  <p className="text-white font-bold text-sm mb-0.5">{badge.title}</p>
                  <p className="text-zinc-500 text-xs">{badge.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Reviews heading */}
        <FadeIn>
          <h2 className="text-3xl font-extrabold text-white text-center mb-10">
            Co říkají{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              ostatní?
            </span>
          </h2>
        </FadeIn>

        {/* Reviews */}
        <div className="space-y-4">
          {reviews.map((review, i) => (
            <FadeIn key={i} delay={i * 80}>
              <div className="bg-zinc-900/30 p-6 rounded-3xl border border-zinc-800/80 hover:border-zinc-700/80 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-full flex items-center justify-center text-zinc-950 font-black text-sm shrink-0">
                      {review.initials}
                    </div>
                    <div>
                      <p className="text-white text-sm font-bold">{review.name}</p>
                      <p className="text-zinc-600 text-xs">{review.from}</p>
                      <div className="flex gap-0.5 mt-0.5">
                        {[...Array(review.rating)].map((_, j) => (
                          <svg key={j} className="w-3 h-3 fill-emerald-400 text-emerald-400" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-400/80 bg-emerald-400/10 px-2 py-1 rounded-md shrink-0">
                    Ověřeno
                  </span>
                </div>
                <p className="text-zinc-300 text-sm leading-relaxed italic">&ldquo;{review.text}&rdquo;</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
