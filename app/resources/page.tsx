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
      { name: "Strategic Plan", description: "THET Fund strategic direction and priorities 2024-2028" },
      { name: "Operational Manual", description: "Guidelines for fund operations and procedures" },
      { name: "Risk Management Framework", description: "Risk identification, assessment, and mitigation strategies" },
      { name: "Procurement Manual", description: "Procurement policies and procedures for grant recipients" },
    ],
  },
  {
    category: "mel",
    items: [
      { name: "MEL Framework", description: "Monitoring, Evaluation, and Learning methodology" },
      { name: "Results Framework", description: "Indicators and targets for measuring impact" },
      { name: "Data Collection Tools", description: "Standard tools for project monitoring" },
    ],
  },
  {
    category: "inclusion",
    items: [
      { name: "Gender & Inclusion Strategy", description: "Approach to ensuring equitable access and outcomes" },
      { name: "Disability Inclusion Guidelines", description: "Standards for inclusive programming" },
      { name: "Safeguarding Policy", description: "Protecting beneficiaries and stakeholders" },
    ],
  },
  {
    category: "reports",
    items: [
      { name: "Annual Report 2024", description: "Comprehensive overview of fund activities and impact" },
      { name: "Quarterly Report Q1 2024", description: "Progress update for January-March 2024" },
      { name: "Financial Statements", description: "Audited financial reports" },
    ],
  },
]

const templates = [
  { name: "Grant Proposal Template", description: "Standard format for project proposals", icon: FileText },
  { name: "Budget Template", description: "Financial planning spreadsheet for applications", icon: ClipboardList },
  { name: "Progress Report Template", description: "Quarterly reporting format for grantees", icon: FileText },
  { name: "Final Report Template", description: "Project completion report format", icon: FileText },
  { name: "Financial Report Template", description: "Expenditure tracking and reporting", icon: ClipboardList },
  { name: "Procurement Request Form", description: "Standard procurement documentation", icon: ClipboardList },
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
                            className="mt-3 gap-2 p-0 h-auto text-primary hover:text-primary"
                          >
                            <Download className="h-4 w-4" />
                            Download PDF
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
