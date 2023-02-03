import { Environment, OrbitControls, OrthographicCamera, PerspectiveCamera, useHelper } from '@react-three/drei'
import { Canvas, useThree } from '@react-three/fiber'
import React, { useEffect, useRef } from 'react'
import { DirectionalLightHelper, LightShadow } from 'three'
import Mazda from './carComponent/Mazda'
import MazdaY from './carComponent/Mazda8y'
import { InfiniteRoad } from './InfiniteRoad'

function MazdaRx8Main() {

    const ROAD_SPEED = 0.30
    const CAR_WHEEL_SLEEP = 3.5

    return (
        <div className='relative w-screen h-screen'>
            <div className='absolute w-screen h-screen'>
                <Canvas shadows>
                    <Environment preset="forest" />
                    <color args={[0.111, 0.35, 0.11]} attach='background' />
                    <PerspectiveCamera
                        makeDefault
                        position={[6.5, 3, 8]}
                        rotation={[-0.2772068, 0.64794023, 0.17006946]} />
                    {/* <Light /> */}
                    <MazdaY carWheelSpeed={CAR_WHEEL_SLEEP} />
                    <InfiniteRoad roadSpeed={ROAD_SPEED} />
                    <OrbitControls />
                </Canvas>
            </div>
        </div>
    )
}

function Light() {
    return <directionalLight position={[4.3, 5.0, 2.4]} intensity={0.1} />
}


export default MazdaRx8Main