# 🚀 Lighter Leash / Vape Holder – One-Product Store

Tento repozitář obsahuje zdrojové kódy pro vysoce konverzní e-commerce "One-Product Store" postavený na moderním React stacku. E-shop je primárně zaměřen na prodej zatahovacích silikonových držáků na elektronické cigarety a zapalovače (tzv. Lighter Leash).

---

## 🎯 Prodejní a marketingová strategie

**Cílová skupina:** Mladí lidé, návštěvníci hudebních festivalů, klubů a parties. Většina návštěvnosti (až 90 %) přichází z mobilních zařízení přes sítě jako TikTok, Instagram Reels a YouTube Shorts.

**Hodnotová propozice:** Produkt poskytuje okamžité řešení silné frustrace ze ztráty nebo zdlouhavého hledání drahého vapu či zapalovače. Jde o typický impulzivní nákup.

**Konverzní trychtýř (Funnel):**

- **Hero Sekce:** Úderný copywriting zasahující přímo bolest zákazníka (hook).
- **Demonstrace:** Rychlá vizualizace toho, jak mechanismus funguje (Show, don't tell).
- **Upsell (Bundling):** Taktika pro zvýšení průměrné hodnoty objednávky (AOV) nabídkou výhodných balíčků pro celou partu.
- **Social Proof:** Odstranění nákupního tření pomocí recenzí a garancí bezpečnosti.
- **Sticky CTA:** Tlačítko, které uživatele neustále provází při scrollování a umožňuje okamžitý nákup.

---

## 🛠 Technologický Stack

| Technologie | Popis |
|---|---|
| [Next.js 14+](https://nextjs.org/) | Framework (App Router) |
| [TypeScript](https://www.typescriptlang.org/) | Statické typování |
| [Tailwind CSS](https://tailwindcss.com/) | Styling (Dark/Neon motiv) |
| [Lucide React](https://lucide.dev/) | Lehké a škálovatelné ikony |
| [tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate) | Animace pro Sticky CTA |

---

## 📦 Instalace a spuštění

### 1. Klonování repozitáře a instalace závislostí

```bash
git clone <url-vaseho-repa>
cd clipit
npm install
```

### 2. Spuštění vývojového serveru

```bash
npm run dev
```

Aplikace poběží na adrese [http://localhost:3000](http://localhost:3000).

### 3. Build pro produkci

```bash
npm run build
npm start
```

---

## 📁 Struktura projektu

```
clipit/
├── app/
│   ├── globals.css       # Globální styly a Tailwind import
│   ├── layout.tsx        # Root layout s metadaty
│   └── page.tsx          # Hlavní landing page
├── components/
│   ├── HeroSection.tsx   # Above-the-fold hook sekce
│   ├── MechanismDemo.tsx # Vysvětlení produktu + benefity
│   ├── BundlePricing.tsx # Bundle pricing pro maximalizaci AOV
│   ├── SocialProof.tsx   # Recenze a trust badges
│   └── StickyCTA.tsx     # Fixní CTA tlačítko při scrollu
└── public/               # Statické soubory (vložte sem video/GIF)
```

---

## 🖼 Přizpůsobení obsahu

- **Hero sekce:** Nahraďte placeholder `[ Zde vložte akční GIF/Video z párty ]` skutečným videem nebo GIFem produktu.
- **Mechanism Demo:** Nahraďte placeholder `[ Zde vložte loop video jak lanko vystřelí a zatáhne se ]` produktovým videem.
- **Ceny:** Upravte ceny v `BundlePricing.tsx` dle vaší kalkulace.
- **Recenze:** Aktualizujte recenze v `SocialProof.tsx` skutečnými zákaznickými hodnoceními.
- **Branding:** Nahraďte `TvojeZnačka` v patičce a metadatech skutečným názvem vaší značky.
