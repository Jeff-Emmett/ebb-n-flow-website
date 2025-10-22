import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>
              Ebb&apos;nFlow <span className="highlight">Therapeutics</span>
            </h3>
            <p>A boutique wellness sanctuary. One client, one space, one transformative experience at a time.</p>
            <div className="rmt-badge-footer">
              <Image
                src="/images/rmt-certification.png"
                alt="Registered Massage Therapist - Professional Hands You Can Trust"
                width={200}
                height={100}
                style={{
                  width: "200px",
                  height: "auto",
                  marginTop: "1rem",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
            </div>
          </div>

          <div className="footer-links">
            <h4>Services</h4>
            <ul>
              <li>
                <a href="/#services">Massage Therapy</a>
              </li>
              <li>
                <a href="/#services">Laser Therapy</a>
              </li>
              <li>
                <a href="/#services">Movement Therapy</a>
              </li>
              <li>
                <Link href="/contact">Consultation</Link>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <a href="/#prices">Prices</a>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/what-to-expect">What to Expect</Link>
              </li>
              <li>
                <Link href="/movement-workshops">Movement Workshops</Link>
              </li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Info</h4>
            <p>
              📍 59 Wellington Street
              <br />
              St. Catharines, ON L2R 5P9
            </p>
            <p>📞 (289) 969-3219</p>
            <p>✉️ info@ebbnflowtherapeutics.com</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Ebb&apos;nFlow Therapeutics. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
