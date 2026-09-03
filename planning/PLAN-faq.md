> **[DEPRECATED — DIGABUNG KE BERANDA]** Halaman `/faq` mandiri DIHAPUS atas instruksi eksplisit user. Seluruh 9 pertanyaan di file ini tetap valid dan sekarang menjadi **Section 5 (`faq`)** di halaman Beranda — lihat `PRD.md` Section 5.1 dan `PLAN-beranda.md`. File ini dipertahankan hanya sebagai arsip sumber konten Q&A, BUKAN cetak biru halaman aktif.

# Page Planning — FAQ — JobFit

> Planning detail untuk halaman FAQ. Referensi: PLAN-GLOBAL.md, PLAN-USER-NEEDS.md (Section 4 & 5).
> Halaman dalam (inner page) — header teks murni, TANPA `heroImage`. TANPA section `video` ([No-Video Default]).

---

## 1. Info Halaman

| Field | Isi |
|---|---|
| Nama Halaman | FAQ |
| Route/URL | `/faq` |
| Buying Keyword | validitas tes psikologi online |
| LSI Keywords | keamanan data psikotes UU PDP, psikotes online akurat |

---

## 2. SEO Metadata

| Field | Isi |
|---|---|
| Title Tag | FAQ JobFit: Validitas Tes Online & Keamanan Data UU PDP (55 char) |
| Meta Description | Jawaban lengkap seputar psikotes online akurat, biaya, keamanan data UU PDP, dan onboarding tim HR di JobFit. Cek FAQ selengkapnya. (134 char) |
| Schema.org Type | FAQPage (+ BreadcrumbList) |

---

## 3. Value Proposition yang Digunakan

> Referensi dari PLAN-GLOBAL.md Section 2

| # | Kalimat Persuasi | Posisi di Halaman Ini |
|---|---|---|
| 16 | "Semua data koresponden kami jamin kerahasiaannya, aplikasi ini tidak mencatat log identitas Anda" | FAQ — jawaban pertanyaan keamanan data (Q2) |
| 17 | "Lebih dari 500++ Psikotes Online dilakukan" | FAQ — jawaban pertanyaan validitas (Q1), sebagai bukti sosial |
| 18 | "90% Merasa puas dengan hasil Psikotes Online" | FAQ — jawaban pertanyaan validitas (Q1), sebagai bukti sosial |
| 10 | "Hemat waktu dengan fitur input massal untuk banyak kandidat sekaligus" | FAQ — jawaban pertanyaan bulk invite (Q4) |
| 11 | "Sebarkan undangan tes ke kandidat dengan cara yang paling praktis..." | FAQ — jawaban pertanyaan bulk invite (Q4) |

---

## 4. Section Layout

### Section 1: `hero` (Header Teks Murni — Inner Page, TANPA heroImage)

| Field | Isi |
|---|---|
| headline | Pertanyaan yang Sering Diajukan |
| subheadline | Jawaban seputar validitas tes, keamanan data, biaya, dan cara kerja JobFit sebelum Anda memutuskan berlangganan. |
| cta.text | — (tidak dipakai, header FAQ murni informasional) |
| cta.target | — |
| heroImage | **TIDAK DIPAKAI** (halaman dalam — header teks murni sesuai Aturan Hero Pages) |
| stats | — |
| clients | — |

**Membutuhkan Gambar: Tidak** — header inner page wajib teks murni tanpa elemen visual besar.

> Jika di masa depan generator mewajibkan komponen non-`hero` untuk header teks-murni, gunakan title bar sederhana dengan field yang sama (headline + subheadline) tanpa gambar.

---

### Section 2: `faq`

| Field | Isi |
|---|---|
| title | Pertanyaan Seputar JobFit |

**items** (9 pertanyaan — gabungan 7 FAQ Pra-Pembelian di `PLAN-USER-NEEDS.md` Section 5 + 2 pertanyaan tambahan yang mengangkat objection dari Section 4 yang belum tercakup; 3 objection lain — validitas, keamanan data, kepercayaan lintas sektor — digabung/diperkaya ke pertanyaan yang sudah ada agar tidak duplikat):

