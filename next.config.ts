import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    resolveExtensions: [".tsx", ".ts", ".jsx", ".js", ".mdx", ".css"],
  },
};

export default nextConfig;
