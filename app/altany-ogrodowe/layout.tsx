import { Metadata } from "next"
import { keywords } from "./AltanyOgrodoweMetadata";

export const generateMetadata = (): Metadata => {
  return {
    title: "Altana ogrodowa drewniana z BSH – Drewelt",
    description: "Zamów altanę ogrodową z drewna BSH od Drewelt. Nowoczesny design, trwała konstrukcja, szybka realizacja – idealna przestrzeń do relaksu w ogrodzie. Sprawdź!",
    alternates: {
      canonical: "https://www.drewelt.pl/altany-ogrodowe",
    },
    keywords
  };
};

export default function TerraceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lvh text-center justify-center">
        {children}
      </div>
    </section>
  );
}
