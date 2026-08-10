import styles from '@/components/O-nas/Dlaczego/Dlaczego.module.scss'

const Dlaczego = () => {
  return (
    <div className={styles.wrapper}>
        <h2 className={styles.heading}>Dlaczego inwestorzy wybierają zadaszenia Drewelt?</h2>

        <p className={styles.lead}>
          Tworzymy rozwiązania szyte na miarę, które idealnie wpisują się w architekturę budynku oraz indywidualne potrzeby domowników. Oto co nas wyróżnia:
        </p>

        <ul className={styles.list}>
          <li className={styles.item}>
            <p><strong>autorska technologia łukowa</strong> – jako nieliczni na rynku oferujemy zadaszenia i wiaty wolnostojące oraz przyścienne oparte na giętych łukach drewnianych,</p>
          </li>
          <li className={styles.item}>
            <p><strong>certyfikowane materiały</strong> – korzystamy wyłącznie ze sprawdzonego drewna BSH i trwałych pokryć dachowych z poliwęglanu,</p>
          </li>
          <li className={styles.item}>
            <p><strong>kompleksowa obsługa</strong> – pomagamy na każdym etapie: od bezpłatnej doradczej konsultacji i precyzyjnego pomiaru, przez indywidualny projekt, po sprawny montaż,</p>
          </li>
          <li className={styles.item}>
            <p><strong>setki udanych realizacji</strong> – nasze konstrukcje zdobią ogrody i tarasy na terenie całej Polski, co potwierdzają setki zadowolonych inwestorów.</p>
          </li>
        </ul>
    </div>
  )
}

export default Dlaczego