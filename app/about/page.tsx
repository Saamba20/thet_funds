"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Target, Eye, Heart, Users, Lightbulb, Award, ArrowRight } from "lucide-react"

const coreValues = [
  {
    title: "Integrity",
    description: "We uphold transparency and accountability in all our operations.",
    icon: Award,
  },
  {
    title: "Equity",
    description: "We promote inclusive access for all learners regardless of background.",
    icon: Users,
  },
  {
    title: "Innovation",
    description: "We champion creativity and future-ready solutions.",
    icon: Lightbulb,
  },
  {
    title: "Collaboration",
    description: "We work with partners across sectors to maximize impact.",
    icon: Heart,
  },
  {
    title: "Results Orientation",
    description: "We deliver measurable and meaningful impact.",
    icon: Target,
  },
]

const mandateItems = [
  "Improve the quality and relevance of education and training",
  "Promote employability, entrepreneurship, and innovation",
  "Strengthen institutional capacity across TVET and higher education",
  "Support research, digital transformation, and skills for the future",
  "Provide sustainable and equitable financing for the sector",
]

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-serif text-4xl font-bold text-primary-foreground sm:text-5xl">Who We Are</h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90">
                The Tertiary and Higher Education Trust (THET) Fund is a national financing mechanism established to
                strengthen and transform The Gambia&apos;s TVET and higher education ecosystem.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground">About the THET Fund</h2>
                <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    The THET Fund mobilizes, manages, and allocates resources to support quality teaching, skills
                    development, innovation, and institutional excellence across public and accredited private
                    institutions.
                  </p>
                  <p>
                    We invest in people, institutions, and systems to ensure that all learners—regardless of gender,
                    ability, or background—have access to relevant and high-quality education that leads to meaningful
                    employment and national development.
                  </p>
                </div>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-muted">
                <img
                  src="/7.jpeg"
                  alt="University campus in The Gambia"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Mandate */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl font-bold text-foreground">Our Mandate</h2>
              <p className="mt-4 text-lg text-muted-foreground">The THET Fund exists to:</p>
            </div>
            <div className="mt-10 max-w-2xl mx-auto">
              <ul className="space-y-4">
                {mandateItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold text-sm">
                      {index + 1}
                    </span>
                    <span className="text-foreground pt-1">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3">
                    <Eye className="h-8 w-8 text-primary" />
                    <h3 className="font-serif text-2xl font-bold text-foreground">Vision</h3>
                  </div>
                  <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                    A world-class, inclusive, and sustainable higher education and TVET system that empowers every
                    Gambian to thrive.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-accent">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3">
                    <Target className="h-8 w-8 text-accent" />
                    <h3 className="font-serif text-2xl font-bold text-foreground">Mission</h3>
                  </div>
                  <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                    To mobilize and invest resources strategically to enhance quality, innovation, and skills
                    development across tertiary and higher education.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-serif text-3xl font-bold">Core Values</h2>
              <p className="mt-4 text-lg text-primary-foreground/80">
                The principles that guide our work and define our commitment to excellence.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {coreValues.map((value) => (
                <div key={value.title} className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground/10">
                    <value.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="mt-4 font-semibold text-lg">{value.title}</h3>
                  <p className="mt-2 text-sm text-primary-foreground/80">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground">Meet Our Leadership</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn about the Board of Trustees who provide strategic direction and governance for the THET Fund.
            </p>
            <Button asChild className="mt-8" size="lg">
              <Link href="/about/board" className="gap-2">
                Board of Trustees
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
