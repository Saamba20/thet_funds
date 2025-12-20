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
    href: "/about",
    children: [
      { name: "Who We Are", href: "/about" },
      { name: "Board of Trustees", href: "/about/board" },
    ],
  },
  {
    name: "Funding",
    href: "/funding",
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
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <img src="/tflogo.png" alt="THET Fund" className="h-12 w-auto" />
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="-m-2.5">
                <Menu className="h-6 w-6" aria-hidden="true" />
                <span className="sr-only">Open main menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] flex flex-col">
              <div className="flex flex-col gap-6 py-4 flex-1">
                <div className="flex items-center gap-2 border-b pb-4">
                   <Link href="/" onClick={() => setIsOpen(false)}>
                    <img src="/tflogo.svg" alt="THET Fund" className="h-10 w-auto" />
                  </Link>
                </div>
                <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                <SheetDescription className="sr-only">Navigate through the site</SheetDescription>
                
                <Accordion type="single" collapsible className="w-full">
                  {navigation.map((item) => (
                    item.children ? (
                      <AccordionItem key={item.name} value={item.name} className="border-b-0">
                        <AccordionTrigger className="text-base font-semibold py-3 px-2 hover:bg-muted/50 rounded-md hover:no-underline transition-colors">
                          {item.name}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="flex flex-col space-y-1 pl-4 border-l-2 border-muted ml-2 mt-1">
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                className="text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted/50 py-2 px-3 rounded-md transition-colors block"
                                onClick={() => setIsOpen(false)}
                              >
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ) : (
                      <div key={item.name} className="py-1 border-b-0">
                        <Link
                          href={item.href}
                          className="flex flex-1 items-center justify-between py-3 px-2 font-semibold transition-colors hover:bg-muted/50 rounded-md text-base"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </div>
                    )
                  ))}
                </Accordion>
                
                <div className="mt-auto pt-6 border-t">
                  <Button asChild className="w-full h-12 text-base shadow-md font-semibold" size="lg">
                    <Link href="/funding/apply" onClick={() => setIsOpen(false)}>
                      Apply for Funding
                    </Link>
                  </Button>
                  <p className="text-center text-xs text-muted-foreground mt-4">
                    © {new Date().getFullYear()} THET Fund. All rights reserved.
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) =>
            item.children ? (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors focus:outline-none">
                  {item.name}
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
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
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ),
          )}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button asChild>
            <Link href="/funding/apply">Apply for Funding</Link>
          </Button>
        </div>
      </nav>

    </header>
  )
}
