import Image from "next/image";
import {
  Gauge,
  Share2,
  UploadCloud,
  FileBarChart,
  Link2,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SwipeableCards from "@/components/SwipeableCards";
import styles from "./ProdukFiturPendukung.module.css";

const ITEMS = [
  {
    icon: Gauge,
    title: "Dashboard Informatif",
    desc: "Pantau seluruh proses rekrutmen dalam satu tampilan yang jelas dan real-time. Dashboard kami membantu HR mengambil keputusan lebih cepat dengan data hasil tes yang langsung dapat dianalisis.",
    image: "/assets/screenshot-jobfit-dashboard-informatif-mobile.jpg",
    alt: "Screenshot dashboard hasil tes real-time JobFit untuk memantau seluruh proses rekrutmen di mobile",
  },
  {
    icon: UploadCloud,
    title: "Input Bulk Koresponden",
    desc: "Hemat waktu dengan fitur input massal untuk banyak kandidat sekaligus.",
    image: "/assets/mockup-bulk-input-koresponden-form.jpg",
    alt: "Mockup form Tambah Koresponden dengan fitur input bulk dan upload Excel di platform JobFit",
  },
  {
    icon: Share2,
    title: "Share Tes via Email/WhatsApp",
    desc: "Sebarkan undangan tes ke kandidat dengan cara yang paling praktis. Hanya dengan satu klik, tes dapat dikirim langsung melalui email atau WhatsApp tanpa perlu login manual.",
  },
  {
    icon: FileBarChart,
    title: "Hasil Tes Menyeluruh",
    desc: "Dapatkan gambaran lengkap tentang kepribadian, potensi, dan gaya kerja kandidat. Hasil analisis disajikan secara visual, mudah dibaca, dan siap digunakan untuk pengambilan keputusan rekrutmen.",
    image: "/assets/screenshot-jobfit-hasil-test-disc-detail.jpg",
    alt: "Screenshot laporan hasil tes DISC menyeluruh dengan grafik kepribadian kandidat di JobFit",
  },
  {
    icon: Link2,
    title: "Integrasi HRIS Humanis",
    desc: "Aplikasi kami menghubungkannya langsung dengan Humanis HRIS untuk analisis yang lebih efisien, cepat dan terintegrasi.",
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
        {item.image ? (
          <div className={styles.cardImage}>
            <Image
              src={item.image}
              alt={item.alt as string}
              title={`Fitur ${item.title} JobFit — dashboard hasil tes real-time`}
              fill
              sizes="(max-width: 1024px) 90vw, 30vw"
            />
          </div>
        ) : (
          <div className={styles.iconBadge}>
            <Icon size={22} aria-hidden="true" />
          </div>
        )}
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
