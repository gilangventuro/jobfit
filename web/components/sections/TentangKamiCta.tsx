import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import styles from "./TentangKamiCta.module.css";

/**
 * TentangKamiCta — CTA penutup halaman Tentang Kami (PLAN-tentang-kami.md
 * Section 4). Tanpa foto/heroImage — latar gradient token design system
 * sesuai Aturan Hero Pages untuk Inner Page.
 */
export default function TentangKamiCta() {
  return (
    <AnimatedSection as="section" className={styles.section}>
      <div className={`container ${styles.content}`}>
        <h2 className={`stagger-item ${styles.headline}`}>
          Siap Menyaring Kandidat Terbaik Anda?
        </h2>
        <p className={`stagger-item ${styles.subheadline}`}>
          Bergabung dengan 40+ perusahaan yang sudah mempercayakan proses
          seleksi dan penilaian SDM mereka pada JobFit.
        </p>
        <div className={`stagger-item ${styles.ctaRow}`}>
          <Link
            href="/kontak"
            title="Hubungi Tim Kami — konsultasi psikotes online JobFit"
            className={`btn ${styles.ctaBtn}`}
          >
            Hubungi Tim Kami
          </Link>
        </div>
        <p className={`stagger-item ${styles.guarantee}`}>
          Semua data koresponden kami jamin kerahasiaannya, aplikasi ini
          tidak mencatat log identitas Anda.
        </p>
      </div>
    </AnimatedSection>
  );
}
