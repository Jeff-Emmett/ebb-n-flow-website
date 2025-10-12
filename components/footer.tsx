import { Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/logo.jpg"
                alt="Ebb'nFlow Therapeutics Logo"
                width={32}
                height={32}
                className="object-contain"
              />
              <h3 className="text-xl font-light text-white">
                Ebb'nFlow <span className="font-normal text-nature-green">Therapeutics</span>
              </h3>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              A boutique wellness sanctuary. One client, one space, one transformative experience at a time. A place to
              unwind, heal, and grow.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-medium text-white">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#services" className="text-gray-300 hover:text-nature-green transition-colors">
                  Massage Therapy
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-300 hover:text-nature-green transition-colors">
                  Laser Therapy
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-300 hover:text-nature-green transition-colors">
                  Movement Therapy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-nature-green transition-colors">
                  Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-medium text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-nature-green transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-nature-green transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/what-to-expect" className="text-gray-300 hover:text-nature-green transition-colors">
                  What to Expect
                </Link>
              </li>
              <li>
                <Link href="/movement" className="text-gray-300 hover:text-nature-green transition-colors">
                  Movement Workshops
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-medium text-white">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-nature-green mt-0.5" />
                <span className="text-gray-300">
                  123 Wellness Way
                  <br />
                  Suite 200
                  <br />
                  St. Catharines, ON L2R 7P9
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-nature-green" />
                <span className="text-gray-300">(289) 969-3219</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-nature-green" />
                <span className="text-gray-300">info@ebbnflowtherapeutics.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Ebb'nFlow Therapeutics. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-sm text-gray-400 hover:text-nature-green transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-nature-green transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
