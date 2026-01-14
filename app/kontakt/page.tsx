import RozpocznijProjekt from '@/components/Homepage/RozpocznijProjekt/RozpocznijProjekt'
import Dane from '@/components/Onas/Dane/Dane'
import DlaczegoMy from '@/components/Onas/DlaczegoMy/DlaczegoMy'
import Head from '@/components/Onas/Head/Head'
import JakWyglada from '@/components/Onas/JakWyglada/JakWyglada'
import Siedziba from '@/components/Onas/Siedziba/Siedziba'
import React from 'react'

const page = () => {
  return (
    <>
      <Head />

      <DlaczegoMy />

      <Siedziba />

      <JakWyglada />

      <RozpocznijProjekt />

      <Dane />
    </>
  )
}

export default page
