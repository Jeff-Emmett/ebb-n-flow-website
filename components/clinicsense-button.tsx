"use client"

import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

interface ClinicSenseButtonProps {
  className?: string
  size?: "small" | "medium" | "large"
  color?: "black" | "blue" | "green"
}

export default function ClinicSenseButton({ className = "", size = "small", color = "green" }: ClinicSenseButtonProps) {
  const getSizeClasses = () => {
    switch (size) {
      case "small":
        return "h-9 px-3 text-sm"
      case "medium":
        return "h-10 px-4 text-sm"
      case "large":
        return "h-11 px-8 text-base"
      default:
        return "h-9 px-3 text-sm"
    }
  }

  const getColorClasses = () => {
    switch (color) {
      case "blue":
        return "bg-blue-600 hover:bg-blue-700 text-white"
      case "black":
        return "bg-gray-900 hover:bg-black text-white"
      case "green":
      default:
        return "bg-nature-green hover:bg-nature-green-dark text-white"
    }
  }

  return (
    <Button className={`${getSizeClasses()} ${getColorClasses()} ${className} inline-flex items-center gap-2`} asChild>
      <a href="https://ebbnflowmassage.clinicsense.com" target="_blank" rel="noopener noreferrer">
        <Calendar className="h-4 w-4" />
        Book Appointment
      </a>
    </Button>
  )
}
