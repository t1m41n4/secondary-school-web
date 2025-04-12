import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Youtube } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Br. Peter Tabichi Wins Global Teacher Prize | Keriko Secondary School",
  description: "Learn about Br. Peter Tabichi's journey to becoming the first African teacher to win the prestigious Global Teacher Prize",
}

export default function PeterTabichiPage() {
  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back navigation */}
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link href="/blog" className="flex items-center text-gray-600 hover:text-primary">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>

        {/* Article header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Br. Peter Tabichi Wins Global Teacher Prize
          </h1>
          <div className="flex items-center text-sm text-gray-500 mb-6">
            <span>March 24, 2019</span>
            <span className="mx-2">•</span>
            <span>Achievements</span>
          </div>
        </div>

        {/* Video embed with callout */}
        <div className="mb-8 border rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-800">
          <div className="aspect-video w-full">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/i41XlsaDc-w?si=atMFJpIsRk76ZIWM"
              title="The Kenyan teacher who gives his salary to the poor | Peter Tabichi | Global Teacher Prize"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-4 border-t">
            <p className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
              <Youtube className="inline-block mr-2 h-4 w-4 text-red-600" />
              Watch Peter Tabichi's journey to winning the prestigious Varkey Foundation Global Teacher Prize.
            </p>
          </div>
        </div>

        {/* Article content */}
        <div className="prose prose-lg dark:prose-invert max-w-none article-content">
          <p>
            Keriko Secondary School's Br. Peter Tabichi won the prestigious Global Teacher Prize,
            becoming the first teacher from Africa to receive this honor. The award, which comes with a
            $1 million prize, recognizes exceptional teachers who have made outstanding contributions to the profession.
          </p>

          <p>
            Br. Tabichi, a science teacher and Franciscan friar, has been praised for his dedication to his students and
            his community. He donates 80% of his monthly income to help the poor and has transformed education at
            Keriko Secondary School through innovative teaching methods and dedication.
          </p>

          <h2>Transforming Education Through Science</h2>
          <p>
            Under his guidance, students have excelled in both national and international science competitions,
            including the Kenya Science and Engineering Fair and the Intel International Science and Engineering Fair.
            His students have developed devices to help the blind and deaf, and a method to harness plant-generated electricity.
          </p>

          <p>
            Despite facing many challenges, including limited resources and a high student-teacher ratio,
            Br. Tabichi has shown what can be achieved through dedication, innovation, and hard work.
          </p>

          <h2>Global Recognition</h2>
          <p>
            The Global Teacher Prize is awarded by the Varkey Foundation and is considered the Nobel Prize of teaching.
            Br. Tabichi was selected from over 10,000 nominations and applications from 179 countries around the world.
          </p>

          <p>
            "This prize does not recognize me but recognizes this great continent's young people," said Tabichi.
            "I am only here because of what my students have achieved. This prize gives them a chance.
            It tells the world that they can do anything."
          </p>
        </div>

        {/* External links - removed Wikipedia link as requested */}
        <div className="mt-10 flex justify-end">
          <Button asChild variant="outline">
            <a href="https://globalteacherprize.org/pages/peter-tabichi-2019/" target="_blank" rel="noopener noreferrer">
              Official Global Teacher Prize Page
            </a>
          </Button>
        </div>
      </div>
    </main>
  )
}
