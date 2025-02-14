"use client";

import { Card, CardHeader, CardBody } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Image } from "@heroui/image";

import DoughnutChart from "@/components/chart";

export default function RoofPage() {
  const deckingBoards = [
    {
      name: "Deska kompozytowa WPC 3m",
      description:
        "Wood plastics composit dwustronnie ryflowana o długościach 3 metrów. Deska do wykonywania tarasów ogrodowych, obudowy basenów, mola, ścieżki piesze.",
      dimensions: "13,5 cm szer. / 25 mm wys. / 3 m dł.",
      price: "32,00 zł/mb",
      image: "https://drewelt.pl/images/galerie/32/taras-deska-1.webp",
    },
    {
      name: "Deska kompozytowa WPC 4m",
      description:
        "Wood plastics composit dwustronnie ryflowana o długościach 4 metrów. Deska do wykonywania tarasów ogrodowych, obudowy basenów, mola, ścieżki piesze.",
      dimensions: "13,5 cm szer. / 25 mm wys. / 4 m dł.",
      price: "32,00 zł/mb",
      image: "https://drewelt.pl/images/galerie/35/taras-deska-4.webp",
    },
    {
      name: "Legar kompozytowy WPC",
      description:
        "Legar kompozytowy WPC do wykonywania konstrukcji podtarasowej.",
      dimensions: "30 mm wys. / 40 mm szer. / 4 m dł.",
      price: "18 zł/mb",
      image: "https://drewelt.pl/images/design/legar.webp",
    },
  ];

  const accessories = [
    {
      name: "Klips plastikowy + wkręt ze stali nierdzewnej",
      description:
        "Klipsy plastikowe wraz z wkrętem ze stali nierdzewnej do wykonywania połączeń desek. Połączenie nie ingerujące w deskę (nie trzeba wiercić), co oznacza, że można po pewnym czasie odwrócić deskę na inne ryflowanie.",
      price: "1,50 zł/szt",
      image: "https://drewelt.pl/images/design/klips.webp",
    },
    {
      name: "Listwa kątowa",
      description:
        "Listwa kątowa montowana na obrzeżu tarasu lub wykończeń schodów.",
      dimensions: "53 mm wys. / 41 mm gr. / 3 m dł.",
      price: "13,30 zł/mb",
      image: "https://drewelt.pl/images/design/listwa.webp",
    },
    {
      name: "Deska cokołowa",
      description:
        "Deska cokołowa montowana obwodowo na widocznej części tarasu. W pełni zakrywa legar i deskę.",
      dimensions: "60 mm wys. / 12 mm gr. / 3 m dł.",
      price: "13,30 zł/mb",
      image: "https://drewelt.pl/images/design/cokol.webp",
    },
    {
      name: "Zaślepka plastikowa",
      description:
        "Zaślepka plastikowa służy do zaślepienia widocznych końców deski jako alternatywa dla listwy cokołowej.",
      price: "2,00 zł",
      image: "https://drewelt.pl/images/design/zaslepka.webp",
    },
  ];

  const deckColors = [
    {
      name: "Ciemny szary",
      color: "#7a7b78",
      image: "https://drewelt.pl/images/galerie/31/ciemny-szary.webp",
    },
    {
      name: "Grafit",
      color: "#41424C",
      image: "https://drewelt.pl/images/galerie/31/grafit.webp",
    },
    {
      name: "Jasny Brąz",
      color: "#C19A6B",
      image: "https://drewelt.pl/images/galerie/31/jasny-brz.webp",
    },
    {
      name: "Średni Brąz",
      color: "#948379",
      image: "https://drewelt.pl/images/galerie/31/redni-brz.webp",
    },
    {
      name: "Ciemny Brąz",
      color: "#676055",
      image: "https://drewelt.pl/images/galerie/31/ciemny-brz.webp",
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
        <div className="flex flex-wrap justify-center gap-4">
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
        <div className="w-full sm:w-3/4 lg:w-1/2 mx-auto">
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
          Deski kompozytowe WPC
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {deckingBoards.map((product, index) => (
            <Card key={index} className="shadow-lg">
              <Image
                alt={product.name}
                className="w-full h-32 sm:h-40 object-cover rounded-t-lg"
                src={product.image}
              />
              <CardHeader className="text-lg font-semibold text-gray-800 p-3">
                {product.name}
              </CardHeader>
              <CardBody className="p-3">
                <p className="text-gray-700 text-sm">{product.description}</p>
                {product.dimensions && (
                  <p className="text-xs text-gray-500 mt-1">
                    📏 {product.dimensions}
                  </p>
                )}
                <p className="text-lg font-semibold text-gray-800 mt-2">
                  💰 {product.price}
                </p>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      <Divider className="my-6" />

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Akcesoria montażowe
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {accessories.map((product, index) => (
            <Card key={index} className="shadow-lg">
              <Image
                alt={product.name}
                className="w-full h-32 sm:h-40 object-cover rounded-t-lg"
                src={product.image}
              />
              <CardHeader className="text-lg font-semibold text-gray-800 p-3">
                {product.name}
              </CardHeader>
              <CardBody className="p-3">
                <p className="text-gray-700 text-sm">{product.description}</p>
                {product.dimensions && (
                  <p className="text-xs text-gray-500 mt-1">
                    📏 {product.dimensions}
                  </p>
                )}
                <p className="text-lg font-semibold text-gray-800 mt-2">
                  💰 {product.price}
                </p>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      <Divider className="my-6" />
    </div>
  );
}
