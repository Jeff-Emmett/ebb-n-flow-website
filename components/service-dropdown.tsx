"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"

interface DropdownItem {
  title: string
  href?: string
  modal?: string
}

interface ServiceDropdownProps {
  items: DropdownItem[]
  title: string
  onModalOpen?: (content: string, title: string) => void
}

export default function ServiceDropdown({ items, title, onModalOpen }: ServiceDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleItemClick = (item: DropdownItem) => {
    if (item.modal && onModalOpen) {
      onModalOpen(item.modal, item.title)
    }
    setIsOpen(false)
  }

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
          {items.map((item, index) =>
            item.href ? (
              <Link
                key={index}
                href={item.href}
                className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 border-b border-green-100 last:border-b-0"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ) : (
              <button
                key={index}
                onClick={() => handleItemClick(item)}
                className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-green-50 border-b border-green-100 last:border-b-0"
              >
                {item.title}
              </button>
            ),
          )}
        </div>
      )}
    </div>
  )
}
