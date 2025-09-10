"use client";

import { Card, CardHeader, CardBody } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Image } from "@heroui/image";

import DoughnutChart from "@/components/chart";

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
  ];

  const deckColors = [
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
      <Divider className="mb-6" />

      <section className="p-4 sm:p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Oferujemy deski kompozytowe
        </h2>
        <p className="text-gray-700 text-sm sm:text-base">
          Robimy wycenę, do której potrzebujemy zdjęcia danego miejsca. Na
          życzenie wykonujemy także obudowy basenów lub ścieżek.{" "}
          <strong>Do przygotowania projektu i kosztorysu</strong> potrzebujemy:
        </p>
        <ul className="list-disc list-inside mt-3 text-gray-700 text-sm sm:text-base">
          <li>Zdjęć miejsca inwestycji</li>
          <li>Wymiarów tarasu</li>
          <li>Danych kontaktowych</li>
        </ul>
      </section>

      <Divider className="my-6" />

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Dostępne kolory desek
        </h2>
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
      </section>

      <section className="my-6">
        <div className="w-full mx-auto mb-12">
          <DoughnutChart />
        </div>
      </section>

      <Divider className="my-6" />

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Zalety desek kompozytowych
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <li className="p-3 rounded-lg shadow text-sm sm:text-base">
            ✅ Odporność na wilgoć, temperaturę i promieniowanie UV
          </li>
          <li className="p-3 rounded-lg shadow text-sm sm:text-base">
            ✅ Długa żywotność i wytrzymałość na obciążenia
          </li>
          <li className="p-3 rounded-lg shadow text-sm sm:text-base">
            ✅ Brak konieczności malowania i impregnacji
          </li>
          <li className="p-3 rounded-lg shadow text-sm sm:text-base">
            ✅ Bezpieczeństwo dzięki odporności na zapalenie
          </li>
          <li className="p-3 rounded-lg shadow text-sm sm:text-base">
            ✅ 100% utylizacja i ekologia
          </li>
          <li className="p-3 rounded-lg shadow text-sm sm:text-base">
            ✅ Brak drzazg i zadarć
          </li>
        </ul>
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
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Zobacz część naszych realizacji
        </h2>

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
