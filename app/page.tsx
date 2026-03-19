import HeroSection from '@/components/HeroSection';
import MechanismDemo from '@/components/MechanismDemo';
import BundlePricing from '@/components/BundlePricing';
import SocialProof from '@/components/SocialProof';
import StickyCTA from '@/components/StickyCTA';

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 font-sans selection:bg-emerald-500/30 text-zinc-100 overflow-x-hidden">
      {/* 1. Immediate problem hook and offer */}
      <HeroSection />

      {/* 2. Logical explanation and visual demo */}
      <MechanismDemo />

      {/* 3. Increase average order value (AOV) */}
      <BundlePricing />

      {/* 4. Build trust before purchase */}
      <SocialProof />

      {/* 5. Always-visible purchase button */}
      <StickyCTA />

      {/* Minimalist footer that doesn't distract from purchase */}
      <footer className="w-full bg-zinc-950 border-t border-zinc-900 py-10 text-center text-zinc-600 text-xs">
        <div className="max-w-md mx-auto px-4">
          <p className="mb-4">© {new Date().getFullYear()} TvojeZnačka. Všechna práva vyhrazena.</p>
          <div className="flex justify-center gap-6">
            <a href="/obchodni-podminky" className="hover:text-emerald-400 transition-colors">Obchodní podmínky</a>
            <a href="/ochrana-soukromi" className="hover:text-emerald-400 transition-colors">Ochrana soukromí</a>
            <a href="/kontakt" className="hover:text-emerald-400 transition-colors">Kontakt</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
