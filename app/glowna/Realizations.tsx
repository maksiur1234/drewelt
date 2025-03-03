"use client";

import { Accordion, AccordionItem } from "@heroui/accordion";
import Image from "next/image";

const Realizations = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 p-8">
      <Image
        alt="Nasze realizacje"
        className="w-full md:w-1/2 h-auto object-cover rounded-lg shadow-md"
        src="/obrazki/zadaszenie na belce.jpg"
        width={1920}
        height={100}
      />
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center">
        <p className="text-2xl font-bold mb-4">
          Prawdziwa inspiracja do tworzenia
        </p>
        <p className="text-gray-700 mb-6">
          Od lat pasjonujemy się pracą z drewnem, tworząc unikalne projekty,
          które łączą tradycję z nowoczesnością. Poznaj nasze realizacje i
          przekonaj się, jak nasze rozwiązania mogą odmienić Twoje wnętrze.
        </p>
        <Accordion variant="bordered">
          <AccordionItem
            aria-label="Jak wybrać drewno?"
            title="Jak wybrać drewno?"
          >
             Nie musisz sobie zaprzątać głowy tym pytaniem , ponieważ stosujemy tylko najwyżej jakości drewno BSH , które się nie skręca i nie rozsycha tak jak drewno lite.
          </AccordionItem>
          <AccordionItem
            aria-label="Ile trwa wykonanie projektu?"
            title="Ile trwa wykonanie projektu?"
          >
            Standardowe przydomowe inwestycje wykonujemy w okresie 4-6 tygodni od dnia wpłaty zaliczki, inne większe zlecenia w zależności od sezonu czasem muszą poczekać trochę dłużej.
          </AccordionItem>
          <AccordionItem
            aria-label="Jak wygląda montaż?"
            title="Jak wygląda montaż?"
          >
            Montaż zadaszenia trwa przeważnie jeden dzień , jedynie przy większych odległościach i znacznych rozmiarach może się przedłużyć.
            Kilka dni przed kontaktujemy się w celu ustalenia dokładnej daty, dzień przed potwierdzamy przyjazd. Jeżeli wszystko jest ustalone obecność klienta nie jest konieczna.
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Realizations;
