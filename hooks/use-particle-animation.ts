import { useState, useEffect, useRef } from "react"
import { BookOpen, GraduationCap, Lightbulb, PenTool, School } from "lucide-react"

// Define common particle types
export const particleTypes = [
  { icon: BookOpen, color: "#ffffff" },
  { icon: GraduationCap, color: "#ffffff" },
  { icon: Lightbulb, color: "#ffffff" },
  { icon: PenTool, color: "#ffffff" },
  { icon: School, color: "#ffffff" },
]

export interface ParticleCanvasOptions {
  height?: number | string
  minHeight?: number
  particleDensity?: number
  heightRatio?: number
}

export function useParticleAnimation({
  height = "40vh",
  minHeight = 350,
  particleDensity = 30,
  heightRatio = 0.4
}: ParticleCanvasOptions = {}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dimensions, setDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? Math.max(window.innerHeight * heightRatio, minHeight) : minHeight
  })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Set canvas dimensions
    const updateDimensions = () => {
      const { clientWidth } = document.documentElement
      const newHeight = Math.max(window.innerHeight * heightRatio, minHeight)

      const newDimensions = {
        width: clientWidth,
        height: newHeight,
      }

      setDimensions(newDimensions)

      if (canvasRef.current) {
        canvasRef.current.width = newDimensions.width
        canvasRef.current.height = newDimensions.height
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    // Create particles
    const particles: any[] = []
    const particleCount = Math.min(Math.floor(dimensions.width / particleDensity), 40)

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

        // Draw icon
        ctx.fillStyle = particle.type.color
        ctx.beginPath()

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

    requestAnimationFrame(() => {
      if (canvasRef.current) {
        render();
      }
    });

    // Trigger the title slide-in animation
    requestAnimationFrame(() => {
      setIsVisible(true);
    });

    return () => {
      window.removeEventListener("resize", updateDimensions)
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [heightRatio, minHeight, particleDensity])

  return { canvasRef, isVisible, dimensions }
}
