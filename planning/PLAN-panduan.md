# Page Planning — Panduan — JobFit

> Planning detail untuk halaman Panduan. Referensi: PLAN-GLOBAL.md
> **Sifat halaman**: Halaman dokumentasi produk (replikasi verbatim), BUKAN halaman marketing/konversi. Header WAJIB berbasis teks murni — DILARANG `heroImage` (aturan Inner Pages, AGENTS.md/SKILL.md MODE 2). DILARANG section `video`.

---

## 1. Info Halaman

| Field | Isi |
|---|---|
| Nama Halaman | Panduan |
| Route/URL | `/panduan` |
| Buying Keyword | panduan penggunaan jobfit |
| LSI Keywords | dokumentasi jobfit, cara pakai psikotes online, panduan wawancara & penilaian kandidat |

---

## 2. SEO Metadata

| Field | Isi |
|---|---|
| Title Tag | Panduan Penggunaan JobFit \| Dokumentasi Jobfit (54 karakter) |
| Meta Description | Panduan penggunaan JobFit: cara pakai psikotes online, wawancara & penilaian kandidat di modul Recruitment — langkah demi langkah. (149 karakter) |
| Schema.org Type | CollectionPage / HowTo (mengikuti mapping PLAN-GLOBAL Section 4.3) |

**Catatan Schema HowTo**: `HowTo.step` mengikuti 4 step verbatim di bawah (Section 4), masing-masing sebagai `HowToStep` dengan `HowToDirection`/`itemListElement` berisi 3 sub-langkah bernomor persis seperti sumber. `CollectionPage` membungkus keseluruhan halaman sebagai koleksi dokumentasi. **DILARANG** menautkan schema ke URL eksternal (`https://jobfit-doc.vercel.app/...`) sebagai `mainEntityOfPage` pengganti konten — schema WAJIB mendeskripsikan konten yang benar-benar direplikasi di halaman ini sendiri.

---

## 3. Value Proposition yang Digunakan

