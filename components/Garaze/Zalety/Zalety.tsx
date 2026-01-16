import styles from '@/components/Garaze/Zalety/Zalety.module.scss'

const Zalety = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <p className={styles.itemTitle}>
            ❄ ZIMA BEZ SKROBANIA 
        </p>
        <p className={styles.itemDescription}>
           Płyta poliwęglanowa chroni przed szronem i śniegiem. Nie skorbiesz szyb - wsiadasz i jedziesz.
        </p>
      </div>
      <div className={styles.item}>
        <p className={styles.itemTitle}>
            ☀ OCHRONA LAKIERU UV
        </p>
        <p className={styles.itemDescription}>
            Dach blokuje szkodliwe promieniowanie. Auto nie nagrzewa się, a lakier nie płowieje.
        </p>
      </div>
      <div className={styles.item}>
        <p className={styles.itemTitle}>
            🍂 CZYSTA KAROSERIA
        </p>
        <p className={styles.itemDescription}>
            Chroni przed zanieczyszczeniami, które niszczą powłokę lakierniczą.
        </p>
      </div>
    </div>
  )
}

export default Zalety
