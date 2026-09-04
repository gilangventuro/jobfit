"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/produk", label: "Produk" },
  { href: "/harga", label: "Harga" },
  { href: "/panduan", label: "Panduan" },
] as const;

/**
 * Global sticky navbar shared by every page. Reusable by design: it does not
 * assume a heroImage exists on the current route.
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}>
      <div className={styles.inner}>
        <Link
          href="/"
          className={styles.logoLink}
          aria-label="Kembali ke Home JobFit"
          title="JobFit — Right Talent for Right Job"
        >
          <Image
            src="/assets/logo.png"
            alt="Logo JobFit, platform psikotes online untuk rekrutmen"
            title="JobFit — Right Talent for Right Job"
            width={140}
            height={36}
            className={styles.logoImg}
            priority
          />
        </Link>

        <nav className={styles.nav} aria-label="Navigasi utama">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              title={link.label}
              className={`${styles.navLink} ${
                pathname === link.href ? styles.navLinkActive : ""
              }`}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/kontak"
          title="Coba Demo Gratis JobFit"
          className={`btn btnPrimary ${styles.ctaDesktop}`}
        >
          Coba Demo Gratis
        </Link>

        <button
          type="button"
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`}
          aria-label={menuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-menu"
          tabIndex={0}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? (
            <X size={24} aria-hidden="true" />
          ) : (
            <>
              <span className={styles.burgerLine} />
              <span className={styles.burgerLine} />
              <span className={styles.burgerLine} />
            </>
          )}
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav-menu"
          className={styles.mobileMenu}
          aria-label="Navigasi mobile"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              title={link.label}
              className={`${styles.mobileNavLink} ${
                pathname === link.href ? styles.mobileNavLinkActive : ""
              }`}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/kontak"
            title="Coba Demo Gratis JobFit"
            className={`btn btnPrimary ${styles.mobileCta}`}
          >
            Coba Demo Gratis
          </Link>
        </nav>
      )}
    </header>
  );
}
