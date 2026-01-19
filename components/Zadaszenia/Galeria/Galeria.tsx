import GaleriaContent from "./GaleriaContent/GaleriaContent"

import styles from '@/components/Zadaszenia/Galeria/Galeria.module.scss'

const Galeria = () => {
  const zadaszeniaProstySpadek = [
    '/zadaszenia-przyscienne/tarasowe-przyscienne-1.png', 
    '/zadaszenia-przyscienne/tarasowe-przyscienne-4.png',
    '/zadaszenia_prosty_spadek_na_belce/tarasowe-przyscienne-belka-2.png',
    '/zadaszenia_prosty_spadek_na_belce/tarasowe-przyscienne-belka-3.png',
  ]

  const zadaszeniaNaLukach = [
    '/zadaszenia_przyscienne_na_lukach/tarasowe-przyscienne-luk-4.png',
    '/zadaszenia_przyscienne_na_lukach/tarasowe-przyscienne-luk-5.png',
    '/zadaszenia_przyscienne_na_lukach/tarasowe-przyscienne-luk-6.png',
  ]

  const zadaszeniaNaBelce = [
    '/zadaszenia_prosty_spadek_na_belce/tarasowe-przyscienne-belka-1.png',
    '/zadaszenia-przyscienne/tarasowe-przyscienne-5.png',
    '/zadaszenia-przyscienne/tarasowe-przyscienne-3.png',
    '/zadaszenia-przyscienne/tarasowe-przyscienne-2.png',
  ]

  return (
    <div className={styles.container}>
        <GaleriaContent 
          title='Zadaszenia z prostym spadem'
          description="Dopasują się do architektury tradycyjnej i nowoczesnej."
          obrazki={zadaszeniaProstySpadek}
          background
        />
        <GaleriaContent
          title='Zadaszenia na łukach'
          description="Nadadzą blask Twojej posesji. Lekka wytrzymała konstrukcja o ponad czasowym wyglądzie"
          obrazki={zadaszeniaNaLukach}
        />
        <GaleriaContent
          title='Zadaszenia na belce'
          description="To oryginalne rozwiązanie, pozwala na szeroki rozstaw słupów i komponuje się z każdym projektem domu."
          obrazki={zadaszeniaNaBelce}
          background
        />
    </div>
  )
}

export default Galeria
