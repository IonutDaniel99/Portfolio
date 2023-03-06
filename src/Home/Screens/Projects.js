import gsap from 'gsap'
import React, { useEffect, useLayoutEffect, useRef } from 'react'
import ScreenOne from './projectsPanels/ScreenOne'
import ScreenThree from './projectsPanels/ScreenThree'
import ScreenTwo from './projectsPanels/ScreenTwo'

function Projects() {
  const component = useRef()

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to('.ProjectsTitle', {
        ease: 'power4.inOut',
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
        opacity: 1,
        y: 0,
        duration: 2.2,
        scrollTrigger: {
          trigger: '.ProjectsTitle',
          scrub: 3,
          start: 'top 80%',
          end: 'top 40%',
          toggleActions: 'play reverse reverse restart',
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
    <div ref={component}>
      <div className='z-20 flex flex-col items-center justify-end h-48'>
        <div className='z-10 text-5xl text-white ProjectsTitle clipFade font-Mitr font-medium border-b-4 border-white border-solid pb-2.5'>
          Projects
        </div>
      </div>
      <div className='z-10 flex flex-row flex-wrap w-full h-full sliderProjects'>
        <div className='z-10 w-screen min-h-[800px]'><ScreenOne /></div>
        <div className='z-10 w-screen min-h-[800px]'><ScreenTwo /></div>
        <div className='z-10 w-screen min-h-[800px]'><ScreenThree /></div>
      </div>
    </div>
  )
}

export default Projects
