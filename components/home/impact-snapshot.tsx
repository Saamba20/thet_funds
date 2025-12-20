import { Building2, Users, GraduationCap, Banknote } from "lucide-react"

const stats = [
  {
    label: "Institutions Supported",
    value: "0",
    note: "To be updated",
    icon: Building2,
  },
  {
    label: "Trainers Developed",
    value: "0",
    note: "To be updated",
    icon: GraduationCap,
  },
  {
    label: "Youth Beneficiaries",
    value: "0",
    note: "To be updated",
    icon: Users,
  },
  {
    label: "Grants Awarded",
    value: "0",
    note: "To be updated",
    icon: Banknote,
  },
]

export function ImpactSnapshot() {
  return (
    <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl font-bold sm:text-4xl">Impact Snapshot</h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Tracking our progress in transforming higher education and TVET in The Gambia.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground/10">
                <stat.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="mt-4">
                <p className="text-4xl font-bold">{stat.value}</p>
                <p className="mt-1 text-sm font-medium">{stat.label}</p>
                <p className="mt-1 text-xs text-primary-foreground/60">{stat.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
