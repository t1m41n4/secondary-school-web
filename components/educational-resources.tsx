import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, GraduationCap, BookMarked, FileText } from "lucide-react"

// Educational resources with updated links about innovation, technology, and AI in Kenya
const resources = [
  {
    id: "ai-education",
    title: "AI Education in Kenya",
    description: "Resources for learning about artificial intelligence for Kenyan students",
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    externalUrl: "https://www.deeplearning.ai/courses/",
  },
  {
    id: "innovation-hubs",
    title: "Innovation Hubs in Kenya",
    description: "Technology innovation centers and incubators across Kenya",
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    externalUrl: "https://www.ihub.co.ke/",
  },
  {
    id: "stem-education",
    title: "STEM Education Resources",
    description: "Materials to support science, technology, engineering, and mathematics education",
    icon: <BookMarked className="h-8 w-8 text-primary" />,
    externalUrl: "https://www.stempower.org/",
  },
  {
    id: "digital-skills",
    title: "Digital Skills Training",
    description: "Free and accessible resources for developing digital skills",
    icon: <FileText className="h-8 w-8 text-primary" />,
    externalUrl: "https://www.digitalskills.africa/",
  },
]

export default function EducationalResources() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">Educational Resources</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          Resources to help students develop skills in technology, innovation, and artificial intelligence
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource) => (
            <a key={resource.id} href={resource.externalUrl} target="_blank" rel="noopener noreferrer">
              <Card className="blog-card h-full hover:border-primary cursor-pointer">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 mt-2">{resource.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{resource.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{resource.description}</p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

