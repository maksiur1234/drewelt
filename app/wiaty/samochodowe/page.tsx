import Head from "@/components/Garaze/Head/Head";
import Faq from "@/components/Garaze/Faq/Faq";
import RozpocznijProjekt from "@/components/Homepage/RozpocznijProjekt/RozpocznijProjekt";
import Link from "next/link";

export default function Page() {

  return (
    <>
        <Head title="Wiata samochodowa" description="DDrewelt to stolarka bez kompromisów, tworzona przez rzemieślników z wieloletnim doświadczeniem w obróbce drewna. Zamiast marketowych gotowców z cienkich desek dostarczamy solidne konstrukcje z drewna klejonego BSH, które wytrzymują silne wichury i chronią pojazd przez cały rok"/>
        
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <div className="inline-block justify-center">
                <div className="max-w-[1300px] mx-auto p-4 sm:p-6">
                    <p>Każdy projekt <Link href="/wiaty">wiaty</Link> przygotowujemy indywidualnie, docinając elementy na wymiar w naszym warsztacie i zabezpieczając je przed wilgocią oraz promieniowaniem UV, dzięki czemu inwestycja służy bezawaryjnie przez dekady.</p>

                    <h2 className="text-3xl font-medium text-[#2e7d32] mb-4">Nowoczesne wiaty samochodowe w ofercie Drewelt</h2>
                    <p className="text-sm sm:text-xl">Projektowane przez nas zadaszenia odpowiadają na zróżnicowane potrzeby inwestorów oraz specyfikę układu terenu na działce. Łączymy rzemieślniczą pracę z materiałami odpornymi na czynniki atmosferyczne, tworząc następujące warianty konstrukcji:</p>
                    <ul className="list-disc list-inside text-sm sm:text-xl">
                        <li>wolnostojące jedno- i dwustanowiskowe zadaszenia idealne na każdy podjazd;</li>
                        <li>przyścienne modele hybrydowe, które płynnie przechodzą w linię dachu budynku;</li>
                        <li>zabudowy z integralnym pomieszczeniem gospodarczym na narzędzia i opony;</li>
                        <li>konstrukcje z dachem jednospadowym lub dwuspadowym pokrytym trwałą płytą poliwęglanową albo blachodachówką.</li>
                    </ul>
                    <h2 className="text-3xl font-medium text-[#2e7d32] mb-4">Dlaczego warto zakupić wiatę na samochód?</h2>
                    <p className="text-sm sm:text-xl">Otwarta zadaszona <strong>przestrzeń to skuteczna ochrona karoserii przed gradem, żywicą, ptasimi odchodami i letnim upałem bez dusznej atmosfery zamkniętego garażu. Ciągła cyrkulacja powietrza przyspiesza odparowywanie wody, co znacznie ogranicza korozję podwozia po zimowych rozjazdach na solonych drogach. </strong>Dodatkowo solidna drewniana konstrukcja wiaty samochodowej podnosi wartość całej posesji i doskonale komponuje się z architekturą nowoczesnego domu.</p>
                    <p className="text-sm sm:text-xl">Zapraszamy do kontaktu – skontaktuj się z nami telefonicznie lub przez formularz na stronie, aby omówić szczegóły swojej inwestycji i otrzymać darmową wycenę.</p>
                </div>
            </div>
        </section>

        <Faq title="Najczęściej zadawane pytania" items={[
            {
                question: "Czym jest carport?",
                answer: "Carport to lekkie zadaszenie osadzone na słupach, stwarzające otwartą lub częściowo zabudowaną przestrzeń chroniącą pojazd przed czynnikami atmosferycznymi. Stanowi nowoczesną alternatywę dla masywnego garażu murowanego, pozwalając na swobodne manewrowanie autem przy zachowaniu pełnej osłony przed opadami."
            },
            {
                question: "Ile kosztuje wiata samochodowa z drewna klejonego?",
                answer: "Wycena każdorazowo powstaje indywidualnie i zależy od wymiarów, liczby stanowisk, rodzaju pokrycia dachowego oraz stopnia skomplikowania montażu. Koszt uwzględnia selekcjonowane drewno BSH, obróbkę ciesielską, impregnację oraz montaż trwający zazwyczaj jeden dzień."
            },
            {
                question: "Czy budowa wiaty samochodowej wymaga pozwolenia na budowę?",
                answer: "Większość wolnostojących wiat parterowych o powierzchni zabudowy do 50 metrów kwadratowych, w liczbie nieprzekraczającej dwóch na każde 500 metrów kwadratowych działki, wymaga jedynie zgłoszenia w odpowiednim urzędzie powiatowym lub gminnym przed rozpoczęciem prac."
            },
            {
                question: "Jak dbać o drewnianą konstrukcję wiaty po zamontowaniu?",
                answer: "Oferowane przez nas zadaszenia opierają się na fabrycznie impregnowanym drewnie klejonym, które dzięki profesjonalnym powłokom ochronnym nie wymaga uciążliwego corocznego szlifowania; wystarczy okresowe mycie wodą pod niskim ciśnieniem i kontrola stanu powłoki lakierniczej raz na kilka lat."
            },
        ]}/>

        <RozpocznijProjekt hideDescription />
    </>
  )

}