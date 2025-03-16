"use client"

import Link from "next/link"
import { Facebook, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <div className="flex flex-col">
                <span className="text-lg font-semibold tracking-wider text-white">KERIKO</span>
                <span className="text-xs tracking-[0.3em] -mt-1 text-gray-400">SECONDARY</span>
              </div>
            </Link>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-primary" />
              <span className="text-sm">+254103001600</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-primary" />
              <span className="text-sm">communications@kerikosecondary.com</span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">School</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">Follow Us</h3>
            <div className="mt-4">
              <a
                href="https://www.facebook.com/kerikosecondary"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-gray-800 hover:bg-primary transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">School Donation</h3>
            <div className="mt-4">
              <form action="https://www.paypal.com/donate" method="post" target="_top">
                <input type="hidden" name="hosted_button_id" value="PWLTT46H3EBT8" />
                <Button
                  type="submit"
                  variant="outline"
                  className="bg-gray-800 hover:bg-primary text-white border-gray-700"
                >
                  Donate Now
                </Button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Keriko Secondary School. All rights reserved.
            </p>
            <Button
              variant="ghost"
              size="sm"
              className="mt-4 md:mt-0 text-gray-400 hover:text-white"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Back to top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}

