# Page Planning — Beranda — JobFit

> Planning detail untuk halaman Beranda. Referensi: PLAN-GLOBAL.md, PLAN-DESIGN-SYSTEM.md, PLAN-USER-NEEDS.md, intake_compro.md.
> Halaman ini adalah SATU-SATUNYA halaman yang menggunakan `heroImage` (Aturan Hero Pages, SKILL.md MODE 2). Tidak ada section `video` (kepatuhan [No-Video Default] — dilarang fabrikasi URL). Tidak ada klaim promo bertenggat waktu di section manapun (kepatuhan revisi user, PLAN-GLOBAL Section 6).

---

## 1. Info Halaman

| Field | Isi |
|---|---|
| Nama Halaman | Beranda |
| Route/URL | `/` |
| Buying Keyword | psikotes online untuk rekrutmen |
| LSI Keywords | tes DISC karyawan, platform asesmen psikometrik Indonesia, right talent for right job |

---

## 2. SEO Metadata

| Field | Isi |
|---|---|
| Title Tag | `Psikotes Online untuk Rekrutmen \| JobFit` (40 karakter) |
| Meta Description | `Platform asesmen psikometrik Indonesia untuk tes DISC karyawan, Papikostik, dan IQ online. Right Talent for Right Job bersama JobFit.` (133 karakter) |
| Schema.org Type | Organization + WebSite (sesuai PLAN-GLOBAL Section 4.3) |

---

## 3. Value Proposition yang Digunakan

> Referensi dari PLAN-GLOBAL.md Section 2 — seluruh kalimat dikutip persis, tidak ada kalimat baru yang dikarang.

| # | Kalimat Persuasi | Posisi di Halaman Ini |
|---|---|---|
| 0 | "JobFit membantu tim rekrutmen mengelola seluruh proses, mulai dari membuat lowongan, menerima lamaran, menyaring kandidat dengan AI, hingga menawarkan dan merekrut kandidat terbaik." | Hero — dasar penyusunan headline (dipadatkan sesuai copyfitting) dan kalimat kedua subheadline |
| 1 | "Teknologi Cerdas Untuk Rekrutmen yang efisien dan objektif." | Hero — kalimat pertama subheadline (dikutip verbatim) |
| 2 | "Transformasi proses rekrutmen melalui tes psikologi berbasis teknologi" | Solution — valueProp |
| 3 | "Aplikasi kami membantu perusahaan menilai kandidat secara cepat, objektif, dan berbasis data psikologis" | Solution — benefit item Modul 1 (Psikotes Online) |
| 13 | "Manajemen survey anda dengan dashboard yang informatif" | Solution — benefit item Modul 2 (Employee Satisfaction Survey) |
| 15 | "Tidak perlu repot sebar survey ke karyawan anda. Cukup undang melalui email, karyawan anda dapat mengisi survey langsung dari smartphone masing-masing" | Solution — benefit item Modul 3 (Competency Assessment Survey) |
| 17 | "Lebih dari 500++ Psikotes Online dilakukan" | Hero — stats; Testimonial/Trust Wall — statistik social proof |
| 18 | "90% Merasa puas dengan hasil Psikotes Online" | Hero — stats; Testimonial/Trust Wall — statistik social proof |

---

## 4. Section Layout

### Section 1: `hero`

**Membutuhkan Gambar: Ya** — `hero-hrd-professional-woman-suit.jpg` (foto potret wanita profesional berjas, sikap percaya diri; satu-satunya `heroImage` di seluruh website sesuai aturan Hero Pages).

