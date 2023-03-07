import gsap from 'gsap/all'
import React, { useState } from 'react'
import { useEffect } from 'react'
import AliceCarousel from 'react-alice-carousel'
import { Tooltip } from 'react-tooltip'
import IconsTooltip from '../../Components/IconsTooltip'
import CarouselItem from './CarouselItem'

const responsive = {
    425: { items: 1 },
    1024: { items: 2 },
    1366: { items: 2 },
    1800: { items: 3 },
}

const items = [
    <CarouselItem
        year={'Nov 2022'}
        description={'My first mockup webpage design for the company i have worked at that time!'}
        imagePath={'/Images/Home/FigmaBookingApp.png'}
        externalLink='https://www.figma.com/file/twErNtJeSSPDBTtgYSwuCW/My-Figma-Projects?node-id=26%3A10&t=iR1E5X8f0ljensV0-1'
    />,
    <CarouselItem
        year={'Dec 2022'}
        description={'Various details cards.'}
        imagePath={'/Images/Home/FigmaCards.png'}
        externalLink='https://www.figma.com/file/twErNtJeSSPDBTtgYSwuCW/My-Figma-Projects?node-id=23%3A10&t=iR1E5X8f0ljensV0-1'
    />,
    <CarouselItem
        year={'Dec 2022'}
        description={'Mazda 3 Presentation Site'}
        imagePath={'/Images/Home/FigmaMazda.png'}
        externalLink='https://www.figma.com/file/twErNtJeSSPDBTtgYSwuCW/My-Figma-Projects?node-id=23%3A152&t=iR1E5X8f0ljensV0-1'
    />,
    <CarouselItem
        year={'Feb 2023'}
        description={'This portfolio. :D'}
        shouldHaveBorder={true}
        imagePath={'/Images/Home/PortfolioPresent.png'}
    />,
]

function ScreenThree() {

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to('.screenThreeContainer', {
                ease: 'power4.inOut',
                clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
                opacity: 1,
                y: 0,
                duration: 3,
                scrollTrigger: {
                    trigger: '.screenThreeContainer',
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
        <div className='flex items-center tablet:justify-center h-full'>
            <div className='relative flex justify-center w-full text-2xl text-white h-full clipFade screenThreeContainer'>
                <div className='h-full mobile:w-full tablet:w-4/6'>
                    <div className='flex items-center justify-end pr-20 h-1/4
                                    mobile:pr-0 mobile:justify-center
                                    tablet:justify-end
                                    desktop:pr-20'>
                        <div className='flex flex-col'>
                            <span className='relative flex flex-col float-right h-full gap-4 w-full'>
                                <div className='flex items-center mobile:justify-center tablet:justify-end h-full gap-4'>
                                    <p className='text-4xl tablet:text-4xl font-Mitr pb-4'>Other skills in my deck!</p>
                                </div>
                                <div className='flex gap-1 items-center justify-center overflow-x-scroll tablet:gap-2'>
                                    <IconsTooltip iconName={"Php"} iconPath={"/Images/Home/Icons/php.png"} isDark={false} />
                                    <IconsTooltip iconName={"Python"} iconPath={"/Images/Home/Icons/python.png"} isDark={false} />
                                    <span className='w-[2px] h-6 bg-gray-400 rounded-xl mx-2' />
                                    <IconsTooltip iconName={"Laravel"} iconPath={"/Images/Home/Icons/laravel.png"} isDark={false} />
                                    <IconsTooltip iconName={"NodeJs"} iconPath={"/Images/Home/Icons/node.png"} isDark={false} />
                                    <span className='w-[2px] h-6 bg-gray-400 rounded-xl mx-2' />
                                    <IconsTooltip iconName={"Unity"} iconPath={"/Images/Home/Icons/unity.png"} isDark={true} />
                                    <IconsTooltip iconName={"Unreal Engine"} iconPath={"/Images/Home/Icons/unreal.png"} isDark={true} />
                                    <span className='w-[2px] h-6 bg-gray-400 rounded-xl mx-2' />
                                    <IconsTooltip iconName={"Git (Gitlab & Github)"} iconPath={"/Images/Home/Icons/git.png"} isDark={false} />
                                    <IconsTooltip iconName={"Azure Devops"} iconPath={"/Images/Home/Icons/azure.png"} isDark={false} />
                                    <span className='w-[2px] h-6 bg-gray-400 rounded-xl mx-2' />
                                    <IconsTooltip iconName={"React Native (Android)"} iconPath={"/Images/Home/Icons/reactN.png"} isDark={false} />
                                    <IconsTooltip iconName={"Solid Js"} iconPath={"/Images/Home/Icons/solid.png"} isDark={false} />
                                    <IconsTooltip iconName={"Three Js"} iconPath={"/Images/Home/Icons/three.png"} isDark={true} />
                                    <IconsTooltip iconName={"Tailwind Css"} iconPath={"/Images/Home/Icons/tailwind.png"} isDark={false} />
                                    <span className='w-[2px] h-6 bg-gray-400 rounded-xl mx-2' />
                                    <img src={"/Images/Home/Icons/dots.png"} alt='' className='object-contain w-6 h-6 mx-1 invert' data-tooltip-id='threeDotsList' />
                                    <Tooltip id='threeDotsList' html='This list expand constantly as i try to learn something new everyday!' place={window.innerWidth <= 768 ? 'bottom' : 'left'} className='text-sm font-Mitr w-1/2' />
                                </div>
                            </span>
                            <span className='pt-4 text-base mobile:px-6 tablet:px-0 tablet:text-right text-gray-400 font-Mitr mobile:text-center' data-tooltip-id='lowExperience'>
                                All my interactions from
                                <span className='text-green-400 opacity-100'>&nbsp;2012&nbsp;</span>
                                to<span className='text-green-400 opacity-100'>&nbsp;Present&nbsp;</span>with others
                                <br />
                                <span className='text-gray-400 underline underline-offset-4'>programming languages, frameworks, versioning systems or libraries!</span>
                            </span>
                            <Tooltip id='lowExperience' html='I am not an expert in those mentioned above. However, I have used it to gain some understanding and develop ideas.' place={window.innerWidth <= 768 ? 'bottom' : 'left'}
                                className='w-96 text-sm font-Mitr tablet:w-1/2 text-center tablet:text-right laptop:w-1/4 desktop:w-1/6' />
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

export default ScreenThree


