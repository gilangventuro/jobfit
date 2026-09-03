import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import SwipeableCards from "@/components/SwipeableCards";
import StatCounter from "@/components/StatCounter";
import styles from "./TrustWall.module.css";

const STATS = [
  { value: "500++", label: "Psikotes Online Dilakukan" },
  { value: "90%", label: "Tingkat Kepuasan Pengguna" },
  { value: "40+", label: "Klien Korporat Lintas Industri" },
];

const CLIENTS = [
  "Wuling Motors",
  "PT Suparma Tbk",
  "Harris Hotels",
  "Kementerian Kesehatan RI",
  "Majoo",
  "SnackVideo",
  "Bobobox",
  "TOTO",
  "Bali Nusa Dua Convention Center",
  "CU Sawiran",
  "Sinar Harapan",
  "Qoin",
  "Hayyu Syar'i Skin Clinic",
  "YPIA",
];

export default function TrustWall() {
  const logoCards = CLIENTS.map((name) => (
    <div className={`${styles.logoCard} stagger-item`} tabIndex={0}>
      <span className={styles.logoName}>{name}</span>
    </div>
  ));

  return (
    <AnimatedSection as="section" className={styles.section}>
      <div className="container">
        <div className={`stagger-item ${styles.header}`}>
          <h2 className={styles.title}>Dipercaya Puluhan Perusahaan</h2>
          <p className={styles.subheadline}>
            Lintas industri swasta, pendidikan, kesehatan, hingga
            pemerintahan mempercayai JobFit.
          </p>
        </div>

        <div className={`stagger-item ${styles.statsRow}`}>
          {STATS.map((stat) => (
            <StatCounter
              key={stat.label}
              value={stat.value}
              label={stat.label}
              valueClassName={styles.statValue}
              labelClassName={styles.statLabel}
            />
          ))}
        </div>

        <div className={`stagger-item ${styles.imagesRow}`}>
          <div className={styles.imageFrame}>
            <Image
              src="/assets/client-logos-trust-wall.jpg"
              alt="Dinding logo lebih dari 40 perusahaan klien korporat yang mempercayai psikotes online JobFit"
              title="Trust wall klien korporat JobFit"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
            />
          </div>
          <div className={styles.imageFrame}>
            <Image
              src="/assets/client-logo-cluster-secondary.jpg"
              alt="Kumpulan logo tambahan klien korporat JobFit lintas sektor industri"
              title="Klien tambahan JobFit lintas industri"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
            />
          </div>
        </div>

        <SwipeableCards
          items={logoCards}
          ariaLabel="Daftar 14 perusahaan klien JobFit"
          autoSlide
        />
      </div>
    </AnimatedSection>
  );
}
