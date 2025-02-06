"use client";

import { Card } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";

export default function RoofPage() {
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
            "url('https://drewelt.pl/images/design/zadaszenie-gniezno.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
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
            src="https://drewelt.pl/images/design/zadaszenie-tarasu-wroclaw-6.webp"
            alt="Poliwęglanowe zadaszenie"
            className="rounded-lg shadow-xl object-cover w-full"
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

      <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <Image
            src="https://via.placeholder.com/150"
            alt="Jakość"
            className="mx-auto rounded-lg mb-4"
          />
          <h3 className="text-xl font-bold text-gray-800 mb-2">Jakość</h3>
          <p className="text-gray-600">
            Najwyższa jakość materiałów gwarantuje trwałość i bezpieczeństwo.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <Image
            src="https://via.placeholder.com/150"
            alt="Realizacja"
            className="mx-auto rounded-lg mb-4"
          />
          <h3 className="text-xl font-bold text-gray-800 mb-2">Realizacja</h3>
          <p className="text-gray-600">
            Szybkie i profesjonalne wykonanie każdego projektu.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <Image
            src="https://via.placeholder.com/150"
            alt="Design"
            className="mx-auto rounded-lg mb-4"
          />
          <h3 className="text-xl font-bold text-gray-800 mb-2">Design</h3>
          <p className="text-gray-600">
            Innowacyjny design, który nadaje nowoczesny wygląd Twojemu domowi.
          </p>
        </div>
      </section>

      <section className="mt-12 text-center">
        <Link
          href="/kontakt"
          className="inline-block bg-[#e9a749] text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-yellow-500 transition-colors"
        >
          Skontaktuj się z nami
        </Link>
      </section>
    </div>
  );
}
