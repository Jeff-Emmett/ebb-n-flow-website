"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"

interface DropdownItem {
  title: string
  href: string
}

interface ServiceDropdownProps {
  items: DropdownItem[]
  title: string
}

export default function ServiceDropdown({ items, title }: ServiceDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <Button
        variant="outline"
        className="w-full border-nature-green text-nature-green hover:bg-green-100 justify-between bg-transparent"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </Button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-green-200 rounded-md shadow-lg z-10">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 border-b border-green-100 last:border-b-0"
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
