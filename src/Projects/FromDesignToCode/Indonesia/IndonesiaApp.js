import React from 'react'

function IndonesiaApp() {
    return (
        <div className='h-screen w-screen text-white flex justify-center'>
            <div className='absolute -z-50 bg-cover bg-center h-full w-full blur-lg brightness-75 backdrop-brightness-0 saturate-50' style={{ backgroundImage: `url("/Images/Indonesia/bg-mountain.jpg")` }} />
            <div className='px-32 py-10 w-9/12'>
                <nav className='flex flex-row w-full h-16 items-center'>
                    <img src='/Images/Indonesia/logo.png' alt="Wonderful Indonesia Logo" className='h-16 mr-20 invert brightness-0' />
                    <div className='h-20 flex items-center gap-28 w-full'>
                        <p className='text-lg cursor-pointer hover:text-blue-200'>Home</p>
                        <p className='text-lg cursor-pointer hover:text-blue-200'>News</p>
                        <p className='text-lg cursor-pointer hover:text-blue-200'>About</p>
                        <p className='text-lg cursor-pointer hover:text-blue-200'>Explore</p>
                    </div>
                    <span className=' float-right flex items-center h-20 w-fit pr-10'>
                        <img src='/Images/Indonesia/search.png' alt="Search Icon" className=' w-8 h-6 invert cursor-pointer' />
                    </span>
                </nav>
                <div className='mt-8 mb-8 h-[450px] rounded-2xl relative'>
                    <div className='-z-40 h-full w-full absolute saturate-150 brightness-75 bg-center bg-cover rounded-2xl' style={{ backgroundImage: `url("/Images/Indonesia/bg-mountain.jpg")` }}></div>
                    <div className='h-full w-full flex flex-col items-center justify-center'>
                        <span className='font-AlexBrush text-8xl top-4 relative'>Wonderful</span>
                        <span className='font-BebasNeue text-9xl'>INDONESIA</span>
                        <span className='w-2/6 text-lg text-center relative top-4 text-gray-300'>Indonesia is one of the best country in the world <br /> with a thousand of beautiful islands </span>

                    </div>
                </div>
                <div>
                    <p className='text-3xl font-PaulGrotesk pb-2'>Destinations</p>
                    <cards className="flex flex-row justify-between gap-4">
                        <div className='h-56 w-[23rem] bg-cover bg-center rounded-2xl saturate-200 brightness-125' style={{ backgroundImage: `url("/Images/Indonesia/wisnuKenkana.jpg")` }}>
                            <div className='flex flex-col h-full w-full justify-end items-start px-8 py-4'>
                                <span className='font-AlexBrush text-4xl'>Garuda</span>
                                <span className='font-BebasNeue text-4xl'>WISNU KENCANA</span>
                            </div>
                        </div>
                        <div className='h-56 w-[23rem] bg-cover bg-center rounded-2xl' style={{ backgroundImage: `url("/Images/Indonesia/penida.jpg")` }}>
                            <div className='flex flex-col h-full w-full justify-end items-start px-8 py-4'>
                                <span className='font-AlexBrush text-4xl'>Nusa</span>
                                <span className='font-BebasNeue text-4xl'>PENID</span>
                            </div>
                        </div>
                        <div className='h-56 w-[23rem] bg-cover bg-center rounded-2xl' style={{ backgroundImage: `url("/Images/Indonesia/bajo.jpg")` }}>
                            <div className='flex flex-col h-full w-full justify-end items-start px-8 py-4'>
                                <span className='font-AlexBrush text-4xl'>Labuan</span>
                                <span className='font-BebasNeue text-4xl'>BAJO</span>
                            </div>
                        </div>
                    </cards>
                </div>
            </div>
            <div className='absolute bottom-2 right-4 text-lg '>
                <p>Design from <a href='https://www.instagram.com/goldwinhalim' target='_blank' alt="instagram goldwinhalim" rel="noreferrer" className='underline text-blue-300'>@goldwinhalim</a></p>
            </div>
        </div>
    )
}

export default IndonesiaApp