'use client'
import React, { useLayoutEffect, useRef } from 'react'

function FollowBackground() {
    const blobRef = useRef(null)

    useLayoutEffect(() => {
        const handleMouseMove = (event) => {
            if (!blobRef.current) return
            const { clientX, clientY } = event
            blobRef.current.style.left = `${clientX}px`
            blobRef.current.style.top = `${clientY}px`
            blobRef.current.animate(
                {
                    left: `${clientX}px`,
                    top: `${clientY}px`
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
        <>
            <div
                ref={blobRef}
                className="h-[300px] aspect-square fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px]
                           bg-gradient-to-r from-red-600  to-blue-600 animate-spin-slow overflow-hidden z-[1]"
            ></div>
        </>
    )
}

export default FollowBackground
