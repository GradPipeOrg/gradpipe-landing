/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Disable optimization to avoid ResponseAborted errors for large GIFs/local assets
    unoptimized: true,
  },
}

module.exports = nextConfig
