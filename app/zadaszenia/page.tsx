import RozpocznijProjekt from "@/components/Homepage/RozpocznijProjekt/RozpocznijProjekt"
import Galeria from "@/components/Zadaszenia/Galeria/Galeria"
import Head from "@/components/Zadaszenia/Head/Head"
import Konstrukcje from "@/components/Zadaszenia/Konstrukcje/Konstrukcje"
import NiePrzeplacaj from "@/components/Zadaszenia/NiePrzeplacaj/NiePrzeplacaj"

export default function Page() {
  const cities = [
    { name: "Poznań", slug: "poznan", description: "Zadaszenia tarasów i garaży w Poznaniu, oferujące nowoczesne rozwiązania dostosowane do potrzeb każdego klienta." },
    { name: "Leszno", slug: "leszno", description: "Profesjonalne zadaszenia w Lesznie, gwarantujące trwałość i estetykę na lata." },
    { name: "Lubin", slug: "lubin", description: "Nowoczesne zadaszenia dla domów w Lubinie, które łączą funkcjonalność z eleganckim wyglądem." },
    { name: "Wrocław", slug: "wroclaw", description: "Zadaszenia tarasowe i altanowe we Wrocławiu, zapewniające komfort i ochronę przez cały rok." },
    { name: "Konin", slug: "konin", description: "Zadaszenia w Koninie – trwałe, estetyczne rozwiązania, które doskonale wpasują się w każdy krajobraz." },
    { name: "Gorzów wielkopolski", slug: "gorzow-wlkp", description: "Solidne zadaszenia w Gorzowie Wielkopolskim, które łączą nowoczesność z tradycją." },
    { name: "Zielona góra", slug: "zielona-gora", description: "Zadaszenia tarasów i garaży w Zielonej Górze, oferujące szeroki wybór materiałów i wzorów." },
  ]

  return (
    <>
      <Head />

      <NiePrzeplacaj />

      <Galeria />

      <Konstrukcje />

    </>
  )

}