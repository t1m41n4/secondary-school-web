import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"

const cards = [
  {
    id: 1,
    image: "/placeholder.svg?height=400&width=600",
    title: "Global Teacher Prize",
    date: "May 24th, 2019",
    description:
      "One of the teachers, Br. Peter Tabichi, won the 2019 global teacher prize. He is the only one in Africa to have achieved the great feat.",
    link: "https://globalteacherprize.org/news/global-teacher-prize-finalists/2019-finalists-global-teacher-prize/203/203-Peter-Tabichi",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=400&width=600",
    title: "Intel ISEF Competition",
    date: "May 16th, 2019",
    description:
      "Salome Njeri and Esther Amimo Anyanzwa participated in the Intel International Science and Engineering Fair (ISEF) 2019 held in Phoenix, Arizona USA. Their project won the top United Nations Sustainable Development Goal Award.",
    link: "https://www.standardmedia.co.ke/article/2001326003/kenyan-school-girls-sh100-invention-wins-un-award",
  },
]

export default function HomeCards() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Our Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card) => (
            <Card key={card.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-64 w-full">
                <Image src={card.image || "/placeholder.svg"} alt={card.title} fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{card.title}</h3>
                  <span className="text-sm font-medium text-primary">{card.date}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{card.description}</p>
                <Link
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                >
                  Read More <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

