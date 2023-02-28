import gsap from 'gsap'
import React, { useEffect, useLayoutEffect, useRef } from 'react'
import ScreenOne from './projectsPanels/ScreenOne'

function Projects() {
  const component = useRef()
  const slider = useRef()

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray('.panel')
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          markers: true,
          end: () => '+=' + slider.current.offsetWidth
        }
      })

      gsap.to('.portfolioProjects', {
        ease: 'power4.inOut',
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
        opacity: 1,
        y: 0,
        duration: 2.2,
        scrollTrigger: {
          trigger: '.portfolioProjects',
          scrub: 3,
          start: 'top 60%',
          end: 'top 70%',
          toggleActions: 'restart reverse none reverse',
        },
      })
    }, component)
    return () => ctx.revert()
  })

  return (
    <div ref={component} className='bg-darkNotDark'>
      <div className='flex flex-col justify-end items-center h-[280px] z-20 '>
        <div className='z-10 text-6xl text-white portfolioProjects clipFade font-Mitr font-medium border-b-4 border-white border-solid pb-2.5'>
          Projects
        </div>
      </div>
      <div ref={slider} className='w-[500vw] h-full flex flex-wrap z-10'>
        <div className='z-10 panel'><ScreenOne /></div>
        <div className='z-10 panel'><ScreenOne /></div>
        <div className='z-10 panel'><ScreenOne /></div>
        <div className='z-10 panel'><ScreenOne /></div>
      </div>
      <div className='flex h-screen bg-yellow-500'>Last Container</div>
    </div>
  )
}

export default Projects
