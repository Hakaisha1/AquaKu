"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "../../components/CartProvider";

export default function Keranjang() {
  const { items, updateQuantity, getCartTotal } = useCart();
  const subtotal = getCartTotal();

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center gap-4 border-b border-gray-800/50 pb-6">
        <Link href="/" className="text-gray-400 hover:text-white bg-gray-900 hover:bg-gray-800 p-2 rounded-full transition-all duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </Link>
        <h1 className="text-3xl font-extrabold tracking-tight">Keranjang Belanja</h1>
        <div className="ml-auto bg-gray-900 text-gray-300 px-4 py-1.5 rounded-full text-sm font-semibold border border-gray-800">
          {items.reduce((acc, it) => acc + it.jumlah, 0)} Item
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-20 bg-gray-900/30 border border-gray-800/50 rounded-3xl backdrop-blur-sm">
              <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-500">
                 <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
              </div>
              <p className="text-gray-400 text-lg mb-6">Keranjang Anda masih kosong.</p>
              <Link href="/" className="inline-block bg-primary hover:bg-emerald-400 text-black font-bold px-8 py-3 rounded-xl transition-all shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)]">Mulai Belanja</Link>
            </div>
          ) : (
            items.map((item, i) => (
              <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center gap-6 bg-gray-900/40 backdrop-blur-sm border border-gray-800/60 p-5 rounded-2xl hover:border-gray-700 transition-colors">
                <div className="relative w-24 h-24 bg-gray-800 rounded-xl overflow-hidden flex-shrink-0 border border-gray-700/50">
                  <Image 
                    src={item.gambar} 
                    alt={item.nama} 
                    fill 
                    className="object-cover" 
                  />
                </div>
                <div className="flex-1 space-y-1">
                  <h3 className="font-bold text-gray-100 text-lg">{item.nama}</h3>
                  <div className="text-primary font-black text-xl">Rp {item.harga.toLocaleString('id-ID')}</div>
                </div>
                <div className="flex items-center gap-1 bg-black/50 p-1.5 rounded-xl border border-gray-800">
                  <button 
                    onClick={() => updateQuantity(item.nama, item.jumlah - 1)}
                    className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 hover:text-white flex items-center justify-center font-bold transition-colors cursor-pointer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/></svg>
                  </button>
                  <span className="w-12 text-center font-bold text-lg">{item.jumlah}</span>
                  <button 
                    onClick={() => updateQuantity(item.nama, item.jumlah + 1)}
                    className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 hover:text-white flex items-center justify-center font-bold transition-colors cursor-pointer text-primary"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 p-8 rounded-3xl h-fit space-y-8 shadow-2xl relative overflow-hidden">
          {/* subtle glow bg */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
          
          <h2 className="text-2xl font-extrabold text-white">Ringkasan</h2>
          
          <div className="space-y-4 text-gray-300 font-medium">
            <div className="flex justify-between items-center bg-gray-900/50 p-4 rounded-xl">
              <span className="text-gray-400">Subtotal</span>
              <span className="font-bold text-white">Rp {subtotal.toLocaleString('id-ID')}</span>
            </div>
            <div className="flex justify-between items-center px-4 py-2 text-sm">
              <span className="text-gray-500">Ongkos Kirim</span>
              <span className="text-gray-400 italic">Dihitung saat checkout</span>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-6 flex justify-between items-end">
            <span className="text-gray-400 font-medium mb-1">Total</span>
            <span className="text-3xl font-black text-primary">Rp {subtotal.toLocaleString('id-ID')}</span>
          </div>
          
          <Link href="/checkout" className={`flex items-center justify-center gap-2 w-full text-center py-4 rounded-xl transition-all font-bold text-lg ${items.length === 0 ? 'bg-gray-800/50 text-gray-500 cursor-not-allowed border border-gray-700/50' : 'bg-primary hover:bg-emerald-400 text-black shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:-translate-y-0.5'}`}>
            <span>Checkout</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
