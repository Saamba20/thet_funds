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
        <section className="relative bg-primary py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent)] pointer-events-none" />
          <div className="mx-auto max-w-7xl px-4 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <h1 className="font-serif text-4xl font-bold text-primary-foreground sm:text-5xl lg:text-6xl tracking-tight">
                News & Media
              </h1>
              <p className="mt-6 text-lg lg:text-xl leading-relaxed text-primary-foreground/80 font-light max-w-2xl">
                The latest updates, press releases, and announcements from the Tertiary and Higher Education Trust Fund.
              </p>
            </div>
          </div>
        </section>

        {/* Featured News */}
        <section className="py-16 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div className="max-w-2xl">
                <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">Featured Stories</h2>
                <p className="mt-3 text-muted-foreground text-lg">
                  Key highlights and top stories highlighting our impact and progress.
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {featuredNews.map((item) => (
                <Card key={item.id} className="group flex flex-col h-full border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                  <div className="relative h-60 sm:h-64 w-full overflow-hidden rounded-t-xl bg-muted">
                    <Image
                      src={item.image || "/9.jpeg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm shadow-sm text-[10px] uppercase tracking-wider">
                        {item.category}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-4 pt-6">
                    <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-3">
                      <Calendar className="h-3.5 w-3.5 text-primary" />
                      {item.date}
                    </div>
                    <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors line-clamp-2">
                      <Link href={`/news/${item.id}`}>{item.title}</Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col px-6 pb-6 pt-0">
                    <CardDescription className="text-sm leading-relaxed flex-1 text-muted-foreground line-clamp-3">
                      {item.description}
                    </CardDescription>
                    <Link
                      href={`/news/${item.id}`}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary group/link hover:underline underline-offset-4"
                    >
                      Read full article 
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* All News */}
        <section className="py-20 lg:py-28 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-2xl mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">News Stream</h2>
              <p className="mt-4 text-muted-foreground text-lg">
                Explore our full archive of news, notices, and press releases.
              </p>
            </div>

            <Tabs defaultValue="All" className="w-full">
              <div className="overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
                <TabsList className="inline-flex h-12 items-center justify-start sm:justify-center rounded-lg bg-muted p-1 text-muted-foreground mb-2 sm:mb-10 min-w-full sm:min-w-0">
                  {categories.map((category) => (
                    <TabsTrigger 
                      key={category} 
                      value={category}
                      className="rounded-md px-6 py-2 text-sm font-medium transition-all data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm whitespace-nowrap"
                    >
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {categories.map((category) => (
                <TabsContent key={category} value={category} className="mt-6 sm:mt-0 outline-none">
                  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {(category === "All" ? allNews : allNews.filter((item) => item.category === category)).map(
                      (item) => (
                        <Link key={item.id} href={`/news/${item.id}`} className="group h-full">
                          <Card className="flex flex-col h-full border-border/50 overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                            <div className="relative h-52 w-full overflow-hidden bg-muted">
                              <Image
                                src={item.image || "/9.jpeg"}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                              <div className="absolute top-4 left-4">
                                <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm text-[10px] py-0 px-2 uppercase tracking-wide">
                                  {item.category}
                                </Badge>
                              </div>
                            </div>

                            <CardHeader className="pb-3 pt-6 px-6">
                              <div className="flex items-center gap-2 text-[11px] font-semibold text-primary uppercase tracking-wider mb-2">
                                <Calendar className="h-3 w-3" />
                                {item.date}
                              </div>
                              <CardTitle className="text-lg leading-snug group-hover:text-primary transition-colors line-clamp-2">
                                {item.title}
                              </CardTitle>
                            </CardHeader>

                            <CardContent className="flex-1 flex flex-col px-6 pb-6">
                              <CardDescription className="text-sm leading-relaxed flex-1 line-clamp-3 mb-6">
                                {item.description}
                              </CardDescription>
                              <div className="flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                                Read article <ArrowRight className="h-4 w-4" />
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
