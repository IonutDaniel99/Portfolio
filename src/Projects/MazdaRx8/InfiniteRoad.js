import { MeshReflectorMaterial } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect } from "react";
import { ImageLoader, LinearEncoding, RepeatWrapping, TextureLoader } from "three";


export function InfiniteRoad() {
    const roadPng = useLoader(TextureLoader, '/models/road.png')

    useEffect(() => {
        roadPng.wrapS = RepeatWrapping
        roadPng.wrapT = RepeatWrapping
        roadPng.anisotropy = 4
        roadPng.offset.set(0, 0)
    }, [roadPng])

    useFrame((state, delta) => {
        let t = -state.clock.getElapsedTime() * 0.30;
        roadPng.offset.set(-t, 0)
    })

    const road = [-10, 0, 10, 20, 30, 40, 50, 60, 70, 80].map((cords, i) =>
    (
        <group position={[-cords, 0, 0]} key={i}>
            <mesh rotation={[-Math.PI / 3, 0, 0]} position={[0, 0.50, 0]}>
                <planeGeometry args={[10, 6]} />
                <meshStandardMaterial map={roadPng} alphaMap={roadPng} />
            </mesh>
        </group>
    )
    )

    return <>
        {road}
    </>
}