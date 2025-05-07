"use client";

import { Divider } from "@heroui/divider";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import { useEffect, useState } from "react";
import BlurModal from "@/components/modal";
import { seoContentList } from "../lib/seoContent";

export default function RoofPage() {
  const cities = [
    { name: "Poznań", slug: "poznan", description: "Zadaszenia tarasów i garaży w Poznaniu, oferujące nowoczesne rozwiązania dostosowane do potrzeb każdego klienta." },
    { name: "Leszno", slug: "leszno", description: "Profesjonalne zadaszenia w Lesznie, gwarantujące trwałość i estetykę na lata." },
    { name: "Lubin", slug: "lubin", description: "Nowoczesne zadaszenia dla domów w Lubinie, które łączą funkcjonalność z eleganckim wyglądem." },
    { name: "Wrocław", slug: "wroclaw", description: "Zadaszenia tarasowe i altanowe we Wrocławiu, zapewniające komfort i ochronę przez cały rok." },
    { name: "Konin", slug: "konin", description: "Zadaszenia w Koninie – trwałe, estetyczne rozwiązania, które doskonale wpasują się w każdy krajobraz." },
    { name: "Gorzów wielkopolski", slug: "gorzow-wlkp", description: "Solidne zadaszenia w Gorzowie Wielkopolskim, które łączą nowoczesność z tradycją." },
    { name: "Zielona góra", slug: "zielona-gora", description: "Zadaszenia tarasów i garaży w Zielonej Górze, oferujące szeroki wybór materiałów i wzorów." },
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
          backgroundImage: "url(/zadaszenia_przyscienne_na_lukach/samochod.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold">
            Zadaszenia Tarasów, Wiaty Samochodowe, Altany Ogrodowe
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
            src="/zadaszenia_przyscienne_na_lukach/lubon.jpg"
          />
        </div>
        <div className="text-gray-700 dark:text-gray-300">
          <h2 className="text-2xl font-bold mb-4">Jak zamówić</h2>
          <p className="mb-4 text-lg leading-relaxed">
            Pragniemy zwrócić uwagę na najbardziej ekonomiczne wymiary naszych konstrukcji, ze względu na brak odpadów. Najkorzystniejsze cenowo wymiary:
          </p>
          <ul className="space-y-3 text-lg">
            <li className="flex items-center gap-3 bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
              <span className="text-xl">📏</span>
              <span className="font-semibold">Długość (po ścianie):</span>
              <span className="text-primary font-medium">422 / 530 / 634 / 740 / 846 cm</span>
            </li>
            <li className="flex items-center gap-3 bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
              <span className="text-xl">📏</span>
              <span className="font-semibold">Szerokość/głębokość:</span>
              <span className="text-primary font-medium">290 / 340 / 450 / 500 / 600 cm</span>
            </li>
            <li className="flex items-center gap-3 bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
              <span className="text-xl">🤝</span>
              <span className="font-semibold">Indywidualne podejście do klienta</span>
            </li>
          </ul>
        </div>
      </section>

      <Divider className="my-12" />
      <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-2">
        Działamy na terenie całej Polski
      </h1>
      <h1 className="text-xl font-semibold text-center text-gray-700 dark:text-gray-300 mt-2 mb-2">
        Najwięcej inwestycji w miastach:
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        {cities.map((city, index) => {
          const seo = seoContentList.find((item) => item.url.includes(city.slug));
          const path = seo
            ? `zadaszenia/${seo.url}`
            : `zadaszenie/zadaszenie-tarasu-${city.slug}`;

          return (
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
                  path={path}
                />
              </div>
            </div>
          );
        })}
      </div>

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
