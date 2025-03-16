import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

// This would typically come from a CMS or database
const articles = {
  "peter-tabichi-global-teacher": {
    title: "Br. Peter Tabichi Wins Global Teacher Prize",
    date: "March 24, 2019",
    author: "Keriko Secondary School",
    category: "Achievements",
    image: "/placeholder.svg?height=600&width=1200&text=Peter+Tabichi",
    content: `
      <p>Brother Peter Tabichi, a mathematics and physics teacher at Keriko Secondary School, has been named the winner of the prestigious Global Teacher Prize 2019. The award, which comes with a $1 million prize, recognizes his exceptional dedication to his students and community.</p>
      
      <p>Br. Tabichi, a Franciscan friar, donates 80% of his monthly income to help the poor in his community. His dedication extends beyond the classroom, as he works tirelessly to address challenges such as food insecurity, water scarcity, and access to education.</p>
      
      <h2>Transforming Education at Keriko Secondary School</h2>
      
      <p>At Keriko Secondary School, where resources are limited and many students come from poor families, Br. Tabichi has made remarkable strides in improving educational outcomes. Through his innovative teaching methods and commitment to his students, he has:</p>
      
      <ul>
        <li>Expanded the school's Science Club and helped students design research projects</li>
        <li>Led his students to win national and international science competitions</li>
        <li>Improved student attendance from 58% to 80%</li>
        <li>Doubled the number of students going to college</li>
      </ul>
      
      <p>His approach focuses on talent-based learning and promoting peace between different ethnic groups and religions.</p>
      
      <h2>Global Recognition</h2>
      
      <p>The Global Teacher Prize, awarded by the Varkey Foundation, recognizes one exceptional teacher who has made an outstanding contribution to the profession. Br. Tabichi was selected from over 10,000 nominations and applications from 179 countries around the world.</p>
      
      <p>Upon receiving the award, Br. Tabichi said: "This prize does not recognize me but recognizes this great continent's young people. I am only here because of what my students have achieved. This prize gives them a chance. It tells the world that they can do anything."</p>
      
      <p>The award ceremony was held in Dubai, where Br. Tabichi was presented with the prize by actor Hugh Jackman.</p>
      
      <p>This recognition brings global attention to Keriko Secondary School and highlights the transformative power of dedicated teachers, even in challenging circumstances.</p>
      
      <p>For more information about Br. Peter Tabichi and the Global Teacher Prize, visit <a href="https://globalteacherprize.org/pages/peter-tabichi-2019" target="_blank" rel="noopener noreferrer">the Global Teacher Prize website</a>.</p>
    `,
    source: "https://globalteacherprize.org/pages/peter-tabichi-2019",
  },
  "students-win-un-award": {
    title: "Keriko Students Win UN Sustainable Development Goal Award",
    date: "May 16, 2019",
    author: "Keriko Secondary School",
    category: "Student Achievements",
    image: "/placeholder.svg?height=600&width=1200&text=Students+Award",
    content: `
      <p>Two students from Keriko Secondary School, Salome Njeri and Esther Amimo Anyanzwa, have won the top United Nations Sustainable Development Goal Award at the prestigious Intel International Science and Engineering Fair (ISEF) 2019 held in Phoenix, Arizona, USA.</p>
      
      <p>Their innovative project, a device that allows deaf and blind people to measure objects, impressed judges with its potential to improve accessibility and quality of life for people with disabilities.</p>
      
      <h2>The Winning Project</h2>
      
      <p>The students developed a device called the "Essameter" that costs just Sh100 (approximately $1) to produce. The device uses sound waves to detect objects and can be used by both deaf and blind individuals to measure objects accurately.</p>
      
      <p>What makes this achievement even more remarkable is that the students created this innovation with very limited resources, demonstrating exceptional creativity and problem-solving skills.</p>
      
      <h2>International Recognition</h2>
      
      <p>The Intel ISEF is the world's largest international pre-college science competition, bringing together approximately 1,800 high school students from more than 80 countries, regions, and territories. The competition provides a platform for students to showcase their independent research and compete for prizes worth approximately $5 million.</p>
      
      <p>Winning the UN Sustainable Development Goal Award highlights how the students' project aligns with global efforts to create a more inclusive and accessible world for all people, regardless of disability.</p>
      
      <h2>School Pride</h2>
      
      <p>This achievement brings immense pride to Keriko Secondary School, which has been gaining international recognition for its academic excellence despite facing numerous challenges, including limited resources and infrastructure.</p>
      
      <p>The school's principal, Mr. Daniel Mwariri, accompanied the students to the competition and expressed his pride in their achievement: "This award demonstrates that with dedication and support, our students can compete at the highest international levels. We are incredibly proud of Salome and Esther for their innovation and for representing not just our school, but Kenya on the global stage."</p>
      
      <p>This success follows closely on the heels of another significant achievement for the school, with teacher Br. Peter Tabichi winning the Global Teacher Prize earlier in 2019.</p>
      
      <p>For more information about the students' award-winning project, visit <a href="https://www.standardmedia.co.ke/article/2001326003/kenyan-school-girls-sh100-invention-wins-un-award" target="_blank" rel="noopener noreferrer">the Standard Media article</a>.</p>
    `,
    source: "https://www.standardmedia.co.ke/article/2001326003/kenyan-school-girls-sh100-invention-wins-un-award",
  },
  "safaricom-foundation-support": {
    title: "Safaricom Foundation Supports Keriko Secondary School",
    date: "June 10, 2019",
    author: "Keriko Secondary School",
    category: "Partnerships",
    image: "/placeholder.svg?height=600&width=1200&text=Safaricom+Foundation",
    content: `
      <p>The Safaricom Foundation has provided significant support to Keriko Secondary School in Nakuru County, helping to improve infrastructure and educational resources for students and teachers.</p>
      
      <p>This partnership comes at a crucial time for the school, which has been gaining international recognition for its academic achievements despite facing numerous challenges related to infrastructure and resources.</p>
      
      <h2>Infrastructure Development</h2>
      
      <p>The Safaricom Foundation's support has enabled several important infrastructure improvements at the school, including:</p>
      
      <ul>
        <li>Construction and equipping of new classrooms</li>
        <li>Renovation of existing facilities</li>
        <li>Improvement of water and sanitation facilities</li>
        <li>Development of a computer laboratory</li>
      </ul>
      
      <p>These improvements will significantly enhance the learning environment for students and provide better working conditions for teachers.</p>
      
      <h2>Educational Resources</h2>
      
      <p>In addition to infrastructure development, the Safaricom Foundation has provided essential educational resources, including:</p>
      
      <ul>
        <li>Textbooks and reference materials</li>
        <li>Laboratory equipment for science classes</li>
        <li>Computers and digital learning resources</li>
        <li>Teacher training and professional development opportunities</li>
      </ul>
      
      <p>These resources will help to improve the quality of education at Keriko Secondary School and provide students with more opportunities for hands-on learning and practical experience.</p>
      
      <h2>Impact on the School Community</h2>
      
      <p>The support from the Safaricom Foundation is expected to have a significant positive impact on the school community, including:</p>
      
      <ul>
        <li>Improved learning outcomes for students</li>
        <li>Enhanced teaching capabilities for educators</li>
        <li>Increased enrollment and retention rates</li>
        <li>Greater community engagement and support for education</li>
      </ul>
      
      <p>The school's principal, Mr. Daniel Mwariri, expressed gratitude for the foundation's support: "We are deeply thankful to the Safaricom Foundation for their generous support. These improvements will make a tremendous difference in our ability to provide quality education to our students and will help us build on the successes we have already achieved."</p>
      
      <p>For more information about the Safaricom Foundation's support for Keriko Secondary School, visit <a href="https://www.safaricomfoundation.org/project/keriko-mixed-secondary-school-nakuru-county/" target="_blank" rel="noopener noreferrer">the Safaricom Foundation website</a>.</p>
    `,
    source: "https://www.safaricomfoundation.org/project/keriko-mixed-secondary-school-nakuru-county/",
  },
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = articles[params.slug as keyof typeof articles]

  if (!article) {
    return {
      title: "Article Not Found | Keriko Secondary School",
      description: "The requested article could not be found.",
    }
  }

  return {
    title: `${article.title} | Keriko Secondary School Blog`,
    description: article.content.substring(0, 160).replace(/<[^>]*>/g, ""),
  }
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const slug = params.slug
  const article = articles[slug as keyof typeof articles]

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
        <p className="mb-8">The article you're looking for doesn't exist or has been moved.</p>
        <Button asChild>
          <Link href="/blog">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <main>
      {/* Article Hero */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
        <div className="relative z-20 text-center px-4">
          <div className="inline-block bg-primary text-white text-sm font-bold px-3 py-1 mb-4">{article.category}</div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">{article.title}</h1>
          <div className="text-white/80">
            <span>{article.date}</span> • <span>{article.author}</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-10">
            <div
              className="article-content prose prose-lg max-w-none dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Source:{" "}
                <a
                  href={article.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {article.source}
                </a>
              </p>
            </div>

            <div className="mt-8">
              <Button asChild variant="outline">
                <Link href="/blog">
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

