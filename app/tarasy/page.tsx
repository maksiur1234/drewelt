"use client";

import { Card, CardHeader, CardBody } from "@heroui/card";
import { Divider } from "@heroui/divider";
import DoughnutChart from "@/components/chart";

import styles from './Tarasy.module.scss'
import Image from "next/image";

export default function Page() {
  const accessories = [
    {
      name: "Klips plastikowy + wkręt ze stali nierdzewnej",
      description: "Klipsy plastikowe wraz z wkrętem ze stali nierdzewnej do wykonywania połączeń desek. Połączenie nie ingerujące w deskę (nie trzeba wiercić), co oznacza, że można po pewnym czasie odwrócić deskę na inne ryflowanie.",
      image: "/produkty/klips.jpg",
    },
    {
      name: "Listwa kątowa",
      description: "Listwa kątowa montowana na obrzeżu tarasu lub wykończeń schodów.",
      image: "/produkty/listwa.jpg",
    },
    {
      name: "Deska cokołowa",
      description: "Deska cokołowa montowana obwodowo na widocznej części tarasu. W pełni zakrywa legar i deskę.",
      image: "/produkty/cat.jpg",
    },
    {
      name: "Zaślepka plastikowa",
      description: "Zaślepka plastikowa służy do zaślepienia widocznych końców deski jako alternatywa dla listwy cokołowej.",
      image: "/produkty/zaslepka.jpg",
    },
    {
      name: "Legar kompozytowy WPC",
      description: "Legar kompozytowy WPC do wykonywania konstrukcji podtarasowej.",
      image: "/produkty/legar.jpg",
    },
    {
      name: "Deska kompozytowa",
      description: "Deska kompozytowa.",
      image: "/produkty/deska-kompozyt.png",
    },
  ];

  const deckColors = [
    {
      name: "Jasny szary",
      color: "#a2a2a2",
      image: "/kolory-desek/jasny-szary.jpg",
    },
    {
      name: "Ciemny szary",
      color: "#4f4f4f",
      image: "/kolory-desek/ciemny-szary.jpg",
    },
    {
      name: "Jasny Brąz",
      color: "#caa882",
      image: "/kolory-desek/jasny-braz.jpg",
    },
    {
      name: "Ciemny Brąz",
      color: "#524330",
      image: "/kolory-desek/ciemny-braz.jpg",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-4">
        Tarasy z desek kompozytowych WPC
      </h1>

      <div className={styles.galeriaSekcja}>
        <div className={styles.galeria}>
          <div className={styles.imageWrapper}>
            <Image alt="Zadaszenie tarasu na łukach" src="/tarasy/taras-3.jpg" fill />
          </div>
          <div className={styles.imageWrapper}>
            <Image alt="Zadaszenie tarasu na łukach" src="/tarasy/taras-4.jpg" fill />
          </div>
          <div className={styles.imageWrapper}>
            <Image alt="Zadaszenie tarasu na łukach" src="/tarasy/taras-5.jpg" fill />
          </div>
        </div>
      </div>

      <Divider className="mb-6" />

      <section className="p-4 sm:p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Budowa tarasów ogrodowych – kompleksowa realizacja od Drewelt
        </h2>
        <p className="text-gray-700 text-sm sm:text-base">
          <a href="/o-nas">Drewelt</a> to doświadczony wykonawca tarasów ogrodowych, balkonowych i przydomowych stref wypoczynku, działający na rynku od 2014 roku. Realizujemy projekty na terenie całej Polski, ze szczególnym uwzględnieniem <a href="/tarasy/deska-tarasowa-kompozytowa-poznan">Poznania</a>, <a href="/tarasy/deska-tarasowa-kompozytowa-wroclaw">Wrocławia</a> i okolicznych miejscowości. <strong>Budowa tarasów ogrodowych</strong> obejmuje nie tylko montaż desek, ale także przygotowanie podłoża, dobór odpowiednich materiałów oraz estetyczne wykończenie. Tworzymy przestrzenie, które są trwałe, funkcjonalne i dopasowane do stylu życia Klienta. Chcesz dowiedzieć się więcej o naszych usługach? <a href="/kontakt">Skontaktuj się z nami!</a>
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 my-3">
          Czym jest tarasowa deska kompozytowa i gdzie się sprawdza?
        </h2>
        <p className="text-gray-700 text-sm sm:text-base">
          Deska kompozytowa to innowacyjny materiał, który łączy w sobie zalety drewna i tworzyw sztucznych. Wykonana z mączki drzewnej, włókien bambusowych oraz polimerów, jest odporna na warunki atmosferyczne, promieniowanie UV, wilgoć czy grzyby. W ofercie Drewelt znajdziesz <strong>deski kompozytowe na taras, balkon</strong>, molo czy ścieżkę ogrodową – idealne wszędzie tam, gdzie liczy się trwałość oraz estetyka.
        </p>
      </section>

      <Divider className="my-6" />

      <section>
        
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Tarasowa deska kompozytowa i jej zalety
        </h2>
        <p className="text-gray-700 text-sm sm:text-base">
          <strong>Tarasowa deska kompozytowa</strong> stanowi nowoczesną alternatywę dla tradycyjnego drewna. To produkt który:
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-disc list-inside items-center my-4">
          <li className="rounded-lg shadow-lg py-4">nie wymaga malowania ani impregnacji,</li>
          <li className="rounded-lg shadow-lg py-4">jej antypoślizgowa powierzchnia zapewnia bezpieczeństwo, nawet podczas deszczu,</li>
          <li className="rounded-lg shadow-lg py-4">jest odporna na wilgoć, temperaturę i promieniowanie UV,</li>
          <li className="rounded-lg shadow-lg py-4">podlega 100%-towej utylizacji,</li>
          <li className="rounded-lg shadow-lg py-4">wykazuje długą żywotność i wytrzymałość na obciążenia,</li>
          <li className="rounded-lg shadow-lg py-4">nie ma drzazg oraz zadarć.</li>
        </ul>
        <p className="text-gray-700 text-sm sm:text-base mt-3">
          <strong>Tarasowa deska kompozytowa </strong>jest więc świetnym rozwiązaniem dla osób ceniących wygodę i nowatorski design.
        </p>
      </section>

      <Divider className="my-6" />

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Wymiary i kolory – dopasuj taras do swojej przestrzeni
        </h2>
        <p className="text-gray-700 text-sm sm:text-base mb-3">
          Drewelt oferuje <strong>deski tarasowe kompozytowe</strong> w dwóch długościach: <strong>3m</strong> i <strong>4m</strong>, co pozwala na elastyczne dopasowanie do różnych powierzchni. Deski są dwustronnie ryflowane – jedna strona ma drobne rowki, druga grubsze – dzięki czemu można je odwrócić i odświeżyć wygląd tarasu, bez konieczności wymiany. W palecie kolorów <strong>kompozytowych desek tarasowych</strong> znajdziesz:
        </p>
        <div className="flex flex-wrap justify-center gap-16">
          {deckColors.map((color, index) => (
            <div key={index} className="flex flex-col items-center mb-4">
              <div
                className="w-16 h-16 rounded-lg shadow-lg"
                style={{ backgroundColor: color.color }}
              />
              <p className="text-gray-700 mt-2 text-sm sm:text-base font-medium">
                {color.name}
              </p>
              <Image
                alt={`Deska kompozytowa ${color.name}`}
                className="w-40 h-24 sm:w-48 sm:h-32 object-cover rounded-lg shadow-lg mt-2"
                src={color.image}
              />
            </div>
          ))}
        </div>
        <p className="text-gray-700 text-sm sm:text-base">
          Są to barwy, które harmonizują z nowoczesną architekturą i naturalnym otoczeniem. W sprzedaży dostępne są również <strong>plastikowe deski na taras</strong>. Stanowią one alternatywę dla osób poszukujących ekonomicznych oraz łatwych w utrzymaniu rozwiązań.
        </p>
      </section>

      <section className="my-6">
        <div className="w-full mx-auto mb-12">
          <DoughnutChart />
        </div>
      </section>

      <Divider className="my-6" />

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Akcesoria montażowe
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {accessories.map((product, index) => (
            <Card key={index} className="shadow-lg flex flex-col items-center">
              <Image
                fill
                alt={product.name}
                className="w-full h-32 sm:h-40 object-cover object-center rounded-t-lg"
                src={product.image}
              />
              <CardHeader className="flex justify-center text-lg font-semibold text-gray-800 p-3">
                {product.name}
              </CardHeader>
              <CardBody className="p-3 text-center">
                <p className="text-gray-700 text-sm">{product.description}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      <Divider className="my-6" />

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Montaż desek tarasowych z kompozytu i akcesoria – trwałość bez kompromisów
        </h2>
        <p className="text-gray-700 text-sm sm:text-base">
          Każdy projekt realizowany przez Drewelt obejmuje nie tylko dostawę <strong>desek tarasowych z kompozytu</strong>, ale także pełen zestaw akcesoriów montażowych. W skład systemu wchodzą klipsy plastikowe z wkrętami ze stali nierdzewnej, listy kątowe, zaślepki i inne elementy, które zapewniają stabilność i estetykę konstrukcji. Dzięki przemyślanemu systemowi montażu, <strong>deski kompozytowe</strong> można szybko, a także bezproblemowo zamontować<strong> na balkonach, tarasach</strong> ogrodowych czy przy basenach. Ich konstrukcja umożliwia późniejsze odwrócenie, co znacząco wydłuża żywotność całej powierzchni, a także pozwala zachować świeży wygląd przez lata.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 my-3">
          Jak złożyć zamówienie na tarasowe deski kompozytowe?
        </h2>
        <p className="text-gray-700 text-sm sm:text-base">
          Zamówienie deski kompozytowe na taras można złożyć w prosty sposób. Wystarczy przesłać:
        </p>
        <ul className="list-disc list-inside my-3 text-gray-700 text-sm sm:text-base">
          <li>zdjęcia miejsca inwestycji, </li>
          <li>wymiary,</li>
          <li>dane kontaktowe,</li>
        </ul>
        <p className="text-gray-700 text-sm sm:text-base">
          a zespół Drewelt przygotuje indywidualną wycenę i koncepcję. Działamy kompleksowo: od doradztwa technicznego, przez dobór materiałów, aż po montaż. Klient otrzymuje od nas pełne wsparcie na każdym etapie realizacji, a kontakt z doradcą jest szybki i rzeczowy. Cenimy sobie transparentność i jakość obsługi, dlatego każde zamówienie traktowane jest indywidualnie.
        </p>
      </section>

      <Divider className="my-6" />

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Zainspiruj się i zapytaj o budowę tarasów ogrodowych
        </h2>
        <p className="text-gray-700 text-sm sm:text-base mb-4">
          Na naszej stronie internetowej znajdziesz <a href="/galeria">galerię realizacji</a>, która pokazuje różnorodność projektów i zastosowań <strong>desek tarasowych kompozytowych</strong>. Każdy projekt to dowód na to, że praktyczność może iść w parze z eleganckim designem. <a href="/kontakt">Zachęcamy do kontaktu </a>i przesłania zapytania – doradzimy, przygotujemy ofertę oraz pomożemy stworzyć przestrzeń, która będzie cieszyć przez lata.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <Image
              alt="Taras z desek"
              src="/tarasy/belgravia.jpg"
              width={600}
              height={500}
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg ">
            <Image
              alt="Taras z desek"
              src="/tarasy/taras.jpg"
              width={600}
              height={500}
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <Image
              alt="Taras z desek"
              src="/tarasy/taras-2.jpg"
              width={600}
              height={500}
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <Image
              alt="Taras z desek"
              src="/tarasy/taras-schody.jpg"
              width={600}
              height={500}
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
