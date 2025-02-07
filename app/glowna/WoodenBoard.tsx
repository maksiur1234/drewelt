"use client";

import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Card } from "@heroui/card";

const WoodenBoard = () => {
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
        <Card className="w-80 p-4">
          <img
            src="https://blog.stabrawa.pl/wp-content/uploads/2017/08/projektowanie-wn%C4%99trz-nauka-do%C5%9Bwiadczenie-umiej%C4%99tno%C5%9Bci-3-1024x682-2560x1920.jpg"
            alt="Produkt 1"
            className="object-cover w-full h-48 rounded-md mb-2"
          />
          <p className="text-center font-medium">Projektowanie</p>
        </Card>
        <Card className="w-80 p-4">
          <img
            src="https://domszytynamiare.pl/upload/images/domszytynamiare_pl%201.jpg"
            alt="Produkt 2"
            className="object-cover w-full h-48 rounded-md mb-2"
          />
          <p className="text-center font-medium">Tarasy</p>
        </Card>
        <Card className="w-80 p-4">
          <img
            src="https://zogrodemnaty.pl/wp-content/uploads/2024/06/stale-zadaszenie-tarasu-2.jpeg"
            alt="Produkt 3"
            className="object-cover w-full h-48 rounded-md mb-2"
          />
          <p className="text-center font-medium">Zadaszenia</p>
        </Card>
      </div>

      <Button as={Link} href="/produkty" color="warning" className="px-8 py-3">
        Zobacz produkty
      </Button>
    </div>
  );
};

export default WoodenBoard;
