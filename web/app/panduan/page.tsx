import type { Metadata } from "next";
import PanduanHeader from "@/components/sections/PanduanHeader";
import PanduanSteps from "@/components/sections/PanduanSteps";
import PanduanCatatan from "@/components/sections/PanduanCatatan";
import PanduanCta from "@/components/sections/PanduanCta";

const TITLE = "Panduan Penggunaan JobFit | Dokumentasi Jobfit";
const DESCRIPTION =
  "Panduan penggunaan JobFit: cara pakai psikotes online, wawancara & penilaian kandidat di modul Recruitment — langkah demi langkah.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,
  alternates: {
    canonical: "https://jobfit.id/panduan",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://jobfit.id/panduan",
    siteName: "JobFit",
    locale: "id_ID",
    type: "website",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Wawancara & Penilaian",
    url: "https://jobfit.id/panduan",
    description: DESCRIPTION,
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Wawancara & Penilaian",
    description:
      "Langkah-langkah untuk melakukan wawancara dan penilaian kandidat di Recruitment, mulai dari membuka chat wawancara hingga membuat penawaran (offer).",
    step: [
      {
        "@type": "HowToStep",
        name: "Step 1: Membuka Chat Wawancara",
        itemListElement: [
          {
            "@type": "HowToDirection",
            text: "Buka menu Recruitment dan pilih lowongan yang diinginkan.",
          },
          {
            "@type": "HowToDirection",
            text: "Klik kandidat yang akan diwawancarai untuk membuka panel detail.",
          },
          {
            "@type": "HowToDirection",
            text: "Buka fitur chat interview pada kandidat untuk memulai sesi wawancara.",
          },
        ],
      },
      {
        "@type": "HowToStep",
        name: "Step 2: Melakukan Wawancara",
        itemListElement: [
          {
            "@type": "HowToDirection",
            text: "Gunakan pertanyaan yang tersedia di chat untuk memandu sesi wawancara.",
          },
          {
            "@type": "HowToDirection",
            text: "Arahkan percakapan untuk menggali kompetensi kandidat sesuai kebutuhan posisi.",
          },
          {
            "@type": "HowToDirection",
            text: "Catat informasi penting selama sesi berlangsung.",
          },
        ],
      },
      {
        "@type": "HowToStep",
        name: "Step 3: Mengisi Penilaian Wawancara",
        itemListElement: [
          {
            "@type": "HowToDirection",
            text: "Setelah sesi wawancara selesai, buka form penilaian Interview Penilaian.",
          },
          {
            "@type": "HowToDirection",
            text: "Isi penilaian berdasarkan hasil wawancara kandidat.",
          },
          {
            "@type": "HowToDirection",
            text: "Simpan penilaian; hasilnya tercatat di detail kandidat dan dipakai untuk pengambilan keputusan.",
          },
        ],
      },
      {
        "@type": "HowToStep",
        name: "Step 4: Membuat Penawaran (Offer)",
        itemListElement: [
          {
            "@type": "HowToDirection",
            text: "Untuk kandidat yang cocok, gunakan template offer letter.",
          },
          {
            "@type": "HowToDirection",
            text: "Isi penawaran sesuai ketentuan perusahaan, lalu kirim ke kandidat.",
          },
          {
            "@type": "HowToDirection",
            text: "Status kandidat berubah menjadi Offered.",
          },
        ],
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
        name: "Panduan",
        item: "https://jobfit.id/panduan",
      },
    ],
  },
];

export default function PanduanPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PanduanHeader />
      <PanduanSteps />
      <PanduanCatatan />
      <PanduanCta />
    </>
  );
}
