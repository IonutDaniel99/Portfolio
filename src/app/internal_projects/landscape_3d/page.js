'use client'
import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { gsap } from 'gsap'
import Link from 'next/link'

const landscapeObject = {
    1: {
        photoUrl: '/3DLandscape/forest.jpg',
        title: 'Supremeley AI.'
    },
    2: {
        photoUrl: '/3DLandscape/sky_earth.jpg',
        title: 'Earth from another perspective.'
    },
    3: {
        photoUrl: '/3DLandscape/mansion.jpg',
        title: 'DUTCH MANSION.'
    },
    4: {
        photoUrl: '/3DLandscape/nebula.jpg',
        title: 'Space nebula.'
    },
    5: {
        photoUrl: '/3DLandscape/lowpolyanimals.jpg',
        title: 'Low Poly Minecraft Animals'
    },
    6: {
        photoUrl: '/3DLandscape/futuristicbuilding.jpg',
        title: 'River between Futuristic Building'
    },
    7: {
        photoUrl: '/3DLandscape/aboveeverest.jpg',
        title: 'Everest above the clouds!'
    },
    8: {
        photoUrl: '/3DLandscape/waterfall.jpg',
        title: 'Waterfall and pond between mountains!'
    },
    9: {
        photoUrl: '/3DLandscape/mountainpeak.jpg',
        title: 'Mansion on the mountain.'
    },
    10: {
        photoUrl: '/3DLandscape/insidecar.jpg',
        title: 'Inside a futuristic car!'
    }
}

const Landscape3D = () => {
    const containerRef = useRef(null)
    const rendererRef = useRef(null)
    const sceneRef = useRef(null)
    const sphereRef = useRef(null)
    const textureLoader = useRef(new THREE.TextureLoader())
    const isInitialized = useRef(false) // Tracks initialization
    const [currentIndex, setCurrentIndex] = useState(
        Math.floor(Math.random() * Object.keys(landscapeObject).length) + 1
    )

    const updateTexture = (index) => {
        const newTexture = textureLoader.current.load(landscapeObject[index].photoUrl)
        sphereRef.current.material.map = newTexture
        sphereRef.current.material.needsUpdate = true
    }

    useEffect(() => {
        if (isInitialized.current) return

        // Initialize the renderer
        const container = containerRef.current
        const renderer = new THREE.WebGLRenderer()
        renderer.setSize(window.innerWidth * 0.9, window.innerHeight * 0.85)
        rendererRef.current = renderer
        container.appendChild(renderer.domElement)

        // Create the scene and camera
        const scene = new THREE.Scene()
        sceneRef.current = scene

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        camera.position.set(0, 0, 0.1)

        const controls = new OrbitControls(camera, renderer.domElement)
        controls.enableZoom = false
        controls.enablePan = false
        controls.rotateSpeed = -0.3

        // Create a spherical geometry and apply the texture
        const geometry = new THREE.SphereGeometry(500, 60, 40)
        geometry.scale(-1, 1, 1)

        const initialTexture = textureLoader.current.load(landscapeObject[currentIndex].photoUrl)
        const material = new THREE.MeshBasicMaterial({ map: initialTexture })
        const sphere = new THREE.Mesh(geometry, material)

        scene.add(sphere)
        sphereRef.current = sphere

        // Handle window resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()
            renderer.setSize(window.innerWidth * 0.9, window.innerHeight * 0.85)
        }
        window.addEventListener('resize', handleResize)

        // Animation loop
        const animate = () => {
            sphere.rotation.y += 0.001
            controls.update()
            renderer.render(scene, camera)
            requestAnimationFrame(animate)
        }
        animate()

        isInitialized.current = true

        return () => {
            window.removeEventListener('resize', handleResize)
            renderer.dispose()
        }
    }, [])

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.set('.mouseDiv', { opacity: 0 })

            const timeline = gsap.timeline({ repeat: 0 })
            timeline
                .to('.mouseDiv', { opacity: 1, duration: 1, delay: 1 })
                .to('.mouseDiv', { opacity: 0, duration: 1, delay: 2 })

            gsap.to('.mouseDiv', {
                x: -150,
                duration: 2,
                ease: 'none',
                repeat: -1,
                yoyo: true
            })
        })
        return () => ctx.revert()
    }, [])

    useEffect(() => {
        // Update texture when currentIndex changes
        if (sphereRef.current) {
            updateTexture(currentIndex)
        }
    }, [currentIndex])

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === Object.keys(landscapeObject).length ? 1 : prev + 1))
    }

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 1 ? Object.keys(landscapeObject).length : prev - 1))
    }

    return (
        <div className="flex items-center justify-center w-screen h-screen">
            <div className="absolute flex items-center justify-center w-full h-full pointer-events-none">
                <img
                    src="/3DLandscape/mouse-left-button.png"
                    alt="mouse left icon"
                    className="relative z-50 w-20 h-20 invert mouseDiv left-[75px]"
                />
            </div>
            <div ref={containerRef} className="relative z-10 overflow-hidden rounded-3xl">
                <Link href={'/'} className="absolute top-6 left-6">
                    <p className="flex items-center justify-center w-40 h-12 font-bold text-gray-300 duration-500 ease-in-out bg-black bg-opacity-60 border-2 border-blue-400 hover:text-orange-600 rounded-xl hover:w-56 hover:border-orange-600">
                        Back To Portfolio
                    </p>
                </Link>
                <div className="absolute w-4/6 text-white bottom-6 left-6">
                    <p className="text-lg text-white uppercase mobile:text-3xl laptop:text-5xl font-BebasNeue bg-black bg-opacity-60 px-4 rounded-full py-2 w-fit">
                        {landscapeObject[currentIndex].title}
                    </p>
                </div>
                <div className="absolute flex flex-row gap-2 bottom-4 right-4">
                    <button
                        className="px-4 py-2 font-medium text-white duration-300 ease-linear bg-black rounded-full bg-opacity-60 hover:cursor-pointer hover:bg-white hover:text-black hover:bg-opacity-100"
                        onClick={handlePrev}
                    >
                        Previous
                    </button>
                    <button
                        className="px-4 py-2 font-medium text-white duration-300 ease-linear bg-black rounded-full bg-opacity-60 hover:cursor-pointer hover:bg-white hover:text-black hover:bg-opacity-100"
                        onClick={handleNext}
                    >
                        Next
                    </button>
                </div>
                <div className="absolute top-4 right-2">
                    <div className="px-4 py-2 text-right text-white duration-500 ease-in-out opacity-50 hover:bg-black hover:bg-opacity-70 hover:rounded hover:opacity-80">
                        Credits to &nbsp;
                        <a
                            className="underline cursor-pointer underline-offset-2"
                            href="https://skybox.blockadelabs.com/"
                        >
                            BlockadeLabs.com
                        </a>
                    </div>
                    <div className="px-4 py-2 text-right text-white duration-500 ease-in-out opacity-50 hover:bg-black hover:bg-opacity-70 hover:rounded hover:opacity-80">
                        Inspired by &nbsp;
                        <a
                            className="underline cursor-pointer underline-offset-2"
                            href="https://www.youtube.com/watch?v=v2eLLBUxQiQ"
                        >
                            Design Course
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landscape3D
