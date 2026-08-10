import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "Kontakt - producent zadaszeń - Drewelt",
    description: "Szukasz wyceny zadaszenia lub desek kompozytowych? Skontaktuj się z Drewelt! Obsługujemy Poznań, Wrocław, Warszawę i okolice. Zadzwoń lub napisz!",
    alternates: {
      canonical: "https://www.drewelt.pl/kontakt",
    },
  };
};

export default function ContactLayout({
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
