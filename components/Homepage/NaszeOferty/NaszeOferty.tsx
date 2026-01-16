'use client'

import styles from '@/components/Homepage/NaszeOferty/NaszeOferty.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

const NaszeOferty = () => {
  const refs = useRef<Array<HTMLDivElement | null>>([])

  useEffect(() => {
    const els = refs.current.filter(Boolean) as HTMLDivElement[]
    if (!els.length) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.revealLeftVisible)
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <div className={styles.container} id="nasze-oferty">
      <div
        ref={(el) => { refs.current[0] = el }}
        className={`${styles.wrapper} ${styles.revealLeft}`}
      >
        <div className={styles.imageWrapper}>
          <Image
            src="/homepage/zadaszenie-belka.jpg"
            width={550}
            height={550}
            alt="Zadaszenia tarasów"
          />
        </div>

        <div className={styles.textWrapper}>
          <h2 className={styles.title__white}>ZADASZENIA TARASÓW</h2>

          <p className={styles.description__white}>
            Maksymalny relaks, minimalna zależność od pogody. Solidne konstrukcje z drewna klejonego BSH,
            które chronią przed palącym słońcem i deszczem. Stwórz zadaszoną strefę wypoczynku, która pasuje
            do bryły Twojego domu.
          </p>

          <button className={styles.button__white}>
            <Link href="/zadaszenia">Zobacz zadaszenia</Link>
          </button>
        </div>
      </div>

      <div
        ref={(el) => { refs.current[1] = el }}
        className={`${styles.wrapper__noBackground} ${styles.revealLeft}`}
      >
        <div className={styles.inner}>
          <div className={styles.imageWrapper}>
            <Image
              src="/homepage/wiata.jpg"
              width={550}
              height={550}
              alt="Wiaty garażowe"
            />
          </div>

          <div className={styles.textWrapper}>
            <h2 className={styles.title}>WIATY GARAŻOWE</h2>

            <p className={styles.description}>
              Bezpieczeństwo auta bez budowy garażu. Solidna alternatywa dla murowanych budynków.
              Chroni lakier przed UV, karoserię przed gradem, a szyby przed szronem. Estetyka, która podnosi
              wartość posesji.
            </p>

            <button className={styles.button}>
              <Link href="/wiaty">Zobacz wiaty</Link>
            </button>
          </div>
        </div>
      </div>

      <div
        ref={(el) => { refs.current[2] = el }}
        className={`${styles.wrapper} ${styles.revealLeft}`}
      >
        <div className={styles.imageWrapper}>
          <Image
            src="/homepage/taras-kompozytowy.jpg"
            width={550}
            height={550}
            alt="Tarasy kompozytowe"
          />
        </div>

        <div className={styles.textWrapper}>
          <h2 className={styles.title__white}>TARASY KOMPOZYTOWE</h2>

          <p className={styles.description__white}>
            Ciepło drewna bez uciążliwej konserwacji. Zapomnij o olejowaniu, szlifowaniu i drzazgach.
            Oferujemy deski kompozytowe klasy Premium (Ultrashield), które są odporne na plamy, tłuszcz i
            blaknięcie. Twój taras pozostanie piękny przez lata – wystarczy go umyć wodą.
          </p>

          <button className={styles.button__white}>
            <Link href="/tarasy">Zobacz tarasy</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default NaszeOferty
