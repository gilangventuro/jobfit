# PLAN-DESIGN-SYSTEM — JobFit

> Spesifikasi teknis design system wajib dipakai oleh skill `generator`. Berdasarkan `PLAN-GLOBAL.md` Section 3 (Branding). Semua nilai spesifik — tidak ada nilai ambigu.

---

## 1. Color System

### Primary Palette
| Token Name | Hex | Penggunaan |
|---|---|---|
| `--color-primary` | #107098 | CTA button utama, accent, link aktif, navbar text/logo area |
| `--color-primary-light` | #3D93B8 | Hover state button, background highlight ringan |
| `--color-primary-dark` | #0B4C63 | Pressed state, shadow elemen primary, heading teks gelap |

### Secondary Palette
| Token Name | Hex | Penggunaan |
|---|---|---|
| `--color-secondary` | #10B0C8 | Section background alternating (tint), card accent, badge |
| `--color-secondary-light` | #6FD3E3 | Subtle background highlight, gradient stop |
| `--color-secondary-dark` | #0C8AA0 | Border aktif, divider aksen |

### Neutral Palette
| Token Name | Hex | Penggunaan |
|---|---|---|
| `--color-dark` | #0B3A4D | Heading teks utama, footer background |
| `--color-gray-800` | #1B1B1B | Body teks utama |
| `--color-gray-500` | #666666 | Placeholder, caption, teks sekunder |
| `--color-gray-100` | #F3F3F3 | Background section light alternate |
| `--color-white` | #FFFFFF | Background card, teks on dark |

### Semantic Colors
| Token Name | Hex | Penggunaan |
|---|---|---|
| `--color-success` | #22C55E | Status berhasil, badge aktif |
| `--color-error` | #EF4444 | Validasi error, pesan gagal |
| `--color-warning` | #DC5641 | Badge "best value" di tabel harga (warna aksen hangat brand, dipakai sangat terbatas) |
| `--color-info` | #107098 | Informasi, tooltip (memakai primary) |

> **Kontras Warna**: Primary `#107098` (medium-dark) ↔ Secondary `#10B0C8` (lebih terang) — memenuhi aturan gelap↔terang. Background utama tetap putih/`#F9FBFD` (Light mode saja, tanpa dark mode).

---

## 2. Typography Scale

Font Heading: **Lexend** — Font Body: **Source Sans 3**
Google Fonts: `https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700&family=Source+Sans+3:wght@300;400;500;600;700&display=swap`

| Token | Font Family | Size | Weight | Line-Height | Penggunaan |
|---|---|---|---|---|---|
| `--text-h1` | Lexend | 3rem / 48px | 700 | 1.2 | Hero headline (Beranda saja) |
| `--text-h2` | Lexend | 2.25rem / 36px | 700 | 1.3 | Section title |
| `--text-h3` | Lexend | 1.75rem / 28px | 600 | 1.4 | Sub-section title, card title besar |
| `--text-h4` | Lexend | 1.25rem / 20px | 600 | 1.5 | Accordion title (FAQ), list heading |
| `--text-body-lg` | Source Sans 3 | 1.125rem / 18px | 400 | 1.6 | Hero subheadline, lead paragraph |
| `--text-body` | Source Sans 3 | 1rem / 16px | 400 | 1.6 | Paragraf umum, deskripsi card |
| `--text-body-sm` | Source Sans 3 | 0.875rem / 14px | 400 | 1.5 | Caption, label, badge |
| `--text-caption` | Source Sans 3 | 0.75rem / 12px | 400 | 1.4 | Footer teks, timestamp |

> **Copyfitting**: Hero headline (H1) maksimal 7 kata/25-40 karakter — dipakai untuk hero mission statement Beranda. Section title (H2) maksimal 5 kata. CTA button teks maksimal 3 kata.

---

## 3. Spacing Scale (berbasis 4px grid)

| Token | Value | Penggunaan Umum |
|---|---|---|
| `--space-1` | 4px | Gap ikon dengan teks |
| `--space-2` | 8px | Padding badge, gap elemen kecil |
| `--space-3` | 12px | Gap dalam card kompak |
| `--space-4` | 16px | Padding card standar |
| `--space-6` | 24px | Margin bawah heading |
| `--space-8` | 32px | Padding section horizontal (mobile) |
| `--space-12` | 48px | Padding section vertikal (tablet) |
| `--space-16` | 64px | Padding section vertikal (desktop) |
| `--space-24` | 96px | Gap antar section besar (whitespace generous — ciri "Corporate Trust") |

