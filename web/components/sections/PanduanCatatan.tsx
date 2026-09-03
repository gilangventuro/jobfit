import AnimatedSection from "@/components/AnimatedSection";
import styles from "./PanduanCatatan.module.css";

const NOTES = [
  {
    title: "Status Kandidat Setelah Offer",
    desc: "Setelah kandidat menyetujui penawaran, pindahkan status kandidat ke Hired.",
  },
  {
    title: "Definisi Penilaian Wawancara",
    desc: "Penilaian Wawancara adalah form yang diisi pewawancara setelah sesi wawancara.",
  },
  {
    title: "Definisi Offer Letter",
    desc: "Offer letter adalah dokumen penawaran kerja yang dikirim ke kandidat terpilih.",
  },
];

/**
 * PanduanCatatan — 3 poin "Catatan" (PLAN-panduan.md Section 4 Section 3),
 * disalin verbatim dari dokumentasi sumber.
 */
export default function PanduanCatatan() {
  return (
    <AnimatedSection as="section" className={styles.section}>
      <div className="container">
        <h2 className={`stagger-item ${styles.title}`}>Catatan</h2>
        <div className={styles.grid}>
          {NOTES.map((note) => (
            <div key={note.title} className={`stagger-item ${styles.card}`}>
              <h3 className={styles.cardTitle}>{note.title}</h3>
              <p className={styles.cardDesc}>{note.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
