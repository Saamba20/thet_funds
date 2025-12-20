import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getAllNews } from "@/lib/news"

const newsItems = getAllNews()

const categories = ["All", "Announcement", "Press Release", "Event", "Notice"]

export default function NewsPage() {
  const featuredNews = newsItems.filter((item) => item.featured)
  const allNews = newsItems

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-serif text-4xl font-bold text-primary-foreground sm:text-5xl">News & Media</h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90">
                Stay updated with the latest news, announcements, press releases, and events from the THET Fund.
              </p>
            </div>
          </div>
        </section>

        {/* Featured News */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Featured</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredNews.map((item) => (
                <Card key={item.id} className="group hover:shadow-lg transition-shadow h-full flex flex-col">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="outline">{item.category}</Badge>
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {item.date}
                      </span>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      <Link href={`/news/${item.id}`}>{item.title}</Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <CardDescription className="leading-relaxed flex-1">{item.description}</CardDescription>
                    <Link
                      href={`/news/${item.id}`}
                      className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline underline-offset-4"
                    >
                      Read more <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* All News */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8">All News & Updates</h2>

            <Tabs defaultValue="All" className="w-full">
              <TabsList className="mb-8">
                {categories.map((category) => (
                  <TabsTrigger key={category} value={category}>
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>

              {categories.map((category) => (
                <TabsContent key={category} value={category}>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {(category === "All" ? allNews : allNews.filter((item) => item.category === category)).map(
                      (item) => (
                        <Link key={item.id} href={`/news/${item.id}`}>
                          <Card className="group hover:shadow-lg transition-shadow h-full flex flex-col overflow-hidden cursor-pointer">
                            {/* Image Container */}
                            <div className="relative h-56 w-full overflow-hidden bg-muted">
                              <Image
                                src={item.image || "/9.jpeg"}
                                alt={item.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>

                            <CardHeader className="pb-3">
                              <div className="flex items-center gap-2 mb-2 flex-wrap">
                                <Badge variant="outline" className="text-xs">
                                  {item.category}
                                </Badge>
                                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                                  <Calendar className="h-3 w-3" />
                                  {item.date}
                                </span>
                              </div>
                              <CardTitle className="text-base group-hover:text-primary transition-colors line-clamp-2">
                                {item.title}
                              </CardTitle>
                            </CardHeader>

                            <CardContent className="flex-1 flex flex-col pb-4">
                              <CardDescription className="text-sm leading-relaxed flex-1 line-clamp-3 mb-4">
                                {item.description}
                              </CardDescription>
                              <div className="inline-flex items-center gap-1 text-sm font-medium text-primary self-start">
                                Read more <ArrowRight className="h-4 w-4" />
                              </div>
                            </CardContent>
                          </Card>
                        </Link>
                      ),
                    )}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Media Contact */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground">Media Inquiries</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              For press inquiries, interview requests, or media information, please contact our communications team.
            </p>
            <p className="mt-6 text-primary font-medium">
              <a href="mailto:info@thetfund.gm" className="hover:underline underline-offset-4">
                info@thetfund.gm
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
