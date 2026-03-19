'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

export type Bundle = {
  id: string;
  name: string;
  quantity: number;
  price: number;
  originalPrice: number;
  discountLabel: string;
};

export const BUNDLES: Bundle[] = [
  {
    id: 'solo',
    name: 'Sám voják v poli',
    quantity: 1,
    price: 199,
    originalPrice: 199,
    discountLabel: '',
  },
  {
    id: 'trio',
    name: 'Pro sebe a kámoše',
    quantity: 3,
    price: 499,
    originalPrice: 597,
    discountLabel: '16 %',
  },
  {
    id: 'party',
    name: 'Párty Pack',
    quantity: 5,
    price: 699,
    originalPrice: 995,
    discountLabel: '30 %',
  },
];

type CartContextType = {
  selectedBundleId: string;
  setSelectedBundleId: (id: string) => void;
  selectedBundle: Bundle;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [selectedBundleId, setSelectedBundleId] = useState<string>('party');
  const selectedBundle = BUNDLES.find((b) => b.id === selectedBundleId) ?? BUNDLES[2];

  return (
    <CartContext.Provider value={{ selectedBundleId, setSelectedBundleId, selectedBundle }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextType {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside CartProvider');
  return ctx;
}
