import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Download, BookOpen, ClipboardList } from "lucide-react"

const documents = [
  {
    category: "governance",
    items: [
      { name: "Strategic Plan", description: "THET Fund strategic direction and priorities 2024-2028", href: "/documents/resources/strategic-plan.pdf" },
      { name: "Operational Manual", description: "Guidelines for fund operations and procedures", href: "/documents/resources/operational-manual.pdf" },
      { name: "Risk Management Framework", description: "Risk identification, assessment, and mitigation strategies", href: "/documents/resources/risk-management.pdf" },
      { name: "Procurement Manual", description: "Procurement policies and procedures for grant recipients", href: "/documents/resources/procurement-manual.pdf" },
    ],
  },
  {
    category: "mel",
    items: [
      { name: "MEL Framework", description: "Monitoring, Evaluation, and Learning methodology", href: "/documents/resources/mel-framework.pdf" },
      { name: "Results Framework", description: "Indicators and targets for measuring impact", href: "/documents/resources/results-framework.pdf" },
      { name: "Data Collection Tools", description: "Standard tools for project monitoring", href: "/documents/resources/data-collection-tools.pdf" },
    ],
  },
  {
    category: "inclusion",
    items: [
      { name: "Gender & Inclusion Strategy", description: "Approach to ensuring equitable access and outcomes", href: "/documents/resources/inclusion-strategy.pdf" },
      { name: "Disability Inclusion Guidelines", description: "Standards for inclusive programming", href: "/documents/resources/disability-guidelines.pdf" },
      { name: "Safeguarding Policy", description: "Protecting beneficiaries and stakeholders", href: "/documents/resources/safeguarding-policy.pdf" },
    ],
  },
  {
    category: "reports",
    items: [
      { name: "Annual Impact Report 2024", description: "Comprehensive overview of fund activities and impact", href: "/documents/reports/annual-impact-report-2024.pdf" },
      { name: "Quarterly Report Q3 2025", description: "Progress update for July-September 2025", href: "/documents/reports/quarterly-report-q3-2025.pdf" },
      { name: "Graduate Tracer Study", description: "Follow-up studies tracking graduate employment outcomes", href: "/documents/reports/graduate-tracer-study.pdf" },
      { name: "Phase 1 Evaluation", description: "Independent assessment of programme effectiveness", href: "/documents/reports/phase-1-evaluation.pdf" },
    ],
  },
]

const templates = [
  { name: "Grant Proposal Template", description: "Standard format for project proposals", icon: FileText, href: "/documents/templates/grant-proposal.pdf" },
  { name: "Budget Template", description: "Financial planning spreadsheet for applications", icon: ClipboardList, href: "/documents/templates/budget-template.xlsx" },
  { name: "Progress Report Template", description: "Quarterly reporting format for grantees", icon: FileText, href: "/documents/templates/progress-report.pdf" },
  { name: "Final Report Template", description: "Project completion report format", icon: FileText, href: "/documents/templates/final-report.pdf" },
  { name: "Financial Report Template", description: "Expenditure tracking and reporting", icon: ClipboardList, href: "/documents/templates/financial-report.xlsx" },
  { name: "Procurement Request Form", description: "Standard procurement documentation", icon: ClipboardList, href: "/documents/templates/procurement-request.pdf" },
]

export default function ResourcesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-serif text-4xl font-bold text-primary-foreground sm:text-5xl">Resources</h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90">
                Access our document library, templates, and guidelines to support your engagement with the THET Fund.
              </p>
            </div>
          </div>
        </section>

        {/* Document Library */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground">Document Library</h2>
              <p className="mt-4 text-muted-foreground">
                Key documents, policies, and frameworks guiding the THET Fund operations.
              </p>
            </div>

            <Tabs defaultValue="governance" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="governance">Governance</TabsTrigger>
                <TabsTrigger value="mel">MEL</TabsTrigger>
                <TabsTrigger value="inclusion">Inclusion</TabsTrigger>
                <TabsTrigger value="reports">Reports</TabsTrigger>
              </TabsList>
              {documents.map((category) => (
                <TabsContent key={category.category} value={category.category} className="mt-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {category.items.map((doc) => (
                      <Card key={doc.name} className="group hover:shadow-md transition-shadow">
                        <CardHeader className="pb-3">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                              <BookOpen className="h-5 w-5 text-primary" />
                            </div>
                            <CardTitle className="text-base">{doc.name}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-sm">{doc.description}</CardDescription>
                          <Button
                            variant="ghost"
                            size="sm"
                            asChild
                            className="mt-3 gap-2 p-0 h-auto text-primary hover:text-primary hover:bg-transparent"
                          >
                            <a href={(doc as any).href} download>
                              <Download className="h-4 w-4" />
                              Download PDF
                            </a>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Templates */}
        <section id="templates" className="py-16 lg:py-24 bg-muted/50 scroll-mt-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground">Templates</h2>
              <p className="mt-4 text-muted-foreground">
                Downloadable proposal and reporting templates for grant applicants and recipients.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              {templates.map((template) => (
                <Card key={template.name} className="group hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <template.icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-base">{template.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">{template.description}</CardDescription>
                    <Button variant="ghost" size="sm" asChild className="mt-3 gap-2 p-0 h-auto text-primary hover:text-primary hover:bg-transparent">
                      <a href={template.href} download>
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

        {/* Need Help */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground">Need Help?</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Contact our team if you need assistance finding resources or have questions about documentation.
            </p>
            <Button asChild className="mt-8" size="lg">
              <a href="mailto:info@thetfund.gm">Contact Support</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
