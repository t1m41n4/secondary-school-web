"use client"

import React from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

// Sample blog data
const articles = [
  {
    id: "1",
    title: "Global Teacher Prize Winner",
    excerpt: "How Brother Peter Tabichi has transformed Keriko Secondary School and won the prestigious Global Teacher Prize.",
    slug: "peter-tabichi-global-teacher",
    date: "March 15, 2023",
    category: "News",
    image: "/images/blog/teacher-prize.jpg",
    isExternal: false, // Internal link
  },
  {
    id: "2",
    title: "Science Fair Success",
    excerpt: "Our students showcase innovative projects at the National Science Fair and secure top positions.",
    slug: "https://www.standardmedia.co.ke/article/2001326003/kenyan-school-girls-sh100-invention-wins-un-award", // External URL
    date: "June 3, 2023",
    category: "Events",
    image: "/images/blog/science-fair.jpg",
    isExternal: true, // Mark as external
  },
  {
    id: "3",
    title: "New Computer Lab Inauguration",
    excerpt: "State-of-the-art computer lab established to enhance digital literacy among students.",
    slug: "https://www.safaricomfoundation.org/project/keriko-mixed-secondary-school-nakuru-county/", // External URL
    date: "August 22, 2023",
    category: "Facilities",
    image: "/images/blog/computer-lab.jpg",
    isExternal: true, // Mark as external
  },
]

export default function FeaturedArticles() {
  return (
    <section className="py-12 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Latest Updates</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Stay informed about school news, events, and achievements.
            </p>
          </div>
          <Button asChild className="hidden md:flex mt-4 md:mt-0" variant="outline">
            <Link href="/blog/all">View All Posts</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => {
            const linkProps = article.isExternal
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {};
            const href = article.isExternal ? article.slug : `/blog/${article.slug}`;

            return (
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
                    <Link href={href} className="hover:text-primary transition-colors" {...linkProps}>
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
                    <Link href={href} {...linkProps}>Read More</Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        <div className="flex justify-center mt-8 md:hidden">
          <Button asChild>
            <Link href="/blog/all">View All Posts</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

