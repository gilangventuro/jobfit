import type { Metadata } from "next";
import ProdukHero from "@/components/sections/ProdukHero";
import ProdukModul1Psikotes from "@/components/sections/ProdukModul1Psikotes";
import ProdukFiturPendukung from "@/components/sections/ProdukFiturPendukung";
import ProdukModul2Ess from "@/components/sections/ProdukModul2Ess";
import ProdukModul3Cas from "@/components/sections/ProdukModul3Cas";
import ProdukCta from "@/components/sections/ProdukCta";

export const metadata: Metadata = {
  title: "Tes Psikotes DISC, Papikostik, IQ Online | JobFit",
  description:
    "Platform psikotes online DISC, Papikostik, IQ plus employee satisfaction survey dan competency assessment survey. Dashboard hasil tes real-time untuk HRD.",
  alternates: {
    canonical: "https://jobfit.id/produk",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Psikotes Online dan Asesmen SDM",
    name: "Produk JobFit — Psikotes Online, Employee Satisfaction Survey, Competency Assessment Survey",
    description:
      "Platform psikotes online DISC, Papikostik, IQ plus employee satisfaction survey dan competency assessment survey. Dashboard hasil tes real-time untuk HRD.",
    provider: {
      "@type": "Organization",
      name: "JobFit",
      url: "https://jobfit.id",
      logo: "https://jobfit.id/assets/logo.png",
    },
    areaServed: "ID",
    url: "https://jobfit.id/produk",
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "JobFit",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Platform psikotes online (DISC, Papikostik, IQ) dengan dashboard hasil tes real-time, dilengkapi modul Employee Satisfaction Survey dan Competency Assessment Survey.",
    url: "https://jobfit.id/produk",
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
        name: "Produk",
        item: "https://jobfit.id/produk",
      },
    ],
  },
];

export default function ProdukPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProdukHero />
      <ProdukModul1Psikotes />
      <ProdukFiturPendukung />
      <ProdukModul2Ess />
      <ProdukModul3Cas />
      <ProdukCta />
    </>
  );
}
