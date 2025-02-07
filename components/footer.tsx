"use client";

import { Link } from "@heroui/link";

export const Footer = () => {
  return (
    <footer className="w-full bg-[#262420] text-[#e9a749]">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="flex-1 mb-6 md:mb-0">
            <h1 className="text-2xl md:text-3xl font-bold">
              Pomagamy ludziom tworzyć nowoczesne rozwiązania
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row gap-8">
            <div className="pl-8 border-l border-[#e9a749]">
              <h2 className="text-lg font-bold mb-2">Nawigacja</h2>
              <ul className="space-y-1">
                <li>
                  <Link href="/" className="text-sm hover:underline text-white">
                    Strona główna
                  </Link>
                </li>
                <li>
                  <Link
                    href="/oNas"
                    className="text-sm hover:underline text-white"
                  >
                    O nas
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tarasy"
                    className="text-sm hover:underline text-white"
                  >
                    Usługi
                  </Link>
                </li>
                <li>
                  <Link
                    href="/kontakt"
                    className="text-sm hover:underline text-white"
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
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:underline text-white"
                  >
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:underline text-white"
                  >
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-t border-[#e9a749]" />
        <div className="text-center text-xs">
          © {new Date().getFullYear()} Stworzone przez Maksymilian Robak.
          Wszystkie prawa zastrzeżone.
        </div>
      </div>
    </footer>
  );
};
