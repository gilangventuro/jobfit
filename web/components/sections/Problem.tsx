import Image from "next/image";
import { AlarmClockOff, Search, TrendingDown, Users2 } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SwipeableCards from "@/components/SwipeableCards";
import styles from "./Problem.module.css";

const PROBLEMS = [
  {
    icon: Search,
    title: "Sulit Temukan Kandidat Tepat",
    desc: "Sulit menemukan kandidat yang benar-benar sesuai harapan, sering berujung salah rekrut.",
  },
  {
    icon: Users2,
    title: "Pelamar Banyak, Waktu Terbatas",
    desc: "Tidak ada cara cepat untuk menyaring rekrutmen dengan volume pelamar besar.",
  },
  {
    icon: TrendingDown,
    title: "Masalah Kinerja Baru Terlihat Belakangan",
    desc: "Perilaku kinerja karyawan bermasalah baru terlihat saat masa percobaan kerja berjalan.",
  },
  {
    icon: AlarmClockOff,
    title: "Tes Manual Melelahkan dan Lambat",
    desc: "Tes psikologi manual berbasis kertas melelahkan, hasilnya baru didapat setelah menunggu lama.",
  },
];

export default function Problem() {
  const cards = PROBLEMS.map((item) => {
    const Icon = item.icon;
    return (
      <div className={`${styles.card} stagger-item`} tabIndex={0}>
        <Icon
          size={28}
          color="var(--color-primary)"
          aria-hidden="true"
          style={{ marginBottom: "12px" }}
        />
        <h3 className={styles.cardTitle}>{item.title}</h3>
        <p className={styles.cardDesc}>{item.desc}</p>
      </div>
    );
  });

  return (
    <AnimatedSection as="section" className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <div className={`stagger-item ${styles.imageFrame}`}>
          <Image
            src="/assets/stock-man-frustrated-recruitment-problem.jpg"
            alt="Pria HRD frustrasi menghadapi proses rekrutmen manual yang lambat dan melelahkan"
            title="Masalah umum proses rekrutmen manual"
            fill
            sizes="(max-width: 1024px) 90vw, 40vw"
          />
        </div>

        <div>
          <h2 className={styles.title}>Masalah Umum Proses Rekrutmen</h2>
          <SwipeableCards
            items={cards}
            ariaLabel="Daftar masalah umum proses rekrutmen"
            desktopColumns={2}
          />
        </div>
      </div>
    </AnimatedSection>
  );
}
