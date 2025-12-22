"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "About",
    children: [
      { name: "Who We Are", href: "/about" },
      { name: "Board of Trustees", href: "/about/board" },
    ],
  },
  {
    name: "Funding",
    children: [
      { name: "Funding Windows", href: "/funding" },
      { name: "Apply for Funding", href: "/funding/apply" },
    ],
  },
  { name: "Programmes", href: "/programmes" },
  { name: "Impact", href: "/impact" },
  { name: "Resources", href: "/resources" },
  { name: "Partners", href: "/partners" },
  { name: "News", href: "/news" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/thetflogo.png" alt="THET Fund" className="h-12 w-auto" />
        </Link>

        {/* ---------- Mobile Trigger ---------- */}
        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                aria-label="Open menu"
                className="
                  h-11 w-11
                  rounded-xl
                  border
                  border-muted
                  hover:bg-muted
                  focus-visible:ring-2
                  focus-visible:ring-primary
                "
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[320px] sm:w-[380px] p-0">
              <SheetTitle className="sr-only">Main navigation</SheetTitle>
              <SheetDescription className="sr-only">
                Mobile navigation menu
              </SheetDescription>

              <div className="flex h-full flex-col">
                {/* Header */}
                <div className="flex items-center gap-3 border-b px-6 py-4">
                  <img src="/thetflogo.png" alt="THET Fund" className="h-10" />
                </div>

                {/* Navigation */}
                <div className="flex-1 overflow-y-auto px-4 py-6">
                  <Accordion type="single" collapsible className="space-y-1">
                    {navigation.map((item) =>
                      item.children ? (
                        <AccordionItem
                          key={item.name}
                          value={item.name}
                          className="border-none"
                        >
                          <AccordionTrigger
                            className="
                              rounded-lg
                              px-4 py-3
                              text-base font-semibold
                              hover:bg-muted
                              hover:no-underline
                            "
                          >
                            {item.name}
                          </AccordionTrigger>

                          <AccordionContent className="pl-4">
                            <div className="space-y-1 border-l pl-4">
                              {item.children.map((child) => (
                                <Link
                                  key={child.name}
                                  href={child.href}
                                  onClick={() => setOpen(false)}
                                  className="
                                    block rounded-md
                                    px-3 py-2
                                    text-sm font-medium
                                    text-muted-foreground
                                    hover:bg-muted
                                    hover:text-primary
                                  "
                                >
                                  {child.name}
                                </Link>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ) : (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="
                            block rounded-lg
                            px-4 py-3
                            text-base font-semibold
                            hover:bg-muted
                          "
                        >
                          {item.name}
                        </Link>
                      ),
                    )}
                  </Accordion>
                </div>

                {/* Footer CTA */}
                <div className="border-t px-6 py-5">
                  <Button asChild size="lg" className="w-full text-base">
                    <Link
                      href="/funding/apply"
                      onClick={() => setOpen(false)}
                    >
                      Apply for Funding
                    </Link>
                  </Button>

                  <p className="mt-4 text-center text-xs text-muted-foreground">
                    © {new Date().getFullYear()} THET Fund
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* ---------- Desktop Navigation ---------- */}
        <div className="hidden lg:flex items-center gap-x-8">
          {navigation.map((item) =>
            item.children ? (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-primary">
                  {item.name}
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>

                <DropdownMenuContent align="start">
                  {item.children.map((child) => (
                    <DropdownMenuItem key={child.name} asChild>
                      <Link href={child.href}>{child.name}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium hover:text-primary"
              >
                {item.name}
              </Link>
            ),
          )}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex">
          <Button asChild>
            <Link href="/funding/apply">Apply for Funding</Link>
          </Button>
        </div>
      </nav>
    </header>
  )
}
