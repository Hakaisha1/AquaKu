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
  const [activeTab, setActiveTab] = useState("Semua");
  const { addToCart } = useCart();
  const router = useRouter();

  const filteredProducts = activeTab === "Semua" 
    ? dataProduk 
    : dataProduk.filter((product) => {
        let cat: string | null = product.kategori;
        if (!cat) {
          const name = product.nama.toLowerCase();
          if (name.includes("tanaman") || name.includes("camboba") || name.includes("criptocoryne") || name.includes("criptocorine")) {
            cat = "Tanaman";
          } else if (name.includes("udang") || name.includes("ikan") || name.includes("cupang") || name.includes("manfish") || name.includes("algaeter") || name.includes("molly")) {
            cat = "Fauna";
          } else if (name.includes("pipa") || name.includes("batu") || name.includes("kayu") || name.includes("pasir")) {
            cat = "Hardscape";
          } else {
            cat = "Aksesoris";
          }
        }
        return (cat || "").toLowerCase() === activeTab.toLowerCase();
      });

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
    <div className="space-y-16 relative">
      {/* Hero Section */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-8 sm:p-16 text-center md:text-left flex flex-col md:flex-row items-center gap-12 shadow-2xl">
        {/* Glow Effects */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="flex-1 space-y-6 relative z-10">
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-2 backdrop-blur-sm">
            🌿 Premium Quality Aquascape
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-white">
            Ciptakan Ekosistem <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-300">Aquascape</span> Impianmu
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed mx-auto md:mx-0">
            Toko terlengkap untuk segala kebutuhan aquascape Anda. Kualitas terjamin, pengiriman aman ke seluruh Indonesia.
          </p>
          <div className="pt-6 flex flex-wrap gap-4 justify-center md:justify-start">
            <a href="#katalog" className="bg-primary hover:bg-emerald-400 text-black font-bold px-8 py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:-translate-y-1">
              Lihat Katalog
            </a>
          </div>
        </div>
        
        {/* Decorative Element for Hero */}
        <div className="hidden md:block relative w-1/3 aspect-square max-w-sm rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl shadow-primary/20 bg-black">
            <Image 
                src="/LOGO.png"
                alt="Logo Aquaku"
                fill
                className="object-cover hover:scale-110 transition-transform duration-700"
            />
        </div>
      </section>

      {/* Katalog Section */}
      <section id="katalog" className="space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <h2 className="text-3xl font-bold tracking-tight text-white">Produk Terbaru</h2>
          <div className="flex gap-2 text-sm overflow-x-auto pb-2 sm:pb-0 max-w-full">
            {["Semua", "Tanaman", "Hardscape", "Fauna", "Aksesoris"].map((tab) => (
              <span 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 font-semibold rounded-full cursor-pointer transition-colors whitespace-nowrap ${activeTab === tab ? "bg-white text-black" : "border border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"}`}>
                {tab}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => {
            let displayCat: string | null = product.kategori;
            if (!displayCat) {
              const name = product.nama.toLowerCase();
              if (name.includes("tanaman") || name.includes("camboba") || name.includes("criptocoryne") || name.includes("criptocorine")) displayCat = "Tanaman";
              else if (name.includes("udang") || name.includes("ikan") || name.includes("cupang") || name.includes("manfish") || name.includes("algaeter") || name.includes("molly")) displayCat = "Fauna";
              else if (name.includes("pipa") || name.includes("batu") || name.includes("kayu") || name.includes("pasir")) displayCat = "Hardscape";
              else displayCat = "Aksesoris";
            }

            return (
            <div 
              key={index} 
              onClick={() => setSelectedProduct({ ...product, kategori: displayCat })}
              className="group bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-primary/50 hover:bg-gray-800/40 transition-all duration-300 flex flex-col cursor-pointer shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] w-full bg-gray-800 overflow-hidden">
                <Image
                  src={product.gambar || "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80&w=400&h=300"}
                  alt={product.nama}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs text-primary mb-2 font-semibold tracking-wider uppercase">{displayCat}</div>
                  <h3 className="font-semibold text-gray-100 line-clamp-2 mb-2 text-lg group-hover:text-white transition-colors">{product.nama}</h3>
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-800/50">
                  <span className="font-bold text-xl text-white">Rp {product.harga.toLocaleString('id-ID')}</span>
                  <button 
                    className="bg-gray-800/80 hover:bg-primary hover:text-black p-2.5 rounded-xl transition-all duration-300 hover:scale-110" 
                    aria-label="Detail Produk"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </button>
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </section>

      {/* Modal / Card Component */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md" onClick={() => setSelectedProduct(null)}>
          <div 
            className="bg-gray-900 border border-gray-800 rounded-3xl w-full max-w-4xl overflow-hidden shadow-2xl shadow-primary/10 flex flex-col md:flex-row relative animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Tombol Close */}
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 bg-black/40 hover:bg-black text-white w-10 h-10 rounded-full flex items-center justify-center z-10 transition-all hover:scale-110 backdrop-blur-sm border border-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>

            {/* Gambar Produk */}
            <div className="relative w-full md:w-1/2 aspect-square md:aspect-auto bg-gray-800">
              <Image
                src={selectedProduct.gambar || "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80&w=400&h=300"}
                alt={selectedProduct.nama}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900/20 hidden md:block"></div>
            </div>

            {/* Detail Produk */}
            <div className="p-6 md:p-10 w-full md:w-1/2 flex flex-col bg-gradient-to-br from-gray-900 to-black">
              <div className="text-sm text-primary mb-3 uppercase tracking-widest font-bold">
                {selectedProduct.kategori || "Aksesoris"}
              </div>
              <h2 className="text-3xl font-extrabold text-white mb-4 leading-tight">{selectedProduct.nama}</h2>
              <div className="text-4xl font-black text-primary mb-8">
                Rp {selectedProduct.harga.toLocaleString('id-ID')}
              </div>

              {/* Data Dummy */}
              <div className="space-y-6 flex-1">
                <p className="text-gray-300 text-base leading-relaxed">
                  {selectedProduct.deskripsi || "Produk aquascape berkualitas tinggi yang sangat cocok untuk melengkapi keindahan ekosistem di akuarium Anda. Dirawat dan dipacking dengan standar ketat untuk memastikan barang sampai di tangan Anda dalam kondisi sempurna."}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 bg-gray-800/30 p-4 rounded-xl border border-gray-800/50">
                  <div className="flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-500"><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    <span className="font-medium text-gray-200">4.9</span> (128)
                  </div>
                  <div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
                  <div>Terjual 500+</div>
                  <div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
                  <div className="text-emerald-400 font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Stok: 45
                  </div>
                </div>
              </div>

              {/* Tombol Aksi */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 border-2 border-gray-700 hover:border-primary bg-gray-900 hover:bg-primary/10 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 hover:-translate-y-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                  Keranjang
                </button>
                <button 
                  onClick={handleBuyNow}
                  className="flex-1 bg-primary hover:bg-emerald-400 text-black font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:-translate-y-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
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
