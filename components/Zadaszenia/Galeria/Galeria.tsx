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
    <>
      <div className={styles.container}>
        <h2 className="text-3xl font-medium text-[#2e7d32] mb-4">Rodzaje zadaszenia tarasów</h2>
        <p className="text-sm sm:text-xl">Dopasowanie<strong> dachu tarasowego</strong> do architektury budynku wymaga wyboru właściwej geometrii dachu i układu nośnego. W ofercie Drewelt znajdują się trzy sprawdzone formy. </p>
      </div>
      <div className={styles.container}>
          <GaleriaContent 
            title='Zadaszenia z prostym spadem'
            description="Stanowią uniwersalne rozwiązanie, które pasuje zarówno do tradycyjnych domów jednorodzinnych, jak i nowoczesnych brył. Prosty spadek<strong> dachu tarasu</strong> gwarantuje sprawny odpływ wody opadowej oraz samoistne zsuwanie się śniegu zimą. System ten pozwala na bezproblemowy montaż instalacji rynnowej wzdłuż dolnej krawędzi zadaszenia."
            obrazki={zadaszeniaProstySpadek}
            background
          />
          <GaleriaContent
            title='Zadaszenia na łukach'
            description="Zaokrąglona linia <strong>dachu</strong> przełamuje proste kąty elewacji, nadając całej powierzchni wizualną lekkość przy zachowaniu najwyższej sztywności. Łukowata gięta konstrukcja z drewna BSH sprawnie rozkłada obciążenia wiatrowe i opadowe, dzięki czemu zadaszenie zachowuje stabilność. To wykończenie wybierają inwestorzy poszukujący oryginalnego akcentu architektonicznego wokół domu."
            obrazki={zadaszeniaNaLukach}
          />
          <GaleriaContent
            title='Zadaszenia na belce'
            description="Wykorzystanie podłużnej belki nośnej pozwala znacząco zwiększyć rozstaw słupów fundamentowych bez ryzyka uginania się <strong>dachu</strong>. Wyeliminowanie gęsto rozstawionych podpór <strong>wiaty</strong> ułatwia swobodne poruszanie się po tarasie i zapewnia nieprzesłonięty widok na przestrzeń ogrodową. <strong>Zadaszenie </strong>to sprawdza się przy szerokich przeszkleniach tarasowych oraz dużych powierzchniach wypoczynkowych."
            obrazki={zadaszeniaNaBelce}
            background
          />
      </div>
    </>
  )
}

export default Galeria
