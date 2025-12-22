"use client"

import { useState, useCallback } from "react"
import type React from "react"

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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { toast } from "sonner"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Loader2,
} from "lucide-react"

import { SITE_CONFIG } from "@/lib/constants"

/* -------------------------------------------------------------------------- */
/*                                   Config                                   */
/* -------------------------------------------------------------------------- */

const socialIcons = {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn: Linkedin,
}

const SUBJECT_OPTIONS = [
  { value: "funding", label: "Funding" },
  { value: "partnership", label: "Partnership" },
  { value: "media", label: "Media" },
  { value: "careers", label: "Careers" },
  { value: "general", label: "General Inquiry" },
]

type ContactFormState = {
  name: string
  email: string
  organization: string
  subject: string
  message: string
}

const INITIAL_FORM: ContactFormState = {
  name: "",
  email: "",
  organization: "",
  subject: "",
  message: "",
}

/* -------------------------------------------------------------------------- */
/*                                   Page                                     */
/* -------------------------------------------------------------------------- */

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormState>(INITIAL_FORM)
  const [loading, setLoading] = useState(false)

  /* ----------------------------- Form Handlers ---------------------------- */

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { id, value } = e.target
      setFormData((prev) => ({ ...prev, [id]: value }))
    },
    []
  )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.subject) {
      toast.error("Missing subject", {
        description: "Please select a subject before submitting.",
      })
      return
    }

    try {
      setLoading(true)

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data?.message || "Something went wrong")
      }

      toast.success("Message sent successfully", {
        description:
          "Thank you for contacting the THET Fund. Our team will respond shortly.",
      })

      setFormData(INITIAL_FORM)
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "An unexpected error occurred"

      toast.error("Failed to send message", { description: message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* =============================== HERO =============================== */}
        <section className="relative overflow-hidden bg-primary py-20 lg:py-28">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary" />
          <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
                Contact Us
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/90">
                Have questions about the THET Fund, funding opportunities, or
                partnerships? Our team is ready to assist you.
              </p>
            </div>
          </div>
        </section>

        {/* ============================== CONTENT ============================== */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
              {/* -------------------------- Contact Info -------------------------- */}
              <div>
                <h2 className="font-serif text-3xl font-bold tracking-tight">
                  Get in Touch
                </h2>
                <p className="mt-4 max-w-xl text-muted-foreground leading-relaxed">
                  Whether you are a prospective applicant, partner, or
                  stakeholder, we welcome your inquiries.
                </p>

                <div className="mt-10 space-y-6">
                  <InfoItem icon={MapPin} title="Address">
                    {SITE_CONFIG.address}
                  </InfoItem>

                  <InfoItem icon={Mail} title="Email">
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="hover:text-primary transition-colors"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </InfoItem>

                  <InfoItem icon={Phone} title="Phone">
                    {SITE_CONFIG.phone}
                  </InfoItem>

                  <InfoItem icon={Clock} title="Office Hours">
                    {SITE_CONFIG.openingHours}
                  </InfoItem>
                </div>

                {/* Social Links */}
                <div className="mt-10 flex gap-4">
                  {SITE_CONFIG.socialLinks.map((item) => {
                    const Icon =
                      socialIcons[item.name as keyof typeof socialIcons]

                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`THET Fund ${item.name}`}
                        className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-muted-foreground transition hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    )
                  })}
                </div>
              </div>

              {/* ----------------------------- Form ----------------------------- */}
              <Card className="shadow-sm transition hover:shadow-md">
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                  <CardDescription>
                    Complete the form below and we will respond as soon as
                    possible.
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field
                        label="Full Name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                      <Field
                        label="Email"
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    <Field
                      label="Organization"
                      id="organization"
                      value={formData.organization}
                      onChange={handleChange}
                    />

                    <div className="space-y-2">
                      <Label>Subject *</Label>
                      <Select
                        value={formData.subject}
                        onValueChange={(value) =>
                          setFormData((prev) => ({
                            ...prev,
                            subject: value,
                          }))
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          {SUBJECT_OPTIONS.map((item) => (
                            <SelectItem key={item.value} value={item.value}>
                              {item.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="h-12 w-full"
                      disabled={loading}
                      aria-busy={loading}
                    >
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending message…
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* =============================== MAP =============================== */}
        <section className="bg-muted/40 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mb-10 text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight">
                Our Location
              </h2>
              <p className="mt-3 text-muted-foreground">
                Visit the THET Fund Secretariat in Bijilo.
              </p>
            </div>

            <div className="mx-auto aspect-[2/1] max-w-5xl overflow-hidden rounded-xl shadow">
              <iframe
                title="THET Fund Location"
                src="https://www.google.com/maps?q=Ministry%20of%20Higher%20Education%20Research%20Science%20and%20Technology%20Bijilo%20Gambia&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*                                 Helpers                                    */
/* -------------------------------------------------------------------------- */

function InfoItem({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div>
        <p className="font-medium text-foreground">{title}</p>
        <p className="text-muted-foreground leading-relaxed">{children}</p>
      </div>
    </div>
  )
}

function Field({
  label,
  id,
  type = "text",
  required,
  value,
  onChange,
}: {
  label: string
  id: string
  type?: string
  required?: boolean
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>
        {label} {required && "*"}
      </Label>
      <Input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
