import styles from '@/components/Garaze/MiejsceParkingowe/MiejsceParkingowe.module.scss'

const MiejsceParkingowe = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Wiaty na wymiar – zaplanuj swoją przestrzeń z Drewelt
      </h2>

      <div className={styles.card}>
        <p className={styles.cardTitle}>Optymalizacja wymiarów pozwala ograniczyć koszty inwestycji bez utraty wygody użytkowania. Pomożemy zaplanować Ci wymiar ekonomiczny. Często zwężenie lub poszerzenie wiaty o zaledwie 10-15 cm pozwala idealnie wpasować się w arkusz płyty. Zyskujesz tę samą swobodę otwierania drzwi, a oszczędzasz nawet 2000 zł. <strong>Zapytaj o to przy pomiarze.</strong></p>

        {/* <p className={styles.cardText}>❌ Projektujesz wiatę na szerokość np. 330 cm? Płacisz za pełną płytę, z której my musimy odciąć i wyrzucić duży pas materiału</p>

        <p className={styles.cardText}>✅ Projektujemy w oparciu o Moduły Ekonomiczne.</p> */}

      </div>

      <p className={styles.cardTitle__drugi}>Najkorzystniejsze cenowo wymiary:</p>

      <div className={styles.card}>
        <ol className="my-4 list-inside list-decimal text-xl sm:text-sm">
          <li>📏 Długość (po ścianie): 422 / 530 / 634 / 740 / 846 cm</li>
          <li>📏 Szerokość/głębokość: 290 / 340 / 450 / 500 / 600 cm</li>
        </ol>
      </div>

      <h2 className={styles.title}>Dlaczego warto postawić na nasze wiaty?</h2>
      <p className={styles.cardTitle}>Inwestycja w wiaty Drewelt przynosi wymierne korzyści na co dzień, ponieważ:</p>
      <ul className="list-disc list-inside text-xl sm:text-sm">
        <li>solidna konstrukcja oparta na potężnych słupach i belkach zapewnia stabilność przy porywistych wiatrach;</li>
        <li>zadaszenie zatrzymuje zanieczyszczenia organiczne, takie jak żywica drzew, pyłki kwiatowe czy ptasie odchody, które niszczą powłokę lakierniczą pojazdu;</li>
        <li>zimowa aura przestaje być uciążliwa, ponieważ poliwęglan skutecznie chroni przed szronem, zwalniając kierowcę z porannego skrobania szyb.</li>
      </ul>
    </div>
  )
}

export default MiejsceParkingowe
