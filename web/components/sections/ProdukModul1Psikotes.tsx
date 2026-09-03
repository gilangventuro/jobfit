import Image from "next/image";
import { BarChart3, BrainCircuit, ClipboardCheck } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SwipeableCards from "@/components/SwipeableCards";
import styles from "./ProdukModul1Psikotes.module.css";

const BENEFITS = [
  {
    icon: ClipboardCheck,
    title: "Koleksi Tes Lengkap",
    desc: "Aplikasi kami menyederhanakannya dengan koleksi tes lengkap seperti DISC, Papikostik, dan alat ukur lain yang siap digunakan — mencakup tes DISC (gaya komunikasi & perilaku kerja), Papikostik (motivasi & gaya kepemimpinan), dan IQ.",
  },
  {
    icon: BrainCircuit,
    title: "Analisis Psikometrik Otomatis",
    desc: "Aplikasi kami membantu mengungkap perbedaan karakter, motivasi, dan gaya kerja dengan analisis psikometrik otomatis.",
  },
  {
    icon: BarChart3,
    title: "Hasil Visual & Siap Pakai",
    desc: "Aplikasi kami menyajikan hasil analisis dalam format visual dan rekomendasi siap pakai.",
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
        <div className={styles.intro}>
          <div className={`stagger-item ${styles.introImage}`}>
            <Image
              src="/assets/screenshot-jobfit-disc-personality-test-mobile.jpg"
              alt="Screenshot asli mobile app JobFit menampilkan tes psikotes DISC online untuk asesmen kepribadian kandidat"
              title="Tes Psikotes DISC Online JobFit di Aplikasi Mobile"
              fill
              sizes="(max-width: 1024px) 90vw, 40vw"
            />
          </div>
          <div className={`stagger-item ${styles.introText}`}>
            <h2 className={styles.title}>Psikotes Online Lengkap</h2>
            <p className={styles.valueProp}>
              Aplikasi kami membantu perusahaan menilai kandidat secara
              cepat, objektif, dan berbasis data psikologis.
            </p>
          </div>
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
