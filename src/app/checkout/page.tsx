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
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex items-center gap-4 border-b border-gray-800 pb-4">
        <Link href="/keranjang" className="text-gray-400 hover:text-primary transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </Link>
        <h1 className="text-3xl font-bold">Checkout</h1>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          {/* Data Pelanggan */}
          <section className="bg-gray-900 border border-gray-800 p-6 rounded-xl space-y-4">
            <h2 className="text-xl font-bold text-primary">1. Data Pelanggan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm text-gray-400 block">Nama Lengkap</label>
                <input type="text" className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary" placeholder="Budi Santoso" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400 block">Nomor WhatsApp</label>
                <input type="tel" className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary" placeholder="08123456789" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-400 block">Alamat Pengiriman (Jika menggunakan kurir)</label>
              <textarea className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary min-h-24" placeholder="Jl. Contoh No. 123..."></textarea>
            </div>
          </section>

          {/* Metode Pengiriman */}
          <section className="bg-gray-900 border border-gray-800 p-6 rounded-xl space-y-4">
            <h2 className="text-xl font-bold text-primary">2. Metode Pengiriman</h2>
            <div className="space-y-3">
              <label className="flex items-center gap-3 p-4 border border-gray-700 hover:border-gray-500 bg-black rounded-lg cursor-pointer transition-colors" onClick={() => setOngkir(15000)}>
                <input type="radio" name="pengiriman" className="w-5 h-5 accent-primary" defaultChecked />
                <div className="flex-1">
                  <div className="font-bold">Ojek Online (Ojol)</div>
                  <div className="text-sm text-gray-400">Tarif flat berdasarkan jarak radius Mapbox</div>
                </div>
                <div className="font-bold">Rp 15.000</div>
              </label>
              <label className="flex items-center gap-3 p-4 border border-gray-700 hover:border-gray-500 bg-black rounded-lg cursor-pointer transition-colors" onClick={() => setOngkir(22000)}>
                <input type="radio" name="pengiriman" className="w-5 h-5 accent-primary" />
                <div className="flex-1">
                  <div className="font-bold">Reguler (J&T)</div>
                  <div className="text-sm text-gray-400">Estimasi 2-3 Hari via RajaOngkir</div>
                </div>
                <div className="font-bold">Rp 22.000</div>
              </label>
              <label className="flex items-center gap-3 p-4 border border-gray-700 hover:border-gray-500 bg-black rounded-lg cursor-pointer transition-colors" onClick={() => setOngkir(0)}>
                <input type="radio" name="pengiriman" className="w-5 h-5 accent-primary" />
                <div className="flex-1">
                  <div className="font-bold">Ambil Sendiri (Self-Pickup)</div>
                  <div className="text-sm text-gray-400">Ambil langsung di toko</div>
                </div>
                <div className="font-bold text-primary">Gratis</div>
              </label>
            </div>
          </section>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl space-y-6">
            <h2 className="text-xl font-bold">Pembayaran</h2>
            
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex justify-between">
                <span>Subtotal ({items.reduce((acc, it) => acc + it.jumlah, 0)} item)</span>
                <span>Rp {subtotal.toLocaleString('id-ID')}</span>
              </div>
              <div className="flex justify-between">
                <span>Ongkos Kirim</span>
                <span>Rp {ongkir.toLocaleString('id-ID')}</span>
              </div>
            </div>
            
            <div className="border-t border-gray-800 pt-4 flex justify-between font-bold text-lg">
              <span>Total</span>
              <span className="text-primary">Rp {total.toLocaleString('id-ID')}</span>
            </div>
            
            <div className="pt-2">
              <label className="text-sm text-gray-400 block mb-2">Pilih Metode Pembayaran</label>
              <select className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary appearance-none">
                <option>QRIS (Midtrans)</option>
                <option>BCA Virtual Account</option>
                <option>Mandiri Virtual Account</option>
              </select>
            </div>

            <button className="w-full bg-primary hover:bg-primary-dark text-black font-semibold py-4 rounded-lg transition-colors flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
              Bayar Sekarang
            </button>
            <p className="text-xs text-center text-gray-500">
              Dengan memproses pembayaran, Anda menyetujui syarat & ketentuan kami. (Mockup Midtrans Sandbox)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
