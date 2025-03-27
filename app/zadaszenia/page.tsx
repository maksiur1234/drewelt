"use client";

import { Divider } from "@heroui/divider";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import { useEffect, useState } from "react";
import BlurModal from "@/components/modal";

export default function RoofPage() {
  const cities = [
    { name: "Poznań", description: "Zadaszenia tarasów i garaży w Poznaniu, oferujące nowoczesne rozwiązania dostosowane do potrzeb każdego klienta." },
    { name: "Leszno", description: "Profesjonalne zadaszenia w Lesznie, gwarantujące trwałość i estetykę na lata." },
    { name: "Lubin", description: "Nowoczesne zadaszenia dla domów w Lubinie, które łączą funkcjonalność z eleganckim wyglądem." },
    { name: "Wrocław", description: "Zadaszenia tarasowe i altanowe we Wrocławiu, zapewniające komfort i ochronę przez cały rok." },
    { name: "Konin", description: "Zadaszenia w Koninie – trwałe, estetyczne rozwiązania, które doskonale wpasują się w każdy krajobraz." },
    { name: "Gorzów Wielkopolski", description: "Solidne zadaszenia w Gorzowie Wielkopolskim, które łączą nowoczesność z tradycją." },
    { name: "Zielona Góra", description: "Zadaszenia tarasów i garaży w Zielonej Górze, oferujące szeroki wybór materiałów i wzorów." },
  ];  

  const [visibleCities, setVisibleCities] = useState<number[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < cities.length) {
      const timer = setTimeout(() => {
        setVisibleCities((prev) => [...prev, currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 10);

      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
        Nowoczesne zadaszenia
      </h1>
      <Divider className="mb-8" />
      <section
        className="relative h-[500px] md:h-[700px] flex items-center justify-center bg-cover bg-center rounded-lg shadow-xl"
        style={{
          backgroundImage:
            "url(/zadaszenia_na_lukach/InkedIMG_20200117_135409_LI.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold">
            Zadaszenia Altan, Garaży i Tarasów
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Innowacyjne rozwiązania łączące tradycję z nowoczesnością
          </p>
        </div>
      </section>

      <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <Image
            alt="Poliwęglanowe zadaszenie"
            className="rounded-lg shadow-xl object-cover w-full"
            src="/zadaszenia_na_lukach/20221129_122737.jpg"
          />
        </div>
        <div className="text-gray-700">
          <h2 className="text-2xl font-bold mb-4">O naszej ofercie</h2>
          <p className="mb-4 text-lg leading-relaxed">
            Zajmujemy się produkcją i montażem zadaszeń tarasowych, garażowych
            oraz altanowych. Wykorzystujemy najwyższej jakości materiały, aby
            zapewnić trwałość i estetykę każdej konstrukcji.
          </p>
          <ul className="list-disc list-inside text-lg">
            <li>Nowoczesne technologie montażu</li>
            <li>Wysoka jakość materiałów</li>
            <li>Indywidualne podejście do klienta</li>
          </ul>
        </div>
      </section>

      <Divider className="my-12" />
      <h1 className="font-weight-700">Działamy na terenie miast</h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        
        {cities.map((city, index) => (
              <div key={index}>
                <div
                  className="px-4 py-2 rounded-lg font-medium transition-all duration-500 ease-in-out whitespace-nowrap"
                  style={{
                    opacity: visibleCities.includes(index) ? 1 : 0,
                    transform: visibleCities.includes(index)
                      ? "translateY(0)"
                      : `translateY(${index % 2 === 0 ? "10px" : "-10px"})`,
                    transitionDelay: `${index * 0.3}s`,
                  }}
                >
                  <BlurModal
                    description={city.description}
                    label={city.name}
                    name={city.name}
                  />
                </div>
              </div>
            ))}
      </div>
     

      <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <Image
            alt="Jakość"
            className="mx-auto rounded-lg mb-4"
            src="https://via.placeholder.com/150"
          />
          <h3 className="text-xl font-bold text-gray-800 mb-2">Jakość</h3>
          <p className="text-gray-600">
            Najwyższa jakość materiałów gwarantuje trwałość i bezpieczeństwo.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <Image
            alt="Realizacja"
            className="mx-auto rounded-lg mb-4"
            src="https://via.placeholder.com/150"
          />
          <h3 className="text-xl font-bold text-gray-800 mb-2">Realizacja</h3>
          <p className="text-gray-600">
            Szybkie i profesjonalne wykonanie każdego projektu.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <Image
            alt="Design"
            className="mx-auto rounded-lg mb-4"
            src="https://via.placeholder.com/150"
          />
          <h3 className="text-xl font-bold text-gray-800 mb-2">Design</h3>
          <p className="text-gray-600">
            Innowacyjny design, który nadaje nowoczesny wygląd Twojemu domowi.
          </p>
        </div>
      </section>

      <section className="mt-12 text-center">
        <Link
          className="inline-block bg-[#e9a749] text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-yellow-500 transition-colors"
          href="/kontakt"
        >
          Skontaktuj się z nami
        </Link>
      </section>
    </div>
  );
}
