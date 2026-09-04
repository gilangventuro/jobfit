import type { Metadata } from "next";
import PanduanPipeline from "@/components/sections/PanduanPipeline";

const TITLE = "Memahami Pipeline Kandidat | Panduan JobFit";
const DESCRIPTION =
  "Panduan JobFit untuk memahami pipeline kandidat pada halaman Recruitment.";

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
    name: "Memahami Pipeline Kandidat",
    url: "https://jobfit.id/panduan",
    description: DESCRIPTION,
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Memahami Pipeline Kandidat",
    description: DESCRIPTION,
    step: [
      {
        "@type": "HowToStep",
        name: "Step 1: Membuka Menu Recruitment",
        itemListElement: [
          {
            "@type": "HowToDirection",
            text: "Buka menu Recruitment di navigasi kiri aplikasi.",
          },
          {
            "@type": "HowToDirection",
            text: "Halaman Recruitment menampilkan lowongan beserta kandidat yang melamarnya.",
          },
          {
            "@type": "HowToDirection",
            text: "Pantau kandidat dari awal lamaran sampai diterima atau ditolak.",
          },
        ],
      },
      {
        "@type": "HowToStep",
        name: "Step 2: Memilih Lowongan",
        itemListElement: [
          {
            "@type": "HowToDirection",
            text: "Lihat daftar lowongan yang tersedia di panel kiri halaman Recruitment.",
          },
          {
            "@type": "HowToDirection",
            text: "Pilih salah satu lowongan untuk melihat kandidat yang melamarnya.",
          },
          {
            "@type": "HowToDirection",
            text: "Gunakan pencarian pada panel kiri untuk mempersempit daftar lowongan.",
          },
        ],
      },
      {
        "@type": "HowToStep",
        name: "Step 3: Membaca Tab Status Pipeline",
        itemListElement: [
          {
            "@type": "HowToDirection",
            text: "Setelah memilih lowongan, pipeline kandidat tampil sebagai deretan tab status.",
          },
          {
            "@type": "HowToDirection",
            text: "Terdapat 8 tab status: Waiting, Shortlisted, Pre-interviewed, Interkeyed, Offered, Hired, Rejected, dan Bookmark.",
          },
          {
            "@type": "HowToDirection",
            text: "Setiap tab menampilkan jumlah kandidat dan dapat diklik untuk menampilkan daftarnya.",
          },
        ],
      },
      {
        "@type": "HowToStep",
        name: "Step 4: Memahami Arti Setiap Status",
        itemListElement: [
          {
            "@type": "HowToDirection",
            text: "Waiting berarti kandidat menunggu review; Shortlisted berarti kandidat terpilih untuk lanjut.",
          },
          {
            "@type": "HowToDirection",
            text: "Pre-interviewed adalah tahap sebelum wawancara; Interkeyed adalah kandidat yang sudah diwawancarai.",
          },
          {
            "@type": "HowToDirection",
            text: "Offered berarti sudah ditawari, Hired berarti diterima, Rejected berarti ditolak, dan Bookmark berarti disimpan untuk ditinjau nanti.",
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
        name: "Home",
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
      <PanduanPipeline />
    </>
  );
}
