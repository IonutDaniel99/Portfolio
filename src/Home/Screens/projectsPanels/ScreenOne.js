import gsap from 'gsap/all'
import React from 'react'
import { useEffect } from 'react'
import AliceCarousel from 'react-alice-carousel'
import CarouselItem from './CarouselItem'
import { Tooltip } from 'react-tooltip'

const responsive = {
  425: { items: 1 },
  1025: { items: 1 },
  1325: { items: 2 },
  1366: { items: 2 },
  1800: { items: 3 },
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
    year={'Apr 2023'}
    description={'3D generated landscape viewer. '}
    imagePath={'/Images/Home/3dLandscape.png'}
    shouldHaveBorder={true}
    externalLink='/Projects/3DLandscape'
  />,
  <CarouselItem
    year={'In time.'}
    description={'All my ReactJs projects will be available here.'}
    imagePath={'/Images/Home/ReactBg.png'}
    shouldHaveBorder={true}
  />,
]

const popupContent =
  '<u>Most used libraries</u>: Redux, Redux-Saga, Ramda, i18n, Styled Components, Axios, Lodash, AG-Grid, Mui, Antd, Socket.Io, etc'

function ScreenOne() {
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to('.bgScroll', {
        ease: 'power4.inOut',
        opacity: 0,
        duration: 3,
        scrollTrigger: {
          trigger: '.reactTrigger',
          start: 'top 50%',
          end: 'top 70%',
        },
      })
      gsap.to('.screenOneContainer', {
        ease: 'power4.inOut',
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
        opacity: 1,
        y: 0,
        duration: 2.2,
        scrollTrigger: {
          trigger: '.screenOneContainer',
          scrub: 3,
          start: 'top 70%',
          end: 'top 90%',
          toggleActions: 'play none none none',
        },
      })
    })
    return () => ctx.revert()
  })

  return (
    <div className='flex items-center h-full tablet:justify-center'>
      <div className='relative flex justify-center w-full text-2xl text-white h-3/4 clipFade screenOneContainer'>
        <div className='h-full mobile:w-full tablet:w-4/6'>
          <div
            className='flex items-center justify-end pr-20 h-1/4 mobile:pr-0 mobile:justify-center tablet:justify-end desktop:pr-20 '
          >
            <div className='flex flex-col'>
              <span className='relative float-right h-full'>
                <div className='flex items-center justify-end h-full gap-4 mobile:justify-center tablet:justify-end'>
                  <p className='text-4xl font-Mitr'>React</p>
                  <img src='/Images/Home/Icons/React.png' alt='' className='w-20 h-20' />
                </div>
              </span>
              <span
                className='pt-4 text-gray-400 font-Mitr reactTrigger mobile:text-center mobile:text-base tablet:text-right tablet:text-lg'
              >
                I`ve been working with <span className='text-blue-400 opacity-100'>ReactJs</span> since May 2021.
              </span>

              <span
                data-tooltip-id='my-tooltip'
                data-tooltip-content='Hello world!'
                className='z-50 text-right text-gray-400 underline cursor-pointer font-Mitr reactTrigger underline-offset-2 mobile:text-center mobile:text-sm tablet:text-right tablet:text-base'
              >
                Hover here for more info!
                <Tooltip
                  id='my-tooltip'
                  html={popupContent}
                  place={window.innerWidth <= 768 ? 'bottom' : 'left'}
                  className='mobile:w-96 mobile:h-fit mobile:flex mobile:items-center tablet:h-fit tablet:flex tablet:items-center tablet:pt-2 laptop:w-1/4 laptop:text-center '
                />
              </span>
            </div>
          </div>
          <div className='relative w-full border-2 border-solid select-none top-10 border-sky-800 border-opacity-40 bg-sky-900 bg-opacity-10 rounded-xl'>
            <div className='absolute top-0 z-10 w-full h-full pointer-events-none bgScroll'>
              <span className='absolute w-full h-full bg-darkNotDark opacity-70 rounded-xl'></span>
              <span
                className='absolute flex items-center justify-center w-full h-full text-center text-gray-200 font-Mitr mobile:text-base tablet:text-3xl'
              >
                Scroll to right in this area using your mouse or finger!
              </span>
            </div>
            <AliceCarousel
              mouseTracking
              items={items}
              responsive={responsive}
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

export default ScreenOne
