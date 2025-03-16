import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft } from "lucide-react"

// This would typically come from a CMS or database
const allArticles = [
  {
    id: "peter-tabichi-global-teacher",
    title: "Br. Peter Tabichi Wins Global Teacher Prize",
    excerpt:
      "Keriko Secondary School's Br. Peter Tabichi won the prestigious Global Teacher Prize, becoming the first teacher from Africa to receive this honor.",
    image: "/placeholder.svg?height=400&width=600&text=Peter+Tabichi",
    date: "March 24, 2019",
    category: "Achievements",
    url: "/blog/peter-tabichi-global-teacher",
  },
  {
    id: "students-win-un-award",
    title: "Keriko Students Win UN Sustainable Development Goal Award",
    excerpt:
      "Salome Njeri and Esther Amimo Anyanzwa's innovative project won the top United Nations Sustainable Development Goal Award at the Intel ISEF Competition.",
    image: "/placeholder.svg?height=400&width=600&text=Students+Award",
    date: "May 16, 2019",
    category: "Student Achievements",
    url: "/blog/students-win-un-award",
  },
  {
    id: "safaricom-foundation-support",
    title: "Safaricom Foundation Supports Keriko Secondary School",
    excerpt:
      "The Safaricom Foundation has provided support to Keriko Secondary School, helping to improve infrastructure and educational resources.",
    image: "/placeholder.svg?height=400&width=600&text=Safaricom+Foundation",
    date: "June 10, 2019",
    category: "Partnerships",
    url: "/blog/safaricom-foundation-support",
  },
  {
    id: "peter-tabichi-un-person",
    title: "Br. Peter Tabichi Named UN Person of the Year",
    excerpt:
      "Following his Global Teacher Prize win, Br. Peter Tabichi has been recognized as the UN Person of the Year for his contributions to education.",
    image: "/placeholder.svg?height=400&width=600&text=UN+Award",
    date: "October 15, 2019",
    category: "Achievements",
    url: "/blog/peter-tabichi-un-person",
  },
  {
    id: "students-national-science-fair",
    title: "Keriko Students Excel at National Science Fair",
    excerpt:
      "Our students showcased their innovative projects at the Kenya Science and Engineering Fair, bringing home multiple awards.",
    image: "/placeholder.svg?height=400&width=600&text=Science+Fair",
    date: "July 8, 2019",
    category: "Student Achievements",
    url: "/blog/students-national-science-fair",
  },
  {
    id: "british-council-partnership",
    title: "British Council Partners with Keriko Secondary School",
    excerpt:
      "The British Council has established a partnership with our school to enhance English language learning and cultural exchange.",
    image: "/placeholder.svg?height=400&width=600&text=British+Council",
    date: "September 5, 2019",
    category: "Partnerships",
    url: "/blog/british-council-partnership",
  },
  {
    id: "study-tips-kcse",
    title: "Effective Study Tips for KCSE Preparation",
    excerpt:
      "Practical advice and strategies to help students prepare effectively for their Kenya Certificate of Secondary Education examinations.",
    image: "/placeholder.svg?height=400&width=600&text=Study+Tips",
    date: "January 15, 2023",
    category: "Educational Resources",
    url: "/blog/study-tips-kcse",
  },
  {
    id: "mastering-mathematics",
    title: "Mastering Mathematics: A Guide for Secondary Students",
    excerpt: "Strategies and resources to help students improve their understanding and performance in mathematics.",
    image: "/placeholder.svg?height=400&width=600&text=Mathematics",
    date: "February 20, 2023",
    category: "Educational Resources",
    url: "/blog/mastering-mathematics",
  },
  {
    id: "sports-day-2023",
    title: "Annual Sports Day Highlights",
    excerpt: "Recap of our annual sports day event, celebrating athletic achievements and school spirit.",
    image: "/placeholder.svg?height=400&width=600&text=Sports+Day",
    date: "March 10, 2023",
    category: "School Life",
    url: "/blog/sports-day-2023",
  },
  {
    id: "cultural-day-celebration",
    title: "Cultural Day Celebration at Keriko Secondary",
    excerpt:
      "Students showcase Kenya's rich cultural diversity through performances, exhibitions, and traditional cuisine.",
    image: "/placeholder.svg?height=400&width=600&text=Cultural+Day",
    date: "April 25, 2023",
    category: "School Life",
    url: "/blog/cultural-day-celebration",
  },
]

export const metadata = {
  title: "All Articles | Keriko Secondary School Blog",
  description:
    "Browse all articles from the Keriko Secondary School blog, including news, achievements, and educational resources.",
}

export default function AllArticlesPage() {
  return (
    <main>
      {/* Page Hero */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image src="/images/all-articles-hero.jpg" alt="All Articles" fill className="object-cover" priority />
        <div className="relative z-20 text-center px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">All Articles</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Browse our complete collection of articles, news, and resources
          </p>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allArticles.map((article) => (
              <Card key={article.id} className="blog-card overflow-hidden border-none shadow-md">
                <div className="relative h-48 w-full">
                  <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
                  <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-2 py-1">
                    {article.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">{article.date}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{article.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{article.excerpt}</p>
                  <Link
                    href={article.url}
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                  >
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link href="/blog">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

