import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setSubmitStatus("error");
      setStatusMessage("Please fill in all required fields.");
      setIsSubmitting(false);
      return;
    }

    try {
      // Send email using Formspree (free service, no setup required)
      const response = await fetch("https://formspree.io/f/mblqlrnq", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone || "Not provided",
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setStatusMessage("Thank you! Your message has been sent successfully. We'll get back to you soon.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Failed to send message:", error);
      setSubmitStatus("error");
      setStatusMessage("Failed to send your message. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    placeholder="Mama"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="border-gray-300 focus:border-[#F26241] focus:ring-[#F26241]"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    placeholder="Marong"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="border-gray-300 focus:border-[#F26241] focus:ring-[#F26241]"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="mama@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="border-gray-300 focus:border-[#F26241] focus:ring-[#F26241]"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+220 3451445"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border-gray-300 focus:border-[#F26241] focus:ring-[#F26241]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject *</Label>
                <Input
                  id="subject"
                  placeholder="Project Inquiry"
                  value={formData.subject}
                  onChange={handleChange}
                  className="border-gray-300 focus:border-[#F26241] focus:ring-[#F26241]"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="border-gray-300 focus:border-[#F26241] focus:ring-[#F26241]"
                  required
                />
              </div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800">{statusMessage}</p>
                </div>
              )}
              {submitStatus === "error" && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800">{statusMessage}</p>
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#F26241] to-[#E78723] text-white hover:shadow-lg transition-all py-6 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="ml-2" size={20} />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
