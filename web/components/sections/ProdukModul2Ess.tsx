import Image from "next/image";
import { ListChecks, Smartphone, ShieldCheck } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SwipeableCards from "@/components/SwipeableCards";
import styles from "./ProdukModul2Ess.module.css";

/**
 * Section 4 — solution: Modul 2 Employee Satisfaction Survey
 * (PLAN-produk.md Section 4). Presented independently — no head-to-head
 * comparison with the other modules.
 */
export default function ProdukModul2Ess() {
  const cards = [
    <div className={`${styles.card} stagger-item`} tabIndex={0} key="kuisioner">
      <div className={styles.iconBadge}>
        <ListChecks size={22} aria-hidden="true" />
      </div>
      <h3 className={styles.cardTitle}>Kuisioner Fleksibel</h3>
      <p className={styles.cardDesc}>
        Setiap perusahaan memiliki aspek-aspek yang berbeda untuk mengukur
        kepuasan karyawannya. Fitur pembuat survey yang fleksibel bisa
        disesuaikan dengan aturan perusahaan anda.
      </p>
    </div>,
    <div className={`${styles.card} stagger-item`} tabIndex={0} key="smartphone">
      <div className={styles.cardImage}>
        <Image
          src="/assets/mockup-survey-mobile-pertanyaan.jpg"
          alt="Mockup mobile UI pengisian pertanyaan employee satisfaction survey JobFit dari smartphone"
          title="Pengisian Survey Kepuasan Karyawan via Smartphone JobFit"
          fill
          sizes="(max-width: 1024px) 90vw, 30vw"
        />
      </div>
      <div className={styles.iconBadge}>
        <Smartphone size={22} aria-hidden="true" />
      </div>
      <h3 className={styles.cardTitle}>Pengisian via Smartphone</h3>
      <p className={styles.cardDesc}>
        Tidak perlu repot sebar survey ke karyawan anda. Cukup undang melalui
        email, karyawan anda dapat mengisi survey langsung dari smartphone
        masing-masing.
      </p>
    </div>,
    <div className={`${styles.card} stagger-item`} tabIndex={0} key="anonim">
      <div className={styles.cardImage}>
        <Image
          src="/assets/mockup-survey-mobile-transparansi-data.jpg"
          alt="Mockup mobile UI transparansi dan kerahasiaan data employee satisfaction survey JobFit"
          title="Data Anonim dan Rahasia Survey Kepuasan Karyawan JobFit"
          fill
          sizes="(max-width: 1024px) 90vw, 30vw"
        />
      </div>
      <div className={styles.iconBadge}>
        <ShieldCheck size={22} aria-hidden="true" />
      </div>
      <h3 className={styles.cardTitle}>Data Anonim & Rahasia</h3>
      <p className={styles.cardDesc}>
        Semua data koresponden kami jamin kerahasiaannya, aplikasi ini tidak
        mencatat log identitas Anda.
      </p>
    </div>,
  ];

  return (
    <AnimatedSection as="section" className={styles.section}>
      <div className="container">
        <div className={`stagger-item ${styles.header}`}>
          <h2 className={styles.title}>Employee Satisfaction Survey</h2>
          <p className={styles.valueProp}>
            Manajemen survey anda dengan dashboard yang informatif.
          </p>
        </div>

        <SwipeableCards
          items={cards}
          ariaLabel="Keunggulan modul Employee Satisfaction Survey JobFit"
          desktopColumns={3}
        />
      </div>
    </AnimatedSection>
  );
}
