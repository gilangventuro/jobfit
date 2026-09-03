import type { MetadataRoute } from "next";

const BASE_URL = "https://jobfit.id";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/produk",
    "/harga",
    "/tentang-kami",
    "/faq",
    "/panduan",
    "/kontak",
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "/" ? 1 : 0.8,
  }));
}
