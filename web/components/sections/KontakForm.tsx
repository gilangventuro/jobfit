"use client";

import { useState, type FormEvent } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import styles from "./KontakForm.module.css";

const CONTACT = {
  waNumber: "6285128043814",
  email: "Jobfit@venturo.pro",
};

/**
 * KontakForm — section `solution` (PLAN-kontak.md Section 4 Section 2).
 * Form terkontrol tanpa backend: tombol submit membuka WhatsApp atau
 * mailto dengan draft pesan berisi isian form (WhatsApp sebagai CTA primer).
 */
export default function KontakForm() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const buildText = () =>
    [
      `Nama: ${name}`,
      `Email/Perusahaan: ${contact}`,
      `WhatsApp: ${phone}`,
      `Pesan: ${message}`,
    ].join("\n");

  const handleWhatsApp = (e: FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Halo JobFit, saya ingin konsultasi kebutuhan asesmen tim.\n\n${buildText()}`
    );
    window.open(`https://wa.me/${CONTACT.waNumber}?text=${text}`, "_blank");
  };

  const handleEmail = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Konsultasi Kebutuhan Asesmen — JobFit");
    const body = encodeURIComponent(buildText());
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
  };

  return (
    <AnimatedSection as="section" className={styles.section}>
      <div className="container">
        <div className={`stagger-item ${styles.formCol}`}>
          <h2 className={styles.title}>Hubungi Kami Langsung</h2>
          <p className={styles.valueProp}>
            Sampaikan kebutuhan asesmen tim Anda lewat WhatsApp untuk respon
            tercepat, atau isi formulir di samping untuk menjelaskan
            kebutuhan secara lebih detail.
          </p>

          <form className={styles.form}>
            <label className={styles.field}>
              <span className={styles.label}>Nama</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nama lengkap Anda"
                className={styles.input}
                required
              />
            </label>

            <label className={styles.field}>
              <span className={styles.label}>Email / Perusahaan</span>
              <input
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="Email kerja & nama perusahaan"
                className={styles.input}
                required
              />
            </label>

            <label className={styles.field}>
              <span className={styles.label}>Nomor WhatsApp</span>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="08xx-xxxx-xxxx"
                className={styles.input}
                required
              />
            </label>

            <label className={styles.field}>
              <span className={styles.label}>Pesan</span>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ceritakan kebutuhan asesmen tim Anda"
                className={styles.textarea}
                rows={4}
                required
              />
            </label>

            <div className={styles.actions}>
              <button
                type="submit"
                onClick={handleWhatsApp}
                title="Chat via WhatsApp dengan draft pesan dari form ini"
                className={`btn ${styles.btnPrimary}`}
              >
                Chat via WhatsApp
              </button>
              <button
                type="submit"
                onClick={handleEmail}
                title="Kirim isian form ini sebagai email ke JobFit"
                className={`btn ${styles.btnSecondary}`}
              >
                Kirim via Email
              </button>
            </div>
          </form>
        </div>
      </div>
    </AnimatedSection>
  );
}
