import React from "react";
import { Button } from "@heroui/button";

const LandingPageImage = () => {
  return (
    <div className="relative w-full h-[60vh] overflow-hidden">
      <img
        src="https://stimeo-domki.pl/themes/default-bootstrap/dynamite/LP/zadaszenia-tarasow-1.JPEG"
        alt="Zadaszenie strona główna"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 flex flex-col justify-center items-end bg-black bg-opacity-50 p-4 pr-20">
        <h2 className="text-lg font-bold mb-4 pr-36 text-green-800">najlepiej dobrane</h2>
        <p className="text-2xl mb-6 pr-20 text-green-800">Zadaszenia i tarasy</p>
        <div className="pr-44">
          <Button color="warning" variant="ghost">
            Zobacz ofertę
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LandingPageImage;
