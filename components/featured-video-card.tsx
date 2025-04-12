import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import Link from "next/link"

interface FeaturedVideoCardProps {
  title: string
  description: string
  imageUrl: string
  videoUrl: string
  articleUrl?: string
}

export default function FeaturedVideoCard({
  title,
  description,
  imageUrl,
  videoUrl,
  articleUrl
}: FeaturedVideoCardProps) {
  return (
    <Card className="overflow-hidden border-none shadow-lg">
      <div className="relative aspect-video">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <a
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary hover:bg-primary/90 text-white h-16 w-16 flex items-center justify-center transition-transform hover:scale-110"
          >
            <Play className="h-8 w-8 pl-1" />
          </a>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          <Button asChild variant="outline" size="sm">
            <a href={videoUrl} target="_blank" rel="noopener noreferrer">
              Watch on YouTube
            </a>
          </Button>

          {articleUrl && (
            <Button asChild size="sm">
              <Link href={articleUrl}>
                Read Full Story
              </Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
