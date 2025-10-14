"use client";

import { Divider } from "@heroui/divider";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import { useEffect, useState } from "react";
import BlurModal from "@/components/modal";
import { seoContentList } from "../lib/seoContent";

export default function Page() {
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

      <section>
          <h2 className="text-2xl font-semibold text-gray-800">Deska kompozytowa zastosowanie – zastosowanie i estetyka</h2>
          <p className="text-base leading-7 text-gray-700">
            Z <a href="/o-nas">Drewelt</a> <strong>budowa zadaszenia tarasu z drewna</strong> to nie tylko praktyczne rozwiązanie, ale także sposób na podkreślenie charakteru Twojej przestrzeni wypoczynkowej. Nasze konstrukcje powstają z klejonego warstwowo drewna BSH, które cechuje się wyjątkową odpornością na wilgoć, zmienne temperatury i obciążenia mechaniczne. Dzięki temu <strong>zadaszenie ogrodowe z drewna</strong> zachowuje stabilność, estetykę i funkcjonalność przez wiele sezonów – bez konieczności częstych konserwacji. Zainspiruj się naszymi <a href="/galeria">realizacjami</a> i zamów projekt dopasowany do Twojego tarasu – <a href="/kontakt">skontaktuj się z nami</a>, a przygotujemy dla Ciebie indywidualną ofertę.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800">Drewniane zadaszenia tarasu – projekty na wymiar od Drewelt</h2>
          <p className="text-base leading-7 text-gray-700">
            Drewelt oferuje kompleksowe rozwiązania w zakresie <strong>konstrukcji</strong>, jakimi są <strong>zadaszenia tarasu drewna. </strong>Nasze projekty skierowane są do Klientów z całej Polski. Wyróżnia je lekka, nowoczesna forma, pozbawiona dodatkowych wsporników. Takie <strong>zabudowy tarasów drewniane </strong>to rozwiązanie, które zapewnia pełną przestrzeń użytkową pod zadaszeniem, bez kompromisów w zakresie wygody czy eleganckiego designu. Poza tym każdą koncepcję realizujemy na zamówienie. <strong>Drewniane zadaszenie tarasu na wymiar</strong> uwzględnia:
          </p>
          <ul className="list-disc list-inside my-4 text-base text-gray-700">
            <li>układ budynku,</li>
            <li>charakter ogrodu,</li>
            <li>preferencje estetyczne Klienta.</li>
          </ul>
          <p className="text-base leading-7 text-gray-700">
            Dzięki temu konstrukcja idealnie wpisuje się w przestrzeń, tworząc funkcjonalne i przytulne miejsce do wypoczynku. <a href="/kontakt">Skontaktuj się z nami,</a> aby zamówić indywidualny projekt <strong>zadaszenia drewnianego</strong> i otrzymać bezpłatną wycenę.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800">Zadaszenie altany ogrodowej Drewelt – więcej niż tylko daszek</h2>
          <p className="text-base leading-7 text-gray-700">
            Nasza oferta obejmuje również kompleksowe <strong><a href="/altany-ogrodowe">zadaszenia altany ogrodowej</a></strong>, które pozwalają stworzyć funkcjonalne strefy wypoczynku, niezależnie od warunków pogodowych. Wykonujemy je <strong>z drewna i poliwęglanu</strong>. Drewno klejone BSH, które stosujemy, zapewnia trwałość i elegancki wygląd, a poliwęglan komorowy o grubości 10 mm chroni przed deszczem, słońcem i promieniowaniem UV.  Ponadto jest on dostępny w naszej ofercie w wersji przezroczystej, mlecznej lub przydymionej. Z <a href="/o-nas">Drewelt </a>stworzysz przestrzeń, która łączy praktyczność z nowoczesnym designem – idealna do wypoczynku, spotkań i codziennego relaksu.
          </p>
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
      <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-2">
        Działamy na terenie całej Polski
      </h2>
      <h2 className="text-xl font-semibold text-center text-gray-700 dark:text-gray-300 mt-2 mb-2">
        Najwięcej inwestycji w miastach:
      </h2>

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
        <h2 className="text-2xl font-semibold text-gray-800">Dlaczego warto wybrać zadaszenie drewniane Drewelt?</h2>
        <p className="text-base leading-7 text-gray-700">
          Drewelt to firma z ponad 10-letnim doświadczeniem w projektowaniu i montażu konstrukcji zewnętrznych. Specjalizujemy się w <strong>budowie zadaszenia tarasu z drewna</strong>, oferując rozwiązania dopasowane do indywidualnych potrzeb Klientów z całego kraju. Każdy projekt realizujemy kompleksowo – od pomiaru i wizualizacji, przez produkcję, aż po profesjonalny montaż. Nasze <strong>daszki na taras drewniane</strong> są dwukrotnie impregnowane i malowane, co zapewnia im trwałość oraz odporność na warunki atmosferyczne. Jeśli interesuje Cię szybka realizacja i montaż – bez ukrytych kosztów, z pełnym wsparciem technicznym – <a href="/kontakt">skontaktuj się z nami</a>.  Zaprojektuj z <a href="/o-nas">Drewelt</a> swoje wymarzone zadaszenie – funkcjonalne, trwałe, piękne.
        </p>

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
