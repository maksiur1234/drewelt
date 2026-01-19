'use client'

import { useRouter } from 'next/navigation'

import styles from '@/components/Garaze/JakPostawic/JakPostawic.module.scss'

const JakPostawic = () => {
    const router = useRouter()

    const handleClick = () => {
      router.push('/kontakt')
    }
    
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Jak postawić wiatę w 4 krokach?</h2>

        <div className={styles.wrapper}>
            <div className={styles.card}>
                <p className={styles.cardTitle}>1 Kontakt</p>
                <p className={styles.cardDescription}>Kontaktujesz się z nami</p>
            </div>

            <div className={styles.card}>
                <p className={styles.cardTitle}>2 Optymalizacja</p>
                <p className={styles.cardDescription}>Przedstawiamy Ci odpowiedni projekt, który spełni Twoje wymagania pod względem komfortu, ekonomii i designu.</p>
            </div>

            <div className={styles.card}>
                <p className={styles.cardTitle}>3 Produkcja</p>
                <p className={styles.cardDescription}>Przygotowujemy wszystko u nas zgodnie z ustaleniami.</p>
            </div>

            <div className={styles.card}>
                <p className={styles.cardTitle}>4 Montaż</p>
                <p className={styles.cardDescription}>Standardowe konstrukcje monutjemy w jeden dzień.</p>
            </div>
        </div>

        <div className={styles.buttonWrapper}>
            <button
            className={`${styles.outlineButton} ${styles.slideUpButton}`}
            onClick={handleClick}
            >
                Wyceń ochronę dla auta
            </button>
        </div>
    </div>
  )
}

export default JakPostawic
