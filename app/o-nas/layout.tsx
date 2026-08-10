import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "O nas – producent zadaszeń drewnianych i wiat - Drewelt",
    description: "Poznaj firmę Drewelt! Od lat tworzymy trwałe zadaszenia tarasów i wiaty z drewna klejonego BSH. Sprawdź, dlaczego warto nam zaufać i dołącz do grona klientów.",
    alternates: {
      canonical: "https://www.drewelt.pl/o-nas",
    },
  };
};

export default function ONasLayout({
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
