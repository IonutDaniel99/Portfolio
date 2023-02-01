/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function CardsApp() {
    return (
        <div className='h-screen overflow-y-hidden'>
            <div className='flex flex-row h-full w-fit'>
                {/* QR CODE FE MENTOR */}
                <div className='relative bg-[#D5E1EF] w-[450px] h-full flex items-center justify-center flex-col'>
                    <card className="p-4 scale-[1.19] bg-white w-72 rounded-3xl">
                        <img src='/Images/Cards/qrcode/qr.png' alt='' className='rounded-xl' />
                        <p className='text-center text-[#1f2f52] font-bold text-lg px-2 py-4'>Improve your front-end skills by building projects</p>
                        <p className='px-2 text-[#898d95] text-sm pb-4 text-center'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
                    </card>
                    <a href='https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H' target="_blank" rel="noreferrer" className='relative text-gray-600 underline top-16 opacity-60 hover:text-blue-600'>Source</a>
                </div>
                <div className='bg-[#0D1A2D] w-[450px] h-full flex items-center justify-center flex-col relative'>
                    <card className="p-4 bg-[#15273F] w-72 rounded-xl scale-[1.03]">
                        <img src='/Images/Cards/nft/image-equilibrium.jpg' alt='' className='rounded-xl' />
                        <p className='pt-4 font-bold text-white'> Equilibrium #3429</p>
                        <p className='text-left text-[#90A7C6] pt-4'>Our Equilibrium collection promotes balance and calm</p>
                        <div className='flex justify-between pt-6'>
                            <span className='flex items-center'>
                                <svg width="11" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z" fill="#00FFF8" /></svg>
                                <p className='text-[#2DEDF2] pl-2 font-medium text-sm'>0.041 ETH</p>
                            </span>
                            <span className='flex items-center'>
                                <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg"><path d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z" fill="#8BACD9" /></svg>
                                <p className='pl-1 text-[#819CC7] font-medium text-sm'>3 days left</p>
                            </span>
                        </div>
                        <div className='border-b-[1px] border-slate-600 pt-4 pb-1'></div>
                        <div className='flex items-center pt-4 pb-4'>
                            <img src='/Images/Cards/nft/image-avatar.png' alt='' className='w-8 h-8 border-[1px] border-white rounded-full' />
                            <p className='flex ml-4 text-[#90A7C6] text-sm font-medium'>Creation of<span className='ml-1 text-white'>Jules Wyvern</span></p>
                        </div>
                    </card>
                    <a href='https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U' target="_blank" rel="noreferrer" className='relative text-gray-600 underline top-8 opacity-60 hover:text-blue-600'>Source</a>
                </div>
                <div className='w-[450px] bg-[#D6E1FF] h-full flex items-center justify-center flex-col'>
                    <div className='bg-white shadow-xl w-80 rounded-xl shadow-[#C7D0F2]'>
                        <img src='/Images/Cards/osummary/illustration-hero.svg' alt='' className='rounded-tr-xl rounded-tl-xl' />
                        <p className='text-[#223556] text-center pt-6 pb-4 px-10 font-bold text-2xl'>Order Summary</p>
                        <p className='text-sm text-center text-[#777D8B] px-10 font-light opacity-90'><b className='font-medium'>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like</b></p>
                        <div className='flex items-center justify-between p-4 mx-6 my-6 bg-[#F8F9FE]'>
                            <span className='flex items-center'>
                                <img src='/Images/Cards/osummary/icon-music.svg' alt='' className='w-10 h-10' />
                                <div className='flex flex-col pl-4'>
                                    <span className='text-sm font-bold text-[#1E2744]'>Annual Plan</span>
                                    <span className='text-sm font-medium text-[#777D8B]'>$59.99/year</span>
                                </div>
                            </span>
                            <a href='#' className='text-[#4638C3] text-sm underline font-bold'>Change</a>
                        </div>
                        <div className='bg-[#382AE1] mx-6 px-6 py-3 mb-4 rounded-xl flex items-center justify-center shadow-xl shadow-[#D8D0FF]'>
                            <p className='text-sm font-bold text-white'>Proceed to Payment</p>
                        </div>
                        <p className='pb-10 pt-2 font-bold text-center text-[#6C708B] opacity-80 text-sm'>Cancel Order</p>
                    </div>
                    <a href='https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj' target="_blank" rel="noreferrer" className='relative text-gray-600 underline top-6 opacity-60 hover:text-blue-600'>Source</a>

                </div>
                <div className='w-[450px]'>4</div>
                <div className='w-[450px]'>5</div>
                <div className='w-[450px]'>6</div>
            </div>
        </div>
    )
}

export default CardsApp