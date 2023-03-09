import React from 'react'

function Footer() {

  return <div className='flex items-center justify-center w-screen h-screen text-white text-7xl mobile:flex-col mobile:px-4'>
    <div className='w-full border-2 border-solid rounded-3xl h-[600px] border-sky-900 border-opacity-60 p-6 bg-darkNotDark bg-opacity-70'>
      <div className='w-full border-2 border-red-600 border-opacity-25 border-solid rounded-2xl h-4/5'>
        <img src='/Images/Home/PitestiArea.png' alt='Pitesti Area' className='object-cover w-full h-full overflow-hidden rounded-2xl' />
      </div>
      <div className='flex flex-col items-center justify-center w-full text-center rounded-lg h-1/5'>
        <div className='text-3xl font-Mitr'>Pitesti, Romania</div>
        <div className='pt-2 text-base font-normal font-Mitr opacity-40'>
          18:30:22
        </div>
      </div>
    </div>
    <div>
      4 ecrane
    </div>
  </div>
}

export default Footer
