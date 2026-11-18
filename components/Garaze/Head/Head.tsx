'use client'

import Image from "next/image"
import { useRouter } from "next/navigation"

import styles from '@/components/Garaze/Head/Head.module.scss'

interface HeadProps {
  title: string;
  description: string;
  bgimage: string;
}

const Head = ({title, description, bgimage}: HeadProps) => {
  const router = useRouter()

  const handleClick = () => {
    router.push('/kontakt')
  }
  
  return (
    <div className={styles.container}>
      <Image
        src={bgimage}
        alt="Wiata garażowa"
        fill
        priority
        className={styles.image}
      />

      <div className={`${styles.content} ${styles.slideUpText}`}>
        <h1>{title}</h1>
        <p>
          {description}
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
