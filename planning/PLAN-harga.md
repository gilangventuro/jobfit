# Page Planning — Harga — JobFit

> Planning detail untuk halaman Harga. Referensi: PLAN-GLOBAL.md, PLAN-DESIGN-SYSTEM.md, intake_compro.md (Section "Harga (Pricing)"), PLAN-COMPETITOR.md (gap analysis).
> **STATUS PRIORITAS: TERTINGGI** — gap kompetitif terbesar. Talentics dan Taldio tidak menampilkan harga sama sekali (harus hubungi sales); Solutiva hanya menampilkan estimasi kasar mulai Rp 250.000. Halaman ini adalah satu-satunya di antara 4 pemain pasar (JobFit + 3 kompetitor riset) yang membuka struktur harga secara penuh dan rinci — differentiator langsung sesuai positioning "platform talent lifecycle terintegrasi dengan harga transparan".

---

## 1. Info Halaman

| Field | Isi |
|---|---|
| Nama Halaman | Harga |
| Route/URL | `/harga` |
| Buying Keyword | harga psikotes online |
| LSI Keywords | biaya tes psikologi karyawan, paket kuota psikotes, subscription assessment karyawan |

---

## 2. SEO Metadata

| Field | Isi |
|---|---|
| Title Tag | `Harga Psikotes Online JobFit \| Paket Transparan` (47 karakter) |
| Meta Description | `Biaya tes psikologi karyawan, paket kuota psikotes, dan subscription assessment karyawan JobFit - transparan, tanpa hubungi sales.` (130 karakter) |
| Schema.org Type | `Product` + `OfferCatalog` (sesuai mapping PLAN-GLOBAL Section 4.3), dilengkapi `BreadcrumbList` |

---

## 3. Value Proposition yang Digunakan

> Referensi dari PLAN-GLOBAL.md Section 2

| # | Kalimat Persuasi | Posisi di Halaman Ini |
|---|---|---|
| — (positioning strategis dari PLAN-COMPETITOR.md, bukan kalimat literal PDF) | "Platform talent lifecycle terintegrasi dengan harga transparan" | Header teks — subheadline pembuka halaman, menegaskan diferensiasi vs kompetitor yang tertutup soal harga |
| 17 | "Lebih dari 500++ Psikotes Online dilakukan" | Header/pricing — trust indicator kecil di bawah subheadline |
| 18 | "90% Merasa puas dengan hasil Psikotes Online" | Header/pricing — trust indicator kecil di bawah subheadline |
| 16 | "Semua data koresponden kami jamin kerahasiaannya, aplikasi ini tidak mencatat log identitas Anda" | FAQ — jawaban pertanyaan seputar keamanan data yang relevan dengan keputusan pembelian |

---

## 4. Section Layout

> **ATURAN HALAMAN DALAM**: Halaman ini WAJIB header berbasis teks murni. DILARANG KERAS `heroImage`. DILARANG section `video` (No-Video Default — di-skip, bukan diganti fallback, karena halaman ini murni transaksional/tabel harga).

### Section 1: `hero` (Header Teks Murni — Tanpa Gambar)

