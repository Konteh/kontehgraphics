import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Label } from "./ui/label";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Get In <span className="bg-gradient-to-r from-[#F26241] to-[#E78723] bg-clip-text text-transparent font-aref">Touch</span>
          </h2>
          <p className="text-xl text-gray-600">
            Have a project in mind? Let's discuss how we can help bring your vision to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl text-gray-900 mb-6">Contact Information</h3>
              <p className="text-gray-600 mb-8">
                Ready to start your next project? Reach out to us and let's create something amazing together.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <Card className="p-6 border-0 bg-gradient-to-r from-orange-50 to-amber-50 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-r from-[#F26241] to-[#E78723] text-white rounded-lg">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Email Us</h4>
                    <a href="mailto:hello@kontehgraphics.com" className="text-gray-600 hover:text-[#F26241] transition-colors">
                      kontehgraphics@gmail.com
                    </a>
                    <br />
                    <a href="mailto:info@kontehgraphics.com" className="text-gray-600 hover:text-[#F26241] transition-colors">
                      info@kontehgraphics.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-0 bg-gradient-to-r from-orange-50 to-amber-50 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-r from-[#F26241] to-[#E78723] text-white rounded-lg">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Call Us</h4>
                    <a href="tel:+15551234567" className="text-gray-600 hover:text-[#F26241] transition-colors">
                      +220 334167
                    </a>
                    <br />
                    <a href="tel:+15559876543" className="text-gray-600 hover:text-[#F26241] transition-colors">
                      +220 7654167
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-0 bg-gradient-to-r from-orange-50 to-amber-50 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-r from-[#F26241] to-[#E78723] text-white rounded-lg">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Visit Us</h4>
                    <p className="text-gray-600">
                      13 Kairaba Avenue<br />
                      Kanifing Municipality<br />
                      Banjul, The Gambia
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Business Hours */}
            <Card className="p-6 border-0 bg-gray-50">
              <h4 className="text-gray-900 mb-4">Business Hours</h4>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 border-0 shadow-xl">
            <h3 className="text-2xl text-gray-900 mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    placeholder="Mama"
                    className="border-gray-300 focus:border-[#F26241] focus:ring-[#F26241]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    placeholder="Marong"
                    className="border-gray-300 focus:border-[#F26241] focus:ring-[#F26241]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="mama@gmail.com"
                  className="border-gray-300 focus:border-[#F26241] focus:ring-[#F26241]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+220 3451445"
                  className="border-gray-300 focus:border-[#F26241] focus:ring-[#F26241]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  placeholder="Project Inquiry"
                  className="border-gray-300 focus:border-[#F26241] focus:ring-[#F26241]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  rows={5}
                  className="border-gray-300 focus:border-[#F26241] focus:ring-[#F26241]"
                />
              </div>

              <Button className="w-full bg-gradient-to-r from-[#F26241] to-[#E78723] text-white hover:shadow-lg transition-all py-6">
                Send Message
                <Send className="ml-2" size={20} />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
