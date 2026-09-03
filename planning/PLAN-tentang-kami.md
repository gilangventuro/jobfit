# Page Planning — Tentang Kami — JobFit

> Planning detail untuk halaman Tentang Kami. Referensi: `PLAN-GLOBAL.md`, `PLAN-DESIGN-SYSTEM.md`, `intake/final_intake.md`, `intake/intake_compro.md`.
> **ATURAN HERO PAGES**: Halaman ini adalah Inner Page — DILARANG menggunakan `heroImage`. Header WAJIB berbasis teks murni.
> **[No-Video Default]**: Sesuai `PLAN-GLOBAL.md` Section 6, tidak ada video profil di materi asli. Section `video` **DIHILANGKAN sepenuhnya** dari halaman ini (bukan diisi fallback) — bertentangan dengan default per-halaman di `SKILL.md` namun sesuai instruksi eksplisit revisi untuk halaman ini.

---

## 1. Info Halaman

| Field | Isi |
|---|---|
| Nama Halaman | Tentang Kami |
| Route/URL | `/tentang-kami` |
| Buying Keyword | platform psikotes online terpercaya |
| LSI Keywords | Venturo Pro software developer Malang, vendor psikotes berpengalaman |

---

## 2. SEO Metadata

| Field | Isi |
|---|---|
| Title Tag | `Tentang JobFit \| Platform Psikotes Online Terpercaya` (52 char) |
| Meta Description | `JobFit dikembangkan Venturo Pro, software developer Malang sejak 2013, 105 IT talent, dipercaya 40+ perusahaan lintas industri.` (127 char) |
| Schema.org Type | `AboutPage` + `Organization` (sesuai mapping `PLAN-GLOBAL.md` Section 4.3) |

---

## 3. Value Proposition yang Digunakan

> Referensi dari `PLAN-GLOBAL.md` Section 2 — kalimat WAJIB dikutip apa adanya, tidak diparafrasekan substansinya.

| # | Kalimat Persuasi | Posisi di Halaman Ini |
|---|---|---|
| 17 | "Lebih dari 500++ Psikotes Online dilakukan" | Section 1 (Header) — `hero.stats` |
| 18 | "90% Merasa puas dengan hasil Psikotes Online" | Section 1 (Header) — `hero.stats` |
| 19 | "Kami adalah perusahaan yang bergerak di bidang Software Developer, Berpengalaman sejak tahun 2013 yang telah mendevelop ratusan project custom dari berbagai perusahaan dan instansi di Indonesia" | Section 2 (About) — `story[]` (kutipan langsung, atribusi Venturo Pro) |
| 20 | "Saat ini kami memiliki 105 IT Talent Professional yang berpusat di Kota Malang, Jawa Timur" | Section 2 (About) — `story[]` (kutipan langsung, atribusi Venturo Pro) |
| 16 | "Semua data koresponden kami jamin kerahasiaannya, aplikasi ini tidak mencatat log identitas Anda" | Section 4 (CTA) — `guarantee` (reuse sebagai trust signal penutup) |

---

## 4. Section Layout

### Section 1: `hero` (Header Teks Murni — TANPA heroImage)

| Field | Isi |
|---|---|
| headline | "Di Balik Platform Psikotes Terpercaya" (5 kata, 38 karakter) |
| subheadline | "JobFit dikembangkan oleh Venturo Pro, software developer asal Malang yang telah dipercaya puluhan perusahaan sejak 2013." (18 kata) |
| cta.text | "Konsultasi Gratis Sekarang" |
| cta.target | `/kontak` |
| heroImage | **TIDAK DIGUNAKAN** — sesuai Aturan Hero Pages, halaman dalam wajib header teks murni. Latar header cukup memakai warna solid/gradient token design system (`--color-primary-dark` → `--color-primary`), bukan foto. |
| stats | `[{value: "500++", label: "Psikotes Online Dilakukan"}, {value: "90%", label: "Tingkat Kepuasan Pengguna"}, {value: "2013", label: "Tahun Berdiri Venturo Pro"}, {value: "105", label: "IT Talent Professional"}]` — angka dianimasikan count-up dengan Anime.js sesuai AGENTS.md Pasal II. |
| clients | Tidak digunakan di sini — daftar klien lengkap ditampilkan di Section 3 (Trust Wall) agar tidak duplikatif. |

