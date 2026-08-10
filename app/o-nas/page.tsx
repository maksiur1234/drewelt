import RozpocznijProjekt from "@/components/Homepage/RozpocznijProjekt/RozpocznijProjekt";
import Head from "@/components/O-nas/Head/Head";
import KimJestesmy from "@/components/O-nas/KimJestesmy/KimJestesmy";
import Dlaczego from "@/components/O-nas/Dlaczego/Dlaczego";
import Misja from "@/components/O-nas/Misja/Misja";
import Inspiracje from "@/components/O-nas/Inspiracje/Inspiracje";

export default function Page() {
  return (
    <>
      <Head />

      <KimJestesmy />

      <Dlaczego />

      <Misja />

      <Inspiracje />

      <RozpocznijProjekt />

    </>
  )
}