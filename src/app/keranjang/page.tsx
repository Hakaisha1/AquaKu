"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "../../components/CartProvider";

export default function Keranjang() {
  const { items, updateQuantity, getCartTotal } = useCart();
  const subtotal = getCartTotal();

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex items-center gap-4 border-b border-gray-800 pb-4">
        <Link href="/" className="text-gray-400 hover:text-primary transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </Link>
        <h1 className="text-3xl font-bold">Keranjang Belanja</h1>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-12 bg-gray-900 border border-gray-800 rounded-xl">
              <p className="text-gray-400 mb-4">Keranjang Anda masih kosong.</p>
              <Link href="/" className="text-primary hover:underline">Belanja Sekarang</Link>
            </div>
          ) : (
            items.map((item, i) => (
              <div key={i} className="flex items-center gap-4 bg-gray-900 border border-gray-800 p-4 rounded-xl">
                <div className="relative w-20 h-20 bg-gray-800 rounded-lg overflow-hidden flex-shrink-0">
                  <Image 
                    src={item.gambar} 
                    alt={item.nama} 
                    fill 
                    className="object-cover" 
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-100">{item.nama}</h3>
                  <div className="text-primary font-bold mt-1">Rp {item.harga.toLocaleString('id-ID')}</div>
                </div>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => updateQuantity(item.nama, item.jumlah - 1)}
                    className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center font-bold cursor-pointer"
                  >
                    -
                  </button>
                  <span className="w-4 text-center">{item.jumlah}</span>
                  <button 
                    onClick={() => updateQuantity(item.nama, item.jumlah + 1)}
                    className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center font-bold cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl h-fit space-y-6">
          <h2 className="text-xl font-bold">Ringkasan</h2>
          
          <div className="space-y-3 text-sm text-gray-300">
            <div className="flex justify-between">
              <span>Subtotal ({items.reduce((acc, it) => acc + it.jumlah, 0)} item)</span>
              <span>Rp {subtotal.toLocaleString('id-ID')}</span>
            </div>
            <div className="flex justify-between text-gray-500">
              <span>Ongkos Kirim</span>
              <span>Dihitung saat checkout</span>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-4 flex justify-between font-bold text-lg">
            <span>Total</span>
            <span className="text-primary">Rp {subtotal.toLocaleString('id-ID')}</span>
          </div>
          
          <Link href="/checkout" className={`block w-full text-center py-3 rounded-lg transition-colors font-semibold ${items.length === 0 ? 'bg-gray-800 text-gray-500 pointer-events-none' : 'bg-primary hover:bg-primary-dark text-black'}`}>
            Lanjut ke Pembayaran
          </Link>
        </div>
      </div>
    </div>
  );
}
