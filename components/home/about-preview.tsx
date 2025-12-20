import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function AboutPreview() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">About the THET Fund</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              The THET Fund is a national financing mechanism dedicated to enhancing the quality, relevance, and
              accessibility of TVET and higher education in The Gambia. We invest in institutions, educators, and
              learners to improve skills, employability, and innovation across the country.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4"
            >
              Read More
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-muted">
            <img
              src="/11.jpeg"
              alt="THET Fund Board"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
