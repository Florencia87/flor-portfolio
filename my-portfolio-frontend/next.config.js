/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'my-portfolio-backend.ddev.site', // Your exact DDEV URL
        port: '',
        pathname: '/sites/default/files/**',
      },
    ],
  },
}

module.exports = nextConfig
