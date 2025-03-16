import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

// Featured articles data with working links
const featuredArticles = [
  {
    id: "peter-tabichi-global-teacher",
    title: "Br. Peter Tabichi Wins Global Teacher Prize",
    excerpt:
      "Keriko Secondary School's Br. Peter Tabichi won the prestigious Global Teacher Prize, becoming the first teacher from Africa to receive this honor.",
    date: "March 24, 2019",
    category: "Achievements",
    externalUrl: "https://globalteacherprize.org/pages/peter-tabichi-2019",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Peter_Tabichi",
  },
  {
    id: "students-win-un-award",
    title: "Keriko Students Win UN Sustainable Development Goal Award",
    excerpt:
      "Salome Njeri and Esther Amimo Anyanzwa's innovative project won the top United Nations Sustainable Development Goal Award at the Intel ISEF Competition.",
    date: "May 16, 2019",
    category: "Student Achievements",
    externalUrl: "https://www.standardmedia.co.ke/article/2001326003/kenyan-school-girls-sh100-invention-wins-un-award",
  },
  {
    id: "safaricom-foundation-support",
    title: "Safaricom Foundation Supports Keriko Secondary School",
    excerpt:
      "The Safaricom Foundation has provided support to Keriko Secondary School, helping to improve infrastructure and educational resources.",
    date: "June 10, 2019",
    category: "Partnerships",
    externalUrl: "https://www.safaricomfoundation.org/project/keriko-mixed-secondary-school-nakuru-county/",
  },
]

export default function FeaturedArticles() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">2019 Highlights</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          Read about our school's achievements, partnerships, and the inspiring stories of our teachers and students
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArticles.map((article, index) => (
            <Card key={article.id} className="blog-card overflow-hidden border-none shadow-md">
              <div className="relative h-48 w-full">
                <Image
                  src={`/placeholder.svg?height=400&width=600&text=${article.category}`}
                  alt=""
                  fill
                  className="object-cover"
                />
                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-2 py-1">
                  {article.category}
                </div>
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">{article.date}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{article.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{article.excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={article.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                  >
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </a>

                  {article.wikipediaUrl && (
                    <a
                      href={article.wikipediaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium ml-4"
                    >
                      Wikipedia <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

