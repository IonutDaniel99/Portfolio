import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import React, { useEffect } from 'react'
import ScrollDownNounSvg from '../Icons/ScrollDownNounSvg'

function AboutMe({ isAboutMeDone }) {
  useEffect(() => {
    let tl = gsap.timeline({
      defaults: {
        ease: 'power3.inOut',
        duration: 2,
        y: 0,
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
        opacity: 1,
      },
    })
    tl.to('.myName', {
      duration: 1.2,
    })
      .to('.myHobby', {
        opacity: 1,
      })
      .to('.myTime', {
        opacity: 1,
      })
      .to('.thisIsMe', {
        opacity: 1,
        duration: 2,
      })
      .to('.myPhoto', {
        ease: 'power3.inOut',
        opacity: 1,
        duration: 2,
      })
      .to('.scrollDownLoadingText', {
        ease: 'none',
        opacity: 0,
        duration: 1,
        clipPath: "",
        zIndex: 0,
        onComplete: isAboutMeDone
      })
      .to('.scrollDownIcon', {
        ease: 'sine.easeOut',
        opacity: 0.7,
        duration: 1,
        zIndex: 11,
      }, "<")


    let ctx = gsap.context(() => {
      gsap.to('.scrollDownIcon', {
        ease: 'none',
        opacity: 0,
        duration: 1.5,
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
        scrollTrigger: {
          trigger: '.aboutMe',
          start: 'bottom 85%',
          end: 'bottom 100%',
          immediateRender: false,
          toggleActions: 'play none none reverse',
        },
      })
    })
    return () => [tl.revert(), ctx.revert()]
  }, [])

  useEffect(() => {

  })

  return (
    <>
      <div className='relative z-10 flex justify-between w-screen h-screen text-white font-Mitr aboutMe'>
        <div className='flex items-center flex-col w-full gap-8 z-[3]
        mobile:mt-10 mobile:justify-start
        tablet:flex-row tablet:mt-0 tablet:gap-0 tablet:justify-center tablet:ml-10
        laptop:justify-center laptop:w-full laptop:mx-16
        '>
          <div className='flex flex-col gap-8
            mobile:mt-0
            tablet:mt-0 tablet:w-[400px] tablet:gap-16 tablet:ml-2
            laptop:mt-0 laptop:w-1/2'>
            <p className='w-full text-4xl font-semibold tracking-wider clipFade myName 
            tablet:text-5xl tablet:w-full
            laptop:text-7xl laptop:w-full
            desktop:text-7xl 
            '
            >Hi, I`m DANIEL</p>
            <h2 className='text-base clipFade myHobby
             mobile:w-96 
             tablet:text-lg tablet:w-full
             laptop:text-2xl laptop:w-[645px]
             desktop:text-3xl desktop:w-[800px]
            '>
              Front-end developer with a passion for games
              and for graphical environments that captivates the eyes.
            </h2>
            <h2 className='text-base clipFade myTime
             mobile:w-96
             tablet:text-lg tablet:w-full
             laptop:text-2xl laptop:w-[645px]
             desktop:text-3xl desktop:w-[800px]
            '>
              I`m currently based in Romania, <br />
              and I pursuit a Master's degree in Computer Science.
            </h2>
          </div>
          <div className='myPhoto relative flex justify-center
          mobile:w-[470px] mobile:h-[400px] 
          tablet:w-[450px] tablet:h-[650px] tablet:items-center
          laptop:w-1/2 laptop:h-[650px]
          '>
            <p className='absolute flex items-center justify-center h-full text-base text-center opacity-0 thisIsMe
             tablet:text-base tablet:w-3/4
             laptop:text-2xl
             desktop:text-3xl'>
              And this is a photo with me! 😄
            </p>
            <img src='/Images/Home/PhotoWithMe.png' alt='' className='absolute clipFade myPhoto 
             mobile:w-7/12 mobile:h-[360px]
             tablet:w-[280px] tablet:h-[360px]
             laptop:w-[340px] laptop:h-[450px]
            ' />
          </div>
        </div>
      </div>
      <div className='relative'>
        <div className='absolute z-20 flex items-center justify-center w-full text-xl text-center text-white opacity-100 bottom-10 font-Mitr scrollDownLoadingText'>
          <span>Loading...<br /><span className='animate-pulse'>Scroll disabled!</span></span>
        </div>
        <div className='absolute z-0 flex items-center justify-center w-full opacity-0 bottom-10 clipFade scrollDownIcon'>
          <ScrollDownNounSvg className='animate-pulse' />
        </div>
      </div>
    </>
  )
}

export default AboutMe
