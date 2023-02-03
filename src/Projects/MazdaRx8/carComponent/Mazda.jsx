

import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { MathUtils } from 'three'

function Model(props) {
  const { nodes, materials, scene } = useGLTF('/models/MazdaRx8/mazda.gltf')
  const { nodes: nodes2, materials: materials2 } = useGLTF('/models/Mazda3/mazda3.gltf')

  const carMeshRef = useRef()

  const INITIAL_CAR_POSITION = -20
  let PERFECT_CAR_POSITION = 0

  useEffect(() => {
    let mate = materials.RRBaseMatWM
    mate.color = {
      r: 0.20,
      b: 0.01,
      g: 0.01,
    }
    mate.transparent = true
    mate.opacity = 0.7

    scene.traverse(obj => {
      obj.castShadow = true;
      obj.receiveShadow = true;

      if (obj.material?.envMapIntensity) {
        obj.material.envMapIntensity = 5
      }
    })
  }, [materials])

  const frontWheel = useRef()
  const backWheel = useRef()

  let wheelSpeed = 2.5

  useFrame((state, delta) => {
    let t = state.clock.getElapsedTime();
    if (carMeshRef.current.position.x < PERFECT_CAR_POSITION) {
      carMeshRef.current.position.x = MathUtils.lerp(carMeshRef.current.position.x, 0, 0.025)
    }

    frontWheel.current.rotation.x = t * wheelSpeed
    backWheel.current.rotation.x = t * wheelSpeed


  })

  return (
    <group {...props} dispose={null} position={[INITIAL_CAR_POSITION, 0, 0]} ref={carMeshRef}>
      <group rotation={[-Math.PI / 3, 0, 1.55]} position={[0, 0.50, 0.1]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials['1RX7VS_Calipers']} />
        {/* <mesh geometry={nodes.Object_3.geometry} material={materials['1RX7VS_Rims']} /> */}
        <mesh geometry={nodes.Object_4.geometry} material={materials.RRBaseMatGlass} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.RRBaseMatWM} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.RRRX7VS_BrakeLight} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.RRRX7VS__Blinker_L} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.RRRX7VS__Blinker_R} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.RRRX7VS__BrakeLight2} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.RRRX7VS__ReverseLights} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.RRBaseMatGeneral} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.RRRX7VS_Body} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.RRRX7VS_Body2} />
        <mesh geometry={nodes.Object_14.geometry} material={materials.RRRX7VS_HeadLights} />
        <group scale={0.01} rotation={[1.53, 3.1, 3.2]} position={[0, 0, 0]}>
          <group position={[-95, -30, 120]} rotation={[-Math.PI / 2, 0.05, -0.05]} scale={0.96}>
            <mesh geometry={nodes2.wheel001_Material018_0.geometry} material={materials2['Material.018']} />
            <mesh geometry={nodes2.wheel001_Material016_0.geometry} material={materials2['Material.016']} ref={backWheel} />
            <mesh geometry={nodes2.wheel001_Material015_0.geometry} material={materials2['Material.015']} />
          </group>
          <group position={[-80, -20, -125]} rotation={[-Math.PI / 2, 0.05, -0.05]} scale={0.96}>
            <mesh geometry={nodes2.wheel001_Material018_0.geometry} material={materials2['Material.018']} />
            <mesh geometry={nodes2.wheel001_Material016_0.geometry} material={materials2['Material.016']} ref={frontWheel} />
            <mesh geometry={nodes2.wheel001_Material015_0.geometry} material={materials2['Material.015']} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/MazdaRx8/mazda.gltf')
useGLTF.preload('/models/Mazda3/mazda3.gltf')

export default Model