import AnimatedSection from "@/components/AnimatedSection";
import styles from "./KontakHeader.module.css";

/**
 * KontakHeader — Inner Page header, TEKS MURNI (tanpa heroImage), sesuai
 * PLAN-kontak.md Section 4 Section 1.
 */
export default function KontakHeader() {
  return (
    <AnimatedSection as="section" className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <h1 className={`stagger-item ${styles.headline}`}>
          Hubungi Tim JobFit
        </h1>
        <p className={`stagger-item ${styles.subheadline}`}>
          Punya pertanyaan seputar psikotes online, Employee Satisfaction
          Survey, atau Competency Assessment Survey untuk perusahaan Anda?
          Tim JobFit siap membantu.
        </p>
        <p className={`stagger-item ${styles.subheadline}`}>
          Sampaikan kebutuhan rekrutmen dan asesmen tim Anda — kami akan
          merespon melalui WhatsApp atau email secepat mungkin.
        </p>
      </div>
    </AnimatedSection>
  );
}
