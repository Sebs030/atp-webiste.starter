"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <a href="/" className="text-lg font-semibold tracking-tight">
          Acme Co.
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <Button size="sm" render={<a href="#contact" />}>
            Get in Touch
          </Button>
        </nav>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu />
            </Button>
            <SheetContent side="left">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <div className="flex flex-col gap-6 p-6 pt-10">
                {navLinks.map((link) => (
                  <SheetClose
                    key={link.href}
                    render={
                      <a
                        href={link.href}
                        className="text-base font-medium text-foreground transition-colors hover:text-primary"
                      />
                    }
                  >
                    {link.label}
                  </SheetClose>
                ))}
                <SheetClose
                  render={
                    <a
                      href="#contact"
                      className="mt-2 inline-flex h-8 items-center justify-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80"
                    />
                  }
                >
                  Get in Touch
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
