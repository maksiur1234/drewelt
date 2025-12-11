'use client'

import React, { useEffect, useState } from 'react'
import styles from '@/components/Homepage/Doswiadczenie/Doswiadczenie.module.scss'
import CountUp from 'react-countup'
import { useInViewInline } from '@/app/hooks/useInViewInline'
import Image from 'next/image'

const Doswiadczenie = () => {
  const { ref, inView } = useInViewInline({ threshold: 0.5 })
  const [hasCounted, setHasCounted] = useState(false)

  useEffect(() => {
    if (inView && !hasCounted) {
      setHasCounted(true)
    }
  }, [inView, hasCounted])

  return (
    <div className={styles.container}>
      <h2>Nie jesteśmy Fabryką. <span className={styles.wyroznione}>Jesteśmy rzemieślnikami</span></h2>
      <p className={styles.dlaczego}>Dlaczego warto wybrać Drewelt?</p>

      
      <div ref={ref} className={styles.statystyki}>
        <div className={styles.statystyka}>
          {hasCounted ? <CountUp duration={5} end={10} start={0} /> : 0}
          <p className={styles.label}>lat doświadczenia</p>
        </div>

        <div className={styles.statystyka}>
          {hasCounted ? <CountUp duration={3} end={800} start={0} /> : 0}
          <p className={styles.label}>wszystkich projektów</p>
        </div>
      </div>

      <div className={styles.imageWrapper}>
        <Image
          src="/homepage/siedziba.jpg"
          alt="Nasze doświadczenie"
          fill
          className={styles.image}
        />
      </div>



    </div>
  )
}

export default Doswiadczenie
