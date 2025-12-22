import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Users,
  GraduationCap,
  Heart,
  Lightbulb,
  Building2,
  CheckCircle,
  ArrowRight,
  Download,
} from "lucide-react"

const fundingWindows = [
  {
    id: "youth",
    title: "Youth Employability & Entrepreneurship Fund",
    description:
      "A flagship funding window supporting youth skills development, start-up creation, apprenticeships, and industry partnerships.",
    icon: Users,
    status: "active",
    focusAreas: [
      "Short-term vocational training",
      "Entrepreneurial and business skills",
      "Industry-linked apprenticeships",
      "Start-up and innovation grants",
    ],
    eligibility:
      "Accredited institutions, youth-focused organizations, NGOs, and private sector partners.",
  },
  {
    id: "trainer",
    title: "Trainer & Lecturer Development Fund",
    description:
      "Supports professional development and capacity building for educators across TVET and higher education.",
    icon: GraduationCap,
    status: "active",
    focusAreas: [
      "Instructor certification",
      "Pedagogy and curriculum development",
      "Technical upskilling",
      "Digital teaching competencies",
      "Academic exchange programmes",
    ],
    eligibility:
      "TVET and higher education institutions, and individual educators with institutional endorsement.",
  },
  {
    id: "women",
    title: "Women & Inclusion Skills Initiative",
    description:
      "Dedicated funding to promote skills development and inclusion for women, girls, and persons with disabilities.",
    icon: Heart,
    status: "coming-soon",
    focusAreas: [
      "Entry-level employability skills",
      "Leadership and empowerment training",
      "Technology and digital inclusion",
      "Accessible learning environments",
    ],
    eligibility:
      "Organizations working with women, girls, and persons with disabilities.",
  },
  {
    id: "research",
    title: "Research, Innovation & Digital Transformation Fund",
    description:
      "Supports applied research, innovation hubs, digital learning systems, and institutional modernization.",
    icon: Lightbulb,
    status: "coming-soon",
    focusAreas: [
      "Applied research projects",
      "Innovation labs and incubators",
      "Digital learning platforms",
      "Institutional digital transformation",
    ],
    eligibility:
      "Higher education institutions, research centers, and innovation hubs.",
  },
  {
    id: "infrastructure",
    title: "Institutional Support & Infrastructure Upgrade Fund",
    description:
      "Financing equipment, laboratories, ICT systems, and targeted infrastructure improvements.",
    icon: Building2,
    status: "coming-soon",
    focusAreas: [
      "Laboratory and workshop equipment",
      "ICT infrastructure upgrades",
      "Learning space improvements",
      "Specialized training facilities",
    ],
    eligibility:
      "Accredited public and private TVET and higher education institutions.",
  },
]

export default function FundingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-serif text-4xl font-bold text-primary-foreground sm:text-5xl">
                Funding Windows
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90">
                Competitive, transparent, and results-oriented financing to
                strengthen skills development, innovation, and employability in
                The Gambia.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/funding/apply" className="gap-2">
                    Apply for Funding
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>

                <Button asChild size="lg" variant="outline">
                  <a
                    href="/documents/THET-Fund-Application-Guidelines.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="gap-2"
                  >
                    Download Guidelines (PDF)
                    <Download className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Funding Windows */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl space-y-12 px-4 lg:px-8">
            {fundingWindows.map((window) => (
              <Card
                key={window.id}
                id={window.id}
                className="group scroll-mt-24 overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="grid lg:grid-cols-3">
                  <CardHeader className="bg-muted/40">
                    <div className="flex items-start justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                        <window.icon className="h-7 w-7 text-primary" />
                      </div>

                      {window.status === "active" ? (
                        <Badge className="bg-accent text-accent-foreground">
                          Open
                        </Badge>
                      ) : (
                        <Badge variant="secondary">Coming Soon</Badge>
                      )}
                    </div>

                    <CardTitle className="mt-4 text-xl">
                      {window.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {window.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="lg:col-span-2 p-6 lg:p-8">
                    <div className="grid gap-8 sm:grid-cols-2">
                      <div>
                        <h4 className="mb-3 font-semibold">
                          Focus Areas
                        </h4>
                        <ul className="space-y-2">
                          {window.focusAreas.map((area) => (
                            <li
                              key={area}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                              {area}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="mb-3 font-semibold">
                          Eligibility
                        </h4>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {window.eligibility}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-3">
                          {window.status === "active" && (
                            <Button asChild size="sm">
                              <Link href="/funding/apply">Apply Now</Link>
                            </Button>
                          )}

                          <Button asChild size="sm" variant="outline">
                            <a
                              href="/documents/THET-Fund-Application-Guidelines.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              download
                              className="gap-2"
                            >
                              Download PDF
                              <Download className="h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-muted/50 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
            <h2 className="font-serif text-3xl font-bold">
              Ready to Apply?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Download the application guidelines and submit your proposal
              through the THET Fund application portal.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/funding/apply">Start Application</Link>
              </Button>

              <Button asChild size="lg" variant="outline">
                <a
                  href="/documents/THET-Fund-Application-Guidelines.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="gap-2"
                >
                  Download Guidelines (PDF)
                  <Download className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
