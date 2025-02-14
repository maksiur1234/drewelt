"use client";

import { Accordion, AccordionItem } from "@heroui/accordion";
import Image from "next/image";

const Realizations = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 p-8">
      <Image
        alt="Nasze realizacje"
        className="w-full md:w-1/2 h-auto object-cover rounded-lg shadow-md"
        src="https://drewelt.pl/images/galerie/38/11BIOCLIMATIC.webp"
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
            aria-label="Jak dobrać drewno?"
            title="Jak dobrać drewno?"
          >
            Wybór odpowiedniego gatunku drewna to klucz do trwałości i estetyki
            Twojego projektu. Doradzamy, które rodzaje drewna najlepiej sprawdzą
            się w konkretnych warunkach, zarówno wewnątrz, jak i na zewnątrz.
          </AccordionItem>
          <AccordionItem
            aria-label="Ile trwa wykonanie projektu?"
            title="Ile trwa wykonanie projektu?"
          >
            Nasze projekty są realizowane w różnych ramach czasowych – od kilku
            tygodni dla mniejszych zleceń, do kilku miesięcy przy kompleksowych
            przedsięwzięciach. Każdy etap jest dokładnie planowany, aby sprostać
            oczekiwaniom naszych klientów.
          </AccordionItem>
          <AccordionItem
            aria-label="Czy wykonujemy prace dodatkowe?"
            title="Czy wykonujemy prace dodatkowe?"
          >
            Tak, oferujemy szeroki zakres usług dodatkowych, takich jak
            projektowanie wnętrz, montaż mebli czy doradztwo w zakresie
            utrzymania drewna. Dzięki temu możesz liczyć na kompleksową obsługę
            od koncepcji po finalne wykończenie.
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Realizations;
