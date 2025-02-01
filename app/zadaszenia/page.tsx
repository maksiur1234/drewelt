'use client'

import BlurModal from "@/components/modal";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Image } from "@heroui/image";
import { useEffect, useRef, useState } from "react";

export default function RoofPage() {
  const cities = [
    { name: "Poznań", description: "Poznań to jedno z najstarszych miast Polski, znane z pięknej starówki i Targów Poznańskich." },
    { name: "Leszno", description: "Leszno to miasto sportu, znane z zawodów żużlowych i pięknych terenów rekreacyjnych." },
    { name: "Lubin", description: "Lubin to serce polskiego przemysłu miedziowego, położone w Dolnym Śląsku." },
    { name: "Wrocław", description: "Wrocław to jedno z najpiękniejszych miast Polski, pełne mostów i krasnali." },
    { name: "Konin", description: "Konin to miasto położone nad Wartą, znane z przemysłu i pięknych krajobrazów." },
    { name: "Gorzów Wielkopolski", description: "Gorzów Wlkp. to miasto nad Wartą z bogatą historią i pięknymi parkami." },
    { name: "Zielona Góra", description: "Zielona Góra to miasto znane z winnic i corocznego festiwalu wina." }
  ]
  
  const [visibleCities, setVisibleCities] = useState<number[]>([])
  let index = useRef(0)

  useEffect(() => {
    function showNextCity() {
      setVisibleCities(prev => [...prev, index.current])
      index.current++

      if (index.current < cities.length) {
        setTimeout(showNextCity)
      }
    }

    showNextCity()

  }, []);
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
        Zadaszenia altan, garaży i tarasów
        
      </h1>
      <Divider className="mb-6" />
      <Card className="mb-12 flex flex-col items-center p-6 shadow-lg bg-gray-50 w-full">
        <CardHeader className="text-xl justify-center font-semibold text-gray-800 text-center">
          Działamy na terenie miast
        </CardHeader>
        
        <CardBody className="flex flex-row items-center justify-start gap-4 overflow-x-auto w-full px-4">
        
          {cities.map((city, index) => (
            <div key={index}>
              <div className="px-4 py-2 rounded-lg font-medium transition-all duration-500 ease-in-out whitespace-nowrap"
                style={{
                  opacity: visibleCities.includes(index) ? 1 : 0,
                  transform: visibleCities.includes(index) 
                    ? 'translateY(0)' 
                    : `translateY(${index % 2 === 0 ? '10px' : '-10px'})`,
                  transitionDelay: `${index * 0.3}s`
                }}>
                <BlurModal name={city.name} description={city.description} label={city.name}/>
              </div>
            </div>
          ))}
        </CardBody>
      </Card>
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <div className="md:w-1/2 text-gray-700 text-lg leading-relaxed">
          <p>
            Zajmujemy się produkcją drewnianych konstrukcji zadaszeń tarasowych, garażowych oraz altanowych. Wykonujemy je z klejonego warstwowo drewna świerkowego – BSH o wilgotności 12-18%. Jest ono szczególnym rodzajem certyfikowanego drewna konstrukcyjnego, które jest alternatywą dla budowli stalowych i żelbetowych.
          </p>
          <ul className="mt-4 list-disc list-inside">
            <li>Wytrzymałość i oporność na zmiany temperatury</li>
            <li>Duża wytrzymałość ogniowa</li>
            <li>Ekonomiczny zakup, transport i konserwacja</li>
            <li>Duża estetyka wykonania i stałość wymiarowa</li>
          </ul>
        </div>
        <div className="md:w-1/2">
          <Image
            src="https://drewelt.pl/images/design/zadaszenie-gniezno.webp"
            alt="Drewniana konstrukcja zadaszenia"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse items-center gap-8">
        <div className="md:w-1/2 text-gray-700 text-lg leading-relaxed">
          <p>
            Na postawionych profilach drewnianych montujemy poliwęglan komorowy o grubości 10 mm. Można wybrać jego kolor: bezbarwny, mleczny lub dymiony. Poliwęglan komorowy jest tworzywem sztucznym stosowanym do zadaszeń różnych obiektów.
          </p>
          <ul className="mt-4 list-disc list-inside">
            <li>Duża trwałość i twardość</li>
            <li>Niewielka waga</li>
            <li>Odpowiednie właściwości termoizolacyjne</li>
            <li>Ochrona przed UV z jednoczesną przepuszczalnością światła</li>
          </ul>
        </div>
        <div className="md:w-1/2">
          <Image
            src="https://drewelt.pl/images/design/zadaszenie-tarasu-wroclaw-6.webp"
            alt="Poliwęglanowe pokrycie konstrukcji"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>
    </div>
  );
}
