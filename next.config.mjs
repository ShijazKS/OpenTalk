/** @type {import('next').NextConfig} */
import withPWAInit from "next-pwa";

const nextConfig = {
  /* config options here */
  productionBrowserSourceMaps: false,
  reactCompiler: false,
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
  turbopack: {},
};

// Initialize PWA wrapper
const withPWA = withPWAInit({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
});

export default withPWA(nextConfig);