---

## 4. Border Radius System

| Token | Value | Penggunaan |
|---|---|---|
| `--radius-sm` | 4px | Badge, tag kecil |
| `--radius-md` | 8px | Input field, dropdown |
| `--radius-lg` | 12px | Card standar, button |
| `--radius-xl` | 16px | Card besar, modal |
| `--radius-2xl` | 24px | Hero card, featured pricing card |
| `--radius-full` | 9999px | Pill button, avatar, tag rounded |

---

## 5. Grid & Layout System

| Breakpoint | Kondisi Width | Container Max-Width | Jumlah Kolom |
|---|---|---|---|
| Mobile (sm) | < 640px | 100% dengan padding 16px | 4 |
| Tablet (md) | 640px – 1024px | 720px | 8 |
| Desktop (lg) | 1024px – 1280px | 1024px | 12 |
| Wide (xl) | > 1280px | 1200px | 12 |

---

## 6. Component Specs

### 6.1. Button Variants
| Variant | Background | Text Color | Border | Padding | Hover State |
|---|---|---|---|---|---|
| Primary | `--color-primary` | #FFFFFF | Tidak ada | 16px 32px | Darken ke `--color-primary-dark`, `transform: scale(1.02)` |
| Secondary | Transparan | `--color-primary` | 2px solid `--color-primary` | 14px 30px | Fill `--color-primary`, text putih |
| Ghost | Transparan | `--color-gray-800` | Tidak ada | 12px 24px | Background `--color-gray-100` |
| Danger | `--color-error` | #FFFFFF | Tidak ada | 12px 24px | Darken 10% |

> CTA utama halaman: variant Primary, padding minimum 16px 32px, font-size `--text-body` (16px), teks maksimal 3 kata.

### 6.2. Card Style (termasuk Pricing Card)
| Property | Value |
|---|---|
| Background | `--color-white` |
| Border Radius | `--radius-lg` (12px); Pricing card unggulan: `--radius-2xl` (24px) |
| Shadow Default | `0 2px 8px rgba(16, 112, 152, 0.08)` |
| Padding | `--space-6` (24px) |
| Hover Shadow | `0 8px 24px rgba(16, 112, 152, 0.15)` |
| Hover Transform | `translateY(-2px)` |
| Transition | `all 0.2s ease` |
| Badge "Best Value" | Background `--color-warning` (#DC5641), teks putih, `--radius-full`, dipakai HANYA pada 1 paket harga per tabel |

### 6.3. Navbar Style
| Property | Value |
|---|---|
| Background | Glassmorphism: `backdrop-filter: blur(12px); background: rgba(255,255,255,0.85)` saat discroll; transparan di top-of-page |
| Position | `sticky top-0` |
| Z-Index | `50` (minimum sesuai AGENTS.md) |
| Height Desktop | 72px |
| Height Mobile | 64px |
| Logo | WAJIB `public/assets/` — file logo asli JobFit (`new logo.png`), DILARANG teks placeholder |

### 6.4. Form & Input Style (halaman Kontak)
| Property | Value |
|---|---|
| Border Default | 1px solid `--color-gray-300` (#D0D0D0) |
| Border Radius | `--radius-md` (8px) |
| Padding | 12px 16px |
| Focus Border | `--color-primary` |
| Focus Shadow | `0 0 0 3px rgba(16, 112, 152, 0.2)` |
| Error State Border | `--color-error` |
| Placeholder Color | `--color-gray-500` |

### 6.5. Motion System (Trilogi AAA — wajib dipakai generator)
| Library | Peran | Aturan |
|---|---|---|
| Lenis | Inertial smooth scrolling global | Diinisialisasi di Root Layout, berlaku di seluruh halaman |
| Anime.js | Animasi mikro prosedural | Dipakai pada angka statistik (count-up 500++/90%), ikon fitur, elemen dekoratif kartu — infinite ambient looping pada hover |
| Framer Motion | Scroll-reveal & hover kartu | UNIDIRECTIONAL (atas→bawah, deteksi arah scroll), DILARANG `once: true`, DILARANG bidirectional; tipe ketat `as const` |
