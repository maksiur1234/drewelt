'use client'

import { useState } from 'react'
import { sendContactForm } from '@/app/lib/api'
import styles from '@/components/Homepage/RozpocznijProjekt/RozpocznijProjekt.module.scss'
import Link from 'next/link'

const RozpocznijProjekt = () => {
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
    <div className={styles.container}>
        <h2>Zamów Bezpłatną Wycenę i Projekt</h2>
        <p className={styles.description}>Wypełnij formularz poniżej. Aby wycena była rzetelna i możliwa do wykonania, koniecznie podaj lokalizację, wymiary oraz załącz zdjęcia miejsca montażu.</p>

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
                <input name="phone" type="tel" placeholder="999 999 999" required />
            </div>

            <div className={styles.field}>
                <label>Wiadomość</label>
                <textarea name="message" placeholder="Treść wiadomości" />
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

        {status && <p>{status}</p>}
      </form>

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
                <span><a href="mailto:drewelt@drewelt.com" target="_blank">drewelt@drewelt.pl</a></span>
            </div>
        </div>
    </div>
  )
}

export default RozpocznijProjekt
