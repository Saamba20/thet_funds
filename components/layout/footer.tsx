import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { SITE_CONFIG } from "@/lib/constants"

const footerLinks = {
  quickLinks: [
    { name: "About Us", href: "/about" },
    { name: "Board of Trustees", href: "/about/board" },
    { name: "Programmes", href: "/programmes" },
    { name: "Impact", href: "/impact" },
  ],
  funding: [
    { name: "Funding Windows", href: "/funding" },
    { name: "Apply for Funding", href: "/funding/apply" },
    { name: "Grant Guidelines", href: "/resources" },
    { name: "FAQs", href: "/funding/apply#faqs" },
  ],
  resources: [
    { name: "Document Library", href: "/resources" },
    { name: "Templates", href: "/resources#templates" },
    { name: "Annual Reports", href: "/impact#reports" },
    { name: "News & Media", href: "/news" },
  ],
  policies: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Use", href: "/terms" },
    { name: "Accessibility", href: "/accessibility" },
  ],
}

const socialIcons = {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn: Linkedin,
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl font-bold">THET Fund</span>
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/80 leading-relaxed">
              {SITE_CONFIG.description}
            </p>
            <div className="mt-6 flex gap-4">
              {SITE_CONFIG.socialLinks.map((item) => {
                const Icon = socialIcons[item.name as keyof typeof socialIcons]
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    <span className="sr-only">{item.name}</span>
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Funding */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Funding</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.funding.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Resources</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Contact Us</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.address}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-primary-foreground transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`} className="hover:text-primary-foreground transition-colors">
                  {SITE_CONFIG.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-sm text-primary-foreground/70">
            © {new Date().getFullYear()} THET Fund. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
