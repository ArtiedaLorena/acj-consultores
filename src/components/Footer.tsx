import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import logo from "./images/logo_acj.png";

export function Footer() {
  const socialLinks = [
    {
      icon: Facebook,
      href: "https://facebook.com/acjconsultores",
      label: "Facebook",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/acjconsultores",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/company/acjconsultores",
      label: "LinkedIn",
    },
  ];

  const quickLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Servicios", href: "#servicios" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Clientes", href: "#contacto" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <footer style={{ backgroundColor: "#0D0D0D" }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="ACJ Consultores" className="h-8 w-auto" />
              <h3 className="text-xl font-bold" style={{ color: "#8DBF69" }}>
                Consultores
              </h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Líderes en consultoría de seguridad e higiene laboral. Protegemos
              a tu equipo y optimizamos tu operación.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200"
                    style={{ backgroundColor: "#A6A6A6" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#8DBF69";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#6F7372";
                    }}
                    aria-label={social.label}
                  >
                    <IconComponent size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: "#24733F" }}>
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 transition-colors duration-200 text-sm"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#8DBF69";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#d1d5db";
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: "#24733F" }}>
              Contacto
            </h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin
                  size={14}
                  className="mt-1 flex-shrink-0"
                  style={{ color: "#8DBF69" }}
                />
                <div className="text-gray-300 text-sm">
                  <p>Av. Alicia Moreau de Justo 740</p>
                  <p>Piso 3 Ofic.1 - (C1107AAP)</p>
                  <p>CABA, Buenos Aires, Argentina</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Phone size={14} style={{ color: "#8DBF69" }} />
                <a
                  href="tel:+541141234567"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  +54 11-5344-1139
                </a>
              </div>

              <div className="flex items-center space-x-2">
                <Mail size={14} style={{ color: "#8DBF69" }} />
                <a
                  href="mailto:info@acjconsultores.com.ar"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  info@acjconsultores.com.ar
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 ACJ Consultores. Todos los derechos reservados.
            </p>
            <div className="text-gray-400 text-sm">
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
