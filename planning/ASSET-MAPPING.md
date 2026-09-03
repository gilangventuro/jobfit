# ASSET-MAPPING — JobFit

> Pemetaan eksplisit seluruh aset visual ke path fisik di `landings/jobfit/web/public/assets/` dan target section penggunaannya. Semua aset di bawah adalah FILE NYATA hasil ekstraksi PDF asli (`komprojobfit.pdf`) yang telah diverifikasi visual satu per satu, atau logo resmi yang diberikan user — TIDAK ADA placeholder, TIDAK ADA link fiktif.

---

## 1. Logo

| Path | Sumber | Penggunaan |
|---|---|---|
| `/assets/logo.png` | File resmi dari user (`new logo.png`, resolusi tinggi, transparan) | Navbar (sticky, semua halaman), Footer, favicon base |

---

## 2. Aset Kunci Bernama Semantik (Siap Pakai)

| Path | Deskripsi | Halaman & Section |
|---|---|---|
| `/assets/hero-hrd-professional-woman-suit.jpg` | Foto potret wanita profesional berjas, sikap percaya diri | **Beranda** — Hero (satu-satunya heroImage di seluruh situs) |
| `/assets/stock-woman-pointing-solution-idea.jpg` | Wanita profesional menunjuk ke atas (gestur solusi/ide) | **Beranda** — Solution (pembuka section) |
| `/assets/stock-woman-handshake-collaborate.jpg` | Wanita profesional mengulurkan tangan | **Kontak** — Section solution (opsional, sisi form) |
| `/assets/stock-man-frustrated-recruitment-problem.jpg` | Pria memegang kepala, ekspresi frustrasi | **Beranda** — Problem section |
| `/assets/office-modern-workspace-interior.jpg` | Interior kantor modern, open space, tanaman | **Tentang Kami** — About (split-image kiri) |
| `/assets/office-team-meeting-blue-overlay.jpg` | Foto tim rapat, overlay biru brand | **Beranda** — CTA penutup; **Tentang Kami** — About (split-image kanan) |
| `/assets/screenshot-jobfit-disc-personality-test-mobile.jpg` | Screenshot asli mobile app JobFit, halaman tes DISC (logo JobFit terlihat) | **Beranda** & **Produk** — Modul 1 Psikotes Online |
| `/assets/screenshot-jobfit-dashboard-informatif-mobile.jpg` | Screenshot mobile dashboard JobFit | **Beranda** (Modul 3 ilustrasi) & **Produk** — Fitur Dashboard Informatif |
| `/assets/screenshot-jobfit-hasil-test-disc-report.jpg` | Screenshot hasil tes DISC (grafik D-I-S-C, logo JobFit) | **Produk** — Fitur Hasil Tes Menyeluruh |
| `/assets/screenshot-jobfit-hasil-test-disc-detail.jpg` | Detail hasil tes DISC per kandidat | Cadangan galeri produk (opsional, jika perlu variasi tambahan di Produk) |
| `/assets/mockup-bulk-input-koresponden-form.jpg` | Form UI "Tambah Koresponden" + upload Excel | **Produk** — Fitur Input Bulk Koresponden |
| `/assets/mockup-survey-mobile-transparansi-data.jpg` | Mockup mobile UI survei (Anonim/Transparan/Peningkatan Mutu) | **Produk** — Modul 2 Employee Satisfaction Survey |
| `/assets/mockup-survey-mobile-pertanyaan.jpg` | Mockup mobile UI pengisian pertanyaan survei | **Beranda** (Modul 2 ilustrasi) & **Produk** — Modul 2 |
| `/assets/client-logos-trust-wall.jpg` | Dinding logo 40+ klien korporat nyata | **Beranda** — Trust Wall; **Tentang Kami** — Trust Wall (Auto-slide Carousel) |
| `/assets/client-logo-cluster-secondary.jpg` | Kumpulan logo klien tambahan | **Beranda** & **Tentang Kami** — Trust Wall (baris kedua) |
| `/assets/pricing-card-graphic-initial-service.jpg` | Grafis pendukung kartu harga | **Harga** — dekorasi opsional Sub-Blok Initial Professional Services |
| `/assets/decorative-binary-code-background.jpg` | Tekstur kode biner dekoratif biru muda | Opsional — background aksen section "Tentang Kami" jika dibutuhkan tekstur tambahan |

---

## 3. Aset yang DIHINDARI (Logo Pihak Ketiga — Dilarang Tampil sebagai Identitas JobFit)

| Path | Isu | Aturan |
|---|---|---|
| `/assets/dashboard-employee-engagement-partner-humanis.jpg` | Menampilkan logo "humanis" (produk afiliasi, bukan JobFit) | JANGAN dipakai di halaman manapun |
| `/assets/mockup-email-invite-test-partner-kinerjapro.jpg` | Menampilkan logo "Kinerja.pro" (produk afiliasi lain) | JANGAN dipakai di halaman manapun |
| `/assets/dashboard-attendance-report-partner-venturo.jpg` | Menampilkan logo "Venturo" (holding company, bukan JobFit) | JANGAN dipakai di halaman manapun |

---

## 4. Aset Pendukung Tambahan (Belum Diberi Nama Semantik)

69 file gambar hasil ekstraksi PDF lainnya (ikon kecil, elemen dekoratif berulang per halaman, background) tersimpan dengan nama asli hasil ekstraksi (`img_pX_Y.jpg`) di `landings/jobfit/web/public/assets/`. File-file ini TIDAK di-declare wajib dipakai di section manapun pada PRD ini, tetapi tersedia sebagai cadangan jika generator membutuhkan elemen dekoratif tambahan (ikon, aksen visual kecil) — WAJIB diverifikasi visual dulu (Read/Image tool) sebelum dipakai, jangan asumsikan isinya dari nama file.

---

## 5. Halaman Tanpa Kebutuhan Gambar Khusus

- **Harga** (`/harga`): Section `pricing` dan `faq` murni tabel/teks (kecuali dekorasi opsional `pricing-card-graphic-initial-service.jpg`)
- **FAQ** (`/faq`): Murni teks/akordeon
- **Panduan** (`/panduan`): Murni teks — dokumentasi sumber sendiri tidak menyertakan screenshot untuk modul wawancara ini
- **Kontak** (`/kontak`): Form + kartu kontak (gambar `stock-woman-handshake-collaborate.jpg` bersifat opsional)

---

## 6. Kepatuhan Anti-Slop

Seluruh path di atas merujuk ke file yang benar-benar ada dan telah diverifikasi visual satu per satu (lihat riwayat verifikasi gambar di sesi intake) di `landings/jobfit/web/public/assets/`. TIDAK ADA foto stok generik tak relevan, TIDAK ADA link Unsplash acak, TIDAK ADA placeholder abu-abu.
