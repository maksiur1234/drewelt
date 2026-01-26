'use client'

import Image from "next/image"
import { useRouter } from "next/navigation"

import styles from '@/components/Tarasy/Head/Head.module.scss'

const Head = () => {
  const router = useRouter()

  const handleClick = () => {
    router.push('/kontakt')
  }
  
  return (
    <div className={styles.container}>
      <Image
        src="/homepage/taras-kompozytowy.jpg"
        alt="Wiata garażowa"
        fill
        priority
        className={styles.image}
      />

      <div className={`${styles.content} ${styles.slideUpText}`}>
        <h1>Tarasy z desek kompozytowych WPC</h1>
        <p>Nowoczesne tarasy - odporne na pogodę, łatwe w utrzymaniu, piękne przez lata</p>
      </div>

      <div className={styles.buttonWrapper}>
        <button
          className={`${styles.outlineButton} ${styles.slideUpButton}`}
          onClick={handleClick}
        >
          Otrzymaj bezpłatną wycene
        </button>
      </div>
    </div>
  )
}

export default Head
