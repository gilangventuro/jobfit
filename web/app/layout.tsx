import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppinsHeading = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const poppinsBody = Poppins({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jobfit.id"),
  title: {
    default: "Psikotes Online untuk Rekrutmen | JobFit",
    template: "%s | JobFit",
  },
  description:
    "Platform asesmen psikometrik Indonesia untuk tes DISC karyawan, Papikostik, dan IQ online. Right Talent for Right Job bersama JobFit.",
  keywords: [
    "psikotes online untuk rekrutmen",
    "tes DISC karyawan",
    "platform asesmen psikometrik Indonesia",
    "right talent for right job",
  ],
  icons: {
    icon: "/assets/logo.png",
    shortcut: "/assets/logo.png",
    apple: "/assets/logo.png",
  },
  openGraph: {
    title: "Psikotes Online untuk Rekrutmen | JobFit",
    description:
      "Platform asesmen psikometrik Indonesia untuk tes DISC karyawan, Papikostik, dan IQ online. Right Talent for Right Job bersama JobFit.",
    url: "https://jobfit.id",
    siteName: "JobFit",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${poppinsHeading.variable} ${poppinsBody.variable}`}>
      <body>
        <LenisProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
