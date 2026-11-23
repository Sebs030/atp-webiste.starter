import { Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote:
      "Working with Acme Co. transformed our online presence. We saw results within weeks.",
    name: "Sarah K.",
    company: "Bloom Bakery",
  },
  {
    quote:
      "Professional, reliable, and results-driven from day one. I couldn't recommend them more.",
    name: "Mark T.",
    company: "Summit Realty",
  },
  {
    quote:
      "They took our scattered strategy and made it crystal clear. Game changer for our team.",
    name: "Lisa M.",
    company: "Nova Studio",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-muted/40 py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <Badge variant="secondary" className="mb-3">
            What Clients Say
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight">Testimonials</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name}>
              <CardContent className="pt-6">
                <div className="mb-3 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="mb-4 italic text-muted-foreground">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.company}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
