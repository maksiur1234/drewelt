'use client'

import Image from "next/image"
import { useRouter } from "next/navigation"

import styles from '@/components/Garaze/Head/Head.module.scss'

const Head = () => {
  const router = useRouter()

  const handleClick = () => {
    router.push('/kontakt')
  }
  return (
    <div className={styles.container}>
      <Image
        src="/wiaty-wolnostojace/head.png"
        alt="Wiata garażowa"
        fill
        priority
        className={styles.image}
      />

      <div className={`${styles.content} ${styles.slideUpText}`}>
        <h1>Wiata zastąpi garaż za ułamek jego ceny</h1>
        <p>
          Wiaty samochodowe z drewna klejonego BSH. Zapomnij o skrobaniu szyb,
          nagrzanym wnętrzu i ptasich odchodach na lakierze.
        </p>
      </div>

      <div className={styles.buttonWrapper}>
        <button
          className={`${styles.outlineButton} ${styles.slideUpButton}`}
          onClick={handleClick}
        >
          Wyceń ochronę dla auta
        </button>
      </div>
    </div>
  )
}

export default Head
