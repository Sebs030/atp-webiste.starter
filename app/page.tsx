import Hero from "@/components/sections/hero"
import Services from "@/components/sections/services"
import About from "@/components/sections/about"
import Testimonials from "@/components/sections/testimonials"
import ContactForm from "@/components/sections/contact-form"

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <ContactForm />
    </main>
  )
}
