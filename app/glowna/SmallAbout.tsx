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
            Tworzymy przestrzenie, które inspirują.
          </span>
        </h2>
        <div className="h-24">
        <Image
          alt="Drewniane deski"
          className="object-contain w-full h-auto rounded-lg shadow-md"
          src="/zadaszenia_prosty_spadek/palisnder.jpg"
          width={1920}
          height={1080}
          
        />
         
        </div>
      </div>
      <div className="md:w-1/2 flex flex-col items-end space-y-6">
      <Image
            alt="Drewniane deski"
            className="w-full h-96 object-cover rounded-lg shadow-md"
            src="/zadaszenia_prosty_spadek_na_belce/20230628_193255.jpg"
            width={1920}
            height={1080}
            style={{
              objectPosition: "50% 30%",
            }}
          />
        <p className="text-lg text-gray-700 text-right mb-8 leading-relaxed">
          Jesteśmy firmą specjalizującą się w projektowaniu i budowie
          eleganckich,
          <span className="font-semibold text-[#e9a749]">
            {" "}
            zadaszeń oraz tarasów{" "}
          </span>
          które dopełniają każde otoczenie. Z pasją
          łączymy tradycyjne rzemiosło z nowoczesnym designem, tworząc
          rozwiązania idealne do Twojego ogrodu, tarasu czy przestrzeni
          komercyjnej. Nasze konstrukcje wykonane są z drewna klejonego BSH - jest to najwyższej jakości suchy świerk klejony warstwowo, pokrycie jakie stosujemy to w naszej opinii  najlepszy i najtrwalszy poliwęglan na rynku o grubości 10 mm w trzech kolorach (przezroczysty, mleczny, przydymiony).
        </p>

        <p className="text-lg text-gray-700 text-right mb-8 leading-relaxed">
          Z ponad{" "}
          <span className="font-semibold text-[#e9a749]">
            10-letnim doświadczeniem w branży, 
          </span>{" "}
          nasz zespół dba o każdy detal, precyzyjne wykonanie oraz indywidualne podejście do klienta. Dzięki naszym produktom, możesz cieszyć się przestrzenią, która łączy estetykę z trwałością – na lata.
        </p>

        <p className="text-lg text-gray-700 text-right mb-8 leading-relaxed">
          Zaufaj profesjonalistom, którzy tworzą{" "}
          <span className="font-semibold text-[#e9a749]">naturalne piękno</span>{" "}
          w Twoim otoczeniu.
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
    </div>
  );
};

export default SmallAbout;
