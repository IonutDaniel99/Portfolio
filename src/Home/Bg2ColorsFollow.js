import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

function Bg2ColorsFollow() {

    const blobRef = useRef(null)

    useLayoutEffect(() => {
        const handleMouseMove = (event) => {
            const { clientX, clientY } = event
            blobRef.current.style.left = `${clientX}px`
            blobRef.current.style.top = `${clientY}px`
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener(
                'mousemove',
                handleMouseMove
            );
        };
    }, [blobRef])


    return (
        <>

            <div ref={blobRef} className="bg-white h-[400px] aspect-square absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full
            bg-gradient-to-r from-redHalf via-purpleQuarter to-blueHalf"></div>
        </>
    )
}

export default Bg2ColorsFollow