"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <header id="navbar">
      <div className="container">
        <nav>
          <Link href="/" className="logo">
            <Image src="/images/logo.jpg" alt="Ebb'nFlow Therapeutics Logo" width={100} height={100} />
            <span className="logo-text">
              Ebb&apos;nFlow <span className="highlight">Therapeutics</span>
            </span>
          </Link>

          <button className="mobile-menu-btn" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-links ${isOpen ? "active" : ""}`} id="navLinks">
            <li>
              <a href="#services" onClick={closeMenu}>
                Services
              </a>
            </li>
            <li>
              <a href="#prices" onClick={closeMenu}>
                Prices
              </a>
            </li>
            <li>
              <Link href="/about" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={closeMenu}>
                Contact
              </Link>
            </li>
            <li className="cta-nav">
              <a
                href="https://ebbnflowmassage.clinicsense.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ color: "white" }}
              >
                Book Appointment
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
