import Link from 'next/link'
import styles from '@/components/Garaze/PelnaOferta/PelnaOferta.module.scss'

const PelnaOferta = () => {
  return (
    <div className={styles.wrapper}>
        <h2 className={styles.heading}>Uzupełnij strefę wokół domu – sprawdź pełną ofertę Drewelt</h2>

        <p className={styles.text}>
          Dbamy o kompleksowe zagospodarowanie Twojego ogrodu i otoczenia domu. Jeśli planujesz stworzyć dodatkową przestrzeń do wypoczynku na świeżym powietrzu, zobacz nasze nowoczesne <Link href="/altany-ogrodowe" className={styles.link}>altany ogrodowe z kompozytu</Link>. Do wykończenia stabilnego i estetycznego podłoża pod wiatą lub na tarasie rekomendujemy trwale i odporne na warunki atmosferyczne <Link href="/" className={styles.link}>deski kompozytowe</Link>.
        </p>
    </div>
  )
}

export default PelnaOferta