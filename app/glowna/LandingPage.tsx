"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { FaGem, FaRocket, FaGift, FaUserTie } from "react-icons/fa";
import { Link } from "@heroui/link";

const images = [
  "https://stimeo-domki.pl/themes/default-bootstrap/dynamite/LP/zadaszenia-tarasow-1.JPEG",
  "https://maszyny-stolarskie.com.pl/wp-content/uploads/2019/07/gfghhhhg.jpg",
  "https://drewelt.pl/images/galerie/38/1BIOCLIMATIC.webp",
];

const LandingPageImage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(false);
      }, 1000);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full mx-auto">
      <Card isFooterBlurred className="border-none" radius="lg">
        <div className="relative w-full h-[600px] overflow-hidden">
          <Image
            alt={`Slide ${currentIndex + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-1000 ${
              fade ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
            height={600}
            src={images[currentIndex]}
            width={1920}
          />
        </div>
        <CardBody className="absolute left-12 top-1/2 transform -translate-y-1/2 p-2 z-10">
          <p className="text-xs border border-[#e9a749] text-[#e9a749] px-6 py-0.5 inline-block mb-2 w-1/6 text-center">
            Sztuka drewna
          </p>
          <p className="text-2xl font-bold text-white mb-4">
            Najlepsze tarasy i zadaszenia
          </p>
          <Button
            className="text-base px-4 py-2 w-1/6"
            color="warning"
            radius="lg"
            size="sm"
            as={Link}
            href="/tarasy"
          >
            Zobacz więcej
          </Button>
        </CardBody>

        <CardFooter className="bg-[#262420] py-6">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {/* Sektor 1 - JAKOŚĆ */}
              <div className="flex flex-col items-center">
                <FaGem className="w-8 h-8 text-[#e9a749] mb-2" />
                <div className="text-[#e9a749] font-semibold">JAKOŚĆ</div>
                <div className="text-xs text-[#e9a749] mt-1">
                  Najwyższa jakość materiałów
                </div>
              </div>
              <div className="flex flex-col items-center">
                <FaRocket className="w-8 h-8 text-[#e9a749] mb-2" />
                <div className="text-[#e9a749] font-semibold">SZYBKA REALIZACJA</div>
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
                <div className="text-[#e9a749] font-semibold">TOPOWA OBSŁUGA</div>
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
