import { BookOpen, Users, Award } from "lucide-react"

const features = [
  {
    id: 1,
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    title: "QUALITY KCSE RESULTS",
    description:
      "The school is currently at a 4.0 mean score and is in the top ten in Njoro Sub-County and the top public school in Lare division.",
  },
  {
    id: 2,
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "INCREASED ENROLMENT",
    description:
      "The school experienced a tremendous increase in enrollment from 16 students at inception to the current 605 students.",
  },
  {
    id: 3,
    icon: <Award className="h-10 w-10 text-primary" />,
    title: "TRANSITION",
    description:
      "In the past 111 students have qualified to join middle level colleges and 136 have qualified to join public universities. Many others have qualified since the school's inception.",
  },
]

export default function Features() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

