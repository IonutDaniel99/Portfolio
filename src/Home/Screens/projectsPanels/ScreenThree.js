import gsap from 'gsap/all'
import React from 'react'
import { useEffect } from 'react'
import AliceCarousel from 'react-alice-carousel'
import { Tooltip } from 'react-tooltip'
import IconsTooltip from '../../Components/IconsTooltip'
import CarouselItem from './CarouselItem'

const responsive = {
  425: { items: 1 },
  1025: { items: 1 },
  1325: { items: 2 },
  1366: { items: 2 },
  1800: { items: 3 },
}

const modalHtml =
  'While I may not consider myself an expert in those particular tools or technologies, I have gained some understanding and familiarity through working with different software development tools. As a result, I can offer insights and ideas based on my experiences that could be helpful to you.'

const items = [
  <CarouselItem
    year={'Mar 2021'}
    description={'[Unity • C#] - Doodle Jump Game Clone.'}
    imagePath={'/Images/Home/DoodleJump.jpg'}
    externalLink='https://github.com/IonutDaniel99/Doodle-Jump-C--Clone'
  />,
  <CarouselItem
    year={'May 2021'}
    description={'[Laravel • PHP] - Social media platform. This represent my university project for Bachelor Degree.'}
    imagePath={'/Images/Home/GrovayoLogin.jpg'}
    externalLink='https://github.com/IonutDaniel99/Grovayo#project-photos'
  />,
  <CarouselItem
    year={'Jan 2023'}
    description={'[React Native • JS] Recycling android app. This represent my university project for Master Degree.'}
    imagePath={'/Images/Home/loading.jpg'}
    externalLink='https://github.com/IonutDaniel99/Recyclify'
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
    <div className='flex items-center h-full tablet:justify-center'>
      <div className='relative flex justify-center w-full text-2xl text-white h-3/4 clipFade screenThreeContainer'>
        <div className='h-full mobile:w-full tablet:w-4/6'>
          <div
            className='flex items-center justify-end pr-20 h-1/4 mobile:pr-0 mobile:justify-center tablet:justify-end desktop:pr-20'
          >
            <div className='flex flex-col'>
              <span className='relative flex flex-col float-right w-full h-full gap-4'>
                <div className='flex items-center h-full gap-4 mobile:justify-center tablet:justify-end'>
                  <p className='text-3xl tablet:text-4xl font-Mitr'>Other skills in my deck!</p>
                </div>
                <div className='flex items-center justify-center gap-1 overflow-x-scroll tablet:gap-2 desktop:gap-3'>
                  <IconsTooltip iconName={'Php'} iconPath={'/Images/Home/Icons/php.png'} isDark={false} />
                  <IconsTooltip iconName={'Python'} iconPath={'/Images/Home/Icons/python.png'} isDark={false} className='mobile:hidden tablet:flex' />
                  <span className='w-[2px] h-6 bg-gray-400 rounded-xl mx-2' />
                  <IconsTooltip iconName={'Laravel'} iconPath={'/Images/Home/Icons/laravel.png'} isDark={false} />
                  <IconsTooltip iconName={'NodeJs'} iconPath={'/Images/Home/Icons/node.png'} isDark={false} />
                  <span className='w-[2px] h-6 bg-gray-400 rounded-xl mx-2' />
                  <IconsTooltip iconName={'Unity'} iconPath={'/Images/Home/Icons/unity.png'} isDark={true} />
                  <IconsTooltip
                    iconName={'Unreal Engine'}
                    iconPath={'/Images/Home/Icons/unreal.png'}
                    isDark={true}
                    className='mobile:hidden tablet:flex'
                  />
                  <span className='w-[2px] h-6 bg-gray-400 rounded-xl mx-2' />
                  <IconsTooltip iconName={'Git (Gitlab & Github)'} iconPath={'/Images/Home/Icons/git.png'} isDark={false} />
                  <IconsTooltip iconName={'Azure Devops'} iconPath={'/Images/Home/Icons/azure.png'} isDark={false} />
                  <span className='w-[2px] h-6 bg-gray-400 rounded-xl mx-2' />
                  <IconsTooltip iconName={'React Native (Android)'} iconPath={'/Images/Home/Icons/reactN.png'} isDark={false} />
                  <IconsTooltip
                    iconName={'Solid Js'}
                    iconPath={'/Images/Home/Icons/solid.png'}
                    isDark={false}
                    className='mobile:hidden tablet:flex'
                  />
                  <IconsTooltip iconName={'Three Js'} iconPath={'/Images/Home/Icons/three.png'} isDark={true} className='mobile:hidden tablet:flex' />
                  <IconsTooltip iconName={'Tailwind Css'} iconPath={'/Images/Home/Icons/tailwind.png'} isDark={false} />
                  <span className='w-[2px] h-6 bg-gray-400 rounded-xl mx-2' />
                  <img src={'/Images/Home/Icons/dots.png'} alt='' className='object-contain w-6 h-6 mx-1 invert' data-tooltip-id='threeDotsList' />
                  <Tooltip
                    id='threeDotsList'
                    html='This list expand constantly as i try to learn something new everyday!'
                    place={window.innerWidth <= 768 ? 'bottom' : 'left'}
                    className='w-1/2 text-sm font-Mitr'
                  />
                </div>
              </span>
              <span
                className='flex flex-col items-center px-0 pt-4 text-base text-gray-400 tablet:px-0 font-Mitr mobile:text-center mobile:text-sm tablet:text-base tablet:text-right tablet:items-end '
                data-tooltip-id='lowExperience'
              >
                Some projects i`ve interacted with others
                <br />
                <div className='flex text-gray-400 underline underline-offset-4 mobile:w-3/4 tablet:w-fit'>
                  programming languages, frameworks, versioning systems or libraries!
                </div>
              </span>
              <Tooltip
                id='lowExperience'
                html={modalHtml}
                place={window.innerWidth <= 768 ? 'bottom' : 'left'}
                className='z-50 text-sm text-center w-96 font-Mitr tablet:w-1/2 tablet:text-right laptop:text-center laptop:w-2/4 desktop:w-4/12'
              />
            </div>
          </div>
          <div className='relative w-full border-2 border-solid select-none top-10 border-lime-700 border-opacity-40 bg-lime-800 bg-opacity-10 rounded-xl'>
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
