import React, { useLayoutEffect, useRef } from 'react'

function Bg2ColorsFollow() {
  const blobRef = useRef(null)

  useLayoutEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event
      blobRef.current.style.left = `${clientX}px`
      blobRef.current.style.top = `${clientY}px`
      blobRef.current.animate(
        {
          left: `${clientX - 150}px`,
          top: `${clientY - 150}px`,
        },
        { duration: 3000, fill: 'forwards' }
      )
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [blobRef])

  return (
    <span>
      <div
        ref={blobRef}
        className='h-[300px] aspect-square fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full
                           bg-gradient-to-r from-red-600  to-blue-600 animate-spin-slow overflow-hidden z-[1]'
      ></div>
      <div className='h-screen w-screen fixed z-[2] blur-blob'></div>
    </span>
  )
}

export default Bg2ColorsFollow
