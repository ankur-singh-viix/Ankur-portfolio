/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Needed for Three.js / R3F
  transpilePackages: ['three'],
  images: {
    // Add your image domains here if using external images
    domains: [],
  },
}

module.exports = nextConfig
