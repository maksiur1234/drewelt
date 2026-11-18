'use client'

import styles from '@/components/Zadaszenia/Konstrukcje/Konstrukcje.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Konstrukcje = () => {
    const router = useRouter()
    
    const handleClick = () => {
      router.push('/kontakt')
    }

  return (
    <div className={styles.container}>
        <h2 className={styles.title}>
          Dlaczego te konstrukcje przetrwają lata?
        </h2>

        <p className={styles.textTitle}>Konstrukcja z drewna klejonego BSH</p>
        <p className={styles.textDescription}>
            Konstrukcja zachowuje stabilność i geometrię przez dekady, bez konieczności ciągłych napraw. Zapomnij o pęknięciach i skręcaniu elementów. Do <strong>zabudowy tarasów </strong>używamy wyłącznie certyfikowanego drewna klejonego warstwowo BSH. Jest to materiał inżynieryjny o podwyższonej wytrzymałości na obciążenia mechaniczne i zmienne temperatury – <strong>suchy świerk klejony warstwowo.</strong>
        </p>

        <p className={styles.textTitle}>Zadaszenie z poliwęglanu komorowego 10 mm</p>
        <p className={styles.textDescription}>
          Stosujemy płyty o grubości 10 mm, które stanowią bezpieczną barierę dla gradu i śniegu. Materiał posiada dwustronny filtr UV – chroni Cię przed słońcem, a meble ogrodowe przed blaknięciem. Wytrzymałość naszego poliwęglanu przy podparciu jakie stosujemy to 100 kg/m².
        </p>

        <p className={styles.textTitle}>Dostępny w wersji:</p>
            <div className={styles.items}>
                <div className={styles.item}>
                    <p className={styles.itemTitle}>
                        Przezroczystej
                    </p>
                    <div className={styles.imageWrapper}>
                        <Image fill src={'/wersje-materialow/przezroczysty.png'} style={{ objectFit: 'cover' }} alt='Przezroczyste materiały' />
                    </div>
                </div>
                <div className={styles.item}>
                    <p className={styles.itemTitle}>
                        Mlecznej
                    </p>
                    <div className={styles.imageWrapper}>
                        <Image fill src={'/wersje-materialow/mleczny.png'} style={{ objectFit: 'cover' }} alt='Mleczne materiały' />
                    </div>
                </div>
                <div className={styles.item}>
                    <p className={styles.itemTitle}>
                        Przydymionej
                    </p>
                    <div className={styles.imageWrapper}>
                        <Image fill src={'/wersje-materialow/przydymiony.png'} style={{ objectFit: 'cover' }} alt='Przydymione materiały' />
                    </div>
            </div>
        </div>
        <div className={styles.buttonWrapper}>
            <button
            className={`${styles.outlineButton} ${styles.slideUpButton}`}
            onClick={handleClick}
            >
                Otrzymaj bezpłatną wycenę   
            </button>
        </div>

        <div className="flex flex-col gap-4 mt-5">
            <h2 className={styles.title}>Zadaszenia na wymiar – optymalne dopasowanie bez zbędnych kosztów</h2>
            <p className={styles.textDescription}>Każdą konstrukcję projektujemy na podstawie indywidualnego pomiaru, uwzględniając wysunięcie okapu, wysokość montażu do elewacji oraz rozmieszczenie punktów podparcia. Aby ograniczyć wydatek, wykorzystujemy moduły ekonomiczne o długościach 422, 530, 634, 740 lub 846 cm i głębokościach od 290 do 600 cm. Taki schemat pozwala zredukować ilość odpadów materiałowych, obniżając ostateczny koszt inwestycji nawet o 2000 zł.</p>
            <h2 className={styles.title}>Ile kosztuje zadaszenie tarasu z drewna?</h2>
            <p className={styles.textDescription}>Cena wykonania <strong>drewnianego zadaszenia tarasu na wymiar </strong>nie jest stała i zależy od wyboru parametrów technicznych danej realizacji. Na ostateczny koszt wpływają wybrane warianty wykończenia:</p>
            <ul className={`${styles.textDescription} list-disc list-inside`}>
                <li>wymiary całej konstrukcji, w tym rozpiętość słupów oraz całkowita powierzchnia krycia dachu;</li>
                <li>typ wybranej geometrii zadaszenia (spadek prosty, łuk lub konstrukcja na belce);</li>
                <li>odmiana poliwęglanu komorowego 10 mm z podwójną filtracją UV (wariant przezroczysty, mleczny lub przydymiony);</li>
                <li>specyfika montażu oraz stopień skomplikowania mocowania legarów do elewacji bądź ocieplenia.</li>
            </ul>
            <h2 className={styles.title}>Zadaszenia ogrodowe i zadaszenie altany</h2>
            <p className={styles.textDescription}>Oprócz <strong>zadaszeń tarasowych</strong> przybudowanych do ściany obiektu realizujemy również wolnostojące zadaszenia ogrodowe oraz zadaszenia altan. Wymagają one niezależnego podparcia na słupach nośnych zamocowanych w gruncie za pomocą stóp fundamentowych. Szczegółowe specyfikacje i zdjęcia wolnostojących obiektów drewnianych znajdziesz na stronie <Link href="/altany-ogrodowe">altany ogrodowe</Link>.</p>
        </div>
    </div>
  )
}

export default Konstrukcje
