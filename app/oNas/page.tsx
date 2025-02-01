import { title } from "@/components/primitives";
import { Card } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-start justify-start py-12 px-6 ">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-6 text-center">Życie toczy się wokół drewna</h1>
      <Divider className="mb-6" />

      <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
        <Image
          src="https://drewelt.pl/images/galerie/21/najnowsze-realizacje7.webp"
          alt="O nas"
          className="rounded-lg shadow-md object-cover w-full md:w-1/2 max-h-[900px]"
        />
        <p className="text-gray-600 md:w-1/2">
        Firma Drewelt świadczy usługi produkcyjne i montażowe drewnianych konstrukcji tarasowych oraz wiat już od 2014 roku. Jej właścicielem jest Piotr Wiśniewski. Realizujemy zlecenia na terenie całego kraju, ze szczególnym uwzględnieniem Poznania i województwa wielkopolskiego. Zapewniamy uczciwą i przejrzystą współpracę. Jesteśmy elastyczni, dlatego bez obaw możesz nam powierzyć każdy projekt z zakresu naszej działalności. Posiadamy w sprzedaży bardzo dobrej jakości deski tarasowe kompozytowe w pięciu kolorach wraz z całym osprzętem koniecznym do montażu. Zaufaj doświadczonym specjalistom!
        </p>
      </div>

      <div className="mb-12 mt-12">
        <p className="text-gray-600">
        Od wielu lat realizujemy zlecenia z zakresu produkcji konstrukcji oraz pokryć dachowych. Wykorzystujemy sprawdzone materiały, na które dajemy 2-letnią gwarancję. Nasza siedziba znajduje się w Murowanej Goślinie w Wielkopolsce, zaledwie 15 km od Poznania.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-6 mt-12">
        <div className="flex flex-col md:w-1/2">
          <p className="text-gray-600">
            Nasze konstrukcje są impregnowane i dwukrotnie malowane na wybrany kolor.
          </p>
          <Link
            isExternal
            href="https://drewelt.pl/images/design/warunki-gwarancji-drewelt.pdf"
            underline="always"
            className="mt-4 text-blue-600 hover:underline justify-center"
          >
            Gwarancja
          </Link>
        </div>
        <Image
          src="https://drewelt.pl/images/galerie/21/najnowsze-realizacje7.webp"
          alt="O nas"
          className="rounded-lg shadow-md object-cover w-full md:w-1/2 max-h-[650px] ml-auto"
        />
      </div>

    </div>
  );
}
