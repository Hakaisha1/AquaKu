"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type CartItem = {
  nama: string;
  harga: number;
  gambar: string;
  jumlah: number;
};

type CartContextType = {
  items: CartItem[];
  addToCart: (product: { nama: string; harga: number; gambar: string | null }, jumlah?: number) => void;
  removeFromCart: (nama: string) => void;
  updateQuantity: (nama: string, jumlah: number) => void;
  getCartTotal: () => number;
  getCartCount: () => number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  // Load from localStorage on mount (opsional agar data tidak hilang saat refresh)
  useEffect(() => {
    const saved = localStorage.getItem("aquaku-cart");
    if (saved) {
      try {
        setItems(JSON.parse(saved));
      } catch (e) {}
    }
  }, []);

  // Save to localStorage when items change
  useEffect(() => {
    localStorage.setItem("aquaku-cart", JSON.stringify(items));
  }, [items]);

  const addToCart = (product: { nama: string; harga: number; gambar: string | null }, jumlah = 1) => {
    setItems(prev => {
      const existing = prev.find(item => item.nama === product.nama);
      if (existing) {
        return prev.map(item => 
          item.nama === product.nama 
            ? { ...item, jumlah: item.jumlah + jumlah } 
            : item
        );
      }
      return [...prev, { 
        nama: product.nama, 
        harga: product.harga, 
        gambar: product.gambar || "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80&w=400&h=300", 
        jumlah 
      }];
    });
  };

  const removeFromCart = (nama: string) => {
    setItems(prev => prev.filter(item => item.nama !== nama));
  };

  const updateQuantity = (nama: string, jumlah: number) => {
    if (jumlah <= 0) {
      removeFromCart(nama);
      return;
    }
    setItems(prev => prev.map(item => 
      item.nama === nama ? { ...item, jumlah } : item
    ));
  };

  const getCartTotal = () => {
    return items.reduce((total, item) => total + (item.harga * item.jumlah), 0);
  };

  const getCartCount = () => {
    return items.reduce((count, item) => count + item.jumlah, 0);
  };

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, getCartTotal, getCartCount }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
