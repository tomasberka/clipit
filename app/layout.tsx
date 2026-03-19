import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lighter Leash – Nikdy neztrať vape na párty",
  description: "Silikonový držák na vape a zapalovač. Připni, potáhni, pusť. Bezpečné, praktické, stylové.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
