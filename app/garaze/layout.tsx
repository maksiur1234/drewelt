import { Metadata } from "next"

export const generateMetadata = (): Metadata => {
  return {
    title: "Wiaty Garażowe, carporty z drewna i poliwęglanu – Drewelt",
    description: "Nowoczesne carporty i garaże, wiaty samochodowe i altany ogrodowe.",
    alternates: {
      canonical: "https://www.drewelt.pl/garaze",
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
