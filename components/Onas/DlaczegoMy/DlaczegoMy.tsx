import styles from '@/components/Onas/DlaczegoMy/DlaczegoMy.module.scss'

const DlaczegoMy = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Dlaczego my?
      </h2>

      <div className={styles.card}>
        <p className={styles.cardTitle}>
            ✅ Doświadczenie
        </p>
        <p className={styles.cardDescription}>
            Od 12 lat stawiamy konstrukcje, które nie boją się polskich wichur.
        </p>

        <p className={styles.cardTitle}>
            ✅ Skala
        </p>
        <p className={styles.cardDescription}>
            Zrealizowaliśmy ponad 800 projektów w całej Polsce. Wiemy o drewnie wszystko.
        </p>

        <p className={styles.cardTitle}>
            ✅ Producent
        </p>
        <p className={styles.cardDescription}>
            Nie jesteśmy pośrednikiem. Posiadamy własną halę produkcyjną w Rakowni pod Poznaniem.
        </p>
      </div>
    </div>
  )
}

export default DlaczegoMy
