import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import styles from "./Solution.module.css";

const ITEMS = [
  {
    title: "Proses rekrutmen sering memakan waktu",
    desc: "Aplikasi kami membantu perusahaan menilai kandidat secara cepat, objektif, dan berbasis data psikologis.",
  },
  {
    title: "Perusahaan sering kesulitan membedakan kandidat dengan kemampuan serupa",
    desc: "Aplikasi kami membantu mengungkap perbedaan karakter, motivasi, dan gaya kerja dengan analisis psikometrik otomatis.",
  },
  {
    title: "Sulit mendapatkan laporan hasil tes yang mudah dibaca dan dapat langsung ditindaklanjuti",
    desc: "Aplikasi kami menyajikan hasil analisis dalam format visual dan rekomendasi siap pakai.",
  },
  {
    title: "Kebutuhan tes psikologi yang beragam membuat proses rekrutmen semakin kompleks",
    desc: "Aplikasi kami menyederhanakanya dengan koleksi tes lengkap seperti DISC, Papikostik, dan alat ukur lain yang siap digunakan.",
  },
  {
    title: "HR butuh hasil tes yang terhubung ke sistem karyawan",
    desc: "Aplikasi kami menghubungkannya langsung dengan Humanis HRIS untuk analisis yang lebih efisien, cepat dan terintegrasi.",
  },
];

export default function Solution() {
  const cards = ITEMS.map((item, i) => (
    <div key={i} className={`${styles.checkItem} stagger-item`}>
      <span className={styles.check} aria-hidden="true">✓</span>
      <div>
        <h3 className={styles.checkTitle}>{item.title}</h3>
        <p className={styles.checkDesc}>{item.desc}</p>
      </div>
    </div>
  ));

  return (
    <AnimatedSection as="section" className={styles.section}>
      <div className="container">
        <div className={styles.layout}>
          {/* Kiri: gambar */}
          <div className={`stagger-item ${styles.imageCol}`}>
            <Image
              src="/assets/streesfree.png"
              alt="Stress-free solutions JobFit"
              title="Solusi JobFit untuk transformasi proses rekrutmen"
              width={0}
              height={0}
              sizes="(max-width: 1024px) 90vw, 48vw"
              style={{ width: "70%", height: "auto" }}
            />
          </div>

          {/* Kanan: judul + subtitle + cards */}
          <div className={`stagger-item ${styles.contentCol}`}>
            <div className={styles.heading}>
              <h2 className={styles.title}>STRESS-FREE SOLUTIONS</h2>
              <p className={styles.valueProp}>
                Transformasi proses rekrutmen melalui tes psikologi berbasis
                teknologi.
              </p>
            </div>
            <div className={styles.cardsGrid}>
              {cards}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
