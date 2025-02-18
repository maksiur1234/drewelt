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
          href="/oNas"
          variant="ghost"
        >
          O nas
        </Button>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          <span className="text-[#e9a749]">Tworzymy przestrzenie, które inspirują.</span>
        </h2>
        <Image
          alt="Drewniane deski"
          className="w-full h-80 object-cover rounded-lg shadow-md"
          src="/obrazki/20230628_193255.jpg"
          width={600}
          height={600}
        />
      </div>

      <div className="md:w-1/2 flex flex-col items-end space-y-6">
        <Image
          alt="Drewniane deski"
          className="w-full h-64 object-cover rounded-lg shadow-md"
          src="/zadaszenia_na_lukach/wiata-garazowa.jpg"
          width={600}
          height={600}
        />
        <p className="text-lg text-gray-700 text-right mb-8 leading-relaxed">
          Jesteśmy firmą specjalizującą się w projektowaniu i budowie eleganckich, 
          <span className="font-semibold text-[#e9a749]"> funkcjonalnych tarasów </span> 
          oraz zadaszeń drewnianych, które dopełniają każde otoczenie. Z pasją łączymy 
          tradycyjne rzemiosło z nowoczesnym designem, tworząc rozwiązania idealne do 
          Twojego ogrodu, tarasu czy przestrzeni komercyjnej.
        </p>

        <p className="text-lg text-gray-700 text-right mb-8 leading-relaxed">
          Z ponad <span className="font-semibold text-[#e9a749]">20-letnim doświadczeniem</span> w branży, nasz zespół ekspertów dba o każdy detal, 
          oferując najwyższą jakość drewna, precyzyjne wykonanie oraz indywidualne podejście do klienta. Dzięki naszym produktom, 
          możesz cieszyć się przestrzenią, która łączy estetykę z trwałością – na lata.
        </p>

        <p className="text-lg text-gray-700 text-right mb-8 leading-relaxed">
          Zaufaj profesjonalistom, którzy tworzą <span className="font-semibold text-[#e9a749]">naturalne piękno</span> w Twoim otoczeniu.
        </p>
        <div ref={ref} className="w-full flex justify-end gap-8">
          <div className="flex flex-col items-center">
            <div className="text-5xl font-bold text-gray-900">
              {inView ? <CountUp duration={2} end={20} start={0} /> : 0}
            </div>
            <div className="text-sm text-gray-600">lat w branży</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-5xl font-bold text-gray-900">
              {inView ? <CountUp duration={2} end={500} start={0} /> : 0}
            </div>
            <div className="text-sm text-gray-600">wykonanych projektów</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallAbout;
