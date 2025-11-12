import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useEffect, useState } from "react";

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  const portfolioImages = [
    {
      src: "/images/brandingModem.jpg",
      alt: "Branding Design",
    },
    {
      src: "/images/konteh1.png",
      alt: "Website Design",
    },
    {
      src: "/images/danso-kg.jpg",
      alt: "Graphic Design Portfolio",
    },
    {
     src: "/images/chichi-kg.jpg",
      alt: "Marketing Campaign",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % portfolioImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [portfolioImages.length]);

  return (
    <section id="home" className="pt-32 pb-20 px-4 overflow-hidden relative">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F26241]/5 via-transparent to-[#E78723]/5 pointer-events-none"></div>
      
      {/* Geometric Symmetry Pattern Background */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="geometric-pattern" width="120" height="120" patternUnits="userSpaceOnUse">
              {/* Center diamond shape */}
              <polygon points="60,30 80,60 60,90 40,60" fill="none" stroke="#F26241" strokeWidth="1" />
              
              {/* Diagonal zigzag lines */}
              <polyline points="0,0 20,30 40,10 60,40 80,20 100,50 120,30" fill="none" stroke="#E78723" strokeWidth="0.8" />
              <polyline points="0,60 20,90 40,70 60,100 80,80 100,110 120,90" fill="none" stroke="#E78723" strokeWidth="0.8" />
              
              {/* Mirrored diagonal zigzag */}
              <polyline points="0,30 20,0 40,20 60,0 80,20 100,0 120,20" fill="none" stroke="#F26241" strokeWidth="0.8" />
              <polyline points="0,90 20,60 40,80 60,60 80,80 100,60 120,80" fill="none" stroke="#F26241" strokeWidth="0.8" />
              
              {/* Angular geometric shapes in corners */}
              <polygon points="0,0 15,0 0,15" fill="#F26241" opacity="0.3" />
              <polygon points="120,0 105,0 120,15" fill="#E78723" opacity="0.3" />
              <polygon points="0,120 15,120 0,105" fill="#E78723" opacity="0.3" />
              <polygon points="120,120 105,120 120,105" fill="#F26241" opacity="0.3" />
              
              {/* Diagonal hexagons */}
              <polygon points="30,60 40,50 50,50 60,60 50,70 40,70" fill="none" stroke="#F26241" strokeWidth="0.8" />
              <polygon points="70,60 80,50 90,50 100,60 90,70 80,70" fill="none" stroke="#E78723" strokeWidth="0.8" />
              
              {/* Diagonal cross patterns */}
              <line x1="20" y1="20" x2="30" y2="30" stroke="#F26241" strokeWidth="1.5" />
              <line x1="30" y1="20" x2="20" y2="30" stroke="#F26241" strokeWidth="1.5" />
              
              <line x1="90" y1="20" x2="100" y2="30" stroke="#E78723" strokeWidth="1.5" />
              <line x1="100" y1="20" x2="90" y2="30" stroke="#E78723" strokeWidth="1.5" />
              
              <line x1="20" y1="90" x2="30" y2="100" stroke="#E78723" strokeWidth="1.5" />
              <line x1="30" y1="90" x2="20" y2="100" stroke="#E78723" strokeWidth="1.5" />
              
              <line x1="90" y1="90" x2="100" y2="100" stroke="#F26241" strokeWidth="1.5" />
              <line x1="100" y1="90" x2="90" y2="100" stroke="#F26241" strokeWidth="1.5" />
              
              {/* Decorative dots */}
              <circle cx="25" cy="60" r="2" fill="#F26241" />
              <circle cx="95" cy="60" r="2" fill="#E78723" />
              <circle cx="60" cy="25" r="2" fill="#E78723" />
              <circle cx="60" cy="95" r="2" fill="#F26241" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#geometric-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full">
              <Sparkles size={16} />
              <span className="text-sm font-aref">Creative Agency</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-gray-900">
              Transform Your
              <span className="block bg-gradient-to-r from-[#F26241] to-[#E78723] bg-clip-text text-transparent">
                Brand Vision
              </span>
              Into Reality
            </h1>
            
            <p className="text-xl text-gray-600 max-w-xl">
              We're Konteh Graphics, a full-service creative agency specializing in branding, 
              digital marketing, and stunning visual content that elevates your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-[#F26241] to-[#E78723] text-white px-8 py-6">
                Start Your Project
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button variant="outline" className="px-8 py-6 border-gray-300">
                View Our Work
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <div className="text-3xl text-gray-900">150+</div>
                <div className="text-gray-600">Projects Done</div>
              </div>
              <div>
                <div className="text-3xl text-gray-900">5+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl text-gray-900">3+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Content - Stacked Images */}
          <div className="relative h-[600px] flex items-center justify-center perspective-1000">
            <div className="relative w-full max-w-xl h-[500px]">
              {portfolioImages.map((image, index) => {
                const position = (index - activeIndex + portfolioImages.length) % portfolioImages.length;
                
                return (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out`}
                    style={{
                      transform: `
                        translateX(${position * 20}px) 
                        translateY(${position * -20}px) 
                        rotate(${position * 3}deg)
                        scale(${1 - position * 0.05})
                      `,
                      zIndex: portfolioImages.length - position,
                      opacity: position < 3 ? 1 : 0,
                    }}
                  >
                    <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-white border-8 border-white">
                      <ImageWithFallback
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-10 right-10 w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-30 -z-10"></div>
            <div className="absolute bottom-10 left-10 w-72 h-72 bg-pink-300 rounded-full blur-3xl opacity-30 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
