import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Building2, Globe, Briefcase, Users, GraduationCap, CheckCircle } from "lucide-react"

const partnerCategories = [
  {
    title: "Government Ministries",
    description: "National and local government partners supporting education policy and implementation.",
    icon: Building2,
    examples: [
      "National",
      "Local",
      "Ministry",
    ],
  },
  {
    title: "Development Partners",
    description: "International organizations and bilateral partners providing funding and technical support.",
    icon: Globe,
    examples: ["Organizations", "International donors", "Partners", "Agencies"],
  },
  {
    title: "Private Sector",
    description: "Companies and industry partners supporting skills development and employment linkages.",
    icon: Briefcase,
    examples: ["Group", "Industry associations", "Training service providers"],
  },
  {
    title: "NGOs & Civil Society",
    description: "Non-governmental organizations working on education, youth, and inclusion.",
    icon: Users,
    examples: ["Youth organizations", "Women's groups", "Disability organizations"],
  },
  {
    title: "Academic Institutions",
    description: "Universities, colleges, and TVET institutions implementing funded programmes.",
    icon: GraduationCap,
    examples: ["University", "Technical Training Institute", "Private colleges"],
  },
  {
    title: "Diaspora Networks",
    description: "Gambian professionals abroad contributing expertise and resources.",
    icon: Globe,
    examples: ["Associations", "Professional networks", "Alumni groups"],
  },
]

const whyPartner = [
  "National impact on education and skills development",
  "Strong governance and transparent fund management",
  "Results-oriented approach with clear accountability",
  "Multi-sector collaboration opportunities",
  "Strategic alignment with national development priorities",
  "Access to a network of education stakeholders",
]

export default function PartnersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-serif text-4xl font-bold text-primary-foreground sm:text-5xl">Partnerships</h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90">
                The THET Fund works with diverse partners across government, development partners, private sector, and
                civil society to transform education in The Gambia.
              </p>
            </div>
          </div>
        </section>

        {/* Our Partners */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground">Our Partners</h2>
              <p className="mt-4 text-muted-foreground">
                We collaborate with a diverse range of stakeholders committed to advancing education and skills
                development.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {partnerCategories.map((category) => (
                <Card key={category.title} className="h-full">
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="mt-4">{category.title}</CardTitle>
                    <CardDescription className="leading-relaxed">{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.examples.map((example, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Partner */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground">Why Partner With Us?</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Partnering with the THET Fund means contributing to the transformation of higher education and TVET in
                  The Gambia. Our partners benefit from strong governance, transparent processes, and meaningful impact.
                </p>
                <ul className="mt-8 space-y-3">
                  {whyPartner.map((reason, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-muted">
                <img
                  src="/5.jpeg"
                  alt="Partnership and collaboration"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Opportunities */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl font-bold text-foreground">Partnership Opportunities</h2>
              <p className="mt-4 text-muted-foreground">
                There are many ways to partner with the THET Fund, from financial contributions to technical support and
                knowledge sharing.
              </p>
              <div className="mt-8 grid gap-6 sm:grid-cols-3 text-left">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Financial Support</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Contribute to specific funding windows or provide general support for fund operations.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Technical Assistance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Provide expertise in education, skills development, M&E, or institutional strengthening.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Industry Linkages</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Connect institutions with employers, provide internships, or support curriculum development.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-bold">Become a Partner</h2>
            <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Interested in partnering with the THET Fund? We welcome conversations about how we can work together to
              transform education in The Gambia.
            </p>
            <Button asChild variant="secondary" size="lg" className="mt-8">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
