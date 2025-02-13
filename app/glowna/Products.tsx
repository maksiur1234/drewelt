"use client";

import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Card } from "@heroui/card";
import FlipCard from "@/components/flipCard";
import "./flipCard.css";

const Products = () => {
  return (
    <div className="flex flex-col items-center px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Produkty</h1>
      <h2 className="text-2xl font-semibold mb-2">
        Jakościowe deski kompozytowe
      </h2>
      <p className="text-center text-gray-600 mb-8 max-w-xl">
        Nasze deski kompozytowe wyróżniają się najwyższą jakością wykonania oraz
        unikalnym designem, który nadaje charakter każdemu wnętrzu.
      </p>

      <div className="flex flex-col md:flex-row gap-12 mb-8">
        <FlipCard className="w-80 h-[400px]"
          frontContent={
            <Card className="w-full h-full p-4">
              <img
                alt="Produkt 1"
                className="object-cover w-full h-48 rounded-md mb-2"
                src="https://blog.stabrawa.pl/wp-content/uploads/2017/08/projektowanie-wn%C4%99trz-nauka-do%C5%9Bwiadczenie-umiej%C4%99tno%C5%9Bci-3-1024x682-2560x1920.jpg"
              />
              <p className="text-center font-medium">Projektowanie</p>
            </Card>
          }
          backContent={
            <Card className="w-full h-full p-4 flex items-center justify-center bg-gray-200">
              <p className="text-center font-medium">
                Szczegóły: Lorem ipsum dolor sit amet.
              </p>
            </Card>
          }
        />

        <FlipCard className="w-80 h-[400px]"
          frontContent={
            <Card className="w-full h-full p-4">
              <img
                alt="Produkt 2"
                className="object-cover w-full h-48 rounded-md mb-2"
                src="https://domszytynamiare.pl/upload/images/domszytynamiare_pl%201.jpg"
              />
              <p className="text-center font-medium">Tarasy</p>
            </Card>
          }
          backContent={
            <Card className="w-full h-full p-4 flex items-center justify-center bg-gray-200">
              <p className="text-center font-medium">
                Szczegóły: Krótki opis tarasów.
              </p>
            </Card>
          }
        />

        <FlipCard className="w-80 h-[400px]"
          frontContent={
            <Card className="w-full h-full p-4">
              <img
                alt="Produkt 3"
                className="object-cover w-full h-48 rounded-md mb-2"
                src="https://zogrodemnaty.pl/wp-content/uploads/2024/06/stale-zadaszenie-tarasu-2.jpeg"
              />
              <p className="text-center font-medium">Zadaszenia</p>
            </Card>
          }
          backContent={
            <Card className="w-full h-full p-4 flex items-center justify-center bg-gray-200">
              <p className="text-center font-medium">
                Szczegóły: Informacje o zadaszeniach.
              </p>
            </Card>
          }
        />
      </div>

      <Button as={Link} className="px-8 py-3" color="warning" href="/produkty">
        Zobacz produkty
      </Button>
    </div>
  );
};

export default Products;
