import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ClinicSenseButton from "@/components/clinicsense-button"

export default function MovementPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-stone-100 to-stone-200 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="outline" className="text-stone-600 border-stone-300">
              Movement Education
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-light text-stone-800">Movement & Mobility</h1>
            <p className="text-xl text-stone-600 leading-relaxed">
              Free form/improvisational movement and mobility training as a form of personal and artistic expression and
              wellness is what ultimately drives Dahlia to continue to learn about our amazing bodies and how we can all
              move more gracefully as we age.
            </p>
          </div>
        </div>
      </section>

      {/* Movement Education Options */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light text-stone-800 text-center mb-12">Movement Education Options</h2>

            <div className="space-y-8">
              <Card className="border-stone-200">
                <CardContent className="p-8">
                  <p className="text-stone-600 leading-relaxed mb-6">
                    Remedial exercise aka "Rem-Ex" instruction involves teaching a few targeted strength, stretch or
                    mobility exercises that are aimed at furthering the benefits of massage therapy long term, which is
                    an intrinsic component of a comprehensive treatment.
                  </p>
                  <p className="text-stone-600 leading-relaxed mb-6">
                    Although this often comes highly recommended, not everyone is interested in learning a new exercise
                    immediately after having a massage. This makes a lot of sense, and yet Dahlia will still do her best
                    to encourage you, within reason.
                  </p>
                  <p className="text-stone-600 leading-relaxed">That said, clients have a few options:</p>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-stone-200">
                  <CardHeader>
                    <div className="w-12 h-12 bg-stone-700 rounded-full flex items-center justify-center mb-4">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <CardTitle className="text-lg font-medium text-stone-800">Personal Choice</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-stone-600">
                      Clients may request or deny remedial exercise instruction as part of treatment, based on their
                      personal goals.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-stone-200">
                  <CardHeader>
                    <div className="w-12 h-12 bg-stone-700 rounded-full flex items-center justify-center mb-4">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <CardTitle className="text-lg font-medium text-stone-800">Extended Sessions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-stone-600">
                      Clients can request to allot up to 50% of their treatment time (15 to 45 minutes) for Rem-Ex
                      instruction before or after their massage.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-stone-200">
                  <CardHeader>
                    <div className="w-12 h-12 bg-stone-700 rounded-full flex items-center justify-center mb-4">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <CardTitle className="text-lg font-medium text-stone-800">Group Workshops</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-stone-600">
                      Clients can also sign up for upcoming movement workshops for a more comprehensive group learning
                      experience.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light text-stone-800 text-center mb-12">The Ebb'nFlow Origin Story</h2>

            <Card className="border-stone-200 bg-white">
              <CardContent className="p-8">
                <div className="space-y-6 text-stone-600 leading-relaxed">
                  <p>
                    The original concept of Ebb'nFlow Massage (now Ebb'nFlow Therapeutics) was born out of Dahlia's
                    initial work as a yoga instructor, before she became a massage therapist. Dahlia taught private,
                    one-on-one sessions as well as classes around the GTA from 2004-2009.
                  </p>
                  <p>
                    She recognized the need to meet students where they were instead of insisting that they push through
                    their pain and fatigue similarly to the approach of a personal trainer. Some days they would arrive
                    in a lot of pain and would need a gentler approach such as more periods of rest or "ebb" between
                    exercises or hands on work such as massage at the end of their sessions.
                  </p>
                  <p>
                    Dahlia's natural talent for massage as a component of her sessions enabled students to show up more
                    consistently for practice instead of skipping practice out of concern that they would not be able to
                    make it through a session.
                  </p>
                  <p className="font-medium text-stone-800">
                    Since consistency is key to success, a more fluid and compassionate approach to teaching one-on-one
                    was born and clients were given permission to move as they needed through periods of "ebb" or "flow"
                    with grace and freedom from the need to over achieve.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Workshops */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light text-stone-800 text-center mb-12">Movement & Mobility Workshops</h2>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <Card className="border-stone-200">
                  <CardHeader>
                    <Heart className="h-8 w-8 text-stone-600 mb-2" />
                    <CardTitle className="text-xl font-medium text-stone-800">Fun, Liberating & Educational</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-stone-600 leading-relaxed">
                      Dahlia's movement and mobility workshops are aimed towards adults and seniors and offer
                      opportunities to gain greater strength, flexibility, mobility and balance as well as to embrace
                      the discovery of one's own unique expression through movement and dance.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-stone-200 bg-stone-50">
                  <CardContent className="p-6">
                    <h3 className="font-medium text-stone-800 mb-3">Workshop Benefits</h3>
                    <div className="space-y-2 text-stone-600">
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-stone-500" />
                        <span>Greater strength and flexibility</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-stone-500" />
                        <span>Improved mobility and balance</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-stone-500" />
                        <span>Unique personal expression through movement</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-stone-500" />
                        <span>Discovery of dance and creative movement</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="relative">
                <Image
                  src="/images/dahlia-portrait.jpg"
                  alt="Dahlia Steinberg - Movement and wellness educator"
                  width={400}
                  height={500}
                  className="rounded-2xl shadow-lg object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-2 rounded-md">
                  <p className="text-sm font-medium text-stone-800">Dahlia - Your Movement Guide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Expression */}
      <section className="py-20 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-light text-stone-800">Continuing the Dance</h2>
            <p className="text-lg text-stone-600 leading-relaxed">
              Free form/improvisational movement and mobility training as a form of personal and artistic expression and
              wellness is what ultimately drives Dahlia to continue to learn about our amazing bodies and how we can all
              move more gracefully as we age.
            </p>
            <p className="text-stone-600 leading-relaxed">
              She continues to dance for her own enjoyment and can be found performing or choreographing for community
              arts-based projects when opportunities arise.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Dahlia is working towards offering more movement and mobility classes and workshops in the future so
              please stay tuned for updates by checking the Movement section of this website.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8">
            <h2 className="text-2xl font-light text-stone-800">Ready to Move with More Freedom?</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              If long lasting improvement is your goal than you may want to consider how Dahlia's skills as a teacher
              could benefit you through either one-on-one instruction sessions that can be combined with massage therapy
              or group workshops.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <ClinicSenseButton size="medium" color="black" />
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-stone-300 text-stone-700 hover:bg-stone-200 bg-transparent"
              >
                <Link href="/contact">Ask About Workshops</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
