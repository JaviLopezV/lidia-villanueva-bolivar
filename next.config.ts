import withPWAInit from "@ducanh2912/next-pwa";
import type { NextConfig } from "next";

const withPWA = withPWAInit({
  dest: "public",
  register: true,
  workboxOptions: { runtimeCaching: [] }, // Only precached, same-origin build resources.
  disable: process.env.NODE_ENV === "development",
});

const nextConfig: NextConfig = { reactStrictMode: true };

export default withPWA(nextConfig);
