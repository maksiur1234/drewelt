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
            Od 12 lat tawiamy konstrukcje na terenie całej Polski i Niemiec.
        </p>

        <p className={styles.cardTitle}>
            ✅ Skala
        </p>
        <p className={styles.cardDescription}>
            Zrealizowaliśmy ponad 800 projektów. Wiemy o drewnie wszystko.
        </p>

        <p className={styles.cardTitle}>
            ✅ Producent
        </p>
        <p className={styles.cardDescription}>
            Nie jesteśmy pośrednikiem ani chińskim importerem.
        </p>
      </div>
    </div>
  )
}

export default DlaczegoMy
