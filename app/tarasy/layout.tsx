import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "Budowa tarasów ogrodowych z kompozytu i drewna – Drewelt",
    description: "Deski tarasowe z kompozytu Drewelt. Budowa tarasów na wymiar, trwałość bez konserwacji i szybki montaż. Sprawdź ofertę oraz darmową wycenę!",
    alternates: {
      canonical: "https://www.drewelt.pl/tarasy",
    },
  }
}

export default function TarasyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
