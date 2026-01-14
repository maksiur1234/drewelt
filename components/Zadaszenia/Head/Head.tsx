'use client'

import Image from "next/image"
import styles from '@/components/Zadaszenia/Head/Head.module.scss'

const Head = () => {
  return (
    <div className={styles.container}>
      <Image
        src="/zadaszenia_prosty_spadek_na_belce/zadaszenie na belce.jpg"
        alt="Zadaszenie tarasu"
        fill
        priority
        className={styles.image}
      />

      <div className={`${styles.content} ${styles.slideUpText}`}>
        <h1>Przedłużymy lato na Twoim tarasie o 5 miesięcy.</h1>
        <p>
          Solidne konstrukcje z drewna klejonego i poliwęglanu. Odporne na polską pogodę,
          idealnie dopasowane do Twojego domu.
        </p>
      </div>

      <div className={styles.buttonWrapper}>
        <button
          className={`${styles.outlineButton} ${styles.slideUpButton}`}
          onClick={() =>
            document.getElementById("form")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
        >
          Otrzymaj bezpłatną wycenę
        </button>
      </div>
    </div>
  )
}

export default Head
