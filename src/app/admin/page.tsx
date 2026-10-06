export default function AdminDashboard() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-gray-800/50 pb-6 gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Dashboard Admin</h1>
          <p className="text-gray-400 mt-1">Kelola pesanan dan stok dengan mudah (Bypass Login untuk Mockup)</p>
        </div>
        <div className="flex gap-4">
          <button className="bg-gray-800/80 hover:bg-gray-700 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-sm border border-gray-700 hover:border-gray-500">
            Kelola Produk
          </button>
        </div>
      </div>

      {/* Statistik Cepat */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/60 p-6 rounded-2xl shadow-lg hover:border-primary/30 transition-colors">
          <div className="flex items-center gap-3 mb-3 text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            <div className="text-gray-400 font-medium text-sm">Pesanan Baru</div>
          </div>
          <div className="text-4xl font-black text-white">5</div>
        </div>
        <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/60 p-6 rounded-2xl shadow-lg hover:border-yellow-400/30 transition-colors">
          <div className="flex items-center gap-3 mb-3 text-yellow-500">
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            <div className="text-gray-400 font-medium text-sm">Perlu Dikirim</div>
          </div>
          <div className="text-4xl font-black text-white">3</div>
        </div>
        <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/60 p-6 rounded-2xl shadow-lg hover:border-primary/30 transition-colors">
          <div className="flex items-center gap-3 mb-3 text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            <div className="text-gray-400 font-medium text-sm">Pendapatan Hari Ini</div>
          </div>
          <div className="text-4xl font-black text-primary">450k</div>
        </div>
        <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/60 p-6 rounded-2xl shadow-lg hover:border-blue-400/30 transition-colors">
          <div className="flex items-center gap-3 mb-3 text-blue-400">
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            <div className="text-gray-400 font-medium text-sm">Total Pelanggan</div>
          </div>
          <div className="text-4xl font-black text-white">124</div>
        </div>
      </div>

      {/* Tabel Pesanan Terbaru */}
      <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/60 rounded-3xl overflow-hidden shadow-xl">
        <div className="p-6 border-b border-gray-800/50 flex justify-between items-center bg-black/20">
          <h2 className="text-xl font-bold text-white">Pesanan Terbaru</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-900/50 text-gray-400 text-xs uppercase tracking-wider">
                <th className="p-5 font-bold">Order ID</th>
                <th className="p-5 font-bold">Pelanggan</th>
                <th className="p-5 font-bold">Item</th>
                <th className="p-5 font-bold">Total</th>
                <th className="p-5 font-bold">Metode</th>
                <th className="p-5 font-bold">Status</th>
                <th className="p-5 font-bold text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-800/50">
              <tr className="hover:bg-gray-800/30 transition-colors">
                <td className="p-5 font-mono text-gray-300 font-medium">#ORD-001</td>
                <td className="p-5">
                  <div className="font-bold text-white">Budi Santoso</div>
                  <div className="text-xs text-gray-500 mt-1">08123456789</div>
                </td>
                <td className="p-5 text-gray-400">2x Anubias Nana...</td>
                <td className="p-5 font-bold text-white">Rp 150.000</td>
                <td className="p-5">
                  <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2.5 py-1 rounded-md text-xs font-bold">Ojol</span>
                </td>
                <td className="p-5">
                  <span className="bg-green-500/10 text-green-400 border border-green-500/20 px-2.5 py-1 rounded-md text-xs font-bold flex w-fit items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span> Lunas
                  </span>
                </td>
                <td className="p-5 text-right">
                  <button className="bg-primary hover:bg-emerald-400 text-black px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-[0_0_10px_rgba(16,185,129,0.2)] hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] hover:-translate-y-0.5">
                    Kirim Barang
                  </button>
                </td>
              </tr>
              
              <tr className="hover:bg-gray-800/30 transition-colors">
                <td className="p-5 font-mono text-gray-300 font-medium">#ORD-002</td>
                <td className="p-5">
                  <div className="font-bold text-white">Siti Aminah</div>
                  <div className="text-xs text-gray-500 mt-1">08987654321</div>
                </td>
                <td className="p-5 text-gray-400">1x Filter Hang-on...</td>
                <td className="p-5 font-bold text-white">Rp 85.000</td>
                <td className="p-5">
                  <span className="bg-purple-500/10 text-purple-400 border border-purple-500/20 px-2.5 py-1 rounded-md text-xs font-bold">J&T</span>
                </td>
                <td className="p-5">
                  <span className="bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 px-2.5 py-1 rounded-md text-xs font-bold flex w-fit items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse"></span> Menunggu
                  </span>
                </td>
                <td className="p-5 text-right">
                  <button className="bg-gray-800 text-gray-500 cursor-not-allowed px-4 py-2 rounded-xl text-xs font-bold transition-all border border-gray-700/50" disabled>
                    Kirim Barang
                  </button>
                </td>
              </tr>
              
              <tr className="hover:bg-gray-800/30 transition-colors">
                <td className="p-5 font-mono text-gray-300 font-medium">#ORD-003</td>
                <td className="p-5">
                  <div className="font-bold text-white">Joko Widodo</div>
                  <div className="text-xs text-gray-500 mt-1">08555444333</div>
                </td>
                <td className="p-5 text-gray-400">5x Batu Seiryu...</td>
                <td className="p-5 font-bold text-white">Rp 60.000</td>
                <td className="p-5">
                  <span className="bg-gray-500/10 text-gray-400 border border-gray-500/20 px-2.5 py-1 rounded-md text-xs font-bold">Self-Pickup</span>
                </td>
                <td className="p-5">
                  <span className="bg-gray-500/10 text-gray-400 border border-gray-500/20 px-2.5 py-1 rounded-md text-xs font-bold flex w-fit items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-500"></span> Selesai
                  </span>
                </td>
                <td className="p-5 text-right">
                  <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-xl text-xs font-bold transition-all border border-gray-700 hover:border-gray-500">
                    Lihat Detail
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
