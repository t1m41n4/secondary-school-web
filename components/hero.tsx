"use client"

import { useEffect, useRef, useState } from "react"
import { BookOpen, GraduationCap, Lightbulb, PenTool, School } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Define particle types with their properties
const particleTypes = [
  { icon: BookOpen, color: "#ffffff" },
  { icon: GraduationCap, color: "#ffffff" },
  { icon: Lightbulb, color: "#ffffff" },
  { icon: PenTool, color: "#ffffff" },
  { icon: School, color: "#ffffff" },
]

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  // Initialize with non-zero dimensions to start rendering immediately
  const [dimensions, setDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? Math.max(window.innerHeight * 0.9, 600) : 800
  })
  const [isContentVisible, setIsContentVisible] = useState(false)

  useEffect(() => {
    // Set canvas dimensions
    const updateDimensions = () => {
      const { clientWidth, clientHeight } = document.documentElement
      const newDimensions = {
        width: clientWidth,
        height: Math.max(clientHeight * 0.9, 600), // 90vh or minimum 600px
      }

      setDimensions(newDimensions)

      if (canvasRef.current) {
        canvasRef.current.width = newDimensions.width
        canvasRef.current.height = newDimensions.height
      }
    }

    // Call immediately to set initial dimensions
    updateDimensions()

    // Show content with animation after a small delay
    setTimeout(() => {
      setIsContentVisible(true)
    }, 100)

    window.addEventListener("resize", updateDimensions)

    // Create particles
    const particles: any[] = []
    const particleCount = Math.min(Math.floor(dimensions.width / 20), 40) // Responsive particle count

    for (let i = 0; i < particleCount; i++) {
      const type = particleTypes[Math.floor(Math.random() * particleTypes.length)]
      particles.push({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        size: Math.random() * 15 + 10,
        speedX: Math.random() * 1 - 0.5,
        speedY: Math.random() * 1 - 0.5,
        rotation: Math.random() * 360,
        rotationSpeed: Math.random() * 2 - 1,
        type,
        opacity: Math.random() * 0.5 + 0.1,
      })
    }

    // Animation loop
    let animationFrameId: number

    const render = () => {
      const canvas = canvasRef.current
      if (!canvas) return

      const ctx = canvas.getContext("2d")
      if (!ctx) return

      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, dimensions.width, dimensions.height)
      gradient.addColorStop(0, "#204434") // Dark green (primary color)
      gradient.addColorStop(0.5, "#2c5a46") // Medium green
      gradient.addColorStop(1, "#204434") // Back to dark green

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, dimensions.width, dimensions.height)

      // Update and draw particles
      particles.forEach((particle) => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY
        particle.rotation += particle.rotationSpeed

        // Wrap around edges
        if (particle.x < -50) particle.x = dimensions.width + 50
        if (particle.x > dimensions.width + 50) particle.x = -50
        if (particle.y < -50) particle.y = dimensions.height + 50
        if (particle.y > dimensions.height + 50) particle.y = -50

        // Draw particle
        ctx.save()
        ctx.translate(particle.x, particle.y)
        ctx.rotate((particle.rotation * Math.PI) / 180)
        ctx.globalAlpha = particle.opacity

        // Draw icon (simplified representation)
        ctx.fillStyle = particle.type.color
        ctx.beginPath()

        // Different shapes based on icon type
        if (particle.type.icon === BookOpen) {
          ctx.rect(-particle.size / 2, -particle.size / 4, particle.size, particle.size / 2)
        } else if (particle.type.icon === GraduationCap) {
          ctx.moveTo(-particle.size / 2, particle.size / 4)
          ctx.lineTo(0, -particle.size / 4)
          ctx.lineTo(particle.size / 2, particle.size / 4)
          ctx.lineTo(0, particle.size / 2)
        } else if (particle.type.icon === Lightbulb) {
          ctx.arc(0, 0, particle.size / 2, 0, Math.PI * 2)
        } else if (particle.type.icon === PenTool) {
          ctx.moveTo(-particle.size / 2, -particle.size / 2)
          ctx.lineTo(particle.size / 2, particle.size / 2)
          ctx.moveTo(particle.size / 2, -particle.size / 2)
          ctx.lineTo(-particle.size / 2, particle.size / 2)
        } else {
          ctx.rect(-particle.size / 2, -particle.size / 2, particle.size, particle.size)
        }

        ctx.fill()
        ctx.restore()
      })

      animationFrameId = window.requestAnimationFrame(render)
    }

    // Start animation as soon as component mounts
    // Use requestAnimationFrame to ensure animation starts on next frame
    requestAnimationFrame(() => {
      if (canvasRef.current) {
        render();
      }
    });

    return () => {
      window.removeEventListener("resize", updateDimensions)
      window.cancelAnimationFrame(animationFrameId)
    }
  }, []) // Remove dependency on dimensions to avoid re-creating animation on resize

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />

      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4 sm:px-6">
        <div className={`text-center transition-all duration-1000 ${isContentVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight max-w-4xl mx-auto">
            No Nation Can Prosper In Life Without Education
          </h1>
          <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-lg max-w-2xl mx-auto">
            <p className="text-white/90 text-base sm:text-lg md:text-xl">
              Keriko Secondary School provides quality education founded on strong principles of discipline, character
              formation and leadership development.
            </p>
          </div>

          <div className="mt-6 sm:mt-8">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 px-6 py-3 text-base sm:text-lg"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

