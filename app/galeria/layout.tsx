import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "Strona Główna | Drewelt Piotr Wiśniewski",
    description: "Galeria obrazów z realizacji tarasów, altan ogrodowych i wiat samochodowych wykonanych przez Drewelt. Zobacz nasze projekty i zainspiruj się do stworzenia idealnej przestrzeni na swoim podwórku.",
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
