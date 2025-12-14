import styles from '@/components/Base/Footer/Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footerColumns}>
        <div className={styles.column}>
          <h3 className={styles.heading}>Menu</h3>
          <ul>
            <li><a href="/">Strona główna</a></li>
            <li><a href="/o-nas">O nas</a></li>
            <li><a href="/galeria">Galeria</a></li>
            <li><a href="/kontakt">Kontakt</a></li>
            <li><a href="/o-nas">O nas</a></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3 className={styles.heading}>Kontakt</h3>
          <ul>
            <li><a href="tel:+48887400824">+48 887 400 824</a></li>
            <li><a href="mailto:drewelt@drewelt.pl">drewelt@drewelt.pl</a></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3 className={styles.heading}>Zadaszenia</h3>
          <ul>
            <li><a href="/zadaszenia/poznan">Zadaszenia Poznań</a></li>
            <li><a href="/zadaszenia/wrzesnia">Zadaszenia Września</a></li>
            <li><a href="/zadaszenia/leszno">Zadaszenia Leszno</a></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3 className={styles.heading}>Tarasy</h3>
          <ul>
            <li><a href="/tarasy/poznan">Tarasy Poznań</a></li>
            <li><a href="/tarasy/wrzesnia">Tarasy Września</a></li>
            <li><a href="/tarasy/leszno">Tarasy Leszno</a></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3 className={styles.heading}>Altany ogrodowe</h3>
          <ul>
            <li><a href="/altany-ogrodowe/poznan">Altany ogrodowe Poznań</a></li>
            <li><a href="/altany-ogrodowe/wrzesnia">Altany ogrodowe Września</a></li>
            <li><a href="/altany-ogrodowe/leszno">Altany ogrodowe Leszno</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
