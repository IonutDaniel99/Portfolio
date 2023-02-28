import gsap from 'gsap/all'
import React, { useState } from 'react'
import { useEffect } from 'react'
import AliceCarousel from 'react-alice-carousel'
import CarouselItem from './CarouselItem'
import { Tooltip } from 'react-tooltip'

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
}

const items = [
  <CarouselItem
    year={'Dec 2022'}
    description={'Landing page for Indonesia with other several locations.'}
    imagePath={'/Images/Indonesia/Final.png'}
    externalLink='/Projects/FromDesignToCode/Indonesia'
  />,
  <CarouselItem
    year={'Jan 2023'}
    description={'Various details cards.'}
    imagePath={'/Images/Cards/Present.png'}
    externalLink='/Projects/FromDesignToCode/Cards'
  />,
  <CarouselItem year={'Feb 2023'} description={'This portfolio. :D'} imagePath={'/Images/Home/PortfolioPresent.png'} shouldHaveBorder={true} />,
  <CarouselItem
    year={'In time.'}
    description={'All my ReactJs projects will be available here.'}
    imagePath={'/Images/Home/ReactBg.png'}
    shouldHaveBorder={true}
  />,
]

const popupContent = "Most used libraries: Redux, Redux-Saga, Ramda, i18n, Styled Components, <br/> Axios, Lodash, AG-Grid, Mui, Antd, Socket.Io, etc"

function ScreenOne() {
  useEffect(() => {
    let xl = gsap.to('.bgScroll', {
      ease: 'power4.inOut',
      opacity: 0,
      duration: 3,
      scrollTrigger: {
        trigger: '.reactTrigger',
        start: 'top 50%',
        end: 'top 70%',
      },
    })

    return () => xl.reverse()
  })

  return (
    <div className='flex items-center justify-center h-full'>
      <div className='relative flex justify-center w-full text-2xl text-white h-3/4'>
        <div className='w-4/6 h-full'>
          <div className='flex items-center justify-end pr-20 h-1/4'>
            <div className='flex flex-col'>
              <span className='relative float-right h-full '>
                <div className='flex items-center justify-end h-full gap-4'>
                  <p className='text-4xl font-Mitr'>React</p>
                  <img src='/Images/Home/React.png' alt='' className='w-20 h-20' />
                </div>
              </span>
              <span className='pt-4 text-sm text-gray-500 font-Mitr reactTrigger'>
                I'm working with <span className='text-blue-400 opacity-100'>ReactJs</span> since May 2021.
              </span>

              <span
                data-tooltip-id="my-tooltip" data-tooltip-content="Hello world!"
                className='text-sm text-right text-gray-500 underline cursor-pointer font-Mitr reactTrigger underline-offset-2'>
                Hover here for more info!
                <Tooltip id="my-tooltip" html={popupContent} place="left" />
              </span>
            </div>
          </div>
          <div className='relative w-full top-10'>
            <div className='absolute top-0 z-10 w-full h-full pointer-events-none bgScroll'>
              <span className='absolute w-full h-full bg-darkNotDark opacity-70'></span>
              <span className='absolute flex items-center justify-center w-full h-full text-4xl text-gray-200 font-Mitr'>
                Scroll to right using your mouse or finger!
              </span>
            </div>
            <AliceCarousel
              mouseTracking
              items={items}
              responsive={responsive}
              controlsStrategy='alternate'
              animationType='slide'
              animationDuration={800}
              paddingRight={50}
              disableButtonsControls
              disableDotsControls
            />
          </div>
        </div>
      </div>

    </div>
  )
}

export default ScreenOne


