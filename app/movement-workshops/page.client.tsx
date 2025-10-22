"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"

export default function MovementWorkshopsClient() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1 style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>Movement & Mobility</h1>
          <span className="badge">Movement Education</span>
          <p className="hero-description">
            Free form/improvisational movement and mobility training as a form of personal and artistic expression and
            wellness is what ultimately drives Dahlia to continue to learn about our amazing bodies and how we can all
            move more gracefully as we age.
          </p>
        </div>
      </section>

      {/* Movement Options */}
      <section className="content-section">
        <div className="container">
          <h2 className="section-title">Movement Education Options</h2>

          <div className="info-card large">
            <p>
              Remedial exercise aka &quot;Rem-Ex&quot; instruction involves teaching a few targeted strength, stretch or
              mobility exercises that are aimed at furthering the benefits of massage therapy long term, which is an
              intrinsic component of a comprehensive treatment.
            </p>
            <p>
              Although this often comes highly recommended, not everyone is interested in learning a new exercise
              immediately after having a massage. This makes a lot of sense, and yet Dahlia will still do her best to
              encourage you, within reason.
            </p>
            <p>
              <strong>That said, clients have a few options:</strong>
            </p>
          </div>

          <div className="three-col-grid">
            <div className="numbered-card">
              <div className="number">1</div>
              <h3>Personal Choice</h3>
              <p>
                Clients may request or deny remedial exercise instruction as part of treatment, based on their personal
                goals.
              </p>
            </div>

            <div className="numbered-card">
              <div className="number">2</div>
              <h3>Extended Sessions</h3>
              <p>
                Clients can request to allot up to 50% of their treatment time (15 to 45 minutes) for Rem-Ex instruction
                before or after their massage.
              </p>
            </div>

            <div className="numbered-card">
              <div className="number">3</div>
              <h3>Group Workshops</h3>
              <p>
                Clients can also sign up for upcoming movement workshops for a more comprehensive group learning
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="content-section bg-alt">
        <div className="container">
          <h2 className="section-title">The Ebb&apos;nFlow Origin Story</h2>

          <div className="info-card large">
            <p>
              The original concept of Ebb&apos;nFlow Massage (now Ebb&apos;nFlow Therapeutics) was born out of
              Dahlia&apos;s initial work as a yoga instructor, before she became a massage therapist. Dahlia taught
              private, one-on-one sessions as well as classes around the GTA from 2004-2009.
            </p>

            <p>
              She recognized the need to meet students where they were instead of insisting that they push through their
              pain and fatigue similarly to the approach of a personal trainer. Some days they would arrive in a lot of
              pain and would need a gentler approach such as more periods of rest or &quot;ebb&quot; between exercises
              or hands on work such as massage at the end of their sessions.
            </p>

            <p>
              Dahlia&apos;s natural talent for massage as a component of her sessions enabled students to show up more
              consistently for practice instead of skipping practice out of concern that they would not be able to make
              it through a session.
            </p>

            <p className="emphasis">
              Since consistency is key to success, a more fluid and compassionate approach to teaching one-on-one was
              born and clients were given permission to move as they needed through periods of &quot;ebb&quot; or
              &quot;flow&quot; with grace and freedom from the need to over achieve.
            </p>
          </div>
        </div>
      </section>

      {/* Workshops */}
      <section className="content-section">
        <div className="container">
          <h2 className="section-title">Movement & Mobility Workshops</h2>

          <div className="two-col-grid">
            <div className="workshop-content">
              <div className="info-card">
                <div className="icon-header">
                  <span className="large-icon">💚</span>
                  <h3>Fun, Liberating & Educational</h3>
                </div>
                <p>
                  Dahlia&apos;s movement and mobility workshops are aimed towards adults and seniors and offer
                  opportunities to gain greater strength, flexibility, mobility and balance as well as to embrace the
                  discovery of one&apos;s own unique expression through movement and dance.
                </p>
              </div>

              <div className="info-card highlight-card">
                <h3>Workshop Benefits</h3>
                <ul className="check-list">
                  <li>Greater strength and flexibility</li>
                  <li>Improved mobility and balance</li>
                  <li>Unique personal expression through movement</li>
                  <li>Discovery of dance and creative movement</li>
                </ul>
              </div>
            </div>

            <div className="content-image">
              <Image
                src="/images/dahlia-portrait.jpg"
                alt="Dahlia Steinberg - Movement and wellness educator"
                width={500}
                height={600}
                style={{ objectFit: "cover", borderRadius: "1rem" }}
              />
              <div className="image-caption">Dahlia - Your Movement Guide</div>
            </div>
          </div>
        </div>
      </section>

      {/* Continuing the Dance */}
      <section className="content-section bg-alt">
        <div className="container">
          <div className="centered-content">
            <h2>Continuing the Dance</h2>
            <p>
              Free form/improvisational movement and mobility training as a form of personal and artistic expression and
              wellness is what ultimately drives Dahlia to continue to learn about our amazing bodies and how we can all
              move more gracefully as we age.
            </p>
            <p>
              She continues to dance for her own enjoyment and can be found performing or choreographing for community
              arts-based projects when opportunities arise.
            </p>
            <p>
              <strong>
                Dahlia is working towards offering more movement and mobility classes and workshops in the future so
                please stay tuned for updates by checking the Movement section of this website.
              </strong>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Ready to Move with More Freedom?</h2>
          <p>
            If long lasting improvement is your goal than you may want to consider how Dahlia&apos;s skills as a teacher
            could benefit you through either one-on-one instruction sessions that can be combined with massage therapy
            or group workshops.
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
            <Link href="/contact" className="btn btn-primary">
              Ask About Workshops
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
