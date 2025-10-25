import { MessageCircle } from "lucide-react";
import { useState } from "react";

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  
  const whatsappNumber = "5491153441139"; // Número de ejemplo Argentina (cambiar por el real)
  const message = "Hola! Me interesa conocer más sobre sus servicios de seguridad e higiene laboral.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center space-x-3 px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
          style={{ backgroundColor: '#25D366' }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <MessageCircle size={24} color="white" />
          
          {/* Expandable text */}
          <span 
            className={`text-white font-medium whitespace-nowrap transition-all duration-300 overflow-hidden ${
              isHovered ? 'max-w-xs opacity-100' : 'max-w-0 opacity-0'
            }`}
          >
            ¡Chateá con nosotros!
          </span>
        </a>
      </div>

      {/* Pulsing animation effect */}
      <div className="fixed bottom-6 right-6 z-40">
        <div 
          className="w-14 h-14 rounded-full animate-ping"
          style={{ backgroundColor: '#25D366', opacity: 0.3 }}
        ></div>
      </div>
    </>
  );
}