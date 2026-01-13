'use client'

import Image from "next/image"
import styles from '@/components/Garaze/Head/Head.module.scss'

const Head = () => {
  return (
    <div className={styles.container}>
      <Image
        src="/zadaszenia_prosty_spadek_na_belce/zadaszenie na belce.jpg"
        alt="Siedziba"
        fill
        priority
        className={styles.image}
      />

      <div className={styles.content}>
        <h1>Ochrona garaży za ułamek jego ceny</h1>
        <p>
          Wiaty samochodowe z drewna klejonego BSH. Zapomnij o skrobaniu szyb,
          nagrzanym wnętrzu i ptasich odchodach na lakierze.
        </p>
      </div>

      <div className={styles.buttonWrapper}>
        <button
          className={styles.outlineButton}
          onClick={() =>
            document.getElementById("form")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
        >
          Wyceń ochronę dla auta
        </button>
      </div>
    </div>
  )
}

export default Head