> Halaman ini adalah dokumentasi produk (bukan halaman persuasi), sehingga tidak mengambil kalimat dari inventori Value Proposition PLAN-GLOBAL Section 2. Konten sepenuhnya berasal dari teks verbatim dokumentasi "Wawancara & Penilaian" (`intake_compro.md` Section 1 — "Konten Dokumentasi Wawancara & Penilaian — Verbatim"). Satu-satunya kaitan dengan value proposition global: isi dokumentasi ini **mengonfirmasi** alur Recruitment end-to-end (Job Posting → Chat Interview → Penilaian → Offer → Hired) yang melandasi Hero Mission Statement Beranda (PLAN-GLOBAL #0) — dicatat sebagai konteks, bukan dikutip ulang di halaman ini.

---

## 4. Section Layout

### Section 1: `about` (dipakai sebagai header teks murni + intro dokumentasi)

| Field | Isi |
|---|---|
| title | Wawancara & Penilaian |
| story | ["Dokumen ini menjelaskan langkah-langkah untuk melakukan wawancara dan penilaian kandidat di Recruitment, mulai dari membuka chat wawancara hingga membuat penawaran (offer)."] |
| teamPhoto | — (tidak dipakai) |

> **PENTING — Kepatuhan Aturan Inner Pages**: Section ini berfungsi sebagai header halaman. TIDAK memakai `heroImage`. Judul H1 "Wawancara & Penilaian" ditampilkan sebagai teks murni di atas paragraf intro verbatim. Teks intro DIKUTIP PERSIS dari sumber, tidak diparafrase.

**Membutuhkan Gambar: Tidak** — dokumentasi sumber tidak menyertakan screenshot/ilustrasi visual untuk fitur chat interview ini (dicatat eksplisit oleh situs sumber sebagai kekurangan dokumentasi visual). Tidak ada aset yang sesuai di `landings/jobfit/intake/assets/` untuk alur wawancara ini secara spesifik.

---

### Section 2: `management` (representasi 4 Step Panduan)

| Field | Isi |
|---|---|
| title | Langkah-Langkah Panduan |
| items | Lihat rincian 4 item di bawah — setiap item merepresentasikan satu Step, dengan `desc` memuat daftar bernomor verbatim (dipisah baris baru/line-break agar generator merender sebagai list bernomor di dalam card) |

**items[0] — Step 1: Membuka Chat Wawancara**

| Field | Isi |
|---|---|
| title | Step 1: Membuka Chat Wawancara |
| desc | 1. Buka menu **Recruitment** dan pilih lowongan yang diinginkan.<br>2. Klik **kandidat** yang akan diwawancarai untuk membuka panel detail.<br>3. Buka fitur **chat interview** pada kandidat untuk memulai sesi wawancara. |

**items[1] — Step 2: Melakukan Wawancara**

| Field | Isi |
|---|---|
| title | Step 2: Melakukan Wawancara |
| desc | 1. Gunakan pertanyaan yang tersedia di chat untuk memandu sesi wawancara.<br>2. Arahkan percakapan untuk menggali kompetensi kandidat sesuai kebutuhan posisi.<br>3. Catat informasi penting selama sesi berlangsung. |

**items[2] — Step 3: Mengisi Penilaian Wawancara**

| Field | Isi |
|---|---|
| title | Step 3: Mengisi Penilaian Wawancara |
| desc | 1. Setelah sesi wawancara selesai, buka form penilaian **Interview Penilaian**.<br>2. Isi penilaian berdasarkan hasil wawancara kandidat.<br>3. Simpan penilaian; hasilnya tercatat di detail kandidat dan dipakai untuk pengambilan keputusan. |

**items[3] — Step 4: Membuat Penawaran (Offer)**

| Field | Isi |
|---|---|
| title | Step 4: Membuat Penawaran (Offer) |
| desc | 1. Untuk kandidat yang cocok, gunakan **template offer letter**.<br>2. Isi penawaran sesuai ketentuan perusahaan, lalu kirim ke kandidat.<br>3. Status kandidat berubah menjadi **Offered**. |

> **Kepatuhan verbatim**: Seluruh teks item di atas (judul step + isi bernomor) adalah SALINAN PERSIS dari `intake_compro.md` Section "Konten Dokumentasi Wawancara & Penilaian (Verbatim)". Tidak ada parafrase, tidak ada penghilangan/penambahan kata. Generator WAJIB merender numbered list di dalam `desc` sebagai list bernomor visual (bukan satu paragraf datar), agar struktur asli (3 sub-langkah per step) tetap terbaca.
>
> **Instruksi tampilan**: Render 4 item ini sebagai 4 card/blok berurutan vertikal bernomor (Step 1 → Step 4), bukan grid acak — urutan sekuensial harus dipertahankan karena ini adalah alur kerja (workflow), bukan daftar fitur independen.

**Membutuhkan Gambar: Tidak** — tidak ada screenshot pendukung dari dokumentasi sumber untuk fitur chat interview & penilaian ini (berbeda dari fitur Psikotes Online yang punya screenshot mobile app). Section ini murni teks instruksional, konsisten dengan sumber aslinya.

---

### Section 3: `problem` (dipakai sebagai representasi struktural section "Catatan")

| Field | Isi |
|---|---|
| title | Catatan |
| items | Lihat 3 poin di bawah |

**items[0]**

| Field | Isi |
|---|---|
| title | Status Kandidat Setelah Offer |
| desc | Setelah kandidat menyetujui penawaran, pindahkan status kandidat ke **Hired**. |

**items[1]**

| Field | Isi |
|---|---|
| title | Definisi Penilaian Wawancara |
| desc | **Penilaian Wawancara** adalah form yang diisi pewawancara setelah sesi wawancara. |

**items[2]**

| Field | Isi |
|---|---|
| title | Definisi Offer Letter |
| desc | Offer letter adalah dokumen penawaran kerja yang dikirim ke kandidat terpilih. |

> **Kepatuhan verbatim**: 3 poin di atas adalah salinan persis bagian "Catatan" dari sumber, tanpa perubahan kata. Section ini secara struktural dipakai sebagai catatan/keterangan tambahan (bukan "masalah" dalam arti marketing) — pemakaian tipe `problem` di sini murni untuk representasi visual 3-poin-bullet, sesuai instruksi tugas untuk memilih section type paling dekat dari daftar yang didukung generator.

**Membutuhkan Gambar: Tidak** — section catatan/keterangan tambahan, murni teks singkat.

---

### Section 4: `cta`

| Field | Isi |
|---|---|
| headline | Butuh Bantuan Lebih Lanjut? |
| subheadline | Tim kami siap membantu jika ada kendala mengikuti panduan ini. |
| cta.text | Hubungi Kami |
| cta.target | `/kontak` |
| guarantee | Respon tim dalam 1x24 jam |

**Membutuhkan Gambar: Tidak** — CTA teks + tombol, tanpa ilustrasi.

---

## 5. Catatan Khusus Halaman

- **Halaman dokumentasi, bukan halaman konversi**: Copyfitting rules (hero headline ≤7 kata, dsb.) TIDAK berlaku penuh di sini karena judul dan isi WAJIB verbatim sesuai sumber dokumentasi ("Wawancara & Penilaian", 4 step, Catatan). Prioritas kepatuhan verbatim > copyfitting.
- **DILARANG heroImage**: Header halaman ini murni teks (judul + paragraf intro), sesuai aturan Inner Pages di SKILL.md MODE 2 dan instruksi eksplisit tugas.
- **DILARANG section `video`**: tidak digunakan sama sekali di halaman ini, sesuai instruksi eksplisit tugas.
- **Tidak ada gambar pendukung dari intake**: Semua 4 section (`about`/header, `management`/4 step, `problem`/catatan, `cta`) dideklarasikan `Membutuhkan Gambar: Tidak` karena dokumentasi sumber (jobfit-doc.vercel.app) sendiri tidak menyertakan screenshot untuk fitur chat interview & penilaian ini, dan tidak ada aset di `landings/jobfit/intake/assets/` yang relevan untuk alur ini secara spesifik (17 aset semantik yang ada mencakup Psikotes Online, Employee Satisfaction Survey, dan Competency Assessment Survey — bukan modul Recruitment/wawancara).
- **Sumber teks**: `intake_compro.md` Section "Konten Dokumentasi Wawancara & Penilaian (Verbatim — untuk halaman Panduan)", diambil verbatim oleh tim intake dari https://jobfit-doc.vercel.app/help/recruitment/wawancara-penilaian.html pada 2026-09-03. Konten ini direplikasi PERSIS di halaman `/panduan` — bukan sekadar tautan keluar — sesuai permintaan eksplisit user di `PLAN-GLOBAL.md` Section 6.
- **Konteks bisnis**: Isi dokumentasi ini mengonfirmasi bahwa produk JobFit live memiliki modul Recruitment lengkap (Job Posting → kandidat melamar → Chat Interview → Interview Penilaian → Offer Letter → status Offered → Hired), yang memvalidasi Hero Mission Statement di halaman Beranda (PLAN-GLOBAL Section 2, item #0). Konteks ini TIDAK ditulis ulang sebagai konten tambahan di halaman Panduan — halaman ini murni mereplikasi dokumentasi asli apa adanya.
- **Video SMO**: Tidak berlaku untuk halaman ini — halaman dokumentasi tekstual murni, section `video` dilarang secara eksplisit oleh instruksi tugas. Kebutuhan minimal 1 video SMO per halaman (SKILL.md MODE 2 poin 8) dikecualikan untuk halaman ini karena sifatnya sebagai replikasi dokumentasi verbatim tanpa aset video sumber.
