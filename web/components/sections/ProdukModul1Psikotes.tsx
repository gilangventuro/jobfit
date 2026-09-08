import { BarChart3, BrainCircuit, ClipboardCheck } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SwipeableCards from "@/components/SwipeableCards";
import styles from "./ProdukModul1Psikotes.module.css";

const BENEFITS = [
  {
    icon: ClipboardCheck,
    title: "Koleksi Tes Lengkap",
    desc: "DISC, Papikostik, IQ, dan lainnya — siap digunakan tanpa konfigurasi.",
  },
  {
    icon: BrainCircuit,
    title: "Analisis Psikometrik Otomatis",
    desc: "Ungkap karakter, motivasi, dan gaya kerja kandidat secara otomatis.",
  },
  {
    icon: BarChart3,
    title: "Hasil Visual & Siap Pakai",
    desc: "Laporan visual langsung siap untuk pengambilan keputusan rekrutmen.",
  },
];

/**
 * Section 2 — solution: Modul 1 Psikotes Online (PLAN-produk.md Section 2).
 */
export default function ProdukModul1Psikotes() {
  const cards = BENEFITS.map((item) => {
    const Icon = item.icon;
    return (
      <div className={`${styles.card} stagger-item`} tabIndex={0}>
        <div className={styles.iconBadge}>
          <Icon size={22} aria-hidden="true" />
        </div>
        <h3 className={styles.cardTitle}>{item.title}</h3>
        <p className={styles.cardDesc}>{item.desc}</p>
      </div>
    );
  });

  return (
    <AnimatedSection as="section" className={styles.section}>
      <div className="container">
        <div className={`stagger-item ${styles.intro}`}>
          <h2 className={styles.title}>Psikotes Online Lengkap</h2>
          <p className={styles.valueProp}>
            Aplikasi kami membantu perusahaan menilai kandidat secara
            cepat, objektif, dan berbasis data psikologis.
          </p>
        </div>

        <SwipeableCards
          items={cards}
          ariaLabel="Keunggulan modul Psikotes Online JobFit"
          desktopColumns={3}
        />
      </div>
    </AnimatedSection>
  );
}
