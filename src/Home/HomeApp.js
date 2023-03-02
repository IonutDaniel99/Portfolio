import gsap, { Power2 } from 'gsap'
import React, { useEffect, useRef, useState } from 'react'
import Bg2ColorsFollow from './Components/Bg2ColorsFollow'
import AboutMe from './Screens/AboutMe'
import Experience from './Screens/Experience'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Projects from './Screens/Projects'
import disableScroll from 'disable-scroll'
import LoadingBarScroll from './Components/LoadingBarScroll'
import ScrollSmoother from 'gsap-trial/ScrollSmoother'
import { useLayoutEffect } from 'react'
import SmoothScroll from './Components/SmoothScroll'

export default HomeApp

gsap.registerPlugin(ScrollTrigger)

function HomeApp() {
    disableScroll.on()
    const isAboutMeDone = () => {
        disableScroll.off()
    }

    return (
        <>
            <div >
                <div className='fixed w-screen h-screen bg-darkNotDark'></div>
                <LoadingBarScroll />
                <Bg2ColorsFollow />
                <SmoothScroll>
                    <AboutMe isAboutMeDone={() => isAboutMeDone()} />
                    <Experience />
                    <Projects />
                </SmoothScroll>
                {/* <div className="lastContainer">Last Container</div> */}
            </div>
        </>
    )
}

// eslint-disable-next-line no-lone-blocks
// /* <nav className="z-50 flex gap-20">
//             <NavLink to={"/"}>Home</NavLink>
//             <NavLink to={"/Projects/FromDesignToCode/Indonesia"}>
//                 Indonesia
//             </NavLink>
//             <NavLink to={"/Projects/FromDesignToCode/Cards"}>Cards</NavLink>
//             <NavLink to={"/Projects/MazdaRx8"}>MazdaRx8</NavLink>
//         </nav> */
