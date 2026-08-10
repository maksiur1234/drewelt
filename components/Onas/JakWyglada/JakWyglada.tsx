import styles from '@/components/Onas/JakWyglada/JakWyglada.module.scss'

const JakWyglada = () => {
  return (
    <div className={styles.wrapper}>
        <h2 className={styles.heading}>Skontaktuj się z producentem zadaszeń – obszar działania</h2>

        <p className={styles.description}>
          Jako uznany producent konstrukcji drewnianych oraz dystrybutor trwałych systemów tarasowych, realizujemy projekty na terenie całej Polski. Mamy rozbudowaną sieć mobilnych doradców handlowych, dzięki czemu docieramy bezpośrednio do naszych klientów.
        </p>

        <div className={styles.container}>
          <div className={styles.card}>
            <p className={styles.cardText}>
              <strong>Nasze główne obszary realizacji zadaszeń tarasowych obejmują m.in. miasta:</strong>&nbsp;
              <a href="https://www.drewelt.pl/zadaszenia/zadaszenie-tarasu-poznan" className={styles.cityLink}>Poznań</a>,&nbsp;
              <a href="https://www.drewelt.pl/zadaszenia/zadaszenie-tarasu-wroclaw" className={styles.cityLink}>Wrocław</a>,&nbsp;
              <a href="https://www.drewelt.pl/zadaszenia/zadaszenie-tarasu-gorzow-wlkp" className={styles.cityLink}>Gorzów Wielkopolski</a>,&nbsp;
              <a href="https://www.drewelt.pl/zadaszenia/zadaszenie-tarasu-zielona-gora" className={styles.cityLink}>Zielona Góra</a>,&nbsp;
              <a href="https://www.drewelt.pl/zadaszenia/zadaszenie-tarasu-lubin" className={styles.cityLink}>Lubin</a>,&nbsp;
              <a href="https://www.drewelt.pl/zadaszenia/zadaszenie-tarasu-konin" className={styles.cityLink}>Konin</a>,&nbsp;
              <a href="https://www.drewelt.pl/zadaszenia/zadaszenie-tarasu-gniezno" className={styles.cityLink}>Gniezno</a>,&nbsp;
              <a href="https://www.drewelt.pl/zadaszenia/zadaszenie-tarasu-wagrowiec" className={styles.cityLink}>Wągrowiec</a>,&nbsp;
              <a href="https://www.drewelt.pl/zadaszenia/zadaszenie-tarasu-sroda-wielkopolska" className={styles.cityLink}>Środa Wielkopolska</a>,&nbsp;
              <a href="https://www.drewelt.pl/zadaszenia/zadaszenie-tarasu-tarnowo-podgorne" className={styles.cityLink}>Tarnowo Podgórne</a>,&nbsp;
              <a href="https://www.drewelt.pl/zadaszenia/zadaszenie-tarasu-suchy-las" className={styles.cityLink}>Suchy Las</a>,&nbsp;
              <a href="https://www.drewelt.pl/zadaszenia/zadaszenie-tarasu-lubon" className={styles.cityLink}>Luboń</a>&nbsp;oraz okolice.</p>
          </div>

          <div className={styles.card}>
            <p className={styles.cardText}>
              <strong>Sprzedaż i montaż desek kompozytowych oraz tarasowych realizujemy m.in. w rejonach:</strong>&nbsp;
              <a href="https://www.drewelt.pl/tarasy/deska-tarasowa-kompozytowa-poznan" className={styles.cityLink}>Poznań</a>,&nbsp;
              <a href="https://www.drewelt.pl/tarasy/deska-tarasowa-kompozytowa-warszawa" className={styles.cityLink}>Warszawa</a>,&nbsp;
              <a href="https://www.drewelt.pl/tarasy/deska-tarasowa-kompozytowa-wroclaw" className={styles.cityLink}>Wrocław</a>,&nbsp;
              <a href="https://www.drewelt.pl/tarasy/deska-tarasowa-kompozytowa-leszno" className={styles.cityLink}>Leszno</a>,&nbsp;
              <a href="https://www.drewelt.pl/tarasy/deska-tarasowa-kompozytowa-konin" className={styles.cityLink}>Konin</a>,&nbsp;
              <a href="https://www.drewelt.pl/tarasy/deska-tarasowa-kompozytowa-wrzesnia" className={styles.cityLink}>Września</a>,&nbsp;
              <a href="https://www.drewelt.pl/tarasy/deska-tarasowa-kompozytowa-gniezno" className={styles.cityLink}>Gniezno</a>&nbsp;i okolice.</p>
          </div>
        </div>

        <p className={styles.footerText}>
          Nie ma Twojej miejscowości na liście? Skontaktuj się z nami – realizujemy zapytania na terenie całego kraju!
        </p>
    </div>
  )
}

export default JakWyglada
