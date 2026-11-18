import { Metadata } from "next"
//import { keywords } from "@/app/zadaszenia/ZadaszeniaMetadata"

export const generateMetadata = (): Metadata => {
  return {
    title: "Zadaszenie tarasu z drewna i poliwęglanu – Drewelt",
    description: "Zadaszenia tarasu z drewna BSH i poliwęglanu od Drewelt. Wymiary modułowe, bezobsługowa ochrona i wycena w 24h. Sprawdź ofertę konstrukcji na wymiar!",
    alternates: {
      canonical: "https://www.drewelt.pl/zadaszenia",
    },
    //keywords,
  }
}

export default function ZadaszeniaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
