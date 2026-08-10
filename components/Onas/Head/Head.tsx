import Image from "next/image"

import styles from '@/components/Onas/Head/Head.module.scss'

const Head = () => {
  return (
    <div className={styles.container}>
      <Image
        src="/homepage/siedziba.jpg"
        alt="Siedziba"
        fill
        priority
        className={styles.image}
      />

      <div className={styles.content}>
        <h1>Skontaktuj się z producentem zadaszeń tarasowych – Drewelt</h1>
        <p>Planujesz budowę wymarzonego tarasu, wiaty samochodowej lub zadaszenia? Nasi doradcy handlowi i techniczni są do Twojej dyspozycji. Pomagamy na każdym etapie – od wyboru odpowiednich materiałów, przez bezpłatną wycenę, aż po ustalenie dogodnego terminu pomiaru i montażu.</p>
        <p>Zadzwoń do nas, wyślij wiadomość e-mail lub skorzystaj z poniższego formularza kontaktowego.</p>

      </div>
    </div>
  )
}

export default Head
