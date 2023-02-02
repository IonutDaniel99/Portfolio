import { OrbitControls, OrthographicCamera, PerspectiveCamera } from '@react-three/drei'
import { Canvas, useThree } from '@react-three/fiber'
import React, { useEffect, useRef } from 'react'
import Mazda from './carComponent/Mazda'
import { InfiniteRoad } from './InfiniteRoad'

function MazdaRx8Main() {

    return (
        <div className='relative w-screen h-screen'>
            <div className='absolute w-screen h-screen'>
                <Canvas shadows>
                    <color args={[0.208, 0.183, 0.172]} attach='background' />
                    <PerspectiveCamera
                        makeDefault
                        position={[6.5, 3, 8]}
                        rotation={[-0.2772068, 0.64794023, 0.17006946]} />
                    <group>
                        {/* <pointLight position={[10, 10, 0]} /> */}
                        <ambientLight
                            color={'#aaa'}
                            intensity={2}
                        />
                        <Mazda />
                        <InfiniteRoad />
                    </group>
                    {/* <OrbitControls /> */}
                </Canvas>
            </div>
        </div>
    )
}

export default MazdaRx8Main