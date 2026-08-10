import styles from '@/components/Onas/Siedziba/Siedziba.module.scss'

const Siedziba = () => {
  return (
    <div className={styles.wrapper}>
        <h2 className={styles.heading}>Dane kontaktowe i godziny otwarcia</h2>
        <p className={styles.subheading}>
          Dbamy o sprawną i płynną komunikację, dlatego na wszystkie zapytania przesłane przez formularz odpowiadamy najszybciej, jak to możliwe.
        </p>

        <div className={styles.container}>
          <div className={styles.item}>
            <p className={styles.itemTitle}>
                Infolinia i Dział Obsługi Klienta:
            </p>
            <a className={styles.itemLink} href="https://www.google.com/search?q=tel:%2B48887400824">
                +48 887 400 824
            </a>
          </div>

          <div className={styles.item}>
            <p className={styles.itemTitle}>
                Adres e-mail:
            </p>
            <a className={styles.itemLink} href="https://www.google.com/search?q=mailto%3Adrewelt%40drewelt.com">
                drewelt@drewelt.com
            </a>
          </div>

          <div className={styles.item}>
            <p className={styles.itemTitle}>
                Godziny pracy działu handlowego
            </p>
            <div className={styles.itemHours}>
              <p><strong>Od poniedziałku do piątku:</strong> 08.00–16.00</p>
              <p><strong>Sobota:</strong> po wcześniejszym uzgodnieniu telefonicznym</p>
              <p><strong>Niedziela:</strong> zamknięte</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Siedziba
