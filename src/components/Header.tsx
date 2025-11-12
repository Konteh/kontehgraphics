import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Team", href: "#team" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2">
            {/* <div className="w-10 h-10 bg-gradient-to-br from-[#F26241] to-[#E78723] rounded-lg flex items-center justify-center">
              <span className="text-white">K</span>
            </div> */}
            {/* <span className="text-gray-900">Konteh Graphics</span> */}
              <img 
                src="/images/kglogo.png" 
                alt="Konteh Graphics Logo" 
                style={{ height: "40px", width: "auto" }}
              />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-[#F26241] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button className="bg-gradient-to-r from-[#F26241] to-[#E78723] text-white">
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-[#F26241] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button className="bg-gradient-to-r from-[#F26241] to-[#E78723] text-white w-full">
              Get Started
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
