import RozpocznijProjekt from '@/components/Homepage/RozpocznijProjekt/RozpocznijProjekt'
import Head from '@/components/Onas/Head/Head'
import JakWyglada from '@/components/Onas/JakWyglada/JakWyglada'
import Siedziba from '@/components/Onas/Siedziba/Siedziba'
import React from 'react'

const page = () => {
  return (
    <>
      <Head />

      <Siedziba />

      <JakWyglada />

      <RozpocznijProjekt naglowek="Formularz kontaktowy – zapytaj o darmową wycenę" hideDescription />
    </>
  )
}

export default page
