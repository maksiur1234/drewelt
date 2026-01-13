import GaleriaContent from "./GaleriaContent/GaleriaContent"

import styles from '@/components/Zadaszenia/Galeria/Galeria.module.scss'

const Galeria = () => {
  const images1 = [
    '/homepage/siedziba.jpg',
    '/homepage/siedziba.jpg',
    '/homepage/siedziba.jpg',
    '/homepage/siedziba.jpg',
    '/homepage/siedziba.jpg',
    '/homepage/siedziba.jpg',
    '/homepage/siedziba.jpg',
    '/homepage/siedziba.jpg',
  ]

  const images2 = [
    '/homepage/siedziba.jpg',
    '/homepage/siedziba.jpg',
    '/homepage/siedziba.jpg',
    '/homepage/siedziba.jpg',
    '/homepage/siedziba.jpg',
    '/homepage/siedziba.jpg',
  ]

  return (
    <div className={styles.container}>
        <GaleriaContent title='Zadaszenia z prostym spadem' obrazki={images1} background />
        <GaleriaContent title='Zadaszenia na łukach' obrazki={images2} />
        <GaleriaContent title='Zadaszenia na belca' obrazki={images1} background />
    </div>
  )
}

export default Galeria
