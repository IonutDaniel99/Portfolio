import Head from 'next/head'
import React from 'react'

function IndonesiaApp() {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Bebas+Neue&family=Mitr:wght@200;300;400;500;600;700&family=Source+Sans+3:wght@200;300;400;500;600;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <div className="flex justify-center w-screen h-screen text-white z-50">
                <div
                    className="absolute w-full h-full bg-center bg-cover blur-lg brightness-75 backdrop-brightness-0 saturate-50"
                    style={{ backgroundImage: `url("/internal_project/Indonesia/bg-mountain.jpg")` }}
                />
                <div className="w-9/12 px-32 py-10 z-10">
                    <nav className="flex flex-row items-center w-full h-16">
                        <img
                            src="/internal_project/Indonesia/logo.png"
                            alt="Wonderful Indonesia Logo"
                            className="h-16 mr-20 invert brightness-0"
                        />
                        <div className="flex items-center w-full h-20 gap-28">
                            <p className="text-lg duration-300 ease-in-out cursor-pointer hover:text-blue-200">Home</p>
                            <p className="text-lg duration-300 ease-in-out cursor-pointer hover:text-blue-200">News</p>
                            <p className="text-lg duration-300 ease-in-out cursor-pointer hover:text-blue-200">About</p>
                            <p className="text-lg duration-300 ease-in-out cursor-pointer hover:text-blue-200">
                                Explore
                            </p>
                        </div>
                        <span className="flex items-center float-right h-20 pr-10 w-fit">
                            <img
                                src="/internal_project/Indonesia/search.png"
                                alt="Search Icon"
                                className="w-8 h-6 duration-300 ease-in-out cursor-pointer invert hover:invert-0"
                            />
                        </span>
                    </nav>
                    <div className="mt-8 mb-8 h-[450px] rounded-2xl relative group duration-300 ease-in-out hover:scale-110">
                        <div
                            className="absolute w-full h-full bg-center bg-cover -z-40 saturate-150 brightness-75 rounded-2xl"
                            style={{ backgroundImage: `url("/internal_project/Indonesia/bg-mountain.jpg")` }}
                        ></div>
                        <div className="flex flex-col items-center justify-center w-full h-full">
                            <span style={{ fontFamily: "'Alex Brush', cursive" }} className="relative text-8xl top-4">
                                Wonderful
                            </span>
                            <span style={{ fontFamily: "'Alex Brush', cursive" }} className="text-9xl">
                                INDONESIA
                            </span>
                            <span
                                style={{ fontFamily: "'Source Sans 3', cursive" }}
                                className="relative w-3/6 text-lg text-center text-gray-300 top-4"
                            >
                                Indonesia is one of the best country in the world <br /> with a thousand of beautiful
                                islands
                            </span>
                        </div>
                    </div>
                    <div>
                        <p className="pb-2 text-3xl" style={{ fontFamily: "'Mitr', sans-serif" }}>
                            Destinations
                        </p>
                        <div className="flex flex-row justify-between gap-4">
                            <div
                                className="h-56 w-[23rem] bg-cover bg-center rounded-2xl saturate-200 brightness-125 duration-300 ease-in-out hover:scale-105 cursor-pointer"
                                style={{ backgroundImage: `url("/internal_project/Indonesia/wisnuKenkana.jpg")` }}
                            >
                                <div className="flex flex-col items-start justify-end w-full h-full px-8 py-4">
                                    <span style={{ fontFamily: "'Alex Brush', cursive" }} className="text-4xl">
                                        Garuda
                                    </span>
                                    <span style={{ fontFamily: "'Bebas Neue', sans-serif" }} className="text-4xl">
                                        WISNU KENCANA
                                    </span>
                                </div>
                            </div>
                            <div
                                className="h-56 w-[23rem] bg-cover bg-center rounded-2xl duration-300 ease-in-out hover:scale-105 cursor-pointer"
                                style={{ backgroundImage: `url("/internal_project/Indonesia/penida.jpg")` }}
                            >
                                <div className="flex flex-col items-start justify-end w-full h-full px-8 py-4">
                                    <span style={{ fontFamily: "'Alex Brush', cursive" }} className="text-4xl">
                                        Nusa
                                    </span>
                                    <span style={{ fontFamily: "'Bebas Neue', sans-serif" }} className="text-4xl">
                                        PENIDA
                                    </span>
                                </div>
                            </div>
                            <div
                                className="h-56 w-[23rem] bg-cover bg-center rounded-2xl duration-300 ease-in-out hover:scale-105 cursor-pointer"
                                style={{ backgroundImage: `url("/internal_project/Indonesia/bajo.jpg")` }}
                            >
                                <div className="flex flex-col items-start justify-end w-full h-full px-8 py-4">
                                    <span style={{ fontFamily: "'Alex Brush', cursive" }} className="text-4xl">
                                        Labuan
                                    </span>
                                    <span style={{ fontFamily: "'Bebas Neue', sans-serif" }} className="text-4xl">
                                        BAJO
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute text-lg bottom-2 right-4">
                    <p>
                        Design from
                        <a
                            href="https://www.instagram.com/goldwinhalim"
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-300 underline"
                        >
                            @goldwinhalim
                        </a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default IndonesiaApp
