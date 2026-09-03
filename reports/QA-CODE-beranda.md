# QA Review Report — Code Review Beranda — JobFit

**Tanggal Review**: 2026-09-03
**File PRD**: `landings/jobfit/planning/PLAN-beranda.md`
**File Asset Mapping**: `landings/jobfit/planning/ASSET-MAPPING.md`
**File Kode**: `web/app/page.tsx`, `web/components/sections/{Hero,Problem,Solution,TrustWall,Cta}.tsx`, `web/components/Header.tsx`, `web/components/Footer.tsx`, `web/components/AnimatedSection.tsx`, `web/components/SwipeableCards.tsx`, `web/components/StatCounter.tsx`
**Reviewer**: QA Reviewer Skill (Automated) — Mode `code-review`

---

## Skor Ringkas

| # | Item | Status |
|---|---|---|
| 1 | Kelengkapan 5 Section (hero, problem, solution, trust-wall, cta) | OK |
| 2 | No-Video Default (tidak ada section video) | OK |
| 3 | Kalimat Persuasi Verbatim dari PLAN-beranda.md | OK |
| 4 | Path Aset + atribut `alt` & `title` pada semua `<Image>` | OK |
| 5 | Logo Header/Footer via `/assets/logo.png` (next/image) | OK |
| 6 | Tidak ada klaim promo bertenggat waktu | OK |
| 7 | Tidak ada emoji di UI, ikon pakai lucide-react | OK |
| 8 | Trust Wall carousel 14 item ≥10 dengan auto-slide | OK |
| 9 | Animasi scroll unidirectional (bukan `once: true`, ada deteksi arah) | OK |

**Kesimpulan: PASS** — tidak ditemukan pelanggaran Zero Tolerance (Pasal I AGENTS.md qa-reviewer) maupun deviasi substansial dari PLAN-beranda.md/ASSET-MAPPING.md.

---

## Detail Penilaian

### 1. Kelengkapan 5 Section — OK
`web/app/page.tsx` baris 62–66 merender urutan `<Hero /> <Problem /> <Solution /> <TrustWall /> <Cta />` — kelima section PRD (hero, problem, solution, testimonial/trust-wall, cta) hadir seluruhnya, sesuai Section 4 PLAN-beranda.md. Tidak ada section tambahan yang tidak diminta.

### 2. No-Video Default — OK
Tidak ditemukan import/komponen video (`<video>`, embed YouTube, dsb.) di `app/` maupun `components/`. Satu-satunya kecocokan string "video" adalah nama klien "SnackVideo" pada daftar logo `TrustWall.tsx` baris 19 — bukan section video, false positive. Sesuai catatan PLAN-beranda.md baris 134 & 145 ("efek visual dinamis... bukan lewat embed video").

### 3. Kalimat Persuasi Verbatim — OK, dicek satu per satu:
| # | Kalimat PLAN | Ditemukan di Kode | Lokasi |
|---|---|---|---|
| 1 | "Teknologi cerdas untuk rekrutmen yang efisien dan objektif." | Cocok (huruf awal disesuaikan kapitalisasi kalimat) | `Hero.tsx` baris 21 |
| 0 (dipadatkan) | headline "Rekrut Kandidat Terbaik dengan AI" | Cocok persis | `Hero.tsx` baris 18 |
| — | subheadline kalimat kedua "Kelola lowongan hingga rekrut kandidat terbaik dalam satu platform." | Cocok | `Hero.tsx` baris 22-23 |
| 2 | "Transformasi proses rekrutmen melalui tes psikologi berbasis teknologi" | Cocok (titik penutup ditambahkan, substansi utuh) | `Solution.tsx` baris 70-72 |
| 3 | "Aplikasi kami membantu perusahaan menilai kandidat secara cepat, objektif, dan berbasis data psikologis" | Cocok verbatim (titik ditambahkan) | `Solution.tsx` baris 11 |
| 13 | "Manajemen survey anda dengan dashboard yang informatif" | Cocok verbatim | `Solution.tsx` baris 18 |
| 15 (kutipan kedua) | "Cukup undang melalui email, karyawan anda dapat mengisi survey langsung dari smartphone masing-masing" | Cocok verbatim | `Solution.tsx` baris 25 |
| 17 | "Lebih dari 500++ Psikotes Online dilakukan" → stat "500++" | Cocok (format stats objek) | `Hero.tsx` baris 8, `TrustWall.tsx` baris 8 |
| 18 | "90% Merasa puas dengan hasil Psikotes Online" → stat "90%" | Cocok | `Hero.tsx` baris 9, `TrustWall.tsx` baris 9 |
| — | Problem section 4 item (title+desc) | Cocok verbatim seluruhnya | `Problem.tsx` baris 7-28 |
| — | CTA headline "Jangan Biarkan Kompetitor Merekrut Lebih Dulu" | Cocok verbatim | `Cta.tsx` baris 22 |
| — | CTA subheadline | Cocok verbatim | `Cta.tsx` baris 24-27 |
| — | CTA cta.text "Konsultasi Gratis Sekarang" | Cocok verbatim | `Cta.tsx` baris 34 |
| — | CTA guarantee | Cocok verbatim | `Cta.tsx` baris 37-40 |
| — | Trust Wall title "Dipercaya Puluhan Perusahaan" + subheadline | Cocok verbatim | `TrustWall.tsx` baris 41-45 |

