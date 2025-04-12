"use client"

import { useState, useEffect, ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface PageLayoutProps {
  children: ReactNode
  className?: string
  id?: string
}

export default function PageLayout({ children, className = "", id }: PageLayoutProps) {
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  return (
    <AnimatePresence mode="wait">
      <motion.main
        id={id}
        className={className}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Conditionally render content based on hydration state */}
        {isHydrated ? (
          children
        ) : (
          <div className="min-h-screen flex items-center justify-center">
            <div className="animate-pulse text-center">
              <div className="h-8 w-40 bg-gray-200 rounded mb-4 mx-auto"></div>
              <div className="h-4 w-60 bg-gray-200 rounded mx-auto"></div>
            </div>
          </div>
        )}
      </motion.main>
    </AnimatePresence>
  )
}