| # | question | answer | Sumber |
|---|---|---|---|
| 1 | Apakah **validitas tes psikologi online** JobFit setara dengan tes tatap muka bersama psikolog? | Instrumen JobFit (DISC, Papikostik, IQ) mengikuti standar psikometrik baku yang teruji reliabilitas dan validitasnya secara internasional — bukan kuis buatan sendiri. Riset psikometrika modern menunjukkan validitas prediktif tes psikologi terhadap kinerja kerja dapat mencapai korelasi 0,51, lebih tinggi dari wawancara tradisional tanpa struktur. Analisis otomatis JobFit juga konsisten dan mengurangi bias subjektif penilaian manual. Lebih dari 500++ psikotes online telah dilakukan dengan 90% kepuasan pengguna sebagai bukti penerapan nyata. | User-Needs §5.1 + §4.1 (objection validitas) |
| 2 | Bagaimana JobFit menjamin **keamanan data psikotes** kandidat dan karyawan sesuai **UU PDP**? | Data dikelola dengan kebijakan privasi yang jelas mengenai cara penyimpanan, siapa yang berhak mengakses, dan masa retensinya. Untuk Employee Satisfaction Survey, data responden bersifat anonim — aplikasi tidak mencatat log identitas Anda — sejalan dengan semangat UU Pelindungan Data Pribadi (UU No. 27/2022). Kebijakan privasi lengkap tersedia di footer situs. | User-Needs §5.2 + §4.2 (objection keamanan data) |
| 3 | Berapa lama waktu yang dibutuhkan untuk mendapatkan hasil psikotes setelah kandidat selesai mengerjakan tes? | Hasil diproses secara real-time dengan analisis psikometrik otomatis dan langsung tersedia di Dashboard Informatif begitu kandidat menyelesaikan tes — tidak perlu menunggu proses skoring manual berhari-hari seperti tes kertas konvensional. | User-Needs §5.3 |
| 4 | Bagaimana cara mengundang banyak kandidat sekaligus mengikuti tes tanpa input data satu per satu? | Gunakan fitur Input Bulk Koresponden — unggah data kandidat secara massal via file Excel, lalu sebarkan undangan tes otomatis melalui Email atau WhatsApp hanya dengan satu klik, tanpa kandidat perlu login manual. | User-Needs §5.4 |
| 5 | Berapa biaya berlangganan JobFit dan apa saja yang termasuk di paket awal? | Biaya awal (Initial Professional Services) sebesar Rp 2.000.000 mencakup kick-off meeting, setup sistem, dan pelatihan pengguna. Setelahnya tersedia paket kuota fleksibel Online Psychology Test mulai dari Rp 500.000 untuk 100 kuota, dengan harga bertingkat sesuai volume dan jenis tes. Lihat rincian lengkap di halaman Harga. | User-Needs §5.5 |
| 6 | Kenapa perusahaan kami harus beralih dari proses seleksi manual atau jasa psikolog konvensional ke JobFit? | Tes psikologi kertas membutuhkan waktu skoring manual berhari-hari dan jasa psikolog per sesi tergolong mahal untuk volume rekrutmen besar. JobFit menggantikan proses ini dengan hasil real-time dan struktur harga per-kuota yang transparan mulai dari kebutuhan kecil, sehingga perusahaan menghemat waktu dan biaya tanpa mengorbankan standar ilmiah asesmen. | User-Needs §4.3 (objection beralih dari proses manual) |
| 7 | Apakah tim HR yang belum terbiasa dengan sistem digital bisa mudah menggunakan JobFit? | Ya. Proses onboarding didampingi penuh melalui Initial Professional Services yang mencakup kick-off meeting dan pelatihan pengguna langsung, ditambah fitur yang dirancang sederhana seperti Input Bulk Koresponden via Excel dan Share Tes otomatis lewat Email/WhatsApp tanpa kandidat perlu login manual — sehingga tim HR non-teknis tetap dapat menjalankannya tanpa hambatan berarti. | User-Needs §4.4 (objection onboarding tim non-teknis) |
| 8 | Apakah JobFit bisa digunakan oleh institusi pendidikan atau pemerintahan, bukan hanya perusahaan swasta? | Ya — klien JobFit mencakup sektor swasta, pendidikan, kesehatan, manufaktur, hospitality, hingga instansi pemerintahan, termasuk nama seperti Wuling Motors, PT Suparma Tbk, Harris Hotels, dan Kementerian Kesehatan RI, menunjukkan fleksibilitas platform untuk berbagai jenis organisasi lintas sektor. | User-Needs §5.6 + §4.5 (objection kepercayaan lintas sektor) |
| 9 | Apa perbedaan modul Psikotes Online, Employee Satisfaction Survey, dan Competency Assessment Survey? | Psikotes Online digunakan untuk seleksi kandidat baru (tes DISC, Papikostik, IQ); Employee Satisfaction Survey mengukur kepuasan dan keterlibatan karyawan aktif secara anonim; Competency Assessment Survey menilai kompetensi karyawan sekaligus merekap kehadiran dan kinerja. Ketiganya berjalan independen dan dapat digunakan sesuai kebutuhan masing-masing tahap siklus talenta. | User-Needs §5.7 |

