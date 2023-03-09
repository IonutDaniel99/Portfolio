import moment from 'moment-timezone';
import React, { useEffect, useState } from 'react'

function Footer() {
  const countryCode = "Europe/Bucharest"

  const [currentTime, setCurrentTime] = useState(moment().tz(countryCode).format('HH:mm:ss'));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment().tz(countryCode).format('HH:mm:ss'));
    }, 1000);

    return () => clearInterval(interval);
  }, [countryCode]);


  return <div className='flex items-center justify-center w-screen gap-8 text-white text-7xl mobile:flex-col mobile:px-4 laptop:flex-row z-10 min-h-[800px] pb-20'>
    <div className='w-full border-2 border-solid rounded-3xl h-[600px] border-sky-900 border-opacity-60 p-6 bg-darkNotDark bg-opacity-70 tablet:w-4/6 laptop:w-3/12'>
      <div className='w-full overflow-hidden border-2 border-red-600 border-opacity-25 border-solid rounded-2xl h-4/5 group'>
        <img src='/Images/Home/PitestiArea.png' alt='Pitesti Area' className='object-cover w-full h-full overflow-hidden duration-700 rounded-2xl group-hover:scale-110' />
      </div>
      <div className='flex flex-col items-center justify-center w-full text-center rounded-lg h-1/5'>
        <div className='text-3xl font-Mitr'>Pitesti, Romania</div>
        <div className='pt-2 text-base font-normal font-Mitr opacity-40'>
          {currentTime}
        </div>
      </div>
    </div>
    <div className='flex flex-wrap w-full h-full gap-4 tablet:w-4/6 laptop:w-3/12 laptop:flex laptop:h-fit'>
      <p className='w-full pb-4 text-3xl text-center font-Mitr'>Where you can find me.</p>
      <div className='flex w-full gap-4 h-1/2 tablet:h-56 tablet:w-full'>
        <a href="https://www.linkedin.com/in/ionut-daniel-ene/" target="_blank" rel="noreferrer" className='flex flex-col items-center justify-center w-full h-full gap-2 p-6 border-2 border-solid cursor-pointer rounded-3xl border-sky-900 border-opacity-60 bg-darkNotDark bg-opacity-70 group'>
          <img src="/Images/Home/Icons/linkedin.png" alt='Linkedin Icon' className='w-10 h-10 duration-700 rounded-md group-hover:scale-125 group-hover:mb-4' />
          <p className='text-base duration-700 font-Mitr group-hover:underline underline-offset-4'>Linkedin</p>
          <p className='text-xs text-center text-gray-500 duration-700 font-Mitr'>A place to meet me</p>
        </a>
        <a href="https://dribbble.com/ionutdaniel99" target="_blank" rel="noreferrer" className='flex flex-col items-center justify-center w-full h-full gap-2 p-6 border-2 border-solid cursor-pointer rounded-3xl border-sky-900 border-opacity-60 bg-darkNotDark bg-opacity-70 group'>
          <img src="/Images/Home/Icons/dribbble.png" alt='Linkedin Icon' className='w-10 h-10 duration-700 rounded-md group-hover:scale-125 group-hover:mb-4' />
          <p className='text-base duration-700 font-Mitr group-hover:underline underline-offset-4'>Dribble</p>
          <p className='text-xs text-center text-gray-500 duration-700 font-Mitr'>Join my design area</p>
        </a>
      </div>
      <div className='flex w-full gap-4 h-1/2 tablet:h-56 tablet:w-full'>
        <a href="https://github.com/IonutDaniel99" target="_blank" rel="noreferrer" className='flex flex-col items-center justify-center w-full h-full gap-2 p-6 border-2 border-solid cursor-pointer rounded-3xl border-sky-900 border-opacity-60 bg-darkNotDark bg-opacity-70 group'>
          <img src="/Images/Home/Icons/github.png" alt='Linkedin Icon' className='w-10 h-10 duration-700 rounded-md group-hover:scale-125 group-hover:mb-4' />
          <p className='text-base duration-700 font-Mitr group-hover:underline underline-offset-4'>Github</p>
          <p className='text-xs text-center text-gray-500 duration-700 font-Mitr'>My personal projects</p>
        </a>
        <a href="https://www.instagram.com/uiux.daniel/" target="_blank" rel="noreferrer" className='flex flex-col items-center justify-center w-full h-full gap-2 p-6 border-2 border-solid cursor-pointer rounded-3xl border-sky-900 border-opacity-60 bg-darkNotDark bg-opacity-70 group'>
          <img src="/Images/Home/Icons/instagram.png" alt='Linkedin Icon' className='w-10 h-10 duration-700 rounded-md group-hover:scale-125 group-hover:mb-4' />
          <p className='text-base duration-700 font-Mitr group-hover:underline underline-offset-4'>Instagram</p>
          <p className='text-xs text-center text-gray-500 duration-700 font-Mitr'>My UX/Ui Social Media</p>
        </a>
      </div>
    </div>
  </div>
}

export default Footer
