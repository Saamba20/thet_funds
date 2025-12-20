import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Users, GraduationCap, Banknote, FileText, Download, BarChart3, TrendingUp } from "lucide-react"

const stats = [
  { label: "Institutions Supported", value: "0", note: "To be updated", icon: Building2 },
  { label: "Trainers Developed", value: "0", note: "To be updated", icon: GraduationCap },
  { label: "Youth Beneficiaries", value: "0", note: "To be updated", icon: Users },
  { label: "Grants Awarded", value: "0", note: "To be updated", icon: Banknote },
]

const metrics = [
  { title: "Student Outcomes", description: "Tracking completion rates, skills acquisition, and certification" },
  { title: "Graduate Employability", description: "Measuring employment rates and income levels post-graduation" },
  { title: "Institutional Improvements", description: "Assessing infrastructure, capacity, and quality enhancements" },
  { title: "Trainer Certifications", description: "Monitoring professional development and qualifications" },
  { title: "Research Outputs", description: "Tracking publications, innovations, and applied research projects" },
]

const reports = [
  { name: "Quarterly Reports", description: "Regular updates on fund activities and progress" },
  { name: "Annual Impact Reports", description: "Comprehensive yearly assessment of outcomes and achievements" },
  { name: "Tracer Studies", description: "Follow-up studies on graduate employment and outcomes" },
  { name: "Evaluation Reports", description: "Independent assessments of programme effectiveness" },
]

export default function ImpactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-serif text-4xl font-bold text-primary-foreground sm:text-5xl">
                Monitoring, Evaluation & Impact
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90">
                We track performance and outcomes across all funded projects to ensure transparency, accountability, and
                continuous learning.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground">Impact Snapshot</h2>
              <p className="mt-4 text-muted-foreground">
                Key metrics tracking our progress in transforming education in The Gambia.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <Card key={stat.label} className="text-center">
                  <CardHeader>
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                      <stat.icon className="h-7 w-7 text-primary" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-4xl font-bold text-foreground">{stat.value}</p>
                    <p className="mt-1 font-medium text-foreground">{stat.label}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{stat.note}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* MEL Framework */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground">Our MEL Framework</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Our Monitoring, Evaluation, and Learning (MEL) framework ensures that we track outcomes, learn from
                  implementation, and continuously improve our programmes.
                </p>
                <div className="mt-8">
                  <h3 className="font-semibold text-foreground mb-4">What We Measure</h3>
                  <div className="space-y-4">
                    {metrics.map((metric, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                          <BarChart3 className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">{metric.title}</h4>
                          <p className="text-sm text-muted-foreground">{metric.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-card border border-border rounded-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <TrendingUp className="h-8 w-8 text-primary" />
                  <h3 className="font-serif text-2xl font-bold text-foreground">Impact Dashboard</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Our interactive impact dashboard (Phase 2) will provide real-time metrics showing how funds are being
                  used and their results.
                </p>
                <div className="bg-muted/50 rounded-lg p-6 text-center">
                  <p className="text-sm text-muted-foreground">Dashboard Coming Soon</p>
                  <p className="text-xs text-muted-foreground mt-1">Interactive metrics and visualizations</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Public Reports */}
        <section id="reports" className="py-16 lg:py-24 scroll-mt-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground">Public Reports</h2>
              <p className="mt-4 text-muted-foreground">
                Access our reports to learn about the impact and outcomes of THET Fund investments.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
              {reports.map((report) => (
                <Card key={report.name} className="group hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-base mt-3">{report.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">{report.description}</CardDescription>
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
      </main>
      <Footer />
    </div>
  )
}
