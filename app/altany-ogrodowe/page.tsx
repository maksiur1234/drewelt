"use client";

import { Divider } from "@heroui/divider";
import Image from "next/image";

import styles from './AltanyOgrodowe.module.scss'

export default function Page() {

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-4">
        Altana ogrodowa drewniana – ponadczasowa elegancja i wytrzymałość na lata
      </h1>

       <div className={styles.galeriaSekcja}>
        <h3>Wiaty wolnostojące</h3>
        <div className={styles.galeria}>
          <div className={styles.imageWrapper}>
            <Image alt="Zadaszenie tarasu na łukach" src="/altany_ogrodowe/drewelt-altany.jpg" fill />
          </div>
          <div className={styles.imageWrapper}>
            <Image alt="Zadaszenie tarasu na łukach" src="/altany_ogrodowe/drewelt-altany-4.jpeg" fill />
          </div>
          <div className={styles.imageWrapper}>
            <Image alt="Zadaszenie tarasu na łukach" src="/altany_ogrodowe/drewelt-altany-3.jpg" fill />
          </div>
        </div>
      </div>

      <div className={styles.galeriaSekcja}>
        <h3>Wiaty przyścienne na łukach</h3>
        <div className={styles.galeria}>
         <div className={styles.imageWrapper}>
            <Image alt="Zadaszenie tarasu na łukach" src="/zadaszenia_przyscienne_na_lukach/zadaszenie-gorzow.jpg" fill />
          </div>
          <div className={styles.imageWrapper}>
            <Image alt="Zadaszenie tarasu na łukach" src="/zadaszenia_przyscienne_na_lukach/lubon.jpg" fill />
          </div>
          <div className={styles.imageWrapper}>
            <Image alt="Zadaszenie tarasu na łukach" src="/zadaszenia_przyscienne_na_lukach/20221004_130009.jpg" fill />
          </div>
        </div>
      </div>

      <div className={styles.galeriaSekcja}>
        <h3>Wiaty przyścienne z prostym spadkiem</h3>
        <div className={styles.galeria}>
         <div className={styles.imageWrapper}>
            <Image alt="Zadaszenie tarasu na łukach" src="/zadaszenia_prosty_spadek/palisnder.jpg" fill />
          </div>
          <div className={styles.imageWrapper}>
            <Image alt="Zadaszenie tarasu na łukach" src="/zadaszenia_prosty_spadek/20230413_161433.jpg" fill />
          </div>
          <div className={styles.imageWrapper}>
            <Image alt="Zadaszenie tarasu na łukach" src="/zadaszenia_prosty_spadek/20240926_130525.jpg" fill />
          </div>
        </div>
      </div>

      <Divider className="mb-6" />

      <section className="p-4 sm:p-6 rounded-lg shadow-lg mb-6">
        <p className="text-gray-700 text-sm sm:text-base">
          Marzysz o idealnym miejscu do odpoczynku w ogrodzie? <strong>Altany drewniane ogrodowe</strong> od Drewelt to połączenie <strong>nowoczesnego</strong> designu z naturalnym pięknem drewna. Nasze konstrukcje powstają z wysokiej jakości odmiany BSH, która jest suszona i warstwowo klejona. Dzięki temu materiał zyskuje wyjątkową odporność na warunki atmosferyczne oraz stabilność, gwarantując trwałość na wiele sezonów. Daszek <strong>drewnianej altany ogrodowej</strong> z poliwęglanu komorowego skutecznie chroni przed deszczem, a także szkodliwym promieniowaniem UV, a Ty możesz cieszyć się swoją nową przestrzenią, niezależnie od pogody. Poliwęglan jest dostępny w kilku wariantach kolorystycznych, co pozwala idealnie dopasować go do Twoich potrzeb czy estetyki ogrodu.
        </p>
      </section>

      <Divider className="my-6" />

      <div className="w-full flex gap-3 flex-col md:flex-row">
        <div className="w-full md:w-2/5">
          <img src="/altany_ogrodowe/drewelt-altany-2.jpg" decoding="async" className="object-cover rounded-lg shadow-md w-full" alt="Drewniana altana w ogrodzie zapewnia zacienioną strefę relaksu." />
        </div>
        <div className="w-full md:w-3/5">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Drewniana altana ogrodowa – nowa jakość życia w ogrodzie
          </h2>
          <p className="mb-2.5 text-gray-700 text-sm sm:text-base text-justify">
            Nasze <strong>altany drewniane do ogrodu</strong> stanowią coś więcej niż tylko zadaszenie. To wielofunkcyjne przestrzenie, które stają się sercem Twojego ogrodu. Dzięki nim stworzysz:
          </p>
          <ul className="mb-2.5 list-disc list-inside text-gray-700 text-sm sm:text-base text-justify">
            <li>Strefę relaksu – <strong>altana drewniana przydomowa</strong> to idealne miejsce do czytania, medytacji czy po prostu na chwilę wytchnienia po ciężkim dniu.</li>
            <li>Miejsce spotkań – <strong>altana do ogrodu drewniana</strong> tworzy komfortową przestrzeń do wspólnego spędzania czasu z rodziną i przyjaciółmi, celebrowania posiłków czy rozmów.</li>
            <li>Element architektury – <strong>altana drewniana</strong> to piękna i nowoczesna <strong>konstrukcja</strong>, która wzbogaca krajobraz ogrodu, dodając mu stylu oraz praktyczności.</li>
          </ul>
          <p className="text-gray-700 text-sm sm:text-base text-justify">
            Stwórzmy razem <strong>altaną ogrodową drewnianą</strong>, która stanie się Twoją oazą spokoju. Skontaktuj się z nami i zamów projekt dopasowany do Ciebie.
          </p>
        </div>
      </div>
      
      <div className="w-full flex gap-3 mt-6 flex-col md:flex-row">
        <div className="w-full md:w-3/5">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Altana ogrodowa – kompleksowa budowa z Drewelt
          </h2>
          <p className="text-gray-700 text-sm sm:text-base text-justify">
            Chcesz mieć w ogrodzie <strong>altanę ogrodową</strong>, ale nie wiesz, od czego zacząć? Z Drewelt proces <strong>budowy</strong> takiej przestrzeni jest prosty i kompleksowy – od stworzenia projektu, aż po profesjonalny montaż gotowej konstrukcji. Jak wygląda współpraca z naszą firmą w tym zakresie? <strong>Altanę ogrodową budujemy</strong> w kilku następujących etapach:
          </p>
          <ol className="my-4 list-inside list-decimal text-gray-700 text-sm sm:text-base text-justify">
            <li>Analiza i planowanie – zaczynamy od dokładnego poznania Twoich potrzeb oraz specyfiki działki. Analizujemy warunki i ustalamy, jakie rozwiązanie będzie najlepsze.</li>
            <li>Projektowanie – na tym etapie dobieramy odpowiednie wymiary <strong>altany drewnianej nowoczesnej</strong> lub klasycznej, które idealnie wpasują się w Twoją przestrzeń, np. kompaktowe 422 × 290 cm lub przestronne 740 × 600 cm.</li>
            <li>Realizacja – wykonujemy solidną strukturę <strong>altany, nowoczesnej</strong> konstrukcji <strong>ogrodowej</strong> z drewna klejonego BSH, a następnie montujemy pokrycie dachowe z trwałego poliwęglanu, który skutecznie chroni przed deszczem i słońcem.</li>
          </ol>

         <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org/",
                "@type": "HowTo",
                "name": "Chcesz mieć w ogrodzie altanę ogrodową, ale nie wiesz, od czego zacząć?",
                "description":
                  "Z Drewelt proces budowy takiej przestrzeni jest prosty i kompleksowy – od stworzenia projektu, aż po profesjonalny montaż gotowej konstrukcji. Jak wygląda współpraca z naszą firmą w tym zakresie? Altanę ogrodową budujemy w kilku następujących etapach:",
                "step": [
                  {
                    "@type": "HowToStep",
                    "text":
                      "Analiza i planowanie – zaczynamy od dokładnego poznania Twoich potrzeb oraz specyfiki działki. Analizujemy warunki i ustalamy, jakie rozwiązanie będzie najlepsze."
                  },
                  {
                    "@type": "HowToStep",
                    "text":
                      "Projektowanie – na tym etapie dobieramy odpowiednie wymiary altany drewnianej nowoczesnej lub klasycznej, które idealnie wpasują się w Twoją przestrzeń, np. kompaktowe 422 × 290 cm lub przestronne 740 × 600 cm."
                  },
                  {
                    "@type": "HowToStep",
                    "text":
                      "Realizacja – wykonujemy solidną strukturę altany, nowoczesnej konstrukcji ogrodowej z drewna klejonego BSH, a następnie montujemy pokrycie dachowe z trwałego poliwęglanu, który skutecznie chroni przed deszczem i słońcem."
                  }
                ]
              }),
            }}
        />

        </div>
        <div className="w-full md:w-2/5">
          <img src="/altany_ogrodowe/drewelt-altany-4.jpeg" decoding="async" className="object-cover rounded-lg shadow-md w-full" alt="Nowoczesna altana do ogrodu wykonana z drewna." />
        </div>
      </div>

      <Divider className="my-6" />

      <div className="w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Jak zamówić altanę drewnianą nowoczesną w Drewelt?
        </h2>
        <p className="text-gray-700 text-sm sm:text-base text-justify">
          Zrealizowanie marzenia o własnej <strong>altanie – nowoczesnej</strong> konstrukcji <strong>przy domu</strong> – jest wyjątkowo proste.
        </p>
        <ol className="my-4 list-inside list-decimal text-gray-700 text-sm sm:text-base text-justify">
          <li>Wybierz styl – zdecyduj, czy preferujesz klasyczną, czy może bardziej <strong>nowoczesną altanę drewnianą</strong>.</li>
          <li>Skonsultuj się z nami – <a href="/kontakt">skontaktuj się z naszymi ekspertami</a>, którzy doradzą Ci na każdym etapie.</li>
          <li>Otrzymaj wycenę – na podstawie przesłanych zdjęć, danych lokalizacyjnych oraz kontaktowych, a także preferencji dot. rodzaju zadaszenia, przygotujemy dla Ciebie szczegółowy projekt wraz z kosztorysem, dopasowany do Twoich wymagań.</li>
          <li>Ciesz się efektem – w ciągu kilku dni po montażu możesz już relaksować się w swojej nowej, w pełni gotowej <strong>altanie, nowoczesnej</strong> przestrzeni <strong>przy</strong> swoim <strong>domu</strong>.</li>
        </ol>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "HowTo",
              "name": "Jak zamówić altanę drewnianą nowoczesną w Drewelt?",
              "description":
                "Zrealizowanie marzenia o własnej altanie – nowoczesnej konstrukcji przy domu – jest wyjątkowo proste.",
              "step": [
                {
                  "@type": "HowToStep",
                  "text":
                    "Wybierz styl – zdecyduj, czy preferujesz klasyczną, czy może bardziej nowoczesną altanę drewnianą."
                },
                {
                  "@type": "HowToStep",
                  "text":
                    "Skonsultuj się z nami – skontaktuj się z naszymi ekspertami, którzy doradzą Ci na każdym etapie."
                },
                {
                  "@type": "HowToStep",
                  "text":
                    "Otrzymaj wycenę – na podstawie przesłanych zdjęć, danych lokalizacyjnych oraz kontaktowych, a także preferencji dot. rodzaju zadaszenia, przygotujemy dla Ciebie szczegółowy projekt wraz z kosztorysem, dopasowany do Twoich wymagań."
                },
                {
                  "@type": "HowToStep",
                  "text":
                    "Ciesz się efektem – w ciągu kilku dni po montażu możesz już relaksować się w swojej nowej, w pełni gotowej altanie, nowoczesnej przestrzeni przy swoim domu."
                }
              ]
            }),
          }}
        />
        <p className="mb-2.5 text-gray-700 text-sm sm:text-base text-justify">
          Chcesz mieć w ogrodzie <strong>altanę ogrodową</strong>, ale nie wiesz, od czego zacząć? Z Drewelt proces <strong>budowy</strong> takiej przestrzeni jest prosty i kompleksowy – od stworzenia projektu, aż po profesjonalny montaż gotowej konstrukcji. Jak wygląda współpraca z naszą firmą w tym zakresie? <strong>Altanę ogrodową budujemy</strong> w kilku następujących etapach:
        </p>
      </div>
      <div className="w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Funkcjonalne dodatki do Twojego ogrodu – zabudowy altan
        </h2>
        <p className="mb-2.5 text-gray-700 text-sm sm:text-base text-justify">
          Drewelt proponuje także szereg funkcjonalnych rozwiązań, które pozwolą Ci maksymalnie wykorzystać potencjał Twojej przestrzeni zewnętrznej. Oferujemy <strong>zabudowy altan</strong>, jak np.  eleganckie pergole drewniane, które stanowią dopełnienie przestrzeni, zapewniając jednocześnie prywatność i ochronę. Nasze <strong>zabudowy altan</strong> wykonujemy z tego samego solidnego drewna klejonego BSH, co altany. Są zatem wyjątkowo trwałe i estetyczne. Na życzenie Klienta mogą być zadaszone poliwęglanem, który chroni przed palącym słońcem czy deszczem, pozwalając na korzystanie z tarasu, bez względu na pogodę. <strong>Zabudowa altany</strong> od Drewelt to idealny sposób na stworzenie zacienionej strefy relaksu, która jednocześnie nie przytłacza przestrzeni.
        </p>
      </div>

      <div className="w-full">
        <img src="/altany_ogrodowe/drewelt-altany.jpg" decoding="async" className="object-cover rounded-lg shadow-md w-full h-96" alt="Nowoczesna altana pomalowana na kolor czarny." />
      </div>

      <div className="w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Jak zrobić idealne pergole drewniane?
        </h2>
        <p className="text-gray-700 text-sm sm:text-base text-justify">
          Zastanawiasz się, <strong>jak zrobić pergole drewniane?</strong> Z nami budowa takiej konstrukcji.
        </p>
        <ol className="my-4 list-inside list-decimal text-gray-700 text-sm sm:text-base text-justify">
          <li>Wybierz lokalizację – zastanów się, gdzie najlepiej sprawdzi się nowa konstrukcja – może tuż przy tarasie, nad ścieżką w ogrodzie, a może jako wolnostojący element?</li>
          <li>Określ wymiary oraz styl – zdecyduj, jakiej wielkości i w jakim stylu ma być Twoja pergola, tak aby idealnie pasowała do otoczenia.</li>
          <li>Zamów projekt i montaż zabudowy altany – resztę zostaw nam! Nasi eksperci przygotują projekt, wykonają, a następnie zamontują konstrukcję, abyś Ty mógł cieszyć się gotowym efektem.</li>
        </ol>
        <p className="mb-2.5 text-gray-700 text-sm sm:text-base text-justify">
          Chcesz odmienić swój taras lub altanę? <a href="/kontakt">Skontaktuj się z nami</a> i zamów <strong>zabudowę altany</strong> od Drewelt.
        </p>
      </div>
      <div className="w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Dlaczego warto wybrać altanę do ogrodu drewnianą od Drewelt?
        </h2>
        <p className="mb-2.5 text-gray-700 text-sm sm:text-base text-justify">
          <strong>Nowoczesne altany ogrodowe drewniane</strong> wysokiej jakości to nasz priorytet. Wiemy, że każdy ogród jest inny, dlatego do każdego projektu podchodzimy indywidualnie, dopasowując altanę do stylu Twojej przestrzeni oraz oczekiwań. Dodatkowo tworzona przez nas konstrukcja zawsze objęta jest 2-letnią gwarancją. Działamy na terenie całej Polski. Realizujemy zlecenia zarówno dla domów prywatnych, jak i przestrzeni komercyjnych. Zapewniamy szybką realizację zamówienia, a także przejrzystą wycenę, bez żadnych ukrytych kosztów. Zobacz galerię  naszych realizacji i zamów własną <strong>altanę do ogrodu drewnianą</strong> od Drewelt!
        </p>
      </div>
      <div className="flex w-full justify-end"><a className="flex flex-col text-center justify-center bg-[#262420] hover:bg-[#e9a749] hover:text-[#262420] text-[#e9a749] gap-1 text-xl px-8 py-2 rounded-lg uppercase transition-all font-medium" href="/kontakt">Skontaktuj się<span className="text-white text-base normal-case font-light">Wycenimy Twoją altanę!</span></a></div>
      </div>
  );
}
