"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

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

import {
  Briefcase,
  Wrench,
  Globe,
  Monitor,
  ArrowRight,
  CheckCircle,
} from "lucide-react"

/* -------------------- Data -------------------- */

const heroImages = ["/12.jpeg", "/11.jpeg", "/9.jpeg"]

const programmes = [
  {
    title: "Career Services & Employability Centre Pilot",
    description:
      "Supporting students to transition effectively from education to employment through structured career guidance, job placement support, and industry engagement.",
    icon: Briefcase,
    status: "Pilot",
    details: [
      "Career counseling and guidance services",
      "CV writing and interview preparation workshops",
      "Industry networking events and job fairs",
      "Internship and industrial attachment placements",
      "Graduate tracer studies and employability tracking",
    ],
  },
  {
    title: "Mini-Infrastructure Upgrade Pilot",
    description:
      "Targeted support for equipment, tools, and ICT upgrades to strengthen hands-on training and institutional capacity.",
    icon: Wrench,
    status: "Pilot",
    details: [
      "Workshop tools and equipment provision",
      "Laboratory refurbishment and upgrades",
      "ICT infrastructure improvements",
      "Learning resource centres development",
      "Safety equipment and compliance support",
    ],
  },
  {
    title: "Diaspora Skills Exchange Programme",
    description:
      "Mobilising Gambian professionals in the diaspora to share expertise, strengthen institutions, and promote global best practices.",
    icon: Globe,
    status: "Planned",
    details: [
      "Expert guest lectures and masterclasses",
      "Short-term teaching and advisory assignments",
      "Curriculum review and development support",
      "Mentorship and coaching programmes",
      "Joint research and innovation collaboration",
    ],
  },
  {
    title: "Digital Learning & Innovation Pilot",
    description:
      "Expanding access to quality education through digital platforms, blended learning models, and innovation in teaching delivery.",
    icon: Monitor,
    status: "Pilot",
    details: [
      "E-learning platform development",
      "Digital learning content creation",
      "Blended and flexible learning programmes",
      "Teacher digital pedagogy training",
      "Open Educational Resources (OER) adoption",
    ],
  },
]

/* -------------------- Page -------------------- */

export default function ProgrammesPage() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* ================= HERO (Carousel) ================= */}
        <section className="relative h-[70vh] min-h-[520px] overflow-hidden">
          {heroImages.map((src, i) => (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                i === current ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={src}
                alt="THET Fund programmes"
                fill
                priority={i === 0}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
            </div>
          ))}

          <div className="relative z-10 flex h-full items-center">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
              <div className="max-w-3xl">
                <h1 className="font-serif text-4xl font-bold text-white sm:text-5xl">
                  Programmes & Initiatives
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-white/90">
                  Strategic investments strengthening TVET and higher education,
                  improving employability outcomes, and supporting institutional
                  transformation across The Gambia.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Button asChild size="lg">
                    <Link href="/funding" className="gap-2">
                      Apply for Funding
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-black hover:bg-white/10"
                  >
                    <Link href="/impact">View Impact</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PROGRAMMES ================= */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-bold">
                Current Priority Programmes
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Flagship initiatives addressing skills development, innovation,
                and institutional capacity.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {programmes.map((programme) => (
                <Card
                  key={programme.title}
                  className="h-full transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                        <programme.icon className="h-7 w-7 text-primary" />
                      </div>

                      <Badge
                        variant={
                          programme.status === "Pilot"
                            ? "default"
                            : "secondary"
                        }
                        className={
                          programme.status === "Pilot"
                            ? "bg-accent text-accent-foreground"
                            : ""
                        }
                      >
                        {programme.status}
                      </Badge>
                    </div>

                    <CardTitle className="mt-4 text-xl">
                      {programme.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {programme.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                      Key Activities
                    </h4>
                    <ul className="space-y-2">
                      {programme.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
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

        {/* ================= CTA ================= */}
        <section className="bg-muted/50 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-bold">
              Partner With Us
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              We collaborate with government, development partners, the private
              sector, and civil society to deliver high-impact programmes.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/partners" className="gap-2">
                  Become a Partner
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
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
