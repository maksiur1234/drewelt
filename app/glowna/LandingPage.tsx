import React from "react";
import { Button } from "@heroui/button";
import {Card, CardHeader, CardBody, CardFooter} from "@heroui/card";
import { Image } from "@heroui/image";

const LandingPageImage = () => {
  return (
    <div className="">
    <Card isFooterBlurred className="border-none" radius="lg">
            <Image
              alt="Woman listing to music"
              className="object-cover"
              height={600}
              src="https://stimeo-domki.pl/themes/default-bootstrap/dynamite/LP/zadaszenia-tarasow-1.JPEG"
              width={1920}
            />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-tiny text-white/80">Najelpsze tarasy i zadaszenia</p>
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
