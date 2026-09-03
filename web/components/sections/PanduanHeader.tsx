import AnimatedSection from "@/components/AnimatedSection";
import styles from "./PanduanHeader.module.css";

/**
 * PanduanHeader — Inner Page header, TEKS MURNI (tanpa heroImage), sesuai
 * PLAN-panduan.md Section 4 Section 1. Judul & paragraf intro dikutip
 * verbatim dari dokumentasi "Wawancara & Penilaian".
 */
export default function PanduanHeader() {
  return (
    <AnimatedSection as="section" className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <h1 className={`stagger-item ${styles.headline}`}>
          Wawancara &amp; Penilaian
        </h1>
        <p className={`stagger-item ${styles.subheadline}`}>
          Dokumen ini menjelaskan langkah-langkah untuk melakukan wawancara
          dan penilaian kandidat di Recruitment, mulai dari membuka chat
          wawancara hingga membuat penawaran (offer).
        </p>
      </div>
    </AnimatedSection>
  );
}
