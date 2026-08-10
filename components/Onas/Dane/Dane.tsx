import styles from '@/components/Onas/Dane/Dane.module.scss'

const Dane = () => {
  return (
    <div className={styles.contact}>
        <h1 className={styles.contactTitle}>Skontaktuj się z producentem zadaszeń tarasowych – Drewelt</h1>
        <p className={styles.contactText}>
          Planujesz budowę wymarzonego tarasu, wiaty samochodowej lub zadaszenia? Nasi doradcy handlowi i techniczni są do Twojej dyspozycji. Pomagamy na każdym etapie – od wyboru odpowiednich materiałów, przez bezpłatną wycenę, aż po ustalenie dogodnego terminu pomiaru i montażu.
        </p>
        <p className={styles.contactText}>
          Zadzwoń do nas, wyślij wiadomość e-mail lub skorzystaj z poniższego formularza kontaktowego.
        </p>

        <h2 className={styles.contactSectionTitle}>Dane kontaktowe i godziny otwarcia</h2>
        <p className={styles.contactText}>
          Dbamy o sprawną i płynną komunikację, dlatego na wszystkie zapytania przesłane przez formularz odpowiadamy najszybciej, jak to możliwe.
        </p>
        <ul className={styles.contactList}>
          <li className={styles.contactListItem}>
            <p><strong>Infolinia i Dział Obsługi Klienta:</strong>&nbsp;<a href="https://www.google.com/search?q=tel:%2B48887400824" className={styles.contactLink}>+48 887 400 824</a></p>
          </li>
          <li className={styles.contactListItem}>
            <p><strong>Adres e-mail:</strong>&nbsp;<a href="https://www.google.com/search?q=mailto%3Adrewelt%40drewelt.com" className={styles.contactLink}>drewelt@drewelt.com</a></p>
          </li>
        </ul>

        <h3 className={styles.contactSubsectionTitle}><strong>Godziny pracy działu handlowego</strong></h3>
        <ul className={styles.contactList}>
          <li className={styles.contactListItem}>
            <p><strong>Od poniedziałku do piątku:</strong>&nbsp;08.00–16.00</p>
          </li>
          <li className={styles.contactListItem}>
            <p><strong>Sobota:</strong>&nbsp;po wcześniejszym uzgodnieniu telefonicznym</p>
          </li>
          <li className={styles.contactListItem}>
            <p><strong>Niedziela:</strong>&nbsp;zamknięte</p>
          </li>
        </ul>

        <h2 className={styles.contactSectionTitle}>Skontaktuj się z producentem zadaszeń – obszar działania</h2>
        <p className={styles.contactText}>
          Jako uznany producent konstrukcji drewnianych oraz dystrybutor trwałych systemów tarasowych, realizujemy projekty na terenie całej Polski. Mamy rozbudowaną sieć mobilnych doradców handlowych, dzięki czemu docieramy bezpośrednio do naszych klientów.
        </p>
        <p className={styles.contactText}>
          <strong>Nasze główne obszary realizacji zadaszeń tarasowych obejmują m.in. miasta:</strong>&nbsp;<a href="https://www.drewelt.pl/zadaszenia/zadaszenie-tarasu-poznan" className={styles.contactLink}>Poznań</a>,&nbsp;<a href="https://www.drewelt.pl/zadaszenia/zadaszenie-tarasu-wroclaw" className={styles.contactLink}>Wrocław</a>,&nbsp;<a href="https://www.drewelt.pl/zadaszenia/zadaszenie-tarasu-gorzow-wlkp" className={styles.contactLink}>Gorzów Wielkopolski</a>,&nbsp;<a href="https://www.drewelt.pl/zadaszenia/zadaszenie-tarasu-zielona-gora" className={styles.contactLink}>Zielona Góra</a>,&nbsp;<a href="https://www.drewelt.pl/zadaszenia/zadaszenie-tarasu-lubin" className={styles.contactLink}>Lubin</a>,&nbsp;<a href="https://www.drewelt.pl/zadaszenia/zadaszenie-tarasu-konin" className={styles.contactLink}>Konin</a>,&nbsp;<a href="https://www.drewelt.pl/zadaszenia/zadaszenie-tarasu-gniezno" className={styles.contactLink}>Gniezno</a>,&nbsp;<a href="https://www.drewelt.pl/zadaszenia/zadaszenie-tarasu-wagrowiec" className={styles.contactLink}>Wągrowiec</a>,&nbsp;<a href="https://www.drewelt.pl/zadaszenia/zadaszenie-tarasu-sroda-wielkopolska" className={styles.contactLink}>Środa Wielkopolska</a>,&nbsp;<a href="https://www.drewelt.pl/zadaszenia/zadaszenie-tarasu-tarnowo-podgorne" className={styles.contactLink}>Tarnowo Podgórne</a>,&nbsp;<a href="https://www.drewelt.pl/zadaszenia/zadaszenie-tarasu-suchy-las" className={styles.contactLink}>Suchy Las</a>,&nbsp;<a href="https://www.drewelt.pl/zadaszenia/zadaszenie-tarasu-lubon" className={styles.contactLink}>Luboń</a>&nbsp;oraz okolice.</p>
        <p className={styles.contactText}>
          <strong>Sprzedaż i montaż desek kompozytowych oraz tarasowych realizujemy m.in. w rejonach:</strong>&nbsp;<a href="https://www.drewelt.pl/tarasy/deska-tarasowa-kompozytowa-poznan" className={styles.contactLink}>Poznań</a>,&nbsp;<a href="https://www.drewelt.pl/tarasy/deska-tarasowa-kompozytowa-warszawa" className={styles.contactLink}>Warszawa</a>,&nbsp;<a href="https://www.drewelt.pl/tarasy/deska-tarasowa-kompozytowa-wroclaw" className={styles.contactLink}>Wrocław</a>,&nbsp;<a href="https://www.drewelt.pl/tarasy/deska-tarasowa-kompozytowa-leszno" className={styles.contactLink}>Leszno</a>,&nbsp;<a href="https://www.drewelt.pl/tarasy/deska-tarasowa-kompozytowa-konin" className={styles.contactLink}>Konin</a>,&nbsp;<a href="https://www.drewelt.pl/tarasy/deska-tarasowa-kompozytowa-wrzesnia" className={styles.contactLink}>Września</a>,&nbsp;<a href="https://www.drewelt.pl/tarasy/deska-tarasowa-kompozytowa-gniezno" className={styles.contactLink}>Gniezno</a>&nbsp;i okolice.</p>
        <p className={styles.contactText}>
          Nie ma Twojej miejscowości na liście? Skontaktuj się z nami – realizujemy zapytania na terenie całego kraju!
        </p>
    </div>
  )
}

export default Dane
