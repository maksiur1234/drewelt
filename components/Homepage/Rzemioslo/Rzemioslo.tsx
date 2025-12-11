import styles from '@/components/Homepage/Rzemioslo/Rzemioslo.module.scss'

const Rzemioslo = () => {
  return (
    <div className={styles.container}>
        <h2>Ręczne rzemiosło. <span className={styles.underline}>Przemysłowa trwałość</span></h2>
        <p>Od solidnych fundamentów pod taras, po precyzyjne zadaszenia chroniące przed słońcem</p>
        <p>Kompleksowa oferta dla tych, którzy oczekują czegość więcej niż standard z marketu</p>
    </div>
  )
}

export default Rzemioslo
