import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jobfit-doc.vercel.app",
        pathname: "/help/assets/**",
      },
    ],
  },
};

export default nextConfig;
