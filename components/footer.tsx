"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">Keriko Secondary School</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Providing quality education and nurturing talents since 2007
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Information</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">Nakuru County, Njoro Sub-County, Lare Division</p>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              <a href="tel:+254103001600" className="hover:text-primary transition-colors">+254103001600</a>
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              <a href="mailto:communications@kerikosecondary.com" className="hover:text-primary transition-colors">
                communications@kerikosecondary.com
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {year} Keriko Secondary School. All rights reserved.</p>
          <p className="text-[10px] text-gray-500 dark:text-gray-500 mt-2">
            Designed & Developed by{" "}
            <a
              href="https://github.com/t1m41n4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80"
            >
              t1m41n4
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

