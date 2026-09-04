import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import SwipeableCards from "@/components/SwipeableCards";
import styles from "./TentangKamiTrustWall.module.css";

// 8 klien representatif lintas industri (PLAN-tentang-kami.md Section 3).
// Field "quote" dikosongkan sepenuhnya (tidak ada testimonial bertanda
// kutip di materi asli) — "role" direpurpose menjadi sektor industri.
const HIGHLIGHT_CLIENTS = [
  { name: "Wuling Motors", role: "Otomotif & Manufaktur" },
  { name: "PT Suparma Tbk", role: "Manufaktur Kertas (Tbk)" },
  { name: "Harris Hotels", role: "Hospitality & Perhotelan" },
  { name: "Kementerian Kesehatan RI", role: "Instansi Pemerintahan" },
  { name: "Bali Nusa Dua Convention Center", role: "MICE & Hospitality" },
  { name: "Majoo", role: "Teknologi & SaaS" },
  { name: "SMK YP 17 Pare", role: "Pendidikan" },
  { name: "CU Sawiran", role: "Koperasi & Keuangan" },
];

// Daftar klien lengkap (nama nyata dari intake_compro.md) — 15 item,
// melebihi ambang 10 sehingga WAJIB auto-slide carousel (AGENTS.md /
// SKILL.md GATE 3 poin 7).
const ALL_CLIENTS = [
  "Wuling Motors",
  "PT Suparma Tbk",
  "Harris Hotels",
  "Kementerian Kesehatan RI",
  "Bali Nusa Dua Convention Center",
  "Majoo",
  "SMK YP 17 Pare",
  "CU Sawiran",
  "SnackVideo",
  "Bobobox",
  "TOTO",
  "Sinar Harapan",
  "Qoin",
  "Hayyu Syar'i Skin Clinic",
  "YPIA",
];

/**
 * TentangKamiTrustWall — dipivot dari `testimonial` menjadi social proof
 * murni (PLAN-tentang-kami.md Section 3). Bukan reuse dari
 * `components/sections/TrustWall.tsx` milik Home — implementasi baru
 * dengan data & markup independen.
 */
export default function TentangKamiTrustWall() {
  const highlightCards = HIGHLIGHT_CLIENTS.map((client) => (
    <div
      key={client.name}
      className={`${styles.highlightCard} stagger-item`}
      tabIndex={0}
    >
      <span className={styles.highlightName}>{client.name}</span>
      <span className={styles.highlightRole}>{client.role}</span>
    </div>
  ));

  const logoChips = ALL_CLIENTS.map((name) => (
    <div key={name} className={`${styles.logoChip} stagger-item`} tabIndex={0}>
      <span className={styles.logoChipName}>{name}</span>
    </div>
  ));

  return (
    <AnimatedSection as="section" className={styles.section}>
      <div className="container">
        <div className={`stagger-item ${styles.header}`}>
          <h2 className={styles.title}>Dipercaya 40+ Perusahaan</h2>
          <p className={styles.subheadline}>
            Lintas industri otomotif, manufaktur, hospitality, kesehatan,
            pendidikan, hingga instansi pemerintahan mempercayakan proses
            seleksi dan penilaian SDM mereka pada JobFit.
          </p>
        </div>

        <div className={`stagger-item ${styles.imagesRow}`}>
          <div className={styles.imageFrame}>
            <Image
              src="/assets/client-logos-trust-wall.jpg"
              alt="Dinding logo lebih dari 40 perusahaan klien korporat lintas industri yang mempercayai psikotes online JobFit"
              title="Trust wall klien korporat JobFit"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
            />
          </div>
          <div className={styles.imageFrame}>
            <Image
              src="/assets/client-logo-cluster-secondary.jpg"
              alt="Kumpulan logo tambahan klien korporat JobFit dari berbagai sektor industri"
              title="Klien tambahan JobFit lintas industri"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
            />
          </div>
        </div>

        <div className={`stagger-item ${styles.highlightGrid}`}>
          <SwipeableCards
            items={highlightCards}
            ariaLabel="Delapan perusahaan klien representatif JobFit lintas industri"
            desktopColumns={4}
          />
        </div>

        <div className={`stagger-item ${styles.carouselWrap}`}>
          <p className={styles.carouselLabel}>
            Klien korporat lain yang mempercayai JobFit
          </p>
          <SwipeableCards
            items={logoChips}
            ariaLabel="Daftar lengkap 15 perusahaan klien korporat JobFit"
            autoSlide
          />
        </div>
      </div>
    </AnimatedSection>
  );
}
