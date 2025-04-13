import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Verify path
import { Button } from "@/components/ui/button"; // Verify path
import AnimatedBanner from "@/components/animated-banner"; // Verify path
import Link from "next/link"
import Image from "next/image"
import { CardDescription, CardFooter } from "@/components/ui/card"

// Sample blog data for all posts
const allArticles = [
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
    title: "Annual Sports Day Highlights",
    excerpt: "Recapping the excitement and achievements from our Annual Sports Day competition.",
    slug: "annual-sports-day",
    date: "May 12, 2023",
    category: "Sports",
    image: "/images/blog/sports-day.jpg",
  },
  {
    id: "5",
    title: "Community Outreach Program",
    excerpt: "Our students lead environmental cleanup and tree planting initiatives in neighboring communities.",
    slug: "community-outreach",
    date: "April 5, 2023",
    category: "Community",
    image: "/images/blog/community.jpg",
  },
  {
    id: "6",
    title: "KCSE Results Improvement",
    excerpt: "Celebrating our improved performance in the Kenya Certificate of Secondary Education examinations.",
    slug: "kcse-results",
    date: "February 28, 2023",
    category: "Academics",
    image: "/images/blog/academics.jpg",
  },
];

export const metadata = {
  title: "All Blog Posts | Keriko Secondary School",
  description: "Browse all news, updates, and articles about Keriko Secondary School",
}

export default function AllBlogPosts() {
  return (
    <main>
      <AnimatedBanner
        title="All Blog Posts"
        subtitle="News, events, and stories from our school community"
      />

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allArticles.map((article) => (
              <Card key={article.id} className="blog-card overflow-hidden">
                <div className="relative h-48 w-full">
                  <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                  <Image
                    src={article.image || "/placeholder.svg?height=400&width=600&text=Blog+Image"}
                    alt={article.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded-full">
                    {article.category}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>
                    <Link href={`/blog/${article.slug}`} className="hover:text-primary transition-colors">
                      {article.title}
                    </Link>
                  </CardTitle>
                  <CardDescription>{article.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">{article.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" size="sm">
                    <Link href={`/blog/${article.slug}`}>Read More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
