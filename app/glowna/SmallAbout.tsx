"use client";

import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const SmallAbout = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div className="flex flex-col md:flex-row gap-8 bg-white shadow-lg rounded-lg overflow-hidden mt-16 px-8 py-8">
      <div className="md:w-1/2 flex flex-col items-start space-y-6">
        <Button
          as={Link}
          className=""
          color="warning"
          href="/o-nas"
          variant="ghost"
        >
          O nas
        </Button>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          <span className="text-[#e9a749]">
            Producent zadaszeń tarasowych Drewelt – tworzymy przestrzenie, które inspirują
          </span>
        </h2>
        <div className="h-24">
        <Image
          alt="Drewniane deski"
          className="object-contain w-full h-auto rounded-lg shadow-md"
          src="/zadaszenia_przyscienne_na_lukach/Zadaszenie Murowana Goślina.jpg"
          width={1920}
          height={1080}
          
        />
         
        </div>
      </div>
      <div className="md:w-1/2 flex flex-col items-end space-y-6">
      <Image
            alt="Drewniane deski"
            className="w-86 h-96 object-cover rounded-lg shadow-md"
            src="/zadaszenia_prosty_spadek/20230628_193255.jpg"
            width={1920}
            height={1080}
            style={{
              objectPosition: "50% 30%",
            }}
          />
        <p className="text-lg text-gray-700 text-right mb-2 leading-relaxed">
          Jesteśmy firmą specjalizującą się w projektowaniu oraz budowie eleganckich tarasów oraz zadaszeń, które harmonijnie dopełniają każde otoczenie – od ogrodu, po przestrzeń komercyjną. Jako doświadczony <span className="font-semibold text-[#e9a749]">producent zadaszeń tarasowych</span> łączymy tradycyjne rzemiosło z nowoczesnym designem, tworząc konstrukcje trwałe, estetyczne i funkcjonalne. Nasze realizacje opierają się na drewnie klejonym warstwowo BSH – suchym świerku o wysokiej wytrzymałości mechanicznej i odporności na zmienne warunki atmosferyczne. Dodatkowo w ofercie mamy również <a href="/tarasy"><span className="font-semibold text-[#e9a749]">deski</span> tarasowe <span className="font-semibold text-[#e9a749]">z tworzywa sztucznego</span></a> WPC. Pokrycie zadaszeń wykonujemy natomiast z poliwęglanu komorowego o grubości 10 mm, dostępnego w trzech wariantach kolorystycznych: przezroczystym, mlecznym i przydymionym.
        </p>
        <p className="text-lg text-gray-700 text-right mb-8 leading-relaxed">
          Zainwestuj w przestrzeń, która będzie cieszyć oko i służyć przez lata. <a href="/kontakt">Skontaktuj się z nami</a>, aby omówić swój <span className="font-semibold text-[#e9a749]">projekt zadaszenia tarasu drewnianego</span>.
        </p>

        <div ref={ref} className="w-full flex justify-end gap-8">
          <div className="flex flex-col items-center">
            <div className="text-5xl font-bold text-gray-900">
              {inView ? <CountUp duration={5} end={10} start={0} /> : 0}
            </div>
            <div className="text-sm text-gray-600">lat w branży</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-5xl font-bold text-gray-900">
              {inView ? <CountUp duration={3} end={800} start={0} /> : 0}
            </div>
            <div className="text-sm text-gray-600">wykonanych projektów</div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col space-y-6">
        <h2>Producent zadaszeń tarasowych z doświadczeniem – realizacje w całej Polsce</h2>
        <p className="text-lg text-gray-700 text-justify leading-relaxed">
          Drewelt to <span className="font-semibold text-[#e9a749]">producent zadaszeń tarasowych</span> z ponad 10-letnim doświadczeniem. Nasze realizacje można zobaczyć w wielu miastach, m.in. Gorzowie Wielkopolskim, <a href="/tarasy/deska-tarasowa-kompozytowa-poznan">Poznaniu</a>, Lublinie, Wrocławiu czy <a href="/tarasy/deska-tarasowa-kompozytowa-konin">Koninie</a>. Każda konstrukcja to połączenie solidności, estetyki i nowoczesnych technologii. Co więcej, każdy <span className="font-semibold text-[#e9a749]">projekt zadaszenia tarasu drewnianego</span> traktujemy indywidualnie – od koncepcji po montaż. Oferujemy kompleksową obsługę, uwzględniającą potrzeby Klienta, warunki techniczne oraz estetykę otoczenia. Współpracując z nami, zyskujesz:
        </p>
        <ul className="text-lg text-gray-700 text-justify my-4 leading-relaxed list-disc list-inside">
          <li><span className="font-semibold text-[#e9a749]">Projekt zadaszenia tarasu drewnianego</span> dopasowany do Twojej przestrzeni.</li>
          <li>Dwukrotną impregnację i malowanie konstrukcji.</li>
          <li>Transparentną wycenę inwestycji.</li>
          <li>Fachowe doradztwo w zakresie odpowiedzi na pytanie, <span className="font-semibold text-[#e9a749]">jaki gruby poliwęglan na zadaszenie tarasu</span> będzie najlepszy (i wiele innych).</li>
          <li>Montaż struktury ogrodowej przez doświadczony zespół.</li>
          <li>Dwuletnią gwarancję na wykonanie.</li>
        </ul>
        <p className="text-lg text-gray-700 text-justify mb-8 leading-relaxed">
          Zaufaj sprawdzonemu <span className="font-semibold text-[#e9a749]">producentowi zadaszeń tarasowych</span> – zobacz naszą galerię realizacji i umów się na konsultację.
        </p>
      </div>
    </div>
  );
};

export default SmallAbout;
