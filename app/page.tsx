import HomePage from "./glowna/HomePage";

import { title, subtitle } from "@/components/primitives";

export default function Home() {
  return (
    <div className="bg-[#f8f8f8]">
      <section className="flex flex-col items-center justify-center gap-4 py-8 bg-[#f8f8f8]">
        <div className="inline-block text-center justify-center">
          <span className={title()}>Dobierz&nbsp;</span>
          <span className={title({ color: "primary" })}>najlepsze&nbsp;</span>
          <br />
          <span className={title()}>zadaszenia oraz tarasy</span>
          <div className={subtitle({ class: "mt-4" })}>
            Nowczosene, piękne oraz solidne konstrukcje
          </div>
        </div>
        <div className="flex gap-3">
          <HomePage />
        </div>
      </section>
    </div>
  );
}
