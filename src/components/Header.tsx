import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import logo from "./images/5kDgfW4Q.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Servicios", href: "#servicios" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Clientes", href: "#clientes" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img 
                src={logo} 
                alt="ACJ Consultores" 
                className="h-10 w-auto"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="transition-colors duration-200"
                style={{ color: '#6F7372' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#027333';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#6F7372';
                }}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              className="text-white border-0"
              style={{ backgroundColor: '#027333' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#8DBF69';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#027333';
              }}
            >
              Solicitar Consulta
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 transition-colors duration-200"
                  style={{ color: '#6F7372' }}
                  onClick={() => setIsMenuOpen(false)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#027333';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#6F7372';
                  }}
                >
                  {item.name}
                </a>
              ))}
              <Button 
                className="mx-3 mt-4 text-white border-0"
                style={{ backgroundColor: '#027333' }}
              >
                Solicitar Consulta
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}