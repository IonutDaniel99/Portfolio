/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import NftCard from './NftCard'
import QrcodeCard from './QrcodeCard'
import MusicCard from './MusicCard'
import TristanaCard from './TristanaCard'
import SorakaCard from './SorakaCard'

function CardsApp() {
  return (
    <div className='h-screen overflow-y-hidden scroll-smooth'>
      <div className='flex flex-row h-full w-fit scroll-smooth'>
        <QrcodeCard />
        <NftCard />
        <MusicCard />
        <TristanaCard />
        <SorakaCard />
        <div className='w-[450px] relative'>6</div>
      </div>
    </div>
  )
}

export default CardsApp
