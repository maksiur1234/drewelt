'use client'

import { useRef } from "react"
import styles from './GaleriaContent.module.scss'

interface GaleriaContentProps {
  title?: string
  description?: string
  obrazki?: string[]
  background?: boolean
}

const GaleriaContent = ({ title, description, obrazki = [], background = false }: GaleriaContentProps) => {
  const sliderRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' })
    }
  }

  if (!obrazki.length) return null

  return (
    <div className={`${styles.galeriaSekcja} ${background ? styles.background : ''}`}>
      {title && <h3>{title}</h3>}

      {description && <p className={styles.opis}>{description}</p>}

      <div className={styles.sliderContainer}>
        <button className={styles.nav} onClick={scrollLeft}>&lt;</button>

        <div className={styles.galeria} ref={sliderRef}>
          {obrazki.map((img, i) => (
            <div className={styles.item}>
              <img key={i} src={img} alt={`Galeria ${i}`} />
              <span className={styles.badge}>{i + 1}</span>
            </div>
          ))}
        </div>

        <button className={styles.nav} onClick={scrollRight}>&gt;</button>
      </div>
    </div>
  )
}

export default GaleriaContent
