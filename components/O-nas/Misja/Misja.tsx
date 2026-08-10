import styles from '@/components/O-nas/Misja/Misja.module.scss'

const Misja = () => {
  return (
    <div className={styles.wrapper}>
        <h2 className={styles.heading}>Nasza misja: bezpieczne i estetyczne zadaszenie na dekady</h2>

        <p className={styles.text}>
          Wierzymy, że taras to serce domu w sezonie letnim, a samochód zasługuje na solidną ochronę przed gradem, słońcem i śniegiem. Naszym celem jest dostarczanie konstrukcji, które nie wymagają skomplikowanej pielęgnacji i zachowują swoje walory wizualne przez dziesięciolecia.
        </p>

        <p className={styles.text}>
          Gwarantujemy <strong>uczciwe doradztwo, przejrzyste wyceny oraz terminową realizację</strong> każdego zlecenia.
        </p>
    </div>
  )
}

export default Misja