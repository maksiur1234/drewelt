import Galeria from "@/components/Zadaszenia/Galeria/Galeria"
import Head from "@/components/Zadaszenia/Head/Head"
import Konstrukcje from "@/components/Zadaszenia/Konstrukcje/Konstrukcje"
import RozpocznijProjekt from "@/components/Homepage/RozpocznijProjekt/RozpocznijProjekt";
// import NiePrzeplacaj from "@/components/Zadaszenia/NiePrzeplacaj/NiePrzeplacaj"

export default function Page() {
  return (
    <>
      <Head />

      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block justify-center">
          <div className="max-w-[1300px] mx-auto p-4 sm:p-6 flex flex-col gap-4">
            <h2 className="text-3xl font-medium text-[#060f07] mb-4">Budowa zadaszenia z drewna ze specjalistami Drewelt</h2>
            <p className="text-sm sm:text-xl">Drewelt od 2014 roku projektuje i zajmuje się <strong>budową zadaszeń na tarasie</strong>, działając na terenie całej Polski. Jako specjaliści realizujemy bezobsługowe modele z certyfikowanego drewna klejonego BSH oraz poliwęglanu komorowego 10 mm z podwójną filtracją UV. Wszystkie nasze rozwiązania są dostosowane do specyfiki budynku i zmiennych warunków pogodowych. Każda konstrukcja <strong>dachu na taras drewniany</strong> powstaje na podstawie indywidualnych pomiarów, wytrzymuje obciążenie śniegiem do 100 kg/m² i skutecznie chroni meble ogrodowe przed odbarwieniem, wydłużając sezon na świeżym powietrzu o kilka miesięcy.</p>
            <h2 className="text-3xl font-medium text-[#2e7d32] mb-4">Daszek nad tarasem czy pełne zadaszenie?</h2>
            <p className="text-sm sm:text-xl">Wybór właściwego <strong>dachu </strong>zależy od ekspozycji <strong>tarasu </strong>na czynniki atmosferyczne oraz planowanego sposobu korzystania ze strefy ogrodowej. Poniższe zestawienie przedstawia najważniejsze różnice pomiędzy kompaktowym daszkiem a pełnym pokryciem:</p>

            <div className="max-w-5xl w-full overflow-hidden mx-auto rounded-2xl shadow-xl border-4 border-solid border-[#1e7a1f40]">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm sm:text-xl">
                  <thead>
                    <tr className="bg-[#2e7d32]">
                      <th className="p-4 text-left font-bold text-white"><strong>Cecha / Zakres ochrony</strong></th>
                      <th className="p-4 text-left font-bold text-white"><strong>Kompaktowy daszek nad tarasem</strong></th>
                      <th className="p-4 text-left font-bold text-white"><strong>Pełne zadaszenie tarasowe</strong></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="p-4 align-top font-bold border-b border-[#1e7a1f40] text-[#1a1a1a]"><strong className="text-[#2e7d32]">Główna funkcja</strong></td>
                      <td className="p-4 align-top font-bold border-b border-[#1e7a1f40] text-[#1a1a1a]">Osłona drzwi tarasowych oraz progu wyjściowego przed opadami</td>
                      <td className="p-4 align-top font-bold border-b border-[#1e7a1f40] text-[#1a1a1a]">Stworzenie dodatkowego, osłoniętego salonu ogrodowego</td>
                    </tr>
                    <tr className="bg-[#1e7a1f0d]">
                      <td className="p-4 align-top font-bold border-b border-[#1e7a1f40] text-[#4a4a4a]"><strong className="text-[#2e7d32]">Odporność na pogodę</strong></td>
                      <td className="p-4 align-top font-bold border-b border-[#1e7a1f40] text-[#4a4a4a]">Zabezpieczenie przed bezpośrednim deszczem przy samym budynku</td>
                      <td className="p-4 align-top font-bold border-b border-[#1e7a1f40] text-[#4a4a4a]">Pełna ochrona przed ulewą, opadami śniegu i silnym nasłonecznieniem</td>
                    </tr>
                    <tr className="bg-[#ffffff]">
                      <td className="p-4 align-top font-bold border-b border-[#1e7a1f40] text-[#1a1a1a]"><strong className="text-[#2e7d32]">Ochrona wyposażenia</strong></td>
                      <td className="p-4 align-top font-bold border-b border-[#1e7a1f40] text-[#1a1a1a]">Umożliwia krótkotrwałe schronienie dla podstawowych sprzętów</td>
                      <td className="p-4 align-top font-bold border-b border-[#1e7a1f40] text-[#1a1a1a]">Pozwala na całoroczne przechowywanie mebli tapicerowanych i grilla</td>
                    </tr>
                    <tr className="bg-[#1e7a1f0d]">
                      <td className="p-4 align-top font-bold border-b border-[#1e7a1f40] text-[#4a4a4a]"><strong className="text-[#2e7d32]">Ochrona roślinności</strong></td>
                      <td className="p-4 align-top font-bold border-b border-[#1e7a1f40] text-[#4a4a4a]">Zapewnia częściowy cień przy ścianie obiektu</td>
                      <td className="p-4 align-top font-bold border-b border-[#1e7a1f40] text-[#4a4a4a]">Chroni rośliny doniczkowe wrażliwe na nadmiar wody opadowej</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <NiePrzeplacaj /> */}

      <Galeria />

      <Konstrukcje />

      <RozpocznijProjekt naglowek="Zamów Bezpłatną Wycenę i Projekt"  hasDane />
    </>
  )
}