| Field | Isi |
|---|---|
| headline | "Rekrut Kandidat Terbaik dengan AI" (5 kata / 33 karakter — memadatkan esensi kalimat #0: alur lowongan → lamaran → penyaringan AI → rekrut terbaik, sesuai batas copyfitting 7 kata/25-40 karakter) |
| subheadline | "Teknologi cerdas untuk rekrutmen yang efisien dan objektif. Kelola lowongan hingga rekrut kandidat terbaik dalam satu platform." (2 kalimat, 17 kata total — kalimat pertama dikutip verbatim dari kalimat #1, kalimat kedua memadatkan alur mission statement kalimat #0) |
| cta.text | "Coba Demo Gratis" (3 kata) |
| cta.target | `/kontak` |
| heroImage | `hero-hrd-professional-woman-suit.jpg` |
| stats | `[{value: "500++", label: "Psikotes Online Dilakukan"}, {value: "90%", label: "Pengguna Puas dengan Hasil Tes"}]` (dari kalimat #17 dan #18) |
| clients | Trust indicator ringkas di bawah stats — logo mini (5-6 logo representatif): Wuling Motors, PT Suparma Tbk, Harris Hotels, Kementerian Kesehatan RI, Majoo, Bobobox. Label pendamping: "Dipercaya 40+ perusahaan lintas industri." Gunakan aset `client-logos-trust-wall.jpg` (crop/potong versi mini untuk area hero, versi lengkap tampil di Section 4 Trust Wall). |

> Ikon statistik menggunakan ikon profesional (bukan emoji), animasi count-up via Anime.js sesuai PLAN-DESIGN-SYSTEM Section 6.5.

---

### Section 2: `problem`

**Membutuhkan Gambar: Ya** — `stock-man-frustrated-recruitment-problem.jpg` (pria memegang kepala, ekspresi frustrasi/pusing — ditempatkan berdampingan dengan daftar masalah).

| Field | Isi |
|---|---|
| title | "Masalah Umum Proses Rekrutmen" (4 kata) |
| items | Lihat tabel di bawah |

| Item | title | desc |
|---|---|---|
| 1 | Sulit Temukan Kandidat Tepat | Sulit menemukan kandidat yang benar-benar sesuai harapan, sering berujung salah rekrut. |
| 2 | Pelamar Banyak, Waktu Terbatas | Tidak ada cara cepat untuk menyaring rekrutmen dengan volume pelamar besar. |
| 3 | Masalah Kinerja Baru Terlihat Belakangan | Perilaku kinerja karyawan bermasalah baru terlihat saat masa percobaan kerja berjalan. |
| 4 | Tes Manual Melelahkan dan Lambat | Tes psikologi manual berbasis kertas melelahkan, hasilnya baru didapat setelah menunggu lama. |

> Referensi data: `intake_compro.md` Section 1 "Masalah yang Diselesaikan" dan `PLAN-USER-NEEDS.md` Section 2 (Pain Point #1-4, intensitas Tinggi). Nada penulisan menekankan urgensi ("apa ruginya jika tidak diselesaikan") sesuai SKILL.md aturan section `problem`.

---

### Section 3: `solution`

**Membutuhkan Gambar: Ya** — mockup/screenshot produk per modul (lihat kolom gambar di tabel benefit), plus `stock-woman-pointing-solution-idea.jpg` sebagai gambar pembuka section (gestur "solusi/ide").

| Field | Isi |
|---|---|
| title | "Solusi JobFit: Tiga Modul Terpadu" (5 kata) |
| valueProp | "Transformasi proses rekrutmen melalui tes psikologi berbasis teknologi" (kalimat #2, verbatim) |
| benefits | Lihat tabel di bawah — 3 modul dijelaskan independen tanpa tabel perbandingan head-to-head (sesuai revisi user, PLAN-GLOBAL Section 6) |

| Item | title | desc | icon | Gambar Pendukung |
|---|---|---|---|---|
| 1 | Psikotes Online | "Aplikasi kami membantu perusahaan menilai kandidat secara cepat, objektif, dan berbasis data psikologis" (kalimat #3, verbatim) | ClipboardCheck | `screenshot-jobfit-disc-personality-test-mobile.jpg` |
| 2 | Employee Satisfaction Survey | "Manajemen survey anda dengan dashboard yang informatif" (kalimat #13, verbatim) | Users | `mockup-survey-mobile-pertanyaan.jpg` |
| 3 | Competency Assessment Survey | "Cukup undang melalui email, karyawan anda dapat mengisi survey langsung dari smartphone masing-masing" (kutipan bagian kedua kalimat #15, verbatim) | BarChart3 | `screenshot-jobfit-dashboard-informatif-mobile.jpg` |

> Ketiga modul TIDAK disandingkan dalam tabel perbandingan — masing-masing kartu berdiri sendiri sesuai revisi user. Ikon menggunakan set Lucide profesional, bukan emoji.

---

### Section 4: `testimonial` *(Pivot ke Social Proof / Trust Wall — tidak ada testimonial kutipan asli di PDF, sesuai SKILL.md aturan section testimonial)*

**Membutuhkan Gambar: Ya** — `client-logos-trust-wall.jpg` (dinding logo 40+ klien korporat) dan `client-logo-cluster-secondary.jpg` (logo tambahan).

| Field | Isi |
|---|---|
| title | "Dipercaya Puluhan Perusahaan" (4 kata) |
| subheadline | "Lintas industri swasta, pendidikan, kesehatan, hingga pemerintahan mempercayai JobFit." |
| stats | `[{value: "500++", label: "Psikotes Online Dilakukan"}, {value: "90%", label: "Tingkat Kepuasan Pengguna"}, {value: "40+", label: "Klien Korporat Lintas Industri"}]` (kalimat #17, #18, dan data klien dari `intake_compro.md` Section 1 & 3) |
| items | Karena tidak ada kutipan testimonial personal di materi PDF, field `items` diisi dengan **statistik terverifikasi** (bukan testimonial fiktif): `[{quote: "Lebih dari 500++ Psikotes Online dilakukan", name: "Data Platform JobFit", role: "Statistik Terverifikasi"}, {quote: "90% Merasa puas dengan hasil Psikotes Online", name: "Data Platform JobFit", role: "Statistik Terverifikasi"}]` |
| clients (trust wall logos) | Wuling Motors, PT Suparma Tbk, Harris Hotels, Kementerian Kesehatan RI, Majoo, SnackVideo, Bobobox, TOTO, Bali Nusa Dua Convention Center, CU Sawiran, Sinar Harapan, Qoin, Hayyu Syar'i Skin Clinic, YPIA (14 logo — daftar lengkap 40+ ada di `intake_compro.md` Section 3) |

> **ATURAN CAROUSEL**: Field `clients` berisi 14 item (≥ 10) → **Gunakan Auto-slide Carousel** untuk grid logo trust wall.
> Logo dengan branding pihak ketiga (Humanis, Kinerja.pro, Venturo) TIDAK ditampilkan di trust wall ini, sesuai catatan `PLAN-GLOBAL.md` Section 6.

---

### Section 5: `faq` *(REVISI — digabung dari halaman `/faq` yang dihapus atas instruksi eksplisit user)*

**Membutuhkan Gambar: Tidak** — section FAQ murni teks/akordeon.

| Field | Isi |
|---|---|
| title | "Pertanyaan Seputar JobFit" |

**items** (9 pertanyaan — identik dengan `PLAN-faq.md` Section 2, dipindahkan tanpa perubahan substansi):

| # | question | answer |
|---|---|---|
| 1 | Apakah **validitas tes psikologi online** JobFit setara dengan tes tatap muka bersama psikolog? | Instrumen JobFit (DISC, Papikostik, IQ) mengikuti standar psikometrik baku yang teruji reliabilitas dan validitasnya secara internasional — bukan kuis buatan sendiri. Riset psikometrika modern menunjukkan validitas prediktif tes psikologi terhadap kinerja kerja dapat mencapai korelasi 0,51, lebih tinggi dari wawancara tradisional tanpa struktur. Analisis otomatis JobFit juga konsisten dan mengurangi bias subjektif penilaian manual. Lebih dari 500++ psikotes online telah dilakukan dengan 90% kepuasan pengguna sebagai bukti penerapan nyata. |
| 2 | Bagaimana JobFit menjamin **keamanan data psikotes** kandidat dan karyawan sesuai **UU PDP**? | Data dikelola dengan kebijakan privasi yang jelas mengenai cara penyimpanan, siapa yang berhak mengakses, dan masa retensinya. Untuk Employee Satisfaction Survey, data responden bersifat anonim — aplikasi tidak mencatat log identitas Anda — sejalan dengan semangat UU Pelindungan Data Pribadi (UU No. 27/2022). |
| 3 | Berapa lama waktu yang dibutuhkan untuk mendapatkan hasil psikotes setelah kandidat selesai mengerjakan tes? | Hasil diproses secara real-time dengan analisis psikometrik otomatis dan langsung tersedia di Dashboard Informatif begitu kandidat menyelesaikan tes — tidak perlu menunggu proses skoring manual berhari-hari seperti tes kertas konvensional. |
| 4 | Bagaimana cara mengundang banyak kandidat sekaligus mengikuti tes tanpa input data satu per satu? | Gunakan fitur Input Bulk Koresponden — unggah data kandidat secara massal via file Excel, lalu sebarkan undangan tes otomatis melalui Email atau WhatsApp hanya dengan satu klik, tanpa kandidat perlu login manual. |
| 5 | Berapa biaya berlangganan JobFit dan apa saja yang termasuk di paket awal? | Biaya awal (Initial Professional Services) sebesar Rp 2.000.000 mencakup kick-off meeting, setup sistem, dan pelatihan pengguna. Setelahnya tersedia paket kuota fleksibel Online Psychology Test mulai dari Rp 500.000 untuk 100 kuota. Lihat rincian lengkap di halaman Harga. |
| 6 | Kenapa perusahaan kami harus beralih dari proses seleksi manual atau jasa psikolog konvensional ke JobFit? | Tes psikologi kertas membutuhkan waktu skoring manual berhari-hari dan jasa psikolog per sesi tergolong mahal untuk volume rekrutmen besar. JobFit menggantikan proses ini dengan hasil real-time dan struktur harga per-kuota yang transparan mulai dari kebutuhan kecil. |
| 7 | Apakah tim HR yang belum terbiasa dengan sistem digital bisa mudah menggunakan JobFit? | Ya. Proses onboarding didampingi penuh melalui Initial Professional Services yang mencakup kick-off meeting dan pelatihan pengguna langsung, ditambah fitur sederhana seperti Input Bulk Koresponden via Excel dan Share Tes otomatis lewat Email/WhatsApp tanpa kandidat perlu login manual. |
| 8 | Apakah JobFit bisa digunakan oleh institusi pendidikan atau pemerintahan, bukan hanya perusahaan swasta? | Ya — klien JobFit mencakup sektor swasta, pendidikan, kesehatan, manufaktur, hospitality, hingga instansi pemerintahan, termasuk nama seperti Wuling Motors, PT Suparma Tbk, Harris Hotels, dan Kementerian Kesehatan RI. |
| 9 | Apa perbedaan modul Psikotes Online, Employee Satisfaction Survey, dan Competency Assessment Survey? | Psikotes Online digunakan untuk seleksi kandidat baru (tes DISC, Papikostik, IQ); Employee Satisfaction Survey mengukur kepuasan dan keterlibatan karyawan aktif secara anonim; Competency Assessment Survey menilai kompetensi karyawan sekaligus merekap kehadiran dan kinerja. Ketiganya berjalan independen. |

> Jumlah item = 9 (di bawah ambang 10) — Auto-slide Carousel TIDAK diperlukan. Gunakan tampilan accordion/expand-collapse standar. Schema.org `FAQPage` WAJIB di-inject di halaman Beranda karena section ini kini berada di sini.

---

### Section 6: `cta`

**Membutuhkan Gambar: Ya** — `office-team-meeting-blue-overlay.jpg` (foto tim rapat dengan overlay biru brand) sebagai background/pendamping visual CTA penutup.

| Field | Isi |
|---|---|
| headline | "Jangan Biarkan Kompetitor Merekrut Lebih Dulu" (FOMO tanpa klaim promo bertenggat waktu) |
| subheadline | "Setiap hari tanpa asesmen yang tepat berarti risiko salah rekrut. Mulai gunakan JobFit dan bangun tim terbaik hari ini." |
| cta.text | "Konsultasi Gratis Sekarang" (3 kata) |
| guarantee | "Tim JobFit mendampingi proses kick-off, setup, hingga pelatihan penggunaan platform — bukan sekadar produk self-service." (TIDAK menyebut "Free 100 Kuota" atau promo bertenggat waktu apapun, sesuai revisi eksplisit user) |

> **Catatan Kepatuhan**: Tidak ada section `video` pada halaman ini — [No-Video Default] dipatuhi sepenuhnya tanpa fabrikasi URL YouTube. Efek visual dinamis pada CTA dan hero cukup dijalankan melalui Trilogi Motion AAA (Lenis, Anime.js, Framer Motion) sesuai PLAN-DESIGN-SYSTEM Section 6.5, bukan lewat embed video.

---

## 5. Catatan Khusus Halaman

- Halaman Beranda adalah satu-satunya halaman dengan `heroImage` di seluruh website JobFit (aturan Hero Pages, SKILL.md MODE 2) — seluruh halaman dalam lainnya WAJIB header teks murni tanpa `heroImage`.
- Hero headline sengaja dipadatkan ("Rekrut Kandidat Terbaik dengan AI") karena batas copyfitting 7 kata/25-40 karakter tidak memungkinkan seluruh kalimat mission statement (kalimat #0) dimuat verbatim di headline; esensi lengkap kalimat #0 tetap dimuat di kalimat kedua subheadline dalam bentuk padat.
- Section `solution` sengaja TIDAK memuat tabel perbandingan head-to-head 3 modul, sesuai revisi eksplisit user di `PLAN-GLOBAL.md` Section 6.
- Section `testimonial` dipivot total menjadi Social Proof/Trust Wall (statistik + logo klien) karena tidak ada testimonial kutipan asli di materi PDF — sesuai aturan SKILL.md ("DILARANG mengarang testimonial fiktif").
- Section `cta` penutup memakai pendekatan FOMO berbasis risiko bisnis ("kompetitor merekrut lebih dulu"), BUKAN FOMO berbasis promo bertenggat waktu — klaim "Free 100 Kuota Psikotest" dan "Fasilitas Premium Terbatas 20 perusahaan" DILARANG ditampilkan sesuai revisi eksplisit user.
- Tidak ada section `video` — kepatuhan penuh terhadap [No-Video Default]; motion interaktif ditangani oleh Trilogi AAA (Lenis, Anime.js, Framer Motion).
- Seluruh gambar yang dideklarasikan merujuk ke aset nyata di `landings/jobfit/intake/assets/` sesuai pemetaan `PLAN-GLOBAL.md` Section 3 — tidak ada placeholder atau link fiktif.
