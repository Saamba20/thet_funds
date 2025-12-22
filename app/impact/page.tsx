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
  Building2,
  Users,
  GraduationCap,
  Banknote,
  FileText,
  Download,
  BarChart3,
  TrendingUp,
} from "lucide-react"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { IMPACT_STATS } from "@/lib/data/impact"

/* -------------------- Data -------------------- */


const metrics = [
  {
    title: "Student Outcomes",
    description:
      "Tracking completion rates, skills acquisition, and certification achievements.",
  },
  {
    title: "Graduate Employability",
    description:
      "Measuring employment rates, job quality, and income outcomes after graduation.",
  },
  {
    title: "Institutional Improvements",
    description:
      "Assessing infrastructure upgrades, governance, and quality assurance systems.",
  },
  {
    title: "Trainer Certifications",
    description:
      "Monitoring professional development, accreditation, and pedagogical capacity.",
  },
  {
    title: "Research Outputs",
    description:
      "Tracking applied research, innovations, publications, and policy contributions.",
  },
]

const reports = [
  {
    name: "Quarterly Reports",
    description: "Regular updates on programme implementation and fund performance.",
    href: "/documents/reports/quarterly-report-q3-2025.pdf",
  },
  {
    name: "Annual Impact Reports",
    description:
      "Comprehensive yearly assessment of outcomes, lessons learned, and results.",
    href: "/documents/reports/annual-impact-report-2024.pdf",
  },
  {
    name: "Tracer Studies",
    description:
      "Follow-up studies tracking graduate employment and labour market outcomes.",
    href: "/documents/reports/graduate-tracer-study.pdf",
  },
  {
    name: "Evaluation Reports",
    description:
      "Independent assessments of programme relevance, effectiveness, and sustainability.",
    href: "/documents/reports/phase-1-evaluation.pdf",
  },
]

/* -------------------- Page -------------------- */

export default function ImpactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* ================= HERO ================= */}
        <section className="bg-primary py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
                Monitoring, Evaluation & Impact
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90">
                We rigorously track performance, outcomes, and learning across all
                funded initiatives to ensure transparency, accountability, and
                measurable results.
              </p>
            </div>
          </div>
        </section>

        {/* ================= IMPACT SNAPSHOT ================= */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-bold text-foreground">
                Impact Snapshot
              </h2>
              <p className="mt-4 text-muted-foreground">
                High-level indicators summarizing our progress in strengthening
                TVET and higher education in The Gambia.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {IMPACT_STATS.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </div>
          </div>
        </section>

        {/* ================= MEL FRAMEWORK ================= */}
        <section className="bg-muted/50 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
              {/* Left */}
              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground">
                  Our MEL Framework
                </h2>
                <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
                  Our Monitoring, Evaluation, and Learning (MEL) framework enables
                  evidence-based decision-making, adaptive management, and
                  continuous improvement across all programmes.
                </p>

                <div className="mt-10 space-y-5">
                  {metrics.map((metric, i) => (
                    <MetricItem key={i} {...metric} />
                  ))}
                </div>
              </div>

              {/* Right */}
              <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-foreground">
                    Impact Dashboard
                  </h3>
                </div>

                <p className="mb-6 text-muted-foreground">
                  In Phase 2, our public-facing impact dashboard will provide
                  real-time insights into programme performance, fund utilization,
                  and outcomes.
                </p>

                <div className="rounded-lg bg-muted/60 p-6 text-center">
                  <p className="text-sm font-medium text-muted-foreground">
                    Dashboard Coming Soon
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Interactive charts, indicators, and downloadable data
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PUBLIC REPORTS ================= */}
        <section
          id="reports"
          className="scroll-mt-24 py-20 lg:py-28"
        >
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-bold text-foreground">
                Public Reports
              </h2>
              <p className="mt-4 text-muted-foreground">
                Access published reports detailing programme performance,
                outcomes, and lessons learned.
              </p>
            </div>

            <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {reports.map((report) => (
                <ReportCard key={report.name} {...report} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

/* -------------------- Components -------------------- */

function StatCard({
  label,
  value,
  note,
  icon: Icon,
}: {
  label: string
  value: number
  note: string
  icon: React.ElementType
}) {
  return (
    <Card className="text-center transition hover:shadow-md">
      <CardHeader>
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
          <Icon className="h-7 w-7 text-primary" />
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-4xl font-bold text-foreground">
          <AnimatedCounter value={value} />
          {value >= 1000 && "+"}
        </p>
        <p className="mt-1 font-medium text-foreground">{label}</p>
        <p className="mt-1 text-xs text-muted-foreground">{note}</p>
      </CardContent>
    </Card>
  )
}

function MetricItem({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
        <BarChart3 className="h-4 w-4 text-primary" />
      </div>
      <div>
        <h4 className="font-medium text-foreground">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

function ReportCard({
  name,
  description,
  href,
}: {
  name: string
  description: string
  href: string
}) {
  return (
    <Card className="group transition hover:shadow-md">
      <CardHeader className="pb-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
          <FileText className="h-5 w-5 text-primary" />
        </div>
        <CardTitle className="mt-3 text-base">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm">
          {description}
        </CardDescription>
        <a
          href={href}
          download
          className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          <Download className="h-4 w-4" />
          Download PDF
        </a>
      </CardContent>
    </Card>
  )
}
