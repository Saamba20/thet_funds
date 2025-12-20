import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, GraduationCap, Heart, Lightbulb, Building2 } from "lucide-react"

const fundingWindows = [
  {
    title: "Youth Employability & Entrepreneurship Fund",
    description: "Supporting short-term skills training, enterprise development, and industry-linked youth employment.",
    icon: Users,
    status: "active",
    href: "/funding#youth",
  },
  {
    title: "Trainer & Lecturer Development Fund",
    description:
      "Professional development, certifications, scholarships, and capacity-building for instructors and lecturers.",
    icon: GraduationCap,
    status: "active",
    href: "/funding#trainer",
  },
  {
    title: "Women & Inclusion Skills Initiative",
    description: "Empowering women, girls, and persons with disabilities with targeted education and skills support.",
    icon: Heart,
    status: "coming-soon",
    href: "/funding#women",
  },
  {
    title: "Research, Innovation & Digital Transformation Fund",
    description:
      "Supporting applied research, innovation projects, and digital modernization in tertiary institutions.",
    icon: Lightbulb,
    status: "coming-soon",
    href: "/funding#research",
  },
  {
    title: "Institutional Support & Infrastructure Upgrade Fund",
    description: "Enhancing laboratories, workshops, ICT infrastructure, and learning environments.",
    icon: Building2,
    status: "coming-soon",
    href: "/funding#infrastructure",
  },
]

export function FundingWindows() {
  return (
    <section className="py-16 lg:py-24 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">Funding Windows</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore our competitive, transparent, and results-oriented funding opportunities.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {fundingWindows.map((window) => (
            <Card key={window.title} className="relative group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <window.icon className="h-6 w-6 text-primary" />
                  </div>
                  {window.status === "coming-soon" && <Badge variant="secondary">Coming Soon</Badge>}
                </div>
                <CardTitle className="mt-4 text-lg">{window.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">{window.description}</CardDescription>
                <Link
                  href={window.href}
                  className="mt-4 inline-block text-sm font-medium text-primary hover:underline underline-offset-4"
                >
                  Learn more →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/funding">Explore All Funding Windows</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
