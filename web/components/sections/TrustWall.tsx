import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
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

        <div className={`stagger-item ${styles.clientImgWrap}`}>
          <Image
            src="/assets/clien.png"
            alt="Klien perusahaan yang mempercayai JobFit"
            title="Klien JobFit lintas industri"
            width={0}
            height={0}
            sizes="100vw"
            className={styles.clientImg}
          />
        </div>


      </div>
    </AnimatedSection>
  );
}
