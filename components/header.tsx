"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const [isMounted, setIsMounted] = useState(false)

  // Check if we're on the homepage
  const isHomepage = pathname === "/"

  // Prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)

    // Add an event to close mobile menu on resize to desktop
    const handleResize = () => {
      if (window.innerWidth >= 1024) {  // lg breakpoint
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  if (!isMounted) {
    return null // Prevent hydration issues
  }

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 dark:bg-gray-900/95 shadow-md backdrop-blur-sm" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        {/* Logo area */}
        <div className="flex lg:flex-1">
          <Link href="/" className="flex items-center -m-1.5 p-1.5">
            <span className="sr-only">Keriko Secondary School</span>
            <div className="flex flex-col">
              <span className="text-lg font-semibold tracking-wider text-primary">KERIKO</span>
              <span className="text-xs tracking-[0.3em] -mt-1 text-muted-foreground">SECONDARY</span>
            </div>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(true)}
            className="text-gray-700 dark:text-gray-200"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>

        {/* Desktop navigation links - center-aligned */}
        <div className="hidden lg:flex lg:justify-center lg:items-center lg:flex-1">
          <div className="flex gap-x-4 xl:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-semibold leading-6 transition-colors px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 ${
                  pathname === item.href
                    ? "text-primary"
                    : "text-gray-900 dark:text-gray-100 hover:text-primary"
                }`}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop CTA button area */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {isHomepage ? (
            <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">Apply Now</Link>
            </Button>
          ) : (
            <div className="w-[88px]"></div> // Space reservation for consistent layout
          )}
        </div>
      </nav>

      {/* Mobile menu with improved animation */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="fixed inset-0 bg-black/25"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
        <div
          className={`fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transform transition-transform duration-300 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center -m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Keriko Secondary School</span>
              <div className="flex flex-col">
                <span className="text-lg font-semibold tracking-wider text-primary">KERIKO</span>
                <span className="text-xs tracking-[0.3em] -mt-1 text-muted-foreground">SECONDARY</span>
              </div>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-700 dark:text-gray-200"
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </Button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                      pathname === item.href
                        ? "bg-gray-50 dark:bg-gray-800 text-primary"
                        : "text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              {/* CTA button in mobile menu */}
              <div className="py-6">
                {isHomepage && (
                  <Button asChild className="w-full bg-primary hover:bg-primary/90">
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                      Apply Now
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

