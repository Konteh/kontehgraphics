import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            {/* <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#F26241] to-[#E78723] rounded-lg flex items-center justify-center">
                <span className="text-white">K</span>
              </div>
              <span className="text-white">Konteh Graphics</span>
            </div> */}

            <a href="#home" className="flex items-center space-x-2">
            {/* <div className="w-10 h-10 bg-gradient-to-br from-[#F26241] to-[#E78723] rounded-lg flex items-center justify-center">
              <span className="text-white">K</span>
            </div> */}
            {/* <span className="text-gray-900">Konteh Graphics</span> */}
              <img 
                src="/images/kglogo2.png" 
                alt="Konteh Graphics Logo" 
                style={{ height: "50px", width: "auto" }}
              />
          </a>


            <p className="text-gray-400">
              Transforming brands through creative excellence and innovative design solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white mb-4 font-aref">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Branding</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Digital Marketing</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Photography</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Videography</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Graphic Design</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4 font-aref">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#clients" className="text-gray-400 hover:text-white transition-colors">Clients</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white mb-4 font-aref">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">kontehgraphics@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">+220 3344167</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">13 Kairaba Avenue, Kanifing. Banjul, The Gambia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {currentYear} Konteh Graphics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
