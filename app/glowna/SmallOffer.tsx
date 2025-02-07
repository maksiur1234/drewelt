"use client";

import { Card, CardHeader } from "@heroui/card";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";

const SmallOffer = () => {
  return (
    <div className="flex items-center justify-center min-h-screen mt-12">
      <div className="w-full gap-6 grid grid-cols-12 grid-rows-2 px-6">
        <Link className="col-span-12 md:col-span-7 block" href="/galeria">
          <Card isFooterBlurred className="w-full h-[400px]">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                Pergole aluminiowe
              </p>
              <h4 className="text-white/90 font-medium text-xl">
                Nowoczesne zadaszenie
              </h4>
            </CardHeader>
            <Image
              isZoomed
              removeWrapper
              alt="Pergole aluminiowe"
              className="z-0 w-full h-full object-cover"
              src="https://drewelt.pl/images/galerie/38/1BIOCLIMATIC.webp"
            />
          </Card>
        </Link>

        <Link className="col-span-12 md:col-span-5 block" href="/galeria">
          <Card className="w-full h-[400px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-gray-800 uppercase font-bold">
                Taras drewniany
              </p>
              <h4 className="text-gray-600 font-medium text-large">
                Deski kompozytowe
              </h4>
            </CardHeader>
            <Image
              isZoomed
              removeWrapper
              alt="Taras drewniany"
              className="z-0 w-full h-full object-cover"
              src="https://drewelt.pl/images/galerie/37/zadaszenie-z-prostym-spadkiem-8.webp"
            />
          </Card>
        </Link>

        <Link className="col-span-12 md:col-span-5 block" href="/galeria">
          <Card className="w-full h-[400px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                Zadaszenia drewniane
              </p>
              <h4 className="text-white font-medium text-large">
                Nowoczesne rozwiązania
              </h4>
            </CardHeader>
            <Image
              isZoomed
              removeWrapper
              alt="Zadaszenia drewniane"
              className="z-0 w-full h-full object-cover"
              src="https://drewelt.pl/images/galerie/21/najnowsze-realizacje8.webp"
            />
          </Card>
        </Link>

        <Link
          className="col-span-12 md:col-span-7 row-span-2 block"
          href="/galeria"
        >
          <Card isFooterBlurred className="w-full h-[400px]">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                Zadaszenia aluminiowe
              </p>
              <h4 className="text-black font-medium text-2xl">
                Innowacyjny design
              </h4>
            </CardHeader>
            <Image
              isZoomed
              removeWrapper
              alt="Zadaszenia aluminiowe"
              className="z-0 w-full h-full object-cover"
              src="https://drewelt.pl/images/galerie/37/zadaszenie-z-prostym-spadkiem-17.webp"
            />
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default SmallOffer;
