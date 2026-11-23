import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-4 md:grid-cols-2">
        {/* Text column */}
        <div>
          <Badge variant="secondary" className="mb-3">
            Our Story
          </Badge>
          <h2 className="mb-6 text-4xl font-bold tracking-tight">
            Built for Businesses Like Yours
          </h2>
          <p className="mb-4 text-muted-foreground">
            We started Acme Co. with a simple belief: every small business
            deserves access to the same quality of strategy and technology as
            the big players.
          </p>
          <p className="mb-8 text-muted-foreground">
            Today, we work with hundreds of clients across industries — helping
            them build, grow, and thrive in an ever-changing market.
          </p>
          <Button variant="outline">Meet the Team</Button>
        </div>

        {/* Image placeholder */}
        <div className="flex aspect-video items-center justify-center rounded-2xl bg-muted text-muted-foreground">
          Your photo here
        </div>
      </div>
    </section>
  )
}
