import RozpocznijProjekt from "@/components/Homepage/RozpocznijProjekt/RozpocznijProjekt";
import DlaczegoMy from "@/components/Onas/DlaczegoMy/DlaczegoMy";
import Head from "@/components/Onas/Head/Head";
import JakWyglada from "@/components/Onas/JakWyglada/JakWyglada";
import Siedziba from "@/components/Onas/Siedziba/Siedziba";

export default function Page() {
  return (
    <>
      <Head />

      <DlaczegoMy />

      <Siedziba />

      <JakWyglada />

      <RozpocznijProjekt />
    </>
  )
}