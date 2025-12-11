import styles from '@/components/Homepage/NaszeOferty/NaszeOferty.module.scss'
import Image from 'next/image'

const NaszeOferty = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.imageWrapper}>
          <Image src="/homepage/zadaszenie-belka.jpg" width={550} height={550} alt="Obrazek" />
        </div>

        <div className={styles.textWrapper}>
          <h2 className={styles.title}>Zadaszenia tarasów</h2>

          <p className={styles.description}>
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

            <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius iure unde ipsam aut fugiat libero deleniti, temporibus tempora tempore accusamus quod itaque provident beatae velit, voluptate inventore natus corporis maiores?</p>

            <button className={styles.button}>Zobacz wiaty</button>
          </div>
        </div>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.imageWrapper}>
          <Image src="/homepage/taras-kompozytowy.jpg" width={550} height={550} alt="Obrazek" />
        </div>

        <div className={styles.textWrapper}>
            <h2 className={styles.title}>Zadaszenia tarasów</h2>

            <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius iure unde ipsam aut fugiat libero deleniti, temporibus tempora tempore accusamus quod itaque provident beatae velit, voluptate inventore natus corporis maiores?</p>

            <button className={styles.button__white}>Zobacz wiaty</button>
        </div>

      </div>

    </div>
  )
}

export default NaszeOferty
