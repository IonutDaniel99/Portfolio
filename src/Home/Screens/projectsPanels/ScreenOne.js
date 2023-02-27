import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import CarouselItem from './CarouselItem';



const items = [
    <div className='w-[375px] h-[210px]' />,
    <CarouselItem year={'2021'} description={"Hello world i am tomescu alexandru si va cant si va incant"} />,
    <CarouselItem year={'2022'} description={"Hello world i am tomescu alexandru si va cant si va incant"} />,
    <CarouselItem year={'3333'} description={"Hello world i am tomescu alexandru si va cant si va incant"} />,
    <CarouselItem year={'2022'} description={"Hello world i am tomescu alexandru si va cant si va incant"} />,
    <CarouselItem year={'33'} description={"Hello world i am tomescu alexandru si va cant si va incant"} />,
    <CarouselItem year={'22'} description={"Hello world i am tomescu alexandru si va cant si va incant"} />,
    <CarouselItem year={'11'} description={"Hello world i am tomescu alexandru si va cant si va incant"} />,
    <CarouselItem year={'3'} description={"Hello world i am tomescu alexandru si va cant si va incant"} />,
    <CarouselItem year={'2022'} description={"Hello world i am tomescu alexandru si va cant si va incant"} />,
    <div className='w-[375px] h-[210px]' />,
];

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

function ScreenOne() {
    return (
        <div className='flex items-center justify-center h-full'>
            <div className="relative flex justify-center w-full text-2xl text-white h-3/4">
                <div className='w-4/6 h-full'>
                    <div className='flex items-center justify-end pr-20 h-1/4'>
                        <div className='flex flex-col'>
                            <span className='relative float-right h-full'>
                                <div className='flex items-center justify-end h-full gap-4'>
                                    <p className='text-4xl font-Mitr'>React</p>
                                    <img src='/Images/Home/React.png' alt='' className='w-20 h-20' />
                                </div>
                            </span>
                            <span className='text-sm font-Mitr opacity-40'>I work with ReactJs since May 2021.</span>
                        </div>
                    </div>
                    <div className='relative w-full top-10'>
                        <div className='absolute top-0 z-10 w-32 h-full bg-gradient-to-r from-darkNotDark via-darkNotDark to-transparent -left-2' />
                        <AliceCarousel
                            mouseTracking
                            items={items}
                            responsive={responsive}
                            controlsStrategy="alternate"
                            animationType="slide"
                            animationDuration={800}
                            disableButtonsControls
                            disableDotsControls
                        />
                        <div className='absolute top-0 z-10 w-32 h-full bg-gradient-to-r from-transparent via-darkNotDark to-darkNotDark -right-2' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ScreenOne