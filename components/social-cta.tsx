import { Facebook } from "lucide-react"

export default function SocialCta() {
  return (
    <section className="relative py-20 bg-gray-900 text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-800/70" />
      <div className="relative container mx-auto px-4 text-center z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">For school updates, events and other activities</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Please checkout our school's social media facebook group page by clicking on the icon below for important
          updates
        </p>
        <a
          href="https://www.facebook.com/kerikosecondary"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 hover:bg-primary transition-colors"
          aria-label="Facebook"
        >
          <Facebook className="h-6 w-6" />
        </a>
      </div>
    </section>
  )
}

