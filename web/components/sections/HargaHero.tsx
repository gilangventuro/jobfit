import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import StatCounter from "@/components/StatCounter";
import styles from "./HargaHero.module.css";

const STATS = [
  { value: "500++", label: "Psikotes Online Dilakukan" },
  { value: "90%", label: "Tingkat Kepuasan Pengguna" },
];

/**
 * Inner-page hero — text-only, no heroImage (AGENTS.md rule for inner pages:
 * single-column layout, everything centered).
 */
export default function HargaHero() {
  return (
    <AnimatedSection as="section" className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <h1 className={`stagger-item ${styles.headline}`}>
          Harga Transparan, Tanpa Sales
        </h1>
        <p className={`stagger-item ${styles.subheadline}`}>
          Satu-satunya platform psikotes online yang membuka seluruh struktur
          harga. Tanpa perlu hubungi sales untuk sekadar tahu biaya.
        </p>

        <div className={`stagger-item ${styles.ctaRow}`}>
          <Link
            href="#pricing"
            title="Lihat Semua Paket Harga JobFit"
            className="btn btnPrimary"
          >
            Lihat Semua Paket
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
