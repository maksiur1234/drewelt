import styles from '@/components/Onas/Siedziba/Siedziba.module.scss'

const Siedziba = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <p className={styles.itemTitle}>
            Siedziba i Stolarnia
        </p>
        <p className={styles.itemDescription}>
            ul. Pliszki 18, 62-095 Rakownia
        </p>
      </div>
      <div className={styles.item}>
        <p className={styles.itemTitle}>
            Telefon
        </p>
        <a className={styles.itemDescriptionLink} href="tel:+48887400824">
            +48 887 400 824
        </a>
      </div>
      <div className={styles.item}>
        <p className={styles.itemTitle}>
            Email
        </p>
        <a className={styles.itemDescriptionLink} href="mailto:drewelt@drewelt.com" target="_blank">
            drewelt@drewelt.pl
        </a>
      </div>
    </div>
  )
}

export default Siedziba
