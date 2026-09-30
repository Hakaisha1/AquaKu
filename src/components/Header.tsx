"use client";

import Link from "next/link";
import { useCart } from "./CartProvider";

export default function Header() {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <header className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-primary">
          Aquaku<span className="text-white">.</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/keranjang" className="relative text-sm font-medium hover:text-primary transition-colors flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
            <span className="hidden sm:inline">Keranjang</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-primary text-black text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
          <Link href="/admin" className="text-sm font-medium px-3 py-1.5 bg-gray-800 rounded-md hover:bg-gray-700 transition-colors">
            Panel Admin
          </Link>
        </nav>
      </div>
    </header>
  );
}
