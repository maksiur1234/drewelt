import styles from '@/components/Homepage/RozpocznijProjekt/RozpocznijProjekt.module.scss'
import Link from 'next/link'

const RozpocznijProjekt = () => {
  return (
    <div className={styles.container}>
        <h2>Rozpocznij Projekt. Wycena jest Bezpłatna.</h2>

        <p className={styles.subtitle}>
          Wypełnij formularz poniżej, abyśmy mogli przygotować ofertę. Chcesz przyśpieszyć proces? 
          Jeśli masz zdjęcia miejsca realizacji i przybliżone wymiary — załącz je lub wpisz w treści. 
          Jeśli nie — bez obaw, dopytamy o wszystko telefonicznie.
        </p>

        <form className={styles.formBox}>
            <div className={styles.field}>
                <label>Imię i nazwisko</label>
                <input type='text' placeholder='Imię i nazwisko' required />
            </div>

            <div className={styles.field}>
                <label>Email</label>
                <input type='email' placeholder='Adres email' required />
            </div>

            <div className={styles.field}>
                <label>Numer telefonu</label>
                <input type='tel' placeholder='123 456 789' required />
            </div>

            <div className={styles.field}>
                <label>Wiadomość</label>
                <textarea placeholder='Opisz swój projekt...' rows={4}></textarea>
            </div>

            <div className={styles.field}>
                <label>Wybierz pliki</label>
                <input type='file' multiple />
            </div>

            <div className={styles.rodo}>
                <input type='checkbox' required />
                <span>Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z <Link href={'/'}>klauzulą RODO</Link></span>
            </div>

            <button type='submit' className={styles.submitBtn}>
                Wyślij
            </button>
        </form>
    </div>
  )
}

export default RozpocznijProjekt
