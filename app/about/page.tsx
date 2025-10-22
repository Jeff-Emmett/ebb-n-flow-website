import Image from "next/image"
import Link from "next/link"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"

export const metadata = {
  title: "About Dahlia B. Steinberg, RMT - Ebb'nFlow Therapeutics",
  description:
    "Meet Dahlia B. Steinberg, RMT - Founder of Ebb'nFlow Therapeutics. A lifelong interest in movement and healing arts.",
}

export default function About() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <span className="badge">About Dahlia</span>
          <h1>Dahlia B. Steinberg, RMT</h1>
          <p className="hero-subtitle">Founder and Owner of Ebb&apos;nFlow Therapeutics</p>
          <p className="hero-description">
            A lifelong interest in movement and the healing arts is the foundation of her practice as a massage
            therapist, laser therapist, and movement educator.
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="content-section">
        <div className="container">
          <div className="two-col-grid">
            <div className="content-text">
              <h2>Professional Background</h2>
              <p>
                Dahlia&apos;s personal and professional experience with a wide range of bodywork practices including
                yoga, pilates, somatic movement and modern dance spans 30 years and informs her unique style and
                approach to her clinical practice of massage therapy.
              </p>
              <p>
                She is registered with the College of Massage Therapists of Ontario (CMTO), which is the provincial
                regulatory body that protects the public interest by monitoring the ongoing professional development and
                ethical standards of RMTs.
              </p>

              <div className="info-card">
                <h3>Practice Evolution</h3>
                <div className="timeline">
                  <p>
                    <strong>2013:</strong> Started Ebb&apos;nflow Massage, working with Dr. Enrico Schirru at Absolute
                    Chiropractic
                  </p>
                  <p>
                    <strong>2013-2017:</strong> Worked at Paisley Spa and John Chan Physiotherapy Clinic
                  </p>
                  <p>
                    <strong>2015:</strong> Established first home-based clinic on Ontario Street
                  </p>
                  <p>
                    <strong>2017:</strong> Moved to home location on Woodbine Ave., working solely for herself
                  </p>
                  <p>
                    <strong>2025:</strong> Relocated to downtown St. Catharines, rebranded to Ebb&apos;nFlow
                    Therapeutics
                  </p>
                </div>
              </div>
            </div>
            <div className="content-image">
              <Image
                src="/images/dahlia-portrait.jpg"
                alt="Dahlia B. Steinberg, RMT - Founder of Ebb'nFlow Therapeutics"
                width={500}
                height={600}
                style={{ objectFit: "cover", borderRadius: "1rem" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="content-section bg-alt">
        <div className="container">
          <h2 className="section-title">Education & Training</h2>

          <div className="education-grid">
            <div className="education-card">
              <h3>Formal Education</h3>
              <div className="education-list">
                <p>
                  <strong>2021:</strong> Meditech International Inc. Bioflex Laser Therapy Certification
                </p>
                <p>
                  <strong>2012:</strong> Graduate, Massage Therapy Program, Ontario College of Health and Technology
                </p>
                <p>
                  <strong>2009:</strong> Pilates Teacher Training, STOTT Toronto (Beginner to Advanced Matwork)
                </p>
                <p>
                  <strong>2003-05:</strong> Yoga Teacher Training, Yogaspace Toronto (200 hr diploma + Advanced Teacher
                  Training)
                </p>
                <p>
                  <strong>1998:</strong> School of Toronto Dance Theatre&apos;s Professional Training Program
                </p>
              </div>
            </div>

            <div className="education-card">
              <h3>Continuing Education</h3>
              <ul className="bullet-list">
                <li>Myofascial therapy/structural integration</li>
                <li>Biodynamic craniosacral therapy</li>
                <li>Osteopathic techniques for RMTs</li>
                <li>Advanced sacro-lumbar and thoracic spine assessments and joint mobilization</li>
                <li>Axis Syllabus - evolving theory and practice of dynamic human movement</li>
              </ul>
            </div>

            <div className="education-card highlight-card">
              <h3>Recognition & Support</h3>
              <p>Massage Therapy is Dahlia&apos;s second career, supported by:</p>
              <ul className="bullet-list">
                <li>Training and subsistence grant from the Dancer&apos;s Transition and Resource Centre (2010)</li>
                <li>
                  Special second year award for academic excellence (Dancer&apos;s Transition and Resource Centre, 2011)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Section */}
      <section className="content-section">
        <div className="container">
          <div className="centered-content">
            <h2>Teaching & Mentorship</h2>
            <p>
              Dahlia now also works once a week as a supervisor and teacher in the student massage therapy clinic, which
              is open to the public at the Ontario College of Health and Technology in Stoney Creek. This role helps to
              keep her engaged and informed in her current practice while inspiring her to encourage and mentor the next
              generation of massage therapists.
            </p>
          </div>
        </div>
      </section>

      {/* Meet Olivia Section */}
      <section className="content-section bg-alt">
        <div className="container">
          <h2 className="section-title">Meet Olivia</h2>

          <div className="two-col-grid reverse">
            <div className="content-image">
              <Image
                src="/images/olivia-cat.png"
                alt="Olivia, the friendly clinic cat at Ebb'nFlow Therapeutics"
                width={500}
                height={400}
                style={{ objectFit: "cover", borderRadius: "1rem" }}
              />
            </div>
            <div className="content-text">
              <div className="info-card">
                <p>
                  No visit to Ebb&apos;nFlow Therapeutics would be complete without meeting Olivia, our gentle and
                  affectionate clinic companion. This sweet tabby girl has a calming presence that perfectly complements
                  the therapeutic atmosphere of our space.
                </p>
                <p>
                  Olivia enjoys greeting clients with soft purrs and will often curl up nearby during sessions, adding
                  an extra layer of comfort and relaxation to your experience. Her friendly demeanor and peaceful energy
                  make her a beloved part of the Ebb&apos;nFlow family.
                </p>
                <p className="italic">
                  Please let us know if you have any allergies or prefer a cat-free session—we&apos;re happy to
                  accommodate all our clients&apos; needs!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Experience Dahlia&apos;s Unique Approach</h2>
          <p>Combining 30 years of movement expertise with clinical massage therapy excellence.</p>
          <div className="cta-buttons">
            <a
              href="https://ebbnflowmassage.clinicsense.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Book Appointment
            </a>
            <Link href="/what-to-expect" className="btn btn-primary">
              What to Expect
            </Link>
          </div>
          <div className="rmt-badge">
            <Image
              src="/images/rmt-certification.png"
              alt="Registered Massage Therapist - Professional Hands You Can Trust"
              width={200}
              height={100}
              style={{ maxWidth: "200px", height: "auto" }}
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
