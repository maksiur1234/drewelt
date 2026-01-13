import styles from '@/components/Onas/JakWyglada/JakWyglada.module.scss'

const JakWyglada = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Jak wygląda proces po wysłaniu formularza?
      </h2>

      <div className={styles.card}>
        <p className={styles.cardTitle}>
            📞 Telefon (do 24h)
        </p>
        <p className={styles.cardDescription}>
            Oddzwaniamy, dopytujemy o detale.
        </p>

        <p className={styles.cardTitle}>
            📏 Weryfikacja
        </p>
        <p className={styles.cardDescription}>
            Umawiamy pomiar.
        </p>

        <p className={styles.cardTitle}>
            📄 Umowa
        </p>
        <p className={styles.cardDescription}>
            Dostajesz jasną wycenę i termin. Żadnych ukrytych kosztów.
        </p>
      </div>
    </div>
  )
}

export default JakWyglada
