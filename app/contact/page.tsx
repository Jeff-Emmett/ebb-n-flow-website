"use client"

import type React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Clock, Mail, MapPin, Phone } from "lucide-react"
import { useState } from "react"
import ClinicSenseButton from "@/components/clinicsense-button"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-stone-100 to-stone-200 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="outline" className="text-stone-600 border-stone-300">
              Get in Touch
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-light text-stone-800">Contact Us</h1>
            <div className="text-xl font-light text-stone-700 italic mb-4">
              "A place to unwind, a place to heal, a place to grow"
            </div>
            <p className="text-xl text-stone-600 leading-relaxed">
              Ready to experience boutique wellness? Let's chat about creating your personalized sanctuary for healing
              and self-care.
            </p>
          </div>
        </div>
      </section>

      {/* Clinic Images Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="relative">
              <Image
                src="/images/clinic-exterior.jpg"
                alt="Ebb'nFlow Therapeutics clinic exterior"
                width={400}
                height={300}
                className="rounded-lg shadow-md object-cover w-full h-64"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded-md">
                <p className="text-sm font-medium text-stone-800">Our Welcoming Exterior</p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/yellow-door.jpg"
                alt="Distinctive yellow entrance door"
                width={400}
                height={300}
                className="rounded-lg shadow-md object-cover w-full h-64"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded-md">
                <p className="text-sm font-medium text-stone-800">Find Our Yellow Door</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-stone-200">
              <CardHeader>
                <CardTitle className="text-2xl font-light text-stone-800">Send Us a Message</CardTitle>
                <CardDescription className="text-stone-600">
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-stone-700">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="border-stone-300 focus:border-stone-500"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-stone-700">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="border-stone-300 focus:border-stone-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-stone-700">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(289) 969-3219"
                      className="border-stone-300 focus:border-stone-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-stone-700">
                      Service of Interest
                    </Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:border-stone-500"
                    >
                      <option value="">Select a service</option>
                      <option value="massage">Massage Therapy</option>
                      <option value="laser">Laser Therapy</option>
                      <option value="movement">Movement Therapy</option>
                      <option value="combination">Combination Treatment</option>
                      <option value="consultation">Initial Consultation</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-stone-700">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your needs, concerns, or questions..."
                      rows={5}
                      className="border-stone-300 focus:border-stone-500"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-stone-700 hover:bg-stone-800">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-stone-200">
                <CardHeader>
                  <CardTitle className="text-xl font-medium text-stone-800">Visit Our Clinic</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-stone-600 mt-1" />
                    <div>
                      <p className="font-medium text-stone-800">Address</p>
                      <p className="text-stone-600">
                        123 Wellness Way
                        <br />
                        Suite 200
                        <br />
                        St. Catharines, ON L2R 7P9
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-stone-600 mt-1" />
                    <div>
                      <p className="font-medium text-stone-800">Phone</p>
                      <p className="text-stone-600">(289) 969-3219</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-stone-600 mt-1" />
                    <div>
                      <p className="font-medium text-stone-800">Email</p>
                      <p className="text-stone-600">info@ebbnflowtherapeutics.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-stone-200">
                <CardHeader>
                  <CardTitle className="text-xl font-medium text-stone-800">Office Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-stone-700">Monday - Thursday</span>
                      <span className="text-stone-600">9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-stone-700">Friday</span>
                      <span className="text-stone-600">9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-stone-700">Saturday</span>
                      <span className="text-stone-600">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-stone-700">Sunday</span>
                      <span className="text-stone-600">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-stone-200 bg-stone-100">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-stone-600 mt-1" />
                    <div>
                      <p className="font-medium text-stone-800 mb-2">Emergency Contact</p>
                      <p className="text-sm text-stone-600">
                        For urgent matters outside of business hours, please call our emergency line at (289) 969-3220
                        or visit your nearest emergency room.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8">
            <h2 className="text-2xl font-light text-stone-800">Ready for Your Personal Wellness Experience?</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Book your private session in our cozy, boutique space. Experience what it means to have dedicated time and
              space just for your wellness journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ClinicSenseButton size="large" color="black" />
              <Button
                variant="outline"
                size="lg"
                className="border-stone-300 text-stone-700 hover:bg-stone-200 bg-transparent"
              >
                Call for Personal Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
