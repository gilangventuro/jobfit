import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import styles from "./Footer.module.css";

const NAV_LINKS = [
  { href: "/", label: "Beranda" },
  { href: "/produk", label: "Produk" },
  { href: "/harga", label: "Harga" },
  { href: "/tentang-kami", label: "Tentang Kami" },
  { href: "/#faq", label: "FAQ" },
  { href: "/panduan", label: "Panduan" },
  { href: "/kontak", label: "Kontak" },
] as const;

const CONTACT = {
  email: "Jobfit@venturo.pro",
  wa: "0851-2804-3814",
  address:
    "Jl. Rinjani No 26, Oro-Oro Dowo, Kec. Klojen, Kota Malang, Jawa Timur 65119",
};

/**
 * Global footer shared by every page. No social media links are rendered —
 * JobFit does not yet have official social accounts (PLAN-GLOBAL Section 6).
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <div className={styles.logoBox}>
            <Image
              src="/assets/logo.png"
              alt="Logo JobFit, platform psikotes online untuk rekrutmen"
              title="JobFit — Right Talent for Right Job"
              width={130}
              height={32}
              className={styles.logoImg}
            />
          </div>
          <p className={styles.tagline}>
            JobFit — Right Talent for Right Job. Platform psikotes online
            (DISC, Papikostik, IQ) untuk rekrutmen yang lebih cepat, objektif,
            dan berbasis data.
          </p>
        </div>

        <div>
          <h3 className={styles.heading}>Navigasi</h3>
          <ul className={styles.linkList}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} title={link.label} className={styles.link}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className={styles.heading}>Kontak Kami</h3>
          <ul className={styles.contactList}>
            <li className={styles.contactItem}>
              <MessageCircle size={18} aria-hidden="true" />
              <a
                href={`https://wa.me/62${CONTACT.wa.replace(/^0/, "").replace(/-/g, "")}`}
                title={`Chat WhatsApp JobFit ${CONTACT.wa}`}
                className={styles.link}
              >
                {CONTACT.wa}
              </a>
            </li>
            <li className={styles.contactItem}>
              <Mail size={18} aria-hidden="true" />
              <a
                href={`mailto:${CONTACT.email}`}
                title={`Email JobFit: ${CONTACT.email}`}
                className={styles.link}
              >
                {CONTACT.email}
              </a>
            </li>
            <li className={styles.contactItem}>
              <MapPin size={18} aria-hidden="true" />
              <span>{CONTACT.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copyright}>
          &copy; {year} JobFit — dikembangkan oleh Venturo Pro. Seluruh hak
          cipta dilindungi.
        </p>
      </div>
    </footer>
  );
}
