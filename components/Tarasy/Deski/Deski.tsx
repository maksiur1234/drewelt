'use client'

import Image from 'next/image'
import styles from '@/components/Tarasy/Deski/Deski.module.scss'

const deski = [
  {
    name: 'Ciemny szary',
    description: 'Deska kompozytowa Jasny szary',
    img: '/kolory-desek/jasny-szary.jpg',
    alt: 'Deska kompozytowa – jasny szary',
  },
  {
    name: 'Grafit',
    description: 'Deska kompozytowa Ciemny szary',
    img: '/kolory-desek/ciemny-szary.jpg',
    alt: 'Deska kompozytowa – ciemny szary',
  },
  {
    name: 'Jasny Brąz',
    description: 'Deska kompozytowa Jasny Brąz',
    img: '/kolory-desek/jasny-braz.jpg',
    alt: 'Deska kompozytowa – jasny brąz',
  },
  {
    name: 'Ciemny Brąz',
    description: 'Deska kompozytowa Ciemny Brąz',
    img: '/kolory-desek/ciemny-braz.jpg',
    alt: 'Deska kompozytowa – ciemny brąz',
  },
]

const Deski = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>System montażowy i akcesoria</h2>

      <p className={styles.text}>Instalacja tarasu kompozytowego wymaga zastosowania dedykowanych podzespołów, które zapewniają stabilność całej podbudowy oraz prawidłowe odprowadzanie wody. System bezwidocznego montażu zapobiega uszkodzeniu powierzchni desek, a odpowiednio dobrane legary i klipsy dystansowe gwarantują zachowanie dylatacji, chroniąc materiał przed odkształceniami pod wpływem zmian temperatury.</p>
      <p className={styles.text}>Zamiast przypadkowych zamienników, warto postawić na kompletny zestaw akcesoriów obejmujący niezbędne elementy:</p>

      <div className={styles.deski}>
        {deski.map((d) => (
          <article key={d.name} className={styles.deska}>
            <div className={styles.imageWrapper}>
              <Image
                src={d.img}
                alt={d.alt}
                fill
                className={styles.image}
                sizes="(max-width: 768px) 80vw, 25vw"
              />
            </div>

            <p className={styles.deskaTitle}>{d.name}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Deski
