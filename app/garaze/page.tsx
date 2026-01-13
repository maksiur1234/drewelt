import Galeria from "@/components/Garaze/Galeria/Galeria";
import Head from "@/components/Garaze/Head/Head";
import JakPostawic from "@/components/Garaze/JakPostawic/JakPostawic";
import MiejsceParkingowe from "@/components/Garaze/MiejsceParkingowe/MiejsceParkingowe";
import Technologie from "@/components/Garaze/Technologie/Technologie";
import WybierzKonstrukcje from "@/components/Garaze/WybierzKonstrukcje/WybierzKonstrukcje";
import Zalety from "@/components/Garaze/Zalety/Zalety";
import RozpocznijProjekt from "@/components/Homepage/RozpocznijProjekt/RozpocznijProjekt";

export default function Page() {

  return (
    <>
      <Head />

      <Zalety />

      <MiejsceParkingowe />

      <WybierzKonstrukcje />

      <Galeria />

      <Technologie />

      <JakPostawic />

      <RozpocznijProjekt naglowek="Ile warta jest Twoja wygoda każdego ranka?" />
    </>
  )

}