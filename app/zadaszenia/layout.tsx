import { Metadata } from "next"

export const generateMetadata = (): Metadata => {
  return {
    title: "Zadaszenie tarasu z drewna i poliwęglanu – Drewelt",
    description: "Nowoczesne zadaszenia tarasowe, wiaty samochodowe i altany ogrodowe.",
    alternates: {
      canonical: "https://www.drewelt.pl/zadaszenia",
    },
  }
}

export default function TarasyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  )
}
