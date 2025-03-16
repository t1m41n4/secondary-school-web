import { Card, CardContent } from "@/components/ui/card"
import { Cpu, Code, Lightbulb, GraduationCap } from "lucide-react"

// Update categories to focus on technology and AI in Kenya
const categories = [
  {
    id: "ai-innovation",
    title: "AI Innovation in Kenya",
    description: "How artificial intelligence is transforming Kenya's tech landscape",
    icon: <Cpu className="h-8 w-8 text-primary" />,
    externalUrl: "https://www.iafrikan.com/2023/05/24/kenyas-ai-ecosystem-is-growing/",
  },
  {
    id: "youth-tech",
    title: "Youth in Technology",
    description: "Young Kenyans leading the way in technological innovation",
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    externalUrl: "https://www.bbc.com/news/world-africa-38326101",
  },
  {
    id: "coding-schools",
    title: "Coding Schools in Kenya",
    description: "Educational institutions teaching programming skills to Kenyan youth",
    icon: <Code className="h-8 w-8 text-primary" />,
    externalUrl:
      "https://techcrunch.com/2021/02/18/kenyas-moringa-school-raises-9-5m-to-expand-tech-training-across-africa/",
  },
  {
    id: "tech-startups",
    title: "Kenyan Tech Startups",
    description: "Innovative startups shaping Kenya's digital future",
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    externalUrl: "https://disrupt-africa.com/2023/01/04/kenyan-startups-raised-more-funding-than-ever-in-2022/",
  },
]

export default function ArticleCategories() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">Technology & AI in Kenya</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          Explore how technology and artificial intelligence are transforming Kenya's future and creating opportunities
          for young innovators
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <a key={category.id} href={category.externalUrl} target="_blank" rel="noopener noreferrer">
              <Card className="blog-card h-full hover:border-primary cursor-pointer">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 mt-2">{category.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{category.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{category.description}</p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

