import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { MathUtils } from 'three'
import { useFrame } from '@react-three/fiber'

function Model({ carWheelSpeed = 2.5 }) {
  const { nodes, materials, scene } = useGLTF('/models/MazdaRx8Y/mazda8y.gltf')
  const { nodes: nodes2, materials: materials2 } = useGLTF('/models/Mazda3/mazda3.gltf')

  const carMeshRef = useRef()

  const RANDOM_HOOD = Math.random()

  const INITIAL_CAR_POSITION = -20
  const PERFECT_CAR_POSITION = 0

  useEffect(() => {
    let carMaterial = materials.material
    let carLights = materials.material_3
    let rimsMaterial = materials2['Material.016']
    let carWindows = materials.material_16
    carWindows.color = {
      r: 0.50,
      g: 0.70,
      b: 0.91,
    }
    carMaterial.color = {
      r: 0.20,
      b: 0.01,
      g: 0.01,
    }
    rimsMaterial.color = {
      r: 0.35,
      b: 0.35,
      g: 0.35,
    }
    carLights.color = {
      r: 0.90,
      g: 0.90,
      b: 0.90,
    }
    carLights.transparent = true
    carLights.opacity = 0.50

    scene.traverse(obj => {
      obj.castShadow = true;
      obj.receiveShadow = true;
      if (obj.material?.envMapIntensity)
        obj.material.envMapIntensity = 5
    })
  }, [materials, materials2, scene])

  const frontWheel = useRef()
  const backWheel = useRef()


  useFrame((state, delta) => {
    let t = state.clock.getElapsedTime();
    if (carMeshRef.current.position.x < PERFECT_CAR_POSITION) {
      carMeshRef.current.position.x = MathUtils.lerp(carMeshRef.current.position.x, 0, 0.025)
    }

    frontWheel.current.rotation.x = t * carWheelSpeed
    backWheel.current.rotation.x = t * carWheelSpeed
  })

  return (
    <group dispose={null} position={[INITIAL_CAR_POSITION, 0, 0]} ref={carMeshRef} receiveShadow castShadow>
      <group rotation={[-Math.PI / 3.2, 1.56, 1.55]} position={[0, 0.30, 0.5]} scale={1.45}>
        <group position={[0, 0.23, -1.25]}>
          <mesh geometry={nodes.Object_10.geometry} material={materials.material_1} />
          <mesh geometry={nodes.Object_11.geometry} material={materials.material_2} />
          <mesh geometry={nodes.Object_12.geometry} material={materials.material_3} />
          <mesh geometry={nodes.Object_13.geometry} material={materials.material_4} />
          <mesh geometry={nodes.Object_14.geometry} material={materials.material_5} />
          <mesh geometry={nodes.Object_15.geometry} material={materials.material_6} />
        </group>
        <group position={[0, 0.42, 1.79]}>
          <mesh geometry={nodes.Object_21.geometry} material={materials.material_1} />
          <mesh geometry={nodes.Object_22.geometry} material={materials.material_8} />
          <mesh geometry={nodes.Object_23.geometry} material={materials.material_3} />
          <mesh geometry={nodes.Object_24.geometry} material={materials.material_9} />
        </group>
        <group position={[0, 0.46, -1.31]} scale={[-1, 1, 1]}>
          <mesh geometry={nodes.Object_28.geometry} material={materials.material_1} />
          <mesh geometry={nodes.Object_29.geometry} material={materials.material_5} />
          <mesh geometry={nodes.Object_30.geometry} material={materials.material_3} />
          <mesh geometry={nodes.Object_31.geometry} material={materials.material_2} />
          <mesh geometry={nodes.Object_32.geometry} material={materials.material_8} />
          <mesh geometry={nodes.Object_33.geometry} material={materials.material_9} />
          <mesh geometry={nodes.Object_34.geometry} material={materials.material_11} />
        </group>
        <group position={[0.39, 0.27, 1.18]} scale={[1.03, 0.93, 0.93]}>
          <mesh geometry={nodes.Object_36.geometry} material={materials.material_5} />
          <mesh geometry={nodes.Object_37.geometry} material={materials.material_12} />
          <mesh geometry={nodes.Object_38.geometry} material={materials.material_13} />
        </group>
        <group position={[0, 0.42, 1.79]}>
          <mesh geometry={nodes.Object_44.geometry} material={materials.material_8} />
          <mesh geometry={nodes.Object_45.geometry} material={materials.material_11} />
        </group>
        <group position={[0.39, 0.29, -0.75]} scale={[1.13, 1.02, 1.02]}>
          <mesh geometry={nodes.Object_51.geometry} material={materials.material_5} />
          <mesh geometry={nodes.Object_52.geometry} material={materials.material_12} />
          <mesh geometry={nodes.Object_53.geometry} material={materials.material_13} />
        </group>
        <group scale={0.008} rotation={[3.15, 3.05, 3.2]} position={[0.08, 0.5, 0.15]}>
          <group position={[-95, -25, 122.5]} rotation={[-Math.PI / 2, 0.05, -0.05]} scale={0.96}>
            <mesh geometry={nodes2.wheel001_Material018_0.geometry} material={materials2['Material.018']} />
            <mesh geometry={nodes2.wheel001_Material016_0.geometry} material={materials2['Material.016']} ref={backWheel} />
            <mesh geometry={nodes2.wheel001_Material015_0.geometry} material={materials2['Material.015']} />
          </group>
          <group position={[-75, -25, -117.5]} rotation={[-Math.PI / 2, 0.05, -0.05]} scale={0.96}>
            <mesh geometry={nodes2.wheel001_Material018_0.geometry} material={materials2['Material.018']} />
            <mesh geometry={nodes2.wheel001_Material016_0.geometry} material={materials2['Material.016']} ref={frontWheel} />
            <mesh geometry={nodes2.wheel001_Material015_0.geometry} material={materials2['Material.015']} />
          </group>
        </group>
        <group position={[0, 0.59, -0.92]} rotation={[0, 0, -Math.PI / 2]}>
          <mesh geometry={nodes.Object_77.geometry} material={materials.material} />
          <mesh geometry={nodes.Object_78.geometry} material={materials.material_15} />
          <mesh geometry={nodes.Object_79.geometry} material={materials.material_14} />
        </group>
        <group position={[0, 0.79, -1.1]}>
          <mesh geometry={nodes.Object_87.geometry} material={materials.material_17} />
          <mesh geometry={nodes.Object_88.geometry} material={materials.material_6} />
        </group>
        <group position={[0, 0.59, -0.92]} rotation={[0, 0, -Math.PI / 2]}>
          <mesh geometry={nodes.Object_92.geometry} material={materials.material_1} />
          <mesh geometry={nodes.Object_93.geometry} material={materials.material_5} />
          <mesh geometry={nodes.Object_94.geometry} material={materials.material_11} />
          <mesh geometry={nodes.Object_95.geometry} material={materials.material_9} />
          <mesh geometry={nodes.Object_96.geometry} material={materials.material_18} />
          <mesh geometry={nodes.Object_97.geometry} material={materials.material_8} />
        </group>
        <mesh geometry={nodes.Object_4.geometry} material={materials.material} position={[0, 0.42, 1.79]} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.material} position={[0, 0.47, -1.31]} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.material_1} position={[0, 0.12, 1.69]} />
        <mesh geometry={nodes.Object_17.geometry} material={materials.material_3} position={[0, 0.47, -1.31]} scale={[-1, 1, 1]} />
        <mesh geometry={nodes.Object_19.geometry} material={materials.material_7} position={[0, 0.42, 1.79]} />
        <mesh geometry={nodes.Object_26.geometry} material={materials.material_10} position={[0, 0.23, -1.25]} />
        <mesh geometry={nodes.Object_40.geometry} material={materials.material_7} position={[0, 0.42, 1.79]} />
        <mesh geometry={nodes.Object_42.geometry} material={materials.material_7} position={[0, 0.23, -1.25]} />
        <mesh geometry={nodes.Object_47.geometry} material={materials.material_3} position={[0, 0.42, 1.79]} />
        <mesh geometry={nodes.Object_49.geometry} material={materials.material_7} position={[0, 0.12, 1.69]} />
        <mesh geometry={nodes.Object_63.geometry} material={materials.material} position={[0, 0.59, -0.92]} rotation={[0, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.Object_65.geometry} material={materials.material} position={[0, 0.79, -1.09]} />
        {RANDOM_HOOD > 0.5 ?
          <mesh geometry={nodes.Object_67.geometry} material={materials.material} position={[0, 0.68, 1.24]} />
          :
          <mesh d="" geometry={nodes.Object_67.geometry} material={materials.material_1} position={[0, 0.68, 1.24]} />
        }
        <mesh geometry={nodes.Object_69.geometry} material={materials.material} position={[0, 0.59, -0.92]} rotation={[0, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.Object_71.geometry} material={materials.material_14} position={[0, 0.79, -1.09]} />
        <mesh geometry={nodes.Object_73.geometry} material={materials.material_14} position={[0, 0.68, 1.24]} scale={[1, 1.02, 1]} />
        <mesh geometry={nodes.Object_75.geometry} material={materials.material_14} position={[0, 0.58, -0.92]} rotation={[0, 0, -Math.PI / 2]} />
        <mesh d="lights" geometry={nodes.Object_81.geometry} material={materials.material_3} position={[0, 0.59, -0.92]} rotation={[0, 0, -Math.PI / 2]} />
        <mesh d="windows" geometry={nodes.Object_83.geometry} material={materials.material_16} position={[0, 0.79, -1.09]} />
        <mesh geometry={nodes.Object_85.geometry} material={materials.material_7} position={[0, 0.59, -0.92]} rotation={[0, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.Object_90.geometry} material={materials.material_3} position={[0, 0.79, -1.1]} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/MazdaRx8Y/mazda8y.gltf')

export default Model