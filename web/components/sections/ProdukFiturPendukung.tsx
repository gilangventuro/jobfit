import {
  Share2,
  UploadCloud,
  FileBarChart,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SwipeableCards from "@/components/SwipeableCards";
import styles from "./ProdukFiturPendukung.module.css";

const ITEMS = [
  {
    icon: UploadCloud,
    title: "Input Bulk Koresponden",
    desc: "Hemat waktu dengan input massal untuk banyak kandidat sekaligus.",
  },
  {
    icon: Share2,
    title: "Share via Email/WhatsApp",
    desc: "Kirim undangan tes langsung ke kandidat hanya dengan satu klik.",
  },
  {
    icon: FileBarChart,
    title: "Hasil Tes Menyeluruh",
    desc: "Laporan kepribadian dan potensi kandidat yang visual, mudah dibaca, dan siap pakai.",
  },
];

/**
 * Section 3 — management: Fitur Pendukung Modul 1 Psikotes Online
 * (PLAN-produk.md Section 3). 5 items (< 10) — grid on desktop,
 * SwipeableCards on mobile per SKILL.md GATE 3 poin 7.
 */
export default function ProdukFiturPendukung() {
  const cards = ITEMS.map((item) => {
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
        <h2 className={`stagger-item ${styles.title}`}>
          Fitur Pendukung Psikotes
        </h2>
        <SwipeableCards
          items={cards}
          ariaLabel="Fitur pendukung modul Psikotes Online JobFit"
          desktopColumns={3}
        />
      </div>
    </AnimatedSection>
  );
}
