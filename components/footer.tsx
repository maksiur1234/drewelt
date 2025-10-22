"use client";

import { Link } from "@heroui/link";

export const Footer = () => {
  return (
    <footer className="w-full bg-[#262420] text-[#e9a749]">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="flex-1 mb-6 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold">
              Pomagamy ludziom tworzyć nowoczesne rozwiązania
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-8">
          <div className="pl-8 border-l border-[#e9a749]">
            <h2 className="text-lg font-bold mb-2">Kontakt</h2>
              <ul className="space-y-1">
                <li>
                  <a
                    href="tel:+48887400824"
                    className="text-sm text-white hover:underline"
                  >
                    +48 887 400 824
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:drewelt@drewelt.com"
                    className="text-sm text-white hover:underline"
                  >
                    drewelt@drewelt.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="pl-8 border-l border-[#e9a749]">
              <h2 className="text-lg font-bold mb-2">Nawigacja</h2>
              <ul className="space-y-1">
                <li>
                  <Link className="text-sm hover:underline text-white" href="/">
                    Strona główna
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm hover:underline text-white"
                    href="/o-nas"
                  >
                    O nas
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm hover:underline text-white"
                    href="/tarasy"
                  >
                    Usługi
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm hover:underline text-white"
                    href="/kontakt"
                  >
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>
            <div className="pl-8 border-l border-[#e9a749]">
              <h2 className="text-lg font-bold mb-2">Social Media</h2>
              <ul className="space-y-1">
                <li>
                  <Link
                    className="text-sm hover:underline text-white"
                    href="https://facebook.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm hover:underline text-white"
                    href="https://instagram.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full max-w-7xl mx-auto px-12 py-4 bg-[#262420] rounded-lg">
          <div className="grid grid-cols-5 gap-6 items-start text-center md:text-left">
            <div className="col-span-2 space-y-2">
              <h2 className="text-xl font-bold text-[#e9a749] text-center">Zadaszenia</h2>
              <ul className="space-y-1 text-white text-center md:text-center">
                <li>
                  <a href="/zadaszenia/zadaszenia-tarasu-poznan" className="hover:underline">
                    Zadaszenie tarasu Poznań
                  </a>
                </li>
                <li>
                  <a href="/zadaszenia/zadaszenie-tarasu-gorzow-wlkp" className="hover:underline">
                    Zadaszenie tarasu Gorzów Wielkopolski
                  </a>
                </li>
                <li>
                  <a href="/zadaszenia/zadaszenie-tarasu-lubin" className="hover:underline">
                    Zadaszenie tarasu Lubin
                  </a>
                </li>
                {/* <li>
                  <a href="/zadaszenia/altany" className="hover:underline">
                    Zadaszenie tarasu Leszno
                  </a>
                </li> */}
                {/* <li>
                  <a href="/zadaszenia/altany" className="hover:underline">
                    Zadaszenie tarasu Września
                  </a>
                </li> */}
                {/* <li>
                  <a href="/zadaszenia/altany" className="hover:underline">
                    Zadaszenie tarasu Gniezno
                  </a>
                </li> */}
                <li>
                  <a href="/zadaszenia/zadaszenie-tarasu-glogow" className="hover:underline">
                    Zadaszenie tarasu Głogów
                  </a>
                </li>
                <li>
                  <a href="/zadaszenia/zadaszenie-tarasu-zielona-gora" className="hover:underline">
                    Zadaszenie tarasu Zielona Góra
                  </a>
                </li>
                <li>
                  <a href="/zadaszenia/zadaszenie-tarasu-konin" className="hover:underline">
                    Zadaszenie tarasu Konin
                  </a>
                </li>
                <li>
                  <a href="/zadaszenia/zadaszenie-tarasu-wroclaw" className="hover:underline">
                    Zadaszenie tarasu Wrocław
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex justify-center items-start">
              <div className="w-px h-80 bg-[#e9a749]" />
            </div>

            <div className="col-span-2 space-y-2">
              <h2 className="text-xl font-bold text-[#e9a749] text-center">Tarasy</h2>
              <ul className="space-y-1 text-white text-center md:text-center">
                <li>
                  <a href="/tarasy/deska-tarasowa-kompozytowa-konin" className="hover:underline">
                    Deska tarasowa, kompozytowa Konin
                  </a>
                </li>
                <li>
                  <a href="/tarasy/deska-tarasowa-kompozytowa-poznan" className="hover:underline">
                    Deska tarasowa, kompozytowa Poznań
                  </a>
                </li>
                <li>
                  <a href="/tarasy/deska-tarasowa-kompozytowa-leszno" className="hover:underline">
                    Deska tarasowa, kompozytowa Leszno
                  </a>
                </li>
                <li>
                  <a href="/tarasy/deska-tarasowa-kompozytowa-wroclaw" className="hover:underline">
                    Deska tarasowa, kompozytowa Wrocław
                  </a>
                </li>
                <li>
                  <a href="/tarasy/deska-tarasowa-kompozytowa-warszawa" className="hover:underline">
                    Deska tarasowa, kompozytowa Warszawa
                  </a>
                </li>
                <li>
                  <a href="/tarasy/deska-tarasowa-kompozytowa-wrzesnia" className="hover:underline">
                    Deska tarasowa, kompozytowa Września
                  </a>
                </li>
                <li>
                  <a href="/tarasy/deska-tarasowa-kompozytowa-gniezno" className="hover:underline">
                    Deska tarasowa, kompozytowa Gniezno
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-t border-[#e9a749]" />
        <div className="text-center text-xs">
          <Link
            isExternal
            className="text-gray-500 hover:underline"
            href="https://www.drewelt.pl/images/design/warunki-gwarancji-drewelt.pdf"
            underline="always"
          >
            Poznaj warunki gwarancji
          </Link>
          <div className="mt-2">
          © {new Date().getFullYear()}
          Wszystkie prawa zastrzeżone.
          </div>
        </div>
      </div>
    </footer>
  );
};
