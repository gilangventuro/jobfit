# Page Planning — Kontak — JobFit

> Planning detail untuk halaman Kontak. Referensi: PLAN-GLOBAL.md
> Halaman dalam (Inner Page) — header teks murni, TANPA `heroImage` sesuai `planner/AGENTS.md` & aturan Hero Pages di SKILL.md.

---

## 1. Info Halaman

| Field | Isi |
|---|---|
| Nama Halaman | Kontak |
| Route/URL | `/kontak` |
| Buying Keyword | kontak jasa psikotes online |
| LSI Keywords | demo psikotes online, konsultasi tes karyawan |

---

## 2. SEO Metadata

| Field | Isi |
|---|---|
| Title Tag | `Kontak JobFit — Konsultasi Jasa Psikotes Online` (47 karakter) |
| Meta Description | `Hubungi JobFit untuk demo psikotes online atau konsultasi tes karyawan. Chat WhatsApp langsung atau kirim pesan lewat form, tim kami siap merespon.` (147 karakter) |
| Schema.org Type | `ContactPage` |

---

## 3. Value Proposition yang Digunakan

> Referensi dari PLAN-GLOBAL.md Section 2. Halaman Kontak tidak memiliki kalimat persuasi eksklusif yang di-assign padanya di tabel inventory global — dua statistik trust-proof (#17, #18) yang sudah dialokasikan ke Beranda/Tentang Kami dipakai ulang di sini sebagai penguat kepercayaan sebelum audiens mengirim pesan (bukan klaim baru, substansi tidak diubah).

| # | Kalimat Persuasi | Posisi di Halaman Ini |
|---|---|---|
| GLOBAL #17 | "Lebih dari 500++ Psikotes Online dilakukan" | Section 2 (`solution` — Hubungi Kami Langsung) — trust indicator kecil di dekat info kontak |
| GLOBAL #18 | "90% Merasa puas dengan hasil Psikotes Online" | Section 2 (`solution` — Hubungi Kami Langsung) — trust indicator kecil di dekat info kontak |

---

## 4. Section Layout

### Section 1: `about`

> Berfungsi sebagai header halaman — teks murni, TANPA `heroImage` (aturan Inner Page). Menggantikan komponen hero besar yang hanya boleh dipakai di Beranda.

| Field | Isi |
|---|---|
| title | Hubungi Tim JobFit |
| story | ["Punya pertanyaan seputar psikotes online, Employee Satisfaction Survey, atau Competency Assessment Survey untuk perusahaan Anda? Tim JobFit siap membantu.", "Sampaikan kebutuhan rekrutmen dan asesmen tim Anda — kami akan merespon melalui WhatsApp atau email secepat mungkin."] |
| teamPhoto | Tidak digunakan (kosongkan) |

**Membutuhkan Gambar: Tidak** — header teks murni, tanpa gambar besar, sesuai aturan Inner Page (dilarang `heroImage`).

> Jika section ini memiliki ≥ 10 item: tidak relevan (bukan section berbasis daftar item).

---

### Section 2: `solution`

> Section utama: kombinasi form kontak (nama, email/perusahaan, nomor WhatsApp, pesan) di satu sisi dan 3 kanal kontak langsung di sisi lain. WhatsApp diposisikan sebagai kanal paling dominan (sesuai tujuan lead generation), form email sebagai alternatif bagi audiens yang lebih nyaman menulis detail kebutuhan.

| Field | Isi |
|---|---|
| title | Hubungi Kami Langsung |
| valueProp | "Sampaikan kebutuhan asesmen tim Anda lewat WhatsApp untuk respon tercepat, atau isi formulir di samping untuk menjelaskan kebutuhan secara lebih detail." |
| benefits | Lihat tabel 3 item di bawah |

**Tabel `benefits` (3 item — kanal kontak langsung, ditampilkan sebagai kartu di sisi form):**

| title | desc | icon |
|---|---|---|
| WhatsApp | 0851-2804-3814 — kanal respon tercepat, klik untuk chat langsung | ikon WhatsApp (Lucide `MessageCircle` atau brand icon resmi) |
| Email | Jobfit@venturo.pro — untuk pertanyaan detail atau lampiran dokumen | ikon `Mail` (Lucide) |
| Alamat Kantor | Jl. Rinjani No 26, Oro-Oro Dowo, Kec. Klojen, Kota Malang, Jawa Timur 65119 | ikon `MapPin` (Lucide) |

**Trust indicator kecil (ditempel di dekat kartu kontak, bukan item `benefits` baru):** "500++ Psikotes Online telah dilakukan" dan "90% pengguna puas dengan hasil Psikotes Online" (GLOBAL VP #17, #18) — ditampilkan sebagai 2 angka statistik kecil, bukan klaim baru.

**Catatan Implementasi Form Kontak (elemen UI di sisi kiri section, berdampingan dengan kartu kontak di sisi kanan):**

| Field Form | Tipe Input | Wajib | Catatan |
|---|---|---|---|
| Nama | Text | Ya | Placeholder: "Nama lengkap Anda" |
| Email / Perusahaan | Text/Email | Ya | Placeholder: "Email kerja & nama perusahaan" |
| Nomor WhatsApp | Tel | Ya | Placeholder: "08xx-xxxx-xxxx" |
| Pesan | Textarea | Ya | Placeholder: "Ceritakan kebutuhan asesmen tim Anda" |
| Tombol Submit Primer | Button (dominan, warna primary `#107098`, ukuran paling besar di section) | — | Teks: "Chat via WhatsApp" — klik langsung membuka WhatsApp dengan draft pesan berisi isian form |
| Tombol Submit Sekunder | Button (outline/ghost, ukuran lebih kecil dari primer) | — | Teks: "Kirim via Email" — alternatif, mengirim isian form sebagai email ke Jobfit@venturo.pro |

**Membutuhkan Gambar: Ya (opsional, bukan wajib)** — boleh menambahkan 1 foto pendukung kecil di sisi form (bukan gambar besar/hero) untuk memperkuat kesan "Corporate Trust" dan mengisi whitespace di layout 2 kolom. Aset yang dipakai: `stock-woman-handshake-collaborate.jpg` (ditempatkan di sisi form, ukuran kartu/medium, BUKAN full-width hero).

> Jika section ini memiliki ≥ 10 item: tidak berlaku (hanya 3 item `benefits`).

---

### Section 3: `cta`

> CTA penutup halaman — WhatsApp tetap jadi aksi paling dominan secara visual (tombol utama), form/email sudah tersedia di Section 2 sebagai alternatif bagi yang belum siap chat langsung.

| Field | Isi |
|---|---|
| headline | Tim Rekrutmen Lain Sudah Mulai |
| subheadline | Jangan biarkan proses seleksi kandidat Anda tertinggal. Diskusikan kebutuhan tim Anda dengan JobFit sekarang. |
| cta.text | Chat WhatsApp Sekarang |
| guarantee | Data koresponden Anda kami jamin kerahasiaannya — sesuai kebijakan privasi JobFit. |

**Membutuhkan Gambar: Tidak** — section CTA murni teks + tombol, tanpa gambar, konsisten dengan gaya CTA final di halaman lain.

> Jika section ini memiliki ≥ 10 item: tidak berlaku.

---

## 5. Catatan Khusus Halaman

- **Section `video` SENGAJA DIHILANGKAN** dari halaman ini atas instruksi eksplisit — berbeda dari aturan umum "minimal 1 video SMO per halaman" di SKILL.md. Halaman Kontak difokuskan murni pada konversi (form + WhatsApp), bukan storytelling video.
- **Tidak ada link media sosial** di halaman ini maupun di footer yang direferensikan — JobFit belum memiliki akun resmi manapun (Instagram/LinkedIn/TikkTok kosong di PLAN-GLOBAL Section 5), sesuai `final_intake.md` Section 1 & Section 5.
- **Tidak ada klaim promo** (kuota gratis bertenggat waktu, fasilitas premium terbatas, dsb.) dicantumkan di halaman ini maupun di CTA/guarantee, sesuai larangan eksplisit user di `final_intake.md` Section 4 dan `PLAN-GLOBAL.md` Section 6.
- **WhatsApp adalah CTA primer** di kedua section interaktif (Section 2 tombol submit primer, Section 3 tombol CTA final) — sejalan dengan tujuan lead generation langsung; form email berfungsi sebagai jalur alternatif, bukan primer.
- Data kontak (WhatsApp 0851-2804-3814, email Jobfit@venturo.pro, alamat Jl. Rinjani No 26, Oro-Oro Dowo, Kec. Klojen, Kota Malang, Jawa Timur 65119) diambil identik dari `PLAN-GLOBAL.md` Section 5 (Footer Data) — tidak ada data kontak baru yang dikarang.
- Tone of voice mengikuti PLAN-GLOBAL: formal, data-driven, reassuring tanpa terkesan menjual berlebihan (bukan hard-sell, bukan playful).
- Gambar pendukung `stock-woman-handshake-collaborate.jpg` di Section 2 bersifat opsional — jika tim implementasi memilih layout form tanpa gambar (2 kolom teks/form saja), section tetap valid karena bukan section berbasis gambar wajib.
