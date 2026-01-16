
import styles from '@/components/Zadaszenia/Galeria/Galeria.module.scss'
import GaleriaContent from '@/components/Zadaszenia/Galeria/GaleriaContent/GaleriaContent'

const Galeria = () => {
  const wiatyWolnosojace = [
    '/wiaty-wolnostojace/wiata-wolnostojaca-1.png',
    '/wiaty-wolnostojace/wiata-wolnostojaca-3.png',
    '/wiaty-wolnostojace/wiata-wolnostojaca-4.png',
    '/wiaty-wolnostojace/wiata-wolnostojaca-2.png', 
  ]

  const wiatyPrzyscienne = [
    '/wiaty-przyscienne/wiata-przyscienna-1.png',
    '/wiaty-przyscienne/wiata-przyscienna-2.png',
    '/wiaty-przyscienne/wiata-przyscienna-3.png',
  ]

  return (
    <div className={styles.container}>
        <GaleriaContent
            title='Wiaty wolnostojące'
            description="Masz miejsce na działce? Postaw wiatę tam, gdzie Ci wygodnie. Pełna swoboda manewrowania, wygoda wysiadania."
            obrazki={wiatyWolnosojace} />
        <GaleriaContent
            title='Wiaty Przyścienne'
            description='Wykorzystaj ścianę budynku lub garażu. To ekonomiczne rozwiązanie idealnie wpasuje się w każda bryłe budynku.'
            obrazki={wiatyPrzyscienne}
            background />
    </div>
  )
}

export default Galeria
