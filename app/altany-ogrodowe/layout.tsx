import { Metadata } from "next"
//import { keywords } from "./AltanyOgrodoweMetadata";

export const generateMetadata = (): Metadata => {
  return {
    title: "Altana ogrodowa drewniana z BSH – Drewelt",
    description: "Zamów altanę ogrodową z drewna BSH od Drewelt. Nowoczesny design, trwała konstrukcja, szybka realizacja – idealna przestrzeń do relaksu w ogrodzie. Sprawdź!",
    alternates: {
      canonical: "https://www.drewelt.pl/altany-ogrodowe",
    },
    //keywords
  };
};

export default function TerraceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>{children}</>
  );
}
