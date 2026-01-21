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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"
import { FileText, Download, ArrowRight } from "lucide-react"

const applicationSteps = [
  {
    step: 1,
    title: "Review Eligibility Criteria",
    description:
      "Confirm that your institution or organisation meets the eligibility requirements for the selected funding window.",
  },
  {
    step: 2,
    title: "Download Guidelines & Templates",
    description:
      "Access official grant guidelines, proposal templates, and budget formats before preparing your submission.",
  },
  {
    step: 3,
    title: "Prepare Proposal & Budget",
    description:
      "Develop a clear, results-focused proposal aligned with THET Fund priorities and complete the budget template.",
  },
  {
    step: 4,
    title: "Submit via THET Portal",
    description:
      "Upload all required documents through the official THET Fund online submission system.",
  },
  {
    step: 5,
    title: "Technical & Committee Review",
    description:
      "Applications undergo technical screening and independent review by the Grants Committee.",
  },
  {
    step: 6,
    title: "Notification of Results",
    description:
      "Applicants are formally notified of funding decisions and next steps.",
  },
  {
    step: 7,
    title: "Grant Agreement & Disbursement",
    description:
      "Successful applicants sign grant agreements and receive funds based on approved milestones.",
  },
]

const downloads = [
  {
    name: "Grant Guidelines",
    description: "Complete rules, eligibility criteria, and assessment framework",
    href: "/documents/THET-Grant-Guidelines.pdf",
  },
  {
    name: "Proposal Template",
    description: "Standard format for technical project proposals",
    href: "/documents/THET-Proposal-Template.docx",
  },
  {
    name: "Budget Template",
    description: "Financial planning and cost breakdown template",
    href: "/documents/THET-Budget-Template.xlsx",
  },
  {
    name: "M&E Reporting Template",
    description: "Monitoring and evaluation reporting format",
    href: "/documents/THET-ME-Reporting-Template.docx",
  },
  {
    name: "Procurement Forms",
    description: "Required procurement documentation",
    href: "/documents/THET-Procurement-Forms.zip",
  },
]

const faqs = [
  {
    question: "Who is eligible to apply for THET Fund grants?",
    answer:
      "Eligibility depends on the funding window. In general, accredited TVET and higher education institutions, NGOs, youth-focused organisations, and private sector partners involved in skills development may apply.",
  },
  {
    question: "What is the typical grant size?",
    answer:
      "Grant amounts vary by funding window and project scope. Indicative budget ranges are published in the Grant Guidelines.",
  },
  {
    question: "How long does the review process take?",
    answer:
      "The review process typically takes between 6–8 weeks from the application deadline.",
  },
  {
    question: "Can an organisation apply for multiple funding windows?",
    answer:
      "Yes. Organisations may apply to more than one funding window, provided separate proposals are submitted for each.",
  },
  {
    question: "What reporting is required after approval?",
    answer:
      "Grant recipients submit quarterly technical and financial reports, plus a final completion report using THET Fund templates.",
  },
]

export default function ApplyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-serif text-4xl font-bold text-primary-foreground sm:text-5xl">
                Apply for Funding
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90">
                The THET Fund provides competitive, merit-based grants aligned with
                national skills priorities and labour market needs.
              </p>

              <div className="mt-8">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/funding" className="gap-2">
                    View Funding Windows
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-bold">
                Application Process
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                A clear, transparent, and competitive process designed for efficiency and fairness.
              </p>
            </div>

            <div className="mt-14 mx-auto max-w-4xl space-y-8">
              {applicationSteps.map((step) => (
                <div key={step.step} className="flex gap-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Downloads */}
        <section className="bg-muted/50 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-serif text-3xl font-bold">
                Application Documents
              </h2>
              <p className="mt-4 text-muted-foreground">
                Download all required documents before submitting your application.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
              {downloads.map((doc) => (
                <Card
                  key={doc.name}
                  className="group transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-base">
                        {doc.name}
                      </CardTitle>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <CardDescription>
                      {doc.description}
                    </CardDescription>

                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="mt-3 gap-2 p-0 text-primary"
                    >
                      <a
                        href={doc.href}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Download className="h-4 w-4" />
                        Download
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="text-center">
                <h2 className="font-serif text-3xl font-bold">
                  Frequently Asked Questions
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Common questions about eligibility, timelines, and compliance.
                </p>
              </div>

              <Accordion type="single" collapsible className="mt-10">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`}>
                    <AccordionTrigger>
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-20 text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
            <h2 className="font-serif text-3xl font-bold">
              Need Further Guidance?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Contact the THET Fund Grants Team at{" "}
              <a
                href="mailto:grants@thetfund.gm"
                className="underline underline-offset-4"
              >
                grants@thetfund.gm
              </a>
            </p>

            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <Button asChild size="lg" variant="secondary">
                <Link href="/funding">Funding Windows</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-primary border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
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
