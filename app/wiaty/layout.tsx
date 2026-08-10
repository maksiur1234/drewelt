import { Metadata } from "next"

export const generateMetadata = (): Metadata => {
  return {
    title: "Wiaty samochodowe z drewna BSH - carporty garażowe - Drewelt",
    description: "Szukasz ochrony dla auta? Wybierz wiaty samochodowe z drewna BSH z dachem z poliwęglanu. Zapomnij o skrobaniu szyb i nagrzanym wnętrzu. Sprawdź ofertę!",
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
