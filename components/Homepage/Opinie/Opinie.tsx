import styles from '@/components/Homepage/Opinie/Opinie.module.scss'
import OpinieContent from './OpinieContent/OpinieContent'

const Opinie = () => {
  return (
    <div className={styles.container}>
        <h2>Opinie osób, które nam zaufały</h2>

        <OpinieContent />
    </div>
  )
}

export default Opinie
