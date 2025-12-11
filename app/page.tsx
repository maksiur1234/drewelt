import Doswiadczenie from "@/components/Homepage/Doswiadczenie/Doswiadczenie";
import Firma from "@/components/Homepage/Firma/Firma";
import Head from "@/components/Homepage/Head/Head";
import Opinie from "@/components/Homepage/Opinie/Opinie";
import Rzemioslo from "@/components/Homepage/Rzemioslo/Rzemioslo";
import { Metadata } from "next"
import NaszeOferty from "@/components/Homepage/NaszeOferty/NaszeOferty";
import Realizacje from "@/components/Homepage/Realizacje/Realizacje";
import RozpocznijProjekt from "@/components/Homepage/RozpocznijProjekt/RozpocznijProjekt";

export const generateMetadata = (): Metadata => {
  return {
    title: "Strona Główna | Drewelt Piotr Wiśniewski",
    description: "Nowoczesne zadaszenia tarasowe, wiaty samochodowe i altany ogrodowe.",
    alternates: {
      canonical: "https://www.drewelt.pl",
    },
  };
};

const page = () => {
  return (
    <>
      <Head />

      <Doswiadczenie />

      <Firma />

      <Rzemioslo />

      <NaszeOferty />

      <Opinie />

      <Realizacje />

      <RozpocznijProjekt />
    </>
  )
}

export default page
