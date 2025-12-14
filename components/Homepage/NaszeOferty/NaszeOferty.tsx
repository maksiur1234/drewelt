import styles from '@/components/Homepage/NaszeOferty/NaszeOferty.module.scss'
import Image from 'next/image'

const NaszeOferty = () => {
  return (
    <div className={styles.container} id='nasze-oferty'>
      <div className={styles.wrapper}>
        <div className={styles.imageWrapper}>
          <Image src="/homepage/zadaszenie-belka.jpg" width={550} height={550} alt="Obrazek" />
        </div>

        <div className={styles.textWrapper}>
          <h2 className={styles.title__white}>Zadaszenia tarasów</h2>

          <p className={styles.description__white}>
            Twój salon na świeżym powietrzu.
            Konstrukcje (łukowe i proste), które chronią przed deszczem i śłońcem. Stwórz strefę relaksu, z której skorzystasz niezależnie od kaprysów pogody. 
          </p>

          <button className={styles.button__white}>Zobacz wiaty</button>
        </div>
      </div>

      <div className={styles.wrapper__noBackground}>
        <div className={styles.inner}>
          <div className={styles.imageWrapper}>
            <Image src="/homepage/wiata.jpg" width={550} height={550} alt="Obrazek" />
          </div>

          <div className={styles.textWrapper}>
            <h2 className={styles.title}>Wiaty garażowe</h2>

            <p className={styles.description}>Bezpieczeństwo auto bez budowy garażu. Solidna alternatywa dla murowanych budynków. Chroni lakier przed UV, karoserię przed gradem, a szyby przed szronem. Estetyka, która podnosi wartość posesji.</p>

            <button className={styles.button}>Zobacz wiaty</button>
          </div>
        </div>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.imageWrapper}>
          <Image src="/homepage/taras-kompozytowy.jpg" width={550} height={550} alt="Obrazek" />
        </div>

        <div className={styles.textWrapper}>
            <h2 className={styles.title__white}>Zadaszenia tarasów</h2>

            <p className={styles.description__white}>Ciepło naturalnego drewna pod stopami. Zapomnij o zimnych płytkach i nagrzewającym się kompozycie. Projektujemy i układamy tarasy z drewna egzotycznego i modrzewia, które są sercem ogrodu.</p>

            <button className={styles.button__white}>Zobacz wiaty</button>
        </div>

      </div>

    </div>
  )
}

export default NaszeOferty
