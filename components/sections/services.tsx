import { Lightbulb, Laptop, TrendingUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"

const services = [
  {
    icon: Lightbulb,
    title: "Strategy Consulting",
    description:
      "We define the roadmap that gets you from where you are to where you want to be.",
  },
  {
    icon: Laptop,
    title: "Digital Solutions",
    description:
      "Modern websites, apps, and automations built for real-world business needs.",
  },
  {
    icon: TrendingUp,
    title: "Growth Marketing",
    description:
      "Data-driven campaigns that bring the right customers through your door.",
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-muted/40 py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <Badge variant="secondary" className="mb-3">
            What We Do
          </Badge>
          <h2 className="mb-4 text-4xl font-bold tracking-tight">
            Our Services
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground">
            Everything your business needs to grow — strategy, technology, and
            marketing — all under one roof.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card key={service.title}>
                <CardHeader>
                  <Icon className="mb-2 h-10 w-10 text-primary" />
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent />
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
