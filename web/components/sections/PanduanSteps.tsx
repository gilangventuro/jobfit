import AnimatedSection from "@/components/AnimatedSection";
import styles from "./PanduanSteps.module.css";

const STEPS = [
  {
    title: "Step 1: Membuka Chat Wawancara",
    items: [
      "Buka menu Recruitment dan pilih lowongan yang diinginkan.",
      "Klik kandidat yang akan diwawancarai untuk membuka panel detail.",
      "Buka fitur chat interview pada kandidat untuk memulai sesi wawancara.",
    ],
  },
  {
    title: "Step 2: Melakukan Wawancara",
    items: [
      "Gunakan pertanyaan yang tersedia di chat untuk memandu sesi wawancara.",
      "Arahkan percakapan untuk menggali kompetensi kandidat sesuai kebutuhan posisi.",
      "Catat informasi penting selama sesi berlangsung.",
    ],
  },
  {
    title: "Step 3: Mengisi Penilaian Wawancara",
    items: [
      "Setelah sesi wawancara selesai, buka form penilaian Interview Penilaian.",
      "Isi penilaian berdasarkan hasil wawancara kandidat.",
      "Simpan penilaian; hasilnya tercatat di detail kandidat dan dipakai untuk pengambilan keputusan.",
    ],
  },
  {
    title: "Step 4: Membuat Penawaran (Offer)",
    items: [
      "Untuk kandidat yang cocok, gunakan template offer letter.",
      "Isi penawaran sesuai ketentuan perusahaan, lalu kirim ke kandidat.",
      "Status kandidat berubah menjadi Offered.",
    ],
  },
];

/**
 * PanduanSteps — 4 step berurutan (PLAN-panduan.md Section 4 Section 2),
 * disalin verbatim dari dokumentasi "Wawancara & Penilaian". Ditampilkan
 * sebagai kartu bernomor berurutan vertikal, bukan grid acak, karena
 * merepresentasikan alur kerja sekuensial.
 */
export default function PanduanSteps() {
  return (
    <AnimatedSection as="section" className={styles.section}>
      <div className="container">
        <h2 className={`stagger-item ${styles.title}`}>
          Langkah-Langkah Panduan
        </h2>

        <ol className={styles.list}>
          {STEPS.map((step, index) => (
            <li key={step.title} className={`stagger-item ${styles.card}`}>
              <span className={styles.badge} aria-hidden="true">
                {index + 1}
              </span>
              <div>
                <h3 className={styles.cardTitle}>{step.title}</h3>
                <ol className={styles.subList}>
                  {step.items.map((item) => (
                    <li key={item} className={styles.subItem}>
                      {item}
                    </li>
                  ))}
                </ol>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </AnimatedSection>
  );
}
