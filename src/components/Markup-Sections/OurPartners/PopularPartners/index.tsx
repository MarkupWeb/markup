import React from 'react'
import PopularPartners from './PopluarPartners'
import PopularPartnerRTL from './PopularPartnerRTL'

const Popluar = () => {
  return (
    <div className='px-4s mx-auto max-w-2xl py-16 sm:px-6 lg:max-w-7xl'>
        <PopularPartners />
        <PopularPartnerRTL />
    </div>
  )
}

export default Popluar