"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ServiceDropdown from "@/components/service-dropdown"
import ClinicSenseButton from "@/components/clinicsense-button"
import InfoModal from "@/components/info-modal"
import { useState } from "react"

export default function HomePage() {
  const [modalContent, setModalContent] = useState<string>("")
  const [modalTitle, setModalTitle] = useState<string>("")
  const [isModalOpen, setIsModalOpen] = useState(false)

  const scopeOfPracticeText = `Registered Massage Therapists in Ontario constitute a regulated health profession in much the same way that physicians, nurses, physiotherapists and chiropractors are regulated. The profession is governed by a Scope of Practice, which is defined as follows:

"The practice of massage therapy is the assessment of the soft tissue and joints of the body, and the treatment and prevention of physical dysfunction and pain of the soft tissues and joints by manipulation to develop, maintain, rehabilitate or augment physical function, or relieve pain." (Massage Therapy Act, 1991)

Within their practice, massage therapists will use a variety of procedures and modalities to provide services within the scope of practice. "Massage" is a general term describing one or several methods of treatment and is often mistakenly used and confused with the practice of massage therapy.`

  const benefitsText = `Massage therapy treatments provided by a Registered Massage Therapist can offer significant benefits for a variety of conditions and for diverse patient populations. Whether you need to have a moment of relaxation, reduce muscle tension or attain relief from chronic pain, massage therapy can enhance your overall well-being. Massage therapy can help alleviate musculoskeletal disorders associated with everyday stress, muscular overuse, physical manifestation of mental distress and many persistent pain syndromes.

Massage therapy can be an important part of your health maintenance plan by:
• Reducing or eliminating pain
• Improving joint mobility
• Improving lymphatic drainage
• Reducing muscular tension

Massage therapy can treat both acute and chronic conditions. RMTs work with a wide variety of patients in the treatment of illness, injury, rehabilitation and disability.`

  const conditionsTreatedText = `Massage therapy can prove beneficial to many conditions, including but not limited to the following:

• Anxiety and Depression
• Arthritis
• Asthma and Emphysema
• Cancer
• Carpal Tunnel Syndrome
• Chronic Fatigue Syndrome
• Dislocations
• Edema
• Fibromyalgia
• Headaches
• Inflammatory Conditions
• Insomnia
• Lymphoedema
• Multiple Sclerosis
• Muscle Tension and Spasm
• Parkinson's Disease
• Plantar Fasciitis
• Post-Surgical Rehabilitation
• Post-Traumatic Stress Disorder (PTSD)
• Pregnancy and Labor Support
• Sciatica
• Scoliosis
• Sports Injuries
• Strains and Sprains
• Stress and Stress-Related Conditions
• Stroke
• Tendinitis
• Whiplash

Massage therapy can also be used as part of a preventative care program. This includes sports training, injury prevention, ongoing stress management and more!

Your massage therapist will require an overall picture of your current health and a detailed health history in order to design a treatment plan that's right for you. If a massage therapist determines that your condition would be better treated by another healthcare professional, they will make the appropriate referral.`

  const techniquesText = `Treatments are based on General Swedish Massage techniques and may be combined with Deep Tissue Massage, Myofascial Release, Trigger Point Therapy, Manual Lymphatic Drainage and Joint Mobilization Techniques. Ongoing assessment, remedial exercise and/or home care instruction is also part of this comprehensive treatment session based on the client's goals and comfort.

Please note: In cases where there is more than one area of complaint, longer treatment times (75 or 90 minute) are recommended.`

  const laserScienceText = `Ebb'nFlow Therapeutics uses the BIOFLEX® system of Class 3b lasers together with large surface arrays of bicolour LEDs that affect a large volume of circulating blood as well as underlying tissues resulting in both a powerful systemic and direct photobiomodulation effect.

Please visit BioflexLaser.com for more info.`

  const massageDropdownItems = [
    { title: "Scope of Practice", modal: scopeOfPracticeText },
    { title: "Benefits of Massage Therapy", modal: benefitsText },
    { title: "Conditions Treated", modal: conditionsTreatedText },
    { title: "Techniques", modal: techniquesText },
  ]

  const laserDropdownItems = [{ title: "The Science", modal: laserScienceText }]

  const handleModalOpen = (content: string, title: string) => {
    setModalContent(content)
    setModalTitle(title)
    setIsModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-beige-lightest">
      <InfoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} content={modalContent} title={modalTitle} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-beige-light to-beige py-20 lg:py-32 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 flex flex-col items-center lg:items-start">
              <div className="space-y-6 text-center lg:text-left">
                <h1 className="text-4xl lg:text-5xl font-light text-gray-800">
                  Ebb'nFlow <span className="font-normal text-nature-green">Therapeutics</span>
                </h1>
                <p className="text-2xl lg:text-3xl font-light text-gray-700 italic">
                  Excellence in Massage Therapy Since 2013
                </p>
                <p className="text-xl text-gray-600 leading-relaxed">
                  A serene, home-based practice in the heart of downtown St Catharines
                </p>
                <p className="text-lg text-nature-green font-medium">Owned and operated by Dahlia B. Steinberg RMT.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start">
                <ClinicSenseButton className="w-full sm:w-auto" size="medium" color="green" />
                <Button
                  variant="outline"
                  size="lg"
                  className="border-nature-green text-nature-green hover:bg-beige-light bg-transparent w-full sm:w-auto"
                  asChild
                >
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative lg:order-first">
              <Image
                src="/images/reception-area.jpg"
                alt="Welcoming reception area at Ebb'nFlow Therapeutics"
                width={600}
                height={700}
                className="rounded-2xl shadow-2xl object-cover w-full h-[500px] lg:h-[600px]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="bg-beige-light p-8 rounded-2xl text-left max-w-3xl mx-auto border border-beige">
              <p className="text-gray-700 leading-relaxed mb-4">
                Ebb'nFlow Therapeutics provides Massage Therapy that is attentive to your unique needs and goals.
                Whether you are looking for recovery from the stress and strains of work, to manage pain, prevent injury
                or improve your physical performance, we're here to meet you where you are.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Unlike any other massage therapy practice, Ebb'nFlow Therapeutics also offers a distinctly unique
                service that combines the cutting edge technology of Laser Therapy (Photobiomodulation) in combination
                with massage therapy for accelerated healing of acute pain conditions and injury.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-beige-lightest scroll-mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-light text-gray-800 mb-4">Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Please click on the links below to learn more about the unique services offered, based on a comprehensive,
              clinical practice of Massage Therapy.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Massage Therapy */}
            <Card className="border-beige hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardHeader className="pb-4">
                <Image
                  src="/images/treatment-room.jpg"
                  alt="Professional massage therapy treatment room"
                  width={400}
                  height={250}
                  className="rounded-lg object-cover w-full h-48"
                />
              </CardHeader>
              <CardContent className="space-y-4">
                <CardTitle className="text-xl font-medium text-gray-800">Massage Therapy Treatment</CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  General Swedish Massage combined with specialized techniques tailored to your specific needs.
                </CardDescription>

                <ServiceDropdown
                  items={massageDropdownItems}
                  title="Learn More About Massage Therapy"
                  onModalOpen={handleModalOpen}
                />
                <div className="pt-2">
                  <ClinicSenseButton className="w-full" size="small" color="green" />
                </div>
              </CardContent>
            </Card>

            {/* Laser Therapy */}
            <Card className="border-beige hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardHeader className="pb-4">
                <Image
                  src="/images/bioflex-laser.png"
                  alt="BioFlex Laser Therapy - The safe and effective way to eliminate pain"
                  width={400}
                  height={250}
                  className="rounded-lg object-cover w-full h-48"
                />
              </CardHeader>
              <CardContent className="space-y-4">
                <CardTitle className="text-xl font-medium text-gray-800">Laser Therapy Treatment</CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Stand alone or combined with Massage Therapy (recommended). Laser therapy is the use of red and
                  infrared light that provides accelerated healing for the treatment of musculoskeletal injury, wounds,
                  arthritis, and nerve injury.
                </CardDescription>

                <ServiceDropdown
                  items={laserDropdownItems}
                  title="Learn More About Laser Therapy"
                  onModalOpen={handleModalOpen}
                />
                <div className="pt-2">
                  <ClinicSenseButton className="w-full" size="small" color="green" />
                </div>
              </CardContent>
            </Card>

            {/* Movement Education */}
            <Card className="border-beige hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardHeader className="pb-4">
                <Image
                  src="/images/movement-class.png"
                  alt="Movement education class with participants in a studio"
                  width={400}
                  height={250}
                  className="rounded-lg object-cover w-full h-48"
                />
              </CardHeader>
              <CardContent className="space-y-4">
                <CardTitle className="text-xl font-medium text-gray-800">Movement Education</CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Remedial exercise aka "Rem-Ex" instruction involves teaching targeted strength, stretch or mobility
                  exercises that further the benefits of massage therapy long term.
                </CardDescription>
                <Button
                  variant="outline"
                  className="w-full border-nature-green text-nature-green hover:bg-beige-light bg-transparent mb-2"
                  asChild
                >
                  <Link href="/movement">See Movement Workshops</Link>
                </Button>
                <ClinicSenseButton className="w-full" size="small" color="green" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="prices" className="py-20 bg-white scroll-mt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-light text-gray-800 text-center mb-12">Prices</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Main Services */}
              <Card className="border-beige">
                <CardHeader>
                  <CardTitle className="text-xl font-medium text-gray-800">Massage and/or Laser Therapy</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">30 Minute</span>
                      <span className="text-gray-800 font-medium">
                        $53.50 <span className="text-sm text-gray-600">(+$6.95 HST)</span>
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">45 Minute</span>
                      <span className="text-gray-800 font-medium">
                        $80.25 <span className="text-sm text-gray-600">(+$10.43 HST)</span>
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">60 Minute</span>
                      <span className="text-gray-800 font-medium">
                        $107.00 <span className="text-sm text-gray-600">(+$13.91 HST)</span>
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">75 Minute</span>
                      <span className="text-gray-800 font-medium">
                        $133.75 <span className="text-sm text-gray-600">(+$17.38 HST)</span>
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">90 Minute</span>
                      <span className="text-gray-800 font-medium">
                        $160.50 <span className="text-sm text-gray-600">(+$20.86 HST)</span>
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Add-on Services */}
              <Card className="border-beige">
                <CardHeader>
                  <CardTitle className="text-xl font-medium text-gray-800">Add-on Laser Therapy</CardTitle>
                  <CardDescription className="text-gray-600">
                    If combined simultaneously with Massage Therapy for more than 15 minutes (Subject to therapist's
                    discretion)
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <span className="text-2xl font-medium text-nature-green">$1.00/minute</span>
                    <span className="text-sm text-gray-600 block">(+ HST)</span>
                  </div>
                  <p className="text-sm text-gray-600 text-center">Available in 15, 30, 45 and 60 minute intervals</p>
                </CardContent>
              </Card>
            </div>

            {/* Payment & Insurance Info */}
            <div className="mt-12 space-y-6">
              <Card className="border-beige bg-beige-lightest">
                <CardContent className="p-6">
                  <div className="mb-6">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">Payment & Insurance</h3>
                    <p className="text-lg font-bold text-nature-green">Direct billing is now available</p>
                  </div>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      <strong>Accepted:</strong> Cash, Direct Billing, E-transfer, Debit, Credit Card (Visa, AmEx,
                      Mastercard)
                    </p>
                    <p>
                      RMTs are regulated health care professionals recognized by insurance companies across Ontario.
                    </p>
                    <p>
                      It is recommended that clients check with their insurance provider about whether they are required
                      to have a doctor's note in order to submit a claim.
                    </p>
                    <p>
                      Your receipt will include the practitioner's registration number necessary for an insurance claim
                      submission. This number verifies that your therapist is registered with the College of Massage
                      Therapists of Ontario (CMTO).
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-beige-light">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8">
            <h2 className="text-2xl font-light text-gray-800">Ready to Begin Your Wellness Journey?</h2>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-nature-green" />
                <span>(289) 969-3219</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-nature-green" />
                <span>Downtown St. Catharines</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <ClinicSenseButton className="w-full sm:w-auto" size="medium" color="green" />
              <Button
                size="lg"
                asChild
                className="bg-nature-green hover:bg-nature-green-dark text-white w-full sm:w-auto"
              >
                <Link href="/contact">Contact Dahlia</Link>
              </Button>
            </div>
            <div className="pt-4">
              <Image
                src="/images/rmt-certification.png"
                alt="Registered Massage Therapist - Professional Hands You Can Trust"
                width={200}
                height={90}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
