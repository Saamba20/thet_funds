import { IMPACT_STATS } from "@/lib/data/impact"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { Card, CardContent } from "@/components/ui/card"

export function ImpactSnapshot() {
  return (
    <section className="bg-muted/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
            Impact Snapshot
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            High-level indicators highlighting our progress in strengthening
            higher education and TVET in The Gambia.
          </p>
        </div>

        {/* Stats */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {IMPACT_STATS.map((stat) => (
            <Card
              key={stat.label}
              className="group relative overflow-hidden rounded-xl border border-border bg-card
                         transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <CardContent className="p-8 text-center">
                {/* Icon */}
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 transition group-hover:bg-primary/15">
                  <stat.icon
                    aria-hidden="true"
                    className="h-7 w-7 text-primary"
                  />
                </div>

                {/* Value */}
                <p className="mt-6 text-4xl font-bold tracking-tight text-foreground">
                  <AnimatedCounter value={stat.value} />
                  {stat.value >= 1000 && "+"}
                </p>

                {/* Label */}
                <p className="mt-2 font-medium text-foreground">
                  {stat.label}
                </p>

                {/* Note */}
                {stat.note && (
                  <p className="mt-1 text-xs text-muted-foreground">
                    {stat.note}
                  </p>
                )}
              </CardContent>

              {/* Subtle hover highlight */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity
                           group-hover:opacity-100
                           bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.04),transparent_60%)]"
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