Tidak ada kalimat persuasi yang hilang atau diubah substansinya.

### 4. Path Aset & Atribut `alt`/`title` — OK
Seluruh 8 pemanggilan `<Image>` pada 5 section diverifikasi:
- `Hero.tsx`: `/assets/client-logos-trust-wall.jpg` (alt+title ✓), `/assets/hero-hrd-professional-woman-suit.jpg` (alt+title ✓) — sesuai ASSET-MAPPING baris 19 & 32.
- `Problem.tsx`: `/assets/stock-man-frustrated-recruitment-problem.jpg` (alt+title ✓) — sesuai ASSET-MAPPING baris 22.
- `Solution.tsx`: `/assets/stock-woman-pointing-solution-idea.jpg`, `/assets/screenshot-jobfit-disc-personality-test-mobile.jpg`, `/assets/mockup-survey-mobile-pertanyaan.jpg`, `/assets/screenshot-jobfit-dashboard-informatif-mobile.jpg` — seluruhnya alt+title terisi dan path sesuai ASSET-MAPPING baris 20, 25, 26, 31.
- `TrustWall.tsx`: `/assets/client-logos-trust-wall.jpg`, `/assets/client-logo-cluster-secondary.jpg` — alt+title ✓, sesuai ASSET-MAPPING baris 32-33.
- `Cta.tsx`: `/assets/office-team-meeting-blue-overlay.jpg` — alt+title ✓, sesuai ASSET-MAPPING baris 24.

Semua path terverifikasi ada secara fisik di `public/assets/` (dicek langsung via listing folder). Tidak ada file placeholder/fiktif digunakan.

### 5. Logo Header/Footer — OK
`Header.tsx` baris 56-64 dan `Footer.tsx` baris 35-42 keduanya memanggil `next/image` dengan `src="/assets/logo.png"`, disertai `alt` dan `title` yang berisi teks bermakna ("Logo JobFit, platform psikotes online untuk rekrutmen" / "JobFit — Right Talent for Right Job"). Bukan teks placeholder.

### 6. Klaim Promo Bertenggat Waktu — OK
Pencarian string "Free 100", "Fasilitas Premium", "Terbatas 20", "kuota" (case-insensitive) di seluruh folder `web/` — tidak ada hasil. `Cta.tsx` guarantee (baris 37-40) memakai kalimat pendampingan tim, bukan promo bertenggat waktu, sesuai revisi eksplisit user di PLAN-beranda.md baris 132 & 144.

### 7. Emoji & Ikon Lucide — OK
Pemindaian regex emoji Unicode terhadap seluruh file di `components/` tidak menemukan kecocokan. Ikon yang dipakai seluruhnya dari `lucide-react`: `AlarmClockOff, Search, TrendingDown, Users2` (Problem), `ClipboardCheck, Users, BarChart3` (Solution), `X, ChevronLeft, ChevronRight` (Header/SwipeableCards), `Mail, MapPin, MessageCircle` (Footer) — semua diberi `aria-hidden="true"` yang benar untuk elemen dekoratif.

