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
          <h3>02 Projekt i Ustalenia</h3>
          <div className={styles.itemInfo}>
            <Icon name="wizyta" width={50} height={50} className={styles.icon} />
            <p className={styles.itemDescription}>
              Po akceptacji przygotowujemy projekt konstrukcji i dopracowujemy szczegóły montażu.
            </p>
          </div>
        </div>

        <div className={styles.item}>
          <h3>03 Produkcja na Wymiar</h3>
          <div className={styles.itemInfo}>
            <Icon name="koloZebate" width={50} height={50} className={styles.icon} />
            <p className={styles.itemDescription}>
              Elementy konstrukcji są wykonywane na dokładny wymiar w naszej pracowni.
            </p>
          </div>
        </div>

        <div className={styles.item}>
          <h3>04 Montaż u Klienta</h3>
          <div className={styles.itemInfo}>
            <Icon name="stoper" width={50} height={50} className={styles.icon} />
            <p className={styles.itemDescription}>
              Umawiamy dogodny termin i montujemy konstrukcję w Twoim ogrodzie w 1–2 dni.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Realizacje
