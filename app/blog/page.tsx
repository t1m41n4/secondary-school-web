import BlogHero from "@/components/blog-hero"
import FeaturedArticles from "@/components/featured-articles"

export const metadata = {
  title: "Blog | Keriko Secondary School",
  description: "Read the latest news, achievements and articles about Keriko Secondary School",
}

export default function BlogPage() {
  return (
    <main>
      <BlogHero />
      <FeaturedArticles />
    </main>
  )
}
