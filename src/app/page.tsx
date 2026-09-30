"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import dataProduk from "../prisma/data.json";
import { useCart } from "../components/CartProvider";

// Type untuk produk dari JSON
type Product = {
  nama: string;
  deskripsi: string | null;
  harga: number;
  gambar: string | null;
  kategori: string | null;
};

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { addToCart } = useCart();
  const router = useRouter();

  const handleAddToCart = () => {
    if (selectedProduct) {
      addToCart(selectedProduct);
      setSelectedProduct(null);
    }
  };

  const handleBuyNow = () => {
    if (selectedProduct) {
      addToCart(selectedProduct);
      router.push("/checkout");
    }
  };

  return (
    <div className="space-y-12 relative">
      {/* Hero Section */}
      <section className="relative rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 p-8 sm:p-12 text-center md:text-left flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Ciptakan Ekosistem <span className="text-primary">Aquascape</span> Impianmu
          </h1>
          <p className="text-gray-400 text-lg max-w-xl">
            Toko terlengkap untuk segala kebutuhan aquascape Anda. Kualitas terjamin, pengiriman aman ke seluruh Indonesia.
          </p>
          <div className="pt-4">
            <a href="#katalog" className="bg-primary hover:bg-primary-dark text-black font-semibold px-6 py-3 rounded-lg transition-colors inline-block">
              Lihat Katalog
            </a>
          </div>
        </div>
      </section>

      {/* Katalog Section */}
      <section id="katalog" className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Produk Terbaru</h2>
          <div className="flex gap-2 text-sm">
            <span className="px-3 py-1 bg-gray-800 rounded-full cursor-pointer hover:bg-gray-700">Semua</span>
            <span className="px-3 py-1 border border-gray-800 rounded-full cursor-pointer hover:bg-gray-800 hidden sm:block">Tanaman</span>
            <span className="px-3 py-1 border border-gray-800 rounded-full cursor-pointer hover:bg-gray-800 hidden sm:block">Hardscape</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {dataProduk.map((product, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedProduct(product)}
              className="group bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-primary transition-colors flex flex-col cursor-pointer"
            >
              <div className="relative aspect-[4/3] w-full bg-gray-800">
                <Image
                  src={product.gambar || "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80&w=400&h=300"}
                  alt={product.nama}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs text-primary mb-1">{product.kategori || "Aksesoris"}</div>
                  <h3 className="font-medium text-gray-100 line-clamp-2 mb-2">{product.nama}</h3>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="font-bold text-lg">Rp {product.harga.toLocaleString('id-ID')}</span>
                  <button 
                    className="bg-gray-800 hover:bg-primary hover:text-black p-2 rounded-lg transition-colors" 
                    aria-label="Detail Produk"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal / Card Component */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedProduct(null)}>
          <div 
            className="bg-gray-900 border border-gray-800 rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative"
            onClick={(e) => e.stopPropagation()} // Hindari modal tertutup kalau diklik isinya
          >
            {/* Tombol Close */}
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black text-white w-8 h-8 rounded-full flex items-center justify-center z-10 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>

            {/* Gambar Produk */}
            <div className="relative w-full md:w-2/5 aspect-square md:aspect-auto bg-gray-800">
              <Image
                src={selectedProduct.gambar || "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80&w=400&h=300"}
                alt={selectedProduct.nama}
                fill
                className="object-cover"
              />
            </div>

            {/* Detail Produk */}
            <div className="p-6 md:p-8 w-full md:w-3/5 flex flex-col">
              <div className="text-xs text-primary mb-2 uppercase tracking-wider font-semibold">
                {selectedProduct.kategori || "Aksesoris"}
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">{selectedProduct.nama}</h2>
              <div className="text-3xl font-extrabold text-primary mb-6">
                Rp {selectedProduct.harga.toLocaleString('id-ID')}
              </div>

              {/* Data Dummy */}
              <div className="space-y-4 flex-1">
                <p className="text-gray-400 text-sm leading-relaxed">
                  {selectedProduct.deskripsi || "Produk aquascape berkualitas tinggi yang sangat cocok untuk melengkapi keindahan ekosistem di akuarium Anda. Dirawat dan dipacking dengan standar ketat untuk memastikan barang sampai di tangan Anda dalam kondisi sempurna."}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-300">
                  <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500"><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    <span>4.9 (128 Ulasan)</span>
                  </div>
                  <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                  <div>Terjual 500+</div>
                  <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                  <div className="text-green-400 font-medium">Stok: 45</div>
                </div>
              </div>

              {/* Tombol Aksi */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 border-2 border-gray-700 hover:border-primary bg-transparent hover:bg-primary/10 text-white font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                  Tambah Keranjang
                </button>
                <button 
                  onClick={handleBuyNow}
                  className="flex-1 bg-primary hover:bg-primary-dark text-black font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
                  Beli Langsung
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
