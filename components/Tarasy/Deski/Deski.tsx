'use client'

import Image from 'next/image'
import styles from '@/components/Tarasy/Deski/Deski.module.scss'

const deski = [
  {
    name: 'Jasny szary',
    description: 'Deska kompozytowa Jasny szary',
    img: '/kolory-desek/jasny-szary.jpg',
    alt: 'Deska kompozytowa – jasny szary',
  },
  {
    name: 'Ciemny szary',
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
      <h2 className={styles.title}>Wymiary i kolory – dopasuj taras do swojej przestrzeni</h2>

      <p className={styles.text}>
        Drewelt oferuje <strong>deski tarasowe kompozytowe</strong> w dwóch długościach:{' '}
        <strong>3m i 4m</strong>, co pozwala na elastyczne dopasowanie do różnych powierzchni. Deski są
        dwustronnie ryflowane – jedna strona ma drobne rowki, druga grubsze – dzięki czemu można je
        odwrócić i odświeżyć wygląd tarasu, bez konieczności wymiany. W palecie kolorów{' '}
        <strong>kompozytowych desek tarasowych</strong> znajdziesz:
      </p>

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
      <p className={styles.text}>
        Są to barwy, które harmonizują z nowoczesną architekturą i naturalnym otoczeniem. W sprzedaży dostępne są również plastikowe deski na taras. Stanowią one alternatywę dla osób poszukujących ekonomicznych oraz łatwych w utrzymaniu rozwiązań.
      </p>
    </div>
  )
}

export default Deski
