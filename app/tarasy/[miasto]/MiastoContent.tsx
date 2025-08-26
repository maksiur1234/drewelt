"use client";

import React, { useEffect, useState } from "react";
import { seoContentList } from "@/app/lib/seoContent";

const cityMapping: Record<string, string> = {
  poznan: "Poznań",
  leszno: "Leszno",
  wrzesnia: "Września",
  gniezno: "Gniezno",
  wroclaw: "Wrocław",
  konin: "Konin",
};

export default function MiastoContent({ params }: { params: any }) {
  const [decodedMiasto, setDecodedMiasto] = useState<string | null>(null);
  const [content, setContent] = useState<any>(null);

  useEffect(() => {
    const getParams = async () => {
      const resolvedParams = await params;
      const miasto = resolvedParams.miasto;
      const decoded = decodeURIComponent(cityMapping[miasto] || miasto.replace(/-/g, " "));
      setDecodedMiasto(decoded);
      const tmpContent = seoContentList.find((item) => item.url === miasto);
      setContent(tmpContent);
    }
    
    getParams();
  }, [params]);

  if (!decodedMiasto) {
    return <p className="text-center text-gray-600 py-10">Ładowanie...</p>;
  }

  if (decodedMiasto === "deska tarasowa kompozytowa poznan" || decodedMiasto === "deska tarasowa kompozytowa wroclaw" || decodedMiasto === "deska tarasowa kompozytowa konin") {
    console.log("HTML content.content:", content?.content);
    console.log("HTML content:", content);
    return (
      <div dangerouslySetInnerHTML={{ __html: content?.content || "Nie znaleziono treści."}} />
    );
  }
  else {
    return (
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg mt-12 space-y-8">
        <h2 className="text-3xl font-bold text-gray-800">
          Deska tarasowa, deska kompozytowa {decodedMiasto}
        </h2>
        <p className="text-base leading-7 text-gray-700">
          Taras to miejsce przeznaczone do odpoczynku w cieplejszym okresie roku. Żeby spędzenie na nim czasu było przyjemne, warto zadbać o odpowiednią konstrukcję i estetyczne wykonanie. Oferujemy tarasy z desek tarasowych i desek kompozytowych w {decodedMiasto} i okolicach, które cechują się estetyką, ale też łatwością eksploatowania, wytrzymałością oraz konkurencyjną ceną.
        </p>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800">
            Deska kompozytowa {decodedMiasto} – dlaczego warto?
          </h3>
          <p className="text-base leading-7 text-gray-700">
            Deski kompozytowe w {decodedMiasto} są uznawane za jeden z najlepszych materiałów przy wykonywaniu tarasów. W przeciwieństwie do standardowych desek drewnianych, w ich produkcji używa się różnych tworzyw. Deski kompozytowe w {decodedMiasto} to w większości części naturalne, na które składa się drewno, mączka drzewna i włókna bambusowe.
          </p>
          <p className="text-base leading-7 text-gray-700">
            Ponadto w składzie produktu znajdują się polimery termoplastyczne oraz dodatki w postaci pigmentów, żywic oraz stabilizatorów. Dzięki temu możliwe jest uzyskanie desek kompozytowych, które wyglądem dobrze imitują drewno, ale ponadto cechują się pozytywnymi właściwościami, charakterystycznymi dla tworzyw sztucznych, takimi jak: odporność na wilgoć, skrajne temperatury, promieniowanie UV, butwienie, czynniki biologiczne (grzyby czy pleśnie), czy uszkodzenia mechaniczne.
          </p>
          <p className="text-base leading-7 text-gray-700">
            Z tego powodu są doskonałą i jednocześnie tańszą alternatywą dla desek naturalnych. Deska kompozytowa w {decodedMiasto} odznacza się wyjątkową estetyką i trwałością. Jeżeli pragniesz stworzyć odpowiednią przestrzeń tarasową, która będzie niezawodna – to właśnie do tego najlepsza będzie deska kompozytowa. {decodedMiasto} to miasto, gdzie taki taras będzie pasował idealnie!
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800">
            Deska tarasowa {decodedMiasto} – dlaczego my?
          </h3>
          <p className="text-base leading-7 text-gray-700">
            Podczas produkcji desek tarasowych w {decodedMiasto} korzystamy wyłącznie ze sprawdzonych składników, dzięki czemu końcowy produkt cechuje się wysoką jakością wykonania oraz interesującym wyglądem. Ponadto nasze deski tarasowe w {decodedMiasto} posiadają antypoślizgową powierzchnię, dzięki czemu ograniczają ryzyko poślizgnięcia się przy większej wilgotności czy przymrozku.
          </p>
          <p className="text-base leading-7 text-gray-700">
            Nasze produkty są przeznaczone dla wymagających osób, którym zależy na dobrej cenie oraz świetnych właściwościach. Zachęcamy więc wykorzystać do tego celu wysokiej jakości komponent, jakim jest deska tarasowa. {decodedMiasto} to miasto, gdzie wyposażenie tarasu jest świetnym pomysłem na każdą porę roku.
          </p>
          <p className="text-base leading-7 text-gray-700">
            U nas możesz liczyć także na kilka wersji kolorystycznych desek tarasowych w {decodedMiasto}. Ponadto sami postaramy się dobrać dla Ciebie produkty. Wystarczy, że prześlesz nam miejsce, w którym ma się znajdować, czy już znajduje taras, a my skompletujemy wszystkie elementy do jego wykonania – w tym deski cokołowe, klipsy kątowe czy legary kompozytowe.
          </p>
          <p className="text-base leading-7 text-gray-700">
            Możemy również zaproponować montaż. Nasze produkty są odporne na zapalenie, a ponadto nie wymagają malowania i impregnacji. Cechują się też zgodnością z wymogami ekologicznymi, a więc są proste w utylizacji. W razie dodatkowych pytań lub zainteresowania ofertą – prosimy o kontakt.
          </p>
          <p className="text-base leading-7 text-gray-700">
            Nasz zespół wykonuje deski tarasowe w {decodedMiasto} w pełni profesjonalnie i terminowo. Robimy również zadaszenia tarasów w {decodedMiasto} – serdecznie zapraszamy do współpracy!
          </p>
        </div>
      </div>
    );
  }
}
