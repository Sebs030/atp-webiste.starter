"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Mail, Phone, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type FormValues = z.infer<typeof schema>

const contactInfo = [
  { icon: Mail, label: "hello@acmeco.com" },
  { icon: Phone, label: "+1 555 000 0000" },
  { icon: MapPin, label: "123 Main St, Springfield" },
]

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) })

  function onSubmit(values: FormValues) {
    console.log(values)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto grid max-w-6xl gap-16 px-4 md:grid-cols-2">
        {/* Left column */}
        <div>
          <Badge variant="secondary" className="mb-3">
            Contact
          </Badge>
          <h2 className="mb-4 text-4xl font-bold tracking-tight">
            Get in Touch
          </h2>
          <p className="mb-8 text-muted-foreground">
            Have a project in mind? We&apos;d love to hear about it. Send us a
            message and we&apos;ll get back to you as soon as possible.
          </p>

          <div className="flex flex-col gap-4">
            {contactInfo.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 text-sm">
                <Icon className="h-4 w-4 shrink-0 text-primary" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — form */}
        <div>
          {submitted ? (
            <div className="flex h-full items-center justify-center">
              <p className="text-lg font-medium text-primary">
                Thanks! We&apos;ll be in touch.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-5"
            >
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  aria-invalid={!!errors.name}
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-sm text-destructive">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  aria-invalid={!!errors.email}
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  placeholder="How can we help?"
                  aria-invalid={!!errors.subject}
                  {...register("subject")}
                />
                {errors.subject && (
                  <p className="text-sm text-destructive">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  rows={5}
                  aria-invalid={!!errors.message}
                  {...register("message")}
                />
                {errors.message && (
                  <p className="text-sm text-destructive">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
