'use client'

import { Card, CardHeader, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import { Divider } from "@heroui/divider";

export default function RoofPage() {
  const deckingBoards = [
    {
      name: "Deska kompozytowa WPC 3m",
      description: "Wood plastics composit dwustronnie ryflowana o długości 3 metrów.",
      dimensions: "13,5 cm szer. / 25 mm wys. / 3 m dł.",
      price: "32,00 zł/mb",
      image: "https://drewelt.pl/images/galerie/32/taras-deska-1.webp",
    },
    {
      name: "Deska kompozytowa WPC 4m",
      description: "Wood plastics composit dwustronnie ryflowana o długości 4 metrów.",
      dimensions: "13,5 cm szer. / 25 mm wys. / 4 m dł.",
      price: "32,00 zł/mb",
      image: "https://drewelt.pl/images/galerie/35/taras-deska-4.webp",
    },
    {
      name: "Legar kompozytowy WPC",
      description: "Legar kompozytowy WPC do wykonywania konstrukcji podtarasowej.",
      dimensions: "30 mm wys. / 40 mm szer. / 4 m dł.",
      price: "18 zł/mb",
      image: "https://drewelt.pl/images/design/legar.webp",
    },
  ];

  const accessories = [
    {
      name: "Klips plastikowy + wkręt ze stali nierdzewnej",
      description: "Klipsy plastikowe wraz z wkrętem ze stali nierdzewnej do mocowania desek.",
      price: "1,50 zł/szt",
      image: "https://drewelt.pl/images/design/klips.webp",
    },
    {
      name: "Listwa kątowa",
      description: "Montowana na obrzeżu tarasu lub schodach.",
      dimensions: "53 mm wys. / 41 mm gr. / 3 m dł.",
      price: "13,30 zł/mb",
      image: "https://drewelt.pl/images/design/listwa.webp",
    },
    {
      name: "Deska cokołowa",
      description: "Deska cokołowa montowana obwodowo na widocznej części tarasu.",
      dimensions: "60 mm wys. / 12 mm gr. / 3 m dł.",
      price: "13,30 zł/mb",
      image: "https://drewelt.pl/images/design/cokol.webp",
    },
    {
      name: "Zaślepka plastikowa",
      description: "Służy do zaślepienia widocznych końców deski.",
      price: "2,00 zł",
      image: "https://drewelt.pl/images/design/zaslepka.webp",
    },
  ];

  const deckColors = [
    { name: "Szary", color: "#A0A0A0" },
    { name: "Ciemny Szary", color: "#666666" },
    { name: "Jasny Brąz", color: "#C19A6B" },
    { name: "Średni Brąz", color: "#8B5A2B" },
    { name: "Ciemny Brąz", color: "#5D3A1A" },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
        Tarasy z desek kompozytowych WPC
      </h1>
      <Divider className="mb-8" />

      <section className="bg-gray-50 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Oferujemy deski kompozytowe</h2>
        <p className="text-gray-700">
          Robimy wycenę, do której potrzebujemy zdjęcia danego miejsca. Na życzenie wykonujemy także obudowy basenów lub ścieżek.  
          <strong>Do przygotowania projektu i kosztorysu</strong> potrzebujemy:
        </p>
        <ul className="list-disc list-inside mt-4 text-gray-700">
          <li>Zdjęć miejsca inwestycji</li>
          <li>Wymiarów tarasu</li>
          <li>Danych kontaktowych</li>
        </ul>
      </section>

      <Divider className="my-8" />

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Dostępne kolory desek</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {deckColors.map((color, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className="w-16 h-16 rounded-lg shadow-lg"
                style={{ backgroundColor: color.color }}
              ></div>
              <p className="text-gray-700 mt-2 font-medium">{color.name}</p>
            </div>
          ))}
        </div>
      </section>

      <Divider className="my-8" />

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Zalety desek kompozytowych</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li className="bg-gray-100 p-4 rounded-lg shadow">✅ Odporność na wilgoć, temperaturę i promieniowanie UV</li>
          <li className="bg-gray-100 p-4 rounded-lg shadow">✅ Długa żywotność i wytrzymałość na obciążenia</li>
          <li className="bg-gray-100 p-4 rounded-lg shadow">✅ Brak konieczności malowania i impregnacji</li>
          <li className="bg-gray-100 p-4 rounded-lg shadow">✅ Bezpieczeństwo dzięki odporności na zapalenie</li>
          <li className="bg-gray-100 p-4 rounded-lg shadow">✅ 100% utylizacja i ekologia</li>
          <li className="bg-gray-100 p-4 rounded-lg shadow">✅ Brak drzazg i zadarć</li>
        </ul>
      </section>

      <Divider className="my-8" />

      

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Deski kompozytowe WPC</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deckingBoards.map((product, index) => (
            <Card key={index} className="shadow-lg">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-t-lg" />
              <CardHeader className="text-lg font-semibold text-gray-800">{product.name}</CardHeader>
              <CardBody>
                <p className="text-gray-700">{product.description}</p>
                {product.dimensions && <p className="text-sm text-gray-500 mt-2">📏 {product.dimensions}</p>}
                <p className="text-lg font-semibold text-gray-800 mt-2">💰 {product.price}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      <Divider className="my-8" />

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Akcesoria montażowe</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {accessories.map((product, index) => (
            <Card key={index} className="shadow-lg">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-t-lg" />
              <CardHeader className="text-lg font-semibold text-gray-800">{product.name}</CardHeader>
              <CardBody>
                <p className="text-gray-700">{product.description}</p>
                {product.dimensions && <p className="text-sm text-gray-500 mt-2">📏 {product.dimensions}</p>}
                <p className="text-lg font-semibold text-gray-800 mt-2">💰 {product.price}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      <Divider className="my-8" />
    </div>
  );
}
