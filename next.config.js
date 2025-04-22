/** @type {import('next').NextConfig} */
const redirects = require('./redirects');

const nextConfig = {
  images: {
    unoptimized: true,
  },

  async redirects() {
    return redirects;
  }
};

module.exports = nextConfig;
