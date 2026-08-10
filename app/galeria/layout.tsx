import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "Galeria realizacji - zadaszenia i wiaty drewniane - Drewelt",
    description: "Szukasz inspiracji? Zobacz nasze drewniane zadaszenia tarasów i wiaty. Wybierz numer realizacji i skontaktuj się z nami po darmową wycenę!",
    alternates: {
      canonical: "https://www.drewelt.pl/galeria",
    },
  }
}

export default function GaleriaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>{children}</>
  )
}
