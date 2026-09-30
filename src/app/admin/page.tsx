export default function AdminDashboard() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex items-center justify-between border-b border-gray-800 pb-4">
        <div>
          <h1 className="text-3xl font-bold">Dashboard Admin</h1>
          <p className="text-gray-400 mt-1">Kelola pesanan dan stok dengan mudah (Bypass Login untuk Mockup)</p>
        </div>
        <div className="flex gap-4">
          <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Kelola Produk
          </button>
        </div>
      </div>

      {/* Statistik Cepat */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
          <div className="text-gray-400 text-sm mb-1">Pesanan Baru</div>
          <div className="text-3xl font-bold text-white">5</div>
        </div>
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
          <div className="text-gray-400 text-sm mb-1">Perlu Dikirim</div>
          <div className="text-3xl font-bold text-yellow-400">3</div>
        </div>
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
          <div className="text-gray-400 text-sm mb-1">Pendapatan Hari Ini</div>
          <div className="text-3xl font-bold text-primary">Rp 450k</div>
        </div>
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
          <div className="text-gray-400 text-sm mb-1">Total Pelanggan</div>
          <div className="text-3xl font-bold text-white">124</div>
        </div>
      </div>

      {/* Tabel Pesanan Terbaru */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
        <div className="p-6 border-b border-gray-800 flex justify-between items-center">
          <h2 className="text-xl font-bold">Pesanan Terbaru</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-950 text-gray-400 text-sm">
                <th className="p-4 font-medium">Order ID</th>
                <th className="p-4 font-medium">Pelanggan</th>
                <th className="p-4 font-medium">Item</th>
                <th className="p-4 font-medium">Total</th>
                <th className="p-4 font-medium">Metode</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium">Aksi</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-800">
              <tr className="hover:bg-gray-800/50 transition-colors">
                <td className="p-4 font-mono text-gray-300">#ORD-001</td>
                <td className="p-4">
                  <div className="font-semibold text-white">Budi Santoso</div>
                  <div className="text-xs text-gray-400">08123456789</div>
                </td>
                <td className="p-4 text-gray-300">2x Anubias Nana...</td>
                <td className="p-4 font-bold text-white">Rp 150.000</td>
                <td className="p-4">
                  <span className="bg-blue-900/50 text-blue-400 px-2 py-1 rounded text-xs">Ojol</span>
                </td>
                <td className="p-4">
                  <span className="bg-green-900/50 text-green-400 border border-green-800 px-2 py-1 rounded text-xs flex w-fit items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span> Lunas
                  </span>
                </td>
                <td className="p-4">
                  <button className="bg-primary hover:bg-primary-dark text-black px-3 py-1.5 rounded-md text-xs font-bold transition-colors">
                    Kirim Barang
                  </button>
                </td>
              </tr>
              
              <tr className="hover:bg-gray-800/50 transition-colors">
                <td className="p-4 font-mono text-gray-300">#ORD-002</td>
                <td className="p-4">
                  <div className="font-semibold text-white">Siti Aminah</div>
                  <div className="text-xs text-gray-400">08987654321</div>
                </td>
                <td className="p-4 text-gray-300">1x Filter Hang-on...</td>
                <td className="p-4 font-bold text-white">Rp 85.000</td>
                <td className="p-4">
                  <span className="bg-purple-900/50 text-purple-400 px-2 py-1 rounded text-xs">J&T</span>
                </td>
                <td className="p-4">
                  <span className="bg-yellow-900/50 text-yellow-400 border border-yellow-800 px-2 py-1 rounded text-xs flex w-fit items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span> Menunggu Bayar
                  </span>
                </td>
                <td className="p-4">
                  <button className="bg-gray-800 text-gray-500 cursor-not-allowed px-3 py-1.5 rounded-md text-xs font-bold transition-colors" disabled>
                    Kirim Barang
                  </button>
                </td>
              </tr>
              
              <tr className="hover:bg-gray-800/50 transition-colors">
                <td className="p-4 font-mono text-gray-300">#ORD-003</td>
                <td className="p-4">
                  <div className="font-semibold text-white">Joko Widodo</div>
                  <div className="text-xs text-gray-400">08555444333</div>
                </td>
                <td className="p-4 text-gray-300">5x Batu Seiryu...</td>
                <td className="p-4 font-bold text-white">Rp 60.000</td>
                <td className="p-4">
                  <span className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs">Self-Pickup</span>
                </td>
                <td className="p-4">
                  <span className="bg-green-900/50 text-green-400 border border-green-800 px-2 py-1 rounded text-xs flex w-fit items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span> Selesai
                  </span>
                </td>
                <td className="p-4">
                  <button className="bg-gray-800 text-gray-300 hover:bg-gray-700 px-3 py-1.5 rounded-md text-xs font-medium transition-colors">
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
