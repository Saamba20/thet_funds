"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

/* -------------------- Data -------------------- */

const boardRoles = [
  "Approve strategic plans, budgets, and funding priorities",
  "Oversee governance, transparency, and risk management",
  "Ensure alignment with national development priorities",
  "Approve grants and funding awards",
  "Monitor performance and impact",
]

const boardMembers = [
  {
    name: "Mr. Muhammed Jah",
    role: "Chairperson",
    organization: "Founder, QGroup",
    bio: "A renowned Gambian entrepreneur and philanthropist, Mr. Jah brings decades of private sector leadership and a deep commitment to national development.",
    image: "/muhammed-jah.png",
  },
  {
    name: "Board Member",
    role: "Trustee",
    organization: "To be announced",
    bio: "Additional board member information will be added when confirmed.",
    image: "/board-member-placeholder.png",
  },
  {
    name: "Board Member",
    role: "Trustee",
    organization: "To be announced",
    bio: "Additional board member information will be added when confirmed.",
    image: "/board-member-placeholder.png",
  },
  {
    name: "Board Member",
    role: "Trustee",
    organization: "To be announced",
    bio: "Additional board member information will be added when confirmed.",
    image: "/board-member-placeholder.png",
  },
]

/* -------------------- Page -------------------- */

export default function BoardPage() {
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
                Board of Trustees
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/90">
                The Board of Trustees is the governing body of the THET Fund. It
                provides strategic direction, ensures sound governance, approves
                funding decisions, and safeguards the integrity and
                accountability of the Fund.
              </p>
            </div>
          </div>
        </section>

        {/* ================= ROLE OF THE BOARD ================= */}
        <section className="bg-muted/40 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
              <div>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground">
                  Role of the Board
                </h2>
                <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
                  The Board of Trustees ensures that the THET Fund operates with
                  the highest standards of governance, transparency, and
                  effectiveness in line with national priorities.
                </p>

                <ul className="mt-8 space-y-4">
                  {boardRoles.map((role, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="leading-relaxed text-foreground">
                        {role}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-muted shadow-sm">
                <img
                  src="/8.jpeg"
                  alt="THET Fund Board of Trustees meeting"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* ================= BOARD MEMBERS ================= */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground">
                Our Trustees
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Distinguished leaders providing oversight, stewardship, and
                strategic guidance to the THET Fund.
              </p>
            </div>

            <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {boardMembers.map((member, index) => (
                <Card
                  key={index}
                  className="text-center transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <CardHeader>
                    <div className="mx-auto h-32 w-32 overflow-hidden rounded-full bg-muted shadow-inner">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    <CardTitle className="mt-5 text-lg">
                      {member.name}
                    </CardTitle>

                    <CardDescription className="mt-1">
                      <span className="font-medium text-primary">
                        {member.role}
                      </span>
                      <br />
                      <span className="text-sm">{member.organization}</span>
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
