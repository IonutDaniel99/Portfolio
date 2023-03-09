import gsap from 'gsap'
import React, { useState } from 'react'
import Bg2ColorsFollow from './Components/Bg2ColorsFollow'
import AboutMe from './Screens/AboutMe'
import Experience from './Screens/Experience'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Projects from './Screens/Projects'
import disableScroll from 'disable-scroll'
import LoadingBarScroll from './Components/LoadingBarScroll'
import SmoothScroll from './Components/SmoothScroll'
import Footer from './Screens/Footer'
import PageTitleChanger from './Components/PageTitleChanger'

export default HomeApp

gsap.registerPlugin(ScrollTrigger)
// disableScroll.on()

function HomeApp() {

  const isAboutMeDone = () => disableScroll.off()

  return (
    <>
      <div className='fixed bottom-10 tablet:top-10 left-10 z-[50000] text-white h-10 w-fit font-Mitr text-2xl bg-gray-700 px-4 pt-1 rounded-xl text-center animate-pulse'>
        Work in progress!
      </div>
      <div className='fixed w-screen h-screen bg-darkNotDark'></div>
      <PageTitleChanger />
      <LoadingBarScroll />
      <Bg2ColorsFollow />
      <SmoothScroll>
        <AboutMe isAboutMeDone={() => isAboutMeDone()} />
        <Experience />
        <Projects />
        <Footer />
      </SmoothScroll>
    </>
  )
}
