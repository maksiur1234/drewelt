export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Drewelt",
  description: "Drewelt najlepsze zadaszenia oraz tarasy",
  navItems: [
    {
      label: "Zadaszenia",
      href: "/zadaszenia",
    },
    {
      label: "Tarasy",
      href: "/tarasy",
    },
    {
      label: "Galeria",
      href: "/galeria",
    },
    {
      label: "Kontakt",
      href: "/kontakt",
    },
    {
      label: "O nas",
      href: "/oNas",
    },
  ],
  links: {
    twitter: "https://twitter.com/hero_ui",
  },
};
