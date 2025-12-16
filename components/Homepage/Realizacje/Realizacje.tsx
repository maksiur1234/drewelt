import Icon from '@/components/Base/Icon/Icon'
import Image from 'next/image'
import styles from '@/components/Homepage/Realizacje/Realizacje.module.scss'

const Realizacje = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgWrapper}>
        <Image
          src="/homepage/kobieta.jpg"
          width={260}
          height={260}
          alt="Kobieta"
          className={styles.image}
        />
      </div>

      <h2 className={styles.title}>Od wizji do realizacji z DREWELT</h2>
      <p className={styles.description}>
        Szanujemy Twój czas i ogród. Zobacz jak wygląda współpraca krok po kroku
      </p>

      <div className={styles.box}>

        <div className={styles.item}>
          <h3>01 Darmowa Konsultacja i Wycena</h3>
          <div className={styles.itemInfo}>
            <Icon name="wspolpraca" width={50} height={50} className={styles.icon} />
            <p className={styles.itemDescription}>
              Wszystko zaczyna się od rozmowy. Przesyłasz nam szacunkowe wymiary lub zdjęcia, a my przygotowujemy ofertę i doradzamy najlepsze rozwiązanie techniczne. Bez ukrytych kosztów.
            </p>
          </div>
        </div>

        <div className={styles.item}>
          <h3>02 Wizyta pomiarowa i Projekt</h3>  
          <div className={styles.itemInfo}>
            <Icon name="wizyta" width={50} height={50} className={styles.icon} />
            <p className={styles.itemDescription}>
              Akceptujesz wstępne warunki? Przyjeżdżamy na precyzyjny pomiar. Na miejscu wspólnie dobieramy kolor drewna i poliwęglanu, aby pasował do Twojej elewacji. Przed startem produkcji otrzymasz od nas rysunki techniczne do akceptacji. Masz pewność, co zamawiasz.
            </p>
          </div>
        </div>

        <div className={styles.item}>
          <h3>03 Prefabrykacja na warsztacie</h3>
          <div className={styles.itemInfo}>
            <Icon name="koloZebate" width={50} height={50} className={styles.icon} />
            <p className={styles.itemDescription}>
              Nie robimy "tartaku" w Twoim ogrodzie. 90% elementów docinamy, szlifujemy i impregnujemy w naszej hali produkcyjnej. Do Ciebie przyjeżdżają gotowe, idealnie spasowane elementy.
            </p>
          </div>
        </div>

        <div className={styles.item}>
          <h3>04 Czysty i Szybki Montaż</h3>
          <div className={styles.itemInfo}>
            <Icon name="stoper" width={50} height={50} className={styles.icon} />
            <p className={styles.itemDescription}>
              Szanujemy Twój czas. Nasi specjaliści montują kompletną konstrukcję w zaledwie 8-10 godzin. Wchodzimy rano, a wieczorem Twój taras jest gotowy. Zostawiamy po sobie idealny porządek i gotową do użytku przestrzeń.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Realizacje
