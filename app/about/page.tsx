import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import ClinicSenseButton from "@/components/clinicsense-button"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-beige-lightest">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-beige-light to-beige py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="outline" className="text-stone-600 border-stone-300">
              About Dahlia
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-light text-stone-800">Dahlia B. Steinberg, RMT</h1>
            <div className="text-xl lg:text-2xl font-light text-stone-700 italic mb-4">
              Founder and Owner of Ebb'nFlow Therapeutics
            </div>
            <p className="text-xl text-stone-600 leading-relaxed">
              A lifelong interest in movement and the healing arts is the foundation of her practice as a massage
              therapist, laser therapist, and movement educator.
            </p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl font-light text-stone-800">Professional Background</h2>
              <p className="text-lg text-stone-600 leading-relaxed">
                Dahlia's personal and professional experience with a wide range of bodywork practices including yoga,
                pilates, somatic movement and modern dance spans 30 years and informs her unique style and approach to
                her clinical practice of massage therapy.
              </p>
              <p className="text-stone-600 leading-relaxed">
                She is registered with the College of Massage Therapists of Ontario (CMTO), which is the provincial
                regulatory body that protects the public interest by monitoring the ongoing professional development and
                ethical standards of RMTs.
              </p>

              <div className="bg-beige-light p-6 rounded-lg">
                <h3 className="font-medium text-stone-800 mb-3">Practice Evolution</h3>
                <div className="space-y-3 text-stone-600 text-sm">
                  <p>
                    <strong>2013:</strong> Started Ebb'nflow Massage, working with Dr. Enrico Schirru at Absolute
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
                    <strong>2025:</strong> Relocated to downtown St. Catharines, rebranded to Ebb'nFlow Therapeutics
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/dahlia-portrait.jpg"
                alt="Dahlia B. Steinberg, RMT - Founder of Ebb'nFlow Therapeutics"
                width={400}
                height={500}
                className="rounded-2xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Education & Training */}
      <section className="py-20 bg-beige-lightest">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light text-stone-800 text-center mb-12">Education & Training</h2>

            <div className="space-y-8">
              <Card className="border-beige">
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium text-stone-800 mb-4">Formal Education</h3>
                  <div className="space-y-3 text-stone-600">
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
                      <strong>2003-05:</strong> Yoga Teacher Training, Yogaspace Toronto (200 hr diploma + Advanced
                      Teacher Training)
                    </p>
                    <p>
                      <strong>1998:</strong> School of Toronto Dance Theatre's Professional Training Program
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-beige">
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium text-stone-800 mb-4">Continuing Education</h3>
                  <div className="space-y-2 text-stone-600">
                    <p>• Myofascial therapy/structural integration</p>
                    <p>• Biodynamic craniosacral therapy</p>
                    <p>• Osteopathic techniques for RMTs</p>
                    <p>• Advanced sacro-lumbar and thoracic spine assessments and joint mobilization</p>
                    <p>• Axis Syllabus - evolving theory and practice of dynamic human movement</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-beige bg-beige-light">
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium text-stone-800 mb-4">Recognition & Support</h3>
                  <div className="space-y-2 text-stone-600">
                    <p>Massage Therapy is Dahlia's second career, supported by:</p>
                    <p>• Training and subsistence grant from the Dancer's Transition and Resource Centre (2010)</p>
                    <p>
                      • Special second year award for academic excellence (Dancer’s Transition and Resource Centre,
                      2011)
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Current Role */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-light text-stone-800">Teaching & Mentorship</h2>
            <p className="text-lg text-stone-600 leading-relaxed">
              Dahlia now also works once a week as a supervisor and teacher in the student massage therapy clinic, which
              is open to the public at the Ontario College of Health and Technology in Stoney Creek. This role helps to
              keep her engaged and informed in her current practice while inspiring her to encourage and mentor the next
              generation of massage therapists.
            </p>
          </div>
        </div>
      </section>

      {/* Meet Olivia Section */}
      <section className="py-20 bg-beige-lightest">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light text-stone-800 text-center mb-12">Meet Olivia</h2>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="relative">
                <Image
                  src="/images/olivia-cat.png"
                  alt="Olivia, the friendly clinic cat at Ebb'nFlow Therapeutics"
                  width={400}
                  height={400}
                  className="rounded-2xl shadow-lg object-cover w-full"
                />
              </div>
              <div className="space-y-4">
                <Card className="border-beige bg-white">
                  <CardContent className="p-6">
                    <p className="text-stone-600 leading-relaxed mb-4">
                      No visit to Ebb'nFlow Therapeutics would be complete without meeting Olivia, our gentle and
                      affectionate clinic companion. This sweet tabby girl has a calming presence that perfectly
                      complements the therapeutic atmosphere of our space.
                    </p>
                    <p className="text-stone-600 leading-relaxed mb-4">
                      Olivia enjoys greeting clients with soft purrs and will often curl up nearby during sessions,
                      adding an extra layer of comfort and relaxation to your experience. Her friendly demeanor and
                      peaceful energy make her a beloved part of the Ebb'nFlow family.
                    </p>
                    <p className="text-stone-600 leading-relaxed italic">
                      Please let us know if you have any allergies or prefer a cat-free session—we're happy to
                      accommodate all our clients' needs!
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-beige-light">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8">
            <h2 className="text-2xl font-light text-stone-800">Experience Dahlia's Unique Approach</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Combining 30 years of movement expertise with clinical massage therapy excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <ClinicSenseButton size="medium" color="green" />
              <Button size="lg" asChild className="bg-nature-green hover:bg-nature-green-dark text-white">
                <Link href="/what-to-expect">What to Expect</Link>
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
