import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dzcu0rfa3nwu9.cloudfront.net",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
