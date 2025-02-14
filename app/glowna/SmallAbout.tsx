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
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Najlepsi w swoim fachu
        </h2>
        <Image
          alt="Drewniane deski"
          className="w-full h-80 object-cover rounded-lg shadow-md"
          src="https://maszyny-stolarskie.com.pl/wp-content/uploads/2019/07/gfghhhhg.jpg"
          width={600}
          height={600}
        />
      </div>

      <div className="md:w-1/2 flex flex-col items-end space-y-6">
        <Image
          alt="Drewniane deski"
          className="w-full h-40 object-cover rounded-lg shadow-md"
          src="https://maszyny-stolarskie.com.pl/wp-content/uploads/2019/07/gfghhhhg.jpg"
          width={600}
          height={600}
        />
        <p className="text-lg text-gray-700 text-right">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
          nihil. Quod debitis eaque soluta repellat expedita quaerat iusto
          repudiandae quia cumque, autem, harum fuga maiores animi dolores
          molestiae.
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
