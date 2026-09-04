import type { Metadata } from "next";
import TentangKamiHero from "@/components/sections/TentangKamiHero";
import TentangKamiAbout from "@/components/sections/TentangKamiAbout";
import TentangKamiTrustWall from "@/components/sections/TentangKamiTrustWall";
import TentangKamiCta from "@/components/sections/TentangKamiCta";

const TITLE = "Tentang JobFit | Platform Psikotes Online Terpercaya";
const DESCRIPTION =
  "JobFit dikembangkan Venturo Pro, software developer Malang sejak 2013, 105 IT talent, dipercaya 40+ perusahaan lintas industri.";

// title.absolute overrides the "%s | JobFit" template from app/layout.tsx so
// the rendered <title> matches PLAN-tentang-kami.md Section 2 verbatim.
export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,
  alternates: {
    canonical: "https://jobfit.id/tentang-kami",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://jobfit.id/tentang-kami",
    siteName: "JobFit",
    locale: "id_ID",
    type: "website",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Tentang JobFit",
    url: "https://jobfit.id/tentang-kami",
    description: DESCRIPTION,
    mainEntity: {
      "@type": "Organization",
      name: "JobFit",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "JobFit",
    alternateName: "JOBFIT.id",
    url: "https://jobfit.id",
    logo: "https://jobfit.id/assets/logo.png",
    slogan: "Right Talent for Right Job",
    foundingDate: "2013",
    founder: {
      "@type": "Organization",
      name: "Venturo Pro",
    },
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: 105,
    },
    description:
      "JobFit dikembangkan oleh Venturo Pro, software developer asal Malang yang berpengalaman sejak 2013 dengan 105 IT Talent Professional, dipercaya 40+ perusahaan lintas industri untuk psikotes online.",
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
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://jobfit.id",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tentang Kami",
        item: "https://jobfit.id/tentang-kami",
      },
    ],
  },
];

export default function TentangKamiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TentangKamiHero />
      <TentangKamiAbout />
      <TentangKamiTrustWall />
      <TentangKamiCta />
    </>
  );
}
