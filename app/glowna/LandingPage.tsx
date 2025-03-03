"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter } from "@heroui/card";
import Image from "next/image";
import { FaGem, FaRocket, FaGift, FaUserTie } from "react-icons/fa";
import { Link } from "@heroui/link";

import { useWindowWidth } from "../hooks/useWindowWidth";

const LandingPageImage = () => {
  const [mounted, setMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const windowWidth = useWindowWidth();

  const obrazki = [
    "/obrazki/20230628_193255.jpg",
    "/obrazki/Poznań1.jpg",
    "/zadaszenia_na_lukach/20221129_122712.jpg",
    "/obrazki/20221104_100135.jpg",
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  const isMobile = windowWidth < 768;
  const imageHeight = isMobile ? 300 : 600;

  useEffect(() => {
    if (obrazki.length === 0) return;

    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % obrazki.length);
        setFade(false);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, [obrazki]);

  if (!mounted) {
    return <div className="relative w-full mx-auto min-h-[600px]" />;
  }

  if (isMobile) {
    return (
      <div className="w-full mx-auto p-4">
        <Card isFooterBlurred className="border-none" radius="lg">
          <div
            className="relative w-full overflow-hidden rounded-t-lg"
            style={{ height: `${imageHeight}px` }}
          >
            {obrazki.map((src, index) => (
              <Image
              key={index}
                alt={`Slide ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                  index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
                height={imageHeight}
                src={src}
                width={1920}
              />
           ))}
          </div>
          <CardBody className="p-4 text-center">
            <p className="text-xs border border-[#e9a749] text-[#e9a749] px-4 py-0.5 inline-block mb-2 w-full">
              Sztuka drewna
            </p>
            <p className="text-xl font-bold text-black mb-4">
              Najlepsze tarasy i zadaszenia
            </p>
            <Button
              as={Link}
              className="text-base px-4 py-2 w-full"
              color="warning"
              href="/tarasy"
              radius="lg"
              size="sm"
            >
              Zobacz więcej
            </Button>
          </CardBody>
          <CardFooter className="bg-[#262420] py-4 rounded-b-lg">
            <div className="max-w-6xl mx-auto px-4">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <FaGem className="w-6 h-6 text-[#e9a749] mb-2" />
                  <div className="text-[#e9a749] font-semibold text-sm">
                    JAKOŚĆ
                  </div>
                  <div className="text-xs text-[#e9a749] mt-1">
                    Najwyższa jakość materiałów
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <FaRocket className="w-6 h-6 text-[#e9a749] mb-2" />
                  <div className="text-[#e9a749] font-semibold text-sm">
                    SZYBKA REALIZACJA
                  </div>
                  <div className="text-xs text-[#e9a749] mt-1">
                    Ekspresowy montaż
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <FaGift className="w-6 h-6 text-[#e9a749] mb-2" />
                  <div className="text-[#e9a749] font-semibold text-sm">
                    UNIKATOWOŚĆ
                  </div>
                  <div className="text-xs text-[#e9a749] mt-1">
                    Niepowtarzalny design
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <FaUserTie className="w-6 h-6 text-[#e9a749] mb-2" />
                  <div className="text-[#e9a749] font-semibold text-sm">
                    TOPOWA OBSŁUGA
                  </div>
                  <div className="text-xs text-[#e9a749] mt-1">
                    Profesjonalne podejście
                  </div>
                </div>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="relative w-full mx-auto">
      <Card isFooterBlurred className="border-none" radius="lg">
        <div className="relative w-full h-screen overflow-hidden">
          {obrazki.map((src, index) => (
            <Image
              key={index}
              alt={`Obrazek ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              src={src}
              priority
              width={1920}
              height={1000}
            />
          ))}
        </div>
        <CardBody className="absolute left-12 top-1/2 transform -translate-y-1/2 p-2 z-10">
          <p className="text-xs border border-[#e9a749] text-[#e9a749] px-6 py-0.5 inline-block mb-2 w-1/6 text-center bg-[#262420] bg-opacity-60">
            Sztuka drewna
          </p>
          <p className="text-2xl font-bold text-white mb-4 drop-shadow-lg">
            Najlepsze tarasy i zadaszenia
          </p>
          <Button
            as={Link}
            className="text-base px-4 py-2 w-1/6"
            color="warning"
            href="/tarasy"
            radius="lg"
            size="sm"
          >
            Zobacz więcej
          </Button>
        </CardBody>

        <CardFooter className="bg-[#262420] py-6">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="flex flex-col items-center">
                <FaGem className="w-8 h-8 text-[#e9a749] mb-2" />
                <div className="text-[#e9a749] font-semibold">JAKOŚĆ</div>
                <div className="text-xs text-[#e9a749] mt-1">
                  Najwyższa jakość materiałów
                </div>
              </div>
              <div className="flex flex-col items-center">
                <FaRocket className="w-8 h-8 text-[#e9a749] mb-2" />
                <div className="text-[#e9a749] font-semibold">
                  SZYBKA REALIZACJA
                </div>
                <div className="text-xs text-[#e9a749] mt-1">
                  Ekspresowy montaż
                </div>
              </div>
              <div className="flex flex-col items-center">
                <FaGift className="w-8 h-8 text-[#e9a749] mb-2" />
                <div className="text-[#e9a749] font-semibold">UNIKATOWOŚĆ</div>
                <div className="text-xs text-[#e9a749] mt-1">
                  Niepowtarzalny design
                </div>
              </div>
              <div className="flex flex-col items-center">
                <FaUserTie className="w-8 h-8 text-[#e9a749] mb-2" />
                <div className="text-[#e9a749] font-semibold">
                  TOPOWA OBSŁUGA
                </div>
                <div className="text-xs text-[#e9a749] mt-1">
                  Profesjonalne podejście
                </div>
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LandingPageImage;
