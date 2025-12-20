"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

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

export default function BoardPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-serif text-4xl font-bold text-primary-foreground sm:text-5xl">Board of Trustees</h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90">
                The Board of Trustees is the governing body of the THET Fund. It provides strategic direction, ensures
                good governance, approves funding decisions, and safeguards the integrity and accountability of the
                Fund.
              </p>
            </div>
          </div>
        </section>

        {/* Role of the Board */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground">Role of the Board</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  The Board of Trustees ensures that the THET Fund operates with the highest standards of governance,
                  transparency, and effectiveness.
                </p>
                <ul className="mt-6 space-y-3">
                  {boardRoles.map((role, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{role}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-muted">
                <img
                  src="/8.jpeg"
                  alt="Board meeting in progress"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Board Members */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-serif text-3xl font-bold text-foreground">Our Trustees</h2>
              <p className="mt-4 text-muted-foreground">
                Meet the distinguished leaders guiding the THET Fund towards its mission.
              </p>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {boardMembers.map((member, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto h-32 w-32 overflow-hidden rounded-full bg-muted">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <CardTitle className="mt-4">{member.name}</CardTitle>
                    <CardDescription>
                      <span className="font-medium text-primary">{member.role}</span>
                      <br />
                      {member.organization}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
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
