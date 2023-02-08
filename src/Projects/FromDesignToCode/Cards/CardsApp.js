/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import NftCard from './NftCard'
import QrcodeCard from './QrcodeCard'
import MusicCard from './MusicCard'
import TristanaCard from './TristanaCard'

function CardsApp() {
    return (
        <div className='h-screen overflow-y-hidden'>
            <div className='flex flex-row h-full w-fit'>
                <QrcodeCard />
                <NftCard />
                <MusicCard />
                <TristanaCard />
                <div className='w-[450px]'>5</div>
                <div className='w-[450px]'>6</div>
            </div>
        </div>
    )
}

export default CardsApp