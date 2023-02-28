import gsap from 'gsap'
import React, { useEffect, useLayoutEffect, useRef } from 'react'
import ScreenOne from './projectsPanels/ScreenOne'
import ScreenTwo from './projectsPanels/ScreenTwo'

function Projects() {
  const component = useRef()
  const slider = useRef()

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray('.panel')
      gsap.to(panels, {
        yPercent: -100 * (panels.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          markers: true,
          end: () => '+=' + slider.current.offsetHeight
        }
      })

      gsap.to('.ProjectsTitle', {
        ease: 'power4.inOut',
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
        opacity: 1,
        y: 0,
        duration: 2.2,
        scrollTrigger: {
          trigger: '.ProjectsTitle',
          scrub: 3,
          start: 'top 90%',
          end: 'top 100%',
          toggleActions: 'restart reverse none reverse',
        },
      })
      gsap.to('.sliderProjects', {
        ease: 'power4.inOut',
        opacity: 1,
        duration: 2.2,
        scrollTrigger: {
          trigger: '.sliderProjects',
          scrub: 3,
          start: 'top 70%',
          end: 'top 90%',
          toggleActions: 'play none none none',
        },
      })
    }, component)
    return () => ctx.revert()
  })

  return (
    <div ref={component} className='bg-darkNotDark'>
      <div className='flex flex-col justify-end items-center h-[270px] z-20 '>
        <div className='z-10 text-6xl text-white ProjectsTitle clipFade font-Mitr font-medium border-b-4 border-white border-solid pb-2.5'>
          Projects
        </div>
      </div>
      <div ref={slider} className='z-10 flex flex-row flex-wrap w-full h-screen opacity-0 sliderProjects'>
        <div className='z-10 panel'><ScreenOne /></div>
        <div className='z-10 panel'><ScreenTwo /></div>
        <div className='z-10 panel'><ScreenOne /></div>
        <div className='z-10 panel'><ScreenOne /></div>
      </div>
      <div className='flex h-screen bg-yellow-500'>Last Container</div>
    </div>
  )
}

export default Projects
