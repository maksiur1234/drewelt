import Image from "next/image"

import styles from '@/components/O-nas/Head/Head.module.scss'

const Head = () => {
  return (
    <div className={styles.container}>
      <Image
        src="/homepage/siedziba.jpg"
        alt="Drewelt – producent zadaszeń drewnianych"
        fill
        priority
        className={styles.image}
      />

      <div className={styles.content}>
        <h1>Producent zadaszeń drewnianych i wiat – poznaj Drewelt</h1>
        <p>
          W <strong>Drewelt</strong> łączymy wieloletnie rzemiosło z nowoczesną technologią obróbki drewna. Naszą specjalizacją jest projektowanie, produkcja oraz montaż <strong>trwałych zadaszeń tarasów</strong>, <strong>wiat samochodowych (carportów)</strong> i <strong>drewnianych zadaszeń ogrodowych</strong>.
        </p>
        <p>
          Zmieniamy przydomowe przestrzenie w funkcjonalne strefy relaksu, które służą naszym klientom przez całe lata – bez względu na warunki atmosferyczne.
        </p>
      </div>
    </div>
  )
}

export default Head