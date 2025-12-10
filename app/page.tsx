"use client"

import Image from "next/image"
import Link from "next/link"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import Modal from "./components/Modal"
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    // Handle hash navigation
    const hash = window.location.hash
    if (hash) {
      // Small delay to ensure the page has rendered
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          const headerOffset = 80 // Account for fixed header
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        }
      }, 100)
    } else {
      window.scrollTo(0, 0)
    }
  }, [])

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <h1>
                Ebb&apos;nFlow <span className="highlight">Therapeutics</span>
              </h1>
              <p className="hero-subtitle">Excellence in Massage Therapy Since 2013</p>
              <p className="hero-description">A serene, home-based practice in the heart of downtown St Catharines</p>
              <p className="hero-tagline">Owned and operated by Dahlia B. Steinberg RMT.</p>

              <div className="hero-buttons">
                <a
                  href="https://ebbnflowmassage.clinicsense.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Book Appointment
                </a>
                <Link href="/about" className="btn btn-secondary">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="hero-image">
              <Image
                src="/images/reception-area.jpg"
                alt="Welcoming reception area at Ebb'nFlow Therapeutics"
                width={600}
                height={500}
                style={{ objectFit: "cover", borderRadius: "1rem" }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-intro">
        <div className="container">
          <div className="about-card">
            <p>
              Ebb&apos;nFlow Therapeutics provides Massage Therapy that is attentive to your unique needs and goals.
              Whether you are looking for recovery from the stress and strains of work, to manage pain, prevent injury
              or improve your physical performance, we&apos;re here to meet you where you are.
            </p>
            <p>
              Unlike any other massage therapy practice, Ebb&apos;nFlow Therapeutics also offers a distinctly unique
              service that combines the cutting edge technology of Laser Therapy (Photobiomodulation) in combination
              with massage therapy for accelerated healing of acute pain conditions and injury.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2>Services</h2>
          <p className="section-description">
            Please click on the links below to learn more about the unique services offered, based on a comprehensive,
            clinical practice of Massage Therapy.
          </p>

          <div className="services-grid">
            {/* Massage Therapy */}
            <div className="service-card">
              <Image
                src="/images/treatment-room.jpg"
                alt="Professional massage therapy treatment room"
                width={400}
                height={200}
                style={{ objectFit: "cover" }}
              />
              <div className="service-content">
                <h3>Massage Therapy Treatment</h3>
                <p>
                  General Swedish Massage combined with specialized techniques including Myofascial Deep Tissue, all
                  tailored to your specific needs and wellness goals.
                </p>
                <button className="btn btn-outline" data-modal="massage">
                  Learn More About Massage
                </button>
                <a
                  href="https://ebbnflowmassage.clinicsense.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Book Appointment
                </a>
              </div>
            </div>

            {/* Laser Therapy */}
            <div className="service-card">
              <Image
                src="/images/bioflex-laser.png"
                alt="BioFlex Laser Therapy"
                width={400}
                height={200}
                style={{ objectFit: "cover" }}
              />
              <div className="service-content">
                <h3>Laser Therapy Treatment</h3>
                <p>
                  Laser therapy provides accelerated healing for musculoskeletal injury, arthritis, and nerve injury.
                  Stand alone or combine with Massage Therapy.
                </p>
                <button className="btn btn-outline" data-modal="laser">
                  Learn More About Laser Therapy
                </button>
                <a
                  href="https://ebbnflowmassage.clinicsense.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Book Appointment
                </a>
              </div>
            </div>

            {/* Movement Education */}
            <div className="service-card">
              <Image
                src="/images/movement-class.png"
                alt="Movement education class"
                width={400}
                height={200}
                style={{ objectFit: "cover" }}
              />
              <div className="service-content">
                <h3>Movement Education</h3>
                <p>
                  Remedial exercise instruction involves teaching targeted strength, stretch or mobility exercises that
                  further the benefits of massage therapy long term.
                </p>
                <Link href="/movement-workshops" className="btn btn-outline">
                  See Movement Workshops
                </Link>
                <a
                  href="https://ebbnflowmassage.clinicsense.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Book Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="prices" className="pricing">
        <div className="container">
          <h2>Prices</h2>

          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Massage and/or Laser Therapy</h3>
              <div className="price-list">
                <div className="price-item">
                  <span>30 Minute</span>
                  <span>
                    $53.50 <small>(+$6.95 HST)</small>
                  </span>
                </div>
                <div className="price-item">
                  <span>45 Minute</span>
                  <span>
                    $80.25 <small>(+$10.43 HST)</small>
                  </span>
                </div>
                <div className="price-item">
                  <span>60 Minute</span>
                  <span>
                    $107.00 <small>(+$13.91 HST)</small>
                  </span>
                </div>
                <div className="price-item">
                  <span>75 Minute</span>
                  <span>
                    $133.75 <small>(+$17.38 HST)</small>
                  </span>
                </div>
                <div className="price-item">
                  <span>90 Minute</span>
                  <span>
                    $160.50 <small>(+$20.86 HST)</small>
                  </span>
                </div>
              </div>
            </div>

            <div className="pricing-card">
              <h3>Add-on Laser Therapy</h3>
              <p className="pricing-note">If combined simultaneously with Massage Therapy for more than 15 minutes</p>
              <div className="addon-price">
                <span className="large-price">$1.00/minute</span>
                <span className="price-note">(+ HST)</span>
              </div>
              <p className="pricing-note">Available in 15, 30, 45 and 60 minute intervals</p>
            </div>
          </div>

          <div className="insurance-card">
            <h3>Payment & Insurance</h3>
            <p className="insurance-highlight">Direct billing is now available</p>
            <div className="insurance-details">
              <p>
                <strong>Accepted:</strong> Cash, Direct Billing, E-transfer, Debit, Credit Card (Visa, AmEx, Mastercard)
              </p>
              <p>RMTs are regulated health care professionals recognized by insurance companies across Ontario.</p>
              <p>
                It is recommended that clients check with their insurance provider about whether they are required to
                have a doctor&apos;s note in order to submit a claim.
              </p>
              <p>
                Your receipt will include the practitioner&apos;s registration number necessary for an insurance claim
                submission. This number verifies that your therapist is registered with the College of Massage
                Therapists of Ontario (CMTO).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Ready to Begin Your Wellness Journey?</h2>
          <div className="cta-contact">
            <div className="contact-item">
              <span>📞</span>
              <span>(289) 969-3219</span>
            </div>
            <div className="contact-item">
              <span>💌</span>
              <span>info@ebbnflow-massageandlaser.com</span>
            </div>
          </div>
          <div className="cta-buttons">
            <a
              href="https://ebbnflowmassage.clinicsense.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Book Appointment
            </a>
            <Link href="/contact" className="btn btn-primary">
              Contact Dahlia
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <Modal />
    </>
  )
}
