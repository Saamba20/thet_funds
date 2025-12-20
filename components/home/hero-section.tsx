"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const images = ["/11.jpeg", "/9.jpeg", "/7.jpeg"]

export function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative overflow-hidden bg-primary">
      {/* Background Carousel */}
      {images.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 bg-cover bg-center transition-opacity  duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url('${img}')` }}
        />
      ))}
      
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/97 via-primary/50 " />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="max-w-3xl">
          <h1 className="font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl text-balance">
            Investing in Skills, Knowledge, and Infrastructure Development for The Gambia&apos;s Future
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90 sm:text-xl">
            The Tertiary and Higher Education Trust (THET) Fund provides strategic financing to strengthen TVET and
            higher education institutions, empower learners, and support national development through skills, research,
            and innovation.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/funding/apply" className="gap-2">
                Apply for Funding
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground bg-transparent"
              asChild
            >
              <Link href="/about">Learn About the Fund</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
