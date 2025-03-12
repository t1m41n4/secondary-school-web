import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function ContactCta() {
  return (
    <section className="relative py-24 bg-primary">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
      <div className="relative container mx-auto px-4 text-center z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">We would love to hear from you</h2>
        <p className="text-white/90 max-w-2xl mx-auto mb-8">
          Whether you have a question about the school or want to help us grow, call us on +254103001600 or email on
          communications@kerikosecondary.com
        </p>
        <Button asChild size="lg" variant="secondary">
          <Link href="/contact">
            Contact Us
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  )
}

