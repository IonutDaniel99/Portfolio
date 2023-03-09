import React, { useEffect, useRef } from 'react'

const SmoothScroll = ({ children }) => {
  // 1.
  const windowSize = {
    width: window.innerWidth,
    height: window.innerHeight,
  }

  //2.
  const scrollingContainerRef = useRef()

  // 3.
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  }

  // 4.
  useEffect(() => {
    setBodyHeight()
  }, [windowSize.height])

  const setBodyHeight = () => {
    document.body.style.height = `${scrollingContainerRef.current.getBoundingClientRect().height}px`
  }

  // 5.
  useEffect(() => {
    requestAnimationFrame(() => smoothScrollingHandler())
  }, [])

  const smoothScrollingHandler = () => {
    data.current = window.scrollY
    data.previous += (data.current - data.previous) * data.ease
    data.rounded = Math.round(data.previous * 100) / 100

    scrollingContainerRef.current.style.transform = `translateY(-${data.previous < 1 ? 0 : data.previous}px)`

    // Recursive call
    requestAnimationFrame(() => smoothScrollingHandler())
  }

  return (
    <div className='fixed top-0 left-0 z-10 w-screen h-screen overflow-hidden parent'>
      <div ref={scrollingContainerRef}>{children}</div>
    </div>
  )
}

export default SmoothScroll
