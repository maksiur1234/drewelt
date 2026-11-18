import Akcesoria from "@/components/Tarasy/Akcesoria/Akcesoria";
import Budowa from "@/components/Tarasy/Budowa/Budowa";
import Deski from "@/components/Tarasy/Deski/Deski";
import Head from "@/components/Tarasy/Head/Head";
import Montaz from "@/components/Tarasy/Montaz/Montaz";
import Zalety from "@/components/Tarasy/Zalety/Zalety";
import RozpocznijProjekt from "@/components/Homepage/RozpocznijProjekt/RozpocznijProjekt";

export default function Page() {
  return (
    <>
      <Head />

      <Budowa />

      <Zalety />

      <Deski />

      <Akcesoria />

      <Montaz />

      <RozpocznijProjekt naglowek="Zamów Bezpłatną Wycenę i Projekt"  hasDane />
    </>
  )
}