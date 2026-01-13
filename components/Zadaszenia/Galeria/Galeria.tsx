import GaleriaContent from "./GaleriaContent/GaleriaContent"

import styles from '@/components/Zadaszenia/Galeria/Galeria.module.scss'

const Galeria = () => {
  const zadaszeniaProstySpadek = [
    '/zadaszenia_prosty_spadek/zadaszenie Szczecin.jpg',
    '/zadaszenia_prosty_spadek/palisnder.jpg',
    '/zadaszenia_prosty_spadek/IMG-20230928-WA0003.jpg',
    '/zadaszenia_prosty_spadek/20240926_130456.jpg',
    '/zadaszenia_prosty_spadek/20230628_193255.jpg',
    '/zadaszenia_prosty_spadek/20221104_100135.jpg',
  ]

  const zadaszeniaNaLukach = [
    '/zadaszenia_przyscienne_na_lukach/20221004_130009.jpg',
    '/zadaszenia_przyscienne_na_lukach/IMG_20200918_123653.jpg',
    '/zadaszenia_przyscienne_na_lukach/IMG_20220110_125418.jpg',
    '/zadaszenia_przyscienne_na_lukach/lubon.jpg',
    '/zadaszenia_przyscienne_na_lukach/samochod.jpg',
    '/zadaszenia_przyscienne_na_lukach/Zadaszenie Murowana Goślina.jpg',
  ]

  const zadaszeniaNaBelce = [
    '/zadaszenia_prosty_spadek_na_belce/Poznań1.jpg',
    '/zadaszenia_prosty_spadek_na_belce/zadaszenie na belce.jpg',
    '/zadaszenia_prosty_spadek/20230628_193255.jpg',
    '/zadaszenia_prosty_spadek/20240926_130456.jpg',
    '/zadaszenia_prosty_spadek/IMG-20230928-WA0003.jpg',
    '/zadaszenia_prosty_spadek/zadaszenie z poliwęglanu.jpg',
  ]

  return (
    <div className={styles.container}>
        <GaleriaContent 
          title='Zadaszenia z prostym spadem'
          obrazki={zadaszeniaProstySpadek}
          background
        />
        <GaleriaContent
          title='Zadaszenia na łukach'
          obrazki={zadaszeniaNaLukach}
        />
        <GaleriaContent
          title='Zadaszenia na belca'
          obrazki={zadaszeniaNaBelce}
          background
        />
    </div>
  )
}

export default Galeria
