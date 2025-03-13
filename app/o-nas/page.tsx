"use client";

import { Card, CardBody } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import { useEffect, useState } from "react";

import BlurModal from "@/components/modal";

export default function AboutPage() {

  return (
    <div className="container mx-auto px-6 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6">
          Życie toczy się wokół drewna
        </h1>
        <Divider className="mb-8" />
      </header>

      <section className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <div className="md:w-1/2">
          <Image
            alt="O nas"
            className="rounded-lg shadow-xl object-cover w-full h-full"
            src="https://drewelt.pl/images/galerie/21/najnowsze-realizacje7.webp"
          />
        </div>
        <div className="md:w-1/2 text-gray-600 text-base md:text-lg">
          <p className="mb-4">
            Firma Drewelt świadczy usługi produkcyjne i montażowe drewnianych
            konstrukcji tarasowych oraz wiat już od 2014 roku. <strong>Realizujemy zlecenia na terenie całego kraju!</strong>
          </p>
          <p className="mb-4">
            Zapewniamy uczciwą i przejrzystą współpracę. Jesteśmy elastyczni,
            dlatego bez obaw możesz nam powierzyć każdy projekt z zakresu naszej
            działalności. W sprzedaży posiadamy również deski tarasowe
            kompozytowe w pięciu kolorach wraz z całym osprzętem montażowym.
          </p>
          <p className="mb-4">
            Zaufaj doświadczonym specjalistom, którzy łączą nowoczesność z
            tradycją oraz dbają o detale na każdym etapie realizacji.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <Card className="p-6 shadow-2xl rounded-lg">
          <p className="text-gray-600 text-base md:text-lg mb-4">
            Od wielu lat realizujemy zlecenia z zakresu produkcji konstrukcji
            oraz pokryć dachowych. Wykorzystujemy sprawdzone materiały, na które
            udzielamy 2-letniej gwarancji. Nasza siedziba mieści się w Rakowni,
            zaledwie 15 km od Poznania, co pozwala nam szybko reagować na
            potrzeby klientów.
          </p>
          <CardBody className="flex flex-col md:flex-row items-center justify-center gap-4"></CardBody>
        </Card>
      </section>

      <section className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 text-gray-600 text-base md:text-lg">
          <p className="mb-4">
            Nasze konstrukcje są impregnowane i dwukrotnie malowane na wybrany
            kolor, co gwarantuje ich trwałość oraz estetykę. Każdy projekt
            traktujemy indywidualnie, dbając o unikalny design i funkcjonalność.
          </p>
          <p className="mb-4">
            Naszym celem jest tworzenie przestrzeni, które łączą nowoczesność z
            tradycyjnym rzemiosłem, dzięki czemu Twoje wnętrze nabiera
            wyjątkowego charakteru.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            alt="Nasze realizacje"
            className="rounded-lg shadow-xl object-cover w-full"
            src="/zadaszenia_na_lukach/IMG_20160518_161532.jpg"
            style={{ maxHeight: "650px" }}
          />
        </div>
      </section>
    </div>
  );
}
