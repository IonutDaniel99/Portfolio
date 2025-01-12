import React from 'react'

function NftCard() {
    return (
        <div className="bg-[#0D1A2D] w-[450px] h-full flex items-center justify-center flex-col relative">
            <div className="p-4 bg-[#15273F] w-72 rounded-xl scale-[1.03]">
                <img src="/internal_project/cards/nft/image-equilibrium.jpg" alt="" className="rounded-xl" />
                <p className="pt-4 font-bold text-white"> Equilibrium #3429</p>
                <p className="text-left text-[#90A7C6] pt-4">Our Equilibrium collection promotes balance and calm</p>
                <div className="flex justify-between pt-6">
                    <span className="flex items-center">
                        <svg width="11" height="18" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z"
                                fill="#00FFF8"
                            />
                        </svg>
                        <p className="text-[#2DEDF2] pl-2 font-medium text-sm">0.041 ETH</p>
                    </span>
                    <span className="flex items-center">
                        <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z"
                                fill="#8BACD9"
                            />
                        </svg>
                        <p className="pl-1 text-[#819CC7] font-medium text-sm">3 days left</p>
                    </span>
                </div>
                <div className="border-b-[1px] border-slate-600 pt-4 pb-1"></div>
                <div className="flex items-center pt-4 pb-4">
                    <img
                        src="/internal_project/Cards/nft/image-avatar.png"
                        alt=""
                        className="w-8 h-8 border-[1px] border-white rounded-full"
                    />
                    <p className="flex ml-4 text-[#90A7C6] text-sm font-medium">
                        Creation of<span className="ml-1 text-white">Jules Wyvern</span>
                    </p>
                </div>
            </div>
            <a
                href="https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U"
                target="_blank"
                rel="noreferrer"
                className="relative text-gray-600 underline top-8 opacity-60 hover:text-blue-600"
            >
                Source
            </a>
        </div>
    )
}

export default NftCard

