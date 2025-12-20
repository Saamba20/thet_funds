import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { FileText, Download } from "lucide-react"

const applicationSteps = [
  {
    step: 1,
    title: "Review Eligibility Criteria",
    description: "Ensure your organization meets the requirements for the funding window you're applying to.",
  },
  {
    step: 2,
    title: "Download Guidelines and Templates",
    description: "Access the grant guidelines, proposal template, and budget template from our resources section.",
  },
  {
    step: 3,
    title: "Prepare Proposal and Budget",
    description: "Develop a comprehensive proposal following the guidelines and complete the budget template.",
  },
  {
    step: 4,
    title: "Submit Through THET Portal",
    description: "Upload your completed application through the online submission portal.",
  },
  {
    step: 5,
    title: "Application Review",
    description: "Applications are reviewed by the Grants Committee based on established criteria.",
  },
  {
    step: 6,
    title: "Notification of Results",
    description: "Successful applicants are notified and provided with grant agreement details.",
  },
  {
    step: 7,
    title: "Fund Disbursement",
    description: "Funds are disbursed based on agreed milestones and reporting requirements.",
  },
]

const downloads = [
  { name: "Grant Guidelines", description: "Comprehensive guide to the application process", icon: FileText },
  { name: "Proposal Template", description: "Standard template for project proposals", icon: FileText },
  { name: "Budget Template", description: "Financial planning template for grant applications", icon: FileText },
  { name: "M&E Reporting Template", description: "Monitoring and evaluation reporting format", icon: FileText },
  { name: "Procurement Forms", description: "Required forms for procurement activities", icon: FileText },
]

const faqs = [
  {
    question: "Who is eligible to apply for THET Fund grants?",
    answer:
      "Eligibility varies by funding window. Generally, accredited TVET and higher education institutions, youth-focused organizations, NGOs, and private sector partners working in education and skills development can apply. Please review the specific eligibility criteria for each funding window.",
  },
  {
    question: "What is the typical grant amount?",
    answer:
      "Grant amounts vary depending on the funding window and project scope. The Youth Employability Fund supports projects ranging from smaller skills training initiatives to larger institutional partnerships. Specific budget ranges are outlined in the grant guidelines.",
  },
  {
    question: "How long does the application review process take?",
    answer:
      "The review process typically takes 6-8 weeks from the application deadline. Applicants will receive acknowledgment of receipt within 5 business days and final notification after the Grants Committee completes its review.",
  },
  {
    question: "Can organizations apply for multiple funding windows?",
    answer:
      "Yes, organizations may submit applications to multiple funding windows if they meet the eligibility criteria for each. However, each application must be submitted separately with distinct project proposals.",
  },
  {
    question: "What are the reporting requirements for grant recipients?",
    answer:
      "Grant recipients are required to submit quarterly progress reports, financial reports, and a final completion report. The M&E Reporting Template provides the standard format for all reports.",
  },
  {
    question: "Is co-financing required?",
    answer:
      "Co-financing is encouraged but not always mandatory. Some funding windows may require applicants to demonstrate institutional commitment through co-financing. Details are provided in the specific grant guidelines.",
  },
]

export default function ApplyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-serif text-4xl font-bold text-primary-foreground sm:text-5xl">Apply for Funding</h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90">
                The THET Fund offers competitive grants based on national priorities, institutional needs, and labour
                market relevance. Follow our streamlined application process to submit your proposal.
              </p>
            </div>
          </div>
        </section>

        {/* How Funding Works */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl font-bold text-foreground">How Funding Works</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our application process is designed to be transparent, efficient, and accessible.
              </p>
            </div>

            <div className="mt-12 max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border hidden sm:block" />

                <div className="space-y-8">
                  {applicationSteps.map((item, index) => (
                    <div key={item.step} className="relative flex gap-6">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold z-10">
                        {item.step}
                      </div>
                      <div className="flex-1 pt-2">
                        <h3 className="font-semibold text-lg text-foreground">{item.title}</h3>
                        <p className="mt-1 text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Downloads */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-serif text-3xl font-bold text-foreground">Downloads</h2>
              <p className="mt-4 text-muted-foreground">
                Access all the documents you need to prepare your application.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
              {downloads.map((doc) => (
                <Card key={doc.name} className="group hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <doc.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-base">{doc.name}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">{doc.description}</CardDescription>
                    <Button variant="ghost" size="sm" className="mt-3 gap-2 p-0 h-auto text-primary hover:text-primary">
                      <Download className="h-4 w-4" />
                      Download
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section id="faqs" className="py-16 lg:py-24 scroll-mt-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center">
                <h2 className="font-serif text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
                <p className="mt-4 text-muted-foreground">
                  Answers to common questions about eligibility, timelines, reporting, and compliance.
                </p>
              </div>

              <Accordion type="single" collapsible className="mt-10">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-bold">Ready to Submit Your Application?</h2>
            <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Have questions? Contact our grants team at grants@thetfund.gm
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link href="/funding">View Funding Windows</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground bg-transparent"
                asChild
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
