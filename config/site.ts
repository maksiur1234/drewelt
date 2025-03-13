export const siteConfig = {
  name: "Producent konstrukcji drewnianych w Murowanej Goślinie",
  description:
    "Zapraszamy do odwiedzenia strony internetowej firmy produkcyjno-usługowej Drewelt, która znajduje się w Murowanej Goślinie. Przyjmujemy zlecenia z całego kraju.",
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
      href: "/o-nas",
    },
  ],
  links: {
    twitter: "https://twitter.com/hero_ui",
  },

  metadata: {
    title: {
      default: "Producent konstrukcji drewnianych w Murowanej Goślinie",
      template: "%s - Producent konstrukcji drewnianych w Murowanej Goślinie",
    },
    description: "Zapraszamy do odwiedzenia strony internetowej firmy produkcyjno-usługowej Drewelt.",
    icons: {
      icon: "/favicon.ico",
    },
    viewport: {
      themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
      ],
    },
  },
};
