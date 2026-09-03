import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import StatCounter from "@/components/StatCounter";
import styles from "./Hero.module.css";

const STATS = [
  { value: "500++", label: "Psikotes Online Dilakukan" },
  { value: "90%", label: "Pengguna Puas dengan Hasil Tes" },
];

export default function Hero() {
  return (
    <AnimatedSection as="section" className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.textCol}>
          <h1 className={`stagger-item ${styles.headline}`}>
            Rekrut Kandidat Terbaik dengan AI
          </h1>
          <p className={`stagger-item ${styles.subheadline}`}>
            Teknologi cerdas untuk rekrutmen yang efisien dan objektif. Kelola
            lowongan hingga rekrut kandidat terbaik dalam satu platform.
          </p>

          <div className={`stagger-item ${styles.ctaRow}`}>
            <Link
              href="/kontak"
              title="Coba Demo Gratis JobFit — psikotes online untuk rekrutmen"
              className="btn btnPrimary"
            >
              Coba Demo Gratis
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

          <div className={`stagger-item ${styles.trustBar}`}>
            <p className={styles.trustLabel}>
              Dipercaya 40+ perusahaan lintas industri.
            </p>
            <div className={styles.trustLogoStrip}>
              <Image
                src="/assets/client-logos-trust-wall.jpg"
                alt="Dinding logo perusahaan klien JobFit lintas industri yang menggunakan psikotes online untuk rekrutmen"
                title="Klien korporat JobFit — psikotes online terpercaya"
                width={340}
                height={90}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>

        <div className={`stagger-item ${styles.imageCol}`}>
          <div className={styles.imageFrame}>
            <Image
              src="/assets/hero-hrd-professional-woman-suit.jpg"
              alt="Tim HRD profesional menggunakan platform psikotes online JobFit untuk menyaring kandidat rekrutmen"
              title="Rekrutmen kandidat terbaik dengan psikotes online JobFit"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 420px"
            />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
