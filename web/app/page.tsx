import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import TrustWall from "@/components/sections/TrustWall";
import Faq from "@/components/sections/Faq";
import { FAQS } from "@/components/sections/faq-data";
import Cta from "@/components/sections/Cta";
import KontakForm from "@/components/sections/KontakForm";

export const metadata: Metadata = {
  title: "Psikotes Online untuk Rekrutmen | JobFit",
  description:
    "Platform asesmen psikometrik Indonesia untuk tes DISC karyawan, Papikostik, dan IQ online. Right Talent for Right Job bersama JobFit.",
  alternates: {
    canonical: "https://jobfit.id/",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "JobFit",
    alternateName: "JOBFIT.id",
    url: "https://jobfit.id",
    logo: "https://jobfit.id/assets/logo.png",
    slogan: "Right Talent for Right Job",
    description:
      "JobFit adalah platform psikotes online (asesmen psikometrik: DISC, Papikostik, IQ) yang membantu perusahaan menyaring dan menilai kandidat/karyawan secara cepat, objektif, dan berbasis data ilmiah.",
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
    "@type": "WebSite",
    name: "JobFit",
    url: "https://jobfit.id",
    inLanguage: "id-ID",
    description:
      "Platform asesmen psikometrik Indonesia untuk tes DISC karyawan, Papikostik, dan IQ online.",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Problem />
      <Solution />
      <TrustWall />
      <Faq />
      <Cta />
      <KontakForm />
    </>
  );
}
