import React from "react"
import { Metadata } from "next"
import Head from "./Head/Head"
import Doswiadczenie from "./Doswiadczenie/Doswiadczenie"

export const generateMetadata = (): Metadata => {
  return {
    title: "Strona Główna | Drewelt Piotr Wiśniewski",
    description: "Nowoczesne zadaszenia tarasowe, wiaty samochodowe i altany ogrodowe.",
    alternates: {
      canonical: "https://www.drewelt.pl",
    },
  };
};

const HomePage = () => {
  return (
    <>
      <Head />

      <Doswiadczenie />
     
    </>
  )
}

export default HomePage
