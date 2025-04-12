"use client"

import { useEffect, useRef } from "react"

interface AnimatedBackgroundProps {
  color?: string
  particleColor?: string
  density?: number
}

export default function AnimatedBackground({
  color = "#204434",
  particleColor = "rgba(255, 255, 255, 0.7)",
  density = 50
}: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas dimensions to match window
    const updateDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)

    // Create particles - fewer but larger particles
    const particleCount = Math.floor((window.innerWidth * window.innerHeight) / 15000) * density / 50
    const particles: any[] = []

    for (let i = 0; i < particleCount; i++) {
      // Larger radius range (2-5 instead of 1-3)
      const radius = Math.random() * 3 + 2

      // Random shape type: circle, square, or X
      const shapeType = Math.random() > 0.7 ? "circle" : Math.random() > 0.5 ? "square" : "x"

      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: radius,
        size: radius * 2, // For non-circle shapes
        density: Math.random() * 30 + 1,
        vx: (Math.random() * 2 - 1) * 0.5, // Slowed down movement
        vy: (Math.random() * 2 - 1) * 0.5, // Slowed down movement
        shape: shapeType,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() * 2 - 1) * 0.01
      })
    }

    // Animation function
    let animationFrameId: number
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0)
      gradient.addColorStop(0, "#204434")
      gradient.addColorStop(1, "#2c5a46")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw particles
      particles.forEach(particle => {
        // Move particles
        particle.x += particle.vx
        particle.y += particle.vy
        particle.rotation += particle.rotationSpeed

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -1
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -1
        }

        // Draw particle
        ctx.fillStyle = particleColor
        ctx.beginPath()

        // Save context state
        ctx.save()
        ctx.translate(particle.x, particle.y)
        ctx.rotate(particle.rotation)

        // Draw different shapes
        if (particle.shape === "circle") {
          ctx.arc(0, 0, particle.radius, 0, Math.PI * 2)
        } else if (particle.shape === "x") {
          // Draw X shape
          const halfSize = particle.size / 2
          ctx.moveTo(-halfSize, -halfSize)
          ctx.lineTo(halfSize, halfSize)
          ctx.moveTo(halfSize, -halfSize)
          ctx.lineTo(-halfSize, halfSize)
        } else {
          // Draw square
          const halfSize = particle.size / 2
          ctx.rect(-halfSize, -halfSize, particle.size, particle.size)
        }

        ctx.fill()
        ctx.restore()
      })

      animationFrameId = window.requestAnimationFrame(render)
    }

    render()

    // Clean up
    return () => {
      window.removeEventListener('resize', updateDimensions)
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [color, particleColor, density])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}
