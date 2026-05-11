import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Morning-Dew-Sample",
  assetPrefix: "/Morning-Dew-Sample/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
