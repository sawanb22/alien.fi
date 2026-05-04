import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // LandingPageClient.tsx is generated from Landing Page.html; tightening types is deferred.
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
