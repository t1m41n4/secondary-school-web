import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "All Blog Posts | Keriko Secondary School",
  description: "Browse all news, updates, and articles about Keriko Secondary School",
}

// Mock blog data - in a real app, this would come from a CMS or database
const articles = [
  {
    id: "1",
    title: "Global Teacher Prize Winner",
    excerpt: "How Brother Peter Tabichi has transformed Keriko Secondary School and won the prestigious Global Teacher Prize.",
    slug: "peter-tabichi-global-teacher",
    date: "March 15, 2023",
    category: "News",
    image: "/images/blog/teacher-prize.jpg",
  },
  {
    id: "2",
    title: "Science Fair Success",
    excerpt: "Our students showcase innovative projects at the National Science Fair and secure top positions.",
    slug: "science-fair-success",
    date: "June 3, 2023",
    category: "Events",
    image: "/images/blog/science-fair.jpg",
  },
  {
    id: "3",
    title: "New Computer Lab Inauguration",
    excerpt: "State-of-the-art computer lab established to enhance digital literacy among students.",
    slug: "computer-lab-inauguration",
    date: "August 22, 2023",
    category: "Facilities",
    image: "/images/blog/computer-lab.jpg",
  },
  {
    id: "4",
    title: "Annual Sports Day",
    excerpt: "Students participate in various sports events and showcase their athletic prowess.",
    slug: "annual-sports-day",
    date: "October 5, 2023",
    category: "Events",
    image: "/images/blog/sports-day.jpg",
  },
  {
    id: "5",
    title: "Teacher Training Workshop",
    excerpt: "Professional development workshop for teachers to enhance teaching methodologies.",
    slug: "teacher-training-workshop",
    date: "November 12, 2023",
    category: "Professional Development",
    image: "/images/blog/teacher-workshop.jpg",
  },
  {
    id: "6",
    title: "Celebrating Exam Success",
    excerpt: "Recognizing our students' outstanding achievements in national examinations.",
    slug: "exam-success",
    date: "January 8, 2024",
    category: "Achievements",
    image: "/images/blog/exam-success.jpg",
  }
];

export default function AllBlogPostsPage() {
  return (
    <main className="min-h-screen">
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">All Blog Posts</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Stay updated with the latest news, events, and achievements from Keriko Secondary School.
          </p>
        </div>
      </div>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex justify-between items-center">
            <h2 className="text-2xl font-bold">Latest Articles</h2>
            <Button asChild variant="outline">
              <Link href="/blog">Featured Articles</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Card key={article.id} className="blog-card overflow-hidden">
                <div className="relative h-48 w-full">
                  <div className="absolute inset-0 bg-gray-200"></div>
                  <Image
                    src={article.image || "/placeholder.svg?height=400&width=600&text=Blog+Image"}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded-full">
                    {article.category}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">
                    <Link href={`/blog/${article.slug}`} className="hover:text-primary transition-colors">
                      {article.title}
                    </Link>
                  </CardTitle>
                  <p className="text-sm text-gray-500">{article.date}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 line-clamp-3">{article.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" size="sm">
                    <Link href={`/blog/${article.slug}`}>Read More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Pagination could go here if needed */}
        </div>
      </section>
    </main>
  )
}
