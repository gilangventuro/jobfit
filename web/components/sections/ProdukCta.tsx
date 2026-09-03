import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import styles from "./ProdukCta.module.css";

/**
 * Section 6 — cta (PLAN-produk.md Section 6). No image required (text +
 * button CTA pattern) — uses brand gradient background instead of a photo.
 */
export default function ProdukCta() {
  return (
    <AnimatedSection as="section" className={styles.section}>
      <div className={`container ${styles.content}`}>
        <h2 className={`stagger-item ${styles.headline}`}>
          Mulai Asesmen SDM Sekarang
        </h2>
        <p className={`stagger-item ${styles.subheadline}`}>
          Ribuan HR sudah beralih dari tes manual ke JobFit. Jangan
          tertinggal — jadwalkan konsultasi kebutuhan modul Anda hari ini.
        </p>
        <div className={`stagger-item ${styles.ctaRow}`}>
          <Link
            href="/kontak"
            title="Konsultasi Gratis Sekarang — pilih modul Psikotes, ESS, atau CAS JobFit"
            className="btn btnPrimary"
          >
            Konsultasi Gratis Sekarang
          </Link>
        </div>
        <p className={`stagger-item ${styles.guarantee}`}>
          Free Unlimited Support selama berlangganan (respon tim dalam
          1x24 jam) dan free buku panduan penggunaan langkah demi langkah.
        </p>
      </div>
    </AnimatedSection>
  );
}
