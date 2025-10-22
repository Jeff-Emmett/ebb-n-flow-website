"use client"

import Image from "next/image"
import Link from "next/link"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import { useEffect } from "react"

export default function WhatToExpectClient() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1 style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>What to Expect</h1>
          <span className="badge">Your First Visit</span>
          <p className="hero-description">
            Once you have successfully booked your initial appointment, you will receive a confirmation email with a few
            forms to fill out ahead of time.
          </p>
        </div>
      </section>

      {/* Initial Appointment */}
      <section className="content-section">
        <div className="container">
          <h2 className="section-title">The Initial Appointment</h2>

          <div className="two-col-grid">
            <div className="info-card">
              <div className="icon-header">
                <span className="large-icon">📋</span>
                <h3>Pre-Appointment Forms</h3>
              </div>
              <ul className="check-list">
                <li>Contact Information</li>
                <li>Reason for Visit</li>
                <li>Health History</li>
                <li>Consent to Policies, Assessment and Treatment</li>
              </ul>
            </div>

            <div className="info-card">
              <div className="icon-header">
                <span className="large-icon">⏱️</span>
                <h3>Assessment Process</h3>
              </div>
              <p>
                Your initial appointment begins with an in-person review of forms and an assessment that can range from
                simple to more involved, depending on the complexity or severity of your condition.
              </p>
              <p>
                This allows your therapist to ascertain whether there are any contraindications or modifications that
                may need to be considered for safe and effective treatment.
              </p>
            </div>
          </div>

          <div className="info-card large highlight-card">
            <h3>First Session Components</h3>
            <div className="two-col-list">
              <ul className="bullet-list">
                <li>Forms review</li>
                <li>Intake discussion</li>
                <li>Initial assessment</li>
                <li>Treatment plan development</li>
              </ul>
              <ul className="bullet-list">
                <li>Treatment of sensitive areas (if indicated)</li>
                <li>Diagnostics and referrals</li>
                <li>Ongoing assessment planning</li>
                <li>Treatment plan maintenance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Details */}
      <section className="content-section bg-alt">
        <div className="container">
          <h2 className="section-title">Comprehensive Assessment</h2>

          <div className="centered-content">
            <div className="info-card large">
              <p>
                The first treatment session requires additional time to go over the forms and perform an initial
                assessment that may include postural observations, range of motion testing, and/or neurological and
                special orthopaedic testing.
              </p>
            </div>

            <div className="info-card large">
              <p>
                With numerous tools available to her, Dahlia continuously discerns which techniques may be most
                effective and regularly reassesses client responses to ensure that treatments continue to be beneficial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Experience */}
      <section className="content-section">
        <div className="container">
          <h2 className="section-title">Your Treatment Experience</h2>

          <div className="two-col-grid">
            <div className="experience-content">
              <div className="info-card">
                <div className="icon-header">
                  <span className="large-icon">💚</span>
                  <h3>Personalized Approach</h3>
                </div>
                <p>
                  Dahlia meets clients where they are, and is able to offer either a quiet retreat or a fun, friendly
                  conversational interaction during treatments. She prioritizes client&apos;s goals, with the utmost
                  respect for their comfort, time and resources.
                </p>
              </div>

              <div className="info-card">
                <h3>Communication & Consent</h3>
                <p>
                  She encourages an atmosphere of open, two-way communication that respects privacy, autonomy and
                  preferences such as depth of pressure and special consent for the treatment of sensitive areas if
                  indicated, guided strictly by the principles of ethical practice adhered to by all registrants of the
                  CMTO.
                </p>
              </div>
            </div>

            <div className="experience-visual">
              <div className="content-image">
                <Image
                  src="/images/treatment-room.jpg"
                  alt="Professional treatment room setup"
                  width={500}
                  height={400}
                  style={{ objectFit: "cover", borderRadius: "1rem" }}
                />
                <div className="image-caption">Your Private Treatment Space</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Science and Art */}
      <section className="content-section bg-alt">
        <div className="container">
          <div className="info-card large highlight-card">
            <h3>A Science and an Art Form</h3>
            <p>
              A massage from Dahlia is an experience and often also an education. Her approach is intuitive,
              evidence-based and trauma-informed. Her own personal experiences with injury and chronic pain has
              instilled a high level of empathy for and understanding of clients&apos; complaints as well as her
              insistence on professionalism and excellence of care.
            </p>
            <p>
              There&apos;s always a unique and inspiring playlist in the background. Clients can also request music that
              they enjoy, adding to an experience that is tailored just for them. Complimentary aromatherapy is also
              available by request.
            </p>
          </div>

          <div className="info-card large">
            <h3>Education & Home Care</h3>
            <p>
              Dahlia is a teacher at heart, so you likely won&apos;t be able to walk away without being encouraged to
              learn a stretch or strengthening exercise or about how to incorporate a home care practice into your
              routine to enhance the long term effects of treatment between sessions.
            </p>
          </div>
        </div>
      </section>

      {/* Holistic Treatment */}
      <section className="content-section">
        <div className="container">
          <div className="centered-content">
            <h2>Holistic Treatment Approach</h2>
            <p className="large-text">
              You can expect to have your primary area of concern addressed directly, within a treatment that aims to
              treat the body holistically as an interconnected system.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Ready to Experience Holistic Care?</h2>
          <p>Begin your wellness journey with a comprehensive assessment and personalized treatment plan.</p>
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
              Have Questions?
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
