import styles from '@/components/Onas/Dane/Dane.module.scss'

const Dane = () => {
  return (
    <div className={styles.transfer}>
        <p className={styles.transferTitle}>Dane do przelewu</p>

        <p className={styles.transferLine}>
          <strong>Drewelt Piotr Wiśniewski</strong><br />
          62-095 Rakownia, ul. Pliszki 18
        </p>

        <p className={styles.transferLine}>
          Numer konta: <strong>81 1140 2004 0000 3402 7666 2109</strong>
        </p>
    </div>
  )
}

export default Dane
