"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import ClinicSenseButton from "@/components/clinicsense-button"
import Image from "next/image"

export default function Navbar() {
  const pathname = usePathname()

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only handle smooth scroll if we're on the homepage
    if (pathname === "/" && href.startsWith("/#")) {
      e.preventDefault()
      const targetId = href.substring(2) // Remove "/#" to get the ID
      const element = document.getElementById(targetId)
      if (element) {
        const headerOffset = 80 // Height of sticky header
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    }
  }

  const navItems = [
    { href: "/#services", label: "Services" },
    { href: "/#prices", label: "Prices" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-beige bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center">
          <div className="grid grid-cols-[1fr_auto_1fr] items-center w-full gap-4">
            {/* Logo - Left aligned */}
            <Link href="/" className="flex items-center space-x-3 justify-self-start">
              <Image
                src="/images/logo.jpg"
                alt="Ebb'nFlow Therapeutics Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <div className="text-xl font-light text-gray-800 hidden lg:block">
                Ebb'nFlow <span className="font-normal text-nature-green">Therapeutics</span>
              </div>
            </Link>

            {/* Desktop Navigation - Centered */}
            <nav className="hidden md:flex items-center justify-center">
              <div className="flex items-center space-x-6 lg:space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className={`text-sm font-medium transition-colors hover:text-nature-green whitespace-nowrap ${
                      pathname === item.href ? "text-nature-green border-b-2 border-nature-green pb-1" : "text-gray-600"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>

            {/* Desktop CTA - Right aligned */}
            <div className="hidden md:flex justify-self-end">
              <ClinicSenseButton size="small" color="green" />
            </div>

            {/* Mobile Navigation Button */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden ml-auto">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  <Link href="/" className="text-lg font-light text-gray-800 mb-4">
                    Ebb'nFlow <span className="font-normal text-nature-green">Therapeutics</span>
                  </Link>
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={(e) => handleSmoothScroll(e, item.href)}
                      className={`text-lg font-medium transition-colors hover:text-nature-green ${
                        pathname === item.href ? "text-nature-green" : "text-gray-600"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="pt-4">
                    <ClinicSenseButton className="w-full" size="small" color="green" />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