**Membutuhkan Gambar**: Tidak (header teks murni sesuai Aturan Hero Pages untuk Inner Page; hanya latar warna/gradient design-system, bukan foto/heroImage).

---

### Section 2: `about`

| Field | Isi |
|---|---|
| title | "Kisah JobFit & Venturo Pro" (5 kata) |
| story | 1) "JobFit adalah platform psikotes online (asesmen psikometrik DISC, Papikostik, IQ) yang membantu perusahaan menyaring dan menilai kandidat maupun karyawan secara cepat, objektif, dan berbasis data ilmiah — dilengkapi modul Employee Satisfaction Survey dan Competency Assessment Survey." <br><br> 2) "Kami adalah perusahaan yang bergerak di bidang Software Developer, Berpengalaman sejak tahun 2013 yang telah mendevelop ratusan project custom dari berbagai perusahaan dan instansi di Indonesia." — dikutip langsung dari profil Venturo Pro, holding company di balik JobFit. <br><br> 3) "Saat ini kami memiliki 105 IT Talent Professional yang berpusat di Kota Malang, Jawa Timur." Dari R&D Office di Jl. Rinjani No 26, Oro-Oro Dowo, Kec. Klojen, Kota Malang, Jawa Timur 65119, tim kami merancang dan mengembangkan JobFit sebagai wujud komitmen jangka panjang Venturo Pro terhadap transformasi digital rekrutmen dan pengelolaan SDM di Indonesia. |
| teamPhoto | `office-modern-workspace-interior.jpg` (foto utama — interior kantor modern, open space) — dipasangkan dengan `office-team-meeting-blue-overlay.jpg` (foto sekunder — suasana rapat tim, overlay biru brand) sebagai split-image/gallery-2 di sisi kanan/kiri teks story. |

**Membutuhkan Gambar**: Ya — `office-modern-workspace-interior.jpg` dan `office-team-meeting-blue-overlay.jpg` (layout split-image bersanding dengan narasi story, overlay biru sekunder menyesuaikan token `--color-secondary`).

---

### Section 3: `testimonial` — DIPIVOT MENJADI TRUST WALL (Social Proof)

> **CATATAN PIVOT (wajib, sesuai `SKILL.md` aturan testimonial):** Materi PDF asli TIDAK memiliki testimonial bertanda kutip (dikonfirmasi di `intake_compro.md` baris 130: "Tidak ada testimonial bertanda kutip langsung di materi asli"). Section ini karena itu dipivot total menjadi **trust wall daftar klien** — field `quote` DIKOSONGKAN (tidak diisi kutipan karangan), field `role` direpurpose menjadi keterangan sektor industri klien, bukan jabatan personal.

| Field | Isi |
|---|---|
| title | "Dipercaya 40+ Perusahaan" (4 kata) |
| items | Daftar representatif lintas industri (quote dikosongkan, role = sektor industri): <br> 1) `{quote: "", name: "Wuling Motors", role: "Otomotif & Manufaktur"}` <br> 2) `{quote: "", name: "PT Suparma Tbk", role: "Manufaktur Kertas (Tbk)"}` <br> 3) `{quote: "", name: "Harris Hotels", role: "Hospitality & Perhotelan"}` <br> 4) `{quote: "", name: "Kementerian Kesehatan RI", role: "Instansi Pemerintahan"}` <br> 5) `{quote: "", name: "Bali Nusa Dua Convention Center", role: "MICE & Hospitality"}` <br> 6) `{quote: "", name: "Majoo", role: "Teknologi & SaaS"}` <br> 7) `{quote: "", name: "SMK YP 17 Pare", role: "Pendidikan"}` <br> 8) `{quote: "", name: "CU Sawiran", role: "Koperasi & Keuangan"}` |
| supportingVisual | `client-logos-trust-wall.jpg` (grid utama, 40+ logo klien nyata) sebagai showcase visual utama di atas 8 kartu representatif; `client-logo-cluster-secondary.jpg` sebagai baris logo tambahan di bawahnya untuk memperkuat kesan skala ("puluhan klien korporat lintas industri"). |

