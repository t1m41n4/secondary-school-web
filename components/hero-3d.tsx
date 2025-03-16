"use client"

import { useEffect, useRef, useState } from "react"
import * as THREE from "three"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 5

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x204434, 1) // School green background
    containerRef.current.appendChild(renderer.domElement)

    // Create a gradient background
    const gradientTexture = createGradientTexture()
    const gradientMaterial = new THREE.MeshBasicMaterial({
      map: gradientTexture,
      transparent: true,
    })
    const gradientPlane = new THREE.Mesh(new THREE.PlaneGeometry(20, 20), gradientMaterial)
    gradientPlane.position.z = -10
    scene.add(gradientPlane)

    // Create educational symbols
    const symbols = []
    const symbolGeometries = [
      new THREE.BoxGeometry(0.5, 0.7, 0.1), // Book
      new THREE.ConeGeometry(0.4, 0.6, 4), // Graduation cap
      new THREE.SphereGeometry(0.3, 16, 16), // Globe
      new THREE.CylinderGeometry(0.05, 0.05, 0.7, 16), // Pencil
    ]

    const symbolMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.7,
    })

    // Create 30-40 random symbols
    for (let i = 0; i < 35; i++) {
      const geometryIndex = Math.floor(Math.random() * symbolGeometries.length)
      const symbol = new THREE.Mesh(symbolGeometries[geometryIndex], symbolMaterial)

      // Random position
      symbol.position.x = Math.random() * 20 - 10
      symbol.position.y = Math.random() * 20 - 10
      symbol.position.z = Math.random() * 5 - 10

      // Random rotation
      symbol.rotation.x = Math.random() * Math.PI * 2
      symbol.rotation.y = Math.random() * Math.PI * 2
      symbol.rotation.z = Math.random() * Math.PI * 2

      // Add velocity for animation
      const velocity = {
        x: (Math.random() - 0.5) * 0.01,
        y: (Math.random() - 0.5) * 0.01,
        rotX: (Math.random() - 0.5) * 0.005,
        rotY: (Math.random() - 0.5) * 0.005,
        rotZ: (Math.random() - 0.5) * 0.005,
      }

      symbols.push({ mesh: symbol, velocity })
      scene.add(symbol)
    }

    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth
      const height = window.innerHeight

      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener("resize", handleResize)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      // Animate symbols
      symbols.forEach((symbol) => {
        symbol.mesh.position.x += symbol.velocity.x
        symbol.mesh.position.y += symbol.velocity.y
        symbol.mesh.rotation.x += symbol.velocity.rotX
        symbol.mesh.rotation.y += symbol.velocity.rotY
        symbol.mesh.rotation.z += symbol.velocity.rotZ

        // Wrap around edges
        if (symbol.mesh.position.x > 10) symbol.mesh.position.x = -10
        if (symbol.mesh.position.x < -10) symbol.mesh.position.x = 10
        if (symbol.mesh.position.y > 10) symbol.mesh.position.y = -10
        if (symbol.mesh.position.y < -10) symbol.mesh.position.y = 10
      })

      renderer.render(scene, camera)
    }

    animate()
    setIsLoaded(true)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }

      // Clean up Three.js resources
      symbols.forEach((symbol) => {
        symbol.mesh.geometry.dispose()
      })
      symbolMaterial.dispose()
      gradientMaterial.dispose()
      gradientTexture.dispose()
      renderer.dispose()
    }
  }, [])

  // Helper function to create gradient texture
  function createGradientTexture() {
    const canvas = document.createElement("canvas")
    canvas.width = 512
    canvas.height = 512

    const ctx = canvas.getContext("2d")
    if (!ctx) return new THREE.Texture()

    const gradient = ctx.createRadialGradient(256, 256, 0, 256, 256, 512)

    gradient.addColorStop(0, "#2c5a46") // Medium green
    gradient.addColorStop(1, "#204434") // Dark green

    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, 512, 512)

    const texture = new THREE.CanvasTexture(canvas)
    return texture
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div ref={containerRef} className="absolute inset-0" />

      {/* Content overlay */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center z-10 px-4 transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
            No Nation Can Prosper In Life Without Education
          </h1>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg max-w-2xl mx-auto mb-8">
            <p className="text-white/90 text-lg md:text-xl">
              Keriko Secondary School provides quality education founded on strong principles of discipline, character
              formation and leadership development.
            </p>
          </div>

          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

