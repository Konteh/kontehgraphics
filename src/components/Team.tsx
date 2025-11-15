import { Linkedin, Twitter, Instagram } from "lucide-react";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Team() {
  const teamMembers = [
    {
      name: "Ebrima Konteh",
      role: "Creative Director & Founder",
      image: "images/danso-kg.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/ebrima-konteh-89b47b1aa/",
        twitter: "https://x.com/konteh_gm?t=qnbhXB72wVgmIrb_etEZRw&s=09",
        instagram: "https://www.instagram.com/konteh.gm?igsh=bGo0aXQya3Ficmh0",
      },
    },
    {
      name: "Mamadi Fatty",
      role: "OPerations and lead Designer",
      image: "images/webcontent/madiba_team.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Mama Marong",
      role: "Lead Designer",
      image: "images/webcontent/mama_team.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Alieu Camara",
      role: "Digital Marketing Manager",
      image: "images/webcontent/danso-kg.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Isha Bojang",
      role: "Photography Director",
      image: "images/webcontent/isha_team.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Awa Kujabi",
      role: "Video Production Lead",
      image: "images/webcontent/awa_team.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Sorie Turay",
      role: "Senior Web Developer",
      image: "images/danso-kg.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Isatu Mansaray",
      role: "Graphic Design Specialist",
      image: "images/danso-kg.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
  ];

  return (
    <section id="team" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Meet Our <span className="bg-gradient-to-r from-[#F26241] to-[#E78723] bg-clip-text text-transparent font-aref">Creative Team</span>
          </h2>
          <p className="text-xl text-gray-600">
            Talented professionals dedicated to bringing your vision to life
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 bg-white"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden rounded-t-lg">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Social Links - Always visible on mobile, appear on hover on desktop */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0">
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-lg hover:bg-gradient-to-r hover:from-[#F26241] hover:to-[#E78723] hover:text-white transition-all"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-lg hover:bg-gradient-to-r hover:from-[#F26241] hover:to-[#E78723] hover:text-white transition-all"
                  >
                    <Twitter size={18} />
                  </a>
                  <a
                    href={member.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-lg hover:bg-gradient-to-r hover:from-[#F26241] hover:to-[#E78723] hover:text-white transition-all"
                  >
                    <Instagram size={18} />
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="p-6 text-center">
                <h3 className="text-xl text-gray-900 mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
