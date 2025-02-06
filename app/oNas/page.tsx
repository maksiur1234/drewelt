'use client'

import BlurModal from "@/components/modal";
import { Card, CardBody } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import { useEffect, useState } from "react";

export default function AboutPage() {
  const cities = [
    { name: "Poznań", description: "Poznań opis." },
    { name: "Leszno", description: "Leszno opis." },
    { name: "Lubin", description: "Lubin opis." },
    { name: "Wrocław", description: "Wrocławopis." },
    { name: "Konin", description: "Konin opis." },
    { name: "Gorzów Wielkopolski", description: "Gorzów Wlkp. opis." },
    { name: "Zielona Góra", description: "Zielona Góra opis." }
  ]
  
  const [visibleCities, setVisibleCities] = useState<number[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < cities.length) {
      const timer = setTimeout(() => {
        setVisibleCities(prev => [...prev, currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 10); 

      return () => clearTimeout(timer); 
    }
  }, [currentIndex]);

  return (
    <div className="container mx-auto px-6 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
          Życie toczy się wokół drewna
        </h1>
        <Divider className="mb-8" />
      </header>

      <section className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <div className="md:w-1/2">
          <Image
            src="https://drewelt.pl/images/galerie/21/najnowsze-realizacje7.webp"
            alt="O nas"
            className="rounded-lg shadow-xl object-cover w-full h-full"
          />
        </div>
        <div className="md:w-1/2 text-gray-600 text-lg">
          <p className="mb-4">
            Firma Drewelt świadczy usługi produkcyjne i montażowe drewnianych konstrukcji tarasowych oraz wiat już od 2014 roku. Jej właścicielem jest Piotr Wiśniewski. Realizujemy zlecenia na terenie całego kraju, ze szczególnym uwzględnieniem Poznania i województwa wielkopolskiego.
          </p>
          <p className="mb-4">
            Zapewniamy uczciwą i przejrzystą współpracę. Jesteśmy elastyczni, dlatego bez obaw możesz nam powierzyć każdy projekt z zakresu naszej działalności. W sprzedaży posiadamy również deski tarasowe kompozytowe w pięciu kolorach wraz z całym osprzętem montażowym.
          </p>
          <p className="mb-4">
            Zaufaj doświadczonym specjalistom, którzy łączą nowoczesność z tradycją oraz dbają o detale na każdym etapie realizacji.
          </p>
          <Link
            isExternal
            href="https://drewelt.pl/images/design/warunki-gwarancji-drewelt.pdf"
            underline="always"
            className="text-blue-600 hover:underline inline-block mt-2"
          >
            Poznaj warunki gwarancji
          </Link>
        </div>
      </section>

      <section className="mb-12">
        <Card className="p-6 shadow-2xl rounded-lg">
          <p className="text-gray-600 text-lg mb-4">
            Od wielu lat realizujemy zlecenia z zakresu produkcji konstrukcji oraz pokryć dachowych. Wykorzystujemy sprawdzone materiały, na które udzielamy 2-letniej gwarancji. Nasza siedziba mieści się w Rakowni, zaledwie 15 km od Poznania, co pozwala nam szybko reagować na potrzeby klientów.
          </p>
          <CardBody className="flex flex-row items-center justify-center space-x-8">
          {cities.map((city, index) => (
            <div key={index}>
              <div
                className="px-4 py-2 rounded-lg font-medium transition-all duration-500 ease-in-out whitespace-nowrap"
                style={{
                  opacity: visibleCities.includes(index) ? 1 : 0,
                  transform: visibleCities.includes(index) 
                    ? 'translateY(0)' 
                    : `translateY(${index % 2 === 0 ? '10px' : '-10px'})`,
                  transitionDelay: `${index * 0.3}s`
                }}
              >
                <BlurModal name={city.name} description={city.description} label={city.name} />
              </div>
            </div>
          ))}
          </CardBody>
        </Card>
      </section>

      <section className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 text-gray-600 text-lg">
          <p className="mb-4">
            Nasze konstrukcje są impregnowane i dwukrotnie malowane na wybrany kolor, co gwarantuje ich trwałość oraz estetykę. Każdy projekt traktujemy indywidualnie, dbając o unikalny design i funkcjonalność.
          </p>
          <p className="mb-4">
            Naszym celem jest tworzenie przestrzeni, które łączą nowoczesność z tradycyjnym rzemiosłem, dzięki czemu Twoje wnętrze nabiera wyjątkowego charakteru.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            src="https://drewelt.pl/images/galerie/21/najnowsze-realizacje7.webp"
            alt="Nasze realizacje"
            className="rounded-lg shadow-xl object-cover w-full"
            style={{ maxHeight: "650px" }}
          />
        </div>
      </section>
    </div>
  );
}
