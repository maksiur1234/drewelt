import styles from '@/components/Garaze/Technologie/Technologie.module.scss'
import Image from 'next/image'

const Technologie = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Technologia Carportów</h2>
      <p className={styles.subTitle}>Dlaczego Drewelt?</p>

       <div className={styles.card}>

        <p className={styles.cardText}>Drewno BSH = Wygodne parkowanie Wiaty wymagają dużych rozpiętości, żebyś mógł swobodnie otworzyć drzwi bez uderzania o słup.</p>

        <p className={styles.cardText}>Drewno klejone BSH pozwala na zastosowanie mniejszych przekrojów przy większych rozpiertosciach miedzy słupami.</p>

      </div>

        <p className={styles.cardTitle}>Zadaszenie z poliwęglanu komorowego 10mm</p>
        <p className={styles.cardText}>Stosujemy płyty 10mm z filtrem UV. To nie jest zwykły plastik. To materiał, który wytrzymuje gradobicie i chroni tapicerkę Twojego auta przed słońcem. Przy podparciu jakie stosujemy wytrzymuje nacisk 100kg/m².</p>

        <p className={styles.cardTitle}>Dostępny w wersji:</p>
        <div className={styles.items}>
            <div className={styles.item}>
                 <p className={styles.itemTitle}>
                     Przezroczystej
                 </p>
                <div className={styles.imageWrapper}>
                    <Image fill src={'/wersje-materialow/przezroczysty.png'} style={{ objectFit: 'cover' }} alt='Przezroczyste materiały' />

                </div>
            </div>
            <div className={styles.item}>
                    <p className={styles.itemTitle}>
                        Mlecznej
                    </p>
                <div className={styles.imageWrapper}>
                    <Image fill src={'/wersje-materialow/mleczny.png'} style={{ objectFit: 'cover' }} alt='Mleczne materiały' />
                </div>
            </div>
            <div className={styles.item}>
                    <p className={styles.itemTitle}>
                        Przydymionej
                    </p>
                <div className={styles.imageWrapper}>
                    <Image fill src={'/wersje-materialow/przydymiony.png'} style={{ objectFit: 'cover' }} alt='Przydymione materiały' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Technologie
