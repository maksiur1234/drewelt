import Image from 'next/image'
import Link from 'next/link'
import styles from '@/components/O-nas/Inspiracje/Inspiracje.module.scss'

const Inspiracje = () => {
  return (
    <div className={styles.wrapper}>
        <h2 className={styles.heading}>Szukasz inspiracji lub chcesz wycenić własne zadaszenie?</h2>

        <p className={styles.text}>
          Zapraszamy do obejrzenia naszych dotychczasowych prac. Jeśli któryś z projektów wpadnie Ci w oko, zanotuj jego numer i skontaktuj się z naszym zespołem.
        </p>

        <div className={styles.photos}>
          <div className={styles.photo}>
            <Image
              src="/galeria/wolnostojace-na-lukach/1.jpg"
              alt="Zadaszenie tarasu na łukach – realizacja Drewelt"
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className={styles.photoImg}
            />
          </div>
          <div className={styles.photo}>
            <Image
              src="/galeria/przyscienne-na-lukach/5.jpg"
              alt="Zadaszenie przyścienne na łukach – realizacja Drewelt"
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className={styles.photoImg}
            />
          </div>
          <div className={styles.photo}>
            <Image
              src="/galeria/przyscienne-prosty-spadek/13.jpg"
              alt="Zadaszenie tarasu z prostym spadkiem – realizacja Drewelt"
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className={styles.photoImg}
            />
          </div>
          <div className={styles.photo}>
            <Image
              src="/galeria/przyscienne-na-belce/19.jpg"
              alt="Zadaszenie tarasu na belce – realizacja Drewelt"
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className={styles.photoImg}
            />
          </div>
        </div>

        <div className={styles.cards}>
          <div className={styles.card}>
            <p className={styles.cardText}>
              <strong>Zobacz nasze wykonane projekty:</strong>&nbsp;Przejdź do <Link href="/galeria" className={styles.link}>galerii realizacji</Link>.
            </p>
          </div>

          <div className={styles.card}>
            <p className={styles.cardText}>
              <strong>Chcesz porozmawiać o wycenie?</strong>&nbsp;Skontaktuj się z nami poprzez formularz bądź zakładkę <Link href="/kontakt" className={styles.link}>kontakt</Link>.
            </p>
          </div>
        </div>
    </div>
  )
}

export default Inspiracje