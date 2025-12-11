import Image from "next/image"

import styles from "@/components/Homepage/Firma/Firma.module.scss";

const FirmaObraz = () => {
  return (
    <div className={styles.imgWrapper}>
        <Image
            src="/homepage/kobieta.jpg"
            alt="Firma Obraz"
            fill
            style={{ objectFit: "cover" }}
        />
    </div>

  )
}

export default FirmaObraz
