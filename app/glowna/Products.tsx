"use client";

import { useState, useEffect } from "react";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import Image from "next/image";
import FlipCard from "@/components/flipCard";

import "./flipCard.css";
import { useWindowWidth } from "../hooks/useWindowWidth";

const Products = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const windowWidth = useWindowWidth();

  const isMobile = windowWidth < 768;

  if (isMobile) {
    return (
      <div className="flex flex-col items-center px-6 py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="flex pb-8">
        <Button
          as={Link}
          className="px-16 py-10 text-xl font-semibold"
          color="warning"
          href="/tarasy"
          variant="ghost"
        >
          Zobacz więcej
        </Button>
      </div>
      <p className="text-2xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
        Oferujemy najwyższej jakości deski kompozytowe i akcesoria do montażu.
        Twój wymarzony taras w najlepszej cenie!
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center w-full px-6 py-2 gap-y-6 lg:gap-x-8">
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="flex gap-6 bg-white p-6 rounded-lg shadow-lg max-w-[90%] md:max-w-full">
            <div className="w-full h-48">
              <Image
                alt="Produkt 1"
                className="object-cover w-full h-full rounded-md mb-2"
                src="/kolory_desek/jasny brąz.jpg"
                width={900}
                height={900}
              />
            </div>
            <div className="w-full h-48">
              <Image
                alt="Taras"
                className="object-cover w-full h-full rounded-md mb-2"
                src="/deska_kompozytowa/20240326_110308.png"
                width={600}
                height={600}
              />
            </div>
            <div className="w-full h-48">
              <Image
                alt="Deska kompozytowa"
                className="object-cover w-full h-full rounded-md mb-2"
                src="/deska_kompozytowa/deska-8.jpg"
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            alt="Deska kompozytowa"
            className="object-cover rounded-lg shadow-md max-w-full md:max-w-[80%]"
            src="/zadaszenia_prosty_spadek/zadaszenie z poliwęglanu.jpg"
            width={900}
            height={800}
          />
        </div>
      </div>
    </div>
    )
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center px-6 py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="flex pb-8">
        <Button
          as={Link}
          className="px-16 py-10 text-xl font-semibold"
          color="warning"
          href="/tarasy"
          variant="ghost"
        >
          Zobacz więcej
        </Button>
      </div>
      <p className="text-2xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
        Oferujemy najwyższej jakości deski kompozytowe i akcesoria do montażu.
        Twój wymarzony taras w najlepszej cenie!
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center w-full px-6 py-2 gap-y-6 lg:gap-x-8">

    <div className="w-full md:w-1/2 flex justify-center">
      <div className="flex gap-6 bg-white p-6 rounded-lg shadow-lg max-w-[90%] md:max-w-full">
        <FlipCard
          frontContent={
            <Image
              alt="Produkt 1"
              className="object-cover w-full h-48 rounded-md mb-2"
              src="/kolory_desek/jasny brąz.jpg"
              width={900}
              height={900}
            />
          }
          backContent={
            <Image
              alt="Produkt 1"
              className="object-cover w-full h-48 rounded-md mb-2"
              src="/kolory_desek/ciemny szary 7016.jpg"
              width={900}
              height={900}
            />
          }
          isActive={activeIndex === 0}
        />
        <FlipCard
          frontContent={
            <Image
              alt="Taras"
              className="object-cover w-full h-48 rounded-md mb-2"
              src="/deska_kompozytowa/20240326_110308.png"
              width={600}
              height={600}
            />
          }
          backContent={
            <Image
              alt="Taras"
              className="object-cover w-full h-48 rounded-md mb-2"
              src="/deska_kompozytowa/IMG-20230711-WA0002.jpg"
              width={300}
              height={300}
            />
          }
          isActive={activeIndex === 1}
        />
        <FlipCard
          frontContent={
            <Image
              alt="Deska kompozytowa"
              className="object-cover w-full h-48 rounded-md mb-2"
              src="/deska_kompozytowa/deska-8.jpg"
              width={600}
              height={600}
            />
          }
          backContent={
            <Image
              alt="Deska kompozytowa"
              className="object-cover w-full h-48 rounded-md mb-2"
              src="/deska_kompozytowa/belgravia-9-.800x600.jpg"
              width={600}
              height={600}
            />
          }
          isActive={activeIndex === 2}
        />
      </div>
    </div>

    <div className="w-full md:w-1/2 flex justify-center">
      <Image
        alt="Deska kompozytowa"
        className="object-cover rounded-lg shadow-md max-w-full md:max-w-[80%]"
        src="/zadaszenia_prosty_spadek/zadaszenie z poliwęglanu.jpg"
        width={900}
        height={800}
      />
    </div>
  </div>

    </div>
  );
};

export default Products;
