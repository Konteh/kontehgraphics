import { Linkedin, Twitter, Instagram, } from "lucide-react";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Team() {
  const teamMembers = [
    {
      name: "Ebrima Konteh",
      role: "Creative Director & Co-Founder",
      image: "images/webcontent/konteh_team.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/ebrima-konteh-89b47b1aa/",
        twitter: "https://x.com/konteh_gm?t=qnbhXB72wVgmIrb_etEZRw&s=09",
        instagram: "https://www.instagram.com/konteh.gm?igsh=bGo0aXQya3Ficmh0",
      },
    },
    {
      name: "Mamadi Fatty",
      role: "Senior Visual Designer",
      image: "images/webcontent/madiba_team.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/mamadi-fatty-5a302a270?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
        twitter: "https://x.com/madibaphati02?s=21",
        instagram: "https://www.instagram.com/madiba_phati?igsh=MTBhb3c4cXZ1Z29qZA%3D%3D&utm_source=qr",
      },
    },
    {
      name: "Mama Marong",
      role: "Video Production Lead",
      image: "images/webcontent/mama_team.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/mama-marong-46950a396?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        twitter: "#",
        instagram: "https://www.instagram.com/marounzgal?igsh=eDJxZWM1dzYzdDBs&utm_source=qr",
      },
    },
    {
      name: "Alieu Camara",
      role: "Business Development Lead",
      image: "images/webcontent/alieu_team.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/alieu-camara-3a26a12a9?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        twitter: "#",
        instagram: "https://www.instagram.com/alieu_04?igsh=MXc1dWd1ejZvZmNrZQ==",
      },
    },
    {
      name: "Isha Bojang",
      role: "Social Media Manager",
      image: "images/webcontent/isha_team.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/isha-bojang-a6528b307?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        twitter: "#",
        instagram: "https://www.instagram.com/_ishabojang?igsh=andxMHk5N2c5NmR6&utm_source=qr",
      },
    },
    {
      name: "Awa Kujabi",
      role: "Photogragher",
      image: "images/webcontent/awa_team.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/awa-kujabi-a997b5399?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        twitter: "#",
        instagram: "https://www.instagram.com/kujabi7215?igsh=MTE0bWNuNW9sbXY1cw%3D%3D&utm_source=qr",
      },
    },
    {
      name: "Amadou Bailo Bah",
      role: "Senior Web Developer",
      image: "images/webcontent/bailo_team.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Fatoumatta Danso",
      role: "Communications Strategist",
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
                  {/* <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-lg hover:bg-gradient-to-r hover:from-[#F26241] hover:to-[#E78723] hover:text-white transition-all"
                  >
                    <Twitter size={18} />
                  </a> */}
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
