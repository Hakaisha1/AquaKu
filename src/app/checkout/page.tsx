"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "../../components/CartProvider";

export default function Checkout() {
  const { items, getCartTotal } = useCart();
  const subtotal = getCartTotal();
  const [ongkir, setOngkir] = useState(15000);

  const total = subtotal + ongkir;

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center gap-4 border-b border-gray-800/50 pb-6">
        <Link href="/keranjang" className="text-gray-400 hover:text-white bg-gray-900 hover:bg-gray-800 p-2 rounded-full transition-all duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </Link>
        <h1 className="text-3xl font-extrabold tracking-tight">Checkout</h1>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Data Pelanggan */}
          <section className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/60 p-8 rounded-3xl space-y-6 shadow-lg">
            <div className="flex items-center gap-3 border-b border-gray-800/50 pb-4">
               <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">1</div>
               <h2 className="text-xl font-bold text-white">Data Pelanggan</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 block">Nama Lengkap</label>
                <input type="text" className="w-full bg-black/50 border border-gray-700 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all" placeholder="Budi Santoso" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 block">Nomor WhatsApp</label>
                <input type="tel" className="w-full bg-black/50 border border-gray-700 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all" placeholder="08123456789" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400 block">Alamat Pengiriman</label>
              <textarea className="w-full bg-black/50 border border-gray-700 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all min-h-24 resize-y" placeholder="Masukkan alamat lengkap dengan detail patokan..."></textarea>
            </div>
          </section>

          {/* Metode Pengiriman */}
          <section className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/60 p-8 rounded-3xl space-y-6 shadow-lg">
            <div className="flex items-center gap-3 border-b border-gray-800/50 pb-4">
               <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">2</div>
               <h2 className="text-xl font-bold text-white">Metode Pengiriman</h2>
            </div>
            <div className="space-y-4">
              <label className={`flex items-center gap-4 p-5 border rounded-2xl cursor-pointer transition-all ${ongkir === 15000 ? 'border-primary bg-primary/5 ring-1 ring-primary/30' : 'border-gray-700 hover:border-gray-500 bg-black/50'}`} onClick={() => setOngkir(15000)}>
                <input type="radio" name="pengiriman" className="w-5 h-5 accent-primary" checked={ongkir === 15000} readOnly />
                <div className="flex-1">
                  <div className="font-bold text-lg text-white">Ojek Online (Ojol)</div>
                  <div className="text-sm text-gray-400 mt-1">Tarif berdasarkan jarak radius Mapbox</div>
                </div>
                <div className="font-black text-lg">Rp 15.000</div>
              </label>
              
              <label className={`flex items-center gap-4 p-5 border rounded-2xl cursor-pointer transition-all ${ongkir === 22000 ? 'border-primary bg-primary/5 ring-1 ring-primary/30' : 'border-gray-700 hover:border-gray-500 bg-black/50'}`} onClick={() => setOngkir(22000)}>
                <input type="radio" name="pengiriman" className="w-5 h-5 accent-primary" checked={ongkir === 22000} readOnly />
                <div className="flex-1">
                  <div className="font-bold text-lg text-white">Reguler (J&T / JNE)</div>
                  <div className="text-sm text-gray-400 mt-1">Estimasi 2-3 Hari via RajaOngkir</div>
                </div>
                <div className="font-black text-lg">Rp 22.000</div>
              </label>

              <label className={`flex items-center gap-4 p-5 border rounded-2xl cursor-pointer transition-all ${ongkir === 0 ? 'border-primary bg-primary/5 ring-1 ring-primary/30' : 'border-gray-700 hover:border-gray-500 bg-black/50'}`} onClick={() => setOngkir(0)}>
                <input type="radio" name="pengiriman" className="w-5 h-5 accent-primary" checked={ongkir === 0} readOnly />
                <div className="flex-1">
                  <div className="font-bold text-lg text-white">Ambil Sendiri (Self-Pickup)</div>
                  <div className="text-sm text-gray-400 mt-1">Ambil langsung di toko</div>
                </div>
                <div className="font-black text-lg text-primary">Gratis</div>
              </label>
            </div>
          </section>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 p-8 rounded-3xl space-y-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
            
            <h2 className="text-2xl font-extrabold text-white">Pembayaran</h2>
            
            <div className="space-y-4 text-gray-300 font-medium">
              <div className="flex justify-between items-center bg-gray-900/50 p-4 rounded-xl">
                <span className="text-gray-400">Subtotal ({items.reduce((acc, it) => acc + it.jumlah, 0)} item)</span>
                <span className="font-bold text-white">Rp {subtotal.toLocaleString('id-ID')}</span>
              </div>
              <div className="flex justify-between items-center px-4">
                <span className="text-gray-400">Ongkos Kirim</span>
                <span className="font-bold text-white">Rp {ongkir.toLocaleString('id-ID')}</span>
              </div>
            </div>
            
            <div className="border-t border-gray-800/50 pt-6 flex justify-between items-end">
              <span className="text-gray-400 font-medium mb-1">Total Bayar</span>
              <span className="text-3xl font-black text-primary">Rp {total.toLocaleString('id-ID')}</span>
            </div>
            
            <div className="pt-4 border-t border-gray-800/50">
              <label className="text-sm font-medium text-gray-400 block mb-3">Metode Pembayaran</label>
              <div className="relative">
                <select className="w-full bg-black/60 border border-gray-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary appearance-none font-medium cursor-pointer transition-colors">
                  <option>QRIS (Midtrans)</option>
                  <option>BCA Virtual Account</option>
                  <option>Mandiri Virtual Account</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </div>
              </div>
            </div>

            <button className="w-full bg-primary hover:bg-emerald-400 text-black font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:-translate-y-0.5 text-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
              Bayar Sekarang
            </button>
            <p className="text-xs text-center text-gray-500 leading-relaxed px-4">
              Dengan memproses pembayaran, Anda menyetujui syarat & ketentuan kami. <br/>(Mockup Midtrans Sandbox)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
