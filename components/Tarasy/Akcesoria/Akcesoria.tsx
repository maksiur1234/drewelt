'use client'

import Image from 'next/image'
import styles from '@/components/Tarasy/Akcesoria/Akcesoria.module.scss'

const akcesoria = [
   {
    name: 'Deska kompozytowa',
    description: 'Deska kompozytowa.',
    img: '/produkty/deska-kompozytowa.png',
    alt: 'Deska kompozytowa – ciemny brąz',
  },
  {
    name: 'Deska cokołowa',
    description: 'Deska cokołowa montowana obwodowo na widocznej części tarasu. W pełni zakrywa legar i deskę.',
    img: '/produkty/deska-cokolowa.png',
    alt: 'Deska kompozytowa – jasny brąz',
  },
  {
    name: 'Klips plastikowy + wkręt ze stali nierdzewnej',
    description: 'Klipsy plastikowe wraz z wkrętem ze stali nierdzewnej do wykonywania połączeń desek. Połączenie nie ingerujące w deskę (nie trzeba wiercić), co oznacza, że można po pewnym czasie odwrócić deskę na inne ryflowanie.',
    img: '/produkty/klips.png',
    alt: 'Deska kompozytowa – jasny szary',
  },
  {
    name: 'Listwa kątowa',
    description: 'Listwa kątowa montowana na obrzeżu tarasu lub wykończeń schodów.',
    img: '/produkty/listwa-katowa.png',
    alt: 'Deska kompozytowa – ciemny szary',
  },
  {
    name: 'Zaślepka plastikowa',
    description: 'Zaślepka plastikowa służy do zaślepienia widocznych końców deski jako alternatywa dla listwy cokołowej.',
    img: '/produkty/zaslepka.png',
    alt: 'Deska kompozytowa – ciemny brąz',
  },
  {
    name: 'Legar kompozytowy WPC',
    description: 'Legar kompozytowy WPC do wykonywania konstrukcji podtarasowej.',
    img: '/produkty/legar.png',
    alt: 'Deska kompozytowa – ciemny brąz',
  },
 
]

const Akcesoria = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>System montażowy i akcesoria</h2>

      <p className={styles.text}>
        Instalacja tarasu kompozytowego wymaga zastosowania dedykowanych podzespołów, które zapewniają stabilność całej podbudowy oraz prawidłowe odprowadzanie wody. System bezwidocznego montażu zapobiega uszkodzeniu powierzchni desek, a odpowiednio dobrane legary i klipsy dystansowe gwarantują zachowanie dylatacji, chroniąc materiał przed odkształceniami pod wpływem zmian temperatury.</p>
      <p className={styles.text}>Zamiast przypadkowych zamienników, warto postawić na kompletny zestaw akcesoriów obejmujący niezbędne elementy:</p>


      <div className={styles.deski}>
        {akcesoria.map((d) => (
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

export default Akcesoria
