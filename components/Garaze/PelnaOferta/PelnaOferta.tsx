import Link from 'next/link'
import styles from '@/components/Garaze/PelnaOferta/PelnaOferta.module.scss'

const PelnaOferta = () => {
  return (
    <div className={styles.wrapper}>
        <h2 className={styles.heading}>Uzupełnij strefę wokół domu – sprawdź pełną ofertę Drewelt</h2>

        <p className={styles.text}>
          Dbamy o kompleksowe zagospodarowanie Twojego ogrodu i otoczenia domu. Jeśli planujesz stworzyć dodatkową przestrzeń do wypoczynku na świeżym powietrzu, zobacz nasze nowoczesne <Link className={styles.link} href="/altany-ogrodowe">drewniane altany ogrodowe</Link> i <Link className={styles.link} href="/zadaszenia">zadaszenia tarasu z drewna</Link>. Do wykończenia stabilnego i estetycznego podłoża pod wiatą lub na tarasie rekomendujemy trwale i odporne na warunki atmosferyczne <Link className={styles.link} href="/tarasy">deski kompozytowe</Link> <Link className={styles.link} href="/tarasy">na taras</Link>.
        </p>
    </div>
  )
}

export default PelnaOferta