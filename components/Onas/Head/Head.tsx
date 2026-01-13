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
        <h1>Porozmawiaj z praktykami, nie z handlowcami.</h1>
        <p>12 lat doświadczenia. Ponad 850 realizacji. Twoja konstrukcja jest w bezpiecznych rękach.</p>

      </div>
    </div>
  )
}

export default Head
