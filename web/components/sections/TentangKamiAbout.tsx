import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import styles from "./TentangKamiAbout.module.css";

/**
 * TentangKamiAbout — cerita JobFit & Venturo Pro (PLAN-tentang-kami.md
 * Section 2). Layout split-image: office-modern-workspace-interior.jpg
 * (utama) + office-team-meeting-blue-overlay.jpg (sekunder) bersanding
 * dengan narasi story yang dikutip langsung dari profil Venturo Pro.
 */
export default function TentangKamiAbout() {
  return (
    <AnimatedSection as="section" className={styles.section}>
      <div className="container">
        <h2 className={`stagger-item ${styles.title}`}>
          Kisah JobFit &amp; Venturo Pro
        </h2>

        <div className={styles.grid}>
          <div className={`stagger-item ${styles.textCol}`}>
            <p className={styles.paragraph}>
              JobFit adalah platform psikotes online (asesmen psikometrik
              DISC, Papikostik, IQ) yang membantu perusahaan menyaring dan
              menilai kandidat maupun karyawan secara cepat, objektif, dan
              berbasis data ilmiah — dilengkapi modul Employee Satisfaction
              Survey dan Competency Assessment Survey.
            </p>
            <p className={styles.paragraph}>
              &ldquo;Kami adalah perusahaan yang bergerak di bidang Software
              Developer, Berpengalaman sejak tahun 2013 yang telah
              mendevelop ratusan project custom dari berbagai perusahaan dan
              instansi di Indonesia.&rdquo; — dikutip langsung dari profil
              Venturo Pro, holding company di balik JobFit.
            </p>
            <p className={styles.paragraph}>
              &ldquo;Saat ini kami memiliki 105 IT Talent Professional yang
              berpusat di Kota Malang, Jawa Timur.&rdquo; Dari R&amp;D Office
              di Jl. Rinjani No 26, Oro-Oro Dowo, Kec. Klojen, Kota Malang,
              Jawa Timur 65119, tim kami merancang dan mengembangkan JobFit
              sebagai wujud komitmen jangka panjang Venturo Pro terhadap
              transformasi digital rekrutmen dan pengelolaan SDM di
              Indonesia.
            </p>
          </div>

          <div className={`stagger-item ${styles.imageCol}`}>
            <div className={styles.imageFrame}>
              <Image
                src="/assets/office-modern-workspace-interior.jpg"
                alt="Interior kantor modern Venturo Pro, ruang kerja terbuka tim developer JobFit di Kota Malang"
                title="Ruang kerja tim pengembang JobFit di Malang"
                fill
                sizes="(max-width: 1024px) 45vw, 22vw"
              />
            </div>
            <div className={styles.imageFrameSecondary}>
              {/*
                NOTE: the asset originally mapped here by ASSET-MAPPING.md
                (office-team-meeting-blue-overlay.jpg) is a corrupted file —
                it decodes to a plain black/white cursor-icon graphic, not a
                photo, which would violate the anti-placeholder /
                anti-broken-image mandate (AGENTS.md Pasal II) if embedded.
                A verified real replacement was actively sourced (Unsplash,
                HTTP 200 confirmed) and saved locally per the same mandate's
                "active visual sourcing" requirement.
              */}
              <Image
                src="/assets/office-team-meeting-collaboration.jpg"
                alt="Tim JobFit rapat mendiskusikan pengembangan platform psikotes online untuk rekrutmen"
                title="Rapat tim pengembangan JobFit"
                fill
                sizes="(max-width: 1024px) 45vw, 22vw"
              />
              <div className={styles.overlayTint} aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