**Membutuhkan Gambar: Tidak** — section FAQ murni teks/akordeon sesuai aturan (section pricing/faq tidak memerlukan gambar).

> Jumlah item = 9 (di bawah ambang 10) — Auto-slide Carousel TIDAK diperlukan. Gunakan tampilan accordion/expand-collapse standar.

---

### Section 3: `cta` (Penutup Halaman)

| Field | Isi |
|---|---|
| headline | Masih Ada Pertanyaan Lain? |
| subheadline | Tim kami siap membantu menjawab kebutuhan spesifik perusahaan Anda secara langsung. |
| cta.text | Hubungi Tim Kami |
| cta.target | `/kontak` |
| guarantee | Konsultasi awal tanpa komitmen berlangganan. |

**Membutuhkan Gambar: Tidak.**

> Section `video` DILARANG pada halaman ini sesuai [No-Video Default] dan tidak relevan untuk konteks FAQ — di-skip sepenuhnya.

---

## 5. Catatan Khusus Halaman

- Halaman ini adalah inner page murni-teks: TIDAK ada `heroImage`, TIDAK ada section `video`.
- 9 pertanyaan FAQ merupakan gabungan non-duplikat dari 7 FAQ Pra-Pembelian (`PLAN-USER-NEEDS.md` §5) dan 5 Objection (`PLAN-USER-NEEDS.md` §4) — 3 objection (validitas, keamanan data, kepercayaan lintas sektor) diperkaya ke pertanyaan yang sudah setopik alih-alih diduplikasi, sementara 2 objection lain (alasan beralih dari proses manual, kemudahan onboarding tim non-teknis) diangkat menjadi pertanyaan baru (Q6 dan Q7) karena topiknya belum tercakup di 7 FAQ asli.
- Keyword SEO utama "validitas tes psikologi online" ditempatkan di Q1; LSI "keamanan data psikotes UU PDP" ditempatkan di Q2; LSI "psikotes online akurat" tersirat pada narasi jawaban Q1 dan meta description.
- Klaim promo bertenggat waktu (Free 100 Kuota, Fasilitas Premium Terbatas) TIDAK dicantumkan pada jawaban Q5/Q6, sesuai larangan eksplisit di PLAN-GLOBAL Section 6.
- Section "Perbandingan 3 modul produk" pada Q9 dijawab dalam bentuk narasi independen per modul (sesuai larangan tabel head-to-head), bukan tabel perbandingan.
- CTA penutup mengarah ke halaman Kontak (`/kontak`) sebagai jalur eskalasi bagi pertanyaan yang tidak tercakup FAQ.
