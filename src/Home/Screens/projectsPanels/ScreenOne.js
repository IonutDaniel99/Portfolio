import gsap from 'gsap/all'
import React, { useState } from 'react'
import { useEffect } from 'react'
import AliceCarousel from 'react-alice-carousel'
import CarouselItem from './CarouselItem'

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 }
}

const items = [
  <CarouselItem
    year={'Dec 2022'}
    description={'Landing page for Indonesia with other several locations.'}
    imagePath={'/Images/Indonesia/Final.png'}
    externalLink="/Projects/FromDesignToCode/Indonesia"
  />,
  <CarouselItem
    year={'Jan 2023'}
    description={'Various details cards.'}
    imagePath={'/Images/Cards/Present.png'}
    externalLink="/Projects/FromDesignToCode/Cards"
  />,
  <CarouselItem
    year={'Feb 2023'}
    description={'This portfolio. :D'}
    imagePath={'/Images/Home/PortfolioPresent.png'}
    shouldHaveBorder={true}
  />,
  <CarouselItem
    year={'In time.'}
    description={'All my ReactJs projects will be available here.'}
    imagePath={'/Images/Home/ReactBg.png'}
    shouldHaveBorder={true}
  />
]

function ScreenOne() {
  useEffect(() => {
    let xl = gsap.to('.bgScroll', {
      ease: 'power4.inOut',
      opacity: 0,
      duration: 3,
      scrollTrigger: {
        scrub: 3,
        trigger: '.reactTrigger',
        start: 'top 40%',
        end: 'top 50%'
      }
    })

    return () => xl.reverse()
  })

  return (
    <div className="flex items-center justify-center h-full">
      <div className="relative flex justify-center w-full text-2xl text-white h-3/4">
        <div className="w-4/6 h-full">
          <div className="flex items-center justify-end pr-20 h-1/4">
            <div className="flex flex-col">
              <span className="relative float-right h-full ">
                <div className="flex items-center justify-end h-full gap-4">
                  <p className="text-4xl font-Mitr">React</p>
                  <img
                    src="/Images/Home/React.png"
                    alt=""
                    className="w-20 h-20"
                  />
                </div>
              </span>
              <span className="text-sm font-Mitr text-gray-500 pt-4 reactTrigger">
                I'm working with <span className="text-blue-400 opacity-100">ReactJs</span> since May 2021.
              </span>
            </div>
          </div>
          <div className="relative w-full top-10">
            <div className="absolute top-0 z-10 w-full h-full pointer-events-none bgScroll">
              <span className="absolute h-full w-full bg-darkNotDark opacity-70"></span>
              <span className="absolute h-full w-full flex items-center justify-center text-4xl font-Mitr text-gray-200">
                Scroll to right using your mouse or finger!
              </span>
            </div>
            <AliceCarousel
              mouseTracking
              items={items}
              responsive={responsive}
              controlsStrategy="alternate"
              animationType="slide"
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
