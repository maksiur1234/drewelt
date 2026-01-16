import styles from '@/components/Garaze/MiejsceParkingowe/MiejsceParkingowe.module.scss'

const MiejsceParkingowe = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        💰 Płać za miejsce parkingowe.
      </h2>

      <div className={styles.card}>
        <p className={styles.cardTitle}>Pomożemy zaplanować Ci wymiar ekonomiczny.</p>

        {/* <p className={styles.cardText}>❌ Projektujesz wiatę na szerokość np. 330 cm? Płacisz za pełną płytę, z której my musimy odciąć i wyrzucić duży pas materiału</p>

        <p className={styles.cardText}>✅ Projektujemy w oparciu o Moduły Ekonomiczne.</p> */}

        <p className={styles.cardText__drugi}>Często zwężenie lub poszerzenie wiaty o zaledwie 10-15 cm pozwala idealnie wpasować się w arkusz płyty. Zyskujesz tę samą swobodę otwierania drzwi, a oszczędzasz nawet 2000 zł. <strong>Zapytaj o to przy pomiarze.</strong></p>
      </div>

      <p className={styles.cardTitle__drugi}>Najkorzystniejsze cenowo wymiary</p>

      <div className={styles.card}>
            <p className={styles.cardText}>📏 Długość (po ścianie): 422 / 530 / 634 / 740 / 846 cm</p>
            <p className={styles.cardText__drugi}>📏 Szerokość/głębokość: 290 / 340 / 450 / 500 / 600 cm</p>
      </div>
    </div>
  )
}

export default MiejsceParkingowe
