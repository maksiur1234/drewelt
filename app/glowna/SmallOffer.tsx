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
              <p className="text-tiny text-black/60 uppercase font-bold">
                Zadaszenia z prostym spadkiem
              </p>
              <h4 className="text-white/90 font-medium text-xl">
                Nowoczesne zadaszenie
              </h4>
            </CardHeader>
            <Image
              isZoomed
              removeWrapper
              alt="Zadaszenia z prostym spadkiem"
              className="z-0 w-full h-full object-cover"
              src="/obrazki/Poznań1.jpg"
            />
          </Card>
        </Link>

        <Link className="col-span-12 md:col-span-5 block" href="/galeria">
          <Card className="w-full h-[400px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-black-600 uppercase font-bold">
                Drewniane zadaszenie
              </p>
              <h4 className="text-white font-medium text-large">
                Klasyczny wygląd
              </h4>
            </CardHeader>
            <Image
              isZoomed
              removeWrapper
              alt="Taras drewniany"
              className="z-0 w-full h-full object-cover"
              src="/obrazki/20230628_193255.jpg"
            />
          </Card>
        </Link>

        <Link className="col-span-12 md:col-span-5 block" href="/galeria">
          <Card className="w-full h-[400px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-gray-500 uppercase font-bold">
                Zadaszenia na łukach
              </p>
              <h4 className="text-white font-medium text-large">
                Nowoczesne rozwiązania
              </h4>
            </CardHeader>
            <Image
              isZoomed
              removeWrapper
              alt="Zadaszenia na łukach"
              className="z-0 w-full h-full object-cover"
              src="/zadaszenia_na_lukach/IMG_20190313_112655.jpg"
            />
          </Card>
        </Link>

        <Link
          className="col-span-12 md:col-span-7 row-span-2 block"
          href="/galeria"
        >
          <Card isFooterBlurred className="w-full h-[400px]">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-black/60 uppercase font-bold">
                Drewniany taras
              </p>
              <h4 className="text-white font-medium text-2xl">
                Innowacyjny design
              </h4>
            </CardHeader>
            <Image
              isZoomed
              removeWrapper
              alt="Zadaszenia aluminiowe"
              className="z-0 w-full h-full object-cover"
              src="/obrazki/IMG-20220213-WA0030.jpg"
              style={{
                objectPosition: "50% 5%",
              }}
            />
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default SmallOffer;
