// Modal content
const modalContent = {
  massage: {
    title: "Massage Therapy",
    content: `Scope of Practice:

Registered Massage Therapists in Ontario constitute a regulated health profession in much the same way that physicians, nurses, physiotherapists and chiropractors are regulated. The profession is governed by a Scope of Practice, which is defined as follows:

"The practice of massage therapy is the assessment of the soft tissue and joints of the body, and the treatment and prevention of physical dysfunction and pain of the soft tissues and joints by manipulation to develop, maintain, rehabilitate or augment physical function, or relieve pain." (Massage Therapy Act, 1991)

Benefits of Massage Therapy:

Massage therapy treatments provided by a Registered Massage Therapist can offer significant benefits for a variety of conditions and for diverse patient populations. Whether you need to have a moment of relaxation, reduce muscle tension or attain relief from chronic pain, massage therapy can enhance your overall well-being.

Massage therapy can be an important part of your health maintenance plan by:
• Reducing or eliminating pain
• Improving joint mobility
• Improving lymphatic drainage
• Reducing muscular tension

Techniques:

Treatments are based on General Swedish Massage techniques and may be combined with Deep Tissue Massage, Myofascial Release, Trigger Point Therapy, Manual Lymphatic Drainage and Joint Mobilization Techniques. Ongoing assessment, remedial exercise and/or home care instruction is also part of this comprehensive treatment session based on the client's goals and comfort.`,
  },
  laser: {
    title: "Laser Therapy",
    content: `The Science:

Ebb'nFlow Therapeutics uses the BIOFLEX® system of Class 3b lasers together with large surface arrays of bicolour LEDs that affect a large volume of circulating blood as well as underlying tissues resulting in both a powerful systemic and direct photobiomodulation effect.

Please visit BioflexLaser.com for more info.`,
  },
}

// Toggle mobile menu
function toggleMobileMenu() {
  const navLinks = document.getElementById("navLinks")
  navLinks.classList.toggle("active")
}

function closeMobileMenu() {
  const navLinks = document.getElementById("navLinks")
  navLinks.classList.remove("active")
}

// Modal functions
function showModal(type) {
  const modal = document.getElementById("modal")
  const modalTitle = document.getElementById("modalTitle")
  const modalBody = document.getElementById("modalBody")

  if (modalContent[type]) {
    modalTitle.textContent = modalContent[type].title
    modalBody.textContent = modalContent[type].content
    modal.classList.add("active")
  }
}

function closeModal() {
  const modal = document.getElementById("modal")
  modal.classList.remove("active")
}

// Close modal on outside click
window.onclick = (event) => {
  const modal = document.getElementById("modal")
  if (event.target === modal) {
    closeModal()
  }
}

// Smooth scroll with offset for fixed header
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const headerOffset = 80
      const elementPosition = target.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
      closeMobileMenu()
    }
  })
})
