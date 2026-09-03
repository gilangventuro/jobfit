import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import StatCounter from "@/components/StatCounter";
import styles from "./TentangKamiHero.module.css";

const STATS = [
  { value: "500++", label: "Psikotes Online Dilakukan" },
  { value: "90%", label: "Tingkat Kepuasan Pengguna" },
  { value: "2013", label: "Tahun Berdiri Venturo Pro" },
  { value: "105", label: "IT Talent Professional" },
];

/**
 * TentangKamiHero — Inner Page hero, TEKS MURNI (tanpa heroImage) sesuai
 * Aturan Hero Pages di SKILL.md GATE 3 poin 9: layout satu kolom penuh,
 * rata tengah, latar gradient token design system (bukan foto).
 */
export default function TentangKamiHero() {
  return (
    <AnimatedSection as="section" className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <h1 className={`stagger-item ${styles.headline}`}>
          Di Balik Platform Psikotes Terpercaya
        </h1>
        <p className={`stagger-item ${styles.subheadline}`}>
          JobFit dikembangkan oleh Venturo Pro, software developer asal
          Malang yang telah dipercaya puluhan perusahaan sejak 2013.
        </p>

        <div className={`stagger-item ${styles.ctaRow}`}>
          <Link
            href="/kontak"
            title="Konsultasi Gratis Sekarang bersama tim JobFit"
            className={`btn ${styles.ctaBtn}`}
          >
            Konsultasi Gratis Sekarang
          </Link>
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
      </div>
    </AnimatedSection>
  );
}
