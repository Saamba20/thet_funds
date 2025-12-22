import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
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
        {/* Navigation Breadcrumb */}
        <div className="bg-background py-6 border-b border-border/50">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <Link 
              href="/news" 
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors group"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to News & Media
            </Link>
          </div>
        </div>

        {/* Article Hero Section */}
        <section className="py-10 lg:py-16">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <Badge variant="secondary" className="px-3 py-0.5 text-[10px] sm:text-xs font-semibold tracking-wider uppercase">
                  {newsItem.category}
                </Badge>
                <div className="h-1 w-1 rounded-full bg-border" />
                <span className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5 text-primary" />
                  {newsItem.date}
                </span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl lg:leading-[1.15] font-bold text-foreground mb-8 sm:mb-10 tracking-tight">
                {newsItem.title}
              </h1>
            </div>

            {/* Featured Image */}
            {newsItem.image && (
              <div className="relative aspect-square sm:aspect-video lg:aspect-[21/9] w-full overflow-hidden rounded-xl sm:rounded-2xl shadow-xl shadow-primary/5 bg-muted mb-10 sm:mb-12">
                <Image
                  src={newsItem.image}
                  alt={newsItem.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-16 lg:pb-28">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <div className="grid gap-10 lg:gap-12">
              <div className="prose prose-slate prose-sm sm:prose-base lg:prose-lg prose-primary max-w-none">
                {/* Summary Box */}
                <div className="relative p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-primary/[0.03] border border-primary/10 mb-8 sm:mb-12 overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                  <p className="text-lg sm:text-xl leading-relaxed text-foreground font-medium italic m-0">
                    &ldquo;{newsItem.description}&rdquo;
                  </p>
                </div>

                {/* Content Body */}
                <div
                  className="article-content space-y-6 text-muted-foreground leading-relaxed selection:bg-primary/10"
                  dangerouslySetInnerHTML={{ __html: newsItem.content || "" }}
                />
              </div>

              {/* Share & Footer Section */}
              <div className="pt-8 sm:pt-10 border-t border-border/60">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 bg-muted/30 p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-border/50">
                  <div className="max-w-md text-center sm:text-left">
                    <h3 className="text-lg font-bold text-foreground mb-1">Share this update</h3>
                    <p className="text-sm text-muted-foreground">Spread the word about our latest news and announcements with your professional network.</p>
                  </div>
                  <ShareButton title={newsItem.title} description={newsItem.description} id={newsItem.id} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related News */}
        <section className="py-16 lg:py-28 bg-muted/40 border-t border-border/50">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <div className="flex items-center justify-between mb-8 sm:mb-10">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground tracking-tight">Keep Reading</h2>
              <Link href="/news" className="text-sm font-semibold text-primary hover:underline whitespace-nowrap">View all news →</Link>
            </div>
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
              {getAllNews()
                .filter((item) => item.id !== id)
                .slice(0, 2)
                .map((item) => (
                  <Link key={item.id} href={`/news/${item.id}`} className="group block">
                    <Card className="flex flex-col h-full border-border/50 overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                      <div className="relative aspect-[16/9] w-full overflow-hidden">
                        <Image
                          src={item.image || "/9.jpeg"}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <CardHeader className="p-5 sm:p-6">
                        <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider font-bold text-primary mb-3">
                          {item.category}
                        </div>
                        <CardTitle className="text-base sm:text-lg leading-snug group-hover:text-primary transition-colors line-clamp-2">
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                    </Card>
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
