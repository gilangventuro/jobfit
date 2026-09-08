"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronRight, ChevronDown, ChevronLeft } from "lucide-react";
import styles from "./PanduanDocs.module.css";

const DOCS_ASSETS = "https://jobfit-doc.vercel.app/help/assets";
const img = (path: string) => `${DOCS_ASSETS}/${path}`;

/* ─────────────────────────────────────────────
   CONTENT HELPERS
───────────────────────────────────────────── */
function Step({ n, title, children }: { n: number; title?: string; children: React.ReactNode }) {
  return (
    <div className={styles.step}>
      <div className={styles.stepNum}>{n}</div>
      <div className={styles.stepBody}>
        {title && <strong>{title}</strong>}
        {children}
      </div>
    </div>
  );
}

function DocImg({ src, alt }: { src: string; alt?: string }) {
  return (
    <figure className={styles.figure}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt ?? ""} className={styles.docImg} loading="lazy" />
    </figure>
  );
}

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className={styles.tableWrap}>
      <table className={styles.table}>
        <thead>
          <tr>{headers.map((h) => <th key={h}>{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>{r.map((c, j) => <td key={j} dangerouslySetInnerHTML={{ __html: c }} />)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Note({ children }: { children: React.ReactNode }) {
  return <div className={styles.note}>{children}</div>;
}

/* ─────────────────────────────────────────────
   PAGE CONTENT DEFINITIONS
───────────────────────────────────────────── */
const PAGES: Record<string, { title: string; content: React.ReactNode }> = {
  home: {
    title: "Panduan JobFit",
    content: (
      <>
        <p>Selamat datang di <strong>JobFit</strong>! Platform rekrutmen yang membantu tim Anda mengelola seluruh proses hiring — mulai dari membuat lowongan, menerima lamaran, menyaring kandidat dengan AI, hingga proses penawaran kerja.</p>
        <h2>Apa yang Bisa Anda Lakukan?</h2>
        <ul>
          <li><strong>Memulai</strong> — Login, reset kata sandi, dan menjelajahi dasbor</li>
          <li><strong>Position</strong> — Mengelola profil jabatan sebagai acuan asesmen</li>
          <li><strong>Recruitment</strong> — Memantau pipeline kandidat dari awal hingga hired</li>
          <li><strong>Membuat Lowongan</strong> — Formulir, pertanyaan, dan konfigurasi asesmen</li>
          <li><strong>WhatsApp Service</strong> — Menghubungkan WA dan mengatur template pesan otomatis</li>
          <li><strong>Pengaturan</strong> — Profil perusahaan, daftar admin, dan auto-posting</li>
          <li><strong>Talent</strong> — Pusat data kandidat seluruh perusahaan</li>
        </ul>
        <p>Gunakan navigasi di sebelah kiri untuk menjelajahi panduan sesuai kebutuhan Anda.</p>
      </>
    ),
  },

  /* ── MEMULAI ── */
  login: {
    title: "Login",
    content: (
      <>
        <p>Panduan masuk ke aplikasi JobFit.</p>
        <Step n={1} title="Buka Halaman Masuk">
          <p>Akses URL aplikasi JobFit di browser. Halaman login akan tampil sebagai pintu masuk.</p>
          <DocImg src={img("auth/login/image_1.png")} alt="Halaman login JobFit" />
        </Step>
        <Step n={2} title="Isi Kredensial">
          <p>Masukkan <strong>Email</strong> terdaftar dan <strong>Kata Sandi</strong>. Pastikan Caps Lock tidak aktif.</p>
          <DocImg src={img("auth/login/image_2.png")} alt="Form isi email dan kata sandi" />
        </Step>
        <Step n={3} title="Aktifkan Ingat Saya">
          <p>Centang kotak <strong>Ingat Saya</strong> untuk menyimpan sesi selama <strong>7 hari</strong>. Tanpa ini, sesi berakhir lebih cepat.</p>
          <DocImg src={img("auth/login/image_3.png")} alt="Opsi Ingat Saya" />
        </Step>
        <Step n={4} title="Klik Masuk">
          <p>Setelah klik tombol <strong>Masuk</strong>, Anda diarahkan ke dasbor. Jika salah, peringatan akan muncul.</p>
          <DocImg src={img("auth/login/image_4.png")} alt="Tombol masuk" />
        </Step>
        <Step n={5} title="Keluar">
          <p>Klik ikon akun (pojok kanan atas) → <strong>Keluar</strong> → kembali ke halaman login.</p>
          <DocImg src={img("auth/login/image_5.png")} alt="Menu keluar" />
        </Step>
        <Note>
          <ul>
            <li>Akun hanya bisa dibuat oleh admin.</li>
            <li><strong>Ingat Saya</strong> sebaiknya digunakan hanya di perangkat pribadi.</li>
            <li>Sesi bisa kedaluwarsa jika lama tidak aktif.</li>
          </ul>
        </Note>
      </>
    ),
  },

  "lupa-password": {
    title: "Lupa / Reset Kata Sandi",
    content: (
      <>
        <p>Panduan mereset kata sandi akun JobFit Anda.</p>
        <Step n={1} title="Buka Halaman Login">
          <p>Akses halaman masuk JobFit, lalu klik <strong>"Lupa kata sandi?"</strong>.</p>
          <DocImg src={img("auth/lupa-reset-kata-sandi/image_1.png")} alt="Link lupa kata sandi" />
        </Step>
        <Step n={2} title="Minta Tautan Reset">
          <p>Masukkan email terdaftar, lalu klik tombol kirim. Sistem mengirim tautan via <strong>WhatsApp</strong>.</p>
          <DocImg src={img("auth/lupa-reset-kata-sandi/image_2.png")} alt="Form email reset" />
        </Step>
        <Step n={3} title="Buka Tautan dari WhatsApp">
          <p>Buka chat WhatsApp yang memuat tautan reset, klik tautan → diarahkan ke halaman reset password.</p>
          <DocImg src={img("auth/lupa-reset-kata-sandi/image_3.png")} alt="Tautan reset di WhatsApp" />
        </Step>
        <Step n={4} title="Atur Kata Sandi Baru">
          <p>Masukkan & konfirmasi kata sandi baru, lalu klik <strong>Simpan</strong>.</p>
          <DocImg src={img("auth/lupa-reset-kata-sandi/image_4.png")} alt="Form kata sandi baru" />
        </Step>
        <Step n={5} title="Login Kembali">
          <p>Isi email + kata sandi baru → klik <strong>Masuk</strong>.</p>
          <DocImg src={img("auth/lupa-reset-kata-sandi/image_5.png")} alt="Login dengan kata sandi baru" />
        </Step>
        <Note>
          <ul>
            <li>Email harus sesuai yang terdaftar di sistem.</li>
            <li>Reset dikirim lewat WhatsApp, <strong>bukan email</strong>.</li>
            <li>Jika tidak menerima pesan, pastikan WhatsApp Service sudah terhubung.</li>
          </ul>
        </Note>
      </>
    ),
  },

  dasbor: {
    title: "Menjelajahi Dasbor",
    content: (
      <>
        <p>Dasbor adalah halaman utama yang tampil otomatis setelah login.</p>
        <Step n={1} title="Membuka Dasbor">
          <p>Dasbor tampil otomatis setelah login. Untuk membukanya kembali: klik ikon akun kanan atas → pilih <strong>Home</strong>.</p>
          <DocImg src={img("home/menjelajahi-dasbor/image_1.png")} alt="Dasbor utama JobFit" />
        </Step>
        <Step n={2} title="Membaca Statistik">
          <p>Empat kartu statistik tersedia:</p>
          <ul>
            <li><strong>Total Position</strong> — jumlah lowongan terdaftar</li>
            <li><strong>Total Talent</strong> — jumlah kandidat di sistem</li>
            <li><strong>Menunggu Review</strong> — kandidat belum direview</li>
            <li><strong>Total High Fit</strong> — kandidat dengan skor kecocokan tinggi</li>
          </ul>
          <DocImg src={img("home/menjelajahi-dasbor/image_2.png")} alt="Kartu statistik dasbor" />
        </Step>
        <Step n={3} title="Quick Action">
          <p>Kartu quick action memungkinkan lompat langsung ke menu seperti <strong>Buat Lowongan</strong> atau <strong>Recruitment</strong> hanya dengan satu klik.</p>
          <DocImg src={img("home/menjelajahi-dasbor/image_3.png")} alt="Quick action dasbor" />
        </Step>
        <Step n={4} title="Berpindah Menu">
          <p>Navigasi kiri menyediakan akses ke <strong>Recruitment</strong>, <strong>Talent</strong>, <strong>WhatsApp Service</strong>, dan <strong>Pengaturan</strong>.</p>
          <DocImg src={img("home/menjelajahi-dasbor/image_4.png")} alt="Navigasi kiri aplikasi" />
        </Step>
        <Step n={5} title="Kelola Akun">
          <p>Ikon akun kanan atas memberi opsi: kembali ke Home, mengganti perusahaan aktif, atau <strong>Keluar</strong>.</p>
          <DocImg src={img("home/menjelajahi-dasbor/image_5.png")} alt="Menu akun kanan atas" />
        </Step>
        <Note>
          <ul>
            <li>Statistik bernilai 0 → belum ada data, atau perusahaan yang dipilih keliru.</li>
            <li>Menu tidak muncul → izin akun belum diberikan; hubungi admin/superadmin.</li>
          </ul>
        </Note>
      </>
    ),
  },

  /* ── POSITION ── */
  "mengelola-position": {
    title: "Mengelola Position",
    content: (
      <>
        <p>Profil position menjadi acuan perhitungan <strong>Position Fit</strong> kandidat. Buat dan kelola profil jabatan sebelum membuat lowongan.</p>
        <Step n={1} title="Buka Menu Position">
          <p>Login ke JobFit, lalu buka menu <strong>Position</strong> di navigasi kiri. Halaman menampilkan seluruh daftar profil position tersimpan.</p>
          <DocImg src={img("position/mengelola-position/image_1.png")} alt="Daftar position" />
        </Step>
        <Step n={2} title="Membuat Position Baru">
          <p>Klik <strong>Buat Position</strong>, lalu lengkapi:</p>
          <ul>
            <li>Nama position &amp; keterangan nasional</li>
            <li>Gaji maks + toggle tampil publik</li>
            <li>Position Description &amp; Position Requirement</li>
          </ul>
          <DocImg src={img("position/mengelola-position/image_2.png")} alt="Form buat position baru" />
        </Step>
        <Step n={3} title="Level Tes Kognitif">
          <p>Pilih level <strong>1–5</strong>; level menentukan tingkat kesulitan tes yang dikirim ke kandidat.</p>
          <DocImg src={img("position/mengelola-position/image_3.png")} alt="Pilih level tes kognitif" />
        </Step>
        <Step n={4} title="Mapping Humanis (jika aktif)">
          <p>Isi mapping <strong>jabatan</strong> dan <strong>departemen</strong> sesuai data sistem Humanis.</p>
          <DocImg src={img("position/mengelola-position/image_4.png")} alt="Mapping Humanis" />
        </Step>
        <Step n={5} title="Simpan / Edit / Hapus">
          <ul>
            <li><strong>Simpan</strong> → position siap dipakai saat membuat lowongan</li>
            <li><strong>Edit</strong> → ubah data, lalu simpan kembali</li>
            <li><strong>Hapus</strong> → untuk position yang tidak dipakai lagi</li>
          </ul>
          <DocImg src={img("position/mengelola-position/image_5.png")} alt="Aksi simpan edit hapus position" />
        </Step>
        <Note>
          <ul>
            <li>Profil position menjadi acuan perhitungan <strong>Position Fit</strong> kandidat.</li>
            <li>Menghapus position <strong>tidak</strong> otomatis menghapus lowongan aktif yang menggunakannya — hindari menghapus position yang sedang dipakai.</li>
          </ul>
        </Note>
      </>
    ),
  },

  /* ── RECRUITMENT ── */
  "memahami-pipeline": {
    title: "Memahami Pipeline Kandidat",
    content: (
      <>
        <p>Menu <strong>Recruitment</strong> adalah pusat pengelolaan kandidat — memantau setiap lowongan dari awal lamaran sampai diterima atau ditolak.</p>
        <Step n={1} title="Buka Menu Recruitment">
          <p>Buka menu <strong>Recruitment</strong> di navigasi kiri aplikasi.</p>
        </Step>
        <Step n={2} title="Pilih Lowongan">
          <p>Lihat daftar lowongan di panel kiri. Gunakan kotak pencarian untuk mempersempit daftar jika panjang.</p>
        </Step>
        <Step n={3} title="Baca Tab Status Pipeline">
          <p>Setelah memilih lowongan, pipeline kandidat tampil sebagai deretan tab status. Terdapat <strong>8 tab status</strong>:</p>
          <Table
            headers={["Status", "Arti"]}
            rows={[
              ["<strong>Waiting</strong>", "Menunggu review"],
              ["<strong>Shortlisted</strong>", "Terpilih untuk tahap berikutnya"],
              ["<strong>Pre-interviewed</strong>", "Sebelum wawancara"],
              ["<strong>Interkeyed</strong>", "Sudah diwawancarai"],
              ["<strong>Offered</strong>", "Sudah ditawari pekerjaan"],
              ["<strong>Hired</strong>", "Diterima"],
              ["<strong>Rejected</strong>", "Ditolak"],
              ["<strong>Bookmark</strong>", "Disimpan untuk ditinjau nanti"],
            ]}
          />
        </Step>
        <Step n={4} title="Pahami Arti Setiap Status">
          <p>Setiap tab menampilkan jumlah kandidat dan dapat diklik untuk menampilkan daftarnya. Status dapat diubah kapan saja.</p>
        </Step>
        <Note>
          <ul>
            <li>Status dapat diubah kapan saja.</li>
            <li><strong>Bookmark</strong> menyimpan kandidat tanpa mengubah tahap sebenarnya.</li>
            <li>Minimal satu lowongan aktif diperlukan sebelum kandidat masuk pipeline.</li>
          </ul>
        </Note>
      </>
    ),
  },

  "mengelola-lowongan": {
    title: "Mengelola Lowongan",
    content: (
      <>
        <p>Panduan mencari, mengaktifkan, mengedit, mengekspor, dan melihat lowongan di menu Recruitment.</p>
        <Step n={1} title="Mencari Lowongan">
          <p>Buka menu <strong>Recruitment</strong>, gunakan kotak pencarian di panel kiri berdasarkan nama lowongan, lalu pilih lowongan dari hasil pencarian.</p>
          <DocImg src={img("recruitment/mengelola-lowongan/image_1.png")} alt="Pencarian lowongan" />
        </Step>
        <Step n={2} title="Aktivasi / Deaktivasi">
          <p>Klik aksi <strong>Aktivasi/Deaktivasi</strong> pada lowongan yang dipilih. Lowongan aktif menerima lamaran; nonaktif tidak. Status dapat dikembalikan kapan saja.</p>
          <DocImg src={img("recruitment/mengelola-lowongan/image_2.png")} alt="Toggle aktivasi lowongan" />
        </Step>
        <Step n={3} title="Mengedit Lowongan">
          <p>Klik aksi <strong>Edit</strong> → form terbuka dengan data existing. Ubah informasi yang dibutuhkan, lalu simpan.</p>
          <DocImg src={img("recruitment/mengelola-lowongan/image_3.png")} alt="Edit lowongan" />
        </Step>
        <Step n={4} title="Ekspor Data">
          <p>Buka pipeline lowongan → klik <strong>Export</strong>. Data tersimpan sebagai berkas eksternal untuk arsip.</p>
          <DocImg src={img("recruitment/mengelola-lowongan/image_6.png")} alt="Ekspor data lowongan" />
        </Step>
        <Step n={5} title="Melihat Lowongan">
          <p>Klik aksi <strong>View</strong> untuk melihat tampilan publik. Berguna untuk memverifikasi informasi sudah benar.</p>
          <DocImg src={img("recruitment/mengelola-lowongan/image_7.png")} alt="Lihat tampilan publik lowongan" />
        </Step>
        <Note>
          <p>Lowongan dapat dimodifikasi kapan pun melalui aksi <strong>Edit</strong> di menu Recruitment.</p>
        </Note>
      </>
    ),
  },

  "menghapus-lowongan": {
    title: "Menghapus Lowongan",
    content: (
      <>
        <p>Panduan menghapus lowongan yang tidak lagi diperlukan.</p>
        <Step n={1} title="Buka Daftar Lowongan">
          <p>Akses menu <strong>Recruitment</strong> di navigasi kiri, lalu pilih lowongan yang hendak dihapus dari panel kiri.</p>
        </Step>
        <Step n={2} title="Proses Penghapusan">
          <p>Klik ikon menu <strong>(⋮)</strong> pada lowongan terpilih → pilih opsi <strong>Hapus</strong> → konfirmasi pada dialog yang muncul. Lowongan akan hilang dari daftar.</p>
          <DocImg src={img("recruitment/menghapus-lowongan/image_1.png")} alt="Menu aksi hapus lowongan" />
        </Step>
        <Note>
          <ul>
            <li>Menghapus lowongan <strong>tidak otomatis menghapus kandidat</strong> dari daftar Talent.</li>
            <li>Tindakan ini bersifat permanen — verifikasi kebutuhan sebelum melanjutkan.</li>
          </ul>
        </Note>
      </>
    ),
  },

  "mengubah-status": {
    title: "Mengubah Status Kandidat",
    content: (
      <>
        <p>Panduan mengubah status kandidat di pipeline Recruitment JobFit.</p>
        <Step n={1} title="Membuka Detail Kandidat">
          <p>Buka menu <strong>Recruitment</strong> → pilih lowongan → klik tab status pipeline → klik kandidat untuk membuka panel detail.</p>
          <DocImg src={img("recruitment/mengubah-status-kandidat/image_1.png")} alt="Detail kandidat" />
        </Step>
        <Step n={2} title="Mengubah Status">
          <p>Buka <strong>dropdown status</strong> di panel kandidat → pilih status baru. Status langsung berubah dan kandidat berpindah tab.</p>
          <DocImg src={img("recruitment/mengubah-status-kandidat/image_2.png")} alt="Dropdown ubah status" />
        </Step>
        <Step n={3} title="Rating & Catatan">
          <p>Isi <strong>rating</strong> dan tambahkan <strong>catatan/note</strong> untuk evaluasi lanjutan.</p>
          <DocImg src={img("recruitment/mengubah-status-kandidat/image_3.png")} alt="Form rating dan catatan" />
        </Step>
        <Step n={4} title="Bookmark">
          <p>Pilih status <strong>Bookmark</strong> untuk menyimpan kandidat tanpa mengubah tahap aktual.</p>
          <DocImg src={img("recruitment/mengubah-status-kandidat/image_4.png")} alt="Status bookmark" />
        </Step>
        <Step n={5} title="Perubahan Status Massal">
          <p>Centang beberapa kandidat → pilih status → opsional kirim <strong>WhatsApp notifikasi</strong>. Pastikan sesi WhatsApp sudah terhubung via menu <strong>WhatsApp Service</strong>.</p>
          <DocImg src={img("recruitment/mengubah-status-kandidat/image_5.png")} alt="Perubahan status massal" />
        </Step>
        <Note>
          <ul>
            <li>Status bisa diubah ke tahap mana pun, termasuk dikembalikan ke status sebelumnya.</li>
            <li>WA massal memerlukan sesi WhatsApp yang aktif.</li>
          </ul>
        </Note>
      </>
    ),
  },

  "hasil-screening": {
    title: "Memeriksa Hasil Screening",
    content: (
      <>
        <p>Panduan memeriksa hasil screening kandidat di modul Recruitment JobFit.</p>
        <Step n={1} title="Membuka Hasil Screening">
          <p>Buka <strong>Recruitment</strong> → pilih lowongan → klik kandidat → buka panel detail → klik <strong>"Lihat Hasil"</strong> untuk membuka modal screening.</p>
          <DocImg src={img("recruitment/memeriksa-hasil-screening/image_1.png")} alt="Tombol lihat hasil screening" />
        </Step>
        <Step n={2} title="Tab CV">
          <p>Baca skor analisis CV oleh AI. Gunakan skor tersebut sebagai pertimbangan keputusan tanpa membaca seluruh berkas secara manual.</p>
          <DocImg src={img("recruitment/memeriksa-hasil-screening/image_2.png")} alt="Tab CV screening" />
        </Step>
        <Step n={3} title="Tab Presentasi">
          <p>Berisi analisis video Loom kandidat. Hasil ini hanya tersedia bila lowongan memakai pertanyaan video dan kandidat mengirimkannya.</p>
          <DocImg src={img("recruitment/memeriksa-hasil-screening/image_3.png")} alt="Tab presentasi screening" />
        </Step>
        <Step n={4} title="Tab Kognitif">
          <p>Skor tes kognitif kandidat. Muncul setelah kandidat menyelesaikan tes.</p>
          <DocImg src={img("recruitment/memeriksa-hasil-screening/image_4.png")} alt="Tab kognitif screening" />
        </Step>
        <Step n={5} title="Tab Perilaku">
          <p>Skor tes perilaku (papikostik). Membantu menilai kecocokan perilaku dengan posisi.</p>
          <DocImg src={img("recruitment/memeriksa-hasil-screening/image_5.png")} alt="Tab perilaku screening" />
        </Step>
        <Step n={6} title="Regenerate Screening">
          <p>Jika tab kosong atau gagal → klik tombol <strong>Regenerate</strong>. Sistem menghitung ulang hasil.</p>
        </Step>
        <Note>
          <ul>
            <li>Hasil kosong = screening masih berjalan atau gagal → gunakan <strong>Regenerate</strong>.</li>
            <li>Screening dilakukan oleh AI berdasarkan berkas lamaran kandidat.</li>
          </ul>
        </Note>
      </>
    ),
  },

  "wawancara-penilaian": {
    title: "Wawancara & Penilaian",
    content: (
      <>
        <p>Panduan melakukan wawancara, mengisi penilaian, dan membuat surat penawaran di JobFit.</p>
        <Step n={1} title="Buka Chat Wawancara">
          <p>Masuk ke <strong>Recruitment</strong> → pilih lowongan → klik kandidat → buka fitur chat interview.</p>
        </Step>
        <Step n={2} title="Lakukan Wawancara">
          <p>Gunakan pertanyaan tersedia untuk menggali kompetensi kandidat sesuai posisi, sambil mencatat informasi penting.</p>
        </Step>
        <Step n={3} title="Isi Penilaian">
          <p>Buka form <strong>"Interview Penilaian"</strong>, isi berdasarkan hasil wawancara, lalu simpan. Hasil tersimpan di detail kandidat sebagai dasar pengambilan keputusan.</p>
        </Step>
        <Step n={4} title="Buat Penawaran (Offer)">
          <p>Gunakan <strong>template offer letter</strong>, isi sesuai ketentuan perusahaan, kirim ke kandidat. Status kandidat berubah menjadi <strong>Offered</strong>.</p>
        </Step>
        <Note>
          <p>Setelah kandidat setuju, ubah status ke <strong>Hired</strong>.</p>
        </Note>
      </>
    ),
  },

  "auto-post": {
    title: "Auto-Post ke Job Board",
    content: (
      <>
        <p>Panduan memantau dan menangani posting lowongan otomatis ke <strong>LinkedIn</strong> dan <strong>Glints</strong>.</p>
        <Step n={1} title="Pastikan Kredensial">
          <p>Buka <strong>Pengaturan → Auto Posting Job</strong>, verifikasi kredensial LinkedIn &amp; Glints sudah tersimpan.</p>
        </Step>
        <Step n={2} title="Publikasikan dengan Auto-Post">
          <p>Buat lowongan → klik <strong>Publikasikan</strong>. Modal terbuka → pilih platform → klik <strong>"Posting Sekarang"</strong>. Proses berjalan di modal Progress Auto-Post.</p>
          <DocImg src={img("recruitment/auto-post-job-board/image_2.png")} alt="Modal auto-post job board" />
        </Step>
        <Step n={3} title="Pantau Status di Recruitment">
          <p>Buka menu Recruitment → pilih lowongan → cek status LinkedIn/Glints → pastikan <strong>"Berhasil"</strong>.</p>
          <DocImg src={img("recruitment/auto-post-job-board/image_3.png")} alt="Status auto-post di recruitment" />
        </Step>
        <Step n={4} title="Posting Ulang jika Gagal">
          <p>Buka modal progress → klik <strong>"Posting Ulang"</strong> → pantau hingga berhasil.</p>
        </Step>
        <Step n={5} title="Perbarui Kredensial">
          <p>Jika selalu gagal → perbarui di <strong>Pengaturan → Auto Posting Job</strong>.</p>
        </Step>
        <Note>
          <ul>
            <li>LinkedIn masih berstatus <strong>Coming Soon</strong>; <strong>Glints</strong> aktif.</li>
            <li>Kegagalan umumnya karena kredensial salah atau kedaluwarsa.</li>
          </ul>
        </Note>
      </>
    ),
  },

  "widget-lowongan": {
    title: "Widget Laman Lowongan",
    content: (
      <>
        <p>Fitur ini memungkinkan penampilan daftar lowongan aktif di website perusahaan menggunakan <strong>kode embed iframe</strong>.</p>
        <Step n={1} title="Buka Pengaturan Widget">
          <p>Menu <strong>Recruitment</strong> → tombol <strong>Pengaturan</strong> → pilih <strong>"Widget Laman Lowongan"</strong>.</p>
        </Step>
        <Step n={2} title="Salin Kode">
          <p>Di modal yang muncul, klik <strong>"Salin Kode"</strong> untuk menyalin iframe ke clipboard.</p>
        </Step>
        <Step n={3} title="Pasang di Website">
          <p>Tempelkan kode pada editor/source code website di posisi yang diinginkan, lalu simpan.</p>
        </Step>
        <Step n={4} title="Sesuaikan Ukuran">
          <p>Ubah atribut <code>width</code> dan <code>height</code> dalam kode embed sesuai kebutuhan.</p>
        </Step>
        <Step n={5} title="Preview">
          <p>Gunakan tombol <strong>Preview</strong> untuk memverifikasi tampilan sebelum dipublikasikan.</p>
        </Step>
        <Note>
          <ul>
            <li>Widget menampilkan lowongan aktif secara <strong>real-time</strong>.</li>
            <li>Kode dihasilkan otomatis — tidak perlu dibuat manual.</li>
            <li>Jika widget tidak tampil, periksa penempatan kode dan pastikan website telah disimpan.</li>
          </ul>
        </Note>
      </>
    ),
  },

  fasilitas: {
    title: "Fasilitas",
    content: (
      <>
        <p>Panduan mengelola <strong>fasilitas perusahaan</strong> sebagai pilihan saat membuat lowongan kerja.</p>
        <Step n={1} title="Membuka Menu Fasilitas">
          <p>Buka <strong>Recruitment</strong> → klik <strong>Pengaturan</strong> → pilih <strong>Fasilitas</strong>.</p>
          <DocImg src={img("recruitment/fasilitas/image_1.png")} alt="Menu fasilitas" />
        </Step>
        <Step n={2} title="Menambahkan Fasilitas">
          <p>Klik <strong>Tambah</strong>, isi nama (contoh: "Asuransi Kesehatan"), lalu <strong>Simpan</strong>.</p>
          <DocImg src={img("recruitment/fasilitas/image_2.png")} alt="Form tambah fasilitas" />
        </Step>
        <Step n={3} title="Mengedit Fasilitas">
          <p>Klik <strong>Edit</strong> pada baris yang dipilih, ubah nama, lalu <strong>Simpan</strong>.</p>
          <DocImg src={img("recruitment/fasilitas/image_3.png")} alt="Edit fasilitas" />
        </Step>
        <Step n={4} title="Menghapus Fasilitas">
          <p>Klik <strong>Hapus</strong> → konfirmasi penghapusan.</p>
          <DocImg src={img("recruitment/fasilitas/image_4.png")} alt="Hapus fasilitas" />
        </Step>
        <Note>
          <ul>
            <li>Fasilitas tersedia sebagai pilihan di form pembuatan lowongan bagian <strong>Fasilitas Pekerjaan</strong>.</li>
            <li>Menghapus fasilitas hanya menghapus dari daftar master; lowongan yang sudah dibuat tetap menyimpan datanya.</li>
          </ul>
        </Note>
      </>
    ),
  },

  "penilaian-interview": {
    title: "Penilaian Interview",
    content: (
      <>
        <p>Panduan mengelola <strong>template penilaian wawancara</strong> di menu Recruitment JobFit.</p>
        <Step n={1} title="Buka Menu">
          <p>Recruitment → <strong>Pengaturan</strong> → Penilaian Interview.</p>
        </Step>
        <Step n={2} title="Tambah Template">
          <p>Klik <strong>Tambah</strong> → isi nama template (contoh: "Wawancara Teknis") → tambahkan pertanyaan satu per satu → klik <strong>Simpan</strong>.</p>
        </Step>
        <Step n={3} title="Lihat Rincian">
          <p>Cek jumlah pertanyaan &amp; skala rating per template.</p>
        </Step>
        <Step n={4} title="Edit Template">
          <p>Aksi Edit → ubah nama/pertanyaan → Simpan.</p>
        </Step>
        <Step n={5} title="Hapus Template">
          <p>Aksi Hapus → konfirmasi penghapusan.</p>
        </Step>
        <Note>
          <ul>
            <li>Template dipilih saat membuat lowongan di <strong>Job Posting → Tab Penilaian → Penilaian Interview</strong>.</li>
            <li>Template aktif sebaiknya tidak dihapus agar data penilaian tidak terganggu.</li>
          </ul>
        </Note>
      </>
    ),
  },

  "master-pertanyaan": {
    title: "Master Pertanyaan",
    content: (
      <>
        <p>Panduan mengelola pertanyaan default pada form lamaran saat membuat lowongan.</p>
        <Step n={1} title="Membuka Menu">
          <p>Buka <strong>Recruitment</strong> → klik <strong>Pengaturan</strong> → pilih <strong>Master Pertanyaan</strong>.</p>
          <DocImg src={img("recruitment/master-pertanyaan/image_1.png")} alt="Menu master pertanyaan" />
        </Step>
        <Step n={2} title="Menambahkan Pertanyaan">
          <p>Klik <strong>Tambah</strong>, ketik teks pertanyaan, lalu pilih tipe jawaban:</p>
          <ul>
            <li>Short Answer, Paragraph, Multiple Choice, Date Picker, Dropdown, Upload File</li>
          </ul>
          <p>Klik <strong>Simpan</strong>.</p>
          <DocImg src={img("recruitment/master-pertanyaan/image_2.png")} alt="Form tambah pertanyaan" />
        </Step>
        <Step n={3} title="Mengedit Pertanyaan">
          <p>Klik <strong>Edit</strong> pada baris pertanyaan → ubah teks/tipe → <strong>Simpan</strong>.</p>
          <DocImg src={img("recruitment/master-pertanyaan/image_3.png")} alt="Edit pertanyaan" />
        </Step>
        <Step n={4} title="Menghapus Pertanyaan">
          <p>Klik <strong>Hapus</strong> pada baris pertanyaan → konfirmasi.</p>
          <DocImg src={img("recruitment/master-pertanyaan/image_4.png")} alt="Hapus pertanyaan" />
        </Step>
        <Note>
          <p>Pertanyaan ini bersifat "default" per lowongan — admin bisa menambah atau menghapus pertanyaan di tiap lowongan tanpa mengubah master.</p>
        </Note>
      </>
    ),
  },

  "format-surat-penawaran": {
    title: "Format Surat Penawaran",
    content: (
      <>
        <p>Panduan mengelola <strong>template offer letter</strong> yang dikirim saat kandidat berstatus "Offered".</p>
        <Step n={1} title="Membuka Menu">
          <p>Buka <strong>Recruitment</strong> → klik <strong>Pengaturan</strong> → pilih <strong>Format Surat Penawaran</strong>.</p>
        </Step>
        <Step n={2} title="Menambah Template">
          <p>Klik <strong>Tambah</strong>, isi nama template, lalu tulis isi surat menggunakan variabel:</p>
          <Table
            headers={["Variabel", "Keterangan"]}
            rows={[
              ["<code>[nama]</code>", "Nama kandidat"],
              ["<code>[posisi]</code>", "Nama posisi"],
              ["<code>[perusahaan]</code>", "Nama perusahaan"],
              ["<code>[tanggal_surat]</code>", "Tanggal surat"],
              ["<code>[batas_konfirmasi]</code>", "Batas waktu konfirmasi"],
            ]}
          />
          <p>Klik <strong>Simpan</strong>.</p>
        </Step>
        <Step n={3} title="Preview">
          <p>Klik <strong>Preview</strong> untuk melihat render surat dengan contoh data nyata.</p>
        </Step>
        <Step n={4} title="Edit & Hapus">
          <ul>
            <li><strong>Edit</strong>: ubah nama/isi → Simpan</li>
            <li><strong>Hapus</strong>: klik Hapus → konfirmasi</li>
          </ul>
        </Step>
        <Note>
          <p>Variabel harus ditulis dengan tanda kurung siku; penulisan salah akan ditampilkan apa adanya.</p>
        </Note>
      </>
    ),
  },

  /* ── MEMBUAT LOWONGAN ── */
  "membuat-lowongan-baru": {
    title: "Membuat Lowongan Baru",
    content: (
      <>
        <p>Form pembuatan lowongan menggunakan struktur ber-tab: <strong>Formulir</strong>, <strong>Pertanyaan</strong>, dan <strong>Penilaian</strong>.</p>
        <Step n={1} title="Buka Form">
          <p>Navigasi ke menu <strong>Recruitment</strong> → klik <strong>Lowongan</strong>. Tab <strong>Formulir</strong> aktif secara default.</p>
        </Step>
        <Step n={2} title="Isi Formulir">
          <ul>
            <li>Atur <strong>Masa Berlaku</strong> (atau aktifkan "Tanggal selesai tak terbatas")</li>
            <li>Pilih <strong>Job Position</strong> dari Master Position → Requirement &amp; Deskripsi terisi otomatis</li>
            <li>Lengkapi: Nama Lowongan, Tipe Pekerjaan, Sistem Kerja, Jumlah Posisi, Pengalaman, Lokasi, Fasilitas, dan Informasi Gaji</li>
            <li>Aktifkan <strong>Tampilkan Gaji</strong> bila ingin ditampilkan di halaman karier</li>
          </ul>
        </Step>
        <Step n={3} title="Pertanyaan Lamaran">
          <p>Buka tab <strong>Pertanyaan</strong>. Pertanyaan dipilih dari <strong>Master Pertanyaan</strong>, bisa dihapus atau ditambah.</p>
        </Step>
        <Step n={4} title="Penilaian">
          <p>Buka tab <strong>Penilaian</strong>. Atur: Penilaian Interview, Video Loom, Level Tes Kognitif.</p>
        </Step>
        <Step n={5} title="Simpan Draft">
          <p>Klik <strong>Simpan Draft</strong> → status tersimpan sebagai draft. Draft tidak memicu proses auto-post.</p>
        </Step>
        <Step n={6} title="Publikasikan & Auto-Post">
          <p>Klik <strong>Publikasikan</strong> → modal <em>Auto Post ke Job Board</em> terbuka. Pilih platform: <strong>LinkedIn</strong> (Coming Soon) atau <strong>Glints</strong>. Modal Progress Auto-Post menampilkan status real-time. Bila tidak ingin auto-post: klik X → lowongan tetap aktif.</p>
        </Step>
        <Note>
          <ul>
            <li>Hanya <strong>Publikasikan</strong> yang memicu modal auto-post, bukan Simpan Draft.</li>
            <li>Setelah aktif, kandidat melamar via <strong>link apply</strong> di daftar lowongan.</li>
          </ul>
        </Note>
      </>
    ),
  },

  "pertanyaan-lamaran": {
    title: "Mengatur Pertanyaan Lamaran",
    content: (
      <>
        <p>Panduan mengatur pertanyaan pada form lamaran saat membuat lowongan.</p>
        <Step n={1} title="Buka Tab Pertanyaan">
          <p>Akses form pembuatan lowongan, lalu pilih tab <strong>Pertanyaan</strong>.</p>
        </Step>
        <Step n={2} title="Pertanyaan dari Master Pertanyaan">
          <p>Daftar pertanyaan default sudah tersedia. Pertanyaan tidak diperlukan bisa dihapus via ikon hapus — namun pertanyaan tetap tersimpan di <strong>Master Pertanyaan</strong> meski dihapus dari lowongan tersebut.</p>
        </Step>
        <Step n={3} title="Menambah Pertanyaan Baru">
          <p>Klik <strong>Tambah</strong>, tulis teks pertanyaan, lalu pilih tipe jawaban:</p>
          <Table
            headers={["Tipe", "Keterangan"]}
            rows={[
              ["Short Answer", "Jawaban singkat"],
              ["Paragraph", "Jawaban panjang"],
              ["Multiple Choice", "Pilihan ganda"],
              ["Date Picker", "Pemilih tanggal"],
              ["Dropdown", "Daftar pilihan"],
              ["Upload File", "Unggah berkas"],
            ]}
          />
        </Step>
        <Step n={4} title="Kewajiban Isi">
          <p>Gunakan toggle <strong>"Wajib diisi"</strong> untuk mewajibkan kandidat menjawab, atau matikan bila bersifat opsional.</p>
        </Step>
      </>
    ),
  },

  "template-asesmen": {
    title: "Template Asesmen Interview",
    content: (
      <>
        <p>Panduan memilih template penilaian interview pada tab <strong>Penilaian</strong> saat membuat lowongan.</p>
        <Step n={1} title="Buka Tab Penilaian">
          <p>Buka form pembuatan lowongan, lalu klik tab <strong>Penilaian</strong>.</p>
          <DocImg src={img("job-posting/template-asesmen-interview/image_1.png")} alt="Tab penilaian lowongan" />
        </Step>
        <Step n={2} title="Pilih Template Interview">
          <p>Daftar template dari <strong>Pengaturan → Penilaian Interview</strong> akan tampil. Klik kartu template untuk memilih (bisa lebih dari satu). Klik <strong>"Lihat pertanyaan"</strong> untuk melihat rincian pertanyaan dan skala rating.</p>
          <DocImg src={img("job-posting/template-asesmen-interview/image_2.png")} alt="Pilih template interview" />
        </Step>
        <Note>
          <p>Template terpilih digunakan saat wawancara di halaman <strong>Recruitment</strong>.</p>
        </Note>
      </>
    ),
  },

  "video-loom": {
    title: "Video Loom & Kriteria AI",
    content: (
      <>
        <p>Panduan mengatur pertanyaan video Loom dan kriteria evaluasi AI pada tab <strong>Penilaian</strong>.</p>
        <Step n={1} title="Buka Section Video Loom">
          <p>Buka form pembuatan lowongan → klik tab <strong>Penilaian</strong> → temukan section <strong>Penilaian Video Loom</strong> (hanya muncul bila fitur portofolio video diaktifkan perusahaan).</p>
        </Step>
        <Step n={2} title="Tambah Pertanyaan Video">
          <p>Klik <strong>Tambah Pertanyaan</strong>, lalu ketik pertanyaan yang harus dijawab kandidat via video Loom. Pertanyaan bisa ditambah lebih dari satu; gunakan ikon hapus untuk menghapus.</p>
        </Step>
        <Step n={3} title="Tambah Kriteria Evaluasi AI">
          <p>Klik <strong>Tambah Kriteria</strong>, masukkan kriteria penilaian seperti <em>"Komunikasi"</em>, <em>"Kepercayaan Diri"</em>, atau <em>"Kesesuaian Materi"</em>. AI menilai setiap kriteria dengan skala <strong>1–100</strong>.</p>
        </Step>
        <Note>
          <ul>
            <li>Kandidat merekam jawaban mereka melalui Loom saat melamar.</li>
            <li>Skor dari kriteria AI akan tampil di <strong>hasil screening</strong> kandidat.</li>
          </ul>
        </Note>
      </>
    ),
  },

  "level-kognitif": {
    title: "Level Tes Kognitif",
    content: (
      <>
        <p>Panduan menentukan level tes kognitif pada tab <strong>Penilaian</strong> saat membuat lowongan.</p>
        <Step n={1} title="Membuka Section Tes Kognitif">
          <p>Buka form pembuatan lowongan → klik tab <strong>Penilaian</strong> → temukan section <strong>Tes Kognitif</strong> (hanya muncul jika perusahaan mengaktifkan tes IQ).</p>
          <DocImg src={img("job-posting/level-tes-kognitif/image_1.png")} alt="Section tes kognitif" />
        </Step>
        <Step n={2} title="Memilih Level">
          <p>Buka dropdown <strong>Level Tes Kognitif</strong> → pilih level <strong>1–5</strong> sesuai tingkat kesulitan. Setiap level menampilkan info: durasi, jumlah soal, dan passing score. Pilih <strong>"Tidak Ada"</strong> jika tes tidak diperlukan.</p>
          <DocImg src={img("job-posting/level-tes-kognitif/image_2.png")} alt="Pilih level tes kognitif" />
        </Step>
        <Note>
          <ul>
            <li>Tes berupa <strong>50 soal pilihan ganda</strong>.</li>
            <li>Level menentukan tingkat kesulitan soal dan ambang kelulusan.</li>
          </ul>
        </Note>
      </>
    ),
  },

  /* ── WHATSAPP SERVICE ── */
  "hubungkan-wa": {
    title: "Menghubungkan WhatsApp",
    content: (
      <>
        <p>Panduan menghubungkan nomor WhatsApp perusahaan ke JobFit.</p>
        <Step n={1} title="Masuk ke WhatsApp Service">
          <p>Login ke JobFit → pilih menu <strong>WhatsApp Service</strong>.</p>
          <DocImg src={img("wa-service/menghubungkan-whatsapp/image_1.png")} alt="Menu WhatsApp Service" />
        </Step>
        <Step n={2} title="Pindai QR Code">
          <p>Pastikan sesi belum aktif. Scan kode QR via aplikasi WhatsApp di ponsel.</p>
          <DocImg src={img("wa-service/menghubungkan-whatsapp/image_2.png")} alt="QR code WhatsApp" />
        </Step>
        <Step n={3} title="Tunggu Konfirmasi Koneksi">
          <p>Status berubah menjadi <strong>terhubung</strong>.</p>
          <DocImg src={img("wa-service/menghubungkan-whatsapp/image_3.png")} alt="Status terhubung" />
        </Step>
        <Step n={4} title="Kelola Sesi Bermasalah">
          <p>Pilih <strong>Restart</strong> jika pesan gagal terkirim. Pilih <strong>Disconnect</strong> untuk menghentikan nomor. Pindai ulang QR setelahnya.</p>
        </Step>
        <Note>
          <ul>
            <li>Gunakan nomor khusus perusahaan, bukan nomor pribadi.</li>
            <li>Jika QR tidak tampil → gunakan <strong>Disconnect</strong> atau <strong>Restart</strong>, lalu coba lagi.</li>
          </ul>
        </Note>
      </>
    ),
  },

  "template-pesan-wa": {
    title: "Mengatur Template Pesan",
    content: (
      <>
        <p>Panduan mengatur template pesan WhatsApp yang dikirim otomatis ke kandidat.</p>
        <Step n={1} title="Buka Template Pesan">
          <p>Buka menu <strong>WhatsApp Service</strong> → bagian <strong>Template Pesan</strong>.</p>
          <DocImg src={img("wa-service/mengatur-template-pesan/image_1.png")} alt="Bagian template pesan" />
        </Step>
        <Step n={2} title="Pilih Tahap Kandidat">
          <p>Pilih tahap kandidat yang ingin diatur:</p>
          <ul>
            <li>Lolos Seleksi Administrasi (Loom)</li>
            <li>Tes Papikostik + Kognitif</li>
            <li>Undangan Interview</li>
            <li>Diterima (Hired)</li>
            <li>Ditolak</li>
            <li>Kirim Link Tes (Koresponden)</li>
          </ul>
          <DocImg src={img("wa-service/mengatur-template-pesan/image_2.png")} alt="Pilih tahap kandidat" />
        </Step>
        <Step n={3} title="Edit Isi Pesan">
          <p>Edit isi pesan dan pastikan tautan tes valid.</p>
          <DocImg src={img("wa-service/mengatur-template-pesan/image_3.png")} alt="Edit isi pesan" />
        </Step>
        <Step n={4} title="Simpan">
          <p>Klik <strong>Simpan</strong> setelah selesai.</p>
          <DocImg src={img("wa-service/mengatur-template-pesan/image_4.png")} alt="Tombol simpan template" />
        </Step>
        <Note>
          <p>Pesan dikirim secara otomatis sesuai tahap kandidat, dan seluruh template dapat dimodifikasi melalui bagian <strong>Template Pesan</strong>.</p>
        </Note>
      </>
    ),
  },

  /* ── PENGATURAN ── */
  "profil-perusahaan": {
    title: "Profil Perusahaan",
    content: (
      <>
        <p>Panduan mengatur informasi dan logo perusahaan di JobFit.</p>
        <Step n={1} title="Buka Pengaturan">
          <p>Masuk ke JobFit, pilih menu <strong>Pengaturan</strong>.</p>
          <DocImg src={img("settings/profil-perusahaan/image_1.png")} alt="Menu pengaturan" />
        </Step>
        <Step n={2} title="Pilih Tab Profil Perusahaan">
          <p>Pilih tab <strong>"Profil Perusahaan"</strong> di halaman Pengaturan.</p>
          <DocImg src={img("settings/profil-perusahaan/image_2.png")} alt="Tab profil perusahaan" />
        </Step>
        <Step n={3} title="Perbarui Info & Logo">
          <p>Ubah data perusahaan dan unggah logo.</p>
          <DocImg src={img("settings/profil-perusahaan/image_3.png")} alt="Form profil perusahaan" />
        </Step>
        <Step n={4} title="Atur Kuota Koresponden">
          <p>Isi nilai kuota sebagai batas jumlah kandidat yang dapat dikelola.</p>
          <DocImg src={img("settings/profil-perusahaan/image_4.png")} alt="Kuota koresponden" />
        </Step>
        <Step n={5} title="Simpan">
          <p>Klik tombol <strong>Simpan</strong>.</p>
        </Step>
        <Note>
          <ul>
            <li>Logo tampil di halaman publik karier.</li>
            <li>Jika kuota penuh, hubungi admin untuk peningkatan.</li>
          </ul>
        </Note>
      </>
    ),
  },

  "daftar-admin": {
    title: "Daftar Admin",
    content: (
      <>
        <p>Panduan mengelola akun admin JobFit perusahaan Anda.</p>
        <Step n={1} title="Membuka Tab">
          <p>Buka menu <strong>Pengaturan</strong> → pilih tab <strong>Daftar Admin</strong>.</p>
          <DocImg src={img("settings/daftar-admin/image_1.png")} alt="Tab daftar admin" />
        </Step>
        <Step n={2} title="Menambahkan Admin">
          <p>Klik tombol tambah, lalu isi data admin baru.</p>
          <DocImg src={img("settings/daftar-admin/image_2.png")} alt="Form tambah admin" />
        </Step>
        <Step n={3} title="Edit & Hapus">
          <p>Gunakan aksi <strong>edit</strong> untuk mengubah data, atau aksi <strong>hapus</strong> untuk menghapus akun.</p>
          <DocImg src={img("settings/daftar-admin/image_3.png")} alt="Aksi edit dan hapus admin" />
        </Step>
        <Step n={4} title="Memilih Peran">
          <p>Khusus superadmin: pilih peran yang sesuai. Peran menentukan akses akun pada menu dan tab tertentu.</p>
          <DocImg src={img("settings/daftar-admin/image_4.png")} alt="Pilih peran admin" />
        </Step>
        <Note>
          <p>Hanya <strong>superadmin</strong> yang berwenang memilih peran akun.</p>
        </Note>
      </>
    ),
  },

  "auto-posting-job": {
    title: "Auto Posting Job",
    content: (
      <>
        <p>Panduan mengkonfigurasi kredensial untuk auto-posting lowongan ke job board.</p>
        <Step n={1} title="Buka Tab">
          <p>Navigasi ke menu <strong>Pengaturan</strong>, lalu pilih tab <strong>"Auto Posting Job"</strong>.</p>
        </Step>
        <Step n={2} title="Kredensial LinkedIn">
          <p>Isi dua kolom:</p>
          <ul>
            <li>Cookie <code>li_at</code></li>
            <li>Company ID perusahaan di LinkedIn</li>
          </ul>
        </Step>
        <Step n={3} title="Kredensial Glints">
          <p>Masukkan email dan password akun Glints.</p>
        </Step>
        <Step n={4} title="Aktifkan Layanan">
          <p>Gunakan toggle <strong>enable</strong> untuk mengaktifkan atau menonaktifkan auto posting.</p>
        </Step>
        <Step n={5} title="Simpan">
          <p>Klik tombol <strong>Simpan</strong> untuk menyimpan seluruh konfigurasi.</p>
        </Step>
        <Note>
          <ul>
            <li>Cookie <code>li_at</code> dapat kedaluwarsa; perbarui jika posting gagal.</li>
            <li>Simpan kredensial sebelum mengaktifkan layanan agar posting berhasil.</li>
            <li>Fitur LinkedIn masih berstatus <em>Coming Soon</em>.</li>
          </ul>
        </Note>
      </>
    ),
  },

  /* ── TALENT ── */
  "memahami-talent": {
    title: "Memahami Talent",
    content: (
      <>
        <p>Halaman <strong>Talent</strong> berfungsi sebagai pusat data kandidat seluruh perusahaan, berbeda dari tab kandidat per lowongan di Recruitment.</p>
        <Step n={1} title="Membuka Menu Talent">
          <p>Login ke JobFit, lalu klik menu <strong>Talent</strong> di navigasi kiri.</p>
          <DocImg src={img("talent/memahami-talent/image_1.png")} alt="Menu talent" />
        </Step>
        <Step n={2} title="Pencarian & Filter">
          <p>Cari kandidat berdasarkan nama via kotak pencarian. Filter berdasarkan <strong>jabatan</strong> atau gunakan <strong>advanced filter</strong> untuk kriteria lebih lengkap.</p>
          <DocImg src={img("talent/memahami-talent/image_2.png")} alt="Pencarian dan filter talent" />
        </Step>
        <Step n={3} title="Membaca Tabel Kandidat">
          <p>Tabel menampilkan daftar kandidat terdata. Gunakan <strong>pagination</strong> untuk navigasi antar halaman. Atur kolom yang ingin ditampilkan.</p>
          <DocImg src={img("talent/memahami-talent/image_3.png")} alt="Tabel daftar kandidat" />
        </Step>
        <Step n={4} title="Aksi per Baris Kandidat">
          <Table
            headers={["Aksi", "Fungsi"]}
            rows={[
              ["<strong>Kirim WA</strong>", "Pesan WhatsApp ke kandidat"],
              ["<strong>Edit</strong>", "Ubah data kandidat"],
              ["<strong>Hapus</strong>", "Hapus dengan konfirmasi"],
              ["<strong>Form Lamaran</strong>", "Lihat lamaran kandidat"],
              ["<strong>Position Fit</strong>", "Cek kecocokan dengan profil posisi"],
            ]}
          />
          <DocImg src={img("talent/memahami-talent/image_4.png")} alt="Aksi per baris kandidat" />
        </Step>
        <Note>
          <p>Data kandidat yang sama dapat muncul di <strong>Talent</strong> maupun di <strong>Recruitment</strong>, karena keduanya merupakan tampilan berbeda dari sumber data yang sama.</p>
        </Note>
      </>
    ),
  },

  "menambah-kandidat": {
    title: "Menambah Kandidat",
    content: (
      <>
        <p>Panduan menambah kandidat baru secara manual ke dalam database Talent.</p>
        <Step n={1} title="Buka Form Tambah">
          <p>Navigasi ke menu <strong>Talent</strong> di sidebar kiri → klik tombol <strong>"Tambah"</strong> pada toolbar. Dialog form akan muncul.</p>
          <DocImg src={img("talent/menambah-kandidat/image_1.png")} alt="Tombol tambah kandidat" />
        </Step>
        <Step n={2} title="Isi Data Kandidat">
          <p>Lengkapi semua field yang tersedia (nama, kontak, dll.). Verifikasi setiap kolom sudah benar.</p>
          <DocImg src={img("talent/menambah-kandidat/image_2.png")} alt="Form data kandidat" />
        </Step>
        <Step n={3} title="Simpan">
          <p>Klik <strong>"Simpan"</strong> untuk menyimpan data. Kandidat langsung tampil di daftar talent.</p>
          <DocImg src={img("talent/menambah-kandidat/image_3.png")} alt="Konfirmasi simpan kandidat" />
        </Step>
        <Note>
          <p>Untuk penambahan massal, gunakan fitur <strong>Import</strong> — jauh lebih efisien daripada menambahkan satu per satu secara manual.</p>
        </Note>
      </>
    ),
  },

  "import-export": {
    title: "Import & Export Kandidat",
    content: (
      <>
        <p>Panduan mengimpor kandidat secara massal dan mengekspor data ke Excel.</p>
        <Step n={1} title="Mengimpor Kandidat">
          <p>Buka menu <strong>Talent</strong> di navigasi kiri → klik tombol <strong>Import</strong> pada toolbar → pilih file format <strong>XLSX</strong> atau <strong>Loom</strong> → tunggu proses selesai.</p>
          <DocImg src={img("talent/import-export-kandidat/image_1.png")} alt="Tombol import kandidat" />
        </Step>
        <Step n={2} title="Meninjau Hasil Import">
          <p>Setelah selesai, dialog konfirmasi muncul. Periksa jumlah data berhasil vs gagal, lalu perbaiki dan ulangi import jika diperlukan.</p>
        </Step>
        <Step n={3} title="Mengekspor Data">
          <p>Klik <strong>Export Excel</strong> di halaman Talent. File Excel otomatis terunduh untuk arsip/pengolahan data.</p>
          <DocImg src={img("talent/import-export-kandidat/image_3.png")} alt="Menu import dan export" />
        </Step>
        <Note>
          <ul>
            <li>Pastikan format file <strong>XLSX atau Loom</strong> sebelum import.</li>
            <li>Periksa hasil konfirmasi agar tidak ada data terlewat.</li>
          </ul>
        </Note>
      </>
    ),
  },

  "kirim-wa-talent": {
    title: "Mengirim WhatsApp ke Talent",
    content: (
      <>
        <p>Panduan mengirim pesan WhatsApp ke kandidat langsung dari halaman Talent.</p>
        <Step n={1} title="Pilih Kandidat">
          <p>Buka menu <strong>Talent</strong> di navigasi kiri → cari kandidat, lalu gunakan aksi <strong>"kirim WA"</strong> pada baris kandidat.</p>
          <DocImg src={img("talent/mengirim-whatsapp/image_1.png")} alt="Aksi kirim WA dari talent" />
        </Step>
        <Step n={2} title="Kirim Pesan">
          <p>Konfirmasi pengiriman, lalu tunggu sistem memproses.</p>
          <DocImg src={img("talent/mengirim-whatsapp/image_2.png")} alt="Konfirmasi kirim pesan" />
        </Step>
        <Step n={3} title="Pastikan Sesi Terhubung">
          <p>Bila gagal, periksa status di menu <strong>WhatsApp Service</strong>. Jika nomor belum tersambung, lakukan scan QR ulang.</p>
          <DocImg src={img("talent/mengirim-whatsapp/image_3.png")} alt="Cek status WhatsApp Service" />
        </Step>
        <Note>
          <ul>
            <li>Pesan menggunakan template otomatis sesuai tahap kandidat.</li>
            <li>Sesi WhatsApp yang tidak terhubung adalah penyebab paling umum gagalnya pengiriman pesan.</li>
          </ul>
        </Note>
      </>
    ),
  },

  "ai-score": {
    title: "AI Score & Position Fit",
    content: (
      <>
        <p>Panduan melihat skor AI dan kecocokan posisi kandidat di menu Talent.</p>
        <Step n={1} title="Membuka AI Score">
          <p>Buka menu <strong>Talent</strong> → cari kandidat → klik aksi <strong>AI Score</strong> pada baris kandidat.</p>
          <DocImg src={img("talent/ai-score-position-fit/image_1.png")} alt="Aksi AI Score" />
        </Step>
        <Step n={2} title="Membaca Breakdown Skor">
          <p>Modal menampilkan tiga aspek penilaian: Skor <strong>CV</strong>, Skor <strong>Kognitif</strong>, Skor <strong>Perilaku</strong>.</p>
          <DocImg src={img("talent/ai-score-position-fit/image_2.png")} alt="Breakdown skor AI" />
        </Step>
        <Step n={3} title="Position Fit">
          <p>Klik aksi <strong>Position Fit</strong> pada baris kandidat. Menampilkan kecocokan kandidat terhadap semua profil Position.</p>
          <DocImg src={img("talent/ai-score-position-fit/image_3.png")} alt="Position fit kandidat" />
        </Step>
        <Step n={4} title="Unduh PDF">
          <p>Klik aksi <strong>PDF</strong> pada baris kandidat untuk mengunduh dokumen kandidat.</p>
          <DocImg src={img("talent/ai-score-position-fit/image_4.png")} alt="Unduh PDF kandidat" />
        </Step>
        <Note>
          <p>Skor bersifat dinamis; hasil bisa berubah setelah screening dijalankan ulang.</p>
        </Note>
      </>
    ),
  },
};

/* ─────────────────────────────────────────────
   NAVIGATION STRUCTURE
───────────────────────────────────────────── */
interface NavPage { id: string; title: string }
interface NavSection { id: string; title: string; pages: NavPage[] }

const NAV: NavSection[] = [
  {
    id: "welcome",
    title: "Selamat Datang",
    pages: [{ id: "home", title: "Selamat Datang di JobFit" }],
  },
  {
    id: "memulai",
    title: "Memulai",
    pages: [
      { id: "login", title: "Login" },
      { id: "lupa-password", title: "Lupa / Reset Kata Sandi" },
      { id: "dasbor", title: "Menjelajahi Dasbor" },
    ],
  },
  {
    id: "position",
    title: "Position",
    pages: [{ id: "mengelola-position", title: "Mengelola Position" }],
  },
  {
    id: "recruitment",
    title: "Recruitment",
    pages: [
      { id: "memahami-pipeline", title: "Memahami Pipeline Kandidat" },
      { id: "mengelola-lowongan", title: "Mengelola Lowongan" },
      { id: "menghapus-lowongan", title: "Menghapus Lowongan" },
      { id: "mengubah-status", title: "Mengubah Status Kandidat" },
      { id: "hasil-screening", title: "Memeriksa Hasil Screening" },
      { id: "wawancara-penilaian", title: "Wawancara & Penilaian" },
      { id: "auto-post", title: "Auto-Post ke Job Board" },
      { id: "widget-lowongan", title: "Widget Laman Lowongan" },
      { id: "fasilitas", title: "Fasilitas" },
      { id: "penilaian-interview", title: "Penilaian Interview" },
      { id: "master-pertanyaan", title: "Master Pertanyaan" },
      { id: "format-surat-penawaran", title: "Format Surat Penawaran" },
    ],
  },
  {
    id: "membuat-lowongan",
    title: "Membuat Lowongan",
    pages: [
      { id: "membuat-lowongan-baru", title: "Membuat Lowongan Baru" },
      { id: "pertanyaan-lamaran", title: "Mengatur Pertanyaan Lamaran" },
      { id: "template-asesmen", title: "Template Asesmen Interview" },
      { id: "video-loom", title: "Video Loom & Kriteria AI" },
      { id: "level-kognitif", title: "Level Tes Kognitif" },
    ],
  },
  {
    id: "wa-service",
    title: "WhatsApp Service",
    pages: [
      { id: "hubungkan-wa", title: "Menghubungkan WhatsApp" },
      { id: "template-pesan-wa", title: "Mengatur Template Pesan" },
    ],
  },
  {
    id: "pengaturan",
    title: "Pengaturan",
    pages: [
      { id: "profil-perusahaan", title: "Profil Perusahaan" },
      { id: "daftar-admin", title: "Daftar Admin" },
      { id: "auto-posting-job", title: "Auto Posting Job" },
    ],
  },
  {
    id: "talent",
    title: "Talent",
    pages: [
      { id: "memahami-talent", title: "Memahami Talent" },
      { id: "menambah-kandidat", title: "Menambah Kandidat" },
      { id: "import-export", title: "Import & Export Kandidat" },
      { id: "kirim-wa-talent", title: "Mengirim WhatsApp ke Talent" },
      { id: "ai-score", title: "AI Score & Position Fit" },
    ],
  },
];

const ALL_PAGES: NavPage[] = NAV.flatMap((s) => s.pages);

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function PanduanDocs() {
  const [currentId, setCurrentId] = useState("home");
  const [openSections, setOpenSections] = useState<Set<string>>(
    () => new Set<string>()
  );
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const currentIndex = ALL_PAGES.findIndex((p) => p.id === currentId);
  const prevPage = currentIndex > 0 ? ALL_PAGES[currentIndex - 1] : null;
  const nextPage = currentIndex < ALL_PAGES.length - 1 ? ALL_PAGES[currentIndex + 1] : null;
  const page = PAGES[currentId];

  const navigate = useCallback((id: string) => {
    setCurrentId(id);
    setSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
    /* accordion: open only the section that contains this page */
    const section = NAV.find((s) => s.pages.some((p) => p.id === id));
    if (section) setOpenSections(new Set([section.id]));
  }, []);

  const toggleSection = (id: string) => {
    setOpenSections((prev) => {
      if (prev.has(id)) return new Set<string>();
      return new Set([id]);
    });
  };

  /* close sidebar on escape */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setSidebarOpen(false); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <div className={styles.docsRoot}>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div className={styles.overlay} onClick={() => setSidebarOpen(false)} aria-hidden />
      )}

      {/* Mobile header */}
      <div className={styles.mobileBar}>
        <button className={styles.menuBtn} onClick={() => setSidebarOpen(true)} aria-label="Buka navigasi">
          <span /><span /><span />
        </button>
        <span className={styles.mobileTitle}>{page?.title ?? ""}</span>
      </div>

      <div className={styles.docsInner}>
      {/* SIDEBAR */}
      <aside className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ""}`}>
        <div className={styles.sidebarInner}>
          <nav className={styles.nav} aria-label="Navigasi dokumentasi">
            <div className={styles.navContainer}>
            {NAV.map((section) => {
              const open = openSections.has(section.id);
              const hasSingle = section.pages.length === 1;
              if (hasSingle) {
                const p = section.pages[0];
                return (
                  <button
                    key={p.id}
                    className={`${styles.navItem} ${currentId === p.id ? styles.navActive : ""}`}
                    onClick={() => navigate(p.id)}
                  >
                    {section.title}
                  </button>
                );
              }
              return (
                <div key={section.id} className={styles.navGroup}>
                  <button
                    className={`${styles.navGroupTitle} ${open ? styles.navGroupOpen : ""}`}
                    onClick={() => toggleSection(section.id)}
                    aria-expanded={open}
                  >
                    <span>{section.title}</span>
                    {open ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                  </button>
                  {open && (
                    <div className={styles.navChildren}>
                      {section.pages.map((p) => (
                        <button
                          key={p.id}
                          className={`${styles.navItem} ${styles.navChild} ${currentId === p.id ? styles.navActive : ""}`}
                          onClick={() => navigate(p.id)}
                        >
                          {p.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            </div>
          </nav>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className={styles.main}>
        <article className={styles.article}>
          <h1 className={styles.pageTitle}>{page?.title}</h1>
          <div className={styles.pageContent}>{page?.content}</div>

          {/* PREV / NEXT */}
          <nav className={styles.prevNext} aria-label="Navigasi halaman">
            <div className={styles.prevNextInner}>
              {prevPage ? (
                <button className={`${styles.navBtn} ${styles.navBtnPrev}`} onClick={() => navigate(prevPage.id)}>
                  <ChevronLeft size={18} />
                  <span>
                    <small>Sebelumnya</small>
                    {prevPage.title}
                  </span>
                </button>
              ) : <div />}
              {nextPage ? (
                <button className={`${styles.navBtn} ${styles.navBtnNext}`} onClick={() => navigate(nextPage.id)}>
                  <span>
                    <small>Selanjutnya</small>
                    {nextPage.title}
                  </span>
                  <ChevronRight size={18} />
                </button>
              ) : <div />}
            </div>
          </nav>
        </article>
      </main>
      </div>
    </div>
  );
}
