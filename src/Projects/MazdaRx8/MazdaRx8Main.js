import React, { } from 'react'
import CanvasComponent from './CanvasComponent'

function MazdaRx8Main() {

    const ROAD_SPEED = 0.30
    const CAR_WHEEL_SLEEP = 3.5

    return (
        <div className='relative w-screen h-screen'>
            <div className='absolute w-screen h-screen'>
                <CanvasComponent carWheelSpeed={CAR_WHEEL_SLEEP} roadSpeed={ROAD_SPEED} />
            </div>
        </div>
    )
}




export default MazdaRx8Main