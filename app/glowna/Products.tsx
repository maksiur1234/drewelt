"use client";

import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Card } from "@heroui/card";
import Image from "next/image";

import FlipCard from "@/components/flipCard";

import "./flipCard.css";

const Products = () => {
  return (
    <div className="flex flex-col items-center px-6 py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-6 text-center">
        <span className="text-[#e9a749]">Nasze</span> Produkty
      </h1>
      <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">
        Jakościowe deski kompozytowe
      </h2>
      <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
        Nasze deski kompozytowe wyróżniają się najwyższą jakością wykonania oraz
        unikalnym designem, który nadaje charakter każdemu wnętrzu. Wybierz
        spośród naszych produktów, które łączą elegancję z funkcjonalnością.
        Oferujemy rozwiązania idealne zarówno do ogrodów, tarasów, jak i
        przestrzeni komercyjnych.
      </p>

      <div className="flex flex-col md:flex-row gap-12 mb-12 justify-center items-center">
        <FlipCard
          backContent={
            <Card className="w-full h-full p-6 flex items-center justify-center bg-[#e9a749] text-white">
              <p className="text-center font-medium">
                <strong>Szczegóły:</strong> Nasze usługi projektowe to
                gwarancja, że Twój taras będzie idealnie dopasowany do Twoich
                potrzeb. Przedstawiamy wyjątkowe projekty, które łączą estetykę
                i funkcjonalność.
              </p>
            </Card>
          }
          className="w-80 h-[400px] transition-all hover:scale-105"
          frontContent={
            <Card className="w-full h-full p-4 border-2 border-[#e9a749] rounded-lg shadow-xl">
              <Image
                alt="Produkt 1"
                className="object-cover w-full h-48 rounded-md mb-2"
                src="https://blog.stabrawa.pl/wp-content/uploads/2017/08/projektowanie-wn%C4%99trz-nauka-do%C5%9Bwiadczenie-umiej%C4%99tno%C5%9Bci-3-1024x682-2560x1920.jpg"
                width={600}
                height={600}
              />
              <p className="text-center font-medium text-gray-900">
                Projektowanie
              </p>
            </Card>
          }
        />

        <FlipCard
          backContent={
            <Card className="w-full h-full p-6 flex items-center justify-center bg-[#e9a749] text-white">
              <p className="text-center font-medium">
                <strong>Szczegóły:</strong> Nasze tarasy to idealne połączenie
                estetyki z trwałością. Wykonujemy tarasy, które zmieniają
                przestrzeń w miejsce relaksu.
              </p>
            </Card>
          }
          className="w-80 h-[400px] transition-all hover:scale-105"
          frontContent={
            <Card className="w-full h-full p-4 border-2 border-[#e9a749] rounded-lg shadow-xl">
              <Image
                alt="Produkt 2"
                className="object-cover w-full h-48 rounded-md mb-2"
                src="https://domszytynamiare.pl/upload/images/domszytynamiare_pl%201.jpg"
                width={600}
                height={600}
              />
              <p className="text-center font-medium text-gray-900">Tarasy</p>
            </Card>
          }
        />

        <FlipCard
          backContent={
            <Card className="w-full h-full p-6 flex items-center justify-center bg-[#e9a749] text-white">
              <p className="text-center font-medium">
                <strong>Szczegóły:</strong> Zadaszenia chronią Twój taras przed
                warunkami atmosferycznymi. Gwarantują komfort przez cały rok,
                niezależnie od pogody.
              </p>
            </Card>
          }
          className="w-80 h-[400px] transition-all hover:scale-105"
          frontContent={
            <Card className="w-full h-full p-4 border-2 border-[#e9a749] rounded-lg shadow-xl">
              <Image
                alt="Produkt 3"
                className="object-cover w-full h-48 rounded-md mb-2"
                src="https://zogrodemnaty.pl/wp-content/uploads/2024/06/stale-zadaszenie-tarasu-2.jpeg"
                width={600}
                height={600}
              />
              <p className="text-center font-medium text-gray-900">
                Zadaszenia
              </p>
            </Card>
          }
        />
      </div>

      <Button
        as={Link}
        className="px-8 py-3 bg-[#e9a749] text-white font-semibold text-lg rounded-md shadow-md hover:bg-[#d79e41]"
        href="/produkty"
      >
        Zobacz wszystkie produkty
      </Button>
    </div>
  );
};

export default Products;