> **ATURAN CAROUSEL**: Daftar klien lengkap (40+ logo, lihat `intake_compro.md` Section "Klien/Mitra") melebihi 10 item — **Gunakan Auto-slide Carousel/Marquee horizontal berkelanjutan** untuk grid logo (`client-logos-trust-wall.jpg` + `client-logo-cluster-secondary.jpg`), sedangkan 8 item representatif di atas ditampilkan statis sebagai kartu highlight non-carousel.

**Membutuhkan Gambar**: Ya — `client-logos-trust-wall.jpg` dan `client-logo-cluster-secondary.jpg` (trust wall grid/marquee logo klien).

---

### Section 4: `cta`

| Field | Isi |
|---|---|
| headline | "Siap Menyaring Kandidat Terbaik Anda?" |
| subheadline | "Bergabung dengan 40+ perusahaan yang sudah mempercayakan proses seleksi dan penilaian SDM mereka pada JobFit." |
| cta.text | "Hubungi Tim Kami" |
| cta.target | `/kontak` |
| guarantee | "Semua data koresponden kami jamin kerahasiaannya, aplikasi ini tidak mencatat log identitas Anda." (kutipan langsung PDF, value prop #16 — direuse sebagai trust signal penutup) |

**Membutuhkan Gambar**: Tidak (CTA penutup memakai latar warna/gradient solid dari design system, bukan foto — konsisten dengan Aturan Hero Pages Inner Page).

---

## 5. Catatan Khusus Halaman

1. **Tanpa `heroImage`**: Header halaman ini WAJIB teks murni (latar warna/gradient token design system), sesuai Aturan Hero Pages untuk Inner Page di `SKILL.md`. Tidak ada instruksi revisi eksplisit user yang meminta pengecualian, sehingga aturan default berlaku penuh.
2. **Tanpa Section `video`**: Dihapus sepenuhnya dari halaman ini (bukan diisi fallback animasi seperti default `[No-Video Default]` di halaman lain) — sesuai instruksi eksplisit tugas ini. Tidak ada video profil di materi PDF asli.
3. **Trust Wall bukan Testimonial fiktif**: Section 3 murni memakai nama klien nyata dari `intake_compro.md` (daftar "Companies That Trust Our Work") tanpa kutipan karangan apa pun, sesuai larangan mutlak fabrikasi testimonial.
4. **Aset dihindari**: 3 file `dashboard-employee-engagement-partner-humanis.jpg`, `mockup-email-invite-test-partner-kinerjapro.jpg`, `dashboard-attendance-report-partner-venturo.jpg` DILARANG dipakai di halaman ini (menampilkan logo pihak ketiga/sister-company, bukan identitas JobFit) — konsisten dengan `PLAN-GLOBAL.md` Section 6.
5. **Alamat kantor**: R&D Office Jl. Rinjani No 26, Oro-Oro Dowo, Kec. Klojen, Kota Malang, Jawa Timur 65119 disebutkan di Section 2 (About) sebagai penguat kredibilitas lokal, konsisten dengan Footer Data di `PLAN-GLOBAL.md` Section 5.
6. **Statistik sebagai `hero.stats`**: Karena generator tidak memiliki tipe section khusus "stats", angka 500++ psikotes dan 90% kepuasan ditempatkan pada field `stats` milik section `hero` header teks murni (bukan sebagai foto), sehingga tetap tampil menonjol tanpa melanggar larangan `heroImage`.
7. **Skor Self-Check**: Halaman ini wajib diverifikasi terhadap `reference/scoring-rubric.md` (target ≥ 90) sebelum disetujui — perhatikan khususnya poin larangan testimonial fiktif dan kepatuhan Aturan Hero Pages.
