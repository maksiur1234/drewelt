'use client'

import { useState } from 'react'
import { sendContactForm } from '@/app/lib/api'
import styles from '@/components/Homepage/RozpocznijProjekt/RozpocznijProjekt.module.scss'
import Link from 'next/link'

const RozpocznijProjekt = ({ naglowek, hasDane = false }: { naglowek?: string, hasDane?: boolean }) => {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    const formData = new FormData(e.currentTarget)

    try {
      await sendContactForm({
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
        city: formData.get("city") as string,
        postal: formData.get("postal") as string,
        message: formData.get("message") as string,
        attachment: formData.getAll("attachment") as File[],
      })
      setStatus("✅ Formularz wysłany!")
      e.currentTarget.reset()
    } catch {
      setStatus("❌ Błąd wysyłania formularza")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles.container} id='form'>
        {naglowek && <h2>{naglowek}</h2>}
        <p className={styles.description}>Wypełnij formularz poniżej. Aby wycena była rzetelna i możliwa do wykonania, koniecznie podaj lokalizację, wymiary oraz załącz zdjęcia miejsca montażu.</p>
        <p className={styles.description}>Każde zdjęcie na naszej stronie ma swój unikalny numer. Jeśli spodobała Ci się dana realizacja, podaj ten numer w formularzu kontaktowym, a odniesiemy się do wybranej przez Ciebie realizacji.</p>


        <form className={styles.formBox} onSubmit={handleSubmit}>
            <div className={styles.field}>
                <label>Imię i nazwisko</label>
                <input name="name" placeholder="Imię i nazwisko" required />
            </div>

            <div className={styles.field}>
                <label>Email</label>
                <input name="email" type="email" placeholder="Email" required />
            </div>

            <div className={styles.field}>
                <label>Numer telefonu</label>
                <input name="phone" type="tel" placeholder="583 290 654" required />
            </div>

            <div className={styles.field}>
                <label>Miasto</label>
                <input name="city" placeholder="Rakownia" />
            </div>

            <div className={styles.field}>
                <label>Kod pocztowy</label>
                <input name="postal" placeholder="62-095" />
            </div>

            <div className={styles.field}>
                <label>Wiadomość</label>
                <textarea name="message" placeholder="Dzień dobry, chciałbym zadaszenie drewniane z prostym spadkiem..." />
            </div>

            <div className={styles.field}>
                <label>Wybierz pliki</label>
                <input type="file" name="attachment" multiple />
            </div>

            <div className={styles.rodo}>

            <span>
                Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z <Link href={'/files/rodo.pdf'}>klauzulą RODO</Link>
            </span>
        </div>

        <button type="submit" disabled={loading} className={styles.submitBtn}>
          {loading ? "Wysyłanie..." : "Wyślij"}
        </button>

        {/* {status && <p>{status}</p>} */}
      </form>

      {hasDane ? (
        <div className={styles.info}>
            <div className={styles.infoItem}>
                <p>Siedziba</p>
                <span>62-095 Rakownia ul.Pliszki 18</span>
            </div>

            <div className={styles.infoItemCenter}>
                <p>Telefon</p>
                <span><a href="tel:+48887400824">+48 887 400 824</a></span>
            </div>

            <div className={styles.infoItem}>
                <p>Email</p>
                <span><a href="mailto:drewelt@drewelt.com" rel='noopener noreferrer' target="_blank">drewelt@drewelt.com</a></span>
            </div>
        </div>
      ) : (
        null
      )}
        
    </div>
  )
}

export default RozpocznijProjekt
