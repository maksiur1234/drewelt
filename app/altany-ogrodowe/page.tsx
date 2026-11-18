"use client";

import { Divider } from "@heroui/divider";
import Image from "next/image";
import { useRouter } from "next/navigation"
import Head from "@/components/Altany/Head/Head"
import RozpocznijProjekt from "@/components/Homepage/RozpocznijProjekt/RozpocznijProjekt";
import styles from './AltanyOgrodowe.module.scss'
import Link from "next/link";

export default function Page() {

  const router = useRouter()

  const handleClick = () => {
    router.push('/kontakt')
  }

  return (
    <>
      <Head />

      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block justify-center">
          <div className="max-w-[1300px] mx-auto p-4 sm:p-6">
            <p className="text-sm sm:text-xl">Doświadczenie zespołu pozwala realizować zarówno klasyczne projekty, jak i nietypowe zamówienia dopasowane do indywidualnej architektury terenu zielonego wokół domu. Każdy projekt traktowany jest indywidualnie, co gwarantuje pełne dopasowanie <strong>altany </strong>do otoczenia i oczekiwań użytkowników.</p>

            <h2 className="text-3xl font-medium text-[#2e7d32] mb-4">
              Jakie drewniane altany ogrodowe mamy w ofercie?
            </h2>

            <p className="text-sm sm:text-xl">Kolekcja obejmuje zróżnicowane modele stworzone z myślą o odmiennych stylach aranżacji przestrzeni oraz specyficznych wymaganiach technicznych.</p>

            <div className="p-4 bg-[#2e7d32] rounded-[15px] text-white">
              <h3>Altany wolnostojące</h3>
              <p className="text-sm sm:text-xl">Te solidne propozycje stanowią niezależne punkty centralne w ogrodzie, zapewniając zacienioną strefę wypoczynku z dala od budynku. Wolnostojącą <strong>altanę z drewna </strong>można swobodnie usytuować w dowolnym zakątku posesji, na przykład obok oczka wodnego. Masywne słupy nośne gwarantują odporność na porywy wiatru oraz obciążenie śniegiem.</p>
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

            <h3>Altany przyścienne na łukach</h3>
            <p className="text-sm sm:text-xl">Konstrukcje oparte na łukach łączą tradycyjne rzemiosło ciesielskie z nowocześniejszą linią architektoniczną. Mocowanie bezpośrednio do ściany budynku tworzy wygodne przedłużenie przestrzeni mieszkalnej. Wygięte elementy dodają całej <strong>altanie nowoczesnej</strong> lekkości, świetnie sprawdzając się na mniejszych tarasach.</p>
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

            <div className={styles.buttonWrapper}>
              <button
              className={`${styles.outlineButton} ${styles.slideUpButton}`}
              onClick={handleClick}
              >
                  Otrzymaj bezpłatną wycenę   
              </button>
            </div>

            <div className="p-4 bg-[#2e7d32] rounded-[15px] text-white">
              <h3>Altany przy domu z prostym spadkiem</h3>
              <p className="text-sm sm:text-xl">Zadaszenia z jednospadowym dachem idealnie komponują się z budynkami o oszczędnej geometrii. Prosty spadek ułatwia sprawny odpływ wody deszczowej oraz montaż dyskretnych rynien. Tego typu <strong>altanki ogrodowe </strong>tworzą osłonięte patio tuż przy wyjściu z salonu.</p>
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

            <div className="w-full">
              <h2 className="text-3xl font-medium text-[#2e7d32] mb-4">
                Altanka ogrodowa z drewna BSH
              </h2>
              <p className="text-sm sm:text-xl mb-2.5">Do budowy najbardziej wymagających elementów wykorzystuje się <strong>klejone warstwowo drewno BSH, które cechuje się wyjątkowymi parametrami technicznymi. Surowiec ten powstaje przez sklejenie ze sobą kilku lameli suszonego drewna iglastego o równoległym ukierunkowaniu włókien.</strong></p>
              <p className="text-sm sm:text-xl mb-2.5">Zalety <strong>nowoczesnych altan z drewna BSH</strong>:</p>
              <ul className="list-disc list-inside text-sm sm:text-xl">
              <li>charakteryzują się brakiem skłonności do pękania i skręcania, co zapewnia niezmienność wymiarów przez dziesięciolecia;</li>
              <li>osiągają znacznie wyższą wytrzymałość mechaniczną niż tradycyjne drewno lite o tych samych gabarytach;</li>
              <li>pozwalają na wznoszenie rozbudowanych konstrukcji o dużych rozpiętościach bez konieczności stosowania dodatkowych podpór;</li>
              <li>zachwycają idealnie gładką powierzchnią i eleganckim wyglądem bez widocznych sęków czy niedoskonałości;</li>
              <li>wykazują doskonałą odporność na obciążenia wywołane zalegającym zimą śniegiem.</li>
              </ul>
            </div>
            
            <div className="w-full flex gap-3 mt-6 flex-col md:flex-row before:bg-[#2e7d32] text-white items-center justify-center py-10 relative before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-screen z-[1] before:-z-[1]">
              <div className="w-full md:w-3/5">
                <h2 className="text-3xl font-medium text-white mb-4">
                  Altana ogrodowa – kompleksowa budowa z Drewelt
                </h2>
                <p className="text-sm sm:text-xl mb-2.5">Chcesz mieć w ogrodzie <strong>altanę ogrodową</strong>, ale nie wiesz, od czego zacząć? Z Drewelt proces <strong>budowy</strong> takiej przestrzeni jest prosty i kompleksowy – od stworzenia projektu, aż po profesjonalny montaż gotowej konstrukcji.</p>
                <p className="text-sm sm:text-xl mb-2.5">Współpraca z naszą firmą opiera się na kilku następujących etapach:</p>
                <ol className="my-4 list-inside list-decimal text-sm sm:text-xl">
                <li>Analiza i planowanie – zaczynamy od dokładnego poznania Twoich potrzeb oraz specyfiki działki. Analizujemy warunki i ustalamy, jakie rozwiązanie będzie najlepsze.</li>
                <li>Projektowanie – na tym etapie dobieramy odpowiednie wymiary <strong>altany drewnianej nowoczesnej</strong> lub klasycznej, które idealnie wpasują się w Twoją przestrzeń, np. kompaktowe 422 × 290 cm lub przestronne 740 × 600 cm.</li>
                <li>Realizacja – wykonujemy solidną strukturę z drewna klejonego BSH, a następnie montujemy pokrycie dachowe z trwałego poliwęglanu, który skutecznie chroni przed deszczem i słońcem.</li>
                </ol>

              </div>
              <div className="w-full md:w-2/5">
                <img src="/altany_ogrodowe/drewelt-altany-4.jpeg" decoding="async" className="object-cover rounded-lg shadow-md w-full" alt="Nowoczesna altana do ogrodu wykonana z drewna." />
              </div>
            </div>

            <Divider className="my-6" />

            <div className="w-full">
              <h2 className="text-3xl font-medium text-[#2e7d32] mb-4">
                Jak zamówić altanę drewnianą nowoczesną w Drewelt?
              </h2>
              <p className="text-sm sm:text-xl mb-2.5">Zrealizowanie marzenia o własnej <strong>altanie drewnianej, przydomowej</strong> jest wyjątkowo proste.</p>
              <ol className="my-4 list-inside list-decimal text-sm sm:text-xl">
                <li>Wybierz styl – zdecyduj, czy preferujesz klasyczną, czy może bardziej <strong>nowoczesną </strong>wersję.</li>
                <li>Skonsultuj się z nami – <Link href="/kontakt">skontaktuj się z naszymi ekspertami</Link>, którzy doradzą Ci na każdym etapie.</li>
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
                          "Wybierz styl – zdecyduj, czy preferujesz klasyczną, czy może bardziej nowoczesną wersję."
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

            </div>

            <div className="w-full">
              <img src="/altany_ogrodowe/drewelt-altany.jpg" decoding="async" className="object-cover rounded-lg shadow-md w-full h-96" alt="Nowoczesna altana pomalowana na kolor czarny." />
            </div>

            <div className="w-full">
              <h2 className="text-3xl font-medium text-[#2e7d32] mb-4">
                Jak zrobić idealne pergole drewniane?
              </h2>

              <p className="text-sm sm:text-xl mb-2.5">Zastanawiasz się, <strong>jak zrobić pergole drewniane?</strong> Z nami budowa takiej konstrukcji jest prosta. Co powinieneś zrobić?</p>

              <ol className="my-4 list-inside list-decimal text-sm sm:text-xl">
                <li><strong>Wybierz lokalizację</strong> – zastanów się, gdzie najlepiej sprawdzi się <strong>pergola</strong> – może tuż przy tarasie, nad ścieżką w ogrodzie, a może jako wolnostojący element?</li>
                <li><strong>Określ wymiary oraz styl</strong> – zdecyduj, jakiej wielkości i w jakim stylu ma być Twoja <strong>pergola</strong>, tak aby idealnie pasowała do otoczenia.</li>
                <li><strong>Zamów projekt i montaż zabudowy </strong>– resztę zostaw nam! Nasi eksperci przygotują projekt, wykonają, a następnie zamontują konstrukcję, abyś Ty mógł cieszyć się gotowym efektem.</li>
              </ol>
              <p className="text-sm sm:text-xl mb-2.5">Chcesz odmienić swój taras lub <strong>altanę</strong>? <Link href="/kontakt">Skontaktuj się z nami</Link> i zamów produkt od Drewelt. <strong>Budowa</strong> konstrukcji ogrodowych to nasza specjalność!</p>
            </div>
          </div>
        </div>
      </section>

      <RozpocznijProjekt naglowek="Zamów Bezpłatną Wycenę i Projekt"  hasDane />
    </>
  );
}
