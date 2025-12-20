"use client"

import { useState } from "react"
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

const initialForm = {
  name: "",
  email: "",
  organization: "",
  subject: "",
  message: "",
}

export default function ContactPage() {
  const [formData, setFormData] = useState(initialForm)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.subject) {
      toast.error("Missing subject", {
        description: "Please select a subject.",
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
        throw new Error(data.message || "Something went wrong")
      }

      toast.success("Message sent 🎉", {
        description: "We’ll get back to you shortly.",
      })

      setFormData(initialForm)
    } catch (error: any) {
      toast.error("Failed to send message", {
        description: error.message,
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary py-20">
          <div className="mx-auto max-w-7xl px-4">
            <h1 className="text-4xl font-bold text-primary-foreground">
              Contact Us
            </h1>
            <p className="mt-4 max-w-2xl text-primary-foreground/90">
              Have questions about the THET Fund? Reach out and our team will
              respond as soon as possible.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 grid gap-16 lg:grid-cols-2">
            {/* Info */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>

              <div className="space-y-6 mt-8">
                <InfoItem icon={MapPin} title="Address">
                  Ministry of Higher Education, Research, Science and Technology,
                  Bijilo, The Gambia
                </InfoItem>

                <InfoItem icon={Mail} title="Email">
                  <a
                    href="mailto:info@thetfund.gm"
                    className="hover:text-primary"
                  >
                    info@thetfund.gm
                  </a>
                </InfoItem>

                <InfoItem icon={Phone} title="Phone">
                  +220 XXX XXXX
                </InfoItem>

                <InfoItem icon={Clock} title="Office Hours">
                  Monday – Friday, 8:00 AM – 5:00 PM
                </InfoItem>
              </div>

              <div className="flex gap-4 mt-10">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <div
                    key={i}
                    className="h-10 w-10 flex items-center justify-center rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition"
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>
                  Fill in the form and we’ll respond promptly.
                </CardDescription>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
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
                      onValueChange={(v) =>
                        setFormData((p) => ({ ...p, subject: v }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="funding">Funding</SelectItem>
                        <SelectItem value="partnership">
                          Partnership
                        </SelectItem>
                        <SelectItem value="media">Media</SelectItem>
                        <SelectItem value="careers">Careers</SelectItem>
                        <SelectItem value="general">General</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <Button className="w-full" disabled={loading}>
                    {loading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="font-serif text-2xl font-bold text-foreground">
                Our Location
              </h2>
              <p className="mt-2 text-muted-foreground">
                Visit us at the THET Fund Secretariat
              </p>
            </div>

            <div className="aspect-[2/1] max-w-5xl mx-auto overflow-hidden rounded-xl shadow">
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

/* ---------- Small Helpers ---------- */

function InfoItem({
  icon: Icon,
  title,
  children,
}: {
  icon: any
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="flex gap-4">
      <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary/10">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-muted-foreground">{children}</p>
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
}: any) {
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
