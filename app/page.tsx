import Doswiadczenie from "@/components/Homepage/Doswiadczenie/Doswiadczenie";
import Firma from "@/components/Homepage/Firma/Firma";
import Head from "@/components/Homepage/Head/Head";
import { Metadata } from "next"
import NaszeOferty from "@/components/Homepage/NaszeOferty/NaszeOferty";
import Realizacje from "@/components/Homepage/Realizacje/Realizacje";
import RozpocznijProjekt from "@/components/Homepage/RozpocznijProjekt/RozpocznijProjekt";
import GoogleMaps from "@/components/Base/GoogleMaps/GoogleMaps";

export const generateMetadata = (): Metadata => {
  return {
    title: "Strona Główna | Drewelt Piotr Wiśniewski",
    description: "Nowoczesne zadaszenia tarasowe, wiaty samochodowe i altany ogrodowe.",
    alternates: {
      canonical: "https://www.drewelt.pl",
    },
  };
};

const Page = () => {
  return (
    <>
      <Head />

      <Doswiadczenie />

      <Firma />

      <NaszeOferty />

      <Realizacje />

      <RozpocznijProjekt naglowek="Zamów Bezpłatną Wycenę i Projekt"  hasDane />

      <GoogleMaps />
    </>
  )
}

export default Page
