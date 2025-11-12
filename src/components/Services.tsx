import { Palette, TrendingUp, Camera, Video, Globe, Layers } from "lucide-react";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Services() {
  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Branding",
      description: "Create a memorable brand identity that resonates with your audience and stands out in the market.",
      image: "https://images.unsplash.com/photo-1702047054352-cf264d3b1a9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGRlc2lnbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjI4NDQwNzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      color: "from-[#F26241] to-[#E78723]",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "Drive growth with data-driven marketing strategies that convert and engage your target audience.",
      image: "images/kawsu.jpg",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Photography",
      description: "Capture stunning visuals that tell your story and showcase your products in the best light.",
      image: "images/fruits.jpg",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Videography",
      description: "Produce compelling video content that engages viewers and brings your message to life.",
      image: "images/videosdg.png",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description: "Build responsive, user-friendly websites that deliver seamless experiences across all devices.",
      image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NjI3NDA1MTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Graphic Design",
      description: "Design eye-catching graphics that communicate your message and elevate your brand presence.",
      image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2Mjc0OTgwN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-[#F26241] to-[#E78723] bg-clip-text text-transparent font-aref">Services</span>
          </h2>
          <p className="text-xl text-gray-600">
            We offer a comprehensive range of creative services to help your business thrive in the digital age
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0"
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-60 group-hover:opacity-40 transition-opacity`}></div>
              </div>
              <div className="p-6">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${service.color} text-white mb-4`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
