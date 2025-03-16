import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const leaders = [
  {
    id: 1,
    name: "Mr. Daniel Mwariri",
    title: "Principal",
    school: "Keriko Secondary",
  },
  {
    id: 2,
    name: "Mr. Bernard Karanga",
    title: "Deputy Principal",
    school: "Keriko Secondary",
  },
  {
    id: 3,
    name: "Mr. Benjamin Oluchina",
    title: "Dean of Students",
    school: "Keriko Secondary",
  },
]

export default function Leadership() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Our Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <Card key={leader.id} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-64 w-full">
                <Image
                  src={`/placeholder.svg?height=400&width=400&text=Leader+${index + 1}`}
                  alt={leader.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{leader.name}</h3>
                <p className="text-primary font-medium mb-1">{leader.title}</p>
                <p className="text-gray-600 dark:text-gray-300">{leader.school}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

