import styles from '@/components/Zadaszenia/Konstrukcje/Konstrukcje.module.scss'
import Image from 'next/image'

const Konstrukcje = () => {
  return (
    <div className={styles.container}>
        <h2 className={styles.title}>
          Dlaczego te konstrukcje przetrwają lata?
        </h2>

        <p className={styles.textTitle}>Konstrukcja z drewna klejonego BSH</p>
        <p className={styles.textDescription}>
          Zapomnij o pęknięciach i skręcaniu się belek. Używamy wyłącznie certyfikowanego drewna klejonego warstwowo (BSH). Jest to materiał inżynieryjny o podwyższonej  wytrzymałości na obciążenia mechaniczne i zmienne temperatury.
        </p>
        <p className={styles.sub__textDescription}>
            Konstrukcja zachowuje stabilność i geometrię przez dekady, bez konieczności ciągłych napraw.
        </p>

        <p className={styles.textTitle}>Zadaszenie z poliwęglanu komorowego 10mm</p>
        <p className={styles.textDescription}>
          Stosujemy płyty o grubości 10mm, które stanowią bezpieczną barierę dla gradu i śniegu. Materiał posiada filtr UV – chroni Ciebie przed słońcem, a meble ogrodowe przed blaknięciem.
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
    </div>
  )
}

export default Konstrukcje
