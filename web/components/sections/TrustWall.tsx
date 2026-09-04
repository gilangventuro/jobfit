import AnimatedSection from "@/components/AnimatedSection";
import StatCounter from "@/components/StatCounter";
import styles from "./TrustWall.module.css";

const STATS = [
  { value: "500++", label: "Psikotes Online Dilakukan" },
  { value: "90%", label: "Tingkat Kepuasan Pengguna" },
  { value: "40+", label: "Klien Korporat Lintas Industri" },
];

export default function TrustWall() {
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

      </div>
    </AnimatedSection>
  );
}
