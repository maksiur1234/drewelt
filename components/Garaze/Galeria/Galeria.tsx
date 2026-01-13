
import styles from '@/components/Zadaszenia/Galeria/Galeria.module.scss'
import GaleriaContent from '@/components/Zadaszenia/Galeria/GaleriaContent/GaleriaContent'

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
        <GaleriaContent title='Wiaty wolnostojące' description="Masz miejsce na działce? Postaw wiatę tam, gdzie Ci wygodnie. Pełna swoboda manewrowania. Solidne mocowanie, które wytrzyma silne wiatry." obrazki={images2} />
        <GaleriaContent title='Wiaty Przyścienne' obrazki={images1} background />
        <GaleriaContent title='Zadaszenia na łukach' obrazki={images2} />
        <GaleriaContent title='Zadaszenia na belca' obrazki={images1} background />
    </div>
  )
}

export default Galeria
