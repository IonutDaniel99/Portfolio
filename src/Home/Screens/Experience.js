import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import React, { useEffect } from 'react'

function Experience() {

  const generateDate = () => {
    const employedDate = new Date("May 05, 2021")
    const today = new Date()

    var diffDays = today - employedDate;

    const diffYears = Math.floor(diffDays / (1000 * 60 * 60 * 24 * 365));
    const diffMonths = Math.floor((diffDays % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30) + 1);

    // Construct the output string
    var output;

    if (diffYears === 1) {
      output = `${diffYears} Year ${diffMonths} Months`
    } else {
      output = `${diffYears} Years ${diffMonths} Months`
    }
    return output
  }

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to('.experienceTitle', {
        ease: 'power4.inOut',
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
        opacity: 1,
        y: 0,
        duration: 2.2,
        scrollTrigger: {
          trigger: '.experience',
          scrub: 3,
          start: 'top 60%',
          end: 'top 70%',
          toggleActions: 'restart reverse none reverse',
        },
      })
      gsap.to('.title1', {
        ease: 'power4.inOut',
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
        opacity: 1,
        y: 0,
        duration: 2.2,
        scrollTrigger: {
          trigger: '.experienceTitle',
          start: 'top 50%',
          end: 'top 90%',
          toggleActions: 'restart reverse reverse reverse',
          scrub: 3,
        },
      })
      gsap.to('.companyPic', {
        ease: 'power4.inOut',
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
        opacity: 1,
        y: 0,
        duration: 2.2,
        scrollTrigger: {
          trigger: '.experienceTitle',
          start: 'top 50%',
          end: 'top 90%',
          toggleActions: 'restart reverse reverse reverse',
          scrub: 3,
        },
      })
    })
    return () => ctx.revert()
  }, [])
  return (
    <div className='flex flex-col items-center w-screen h-1/2 experience
      mobile:mb-40 mobile:w-full 
      tablet:px-4 tablet:mb-0
     '>
      <div className='z-10 pt-20 text-white experienceTitle clipFade font-Mitr font-medium border-b-4 text-4xl border-white border-solid pb-2.5
        laptop:text-5xl
      '>
        Work Experience
      </div>
      <div className='z-10 flex items-center pt-20 justify-between h-96
      mobile:flex-col mobile:gap-20 mobile:w-full
      tablet:flex-row tablet:gap-4 tablet:w-full
      laptop:justify-around laptop:w-3/4
      '>
        <div className='text-base text-white title1 clipFade flex flex-col font-Mitr gap-2
        mobile:px-2.5 mobile:w-full 
        tablet:text-lg tablet:w-8/12
        laptop:w-2/4
        '>
          <span>Company: <span className='text-orange-500 underline underline-offset-4'>Endava</span></span>
          <span>Location: Pitesti, Romania</span>
          <span>Employed: May 2021 - Present · ({generateDate()})</span>
          <span>Current project: Banking services where we develop a <span className='text-blue-400'>ReactJS</span> web application for trading!</span>
        </div>
        <img src='/Images/Home/Endava.jpg' alt='' className='h-2/4 object-cover rounded-xl companyPic clipFade
        mobile:w-10/12 mobile:px-2.5
        tablet:w-4/12
        laptop:w-2/4 laptop:h-3/4
        desktop:h-[200px] desktop:w-2/6
        ' />
      </div>
    </div>
  )
}

export default Experience
