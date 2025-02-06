'use client'

import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
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
          color="warning"
          as={Link}
          href="/oNas"
          className=""
          variant="ghost"
        >
          O nas
        </Button>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Najlepsi w swoim fachu
        </h2>
        <img
          src="https://maszyny-stolarskie.com.pl/wp-content/uploads/2019/07/gfghhhhg.jpg"
          alt="Drewniane deski"
          className="w-full h-80 object-cover rounded-lg shadow-md"
        />
      </div>
      
      <div className="md:w-1/2 flex flex-col items-end space-y-6">
        <img
          src="https://maszyny-stolarskie.com.pl/wp-content/uploads/2019/07/gfghhhhg.jpg"
          alt="Drewniane deski"
          className="w-full h-40 object-cover rounded-lg shadow-md"
        />
        <p className="text-lg text-gray-700 text-right">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, nihil.
          Quod debitis eaque soluta repellat expedita quaerat iusto repudiandae
          quia cumque, autem, harum fuga maiores animi dolores molestiae.
        </p>
        <div ref={ref} className="w-full flex justify-end gap-8">
          <div className="flex flex-col items-center">
            <div className="text-5xl font-bold text-gray-900">
              {inView ? (
                <CountUp start={0} end={20} duration={2} />
              ) : (
                0
              )}
            </div>
            <div className="text-sm text-gray-600">lat w branży</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-5xl font-bold text-gray-900">
              {inView ? (
                <CountUp start={0} end={500} duration={2} />
              ) : (
                0
              )}
            </div>
            <div className="text-sm text-gray-600">wykonanych projektów</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallAbout;
