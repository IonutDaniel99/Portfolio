import gsap from 'gsap'
import React from 'react'
import Bg2ColorsFollow from './Components/Bg2ColorsFollow'
import AboutMe from './Screens/AboutMe'
import Experience from './Screens/Experience'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Projects from './Screens/Projects'
import disableScroll from 'disable-scroll'
import LoadingBarScroll from './Components/LoadingBarScroll'
import SmoothScroll from './Components/SmoothScroll'
import Footer from './Screens/Footer'

export default HomeApp

gsap.registerPlugin(ScrollTrigger)

function HomeApp() {
  disableScroll.on()
  const isAboutMeDone = () => {
    disableScroll.off()
  }

  return (
    <>
      <div className='absolute top-10 left-10 z-[50000] text-white h-10 w-fit font-Mitr text-2xl bg-gray-700 px-4 pt-1 rounded-xl text-center animate-pulse'>
        Work in progress!
      </div>
      <div className='fixed w-screen h-screen bg-darkNotDark'></div>
      <LoadingBarScroll />
      <Bg2ColorsFollow />
      <SmoothScroll>
        <AboutMe isAboutMeDone={() => isAboutMeDone()} />
        <Experience />
        <Projects />
        <Footer />
      </SmoothScroll>
      {/* <div className="lastContainer">Last Container</div> */}
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
