"use client"

import { useState, useEffect, ReactNode } from 'react'

interface HydrationSafeProps {
  children: ReactNode
  fallback?: ReactNode
}

export function HydrationSafe({ children, fallback = null }: HydrationSafeProps) {
  const [isClient, setIsClient] = useState(false)
  const [hadInitialRender, setHadInitialRender] = useState(false)

  // First render: detect client
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Second render: wait one more tick to ensure consistent rendering
  useEffect(() => {
    if (isClient) {
      const timer = setTimeout(() => {
        setHadInitialRender(true)
      }, 0)
      return () => clearTimeout(timer)
    }
  }, [isClient])

  if (!isClient) {
    return <>{fallback}</>
  }

  if (!hadInitialRender) {
    return <>{fallback}</>
  }

  return <>{children}</>
}
