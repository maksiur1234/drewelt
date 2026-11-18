import styles from '@/components/Tarasy/Zalety/Zalety.module.scss'

const Zalety = () => {
  return (
    <div className={styles.wrapper}>
        <h2 className={styles.title}>
            Dlaczego warto wybrać deskę kompozytową?
        </h2>

        <p className={styles.text}>
            Inwestorzy coraz chętniej rezygnują z wymagających surowców na rzecz zaawansowanych technologicznie desek kompozytowych. To rozwiązania stanowiące doskonały balans między naturalnym wyglądem a trwałością, co pozwala cieszyć się pięknym wykończeniem bez konieczności corocznych, czasochłonnych prac pielęgnacyjnych.
        </p>
      
        <div className={styles.container}>
            <div className={styles.item}>
                <p className={styles.itemTitle}>🛡️ Bez konserwacji</p>
                <p className={styles.itemDescription}>Nie wymaga malowania ani impregnacji</p>
            </div>

            <div className={styles.item}>
                <p className={styles.itemTitle}>👟 Antypoślizgowa</p>
                <p className={styles.itemDescription}>
                Jej antypoślizgowa powierzchnia zapewnia bezpieczeństwo, nawet podczas deszczu
                </p>
            </div>

            <div className={styles.item}>
                <p className={styles.itemTitle}>☀️ Odporna na pogodę</p>
                <p className={styles.itemDescription}>
                Jest odporna na wilgoć, temperaturę i promieniowanie UV
                </p>
            </div>

            <div className={styles.item}>
                <p className={styles.itemTitle}>♻️ Ekologiczna</p>
                <p className={styles.itemDescription}>Podlega 100%-towej utylizacji</p>
            </div>

            <div className={styles.item}>
                <p className={styles.itemTitle}>🏗️ Wytrzymała</p>
                <p className={styles.itemDescription}>
                Wykazuje długą żywotność i wytrzymałość na obciążenia
                </p>
            </div>

            <div className={styles.item}>
                <p className={styles.itemTitle}>🧤 Bez drzazg</p>
                <p className={styles.itemDescription}>Nie ma drzazg oraz zadarć</p>
            </div>
        </div>

        <p className={styles.text}>
            <strong>Tarasowa deska kompozytowa</strong> jest więc świetnym rozwiązaniem dla osób ceniących wygodę i nowatorski design.
        </p>
    </div>

  )
}

export default Zalety
