'use client'

import Image from "next/image"
import { useRouter } from "next/navigation"

import styles from '@/components/Zadaszenia/Head/Head.module.scss'

const Head = () => {
  const router = useRouter()

  const handleClick = () => {
    router.push('/kontakt')
  }

  return (
    <div className={styles.container}>
      <Image
        src="/zadaszenia-przyscienne/head.png"
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
          onClick={handleClick}
        >
          Otrzymaj bezpłatną wycenę
        </button>
      </div>
    </div>
  )
}

export default Head
