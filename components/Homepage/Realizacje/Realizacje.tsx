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
              Wszystko zaczyna się od rozmowy. Przesyłasz nam szacunkowe wymiary lub zdjęcia,
              a my przygotowujemy wstępną ofertę i doradzamy najlepsze rozwiązanie techniczne.
              Bez ukrytych kosztów.
            </p>
          </div>
        </div>

        <div className={styles.item}>
          <h3>02 Wizyta pomiarowa i Projekt</h3>  
          <div className={styles.itemInfo}>
            <Icon name="wizyta" width={50} height={50} className={styles.icon} />
            <p className={styles.itemDescription}>
              Akceptujesz warunki? Przyjeżdzamy na precyzyjny pomiar. Omawiamy detale, deobieramy kolar drewna do elewacji i ustalamy ostateczny harmonogram prac.
            </p>
          </div>
        </div>

        <div className={styles.item}>
          <h3>03 Prefabrykacja na warsztacie</h3>
          <div className={styles.itemInfo}>
            <Icon name="koloZebate" width={50} height={50} className={styles.icon} />
            <p className={styles.itemDescription}>
              Nie robimy "tartaku" w Twoim ogrodzie. 90% elementów docinamy, szlifujemy i impregnujemy w naszej hali produkcyjnej. Do Ciebie przyjeżdzają gotowe, idealnie spasowane elementy.
            </p>
          </div>
        </div>

        <div className={styles.item}>
          <h3>04 Czysty i Szybki Montaż</h3>
          <div className={styles.itemInfo}>
            <Icon name="stoper" width={50} height={50} className={styles.icon} />
            <p className={styles.itemDescription}>
              Nasi specjaliści składają konstrukcję u Ciebie w ekspresowym tempie (zazwyczaj 1-3 dni). Zostawimy po sobie porządek i gotową do użytku przesteń.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Realizacje
