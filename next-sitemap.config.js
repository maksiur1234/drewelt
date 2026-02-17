/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.drewelt.pl",
  generateRobotsTxt: true,
  sitemapSize: 5000,

  additionalPaths: async (config) => {
    const paths = [];

    const zadaszeniaPages = [
      "poznan",
      "gorzow-wlkp",
      "lubin",
      "glogow",
      "zielona-gora",
      "konin",
      "wroclaw",
      "kostrzyn",
      "lubon",
      "szamotuly",
      "skorzewo",
      "suchy-las",
      "skoki",
    ];

    const deskiPages = [
      "konin",
      "poznan",
      "leszno",
      "wroclaw",
      "warszawa",
      "wrzesnia",
      "gniezno",
    ];

    zadaszeniaPages.forEach((slug) => {
      paths.push({
        loc: `/zadaszenia/zadaszenie-tarasu-${slug}`,
        changefreq: "weekly",
        priority: 0.9,
        lastmod: new Date().toISOString(),
      });
    });

    deskiPages.forEach((slug) => {
      paths.push({
        loc: `/tarasy/deska-tarasowa-kompozytowa-${slug}`,
        changefreq: "weekly",
        priority: 0.9,
        lastmod: new Date().toISOString(),
      });
    });

    return paths;
  },
};
