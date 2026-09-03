import Image from "next/image";
import { BarChart3, ClipboardCheck, Users } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SwipeableCards from "@/components/SwipeableCards";
import styles from "./Solution.module.css";

const BENEFITS = [
  {
    icon: ClipboardCheck,
    title: "Psikotes Online",
    desc: "Aplikasi kami membantu perusahaan menilai kandidat secara cepat, objektif, dan berbasis data psikologis.",
    image: "/assets/screenshot-jobfit-disc-personality-test-mobile.jpg",
    alt: "Screenshot mobile app JobFit menampilkan tes psikotes DISC untuk asesmen kepribadian kandidat rekrutmen",
  },
  {
    icon: Users,
    title: "Employee Satisfaction Survey",
    desc: "Manajemen survey anda dengan dashboard yang informatif.",
    image: "/assets/mockup-survey-mobile-pertanyaan.jpg",
    alt: "Mockup mobile survei kepuasan karyawan JobFit yang mudah diisi langsung dari smartphone",
  },
  {
    icon: BarChart3,
    title: "Competency Assessment Survey",
    desc: "Cukup undang melalui email, karyawan anda dapat mengisi survey langsung dari smartphone masing-masing.",
    image: "/assets/screenshot-jobfit-dashboard-informatif-mobile.jpg",
    alt: "Screenshot dashboard informatif JobFit untuk memantau hasil competency assessment survey karyawan secara real-time",
  },
];

export default function Solution() {
  const cards = BENEFITS.map((item) => {
    const Icon = item.icon;
    return (
      <div className={`${styles.card} stagger-item`} tabIndex={0}>
        <div className={styles.cardImage}>
          <Image
            src={item.image}
            alt={item.alt}
            title={`Modul ${item.title} JobFit`}
            fill
            sizes="(max-width: 1024px) 90vw, 30vw"
          />
        </div>
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
              src="/assets/stock-woman-pointing-solution-idea.jpg"
              alt="Wanita profesional menunjukkan ide solusi transformasi rekrutmen berbasis teknologi psikometrik"
              title="Solusi JobFit untuk transformasi proses rekrutmen"
              fill
              sizes="(max-width: 1024px) 90vw, 40vw"
            />
          </div>
          <div className={`stagger-item ${styles.introText}`}>
            <h2 className={styles.title}>Solusi JobFit: Tiga Modul Terpadu</h2>
            <p className={styles.valueProp}>
              Transformasi proses rekrutmen melalui tes psikologi berbasis
              teknologi.
            </p>
          </div>
        </div>

        <SwipeableCards
          items={cards}
          ariaLabel="Tiga modul solusi JobFit"
          desktopColumns={3}
        />
      </div>
    </AnimatedSection>
  );
}
