import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "./images/lo_acj.jpeg";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Servicios", href: "#servicios" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Clientes", href: "#clientes" },
    { name: "Contacto", href: "#contacto" },
  ];

  // Maneja la navegación suave incluso desde otras páginas
  const handleNavClick = (href: string) => {
    const sectionId = href.replace("#", "");
    setIsMenuOpen(false);

    if (location.pathname !== "/") {
      // Si no estamos en la página principal, navegamos a /
      navigate("/");
      setTimeout(() => {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 400);
    } else {
      // Si ya estamos en la página principal
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => navigate("/")}>
            <img src={logo} alt="ACJ Consultores" className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="transition-colors duration-200 bg-transparent border-none cursor-pointer"
                style={{ color: "#6F7372" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#027333";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#6F7372";
                }}
              >
                {item.name}
              </button>
            ))}
          </nav>

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
            <nav className="flex flex-col items-center space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="block px-3 py-2 transition-colors duration-200 bg-transparent border-none cursor-pointer"
                  style={{ color: "#6F7372" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#027333";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#6F7372";
                  }}
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
