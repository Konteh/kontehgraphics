import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Clients() {
  // Client logos
  const clients = [
    { name: "TechCorp", logo: "images/modemlogo.png"},
    { name: "DesignHub", logo: "images/gomindz.png" },
    { name: "MediaFlow", logo: "images/gomindzacademy.png" },
    { name: "BrandWorks", logo: "images/fantanka.png" },
    { name: "CreativeMinds", logo: "images/gthi.png" },
    { name: "DigitalEdge", logo: "images/infocheck.jpg" },
    { name: "PixelPerfect", logo: "images/wallyfitness.png" },
    { name: "StudioMax", logo: "images/solacefoundation.png" },
    { name: "InnovateCo", logo: "images/epm.png" },
    { name: "VisionaryLabs", logo: "images/utg.gif" },
    { name: "FutureWorks", logo: "images/greenup.png" },
    { name: "Nexus Group", logo: "images/mfw.png" },
  ];

  // Duplicate clients for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];

  return (
    <section id="clients" className="py-20 px-4 bg-white overflow-hidden">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Trusted by <span className="bg-gradient-to-r from-[#F26241] to-[#E78723] bg-clip-text text-transparent font-aref">Leading Brands</span>
          </h2>
          <p className="text-xl text-gray-600">
            We've partnered with amazing companies to bring their visions to life
          </p>
        </div>

        {/* Moving Banner */}
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          <div className="flex overflow-hidden">
            <div className="flex animate-scroll gap-8 py-8">
              {duplicatedClients.map((client, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center w-48 h-24 px-6 py-4 rounded-xl border border-gray-200 bg-white hover:border-orange-300 hover:shadow-lg transition-all duration-300 group flex-shrink-0"
                >
                  <ImageWithFallback
                    src={client.logo}
                    alt={client.name}
                    className="w-full h-full object-contain grayscale hover:grayscale-0 group-hover:scale-110 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
            <div className="flex animate-scroll gap-8 py-8" aria-hidden="true">
              {duplicatedClients.map((client, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="flex items-center justify-center w-48 h-24 px-6 py-4 rounded-xl border border-gray-200 bg-white hover:border-orange-300 hover:shadow-lg transition-all duration-300 group flex-shrink-0"
                >
                  <ImageWithFallback
                    src={client.logo}
                    alt={client.name}
                    className="w-full h-full object-contain grayscale hover:grayscale-0 group-hover:scale-110 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4 font-aref text-lg">Want to join our list of successful clients?</p>
          <button className="bg-gradient-to-r from-[#F26241] to-[#E78723] text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all">
            Let's Work Together
          </button>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
