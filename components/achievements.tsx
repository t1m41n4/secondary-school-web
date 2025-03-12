import { Award, Trophy } from "lucide-react"

export default function Achievements() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">OUR ACHIEVEMENTS</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <div className="flex justify-center mb-6">
              <Trophy className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-center text-gray-900 dark:text-white">
              Science & Engineering Fair (KSEF & ISEF)
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              The school has become a leader not just in the county, region and National but also at the International
              level. We have won at the national level in two consecutive years in chemistry and mathematics. We also
              participated in the NACOSTI (National Council of Science, Technology and Innovation) week at KICC Nairobi
              where we emerged winners in the mathematical science category. Two students were invited to participate in
              an international science fair ITEL, ISEF in the USA in May 2019 where their project won the top United
              Nations Sustainable Development Goal Award.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <div className="flex justify-center mb-6">
              <Award className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-center text-gray-900 dark:text-white">Global Teacher Prize</h3>
            <p className="text-gray-700 dark:text-gray-300">
              One of the teachers won the 2019 global teacher prize. This made history as he is the first teacher from
              Africa to ever win the coveted prize. This is a great milestone not only for our school but for Kenya and
              Africa at large.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

