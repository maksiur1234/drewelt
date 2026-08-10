import Image from "next/image"
import styles from '@/components/O-nas/KimJestesmy/KimJestesmy.module.scss'

const KimJestesmy = () => {
  return (
    <div className={styles.wrapper}>
        <h2 className={styles.heading}>Kim jesteśmy? Pasja do drewna i bezkompromisowa jakość</h2>

        <div className={styles.content}>
          <div className={styles.textBlock}>
            <p className={styles.text}>
              Nie jesteśmy kolejnym pośrednikiem. <strong>Jesteśmy bezpośrednim producentem</strong>, co daje nam pełną kontrolę nad każdym etapem tworzenia konstrukcji – od wyboru surowca, przez precyzyjne docięcie, aż po profesjonalny montaż na Twojej działce.
            </p>

            <p className={styles.text}>
              Naszym znakiem rozpoznawczym jest stosowanie <strong>drewna klejonego warstwowo (BSH)</strong> oraz specjalistycznych konstrukcji gięto-klejonych na łukach. Dzięki temu nasze zadaszenia i wiaty są nie tylko wyjątkowo estetyczne, ale przede wszystkim odporne na pękanie, odkształcenia i duże obciążenia śniegiem.
            </p>
          </div>

          <div className={styles.imageBlock}>
            <Image
              src="/zadaszenia_przyscienne_na_lukach/onas.jpg"
              alt="Konstrukcja zadaszenia tarasu produkcji Drewelt"
              fill
              sizes="(max-width: 768px) 100vw, 520px"
              className={styles.image}
            />
          </div>
        </div>

        <div className={styles.contactBox}>
          <div className={styles.contactItem}>
            <p className={styles.contactTitle}>Siedziba i Stolarnia</p>
            <p className={styles.contactDescription}>ul. Pliszki 18, 62-095 Rakownia</p>
          </div>
          <div className={styles.contactItem}>
            <p className={styles.contactTitle}>Telefon</p>
            <a className={styles.contactLink} href="tel:+48887400824">+48 887 400 824</a>
          </div>
          <div className={styles.contactItem}>
            <p className={styles.contactTitle}>Email</p>
            <a className={styles.contactLink} href="mailto:drewelt@drewelt.com">drewelt@drewelt.com</a>
          </div>
        </div>
    </div>
  )
}

export default KimJestesmy