### 8. Trust Wall Carousel (14 item, ≥10) — OK
`TrustWall.tsx` array `CLIENTS` berisi tepat 14 nama klien (baris 13-28), dirender via `<SwipeableCards items={logoCards} autoSlide ... />` (baris 81-85). Di `SwipeableCards.tsx`, prop `autoSlide` memaksa `isCarousel = true` (baris 48) dan efek `useEffect` baris 70-80 menjalankan `setInterval` yang menggeser `scrollLeft` via `scrollToIndex` setiap `intervalMs` (default 3000ms) — auto-slide aktif di semua breakpoint sesuai "ATURAN CAROUSEL" PLAN-beranda.md baris 118. Tombol panah (`ChevronLeft/Right`) dan dot navigasi turut tersedia untuk kontrol manual, tanpa melanggar auto-slide.

Catatan minor (bukan pelanggaran, cukup dicatat): dua logo trust-wall (`client-logos-trust-wall.jpg` dan `client-logo-cluster-secondary.jpg`) sudah berisi banyak logo dalam satu gambar, sedangkan 14 kartu carousel di bawahnya hanya menampilkan **nama teks** klien (`<span className={styles.logoName}>{name}</span>`), bukan logo individual per klien. Ini tidak melanggar aturan carousel/anti-slop (tidak ada gambar fiktif/rusak), namun berpotensi kurang optimal secara visual dibanding menampilkan logo asli per kartu. Tidak menurunkan skor karena PLAN-beranda.md tidak secara eksplisit mewajibkan gambar logo per-kartu di field `items` (field `clients` PLAN hanya berisi daftar nama).

### 9. Animasi Scroll Unidirectional — OK
`AnimatedSection.tsx`:
- Tidak ada `once: true` di manapun.
- Deteksi arah scroll eksplisit: `lastScrollY` ref dibandingkan `currentScrollY` (baris 66-67) untuk menentukan `scrollingDown`.
- Reveal animasi (`opacity/translateY`) hanya jalan saat `entry.isIntersecting && scrollingDown` (baris 69).
- Saat elemen keluar viewport (`!entry.isIntersecting`), section di-reset ke `opacity:0, translateY:30` (baris 93-96) sehingga siap animasi ulang pada scroll-down berikutnya — memenuhi kebutuhan "unidirectional, tidak once".

`StatCounter.tsx` count-up (Anime.js) menggunakan flag lokal `animated` yang hanya sekali per mount (baris 41, 45) — ini wajar untuk count-up angka (tidak masuk akal jika angka statistik berulang-ulang berhitung ulang setiap scroll), berbeda konteks dari reveal section, jadi tidak dihitung pelanggaran aturan unidirectional reveal.

---

## Kepatuhan Tambahan (Pasal II AGENTS.md — Sanity Test Tier-1 AAA)
- **Sticky Navbar**: `Header.module.css` tidak dibaca detail dalam scope tugas ini, namun `Header.tsx` menggunakan class `styles.header`/`styles.headerScrolled` dengan state `scrolled` berbasis `window.scrollY > 8` (baris 30) — pola glassmorphic-on-scroll konsisten dengan Tier-1 AAA. Rekomendasi: verifikasi CSS `position: sticky; top: 0; z-index: >=50` langsung di `Header.module.css` pada review lanjutan (di luar scope file yang diminta pada task ini).
- **Lenis Wrapper**: `LenisProvider.tsx` ditemukan di `components/` (belum dibaca detail — di luar daftar file yang diminta untuk review kode Beranda ini, tapi keberadaannya di root komponen mengindikasikan kepatuhan).

Kedua poin di atas berada di luar daftar file yang diminta secara eksplisit oleh task (`app/page.tsx`, `components/sections/*.tsx`, `Header.tsx`, `Footer.tsx`), sehingga hanya dicatat sebagai observasi tambahan, tidak memengaruhi skor PASS/REVISI pada kode Beranda yang direview.

---

## Feedback Revisi
Tidak ada — skor PASS pada seluruh 9 item wajib. Catatan minor pada item 8 (opsional, non-blocking) dapat dipertimbangkan pada iterasi visual polish berikutnya jika diperlukan, bukan syarat kelulusan.

---

## Keputusan Final

**STATUS: PASS** — Kode halaman Beranda JobFit sesuai dengan PLAN-beranda.md dan ASSET-MAPPING.md. Tidak ada pelanggaran Zero Tolerance (Strict Slug, gambar fiktif/rusak, atribut SEO ganda hilang, emoji UI).
