import Galeria from "@/components/Zadaszenia/Galeria/Galeria"
import Head from "@/components/Zadaszenia/Head/Head"
import Konstrukcje from "@/components/Zadaszenia/Konstrukcje/Konstrukcje"
import NiePrzeplacaj from "@/components/Zadaszenia/NiePrzeplacaj/NiePrzeplacaj"

export default function Page() {
  return (
    <>
      <Head />

      <NiePrzeplacaj />

      <Galeria />

      <Konstrukcje />
    </>
  )
}