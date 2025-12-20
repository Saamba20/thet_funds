import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Users, GraduationCap, Heart, Lightbulb, Building2, CheckCircle, ArrowRight } from "lucide-react"

const fundingWindows = [
  {
    id: "youth",
    title: "Youth Employability & Entrepreneurship Fund",
    description:
      "A flagship fund supporting youth skills training, start-up development, internships, apprenticeships, and industry partnerships.",
    icon: Users,
    status: "active",
    focusAreas: [
      "Short-term vocational training",
      "Entrepreneurial skills",
      "Industry-linked apprenticeships",
      "Start-up grants",
    ],
    eligibility: "Accredited institutions, youth-focused organizations, NGOs, private sector partners.",
  },
  {
    id: "trainer",
    title: "Trainer & Lecturer Development Fund",
    description: "Supports capacity-building for educators across TVET and higher education.",
    icon: GraduationCap,
    status: "active",
    focusAreas: [
      "Instructor certification",
      "Pedagogy training",
      "Technical upgrading",
      "Digital teaching skills",
      "Exchange programmes",
    ],
    eligibility: "TVET and higher education institutions, individual educators with institutional endorsement.",
  },
  {
    id: "women",
    title: "Women & Inclusion Skills Initiative",
    description: "A dedicated fund for women, girls, and persons with disabilities.",
    icon: Heart,
    status: "coming-soon",
    focusAreas: [
      "Entry-level skills",
      "Leadership training",
      "Technology and digital skills",
      "Inclusive learning environments",
    ],
    eligibility: "Organizations working with women, girls, and persons with disabilities.",
  },
  {
    id: "research",
    title: "Research, Innovation & Digital Transformation Fund",
    description:
      "Supporting applied research, innovation labs, digital learning systems, and institutional modernization.",
    icon: Lightbulb,
    status: "coming-soon",
    focusAreas: [
      "Applied research projects",
      "Innovation labs and incubators",
      "Digital learning platforms",
      "Institutional modernization",
    ],
    eligibility: "Higher education institutions, research centers, and innovation hubs.",
  },
  {
    id: "infrastructure",
    title: "Institutional Support & Infrastructure Upgrade Fund",
    description: "Financing equipment, workshops, laboratories, ICT modernization, and mini-infrastructure upgrades.",
    icon: Building2,
    status: "coming-soon",
    focusAreas: [
      "Laboratory equipment",
      "Workshop tools and machinery",
      "ICT infrastructure",
      "Learning environment improvements",
    ],
    eligibility: "Accredited public and private TVET and higher education institutions.",
  },
]

export default function FundingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-serif text-4xl font-bold text-primary-foreground sm:text-5xl">Funding Windows</h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90">
                The THET Fund provides competitive, transparent, and results-oriented funding to support skills
                development, institutional strengthening, innovation, and employability in The Gambia.
              </p>
              <Button asChild className="mt-8" variant="secondary" size="lg">
                <Link href="/funding/apply" className="gap-2">
                  Apply for Funding
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Funding Windows */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="space-y-12">
              {fundingWindows.map((window) => (
                <Card key={window.id} id={window.id} className="overflow-hidden scroll-mt-24">
                  <div className="grid lg:grid-cols-3">
                    <CardHeader className="lg:col-span-1 bg-muted/30">
                      <div className="flex items-start justify-between">
                        <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                          <window.icon className="h-7 w-7 text-primary" />
                        </div>
                        {window.status === "coming-soon" && <Badge variant="secondary">Coming Soon</Badge>}
                        {window.status === "active" && (
                          <Badge className="bg-accent text-accent-foreground">Active</Badge>
                        )}
                      </div>
                      <CardTitle className="mt-4 text-xl">{window.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">{window.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="lg:col-span-2 p-6 lg:p-8">
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Focus Areas</h4>
                          <ul className="space-y-2">
                            {window.focusAreas.map((area, index) => (
                              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                                {area}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Eligibility</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{window.eligibility}</p>
                          {window.status === "active" && (
                            <Button asChild className="mt-4" size="sm">
                              <Link href="/funding/apply">Apply Now</Link>
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground">Ready to Apply?</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Review our application guidelines and submit your proposal through the THET Fund portal.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/funding/apply">Start Your Application</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/resources">Download Guidelines</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
