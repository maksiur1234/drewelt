"use client"

import Link from "next/link"
import styles from "@/components/Base/Footer/Footer.module.scss"
import { altanyLinks, kontaktLinks, menuLinks, tarasyLinks, zadaszeniaLinks } from "./FooterLinks"


const Footer = () => {
  const columns = [
    { heading: "Menu", links: menuLinks },
    { heading: "Kontakt", links: kontaktLinks },
    { heading: "Zadaszenia", links: zadaszeniaLinks },
    { heading: "Tarasy", links: tarasyLinks },
    { heading: "Altany ogrodowe", links: altanyLinks },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.footerColumns}>
        {columns.map((col, idx) => (
          <div key={idx} className={styles.column}>
            <h3 className={styles.heading}>{col.heading}</h3>
            <ul>
              {col.links.map((link, i) => (
                <li key={i}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
