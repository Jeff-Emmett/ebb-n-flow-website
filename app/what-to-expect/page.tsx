import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, FileText, Heart } from "lucide-react"
import Link from "next/link"
import ClinicSenseButton from "@/components/clinicsense-button"
import Image from "next/image"

export default function WhatToExpectPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-stone-100 to-stone-200 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="outline" className="text-stone-600 border-stone-300">
              Your First Visit
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-light text-stone-800">What to Expect</h1>
            <p className="text-xl text-stone-600 leading-relaxed">
              Once you have successfully booked your initial appointment, you will receive a confirmation email with a
              few forms to fill out ahead of time.
            </p>
          </div>
        </div>
      </section>

      {/* Initial Appointment Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light text-stone-800 text-center mb-12">The Initial Appointment</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-stone-200">
                <CardHeader>
                  <FileText className="h-8 w-8 text-stone-600 mb-2" />
                  <CardTitle className="text-xl font-medium text-stone-800">Pre-Appointment Forms</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-stone-600">Contact Information</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-stone-600">Reason for Visit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-stone-600">Health History</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-stone-600">Consent to Policies, Assessment and Treatment</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-stone-200">
                <CardHeader>
                  <Clock className="h-8 w-8 text-stone-600 mb-2" />
                  <CardTitle className="text-xl font-medium text-stone-800">Assessment Process</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-stone-600">
                    Your initial appointment begins with an in-person review of forms and an assessment that can range
                    from simple to more involved, depending on the complexity or severity of your condition.
                  </p>
                  <p className="text-stone-600">
                    This allows your therapist to ascertain whether there are any contraindications or modifications
                    that may need to be considered for safe and effective treatment.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-stone-200 bg-stone-100">
              <CardContent className="p-8">
                <h3 className="text-xl font-medium text-stone-800 mb-4">First Session Components</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <p className="text-stone-700">• Forms review</p>
                    <p className="text-stone-700">• Intake discussion</p>
                    <p className="text-stone-700">• Initial assessment</p>
                    <p className="text-stone-700">• Treatment plan development</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-stone-700">• Treatment of sensitive areas (if indicated)</p>
                    <p className="text-stone-700">• Diagnostics and referrals</p>
                    <p className="text-stone-700">• Ongoing assessment planning</p>
                    <p className="text-stone-700">• Treatment plan maintenance</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Assessment Details */}
      <section className="py-20 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light text-stone-800 text-center mb-12">Comprehensive Assessment</h2>

            <div className="space-y-6">
              <Card className="border-stone-200">
                <CardContent className="p-6">
                  <p className="text-stone-600 leading-relaxed">
                    The first treatment session requires additional time to go over the forms and perform an initial
                    assessment that may include postural observations, range of motion testing, and/or neurological and
                    special orthopaedic testing.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-stone-200">
                <CardContent className="p-6">
                  <p className="text-stone-600 leading-relaxed">
                    With numerous tools available to her, Dahlia continuously discerns which techniques may be most
                    effective and regularly reassesses client responses to ensure that treatments continue to be
                    beneficial.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Experience */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light text-stone-800 text-center mb-12">Your Treatment Experience</h2>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <Card className="border-stone-200">
                  <CardHeader>
                    <Heart className="h-8 w-8 text-stone-600 mb-2" />
                    <CardTitle className="text-xl font-medium text-stone-800">Personalized Approach</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-stone-600 leading-relaxed">
                      Dahlia meets clients where they are, and is able to offer either a quiet retreat or a fun,
                      friendly conversational interaction during treatments. She prioritizes client's goals, with the
                      utmost respect for their comfort, time and resources.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-stone-200">
                  <CardContent className="p-6">
                    <h3 className="font-medium text-stone-800 mb-3">Communication & Consent</h3>
                    <p className="text-stone-600 leading-relaxed">
                      She encourages an atmosphere of open, two-way communication that respects privacy, autonomy and
                      preferences such as depth of pressure and special consent for the treatment of sensitive areas if
                      indicated, guided strictly by the principles of ethical practice adhered to by all registrants of
                      the CMTO.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <div className="relative">
                  <Image
                    src="/images/treatment-room.jpg"
                    alt="Professional treatment room setup"
                    width={400}
                    height={300}
                    className="rounded-2xl shadow-lg object-cover w-full h-64"
                  />
                  <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-2 rounded-md">
                    <p className="text-sm font-medium text-stone-800">Your Private Treatment Space</p>
                  </div>
                </div>
                <Card className="border-stone-200 bg-stone-50">
                  <CardContent className="p-6">
                    <h3 className="font-medium text-stone-800 mb-3">A Science and an Art Form</h3>
                    <p className="text-stone-600 leading-relaxed mb-4">
                      A massage from Dahlia is an experience and often also an education. Her approach is intuitive,
                      evidence-based and trauma-informed. Her own personal experiences with injury and chronic pain has
                      instilled a high level of empathy for and understanding of clients' complaints as well as her
                      insistence on professionalism and excellence of care.
                    </p>
                    <p className="text-stone-600 leading-relaxed">
                      There's always a unique and inspiring playlist in the background. Clients can also request music
                      that they enjoy, adding to an experience that is tailored just for them. Complimentary
                      aromatherapy is also available by request.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-stone-200">
                  <CardContent className="p-6">
                    <h3 className="font-medium text-stone-800 mb-3">Education & Home Care</h3>
                    <p className="text-stone-600 leading-relaxed">
                      Dahlia is a teacher at heart, so you likely won't be able to walk away without being encouraged to
                      learn a stretch or strengthening exercise or about how to incorporate a home care practice into
                      your routine to enhance the long term effects of treatment between sessions.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8">
            <h2 className="text-2xl font-light text-stone-800">Ready to Experience Holistic Care?</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              You can expect to have your primary area of concern addressed directly, within a treatment that aims to
              treat the body holistically as an interconnected system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <ClinicSenseButton size="medium" color="black" />
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-stone-300 text-stone-700 hover:bg-stone-200 bg-transparent"
              >
                <Link href="/contact">Have Questions?</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
