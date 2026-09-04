"use client";

import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import styles from "./PanduanPipeline.module.css";

const SOURCE_URL =
  "https://jobfit-doc.vercel.app/help/recruitment/memahami-pipeline-kandidat.html";

const GUIDE_URLS = {
  home: "https://jobfit-doc.vercel.app/help/",
  position: "https://jobfit-doc.vercel.app/help/position/mengelola-position.html",
  pipeline: SOURCE_URL,
  vacancies: "https://jobfit-doc.vercel.app/help/recruitment/mengelola-lowongan.html",
  deleteVacancy:
    "https://jobfit-doc.vercel.app/help/recruitment/menghapus-lowongan.html",
  candidateStatus:
    "https://jobfit-doc.vercel.app/help/recruitment/mengubah-status-kandidat.html",
  screening:
    "https://jobfit-doc.vercel.app/help/recruitment/memeriksa-hasil-screening.html",
  interview:
    "https://jobfit-doc.vercel.app/help/recruitment/wawancara-penilaian.html",
  autoPost:
    "https://jobfit-doc.vercel.app/help/recruitment/auto-post-job-board.html",
} as const;

const STEPS = [
  {
    title: "Step 1: Membuka Menu Recruitment",
    image: "image_1.png",
    items: [
      <>Buka menu <strong>Recruitment</strong> di navigasi kiri aplikasi.</>,
      <>Halaman <strong>Recruitment</strong> akan tampil sebagai inti pengelolaan kandidat. Di sini Anda memantau setiap lowongan beserta kandidat yang melamarnya, dari awal lamaran sampai diterima atau ditolak.</>,
    ],
  },
  {
    title: "Step 2: Memilih Lowongan",
    image: "image_2.png",
    items: [
      <>Di panel kiri halaman Recruitment, lihat daftar <strong>lowongan</strong> yang tersedia.</>,
      <>Pilih salah satu lowongan untuk melihat kandidat yang melamarnya.</>,
      <>Jika daftar lowongan panjang, gunakan <strong>pencarian</strong> pada panel kiri untuk mempersempit daftar.</>,
    ],
  },
  {
    title: "Step 3: Membaca Tab Status Pipeline",
    image: "image_3.png",
    items: [
      <>Setelah memilih lowongan, pipeline kandidat tampil sebagai deretan <strong>tab status</strong>.</>,
      <>Terdapat 8 tab status: <strong>Waiting</strong>, <strong>Shortlisted</strong>, <strong>Pre-interviewed</strong>, <strong>Interkeyed</strong>, <strong>Offered</strong>, <strong>Hired</strong>, <strong>Rejected</strong>, dan <strong>Bookmark</strong>.</>,
      <>Setiap tab menampilkan jumlah kandidat (badge) pada tahap tersebut.</>,
      <>Klik sebuah tab untuk menampilkan daftar kandidat pada tahap tersebut.</>,
    ],
  },
  {
    title: "Step 4: Memahami Arti Setiap Status",
    image: "image_4.png",
    items: [],
  },
] as const;

const STATUSES = [
  ["Waiting", "Kandidat menunggu review"],
  ["Shortlisted", "Kandidat terpilih untuk lanjut ke tahap berikutnya"],
  ["Pre-interviewed", "Kandidat pada tahap sebelum wawancara"],
  ["Interkeyed", "Kandidat yang sudah diwawancarai"],
  ["Offered", "Kandidat yang sudah ditawari pekerjaan"],
  ["Hired", "Kandidat yang diterima"],
  ["Rejected", "Kandidat yang ditolak"],
  ["Bookmark", "Kandidat yang disimpan untuk ditinjau nanti"],
] as const;

const imageUrl = (name: string) =>
  `https://jobfit-doc.vercel.app/help/assets/recruitment/memahami-pipeline-kandidat/${name}`;

