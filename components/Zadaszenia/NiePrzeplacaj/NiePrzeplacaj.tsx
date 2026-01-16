import styles from '@/components/Zadaszenia/NiePrzeplacaj/NiePrzepalacaj.module.scss'

const NiePrzeplacaj = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        <span className={styles.wyroznione}>STOP.</span> Nie przepłacaj za odpady. Przeczytaj, zanim zaplanujesz wymiar.
      </h2>

      {/* <p className={styles.text}>
        Płyty poliwęglanowe mają standardowe wymiary produkcyjne. Projektując zadaszenie o szerokości np. 310 cm, płacisz za pełną płytę, a my musimy wyrzucić duży odpad.
      </p>

      <p className={styles.text}>
        Zaprojektujemy Twoje zadaszenie <strong>w oparciu o moduły ekonomiczne.</strong> Konstrukcja <strong>tańsza nawet o 2000 zł</strong> przy tej samej jakości.
      </p> */}

      <p className={styles.text}>Zaprojektujemy zadaszenie w oparciu o moduły ekonomiczne, aby zminimalizować ilość odpadów. To konstrukcja tańsza nawet o 2000 zł.</p>

      <p className={styles.text}>
        Najkorzystniejsze cenowo wymiary:
      </p>

      <div className={styles.card}>
        <p className={styles.cardText}>
            📏 Długość (po ścianie): 422 / 530 / 634 / 740 / 846 cm
        </p>
        <p className={styles.cardText__drugi}>
            📏 Szerokość/głębokość: 290 / 340 / 450 / 500 / 600 cm
        </p>
      </div>

      <p className={styles.text}>
        Zapytaj nas o <strong>"Wymiary Ekonomiczne"</strong> podczas pomiaru.
      </p>
    </div>
  )
}

export default NiePrzeplacaj
