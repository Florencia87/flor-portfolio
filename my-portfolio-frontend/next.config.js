/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "florportfolio.ddev.site",
        port: "",
        pathname: "/sites/default/files/**",
      },
    ],
  },
};

export default nextConfig;