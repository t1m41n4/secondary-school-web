"use client"

import { useState, useEffect, ReactNode } from 'react'

interface ClientOnlyProps {
  children: ReactNode
  fallback?: ReactNode
}

// Component that only renders its children on the client-side after hydration
export default function ClientOnly({ children, fallback = null }: ClientOnlyProps) {
  const [isMounted, setIsMounted] = useState(false)

  // Use useEffect to ensure this runs only on the client
  useEffect(() => {
    // Wait until after hydration to reveal client-only content
    // This helps prevent hydration mismatches
    const timeout = setTimeout(() => {
      setIsMounted(true)
    }, 0)

    return () => clearTimeout(timeout)
  }, [])

  // Add key to force re-render after hydration is complete
  return (
    <div suppressHydrationWarning>
      {isMounted ? <div key="client-content">{children}</div> : <div key="fallback">{fallback}</div>}
    </div>
  )
}
