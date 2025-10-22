"use client"

import { useEffect, useState } from "react"

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

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeModal, setActiveModal] = useState<"massage" | "laser" | null>(null)

  useEffect(() => {
    const handleModalClick = (e: Event) => {
      const target = e.target as HTMLElement
      if (target.hasAttribute("data-modal")) {
        const modalType = target.getAttribute("data-modal") as "massage" | "laser"
        setActiveModal(modalType)
        setIsOpen(true)
      }
    }

    document.addEventListener("click", handleModalClick)
    return () => document.removeEventListener("click", handleModalClick)
  }, [])

  const closeModal = () => {
    setIsOpen(false)
    setActiveModal(null)
  }

  if (!isOpen || !activeModal) return null

  const content = modalContent[activeModal]

  return (
    <div className="modal active" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>{content.title}</h3>
          <button className="modal-close" onClick={closeModal}>
            &times;
          </button>
        </div>
        <div className="modal-body">{content.content}</div>
      </div>
    </div>
  )
}
