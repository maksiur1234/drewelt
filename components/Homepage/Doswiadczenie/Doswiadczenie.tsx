'use client'

import { useEffect, useState } from 'react'
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
      <h2><span className={styles.wyroznione}>SOLIDNA STOLARKA</span>, NIE "WYDMUSZKA" Z MARKETU</h2>
      <p className={styles.dlaczego}>Marketowe wiaty projektuje się tak, by weszły do paczki. Nasze - by przetrwały wichury. Łączymy europejskie drewno z polskim wykonastwem</p>

      
      <div ref={ref} className={styles.statystyki}>
        <div className={styles.statystyka}>
          {hasCounted ? <CountUp duration={5} end={12} start={0} /> : 0}
          <p className={styles.label}>lat doświadczenia</p>
        </div>

        <div className={styles.statystyka}>
          {hasCounted ? <CountUp duration={3} end={850} start={0} /> : 0} <span className={styles.plus}>+</span>
          <p className={styles.label}>wykonanych projektów</p>
        </div>
      </div>

      <div className={styles.text}>
        <h3>Tylko dreweno klejone warstwowo</h3>
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
