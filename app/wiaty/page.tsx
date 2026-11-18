import Galeria from "@/components/Garaze/Galeria/Galeria";
import Head from "@/components/Garaze/Head/Head";
import JakPostawic from "@/components/Garaze/JakPostawic/JakPostawic";
import MiejsceParkingowe from "@/components/Garaze/MiejsceParkingowe/MiejsceParkingowe";
import PelnaOferta from "@/components/Garaze/PelnaOferta/PelnaOferta";
// import Technologie from "@/components/Garaze/Technologie/Technologie";
import WybierzKonstrukcje from "@/components/Garaze/WybierzKonstrukcje/WybierzKonstrukcje";
import Zalety from "@/components/Garaze/Zalety/Zalety";
import RozpocznijProjekt from "@/components/Homepage/RozpocznijProjekt/RozpocznijProjekt";

export default function Page() {

  return (
    <>
      <Head title="Wiaty drewniane w ofercie Drewelt" description="Drewelt specjalizuje się w wytwarzaniu trwałych konstrukcji z drewna, które skutecznie zastępują tradycyjne garaże murarskie za ułamek ich kosztów. Zakład stolarski z Wielkopolski stawia na sprawdzone surowce i dopracowane projekty montowane u inwestora w jeden dzień." bgimage="/wiaty-wolnostojace/head.png"/>

      <Zalety />

      <MiejsceParkingowe />

      <WybierzKonstrukcje />

      <Galeria />

      {/* <Technologie /> */}

      <JakPostawic />

      <PelnaOferta />

      <RozpocznijProjekt naglowek="Zamów Bezpłatną Wycenę i Projekt"  hasDane />
    </>
  )

}