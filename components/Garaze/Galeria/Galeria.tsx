
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

  const wiatyWolnosojace = [
    '/wiaty-wolnostojace/wiata-1.png',
    '/wiaty-wolnostojace/wiata-2.png',
    '/wiaty-wolnostojace/wiata-3.png',
    '/wiaty-wolnostojace/wiata-4.png',
  ]

  const wiatyPrzyscienne = [
    '/zadaszenia-przyscienne/20221004_130009.jpg',
    '/zadaszenia-przyscienne/samochod.jpg',
    '/zadaszenia-przyscienne/Zadaszenie Murowana Goślina.jpg',
    '/zadaszenia-przyscienne/lubon.jpg',
  ]

  return (
    <div className={styles.container}>
        <GaleriaContent
            title='Wiaty wolnostojące'
            description="Masz miejsce na działce? Postaw wiatę tam, gdzie Ci wygodnie. Pełna swoboda manewrowania. Solidne mocowanie, które wytrzyma silne wiatry."
            obrazki={wiatyWolnosojace} />
        <GaleriaContent
            title='Wiaty Przyścienne'
            description='Wykorzystaj ścianę budynku lub garażu. To rozwiązanie ekonomiczne (mniej słupów) i idealne na węższe podjazdy.'
            obrazki={wiatyPrzyscienne}
            background />
        <GaleriaContent title='Wiaty na łukach' obrazki={images1} />
        <GaleriaContent title='Zadaszenia na belca' obrazki={images1} background />
    </div>
  )
}

export default Galeria
