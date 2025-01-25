import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
import {Card, CardHeader, CardBody, CardFooter} from "@heroui/card";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import HomePage from "./glowna/HomePage";

export default function Home() {
  return (
    <div>
    <section className="flex flex-col items-center justify-center gap-4 py-8 ">
      <div className="inline-block text-center justify-center">
        <span className={title()}>Dobierz&nbsp;</span>
        <span className={title({ color: "green" })}>najlepsze&nbsp;</span>
        <br />
        <span className={title()}>
          zadaszenia oraz tarasy
        </span>
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
