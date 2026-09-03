"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SwipeableCards from "@/components/SwipeableCards";
import styles from "./HargaPricingTable.module.css";

interface PricingItem {
  name: string;
  price: string;
  priceUnit: string;
  features: string[];
  cta: string;
  badge?: string;
  featured?: boolean;
}

const INITIAL_SERVICE: PricingItem = {
  name: "Biaya Setup Awal",
  price: "Rp 2.000.000",
  priceUnit: "/ perusahaan (satu kali)",
  features: [
    "Kick-off meeting & business review",
    "Setup master file & instalasi sistem",
    "Parameter setup sesuai kebutuhan perusahaan",
    "User training penggunaan platform",
    "Gratis 200 kuota tes psikotes",
  ],
  cta: "Konsultasi Setup",
  featured: true,
};

const KUOTA_PACKAGES: PricingItem[] = [
  {
    name: "Kuota 100",
    price: "Rp 500.000",
    priceUnit: "/ paket",
    features: [
      "100 kuota tes psikotes",
      "Akses DISC, Papikostik, IQ",
      "Dashboard hasil real-time",
    ],
    cta: "Pilih Paket",
  },
  {
    name: "Kuota 500",
    price: "Rp 2.000.000",
    priceUnit: "/ paket",
    features: [
      "500 kuota tes psikotes",
      "Akses DISC, Papikostik, IQ",
      "Dashboard hasil real-time",
    ],
    cta: "Pilih Paket",
    badge: "Best Value",
    featured: true,
  },
  {
    name: "Kuota 1.000",
    price: "Rp 3.000.000",
    priceUnit: "/ paket",
    features: [
      "1.000 kuota tes psikotes",
      "Akses DISC, Papikostik, IQ",
      "Dashboard hasil real-time",
    ],
    cta: "Pilih Paket",
  },
];

const FLEKSIBEL_TABLE = {
  headers: ["Volume Peserta", "IQ", "Papikostik", "IQ & Papikostik"],
  rows: [
    ["1 - 250", "Rp 10.000", "Rp 10.000", "Rp 16.000 (dari Rp 20.000)"],
    ["251 - 500", "Rp 9.000", "Rp 9.000", "Rp 14.500 (dari Rp 18.000)"],
    ["> 500", "Rp 8.000", "Rp 8.000", "Rp 13.000 (dari Rp 16.000)"],
  ],
};

const ESS_TABLE = {
  headers: ["Jumlah Respon / Tahun", "Harga"],
  rows: [
    ["250", "Rp 2.500.000"],
    ["500", "Rp 4.500.000"],
    ["1.000", "Rp 8.000.000"],
    ["2.000", "Rp 14.000.000"],
    ["3.000", "Rp 18.000.000"],
    ["4.000", "Rp 20.000.000"],
  ],
};

const CAS_TABLE = {
  headers: ["Jumlah Respon / Tahun", "Harga"],
  rows: [
    ["100", "Rp 1.000.000"],
    ["200", "Rp 1.800.000"],
    ["300", "Rp 2.400.000"],
    ["400", "Rp 2.800.000"],
  ],
};

const cardTransition = {
  duration: 0.35,
  ease: "easeOut" as const,
};

function PricingCard({ item }: { item: PricingItem }) {
  return (
    <motion.div
      className={`${styles.card} ${item.featured ? styles.cardFeatured : ""} stagger-item`}
      whileHover={{ y: -6, boxShadow: "0 8px 24px rgba(16, 112, 152, 0.15)" }}
      transition={cardTransition}
      tabIndex={0}
      aria-label={`${item.name}, ${item.price} ${item.priceUnit}`}
    >
      {item.badge && <span className={styles.badge}>{item.badge}</span>}
      <h4 className={styles.cardName}>{item.name}</h4>
      <div className={styles.cardPrice}>
        <span className={styles.priceValue}>{item.price}</span>
        <span className={styles.priceUnit}>{item.priceUnit}</span>
      </div>
      <ul className={styles.featureList}>
        {item.features.map((feature) => (
          <li key={feature} className={styles.featureItem}>
            <Check size={18} aria-hidden="true" className={styles.checkIcon} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="/kontak"
        title={`${item.cta} — ${item.name}`}
        className={`btn ${item.featured ? "btnPrimary" : "btnSecondary"} ${styles.cardCta}`}
      >
        {item.cta}
      </a>
    </motion.div>
  );
}

function PriceTable({
  caption,
  headers,
  rows,
}: {
  caption: string;
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header} scope="col">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]}>
              {row.map((cell, i) => (
                <td key={i}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p className={styles.tableCaption}>{caption}</p>
    </div>
  );
}

export default function HargaPricingTable() {
  return (
    <AnimatedSection as="section" className={styles.section} id="pricing">
      <div className="container">
        <div className={`stagger-item ${styles.sectionHeader}`}>
          <h2 className={styles.sectionTitle}>Struktur Harga Lengkap</h2>
        </div>

        {/* Sub-Blok 2.1 — Initial Professional Services */}
        <div className={styles.subBlock}>
          <h3 className={`stagger-item ${styles.subTitle}`}>
            Initial Professional Services
          </h3>
          <div className={styles.singleCardWrap}>
            <PricingCard item={INITIAL_SERVICE} />
          </div>
        </div>

        {/* Sub-Blok 2.2 — Paket Kuota Psikotes */}
        <div className={styles.subBlock}>
          <h3 className={`stagger-item ${styles.subTitle}`}>
            Psikotes Online — Paket Kuota
          </h3>
          <SwipeableCards
            ariaLabel="Paket kuota psikotes online"
            desktopColumns={3}
            items={KUOTA_PACKAGES.map((item) => (
              <PricingCard key={item.name} item={item} />
            ))}
          />
        </div>

        {/* Sub-Blok 2.3 — Harga Fleksibel per Jenis Tes */}
        <div className={styles.subBlock}>
          <h3 className={`stagger-item ${styles.subTitle}`}>
            Psikotes Online — Harga per Jenis Tes (Fleksibel, Tanpa Instalasi)
          </h3>
          <PriceTable
            headers={FLEKSIBEL_TABLE.headers}
            rows={FLEKSIBEL_TABLE.rows}
            caption="Harga per peserta, cocok untuk kebutuhan tes fleksibel tanpa instalasi sistem. Semakin besar volume, semakin hemat per peserta."
          />
        </div>

        {/* Sub-Blok 2.4 — Employee Satisfaction Survey */}
        <div className={styles.subBlock}>
          <h3 className={`stagger-item ${styles.subTitle}`}>
            Employee Satisfaction Survey — Langganan Tahunan
          </h3>
          <PriceTable
            headers={ESS_TABLE.headers}
            rows={ESS_TABLE.rows}
            caption="Termasuk dashboard NPS, indeks keterlibatan, dan pemberdayaan karyawan. Pengisian mudah via smartphone, data anonim."
          />
        </div>

        {/* Sub-Blok 2.5 — Competency Assessment Survey */}
        <div className={styles.subBlock}>
          <h3 className={`stagger-item ${styles.subTitle}`}>
            Competency Assessment Survey — Langganan Tahunan
          </h3>
          <PriceTable
            headers={CAS_TABLE.headers}
            rows={CAS_TABLE.rows}
            caption="Mencakup asesmen kompetensi serta rekap kehadiran dan kinerja karyawan."
          />
        </div>
      </div>
    </AnimatedSection>
  );
}
