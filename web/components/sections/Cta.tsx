import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import styles from "./Cta.module.css";

export default function Cta() {
  return (
    <AnimatedSection as="section" className={styles.section}>
      <div className={styles.bgImage}>
        <Image
          src="/assets/office-team-meeting-blue-overlay.jpg"
          alt="Tim rekrutmen rapat mendiskusikan strategi menyaring kandidat terbaik dengan JobFit"
          title="Konsultasi gratis strategi rekrutmen bersama JobFit"
          fill
          sizes="100vw"
        />
      </div>
      <div className={styles.overlay} />

      <div className={`container ${styles.content}`}>
        <h2 className={`stagger-item ${styles.headline}`}>
          Jangan Biarkan Kompetitor Merekrut Lebih Dulu
        </h2>
        <p className={`stagger-item ${styles.subheadline}`}>
          Setiap hari tanpa asesmen yang tepat berarti risiko salah rekrut.
          Mulai gunakan JobFit dan bangun tim terbaik hari ini.
        </p>
        <div className={`stagger-item ${styles.ctaRow}`}>
          <Link
            href="/kontak"
            title="Konsultasi Gratis Sekarang dengan tim JobFit"
            className="btn btnPrimary"
          >
            Konsultasi Gratis Sekarang
          </Link>
        </div>
        <p className={`stagger-item ${styles.guarantee}`}>
          Tim JobFit mendampingi proses kick-off, setup, hingga pelatihan
          penggunaan platform — bukan sekadar produk self-service.
        </p>
      </div>
    </AnimatedSection>
  );
}
