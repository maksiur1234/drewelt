"use client";

import { Accordion, AccordionItem } from "@heroui/accordion";
import Image from "next/image";

const Realizations = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center gap-8 p-8">
        <Image
          alt="Nasze realizacje"
          className="w-full md:w-1/2 h-auto object-cover rounded-lg shadow-md"
          src="/zadaszenia_prosty_spadek_na_belce/zadaszenie na belce.jpg"
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
      <div className="w-full flex flex-col mt-8 px-8 mb-4">
        <h2 className="text-2xl font-bold mb-4">
          Jakie drewno i belki są najlepsze na zadaszenie tarasu?
        </h2>
        <p className="text-gray-700">
          Drogą do stworzenia trwałej i estetycznej konstrukcji jest odpowiedni wybór materiałów. <strong>Jakie drewno (belki) stosujemy na zadaszenie tarasu</strong>? Jako <strong>producent</strong> z ugruntowaną pozycją na rynku wykorzystujemy wyłącznie sprawdzone materiały. Jednym z nich jest drewno klejone BSH, które pozwala na budowę zadaszeń o dużych rozpiętościach, bez konieczności użycia dodatkowych wsporników. Dzięki temu zadaszenie zyskuje lekki i nowoczesny wygląd. Ponadto materiał ten jest ceniony również za:
        </p>
        <ul className="list-decimal list-inside text-gray-700 my-4">
          <li>wytrzymałość – drewno klejone BSH charakteryzuje się wysoką odpornością na wilgoć i zmienne temperatury,</li>
          <li>stabilność – taki materiał zapewnia doskonałą stabilność wymiarową konstrukcji.</li>
          <li>estetykę – belki z drewna BSH oferują gładkie i estetyczne wykończenie powierzchni.</li>
          <li>elastyczność – drewno klejone BSH daje możliwość precyzyjnego dopasowania długości i kształtu belek, co ułatwia realizację nawet najbardziej nietypowych projektów.</li>
        </ul>
        <p className="text-gray-700 mb-4">
          Zaprojektuj z nami swoje wymarzone zadaszenie tarasu, które połączy w sobie solidność z pięknym wyglądem. Zadzwoń lub napisz do nas!
        </p>

        <h2 className="text-2xl font-bold my-4">Jaka deska kompozytowa jest najlepsza dla tarasów?</h2>
        <p className="text-gray-700">
          W ofercie Drewelt, oprócz tradycyjnych rozwiązań, znajdziesz również <strong>deski</strong> tarasowe <strong>z tworzywa sztucznego</strong>, jakim jest kompozyt WPC. To idealny wybór dla osób, które stawiają na trwałość, łatwość pielęgnacji oraz nowoczesny design. Co je jeszcze wyróżnia?
        </p>
        <ul className="list-disc list-inside my-4">
          <li>Odporność – <a href="/tarasy"><strong>deski z tworzywa sztucznego</strong></a> są niewrażliwe na wilgoć, pleśń oraz szkodliwe promieniowanie UV, co zapewnia długowieczność i piękny wygląd na lata.</li>
          <li>Bezobsługowość – takie produkty nie wymagają regularnej impregnacji ani malowania, co znacznie ułatwia ich pielęgnację.</li>
          <li>Estetyka – <strong>deski z tworzywa sztucznego</strong> WPC oferują naturalny wygląd drewna, ale są wolne od jego typowych wad, takich jak pękanie czy drzazgi.</li>
          <li>Bogata paleta barw – w naszej ofercie znajdziesz deski tarasowe kompozytowe w kilku kolorach, takich jak ciemny szary, grafit, a także jasny lub ciemny brąz. Dzięki temu dopasujesz deskę do swoich preferencji oraz stylu otoczenia.</li>
        </ul>
        <p className="text-gray-700">
          Zastanawiasz się, <strong>jaka deska kompozytowa będzie najlepsza</strong> dla Ciebie? <a href="/kontakt">Skontaktuj się z nami</a> – chętnie pomożemy Ci podjąć decyzję i wybrać idealne rozwiązanie, które spełni Twoje oczekiwania.
        </p>
      </div>
    </>
  );
};

export default Realizations;
