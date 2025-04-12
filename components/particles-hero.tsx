"use client"

import { useParticleAnimation } from "@/hooks/use-particle-animation"

interface ParticlesHeroProps {
  title: string
  subtitle?: string
  height?: number | string
  minHeight?: number
  particleDensity?: number
}

export default function ParticlesHero({
  title,
  subtitle,
  height = "40vh",
  minHeight = 350,
  particleDensity = 30
}: ParticlesHeroProps) {
  const { canvasRef, isVisible } = useParticleAnimation({
    height,
    minHeight,
    particleDensity,
    heightRatio: 0.4
  })

  return (
    <div className="relative h-[40vh] min-h-[350px] overflow-hidden">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
      <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
        <div className="text-center">
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 transition-all duration-700
            ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            {title}
          </h1>

          {subtitle && (
            <p
              className={`text-xl text-white/90 max-w-2xl mx-auto transition-all duration-700 delay-150
              ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              {subtitle}
            </p>
          )}

          <div
            className={`w-24 h-1 bg-white mx-auto mt-6 transition-all duration-700 delay-300
            ${isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
          ></div>
        </div>
      </div>
    </div>
  )
}