| Field | Isi |
|---|---|
| headline | "Harga Transparan, Tanpa Sales" |
| subheadline | "Satu-satunya platform psikotes online yang membuka seluruh struktur harga. Tanpa perlu hubungi sales untuk sekadar tahu biaya." |
| cta.text | "Lihat Semua Paket" |
| cta.target | `#pricing` (scroll ke section pricing di halaman yang sama) |
| heroImage | **TIDAK ADA** (dilarang — halaman dalam, header teks murni sesuai AGENTS.md dan instruksi eksplisit user) |
| stats | `[{value: "500++", label: "Psikotes Online Dilakukan"}, {value: "90%", label: "Tingkat Kepuasan Pengguna"}]` (memakai kalimat persuasi #17 dan #18 dari PLAN-GLOBAL) |
| clients | Tidak dipakai di section ini (trust wall klien sudah menjadi fokus halaman Beranda/Tentang Kami, bukan diulang di sini) |

**Membutuhkan Gambar: Tidak** — header teks murni sesuai aturan Inner Pages. Layout: headline besar (H1, `--text-h1` diturunkan 1 tingkat untuk inner page sesuai desain sistem, tetap Lexend 700), subheadline (`--text-body-lg`), dua angka statistik ditonjolkan dengan tipografi besar (efek count-up Anime.js sesuai Motion System PLAN-DESIGN-SYSTEM 6.5), background solid warna `--color-gray-100` atau gradient tipis primary→putih (bukan foto).

---

### Section 2: `pricing` (WAJIB — Section Inti Halaman, Memuat SEMUA 5 Skema Harga dari Intake)

| Field | Isi |
|---|---|
| title | "Struktur Harga Lengkap" |

> **CATATAN WAJIB**: Section ini dipecah menjadi **5 sub-blok pricing berurutan** (bukan 1 tabel tunggal) karena setiap skema memiliki basis kuota/volume berbeda. Setiap sub-blok memakai komponen `pricing.items` dengan card layout sesuai Component Specs PLAN-DESIGN-SYSTEM 6.2 (Pricing Card, badge "Best Value" HANYA pada 1 paket per sub-blok bila relevan). Tidak ada perbandingan head-to-head 3 modul (dilarang sesuai PLAN-GLOBAL Section 6) — kelima blok ini murni struktur harga per modul/layanan, bukan perbandingan fitur modul.

#### Sub-Blok 2.1 — Initial Professional Services (Biaya Awal, Wajib Sekali di Muka)

| Field | Isi |
|---|---|
| sub-title | "Initial Professional Services" |
| items | `[{name: "Biaya Setup Awal", price: "Rp 2.000.000", priceUnit: "/ perusahaan (satu kali)", features: ["Kick-off meeting & business review", "Setup master file & instalasi sistem", "Parameter setup sesuai kebutuhan perusahaan", "User training penggunaan platform", "Gratis 200 kuota tes psikotes"], cta: "Konsultasi Setup"}]` |

**Catatan Copywriting**: Cakupan WAJIB ditulis lengkap dan eksplisit sebagai bullet list features (bukan disingkat) — mencakup kick-off meeting, setup master file & instalasi, parameter setup, user training, dan free 200 kuota, sesuai data intake_compro.md. Ini biaya satu kali yang menjadi gerbang awal sebelum langganan modul lain.

#### Sub-Blok 2.2 — Online Psychology Test: Paket Kuota

| Field | Isi |
|---|---|
| sub-title | "Psikotes Online — Paket Kuota" |
| items | `[{name: "Kuota 100", price: "Rp 500.000", priceUnit: "/ paket", features: ["100 kuota tes psikotes", "Akses DISC, Papikostik, IQ", "Dashboard hasil real-time"], cta: "Pilih Paket"}, {name: "Kuota 500", price: "Rp 2.000.000", priceUnit: "/ paket", features: ["500 kuota tes psikotes", "Akses DISC, Papikostik, IQ", "Dashboard hasil real-time"], cta: "Pilih Paket", badge: "Best Value"}, {name: "Kuota 1.000", price: "Rp 3.000.000", priceUnit: "/ paket", features: ["1.000 kuota tes psikotes", "Akses DISC, Papikostik, IQ", "Dashboard hasil real-time"], cta: "Pilih Paket"}]` |

**Catatan**: Badge "Best Value" pada paket 500 kuota berdasar rasio harga-per-kuota terbaik (Rp 4.000/kuota vs Rp 5.000/kuota di paket 100 dan Rp 3.000/kuota di paket 1.000 — namun paket 1.000 ditujukan volume besar, sehingga 500 kuota adalah titik tengah paling relevan untuk mayoritas perusahaan menengah; badge dapat disesuaikan tim marketing bila strategi berubah).

#### Sub-Blok 2.3 — Online Psychology Test: Harga Fleksibel per Jenis Tes (Tanpa Instalasi)

| Field | Isi |
|---|---|
| sub-title | "Psikotes Online — Harga per Jenis Tes (Fleksibel, Tanpa Instalasi)" |
| layout | Tabel bertingkat volume (bukan card), 3 baris volume x 3 kolom jenis tes |
| tableData | `{headers: ["Volume Peserta", "IQ", "Papikostik", "IQ & Papikostik"], rows: [["1 - 250", "Rp 10.000", "Rp 10.000", "Rp 16.000 (dari Rp 20.000)"], ["251 - 500", "Rp 9.000", "Rp 9.000", "Rp 14.500 (dari Rp 18.000)"], ["> 500", "Rp 8.000", "Rp 8.000", "Rp 13.000 (dari Rp 16.000)"]]}` |
| caption | "Harga per peserta, cocok untuk kebutuhan tes fleksibel tanpa instalasi sistem. Semakin besar volume, semakin hemat per peserta." |

**Catatan**: Harga coret ("dari Rp 20.000/18.000/16.000") dipertahankan karena itu adalah struktur diskon volume permanen (bukan promo bertenggat waktu) — berbeda dengan "Free 100 Kuota s.d. 31 Okt 2025" yang dilarang tampil.

#### Sub-Blok 2.4 — Employee Satisfaction Survey (Tahunan, per Volume Respon)

| Field | Isi |
|---|---|
| sub-title | "Employee Satisfaction Survey — Langganan Tahunan" |
| layout | Tabel bertingkat volume respon |
| tableData | `{headers: ["Jumlah Respon / Tahun", "Harga"], rows: [["250", "Rp 2.500.000"], ["500", "Rp 4.500.000"], ["1.000", "Rp 8.000.000"], ["2.000", "Rp 14.000.000"], ["3.000", "Rp 18.000.000"], ["4.000", "Rp 20.000.000"]]}` |
| caption | "Termasuk dashboard NPS, indeks keterlibatan, dan pemberdayaan karyawan. Pengisian mudah via smartphone, data anonim." |

#### Sub-Blok 2.5 — Competency Assessment Survey (Tahunan, per Volume Respon)

| Field | Isi |
|---|---|
| sub-title | "Competency Assessment Survey — Langganan Tahunan" |
| layout | Tabel bertingkat volume respon |
| tableData | `{headers: ["Jumlah Respon / Tahun", "Harga"], rows: [["100", "Rp 1.000.000"], ["200", "Rp 1.800.000"], ["300", "Rp 2.400.000"], ["400", "Rp 2.800.000"]]}` |
| caption | "Mencakup asesmen kompetensi serta rekap kehadiran dan kinerja karyawan." |

**Membutuhkan Gambar: Tidak** — seluruh sub-blok pricing murni tabel/kartu harga dan teks, sesuai aturan section `pricing` tidak memerlukan gambar.

**LARANGAN EKSPLISIT (wajib dipatuhi, instruksi eksplisit user)**: Section ini DILARANG KERAS mencantumkan:
- "Free 100 Kuota Psikotest s.d. 31 Oktober 2025" (promo bertenggat waktu)
- "Fasilitas Premium Terbatas — hanya 20 perusahaan pertama per bulan" (promo bertenggat waktu/kuota terbatas)

Kedua klaim di atas ADA di `intake_compro.md` Section "Penawaran & Promo" tetapi secara eksplisit tidak boleh dipakai di halaman manapun di website ini sesuai revisi user di `final_intake.md` dan `PLAN-GLOBAL.md` Section 6.

---

### Section 3: `faq` (FAQ Singkat Khusus Pertanyaan Seputar Harga)

| Field | Isi |
|---|---|
| title | "Pertanyaan Seputar Harga" |
| items | Lihat tabel di bawah |

| # | question | answer |
|---|---|---|
| 1 | "Apa saja yang termasuk dalam Initial Professional Services?" | "Biaya Rp 2.000.000 ini mencakup kick-off meeting, business review, setup master file dan instalasi sistem, parameter setup sesuai kebutuhan perusahaan, user training penggunaan platform, dan bonus 200 kuota tes psikotes gratis." |
| 2 | "Apakah kuota psikotes yang sudah dibeli bisa di-upgrade?" | "Bisa. Perusahaan dapat menambah kuota kapan saja dengan memilih paket 100/500/1.000 sesuai kebutuhan, atau memakai skema harga fleksibel per jenis tes untuk kebutuhan volume yang lebih spesifik." |
| 3 | "Apakah biaya Employee Satisfaction Survey dan Competency Assessment Survey berlangganan bulanan atau tahunan?" | "Kedua modul ini menggunakan skema langganan tahunan berdasarkan jumlah respon yang dibutuhkan, mulai dari 250 respon untuk Employee Satisfaction Survey dan 100 respon untuk Competency Assessment Survey." |
| 4 | "Apakah ada biaya tersembunyi selain yang tercantum di halaman ini?" | "Tidak ada. Seluruh komponen biaya JobFit — dari Initial Professional Services hingga paket kuota dan langganan tahunan — ditampilkan terbuka di halaman ini tanpa perlu menghubungi sales untuk mengetahui angka pastinya." |
| 5 | "Bagaimana keamanan data peserta tes yang saya kirimkan?" | "Semua data koresponden kami jamin kerahasiaannya, aplikasi ini tidak mencatat log identitas Anda." |

**Membutuhkan Gambar: Tidak.**

**Catatan Keyword**: Pertanyaan #4 secara alami menyisipkan penekanan "tanpa perlu menghubungi sales" (mendukung buying keyword "harga psikotes online" dan diferensiasi vs kompetitor tertutup harga). Pertanyaan #2 menyisipkan LSI "paket kuota psikotes".

---

### Section 4: `cta` (Penutup — Mengarah ke Kontak untuk Konsultasi Paket)

| Field | Isi |
|---|---|
| headline | "Masih Bingung Pilih Paket?" |
| subheadline | "Tim JobFit siap membantu menentukan kombinasi paket yang paling sesuai dengan skala dan kebutuhan perusahaan Anda." |
| cta.text | "Konsultasi Gratis" |
| cta.target | `/kontak` |
| guarantee | "Tanpa komitmen jangka panjang — konsultasi paket tidak mengikat." |

**Membutuhkan Gambar: Tidak.**

---

## 5. Catatan Khusus Halaman

1. **Halaman prioritas tertinggi**: Berdasarkan gap analysis di `PLAN-COMPETITOR.md`, transparansi harga adalah diferensiator paling langsung dan mudah dieksekusi vs Talentics (tidak ada harga publik), Taldio (harga hanya via WhatsApp), dan Solutiva (hanya estimasi kasar mulai Rp 250.000). Halaman ini harus menjadi bukti nyata klaim tersebut — SELURUH 5 skema harga dari `intake_compro.md` WAJIB tampil lengkap, tidak boleh ada yang disingkat/disembunyikan di balik "Hubungi Kami".
2. **Tidak ada `heroImage`**: Header memakai layout teks murni sesuai aturan Inner Pages di `planner/SKILL.md`. Efek visual dapat diperkaya lewat tipografi besar, motion Anime.js pada angka statistik, dan Framer Motion scroll-reveal pada kartu harga (unidirectional, sesuai PLAN-DESIGN-SYSTEM Motion System) — bukan lewat gambar hero.
3. **Tidak ada section `video`**: Sesuai [No-Video Default] dan sifat halaman ini yang murni transaksional (tabel harga), section video tidak relevan untuk dipaksakan sebagai fallback di halaman ini — cukup di-skip.
4. **Dilarang klaim promo bertenggat waktu**: Lihat larangan eksplisit di Section 4 Sub-Blok 2 di atas. Ini adalah instruksi eksplisit user yang membedakan halaman Harga rilis-awal dari draft materi PDF asli.
5. **Dilarang tabel perbandingan head-to-head 3 modul**: Kelima sub-blok pricing disusun berurutan per modul/layanan (Initial Services → Psikotes Kuota → Psikotes Fleksibel → Employee Satisfaction Survey → Competency Assessment Survey), BUKAN sebagai tabel komparasi fitur antar modul.
6. **ATURAN CAROUSEL**: Tidak ada section dengan ≥ 10 item card individual (sub-blok 2.3, 2.4, 2.5 memakai layout tabel, bukan card carousel), sehingga instruksi Auto-slide Carousel tidak berlaku di halaman ini.
7. **Video SMO**: Tidak diwajibkan di halaman ini mengingat sifatnya transaksional/tabel harga; video SMO utama sudah dialokasikan ke halaman lain sesuai kebutuhan No-Video Default fallback di scope global.
