import Link from "next/link"
import { Globe } from "lucide-react"
import { Separator } from "@/components/ui/separator"

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

const socialLinks = [
  { icon: Globe, href: "#", label: "Facebook" },
  { icon: Globe, href: "#", label: "LinkedIn" },
  { icon: Globe, href: "#", label: "Instagram" },
]

export default function Footer() {
  return (
    <footer className="border-t bg-muted/20 py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Col 1: Brand */}
          <div>
            <p className="mb-2 text-lg font-semibold">Acme Co.</p>
            <p className="text-sm text-muted-foreground">
              Professional services for modern businesses.
            </p>
          </div>

          {/* Col 2: Quick links */}
          <div>
            <p className="mb-3 font-semibold">Quick Links</p>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Social */}
          <div>
            <p className="mb-3 font-semibold">Follow Us</p>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <p className="text-center text-sm text-muted-foreground">
          © 2026 Acme Co. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
