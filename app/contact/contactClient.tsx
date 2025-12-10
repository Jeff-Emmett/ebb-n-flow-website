"use client"

import Image from "next/image"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import { useEffect } from "react"

export default function ContactClient() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1 style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>Contact Us</h1>
          <span className="badge">Get in Touch</span>
          
          <p className="hero-description">
            Ready to experience boutique wellness? Let&apos;s chat about creating your personalized sanctuary for
            healing and self-care.
          </p>
        </div>
      </section>

      {/* Clinic Images */}
      <section className="clinic-images">
        <div className="container">
          <div className="image-grid">
            <div className="image-card">
              <Image
                src="/images/clinic-exterior.jpg"
                alt="Ebb'nFlow Therapeutics clinic exterior"
                width={500}
                height={250}
                style={{ objectFit: "cover", borderRadius: "1rem" }}
              />
              <div className="image-caption">Our Welcoming Exterior</div>
            </div>
            <div className="image-card">
              <Image
                src="/images/yellow-door.jpg"
                alt="Distinctive yellow entrance door"
                width={500}
                height={250}
                style={{ objectFit: "cover", borderRadius: "1rem" }}
              />
              <div className="image-caption">Find Our Yellow Door</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid-simple">
            {/* Email Us Card */}
            <div className="email-card">
              <div className="icon-header-large">
                <span className="large-icon">✉️</span>
                <h2>Email Us</h2>
              </div>
              <p className="email-description">
                Have questions or want to book an appointment? Send us an email and we&apos;ll get back to you within 24
                hours.
              </p>
              <a href="mailto:info@ebbnflow-massageandlaser.com" className="email-link italic">
                info@ebbnflow-massageandlaser.com
              </a>
            </div>

            {/* Contact Info */}
            <div className="contact-info-wrapper">
              <div className="info-card">
                <h3>Visit Our Clinic</h3>
                <div className="contact-item">
                  <span className="icon">📍</span>
                  <div>
                    <p className="item-title">Address</p>
                    <p>
                      59 Wellington Street
                      <br />
                      St. Catharines, ON L2R 5P9
                    </p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="icon">📞</span>
                  <div>
                    <p className="item-title">Phone</p>
                    <p>
                      <a href="tel:2899693219" className="phone-link">
                        (289) 969-3219
                      </a>
                    </p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="icon">✉️</span>
                  <div>
                    <p className="item-title">Email</p>
                    <p>
                      <a href="mailto:info@ebbnflow-massageandlaser.com" className="email-link-small">
                        info@ebbnflow-massageandlaser.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="info-card">
                <h3>Office Hours</h3>
                <div className="hours-list">
                  <div className="hours-item">
                    <span>Monday - Thursday</span>
                    <span>9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span>Friday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>

              <div className="info-card emergency">
                <div className="contact-item">
                  <span className="icon">⏰</span>
                  <div>
                    <p className="item-title">Emergency Contact</p>
                    <p className="small">
                      For urgent matters outside of business hours, please call our emergency line at (289) 969-3220 or
                      visit your nearest emergency room.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Ready for Your Personal Wellness Experience?</h2>
          <p>
            Book your private session in our cozy, boutique space. Experience what it means to have dedicated time and
            space just for your wellness journey.
          </p>
          <div className="cta-buttons">
            <a
              href="https://ebbnflowmassage.clinicsense.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Book Appointment
            </a>
            <a href="tel:2899693219" className="btn btn-primary">
              Call for Personal Consultation
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
