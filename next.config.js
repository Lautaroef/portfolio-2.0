/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "raw.githubusercontent.com", // for each technology's image url coming from the database
      "i.ibb.co", // for those private repositories which don't allow to fetch images from their repository
    ],
  },
};

module.exports = nextConfig;
