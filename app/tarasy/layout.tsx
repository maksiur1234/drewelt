import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "Budowa tarasów ogrodowych z kompozytu i drewna – Drewelt",
    description: "Nowoczesne zadaszenia tarasowe, wiaty samochodowe i altany ogrodowe.",
    alternates: {
      canonical: "https://www.drewelt.pl/tarasy",
    },
  }
}

export default function TarasyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
