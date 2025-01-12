/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function MusicCard() {
    return (
        <div className="w-[450px] bg-[#D6E1FF] h-full flex items-center justify-center flex-col">
            <div className="bg-white shadow-xl w-80 rounded-xl shadow-[#C7D0F2]">
                <img
                    src="/internal_project/Cards/osummary/illustration-hero.svg"
                    alt=""
                    className="rounded-tr-xl rounded-tl-xl"
                />
                <p className="text-[#223556] text-center pt-6 pb-4 px-10 font-bold text-2xl">Order Summary</p>
                <p className="text-sm text-center text-[#777D8B] px-10 font-light opacity-90">
                    <b className="font-medium">
                        You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you
                        like
                    </b>
                </p>
                <div className="flex items-center justify-between p-4 mx-6 my-6 bg-[#F8F9FE]">
                    <span className="flex items-center">
                        <img src="/internal_project/Cards/osummary/icon-music.svg" alt="" className="w-10 h-10" />
                        <div className="flex flex-col pl-4">
                            <span className="text-sm font-bold text-[#1E2744]">Annual Plan</span>
                            <span className="text-sm font-medium text-[#777D8B]">$59.99/year</span>
                        </div>
                    </span>
                    <a href="#" className="text-[#4638C3] text-sm underline font-bold">
                        Change
                    </a>
                </div>
                <div className="bg-[#382AE1] mx-6 px-6 py-3 mb-4 rounded-xl flex items-center justify-center shadow-xl shadow-[#D8D0FF] cursor-pointer">
                    <p className="text-sm font-bold text-white duration-300 ease-in-out hover:scale-110">
                        Proceed to Payment
                    </p>
                </div>
                <p className="pb-10 pt-2 font-bold text-center text-[#6C708B] opacity-80 text-sm cursor-pointer hover:scale-110 ease-in-out duration-300">
                    Cancel Order
                </p>
            </div>
            <a
                href="https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj"
                target="_blank"
                rel="noreferrer"
                className="relative text-gray-600 underline top-6 opacity-60 hover:text-blue-600"
            >
                Source
            </a>
        </div>
    )
}

export default MusicCard

