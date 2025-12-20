import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Briefcase, Wrench, Globe, Monitor, ArrowRight } from "lucide-react"

const programmes = [
  {
    title: "Career Services & Employability Centre Pilot",
    description:
      "Helping students bridge the gap between school and work through career counseling, job placement support, and industry connections.",
    icon: Briefcase,
    status: "Pilot",
    details: [
      "Career counseling and guidance services",
      "CV writing and interview preparation workshops",
      "Industry networking and job fairs",
      "Internship and attachment placements",
      "Graduate tracer studies",
    ],
  },
  {
    title: "Mini-Infrastructure Upgrade Pilot",
    description:
      "Supporting equipment, tools, and ICT improvements in institutions to enhance practical training capabilities.",
    icon: Wrench,
    status: "Pilot",
    details: [
      "Workshop equipment and tools",
      "Laboratory upgrades",
      "ICT infrastructure improvements",
      "Learning resource centres",
      "Safety equipment and compliance",
    ],
  },
  {
    title: "Diaspora Skills Exchange Programme",
    description:
      "Linking Gambian experts abroad with local institutions to share knowledge, skills, and international best practices.",
    icon: Globe,
    status: "Planned",
    details: [
      "Expert guest lectures and workshops",
      "Short-term teaching assignments",
      "Curriculum development support",
      "Mentorship programmes",
      "Research collaboration",
    ],
  },
  {
    title: "Digital Learning and Innovation Pilot",
    description: "Supporting e-learning and digital content development to expand access to quality education.",
    icon: Monitor,
    status: "Pilot",
    details: [
      "E-learning platform development",
      "Digital content creation",
      "Blended learning programmes",
      "Teacher digital skills training",
      "Open educational resources",
    ],
  },
]

export default function ProgrammesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-serif text-4xl font-bold text-primary-foreground sm:text-5xl">
                Programmes & Initiatives
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90">
                Explore our current priority initiatives designed to transform TVET and higher education in The Gambia.
              </p>
            </div>
          </div>
        </section>

        {/* Programmes Grid */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground">Current Priority Initiatives</h2>
              <p className="mt-4 text-muted-foreground">
                Strategic programmes addressing key challenges in skills development and institutional capacity.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {programmes.map((programme) => (
                <Card key={programme.title} className="h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                        <programme.icon className="h-7 w-7 text-primary" />
                      </div>
                      <Badge variant={programme.status === "Pilot" ? "default" : "secondary"}>{programme.status}</Badge>
                    </div>
                    <CardTitle className="mt-4 text-xl">{programme.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{programme.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-sm text-foreground mb-3">Key Activities</h4>
                    <ul className="space-y-2">
                      {programme.details.map((detail, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground">Partner With Us</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Interested in supporting or collaborating on our programmes? We welcome partnerships from government,
              development partners, private sector, and civil society.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/partners" className="gap-2">
                  Become a Partner
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
