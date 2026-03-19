import { Maximize, Anchor, ShieldCheck } from 'lucide-react';

export default function MechanismDemo() {
  const benefits = [
    {
      icon: <Maximize className="w-6 h-6 text-emerald-400" />,
      title: 'Teleskopické lanko',
      desc: 'Lanko se natáhne až na 90 cm a okamžitě se samo zatáhne zpět. Žádné zamotávání, žádný stres.',
    },
    {
      icon: <Anchor className="w-6 h-6 text-emerald-400" />,
      title: 'Pevná silikonová smyčka',
      desc: 'Odolná smyčka pevně drží váš vape nebo zapalovač i při tanci a pohybu.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      title: 'Klip na libovolné oblečení',
      desc: 'Mohutný kovový klip se snadno připne na kapsu, opasek nebo batoh. Drží i v nejdivočejší pit.',
    },
  ];

  return (
    <section className="w-full bg-zinc-950 py-20 px-4 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>

      <div className="max-w-md mx-auto">
        <h2 className="text-3xl font-extrabold text-white text-center mb-12 leading-tight">
          Jak to sakra <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">funguje?</span>
        </h2>

        {/* Video placeholder */}
        <div className="w-full aspect-video bg-zinc-900 rounded-3xl border border-zinc-800 flex items-center justify-center mb-12 relative overflow-hidden shadow-xl shadow-black/50">
          <p className="text-zinc-600 font-mono text-sm text-center px-4">
            [ Zde vložte loop video jak lanko vystřelí a zatáhne se ]
          </p>
        </div>

        {/* Benefits list */}
        <div className="space-y-5">
          {benefits.map((item, idx) => (
            <div key={idx} className="flex gap-5 items-start bg-zinc-900/40 p-5 rounded-2xl border border-zinc-800/60 hover:border-zinc-700 transition-colors">
              <div className="bg-zinc-950 p-3.5 rounded-xl border border-zinc-800 shadow-inner shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-1.5">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
