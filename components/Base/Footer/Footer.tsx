import styles from '@/components/Base/Footer/Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footerColumns}>
        <div className={styles.column}>
          <h3 className={styles.heading}>Menu</h3>
          <ul>
            <li><a href="/home">Strona główna</a></li>
            <li><a href="/about">O nas</a></li>
            <li><a href="/services">Usługi</a></li>
            <li><a href="/contact">Kontakt</a></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3 className={styles.heading}>Kontakt</h3>
          <ul>
            <li><a href="tel:+48123456789">+48 123 456 789</a></li>
            <li><a href="mailto:info@firma.pl">info@firma.pl</a></li>
            <li><a href="/contact">Formularz kontaktowy</a></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3 className={styles.heading}>Zadaszenia</h3>
          <ul>
            <li><a href="/zadaszenia/drewniane">Drewniane</a></li>
            <li><a href="/zadaszenia/metalowe">Metalowe</a></li>
            <li><a href="/zadaszenia/nowoczesne">Nowoczesne</a></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3 className={styles.heading}>Tarasy</h3>
          <ul>
            <li><a href="/tarasy/drewniane">Drewniane</a></li>
            <li><a href="/tarasy/kompozytowe">Kompozytowe</a></li>
            <li><a href="/tarasy/nowoczesne">Nowoczesne</a></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3 className={styles.heading}>Wiaty garażowe</h3>
          <ul>
            <li><a href="/wiaty/tradycyjne">Tradycyjne</a></li>
            <li><a href="/wiaty/nowoczesne">Nowoczesne</a></li>
            <li><a href="/wiaty/drewniane">Drewniane</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
