import { useFrame, useLoader } from '@react-three/fiber'
import React, { useEffect } from 'react'
import { RepeatWrapping, TextureLoader } from 'three'

function Ground({ roadSpeed }) {
    const grassPng = useLoader(TextureLoader, '/models/water.jpg')
    const aograssPng = useLoader(TextureLoader, '/models/aowater.jpg')

    useEffect(() => {
        grassPng.wrapS = RepeatWrapping
        grassPng.wrapT = RepeatWrapping
        grassPng.offset.set(0, 0)
        grassPng.repeat.set(10, 10)
    }, [grassPng])

    useFrame((state, delta) => {
        let t = (-state.clock.getElapsedTime() * roadSpeed) / 5;
        grassPng.offset.set(-t, 0)
    })

    return (
        <mesh rotation={[-Math.PI / 3, 0, 0]}>
            <planeGeometry attach="geometry" args={[300, 200]} />
            <meshStandardMaterial
                attach="material"
                map={grassPng}
                alphaMap={grassPng}
                metalnessMap={aograssPng}
                metalness={3.5}
            />
        </mesh>
    )
}

export default Ground