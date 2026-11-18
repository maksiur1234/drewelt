'use client'

import Image from "next/image"
import { useRouter } from "next/navigation"

import styles from '@/components/Altany/Head/Head.module.scss'

const Head = () => {
  const router = useRouter()

  const handleClick = () => {
    router.push('/kontakt')
  }

  return (
    <div className={styles.container}>
      <Image
        src="/altany_ogrodowe/drewelt-altany-2.jpg"
        alt="Altana ogrodowa"
        fill
        priority
        className={styles.image}
      />

      <div className={`${styles.content} ${styles.slideUpText}`}>
        <h1>Altana ogrodowa drewniana w Drewelt</h1>
        <p>Firma Drewelt dostarcza solidne <strong>altanki ogrodowe</strong>, które powstają z pasji do rzemiosła oraz zamiłowania do naturalnych materiałów.</p>
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
