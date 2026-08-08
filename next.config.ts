import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next.js 16 blocks optimizing images from local IPs by default.
    // Required for local Payload CMS media during development.
    dangerouslyAllowLocalIP: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/api/media/file/**",
      },
    ],
  },
};

export default nextConfig;
