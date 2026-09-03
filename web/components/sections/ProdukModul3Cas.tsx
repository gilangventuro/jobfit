import { ClipboardList, CalendarCheck } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import styles from "./ProdukModul3Cas.module.css";

/**
 * Section 5 — solution: Modul 3 Competency Assessment Survey
 * (PLAN-produk.md Section 5). No dedicated JobFit-branded screenshot asset
 * available for this module — icons only, per ASSET-MAPPING.md.
 */
export default function ProdukModul3Cas() {
  return (
    <AnimatedSection as="section" className={styles.section}>
      <div className="container">
        <div className={`stagger-item ${styles.header}`}>
          <h2 className={styles.title}>Competency Assessment Survey</h2>
          <p className={styles.valueProp}>
            Tidak perlu repot sebar survey ke karyawan anda. Cukup undang
            melalui email, karyawan anda dapat mengisi survey langsung dari
            smartphone masing-masing.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={`${styles.card} stagger-item`} tabIndex={0}>
            <div className={styles.iconBadge}>
              <ClipboardList size={22} aria-hidden="true" />
            </div>
            <h3 className={styles.cardTitle}>Asesmen Kompetensi Karyawan</h3>
            <p className={styles.cardDesc}>
              Penilaian kompetensi karyawan dengan pengalaman pengisian yang
              sama praktisnya dengan survei kepuasan — undangan via email,
              diisi langsung dari smartphone.
            </p>
          </div>
          <div className={`${styles.card} stagger-item`} tabIndex={0}>
            <div className={styles.iconBadge}>
              <CalendarCheck size={22} aria-hidden="true" />
            </div>
            <h3 className={styles.cardTitle}>Rekap Kehadiran & Kinerja</h3>
            <p className={styles.cardDesc}>
              Rekap kehadiran (masuk, sakit, izin, alpha, keterlambatan)
              terintegrasi dalam satu laporan kompetensi, dilengkapi kolom
              komentar/komitmen karyawan.
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
