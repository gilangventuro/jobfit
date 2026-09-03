import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import styles from "./ProdukHero.module.css";

/**
 * Produk page hero — Inner Page rule (SKILL.md GATE 3 poin 9): NO heroImage.
 * Single-column, fully centered text layout.
 */
export default function ProdukHero() {
  return (
    <AnimatedSection as="section" className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <h1 className={`stagger-item ${styles.headline}`}>
          Tiga Modul Asesmen SDM Terpadu
        </h1>
        <p className={`stagger-item ${styles.subheadline}`}>
          Transformasi proses rekrutmen melalui tes psikologi berbasis
          teknologi. Satu platform untuk psikotes, survei kepuasan, dan
          asesmen kompetensi.
        </p>
        <div className={`stagger-item ${styles.ctaRow}`}>
          <Link
            href="/kontak"
            title="Konsultasi Gratis Sekarang — modul psikotes DISC, Papikostik, IQ online JobFit"
            className="btn btnPrimary"
          >
            Konsultasi Gratis Sekarang
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
}
