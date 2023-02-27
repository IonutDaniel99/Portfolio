import React from 'react'
const handleDragStart = (e) => e.preventDefault();

function CarouselItem({ year, description }) {
    return (
        <div className='cursor-pointer group'>
            <div className='flex items-center justify-center w-[375px] h-20 font-Mitr text-xl opacity-30 group-hover:opacity-100  group-hover:text-white duration-700'>{year}</div>
            <div className='w-[375px] h-[210px] bg-cover overflow-hidden rounded-xl'>
                <div className='absolute z-20 w-[375px] h-[210px] text-white bg-black rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-70 duration-700 flex-col gap-4'>
                    <span className='w-10/12 text-lg text-center font-Mitr'>{description}</span>
                    <span className='text-base font-medium underline underline-offset-4 font-Mitr'>Click to show!</span>
                </div>
                <img src="https://picsum.photos/375/210" className='duration-700 group-hover:scale group-hover:scale-105' onDragStart={handleDragStart} alt='' />
            </div>
        </div>
    )
}

export default CarouselItem