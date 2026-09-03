import type { Metadata } from "next";
import HargaHero from "@/components/sections/HargaHero";
import HargaPricingTable from "@/components/sections/HargaPricingTable";
import HargaFaq from "@/components/sections/HargaFaq";
import { HARGA_FAQS } from "@/components/sections/harga-faq-data";
import HargaCta from "@/components/sections/HargaCta";

export const metadata: Metadata = {
  title: "Harga Psikotes Online JobFit | Paket Transparan",
  description:
    "Biaya tes psikologi karyawan, paket kuota psikotes, dan subscription assessment karyawan JobFit - transparan, tanpa hubungi sales.",
  alternates: {
    canonical: "https://jobfit.id/harga",
  },
  openGraph: {
    title: "Harga Psikotes Online JobFit | Paket Transparan",
    description:
      "Biaya tes psikologi karyawan, paket kuota psikotes, dan subscription assessment karyawan JobFit - transparan, tanpa hubungi sales.",
    url: "https://jobfit.id/harga",
    siteName: "JobFit",
    locale: "id_ID",
    type: "website",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Platform Psikotes Online JobFit",
    description:
      "Platform asesmen psikometrik (DISC, Papikostik, IQ), Employee Satisfaction Survey, dan Competency Assessment Survey dengan struktur harga transparan.",
    brand: {
      "@type": "Brand",
      name: "JobFit",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "IDR",
      lowPrice: "500000",
      highPrice: "20000000",
      offerCount: "15",
      url: "https://jobfit.id/harga",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Struktur Harga JobFit",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Initial Professional Services",
        price: "2000000",
        priceCurrency: "IDR",
        description:
          "Kick-off meeting, setup master file & instalasi sistem, parameter setup, user training, dan gratis 200 kuota tes psikotes.",
      },
      {
        "@type": "Offer",
        name: "Paket Kuota Psikotes 100",
        price: "500000",
        priceCurrency: "IDR",
        description: "100 kuota tes psikotes DISC, Papikostik, IQ.",
      },
      {
        "@type": "Offer",
        name: "Paket Kuota Psikotes 500",
        price: "2000000",
        priceCurrency: "IDR",
        description: "500 kuota tes psikotes DISC, Papikostik, IQ.",
      },
      {
        "@type": "Offer",
        name: "Paket Kuota Psikotes 1.000",
        price: "3000000",
        priceCurrency: "IDR",
        description: "1.000 kuota tes psikotes DISC, Papikostik, IQ.",
      },
      {
        "@type": "Offer",
        name: "Employee Satisfaction Survey — Langganan Tahunan",
        priceCurrency: "IDR",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: "2500000",
          maxPrice: "20000000",
          priceCurrency: "IDR",
        },
        description:
          "Langganan tahunan Employee Satisfaction Survey berdasarkan jumlah respon, 250 hingga 4.000 respon per tahun.",
      },
      {
        "@type": "Offer",
        name: "Competency Assessment Survey — Langganan Tahunan",
        priceCurrency: "IDR",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: "1000000",
          maxPrice: "2800000",
          priceCurrency: "IDR",
        },
        description:
          "Langganan tahunan Competency Assessment Survey berdasarkan jumlah respon, 100 hingga 400 respon per tahun.",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Beranda",
        item: "https://jobfit.id/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Harga",
        item: "https://jobfit.id/harga",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: HARGA_FAQS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  },
];

export default function HargaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HargaHero />
      <HargaPricingTable />
      <HargaFaq />
      <HargaCta />
    </>
  );
}
