import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import styles from "./HargaCta.module.css";

export default function HargaCta() {
  return (
    <AnimatedSection as="section" className={styles.section}>
      <div className={`container ${styles.content}`}>
        <h2 className={`stagger-item ${styles.headline}`}>
          Masih Bingung Pilih Paket?
        </h2>
        <p className={`stagger-item ${styles.subheadline}`}>
          Tim JobFit siap membantu menentukan kombinasi paket yang paling
          sesuai dengan skala dan kebutuhan perusahaan Anda.
        </p>
        <div className={`stagger-item ${styles.ctaRow}`}>
          <Link
            href="/kontak"
            title="Konsultasi Gratis dengan tim JobFit soal paket harga"
            className="btn btnPrimary"
          >
            Konsultasi Gratis
          </Link>
        </div>
        <p className={`stagger-item ${styles.guarantee}`}>
          Tanpa komitmen jangka panjang — konsultasi paket tidak mengikat.
        </p>
      </div>
    </AnimatedSection>
  );
}
