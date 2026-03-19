import { Maximize, Anchor, ShieldCheck } from 'lucide-react';
import FadeIn from './FadeIn';

const benefits = [
  {
    step: '01',
    icon: <Maximize className="w-6 h-6 text-emerald-400" />,
    title: 'Teleskopické lanko',
    desc: 'Natáhne se až na 90 cm a okamžitě se samo zatáhne zpět. Žádné zamotávání, žádný stres.',
  },
  {
    step: '02',
    icon: <Anchor className="w-6 h-6 text-emerald-400" />,
    title: 'Pevná silikonová smyčka',
    desc: 'Odolná smyčka pevně drží vape nebo zapalovač i při tanci a pohybu v davu.',
  },
  {
    step: '03',
    icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
    title: 'Klip na libovolné oblečení',
    desc: 'Mohutný kovový klip se snadno připne na kapsu, opasek nebo batoh. Drží i v nejdivočejší pit.',
  },
];

export default function MechanismDemo() {
  return (
    <section className="w-full bg-zinc-950 py-20 px-4 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="max-w-md mx-auto">
        <FadeIn>
          <h2 className="text-3xl font-extrabold text-white text-center mb-12 leading-tight">
            Jak to sakra{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              funguje?
            </span>
          </h2>
        </FadeIn>

        {/* Video placeholder */}
        <FadeIn delay={100}>
          <div className="w-full aspect-video bg-zinc-900 rounded-3xl border border-zinc-800 flex items-center justify-center mb-12 relative overflow-hidden shadow-xl shadow-black/50">
            <div className="absolute inset-0 hero-shimmer opacity-30" />
            <p className="text-zinc-600 font-mono text-sm text-center px-4 relative z-10">
              [ Vložte loop video — lanko vystřelí a zatáhne se ]
            </p>
          </div>
        </FadeIn>

        {/* Benefits list */}
        <div className="space-y-5">
          {benefits.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 120}>
              <div className="flex gap-5 items-start bg-zinc-900/40 p-5 rounded-2xl border border-zinc-800/60 hover:border-emerald-500/40 hover:bg-zinc-900/70 transition-all duration-300 group">
                {/* Step number + icon */}
                <div className="relative shrink-0">
                  <div className="bg-zinc-950 p-3.5 rounded-xl border border-zinc-800 shadow-inner group-hover:border-emerald-500/30 transition-colors">
                    {item.icon}
                  </div>
                  <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-emerald-500 text-zinc-950 text-[10px] font-black flex items-center justify-center leading-none">
                    {item.step}
                  </span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1.5 group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
