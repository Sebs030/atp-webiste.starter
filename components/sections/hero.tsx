import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Hero() {
  return (
    <section className="flex min-h-[90vh] flex-col items-center justify-center bg-gradient-to-b from-muted/50 to-background px-4 py-24 text-center">
      <Badge variant="secondary" className="mb-6">
        Trusted by 500+ businesses
      </Badge>

      <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
        Your Business.
        <br />
        Elevated.
      </h1>

      <p className="mb-10 max-w-2xl text-xl text-muted-foreground">
        We help small businesses grow with tailored strategy, modern tech, and
        hands-on support.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <Button size="lg" nativeButton={false} render={<a href="#contact" />}>
          Get Started
        </Button>
        <Button size="lg" variant="outline" nativeButton={false} render={<a href="#services" />}>
          Learn More
        </Button>
      </div>
    </section>
  )
}
