import gsap from 'gsap/all'
import React, { useState } from 'react'
import { useEffect } from 'react'
import AliceCarousel from 'react-alice-carousel'
import { Tooltip } from 'react-tooltip'
import CarouselItem from './CarouselItem'

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
}

const items = [
    <CarouselItem
        year={'Nov 2022'}
        description={'My first mockup webpage design for the company i have worked at that time!'}
        imagePath={'/Images/Home/FigmaBookingApp.png'}
        externalLink='https://dribbble.com/shots/20811284-UI-Dashboard-for-Endava-company'
    />,
    <CarouselItem
        year={'Dec 2022'}
        description={'Various details cards.'}
        imagePath={'/Images/Home/FigmaCards.png'}
        externalLink='https://dribbble.com/shots/20811210-League-of-Legends-Champion-Cards'
    />,
    <CarouselItem
        year={'Dec 2022'}
        description={'Mazda 3 Presentation Site'}
        imagePath={'/Images/Home/FigmaMazda.png'}
        externalLink='https://dribbble.com/shots/20811274-Mazda-3-presentation-webpage'
    />,
    <CarouselItem
        year={'Feb 2023'}
        description={'This portfolio. :D'}
        shouldHaveBorder={true}
        imagePath={'/Images/Home/PortfolioPresent.png'}
    />,
]

const popupContent = "First interaction with Figma was in 2020, were i made an ugly dashboard for my soul. <br/> After 2 years, i have joined in a internal company project where i made a mockup webpage design for employees."

function ScreenTwo() {
    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to('.screenTwoContainer', {
                ease: 'power4.inOut',
                clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
                opacity: 1,
                y: 0,
                duration: 3,
                scrollTrigger: {
                    trigger: '.screenTwoContainer',
                    scrub: 3,
                    start: 'top 90%',
                    end: 'top 100%',
                    toggleActions: 'play none none none',
                },
            })
        })
        return () => ctx.revert()
    })
    return (
        <div className='flex items-center justify-center h-full'>
            <div className='relative flex justify-center w-full text-2xl text-white h-3/4 clipFade screenTwoContainer'>
                <div className='w-4/6 h-full'>
                    <div className='flex items-center justify-end pr-20 h-1/4'>
                        <div className='flex flex-col'>
                            <span className='relative float-right h-full '>
                                <div className='flex items-center justify-end h-full gap-4'>
                                    <p className='text-4xl font-Mitr'>Figma</p>
                                    <img src='/Images/Home/Icons/Figma.png' alt='' className='w-20 h-20' />
                                </div>
                            </span>
                            <span className='pt-4 text-sm text-right text-gray-500 font-Mitr reactTrigger'>
                                I`ve come back to <span className='text-red-400 opacity-100'>Figma</span> in November 2022!
                            </span>
                            <span
                                data-tooltip-id="figmaToolTip" data-tooltip-content="Hello world!"
                                className='text-sm text-right text-gray-500 underline cursor-pointer font-Mitr reactTrigger underline-offset-2'>
                                Hover here for short story!
                                <Tooltip id="figmaToolTip" html={popupContent} place="left" />
                            </span>
                        </div>
                    </div>
                    <div className='relative w-full select-none top-10'>
                        <AliceCarousel
                            mouseTracking
                            items={items}
                            responsive={responsive}
                            controlsStrategy='alternate'
                            animationType='slide'
                            animationDuration={800}
                            paddingRight={50}
                            paddingLeft={50}
                            disableButtonsControls
                            disableDotsControls
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ScreenTwo


