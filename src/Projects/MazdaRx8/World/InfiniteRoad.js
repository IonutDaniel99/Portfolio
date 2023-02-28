import { useFrame, useLoader } from '@react-three/fiber'
import { useEffect } from 'react'
import { RepeatWrapping, TextureLoader } from 'three'

export function InfiniteRoad({ roadSpeed = 0.3 }) {
  const roadPng = useLoader(TextureLoader, '/models/road.png')

  useEffect(() => {
    roadPng.wrapS = RepeatWrapping
    roadPng.wrapT = RepeatWrapping
    roadPng.anisotropy = 4
    roadPng.offset.set(0, 0)
  }, [roadPng])

  useFrame((state, delta) => {
    let t = -state.clock.getElapsedTime() * roadSpeed
    roadPng.offset.set(-t, 0)
  })

  const road = [-10, 0, 10, 20, 30, 40, 50, 60, 70, 80].map((cords, i) => (
    <group position={[-cords, 0, 0]} key={i} receiveShadow>
      <mesh rotation={[-Math.PI / 3, 0, 0]} position={[0, 0.5, 0]} receiveShadow>
        <planeGeometry args={[10, 6]} />
        <meshStandardMaterial map={roadPng} alphaMap={roadPng} />
      </mesh>
    </group>
  ))

  return <>{road}</>
}
