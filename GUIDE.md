# Analisis Kebutuhan Klien: Website E-Commerce Aquascape

## 1. Hasil Wawancara Klien

| # | Topik | Pertanyaan | Jawaban Klien |
|---|-------|-----------|---------------|
| 1 | Harapan Utama | Selain potongan biaya besar, kendala apa lagi di marketplace sebelumnya, dan apa harapan terbesar dari website mandiri? | Fokus pada penyederhanaan operasional dan biaya |
| 2 | Kesan Toko | Suasana/kesan apa yang ingin ditonjolkan? | Simple, tema aquascape, warna **hitam-hijau** |
| 3 | Katalog Produk | Berapa macam barang, apakah ada banyak varian? | Mengacu pada toko Shopee yang sudah ada (cek link Shopee) |
| 4 | Sistem Pembayaran | Transfer manual atau otomatis (QRIS, Virtual Account)? | **Otomatis** |
| 5 | Metode Pengiriman | Cara kirim yang paling sering dipakai? | J&T, Ojol, cek ongkir otomatis, Ambil Sendiri (Self-Pickup) |
| 6 | Jalur Tanya Jawab | Perlu tombol langsung ke WhatsApp admin? | **Ya**, WhatsApp |
| 7 | Manajemen Stok | Potong stok otomatis atau manual? | **Otomatis** |
| 8 | Strategi Promo | Apakah sering ada diskon/gratis ongkir? | Opsi masa depan, **bukan prioritas** saat ini |
| 9 | Operasional Harian | Siapa yang memegang website? | **Owner langsung**, tanpa admin khusus |
| 10 | Data Pelanggan | Perlu pengumpulan data pembeli (WA/Email) otomatis? | **Ya** |

---

## 2. Rancangan Arsitektur dan Fitur (Spesifikasi Teknis)

### a. Antarmuka (UI/UX)
- Panel admin dibuat **sesederhana mungkin** karena dipegang langsung oleh owner tanpa staf.
- **Visual:** etalase dengan palet hitam-hijau bertema aquascape.
- **Tech stack (frontend):** React + Tailwind CSS. Komponen custom yang ringan, modern, dan sangat responsif di layar HP.

### b. Integrasi Pembayaran Otomatis
- Checkout terhubung dengan payment gateway (contoh: **Midtrans**).
- Mendukung **QRIS** dan **Virtual Account**.
- Status pesanan otomatis berubah menjadi **"Lunas"** setelah pelanggan membayar, sehingga owner tidak perlu cek mutasi rekening manual.

### c. Logika Pengiriman & Cek Ongkir

| Metode | Pendekatan |
|--------|-----------|
| Reguler (J&T) | Integrasi API pihak ketiga (mis. **RajaOngkir**) untuk tarif real-time |
| Ojol | Logika custom di backend: **tarif flat** berdasarkan radius lokal |
| Self-Pickup | Logika custom di backend: **ongkir Rp0** |

Backend untuk logika custom: Express atau ElysiaJS.

### d. Migrasi Katalog & Database Terpusat
- Produk, deskripsi, dan foto dari Shopee dipakai sebagai **seed data awal**.
- **Database:** PostgreSQL.
- **Otomatisasi stok:** trigger/fungsi backend yang mengurangi stok di tabel produk setiap transaksi berhasil dibayar.
- **Data pelanggan:** saat checkout, nama dan nomor WhatsApp pembeli disimpan ke tabel pelanggan khusus sebagai aset basis data klien.

### e. Komunikasi & Skalabilitas
- **WhatsApp:** Floating Action Button (FAB) di sudut layar yang membuka WhatsApp owner dengan pesan terisi otomatis, contoh: `"Halo, saya tertarik dengan produk [Nama Produk]..."`.
- **Promo:** ditunda. Cukup siapkan struktur database yang fleksibel agar diskon/voucher mudah ditambahkan pada iterasi berikutnya.

---

## 3. Analisis Strategis MVP

1. **Validasi margin keuntungan**
   - Sistem harus transparan soal biaya.
   - Diskusikan skema biaya per transaksi payment gateway (Midtrans) dengan klien sejak awal agar ekspektasi potongan realistis.

2. **Identitas visual & basis data**
   - Hitam-hijau mengarah ke **dark mode** agar visual produk (tanaman/ikan) menonjol.
   - Scraping katalog Shopee menguntungkan karena struktur data tidak perlu dirancang dari nol.

3. **Prioritas otomatisasi terpusat**
   - Operasional *hands-off*; owner hanya berinteraksi dengan sistem saat **mengemas barang**.
   - Rancang alur kerja (BPMN/DFD) sesuai hal tersebut.
   - **Sinkronisasi webhook** dari pembayaran hingga pemotongan stok adalah fitur paling krusial.

4. **Kompleksitas logika checkout** (titik terberat)
   - Rancang arsitektur keranjang yang memisahkan logika:
     - API ekspedisi nasional (RajaOngkir)
     - Pengiriman lokal (ojol/tarif jarak)
     - Self-pickup

5. **Efisiensi waktu pengembangan**
   - Klien pragmatis: CS dialihkan ke WhatsApp dan promo ditunda, sehingga waktu pengembangan berkurang drastis.
   - Fokus pada skema relasi database yang kuat (PostgreSQL + Prisma) untuk mengumpulkan data kontak pelanggan.

---

## Ringkasan Tech Stack

| Layer | Teknologi |
|-------|-----------|
| Frontend | React, Tailwind CSS |
| Backend | Express atau ElysiaJS |
| Database / ORM | PostgreSQL, Prisma |
| Pembayaran | Midtrans (QRIS, Virtual Account) |
| Ongkir | RajaOngkir (J&T), logika custom (Ojol, Self-Pickup) |
| Komunikasi | WhatsApp FAB dengan pesan otomatis |

## Ruang Lingkup MVP

**Masuk:** katalog dari Shopee, checkout dengan pembayaran otomatis, cek ongkir (J&T/Ojol/Self-Pickup), potong stok otomatis, penyimpanan data pelanggan, FAB WhatsApp, panel admin sederhana, tema dark hitam-hijau.

**Ditunda:** promo/diskon/voucher (siapkan struktur database fleksibel saja).