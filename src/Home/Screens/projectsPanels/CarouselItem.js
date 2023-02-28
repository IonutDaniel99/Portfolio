import React from 'react'
const handleDragStart = (e) => e.preventDefault()

function CarouselItem({ year, description, imagePath, shouldHaveBorder, externalLink, isReset, handleReset }) {
  return (
    <div className='cursor-pointer group w-[375px]' onDragStart={handleDragStart} onClick={handleReset}>
      <div className='flex items-center justify-center w-[375px] h-20 font-Mitr text-xl opacity-20 group-hover:opacity-100  group-hover:text-white duration-700'>
        {year}
      </div>
      <div
        className={`w-[375px] h-[210px] bg-cover overflow-hidden flex items-center justify-center rounded-xl group-hover:border-0  ${shouldHaveBorder ? 'border-[1px] border-solid border-slate-500' : ''
          }`}
      >
        <div className='absolute z-20 w-[375px] h-[210px] text-white rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 duration-700 flex-col gap-4'>
          <div className='absolute z-10 w-full h-full duration-700 bg-black opacity-70 rounded-xl'></div>
          <span className='z-20 w-10/12 text-2xl text-center text-white duration-700 font-Mitr '>{description}</span>
        </div>
        <img
          src={imagePath}
          className={`duration-700 group-hover:scale group-hover:scale-105 h-full w-full ${isReset ? 'w-32 h-32 invert opacity-40' : ''}`}
          alt=''
        />
      </div>
      {externalLink && (
        <a
          href={externalLink}
          target='_blank'
          className='flex items-center justify-center py-5 text-xl font-medium text-blue-200 underline duration-700 opacity-0 group-hover:opacity-75 underline-offset-4 font-Mitr hover:text-blue-400 '
          rel='noreferrer'
        >
          Click to open in a new tab!
        </a>
      )}
    </div>
  )
}

export default CarouselItem
