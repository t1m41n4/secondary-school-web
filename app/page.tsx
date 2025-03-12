import Hero from "@/components/hero"
import HomeCards from "@/components/home-cards"
import Features from "@/components/features"
import ContactCta from "@/components/contact-cta"
import StatsCounter from "@/components/stats-counter"
import Leadership from "@/components/leadership"
import SocialCta from "@/components/social-cta"
import Gallery from "@/components/gallery"

export default function Home() {
  return (
    <main>
      <Hero />
      <HomeCards />
      <Features />
      <ContactCta />
      <StatsCounter />
      <Leadership />
      <SocialCta />
      <Gallery />
    </main>
  )
}

