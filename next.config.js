/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'dynamic',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
