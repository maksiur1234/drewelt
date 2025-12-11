/** @type {import('next').NextConfig} */
const redirects = require('./redirects');

const nextConfig = {
  output: "export",

  sassOptions: {
      prependData:
          "@use '@/styles/_variables.scss' as sV;", // Dołącza do każdego pliku scss zmienne, można używać: sV.$nazwa_zmiennej
  },

  async redirects() {
    return redirects;
  }
};

