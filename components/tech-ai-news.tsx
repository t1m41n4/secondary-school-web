import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

// Technology and AI news in Kenya
const techNews = [
  {
    id: 1,
    title: "Kenya's Growing AI Ecosystem",
    excerpt:
      "Kenya is emerging as a hub for artificial intelligence innovation in Africa, with startups and research institutions leading the way.",
    date: "May 15, 2023",
    category: "AI Innovation",
    url: "https://www.iafrikan.com/2023/05/24/kenyas-ai-ecosystem-is-growing/",
  },
  {
    id: 2,
    title: "Young Kenyan Innovators Tackle Climate Change with Technology",
    excerpt:
      "Kenyan youth are developing technological solutions to address environmental challenges and promote sustainable development.",
    date: "June 5, 2023",
    category: "Youth Innovation",
    url: "https://www.un.org/africarenewal/magazine/july-2022/young-kenyan-climate-activists-plant-trees-and-raise-awareness",
  },
  {
    id: 3,
    title: "Coding Bootcamps Transform Education in Kenya",
    excerpt:
      "Intensive coding programs are providing alternative pathways to tech careers for Kenyan students outside traditional education.",
    date: "July 12, 2023",
    category: "Tech Education",
    url: "https://techcrunch.com/2021/02/18/kenyas-moringa-school-raises-9-5m-to-expand-tech-training-across-africa/",
  },
]

export default function TechAINews() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">Technology & AI in Kenya</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          Latest developments in technology and artificial intelligence across Kenya
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {techNews.map((article, index) => (
            <Card key={article.id} className="blog-card overflow-hidden border-none shadow-md">
              <div className="relative h-48 w-full">
                <Image
                  src={`/placeholder.svg?height=400&width=600&text=Tech+News+${index + 1}`}
                  alt={article.title}
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
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

