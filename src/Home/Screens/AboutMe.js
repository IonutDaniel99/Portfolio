import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import React, { useEffect } from 'react'
import ScrollDownNounSvg from '../Icons/ScrollDownNounSvg'

function AboutMe({ loadingRemoved, isAboutMeDone }) {
  useEffect(() => {
    if (!loadingRemoved) return
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
        delay: 1,
        duration: 2,
      })
      .to('.scrollDownIcon', {
        ease: 'sine.easeOut',
        opacity: 0.7,
        delay: 2,
        duration: 1,
        zIndex: 11,
        onComplete: isAboutMeDone,
      })
    return () => tl.revert()
  }, [loadingRemoved])

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to('.scrollDownIcon', {
        ease: 'none',
        opacity: 0,
        duration: 2,
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
    return () => ctx.revert()
  })

  return (
    <>
      <div className='relative z-10 flex justify-between w-screen h-screen text-white font-Mitr aboutMe'>
        <div className='flex items-center justify-center w-full gap-20 z-[3]'>
          <div className='flex flex-col gap-16 -mt-24'>
            <p className='font-semibold tracking-wider text-9xl min-w-[1000px] clipFade myName'>Hi, I`m DANIEL</p>
            <h2 className='text-32 min-w-[1000px] clipFade myHobby'>
              Front-end developer with a passion for games <br />
              and for graphical environments that captivates the eyes.
            </h2>
            <h2 className='text-32 min-w-[1000px] clipFade myTime'>
              I`m currently based in Romania, <br />
              and I pursuit a Master's degree in Computer Science.
            </h2>
          </div>
          <div className='w-[470px] h-[650px] ml-10 myPhoto relative '>
            <p className='absolute flex items-center justify-center w-full h-full text-2xl text-center opacity-0 thisIsMe'>
              And this is a photo with me! 😄
            </p>
            <img src='https://picsum.photos/470/650' alt='' className='absolute w-[470px] h-[650px] clipFade myPhoto ' />
          </div>
        </div>
      </div>
      <div className='absolute z-0 flex items-center justify-center w-full opacity-0 bottom-10 clipFade scrollDownIcon'>
        <ScrollDownNounSvg className='animate-pulse' />
      </div>
    </>
  )
}

export default AboutMe
