import React from 'react'

import styles from '@/components/Homepage/Head/Head.module.scss'
import Image from 'next/image'

const Head = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imageWrapper}>
            <Image
              src="/homepage/head.jpg"
              fill
              alt="Drewelt strona główna"
              className={styles.image}
            />

            <div className={styles.imageText}>
                <h2>Zadaszenia tarasów i wiaty, odmienią twój dom</h2>
                <p className={styles.paragraf}>Deszcz czy słońce? To bez znaczenia.</p>
                <p className={styles.paragraf3}>Stwórz całoroczną strefę relaksu, która powiększy Twój dom o dodatkowy salon</p>
            </div>

            <div className={styles.buttonWrapper}>
              <button className={styles.outlineButton}>
                Poznaj naszą ofertę
              </button>
            </div>

        </div>
    </div>
  )
}

export default Head
