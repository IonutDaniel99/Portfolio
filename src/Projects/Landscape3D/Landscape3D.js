import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { gsap } from 'gsap'

const landscapeObject = {
  1: {
    photoUrl: '/Images/3DLandscape/forest.jpg',
    title: 'Supremeley AI.',
  },
  2: {
    photoUrl: '/Images/3DLandscape/sky_earth.jpg',
    title: 'Earth from another perspective.',
  },
  3: {
    photoUrl: '/Images/3DLandscape/mansion.jpg',
    title: 'DUTCH MANSION.',
  },
  4: {
    photoUrl: '/Images/3DLandscape/nebula.jpg',
    title: 'Space nebula.',
  },
  5: {
    photoUrl: '/Images/3DLandscape/lowpolyanimals.jpg',
    title: 'Low Poly Minecraft Animals',
  },
  6: {
    photoUrl: '/Images/3DLandscape/futuristicbuilding.jpg',
    title: 'River between Futuristic Building',
  },
  7: {
    photoUrl: '/Images/3DLandscape/aboveeverest.jpg',
    title: 'Everest above the clouds!',
  },
  8: {
    photoUrl: '/Images/3DLandscape/waterfall.jpg',
    title: 'Waterfall and pond between mountains!',
  },
  9: {
    photoUrl: '/Images/3DLandscape/mountainpeak.jpg',
    title: 'Mansion on the mountain.',
  },
  10: {
    photoUrl: '/Images/3DLandscape/insidecar.jpg',
    title: 'Inside a futuristic car!',
  },
}

function generateRandom(min = 0, max = 100) {
  let difference = max - min
  let rand = Math.random()
  rand = Math.floor(rand * difference)
  rand = rand + min
  return rand
}

const Landscape3D = () => {
  const containerRef = useRef(null)
  const rendererRef = useRef(null)
  const randNumber = generateRandom(1, Object.keys(landscapeObject).length + 1)
  const renderer = new THREE.WebGLRenderer()

  useEffect(() => {


    let ctx = gsap.context(() => {
      gsap.set(".mouseDiv", { opacity: 0 });

      const timeline = gsap.timeline({ repeat: 0 });
      timeline.to(".mouseDiv", { opacity: 1, duration: 1, delay: 1 })
        .to(".mouseDiv", { opacity: 0, duration: 1, delay: 2 });

      gsap.to(".mouseDiv", {
        x: -150,
        duration: 2,
        ease: 'none',
        repeat: -1,
        yoyo: true
      });
    })
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    // Get the container element and create the renderer
    const container = containerRef.current
    renderer.setSize(window.innerWidth * 0.9, window.innerHeight * 0.85)
    rendererRef.current = renderer
    container.appendChild(renderer.domElement)

    // Create the scene, camera, and controls
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.set(0, 0, 0.1)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableZoom = false
    controls.enablePan = false
    controls.rotateSpeed = -0.3

    // Load the panoramic image and create a texture
    const loader = new THREE.TextureLoader()
    const texture = loader.load(landscapeObject[randNumber].photoUrl)

    // Create a spherical geometry and map the texture to it
    const geometry = new THREE.SphereGeometry(500, 60, 40)
    geometry.scale(-1, 1, 1)

    const material = new THREE.MeshBasicMaterial({
      map: texture,
    })
    const sphere = new THREE.Mesh(geometry, material)
    scene.add(sphere)

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    // Animation loop
    let lastTime = 0
    const rotationSpeed = 0.00005

    const animate = (time) => {
      const delta = time - lastTime
      lastTime = time
      requestAnimationFrame(animate)

      sphere.rotation.y += rotationSpeed * delta

      controls.update()
      renderer.render(scene, camera)
    }
    animate(0)

    return () => {
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
    }
  }, [])

  return (
    <div className='flex items-center justify-center w-screen h-screen'>
      <div className='absolute flex items-center justify-center w-full h-full pointer-events-none'>
        <img src='/Images/3DLandscape/mouse-left-button.png' alt='mouse left icon' className='relative z-50 w-20 h-20 invert mouseDiv' />
      </div>
      <div ref={containerRef} className='relative z-10 overflow-hidden rounded-3xl'>
        <div className='absolute flex flex-col gap-2 top-4 right-4'>
          <div
            className='px-4 py-2 font-medium text-white duration-300 ease-linear bg-black rounded-full top-4 right-8 bg-opacity-60 hover:cursor-pointer hover:bg-white hover:text-black hover:bg-opacity-100'
            onClick={() => window.location.reload(false)}
          >
            Refresh for Random
          </div>
        </div>

        <div className='absolute w-4/6 text-white bottom-6 left-6'>
          <p className='text-5xl text-white uppercase font-BebasNeue'>{landscapeObject[randNumber].title}</p>
          <h4 className='text-base text-white font-PaulGrotesk'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </h4>
        </div>
        <div className='absolute bottom-4 right-10'>
          <div className='px-4 py-2 text-white duration-500 ease-in-out opacity-50 hover:bg-black hover:bg-opacity-70 hover:rounded hover:opacity-80'>
            Credits to &nbsp;
            <a className='underline cursor-pointer underline-offset-2' href='https://skybox.blockadelabs.com/'>
              BlockadeLabs.com
            </a>
          </div>
          <div className='px-4 py-2 text-white duration-500 ease-in-out opacity-50 hover:bg-black hover:bg-opacity-70 hover:rounded hover:opacity-80'>
            Inspired by &nbsp;
            <a className='underline cursor-pointer underline-offset-2' href='https://www.youtube.com/watch?v=v2eLLBUxQiQ'>
              Design Course
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landscape3D
