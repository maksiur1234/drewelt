"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@heroui/button";
import { Card, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";

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
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <p className="text-tiny text-white/80">Najlepsze tarasy i zadaszenia</p>
          <Button
            className="text-tiny text-white bg-black/20"
            color="default"
            radius="lg"
            size="sm"
            variant="flat"
          >
            Zobacz więcej
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LandingPageImage;
