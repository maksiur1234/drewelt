import { Metadata } from "next"

export const generateMetadata = (): Metadata => {
  return {
    title: "Wiaty, carporty z drewna i poliwęglanu – Drewelt",
    description: "Nowoczesne carporty i garaże, wiaty samochodowe i altany ogrodowe.",
    alternates: {
      canonical: "https://www.drewelt.pl/wiaty",
    },
  }
}

export default function WiatyLayout({
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
