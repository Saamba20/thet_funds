"use client";

import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Target,
  Eye,
  Heart,
  Users,
  Lightbulb,
  Award,
  ArrowRight,
} from "lucide-react";

/* -------------------- Data -------------------- */

const coreValues = [
  {
    title: "Integrity",
    description:
      "We uphold transparency and accountability in all our operations.",
    icon: Award,
  },
  {
    title: "Equity",
    description:
      "We promote inclusive access for all learners regardless of background.",
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
];

const mandateItems = [
  "Improve the quality and relevance of education and training",
  "Promote employability, entrepreneurship, and innovation",
  "Strengthen institutional capacity across TVET and higher education",
  "Support research, digital transformation, and skills for the future",
  "Provide sustainable and equitable financing for the sector",
];

/* -------------------- Page -------------------- */

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden bg-primary py-20 lg:py-28">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary" />
          <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
                Who We Are
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/90">
                The Tertiary and Higher Education Trust (THET) Fund is a
                national financing mechanism established to strengthen and
                transform The Gambia&apos;s TVET and higher education ecosystem.
              </p>
            </div>
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
              <div>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground">
                  About the THET Fund
                </h2>
                <div className="mt-6 space-y-5 max-w-xl text-muted-foreground leading-relaxed">
                  <p>
                    The THET Fund mobilizes, manages, and allocates resources to
                    support quality teaching, skills development, innovation,
                    and institutional excellence across public institutions.
                  </p>
                  <p>
                    We invest in people, institutions, and systems to ensure
                    that all learners—regardless of gender, ability, or
                    background— have access to relevant and high-quality
                    education that leads to meaningful employment and national
                    development.
                  </p>
                </div>
              </div>

              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-muted shadow-sm">
                <img
                  src="/7.jpeg"
                  alt="THET-supported tertiary education campus in The Gambia"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* ================= MANDATE ================= */}
        <section className="bg-muted/40 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight">
                Our Mandate
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                The THET Fund exists to:
              </p>
            </div>

            <div className="mx-auto mt-12 max-w-2xl">
              <ul className="space-y-5">
                {mandateItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                      {index + 1}
                    </span>
                    <span className="pt-1 leading-relaxed text-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* ================= VISION & MISSION ================= */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="border-l-4 border-l-primary transition hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3">
                    <Eye className="h-8 w-8 text-primary" />
                    <h3 className="font-serif text-2xl font-bold">Vision</h3>
                  </div>
                  <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted-foreground">
                    A world-class, inclusive, and sustainable higher education
                    and TVET system that empowers every Gambian to thrive.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-accent transition hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3">
                    <Target className="h-8 w-8 text-accent" />
                    <h3 className="font-serif text-2xl font-bold">Mission</h3>
                  </div>
                  <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted-foreground">
                    To mobilize and invest resources strategically to enhance
                    quality, innovation, and skills development across tertiary
                    and higher education.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* ================= CORE VALUES ================= */}
        <section className="relative bg-primary py-20 lg:py-28 text-primary-foreground overflow-hidden">
          {/* Decorative background glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-white/5 blur-2xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-bold">Core Values</h2>
              <p className="mt-4 text-lg text-primary-foreground/80">
                The principles that guide our work and define our commitment to
                excellence.
              </p>
            </div>

            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
              {coreValues.map((value) => (
                <div
                  key={value.title}
                  className="
            group relative rounded-2xl
            border border-white/20
            bg-white/10
            p-6 text-center
            backdrop-blur-md
            shadow-sm
            transition-all duration-300
            hover:-translate-y-1
            hover:bg-white/15
            hover:shadow-lg
          "
                >
                  {/* Icon */}
                  <div
                    className="
              mx-auto flex h-14 w-14 items-center justify-center
              rounded-full
              bg-white/20
              text-primary-foreground
              shadow-inner
              transition-transform duration-300
              group-hover:scale-110
            "
                  >
                    <value.icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold">{value.title}</h3>

                  <p className="mt-2 text-sm leading-relaxed text-primary-foreground/80">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-bold">
              Meet Our Leadership
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Learn about the Board of Trustees who provide strategic direction
              and governance for the THET Fund.
            </p>

            <Button
              asChild
              size="lg"
              className="mt-8 px-8 shadow-md transition hover:shadow-lg"
            >
              <Link href="/about/board" className="flex items-center gap-2">
                Board of Trustees
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>

            <p className="mt-3 text-sm text-muted-foreground">
              Governance • Transparency • Strategic Leadership
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
