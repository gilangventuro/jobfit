import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import styles from "./PanduanCta.module.css";

/**
 * PanduanCta — CTA penutup halaman Panduan (PLAN-panduan.md Section 4
 * Section 4). Tanpa foto — latar gradient token design system.
 */
export default function PanduanCta() {
  return (
    <AnimatedSection as="section" className={styles.section}>
      <div className={`container ${styles.content}`}>
        <h2 className={`stagger-item ${styles.headline}`}>
          Butuh Bantuan Lebih Lanjut?
        </h2>
        <p className={`stagger-item ${styles.subheadline}`}>
          Tim kami siap membantu jika ada kendala mengikuti panduan ini.
        </p>
        <div className={`stagger-item ${styles.ctaRow}`}>
          <Link
            href="/kontak"
            title="Hubungi Kami — bantuan panduan JobFit"
            className={`btn ${styles.ctaBtn}`}
          >
            Hubungi Kami
          </Link>
        </div>
        <p className={`stagger-item ${styles.guarantee}`}>
          Respon tim dalam 1x24 jam
        </p>
      </div>
    </AnimatedSection>
  );
}
