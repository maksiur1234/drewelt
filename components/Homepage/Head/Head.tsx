'use client'

import styles from '@/components/Homepage/Head/Head.module.scss'
import Image from 'next/image'

const Head = () => {
  const handleClick = () => {
    const element = document.getElementById('nasze-oferty');

    if (element) {
      const isMobile = window.innerWidth <= 768;
      const yOffset = isMobile ? -480 : -250;

      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  
  return (
    <div className={styles.container}>
        <div className={styles.imageWrapper}>
            <Image
              src="/homepage/head.jpg"
              fill
              alt="Drewelt strona główna"
              className={styles.image}
            />

            <div className={`${styles.imageText} ${styles.slideUpText}`}>
              <h2>Nie daj się wygonić z własnego tarasu</h2>
              <p className={styles.paragraf}>Twój taras to latem "patelnia", a jesienią kałuża?</p>
              <p className={styles.paragraf3}>Zmień to. Zadaszenie z drewna klejonego to Twoja tarcza przed upałem i ulewą.</p>
              <p className={styles.paragraf3}>Odzyskaj przestrzeń, za którą zapłaciłeś.</p>
            </div>

            <div className={`${styles.buttonWrapper} ${styles.slideUpButton}`}>
              <button className={styles.outlineButton} onClick={handleClick}>
                Poznaj naszą ofertę
              </button>
            </div>

        </div>
    </div>
  )
}

export default Head
