import MusicCard from '@/components/custom_cards/MusicCard'
import NftCard from '@/components/custom_cards/NftCard'
import QrcodeCard from '@/components/custom_cards/QrcodeCard'
import SorakaCard from '@/components/custom_cards/SorakaCard'
import TristanaCard from '@/components/custom_cards/TristanaCard'
import Link from 'next/link'

function CardsApp() {
    return (
        <div className="h-screen overflow-y-hidden scroll-smooth">
            <Link href={'/'} className="absolute top-6 left-6 z-10">
                <p className="flex items-center justify-center w-40 h-12 font-bold text-gray-300 duration-500 ease-in-out bg-black bg-opacity-60 border-2 border-blue-400 hover:text-orange-600 rounded-xl hover:w-56 hover:border-orange-600">
                    Back To Portfolio
                </p>
            </Link>
            <div className="flex flex-row h-full w-fit scroll-smooth">
                <QrcodeCard />
                <NftCard />
                <MusicCard />
                <TristanaCard />
                <SorakaCard />
                <div className="w-[450px] relative">6</div>
            </div>
        </div>
    )
}

export default CardsApp
