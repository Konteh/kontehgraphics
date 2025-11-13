import { Star, Quote } from "lucide-react";
import { Card } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";

export function Testimonials() {
  const testimonials = [
    {
      name: "Modou Jallow",
      role: "CEO, Modem Pay",
      content: "Konteh Graphics transformed our brand identity completely. Their creative vision and attention to detail exceeded our expectations. The team is professional, responsive, and truly understands what it takes to make a brand stand out.",
      rating: 5,
      initials: "MJ",
      color: "bg-gradient-to-br from-[#F26241] to-[#E78723]",
    },
    {
      name: "Michael Chen",
      role: "Marketing Director, DesignHub",
      content: "Working with Konteh Graphics on our digital marketing campaign was a game-changer. They delivered stunning visuals and a strategy that significantly increased our engagement and conversions.",
      rating: 5,
      initials: "MC",
      color: "bg-gradient-to-br from-[#E78723] to-[#F26241]",
    },
    {
      name: "Awa Dacosta",
      role: "Director, Fantanka",
      content: "The photography and videography services are top-notch! Konteh Graphics captured our products beautifully and helped us create content that truly resonates with our audience. Highly recommend!",
      rating: 5,
      initials: "AD",
      color: "bg-gradient-to-br from-[#F26241] to-[#E78723]",
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-4 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            What Our <span className="bg-gradient-to-r from-[#F26241] to-[#E78723] bg-clip-text text-transparent font-aref">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it - hear from the businesses we've helped succeed
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 bg-white border-0"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-10 h-10 text-orange-200" />
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <Avatar className={testimonial.color}>
                  <AvatarFallback className="text-white">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Overall Rating */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-white px-8 py-4 rounded-full shadow-lg">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-gray-900">5.0 out of 5</span>
            <span className="text-gray-600">from 50+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
