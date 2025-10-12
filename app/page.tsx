import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import AnimatedHero from "@/components/animated-hero"
import ServiceDropdown from "@/components/service-dropdown"
import ClinicSenseButton from "@/components/clinicsense-button"

export default function HomePage() {
  const massageDropdownItems = [
    { title: "Scope of Practice", href: "/massage/scope" },
    { title: "Benefits of Massage Therapy", href: "/massage/benefits" },
    { title: "Conditions Treated", href: "/massage/conditions" },
    { title: "Techniques", href: "/massage/techniques" },
  ]

  const laserDropdownItems = [
    { title: "A note about Scope of Practice", href: "/laser/scope" },
    { title: "Benefits of Laser Therapy", href: "/laser/benefits" },
    { title: "Conditions Treated", href: "/laser/conditions" },
    { title: "The Science", href: "/laser/science" },
  ]

  return (
    <div className="min-h-screen bg-green-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-100 to-green-200 py-20 lg:py-32 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <AnimatedHero />
              <div
                className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up"
                style={{ animationDelay: "8s", animationFillMode: "forwards" }}
              >
                <ClinicSenseButton className="inline-block" size="medium" color="green" />
                <Button
                  variant="outline"
                  size="lg"
                  className="border-nature-green text-nature-green hover:bg-green-100 bg-transparent"
                  asChild
                >
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div
              className="relative opacity-0 animate-fade-in lg:order-first"
              style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
            >
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
            <h2 className="text-3xl lg:text-4xl font-light text-gray-800">A comfortable, home-based practice</h2>
            <p className="text-xl text-gray-600">in the heart of downtown St Catharines</p>
            <p className="text-lg text-nature-green font-medium">Owned and operated by Dahlia B. Steinberg RMT.</p>

            <div className="bg-green-100 p-8 rounded-2xl text-left max-w-3xl mx-auto border border-green-200">
              <p className="text-gray-700 leading-relaxed mb-4">
                A wholistic and comprehensive approach to wellness through a clinical practice in massage therapy that
                includes care for acute pain or injury and movement education that gets to the heart of the most common
                dysfunctions responsible for chronic pain.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether you are looking for stress reduction, maintenance, injury prevention, assessment or treatment,
                pain reduction, accelerated healing, improved performance or greater awareness and enjoyment of
                movement, Ebb'nFlow Therapeutics can meet you wherever you are and help you to achieve your wellness
                goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-light text-gray-800 mb-4">Services</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Massage Therapy */}
            <Card className="border-green-200 hover:shadow-lg transition-shadow duration-300 bg-white">
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
                <p className="text-sm text-gray-600 italic">(Click on the links below for more detailed info)</p>
                <ServiceDropdown items={massageDropdownItems} title="Learn More About Massage Therapy" />
                <div className="pt-2">
                  <ClinicSenseButton className="w-full" size="small" color="green" />
                </div>
              </CardContent>
            </Card>

            {/* Laser Therapy */}
            <Card className="border-green-200 hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardHeader className="pb-4">
                <Image
                  src="/images/clinic-entrance.jpg"
                  alt="Ebb'nFlow Therapeutics clinic entrance"
                  width={400}
                  height={250}
                  className="rounded-lg object-cover w-full h-48"
                />
              </CardHeader>
              <CardContent className="space-y-4">
                <CardTitle className="text-xl font-medium text-gray-800">Laser Therapy Treatment</CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Stand alone or combined with Massage Therapy. Laser Therapy utilizes the power of red and infrared
                  light...
                </CardDescription>
                <p className="text-sm text-gray-600 italic">(Click on the links below for more detailed info)</p>
                <ServiceDropdown items={laserDropdownItems} title="Learn More About Laser Therapy" />
                <div className="pt-2">
                  <ClinicSenseButton className="w-full" size="small" color="green" />
                </div>
              </CardContent>
            </Card>

            {/* Movement Education */}
            <Card className="border-green-200 hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardHeader className="pb-4">
                <Image
                  src="/images/reception-area.jpg"
                  alt="Comfortable space for movement education"
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
                  className="w-full border-nature-green text-nature-green hover:bg-green-100 bg-transparent mb-2"
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-light text-gray-800 text-center mb-12">Prices</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Main Services */}
              <Card className="border-green-200">
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
              <Card className="border-green-200">
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
              <Card className="border-green-200 bg-green-50">
                <CardContent className="p-6">
                  <h3 className="font-medium text-gray-800 mb-4">Payment & Insurance</h3>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      <strong>Accepted:</strong> Cash, E-transfer, Debit, Credit Card (Visa, AmEx, Mastercard)
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
                    <p className="text-gray-600 italic">
                      Direct billing is currently not available but coming soon. Stay tuned.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-100">
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
              <ClinicSenseButton size="medium" color="green" />
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-nature-green text-nature-green hover:bg-green-100 bg-transparent"
              >
                <Link href="/contact">Contact Dahlia</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
