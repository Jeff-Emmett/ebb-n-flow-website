import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://ebbnflowtherapeutics.com"),
  title: "Ebb'nFlow Therapeutics - Massage, Laser & Movement Therapy",
  description:
    "Experience holistic healing through our integrated therapeutic services. Massage therapy, laser therapy, and movement therapy in a peaceful, professional setting.",
  generator: "v0.app",
  openGraph: {
    title: "Ebb'nFlow Therapeutics - Massage, Laser & Movement Therapy",
    description:
      "Experience holistic healing through our integrated therapeutic services. Massage therapy, laser therapy, and movement therapy in a peaceful, professional setting.",
    url: "https://ebbnflowtherapeutics.com",
    siteName: "Ebb'nFlow Therapeutics",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ebb'nFlow Therapeutics - Treatment Room",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ebb'nFlow Therapeutics - Massage, Laser & Movement Therapy",
    description:
      "Experience holistic healing through our integrated therapeutic services. Massage therapy, laser therapy, and movement therapy in a peaceful, professional setting.",
    images: ["/og-image.jpg"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
