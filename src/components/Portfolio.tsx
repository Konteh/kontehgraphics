import { useState } from "react";
import { ExternalLink, Instagram, Linkedin } from "lucide-react";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

type Category = "All" | "Branding" | "Photography" | "Videography" | "Design" | "Web";

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const projects = [
    {
      title: "modempay Brand Identity",
      category: "Branding",
      image: "images/brandingModem.jpg",
      link: "#",
      icon: "linkedin",
    },
    {
      title: "Product Photography Campaign",
      category: "Photography",
      image: "images/webcontent/wally.jpg",
      link: "https://www.instagram.com/kontehgraphics?igsh=Z2JpMnExempyYzdn",
      icon: "instagram",
    },
    {
      title: "Video production for High Level Workshop on SDG 6 Capacity Development",
      category: "Videography",
      image: "images/sdg.jpeg",
      link: "#",
      icon: "external",
    },
    {
      title: "Modern UI/UX Design",
      category: "Design",
      image: "images/webcontent/ummer.jpg",
      link: "#",
      icon: "linkedin",
    },
    {
      title: "Gomindz Official Website",
      category: "Web",
      image: "images/webcontent/gomindweb.jpg",
      link: "https://gomindz.gm",
      icon: "external",
    },
    {
      title: "Branding for LSA WEEK 5.0",
      category: "Branding",
      image: "images/lsabrand.png",
      link: "#",
      icon: "instagram",
    },
    {
      title: "Fashion Photography Series",
      category: "Photography",
      image: "https://images.pexels.com/photos/34708696/pexels-photo-34708696.jpeg",
      link: "https://www.instagram.com/kontehgraphics?igsh=Z2JpMnExempyYzdn",
      icon: "instagram",
    },
    {
      title: "Data Analytics traning conducted by Gomindz for MOPS",
      category: "Videography",
      image: "images/mof.jpeg",
      link: "#",
      icon: "external",
    },
    {
      title: "Social Media Graphics",
      category: "Design",
      image: "images/webcontent/modem.jpg",
      link: "#",
      icon: "linkedin",
    },
    {
      title: "Gomindz Academy Website",
      category: "Web",
      image: "images/webcontent/acaemygomindz.jpg",
      link: "https://academy.gomindz.gm/",
      icon: "external",
    },
    {
      title: "Logo Design Collection",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGRlc2lnbnxlbnwxfHx8fDE3NjI5MzI2OTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      link: "#",
      icon: "linkedin",
    },
    {
      title: "Event Photography",
      category: "Photography",
      image: "images/tendaba.jpg",
      link: "https://www.instagram.com/kontehgraphics?igsh=Z2JpMnExempyYzdn",
      icon: "instagram",
    },
  ];

  const categories: Category[] = ["All", "Branding", "Photography", "Videography", "Design", "Web"];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "linkedin":
        return <Linkedin size={20} />;
      case "instagram":
        return <Instagram size={20} />;
      default:
        return <ExternalLink size={20} />;
    }
  };

  return (
    <section id="portfolio" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-[#F26241] to-[#E78723] bg-clip-text text-transparent font-aref">Featured Projects</span>
          </h2>
          <p className="text-xl text-gray-600">
            Explore our latest work and see how we bring creative visions to life
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-[#F26241] to-[#E78723] text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 bg-white"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Project Title & Link - Appear on hover */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <h3 className="text-white text-xl mb-4 text-center px-4">{project.title}</h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gradient-to-r from-[#F26241] to-[#E78723] text-white rounded-full hover:scale-110 transition-transform"
                  >
                    {getIcon(project.icon)}
                  </a>
                </div>
              </div>

              {/* Category Badge */}
              <div className="p-6">
                <span className="inline-block px-4 py-1 bg-gradient-to-r from-[#F26241] to-[#E78723] text-white rounded-full text-sm">
                  {project.category}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
