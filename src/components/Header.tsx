"use client";

import Link from "next/link";
import { useCart } from "./CartProvider";

export default function Header() {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <header className="sticky top-0 z-50 bg-black/70 backdrop-blur-md border-b border-gray-800 supports-[backdrop-filter]:bg-black/40">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black tracking-tighter text-white flex items-center gap-1 group">
          Aqua<span className="text-primary group-hover:text-emerald-400 transition-colors">ku</span>
          <span className="w-2 h-2 rounded-full bg-primary mb-3 ml-0.5"></span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/keranjang" className="relative text-sm font-semibold text-gray-300 hover:text-white transition-colors flex items-center gap-2 group p-2">
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-primary transition-colors"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-primary text-black text-[10px] font-extrabold px-1.5 py-0.5 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]">
                  {cartCount}
                </span>
              )}
            </div>
            <span className="hidden sm:inline group-hover:text-white transition-colors">Keranjang</span>
          </Link>
          <Link href="/admin" className="text-sm font-bold px-4 py-2 bg-gray-800 text-gray-200 rounded-xl hover:bg-gray-700 hover:text-white transition-all border border-gray-700 hover:border-gray-600 shadow-sm">
            Panel Admin
          </Link>
        </nav>
      </div>
    </header>
  );
}
