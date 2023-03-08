import React from 'react'

function IndonesiaApp() {
  return (
    <div className='flex justify-center w-screen h-screen text-white'>
      <div
        className='absolute w-full h-full bg-center bg-cover -z-50 blur-lg brightness-75 backdrop-brightness-0 saturate-50'
        style={{ backgroundImage: `url("/Images/Indonesia/bg-mountain.jpg")` }}
      />
      <div className='w-9/12 px-32 py-10'>
        <nav className='flex flex-row items-center w-full h-16'>
          <img src='/Images/Indonesia/logo.png' alt='Wonderful Indonesia Logo' className='h-16 mr-20 invert brightness-0' />
          <div className='flex items-center w-full h-20 gap-28'>
            <p className='text-lg duration-300 ease-in-out cursor-pointer hover:text-blue-200'>Home</p>
            <p className='text-lg duration-300 ease-in-out cursor-pointer hover:text-blue-200'>News</p>
            <p className='text-lg duration-300 ease-in-out cursor-pointer hover:text-blue-200'>About</p>
            <p className='text-lg duration-300 ease-in-out cursor-pointer hover:text-blue-200'>Explore</p>
          </div>
          <span className='flex items-center float-right h-20 pr-10 w-fit'>
            <img
              src='/Images/Indonesia/search.png'
              alt='Search Icon'
              className='w-8 h-6 duration-300 ease-in-out cursor-pointer invert hover:invert-0'
            />
          </span>
        </nav>
        <div className='mt-8 mb-8 h-[450px] rounded-2xl relative group duration-300 ease-in-out hover:scale-110'>
          <div
            className='absolute w-full h-full bg-center bg-cover -z-40 saturate-150 brightness-75 rounded-2xl '
            style={{ backgroundImage: `url("/Images/Indonesia/bg-mountain.jpg")` }}
          ></div>
          <div className='flex flex-col items-center justify-center w-full h-full'>
            <span className='relative font-AlexBrush text-8xl top-4'>Wonderful</span>
            <span className='font-BebasNeue text-9xl'>INDONESIA</span>
            <span className='relative w-2/6 text-lg text-center text-gray-300 top-4'>
              Indonesia is one of the best country in the world <br /> with a thousand of beautiful islands{' '}
            </span>
          </div>
        </div>
        <div>
          <p className='pb-2 text-3xl font-PaulGrotesk'>Destinations</p>
          <cards className='flex flex-row justify-between gap-4'>
            <div
              className='h-56 w-[23rem] bg-cover bg-center rounded-2xl saturate-200 brightness-125 duration-300 ease-in-out hover:scale-105 cursor-pointer'
              style={{ backgroundImage: `url("/Images/Indonesia/wisnuKenkana.jpg")` }}
            >
              <div className='flex flex-col items-start justify-end w-full h-full px-8 py-4'>
                <span className='text-4xl font-AlexBrush'>Garuda</span>
                <span className='text-4xl font-BebasNeue'>WISNU KENCANA</span>
              </div>
            </div>
            <div
              className='h-56 w-[23rem] bg-cover bg-center rounded-2xl duration-300 ease-in-out hover:scale-105 cursor-pointer'
              style={{ backgroundImage: `url("/Images/Indonesia/penida.jpg")` }}
            >
              <div className='flex flex-col items-start justify-end w-full h-full px-8 py-4'>
                <span className='text-4xl font-AlexBrush'>Nusa</span>
                <span className='text-4xl font-BebasNeue'>PENID</span>
              </div>
            </div>
            <div
              className='h-56 w-[23rem] bg-cover bg-center rounded-2xl duration-300 ease-in-out hover:scale-105 cursor-pointer'
              style={{ backgroundImage: `url("/Images/Indonesia/bajo.jpg")` }}
            >
              <div className='flex flex-col items-start justify-end w-full h-full px-8 py-4'>
                <span className='text-4xl font-AlexBrush'>Labuan</span>
                <span className='text-4xl font-BebasNeue'>BAJO</span>
              </div>
            </div>
          </cards>
        </div>
      </div>
      <div className='absolute text-lg bottom-2 right-4 '>
        <p>
          Design from{' '}
          <a
            href='https://www.instagram.com/goldwinhalim'
            target='_blank'
            alt='instagram goldwinhalim'
            rel='noreferrer'
            className='text-blue-300 underline'
          >
            @goldwinhalim
          </a>
        </p>
      </div>
    </div>
  )
}

export default IndonesiaApp
