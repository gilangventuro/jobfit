import type { Metadata } from "next";
import KontakHeader from "@/components/sections/KontakHeader";
import KontakForm from "@/components/sections/KontakForm";
import KontakCta from "@/components/sections/KontakCta";

const TITLE = "Kontak JobFit — Konsultasi Jasa Psikotes Online";
const DESCRIPTION =
  "Hubungi JobFit untuk demo psikotes online atau konsultasi tes karyawan. Chat WhatsApp langsung atau kirim pesan lewat form, tim kami siap merespon.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,
  alternates: {
    canonical: "https://jobfit.id/kontak",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://jobfit.id/kontak",
    siteName: "JobFit",
    locale: "id_ID",
    type: "website",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Kontak JobFit",
    url: "https://jobfit.id/kontak",
    description: DESCRIPTION,
    mainEntity: {
      "@type": "Organization",
      name: "JobFit",
      url: "https://jobfit.id",
      logo: "https://jobfit.id/assets/logo.png",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Jl. Rinjani No 26, Oro-Oro Dowo, Kec. Klojen",
        addressLocality: "Kota Malang",
        addressRegion: "Jawa Timur",
        postalCode: "65119",
        addressCountry: "ID",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "Jobfit@venturo.pro",
        telephone: "+62851-2804-3814",
      },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://jobfit.id/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Kontak",
        item: "https://jobfit.id/kontak",
      },
    ],
  },
];

export default function KontakPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <KontakHeader />
      <KontakForm />
      <KontakCta />
    </>
  );
}