export default function PanduanPipeline() {
  const navigateToGuide = (url: string) => {
    window.location.assign(url);
  };

  return (
    <AnimatedSection as="section" className={styles.section}>
      <div className={styles.docsHeader}>
        <div className={styles.brand}>
          <Image src="/assets/logo.png" alt="JobFit" width={112} height={30} />
          <span>Dokumentasi</span>
        </div>
        <div className={styles.search} role="search">
          <span aria-hidden="true">⌕</span>
          <input type="search" placeholder="Search..." aria-label="Search dokumentasi" />
        </div>
      </div>

      <div className={styles.docsLayout}>
        <aside className={styles.sidebar} aria-label="Daftar dokumentasi">
          <div className={styles.sidebarHome}>⌂ <span>Selamat Datang di<br />JobFit</span></div>
          <button type="button" className={styles.sidebarHome} onClick={() => navigateToGuide(GUIDE_URLS.home)}>
            ⌂ <span>Selamat Datang di<br />JobFit</span>
          </button>
          <h2>POSITION</h2>
          <button type="button" className={styles.sidebarItem} onClick={() => navigateToGuide(GUIDE_URLS.position)}>♟ <span>Mengelola Position</span></button>
          <h2>RECRUITMENT</h2>
          <button type="button" className={`${styles.sidebarItem} ${styles.sidebarActive}`} aria-current="page" onClick={() => navigateToGuide(GUIDE_URLS.pipeline)}>
            ⎇ <span>Memahami Pipeline<br />Kandidat</span>
          </button>
          <button type="button" className={styles.sidebarItem} onClick={() => navigateToGuide(GUIDE_URLS.vacancies)}>▣ <span>Mengelola Lowongan</span></button>
          <button type="button" className={styles.sidebarItem} onClick={() => navigateToGuide(GUIDE_URLS.deleteVacancy)}>▥ <span>Menghapus Lowongan</span></button>
          <button type="button" className={styles.sidebarItem} onClick={() => navigateToGuide(GUIDE_URLS.candidateStatus)}>♟ <span>Mengubah Status<br />Kandidat</span></button>
          <button type="button" className={styles.sidebarItem} onClick={() => navigateToGuide(GUIDE_URLS.screening)}>▣ <span>Memeriksa Hasil<br />Screening</span></button>
          <button type="button" className={styles.sidebarItem} onClick={() => navigateToGuide(GUIDE_URLS.interview)}>☁ <span>Wawancara &amp; Penilaian</span></button>
          <button type="button" className={styles.sidebarItem} onClick={() => navigateToGuide(GUIDE_URLS.autoPost)}>⚑ <span>Auto-Post ke Job Board</span></button>
        </aside>

        <article className={styles.article}>
          <header className={styles.articleHeader}>
            <h1><span className={styles.titleIcon} aria-hidden="true">⎇</span> Memahami Pipeline Kandidat</h1>
            <p>
              Dokumen ini menjelaskan langkah-langkah untuk memahami pipeline
              kandidat pada halaman <strong>Recruitment</strong>, mulai dari
              membuka menu Recruitment hingga mengenal arti setiap status
              kandidat.
            </p>
            <a href={SOURCE_URL} target="_blank" rel="noreferrer" className={styles.sourceLink}>
              Buka panduan asli
            </a>
          </header>

          {STEPS.map((step) => (
            <section key={step.title} className={styles.step} data-guide-section>
              <h2>{step.title}</h2>
              <Image
                src={imageUrl(step.image)}
                alt={`Tampilan ${step.title.toLowerCase()}`}
                className={styles.stepImage}
                width={1600}
                height={900}
              />
              {step.items.length > 0 && (
                <ol>
                  {step.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ol>
              )}
              {step.title.startsWith("Step 4") && (
                <>
                  <p>Setiap status mewakili satu tahap dalam pipeline:</p>
                  <div className={styles.tableWrap}>
                    <table>
                      <thead>
                        <tr>
                          <th>Status</th>
                          <th>Arti</th>
                        </tr>
                      </thead>
                      <tbody>
                        {STATUSES.map(([status, meaning]) => (
                          <tr key={status}>
                            <td><strong>{status}</strong></td>
                            <td>{meaning}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              )}
            </section>
          ))}

          <section className={styles.notes} data-guide-section>
            <h2>Catatan</h2>
            <ul>
              <li>Status kandidat bisa diubah kapan saja sesuai kebutuhan. Pelajari cara mengubahnya di halaman <strong>Mengubah Status Kandidat</strong>.</li>
              <li>Tab <strong>Bookmark</strong> dipakai untuk menyimpan kandidat sementara tanpa mengubah tahap sebenarnya.</li>
              <li>Minimal satu <strong>lowongan aktif</strong> perlu dibuat sebelum kandidat bisa masuk pipeline.</li>
            </ul>
          </section>

          <div className={styles.pager} aria-label="Navigasi panduan">
            <button type="button" onClick={() => navigateToGuide(GUIDE_URLS.position)}>
              <span>Previous</span>
              Mengelola Position
            </button>
            <button type="button" onClick={() => navigateToGuide(GUIDE_URLS.vacancies)}>
              <span>Next</span>
              Mengelola Lowongan
            </button>
          </div>
        </article>
      </div>
    </AnimatedSection>
  );
}