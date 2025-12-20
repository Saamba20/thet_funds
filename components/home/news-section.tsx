import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"

const newsItems = [
  {
    title: "Call for Proposals: Youth Employability Fund",
    description:
      "Applications are now open for the Youth Employability & Entrepreneurship Fund. Submit your proposals to support youth skills development.",
    date: "Coming Soon",
    category: "Announcement",
    href: "/news/youth-fund-call",
  },
  {
    title: "Inauguration of the THET Fund Board of Trustees",
    description:
      "The THET Fund officially inaugurated its Board of Trustees, marking a significant milestone in strengthening higher education financing.",
    date: "December 2024",
    category: "Press Release",
    href: "/news/board-inauguration",
  },
  {
    title: "National TVET & Higher Education Stakeholders Forum",
    description:
      "Join us for a national forum bringing together stakeholders to discuss the future of TVET and higher education in The Gambia.",
    date: "Upcoming",
    category: "Event",
    href: "/news/stakeholders-forum",
  },
  {
    title: "We are Actively Recruiting - Vacancies Available",
    description:
      "The THET Fund Secretariat is expanding. Explore career opportunities and join our team in transforming education in The Gambia.",
    date: "Open",
    category: "Notice",
    href: "/news/vacancies",
  },
]

export function NewsSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">Latest News & Announcements</h2>
            <p className="mt-2 text-lg text-muted-foreground">Stay updated with the latest from THET Fund.</p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/news">View All Announcements</Link>
          </Button>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {newsItems.map((item) => (
            <Card key={item.title} className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Badge variant="outline">{item.category}</Badge>
                  <span className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {item.date}
                  </span>
                </div>
                <CardTitle className="mt-3 text-lg group-hover:text-primary transition-colors">
                  <Link href={item.href}>{item.title}</Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
