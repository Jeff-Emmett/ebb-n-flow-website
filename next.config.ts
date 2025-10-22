import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: "export",
  basePath: "",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

export default nextConfig
