import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "robimy chujowe wiaty ",
    description: "Nowoczesne zadaszenia tarasowe, wiaty samochodowe i altany ogrodowe.",
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
