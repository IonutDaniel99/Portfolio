import { PerspectiveCamera, Sky } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import MazdaY from './carComponent/Mazda8y'
import Ground from './World/Ground'
import { InfiniteRoad } from './World/InfiniteRoad'

function CanvasComponent({ carWheelSpeed, roadSpeed }) {
  return (
    <Canvas shadows>
      <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} />
      <Ground roadSpeed={roadSpeed} />
      <PerspectiveCamera makeDefault position={[6.5, 3, 8]} rotation={[-0.2772068, 0.64794023, 0.17006946]} />
      <Light />
      <MazdaY carWheelSpeed={carWheelSpeed} />
      <InfiniteRoad roadSpeed={roadSpeed} />
      {/* <OrbitControls /> */}
    </Canvas>
  )
}

function Light() {
  return <directionalLight position={[4.3, 5.0, 2.4]} intensity={2.5} />
}

export default CanvasComponent
