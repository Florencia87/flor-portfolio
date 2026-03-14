/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'my-portfolio-backend.ddev.site', // Tu URL de DDEV
        port: '',
        pathname: '/sites/default/files/**',
      },
    ],
  },
}

// Aquí es donde "envolvemos" nuestra configuración con el analizador
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)