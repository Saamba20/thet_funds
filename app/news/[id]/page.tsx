import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getNewsById, getAllNews } from "@/lib/news"
import { ShareButton } from "@/components/news/share-button"

export default async function NewsDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const newsItem = getNewsById(id)

  if (!newsItem) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center py-16">
            <h1 className="text-4xl font-bold text-foreground mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-8">The news article you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/news">
              <Button>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to News
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Back Button */}
        <div className="bg-muted/50 py-4">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <Link href="/news" className="inline-flex items-center gap-2 text-primary hover:underline underline-offset-4">
              <ArrowLeft className="h-4 w-4" />
              Back to News
            </Link>
          </div>
        </div>

        {/* Article Hero Section */}
        <section className="py-8 lg:py-12 border-b">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <Badge>{newsItem.category}</Badge>
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {newsItem.date}
                </span>
              </div>
              <h1 className="font-serif text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                {newsItem.title}
              </h1>
            </div>

            {/* Featured Image */}
            {newsItem.image && (
              <div className="relative h-96 w-full overflow-hidden rounded-lg bg-muted mb-8">
                <Image
                  src={newsItem.image}
                  alt={newsItem.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <div className="prose prose-sm lg:prose-base max-w-none">
              {/* Summary */}
              <div className="bg-muted/50 p-6 rounded-lg mb-8 border">
                <p className="text-base lg:text-lg leading-relaxed text-foreground m-0">
                  {newsItem.description}
                </p>
              </div>

              {/* Full Content */}
              <div
                className="space-y-6 text-muted-foreground leading-relaxed"
                dangerouslySetInnerHTML={{ __html: newsItem.content || "" }}
              />
            </div>

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Share this article</h3>
                  <p className="text-sm text-muted-foreground">Help others stay informed about this news</p>
                </div>
                <ShareButton title={newsItem.title} description={newsItem.description} id={newsItem.id} />
              </div>
            </div>
          </div>
        </section>

        {/* Related News */}
        <section className="py-12 lg:py-16 bg-muted/50 border-t">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Related News</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {getAllNews()
                .filter((item) => item.id !== id && item.category === newsItem.category)
                .slice(0, 2)
                .map((item) => (
                  <Link key={item.id} href={`/news/${item.id}`}>
                    <div className="group h-full p-6 rounded-lg border hover:border-primary hover:shadow-md transition-all cursor-pointer bg-background">
                      <Badge className="mb-3">{item.category}</Badge>
                      <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                        {item.description}
                      </p>
                      <span className="text-sm text-primary font-medium">Read more →</span>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
