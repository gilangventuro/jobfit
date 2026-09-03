"use client";

import { useState, type FormEvent } from "react";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import StatCounter from "@/components/StatCounter";
import styles from "./KontakForm.module.css";

const CONTACT = {
  waNumber: "6285128043814",
  waDisplay: "0851-2804-3814",
  email: "Jobfit@venturo.pro",
  address:
    "Jl. Rinjani No 26, Oro-Oro Dowo, Kec. Klojen, Kota Malang, Jawa Timur 65119",
};

const CHANNELS = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    desc: `${CONTACT.waDisplay} — kanal respon tercepat, klik untuk chat langsung`,
    href: `https://wa.me/${CONTACT.waNumber}`,
  },
  {
    icon: Mail,
    title: "Email",
    desc: `${CONTACT.email} — untuk pertanyaan detail atau lampiran dokumen`,
    href: `mailto:${CONTACT.email}`,
  },
  {
    icon: MapPin,
    title: "Alamat Kantor",
    desc: CONTACT.address,
    href: undefined,
  },
];

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
      <div className={`container ${styles.grid}`}>
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

        <div className={`stagger-item ${styles.channelCol}`}>
          {CHANNELS.map((channel) => {
            const Icon = channel.icon;
            const content = (
              <>
                <div className={styles.channelIcon}>
                  <Icon size={22} aria-hidden="true" />
                </div>
                <div>
                  <h3 className={styles.channelTitle}>{channel.title}</h3>
                  <p className={styles.channelDesc}>{channel.desc}</p>
                </div>
              </>
            );
            return channel.href ? (
              <a
                key={channel.title}
                href={channel.href}
                title={channel.title}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.channelCard}
              >
                {content}
              </a>
            ) : (
              <div key={channel.title} className={styles.channelCard}>
                {content}
              </div>
            );
          })}

          <div className={styles.statsRow}>
            <StatCounter
              value="500++"
              label="Psikotes Online Dilakukan"
              valueClassName={styles.statValue}
              labelClassName={styles.statLabel}
            />
            <StatCounter
              value="90%"
              label="Pengguna Puas dengan Hasil Psikotes"
              valueClassName={styles.statValue}
              labelClassName={styles.statLabel}
            />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
