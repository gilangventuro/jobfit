import styles from "./KontakCta.module.css";
import AnimatedSection from "@/components/AnimatedSection";

const WA_LINK = "https://wa.me/6285128043814";

/**
 * KontakCta — CTA penutup halaman Kontak (PLAN-kontak.md Section 4 Section
 * 3). WhatsApp tetap aksi paling dominan secara visual.
 */
export default function KontakCta() {
  return (
    <AnimatedSection as="section" className={styles.section}>
      <div className={`container ${styles.content}`}>
        <h2 className={`stagger-item ${styles.headline}`}>
          Tim Rekrutmen Lain Sudah Mulai
        </h2>
        <p className={`stagger-item ${styles.subheadline}`}>
          Jangan biarkan proses seleksi kandidat Anda tertinggal. Diskusikan
          kebutuhan tim Anda dengan JobFit sekarang.
        </p>
        <div className={`stagger-item ${styles.ctaRow}`}>
          <a
            href={WA_LINK}
            title="Chat WhatsApp Sekarang dengan tim JobFit"
            target="_blank"
            rel="noopener noreferrer"
            className={`btn ${styles.ctaBtn}`}
          >
            Chat WhatsApp Sekarang
          </a>
        </div>
        <p className={`stagger-item ${styles.guarantee}`}>
          Data koresponden Anda kami jamin kerahasiaannya — sesuai kebijakan
          privasi JobFit.
        </p>
      </div>
    </AnimatedSection>
  );
}
