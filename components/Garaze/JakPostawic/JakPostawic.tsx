import styles from '@/components/Garaze/JakPostawic/JakPostawic.module.scss'

const JakPostawic = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Jak postawić wiatę w 4 krokach?</h2>

        <div className={styles.wrapper}>
            <div className={styles.card}>
                <p className={styles.cardTitle}>1 Kontakt</p>
                <p className={styles.cardDescription}>Kontaktujesz się z nami</p>
            </div>

            <div className={styles.card}>
                <p className={styles.cardTitle}>2 Optymalizacja</p>
                <p className={styles.cardDescription}>Mierzymy auto i podjazd. Proponujemy wymiar "Ekonomiczny".</p>
            </div>

            <div className={styles.card}>
                <p className={styles.cardTitle}>03 Produkcja</p>
                <p className={styles.cardDescription}>Przygotowujemy wszystko u nas w stolarni.</p>
            </div>

            <div className={styles.card}>
                <p className={styles.cardTitle}>04 Montaż</p>
                <p className={styles.cardDescription}>Przyjeżdżamy i składamy w 1-2 dni.</p>
            </div>
        </div>
    </div>
  )
}

export default JakPostawic
